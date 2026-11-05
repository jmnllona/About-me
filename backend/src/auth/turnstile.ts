type TurnstileResponse = {
  success: boolean;
  action?: string;
};

const testSecret = "1x0000000000000000000000000000000AA";

export async function verifyTurnstile(token: string, remoteIp?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY ??
    (process.env.NODE_ENV === "production" ? undefined : testSecret);

  if (!secret) {
    throw new Error("TURNSTILE_SECRET_KEY is required in production.");
  }

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
    signal: AbortSignal.timeout(5_000),
  });

  if (!response.ok) return false;
  const result = await response.json() as TurnstileResponse;
  return result.success && (result.action === undefined || result.action === "auth");
}
