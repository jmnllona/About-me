import nodemailer from "nodemailer";
const emailUser = process.env["SMTP_USER"];
const emailPass = process.env["SMTP_PASS"];
if (!emailUser || !emailPass) {
    throw new Error("Missing email credentials.");
}
const transporter = nodemailer.createTransport({
    host: process.env["SMTP_HOST"],
    port: Number(process.env["SMTP_PORT"]),
    secure: process.env["SMTP_SECURE"] === "true",
    auth: {
        user: emailUser,
        pass: emailPass,
    },
});
export async function sendVerificationEmail(email, otp) {
    await transporter.sendMail({
        from: emailUser,
        to: email,
        subject: "Verify your email address",
        html: `
            <div style="font-family: Arial, sans-serif;">
                <h2>Email Verification</h2>
                <p>Use the following code to verify your email address:</p>
                <h1 style="letter-spacing: 6px;">${otp}</h1>
                <p>This code expires in 10 minutes.</p>
                <p>If you didn't request this, you can ignore this email.</p>
            </div>
        `,
    });
}
//# sourceMappingURL=email.service.js.map