import argon2 from "argon2";
import type { Request, Response } from "express";
import { randomUUID,  randomInt, createHash,  timingSafeEqual } from "node:crypto";
import { z } from "zod";
import db from "../db.js";
import { verifyTurnstile } from "./turnstile.js";

import { sendVerificationEmail } from "../services/email.service.js";




const username = z.string().trim().toLowerCase().regex(/^[a-z0-9_]{3,32}$/, "Username must be 3–32 letters, numbers, or underscores.");
const password = z.string().min(12, "Password must be at least 12 characters.").max(128, "Password is too long.");

const registerSchema = z.object({
  username,
  email: z.string().trim().toLowerCase().email().max(254),
  password,
  turnstileToken: z.string().min(1, "Please complete the security check."),
});

const loginSchema = z.object({
  identifier: z.string().trim().min(3).max(254),
  password: z.string().min(1).max(128),
  turnstileToken: z.string().min(1, "Please complete the security check."),
});

const verifyEmailSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),

  otp: z.string()
    .trim()
    .length(6, "OTP must be exactly 6 digits.")
    .regex(/^\d{6}$/, "OTP must contain only numbers."),
});


function clientIp(request: Request): string | undefined {
  const forwarded = request.headers["x-forwarded-for"];
  return typeof forwarded === "string" ? forwarded.split(",")[0]?.trim() : request.ip;
}

function saveSession(request: Request): Promise<void> {
  return new Promise((resolve, reject) => request.session.save((error) => error ? reject(error) : resolve()));
}

function regenerateSession(request: Request): Promise<void> {
  return new Promise((resolve, reject) => request.session.regenerate((error) => error ? reject(error) : resolve()));
}

function publicUser(user: { id: string; username: string }) {
  return { id: user.id, username: user.username };
}

export function generateOTP() {
    const otp = randomInt(100000, 1000000).toString();

    const tokenHash = createHash("sha256")
        .update(otp)
        .digest("hex");

    return { otp, tokenHash };
}



export async function register(request: Request, response: Response) {
    const parsed = registerSchema.safeParse(request.body);

    if (!parsed.success) {
        return response.status(400).json({
            message: parsed.error.issues[0]?.message ?? "Invalid registration details."
        });
    }

    try {
        if (!await verifyTurnstile(parsed.data.turnstileToken, clientIp(request))) {
            return response.status(400).json({
                message: "Security check failed. Please try again."
            });
        }

        const passwordHash = await argon2.hash(parsed.data.password, {
            type: argon2.argon2id
        });

        const userId = randomUUID();

        // Generate OTP
        const { otp, tokenHash } = generateOTP();

        // OTP expiration: 10 minutes
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

        // Create account and verification record
        const client = await db.connect();

        try {
            await client.query("BEGIN");

            await client.query(
                `INSERT INTO users (id, username, email, password_hash, email_verified)
                 VALUES ($1, $2, $3, $4, FALSE)`,
                [userId, parsed.data.username, parsed.data.email, passwordHash]
            );

            await client.query(
                `INSERT INTO email_verifications (user_id, token_hash, expires_at)
                 VALUES ($1, $2, $3)`,
                [userId, tokenHash, expiresAt]
            );

            await client.query("COMMIT");

        } catch (error) {
            await client.query("ROLLBACK");
            throw error;
        } finally {
            client.release();
        }

        // Send OTP to email
        await sendVerificationEmail(parsed.data.email, otp);

        return response.status(201).json({
            message: "Account created successfully. Please verify your email.",
            email: parsed.data.email,
            requiresVerification: true
        });

    } catch (error) {
        if (isUniqueViolation(error)) {
            return response.status(409).json({
                message: "That username or email is already in use."
            });
        }

        console.error("Registration failed", error);

        return response.status(500).json({
            message: "Unable to create your account right now."
        });
    }
}

export async function login(request: Request, response: Response) {
  const parsed = loginSchema.safeParse(request.body);
  if (!parsed.success) return response.status(400).json({ message: parsed.error.issues[0]?.message ?? "Invalid login details." });

  try {
    if (!await verifyTurnstile(parsed.data.turnstileToken, clientIp(request))) {
      return response.status(400).json({ message: "Security check failed. Please try again." });
    }
 
    const identifier = parsed.data.identifier.toLowerCase();
    const result = await db.query<{ id: string; username: string; password_hash: string , email_verified: boolean}>(
      "SELECT id, username, password_hash , email_verified FROM users WHERE username = $1 OR email = $1 LIMIT 1",
      [identifier],
    );
    const user = result.rows[0];

     if (!user?.email_verified) {
        console.log("hello");
      return response.status(401).json({ message: "Invalid username/email or passwordd." });
     
    }


    if (!user || !await argon2.verify(user.password_hash, parsed.data.password)) {
        console.log("hello0");
      return response.status(401).json({ message: "Invalid username/email or passwordd." });
    }

    await regenerateSession(request);
    request.session.user = publicUser(user);
    await saveSession(request);
    return response.json({ message: "Login successfully", user: publicUser(user) });
  } catch (error) {
    console.error("Login failed", error);
    return response.status(500).json({ message: "Unable to sign in right now." });
  }
}

export function currentUser(request: Request, response: Response) {
  if (!request.session.user) return response.status(401).json({ message: "Not signed in." });
  return response.json({ user: request.session.user });
}

export function logout(request: Request, response: Response) {
  request.session.destroy((error) => {
    if (error) return response.status(500).json({ message: "Unable to sign out right now." });
    response.clearCookie("sid");
    return response.status(204).send();
  });
}

function isUniqueViolation(error: unknown): error is { code: string } {
  return typeof error === "object" && error !== null && "code" in error && error.code === "23505";
}



export async function verifyEmail(request: Request, response: Response) {
    const parsed = verifyEmailSchema.safeParse(request.body);

    if (!parsed.success) {
        return response.status(400).json({
            message: parsed.error.issues[0]?.message ?? "Invalid verification details."
        });
    }

    try {
        const { email, otp } = parsed.data;

        const result = await db.query(
            `SELECT
                users.id,
                users.username,
                email_verifications.token_hash,
                email_verifications.expires_at
             FROM users
             JOIN email_verifications
                ON users.id = email_verifications.user_id
             WHERE users.email = $1
               AND users.email_verified = FALSE`,
            [email]
        );

        const record = result.rows[0];

        if (!record) {
            return response.status(400).json({
                message: "Invalid or expired verification code."
            });
        }

        // Check expiration
        if (new Date(record.expires_at).getTime() <= Date.now()) {
            return response.status(400).json({
                message: "Verification code has expired. Please request a new one."
            });
        }

        // Hash submitted OTP
        const submittedHash = createHash("sha256")
            .update(otp)
            .digest();

        const storedHash = Buffer.from(record.token_hash, "hex");

        if (
            submittedHash.length !== storedHash.length ||
            !timingSafeEqual(submittedHash, storedHash)
        ) {
            return response.status(400).json({
                message: "Invalid or expired verification code."
            });
        }

        // Verify account and remove OTP
        const client = await db.connect();

        try {
            await client.query("BEGIN");

            const updated = await client.query(
                `UPDATE users
                 SET email_verified = TRUE
                 WHERE id = $1 AND email_verified = FALSE
                 RETURNING id, username`,
                [record.id]
            );

            if (!updated.rows[0]) {
                throw new Error("Account verification failed.");
            }

            await client.query(
                `DELETE FROM email_verifications
                 WHERE user_id = $1`,
                [record.id]
            );

            await client.query("COMMIT");

        } catch (error) {
            await client.query("ROLLBACK");
            throw error;
        } finally {
            client.release();
        }

        // Create authenticated session
        await regenerateSession(request);
        request.session.user = publicUser({
            id: record.id,
            username: record.username
        });

        await saveSession(request);

        return response.status(200).json({
            message: "Email verified successfully.",
        });

    } catch (error) {
        console.error("Email verification failed", error);

        return response.status(500).json({
            message: "Unable to verify your email right now."
        });
    }
}