
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

import {useToast} from "../context/ToastContext";

export default function VerifyEmail() {
    const { verifyEmail } = useAuth();
    const { showToast } = useToast();

    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email;

    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleVerify() {
        setError("");

        if (otp.length !== 6) {
            setError("Please enter a valid 6-digit code.");
            return;
        }

        try {
            setLoading(true);

         const result = await verifyEmail(email, otp);
         showToast(result.message);


            navigate("/");
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Unable to verify your email."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-stone-900 p-6">
            <div className="w-full max-w-sm space-y-6 rounded-xl bg-stone-800 p-8">

                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-white">
                        Verify your email
                    </h1>

                    <p className="mt-2 text-sm text-stone-400">
                        Enter the 6-digit code sent to
                    </p>

                    <p className="text-sm text-white">{email}</p>
                </div>

                <div className="space-y-3">
                    <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                        placeholder="Enter OTP"
                        inputMode="numeric"
                        maxLength={6}
                        className="w-full rounded-lg border border-stone-600 bg-stone-900 p-3 text-center text-xl tracking-[0.5em] text-white outline-none focus:border-amber-500"
                    />

                    {error && (
                        <p className="text-sm text-red-400">{error}</p>
                    )}

                    <button
                        onClick={handleVerify}
                        disabled={loading || otp.length !== 6}
                        className="w-full rounded-lg bg-amber-500 p-3 font-medium text-stone-900 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {loading ? "Verifying..." : "Verify email"}
                    </button>
                </div>

            </div>
        </div>
    );
}
