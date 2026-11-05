import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Turnstile from "../components/Turnstile";
import { useAuth } from "../auth/AuthContext";

export default function Register() {
      const { register } = useAuth();
      const navigate = useNavigate();
      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
      const [error, setError] = useState("");
      const [busy, setBusy] = useState(false);
      async function submit(event: React.FormEvent<HTMLFormElement>) {
            event.preventDefault();
            if (!turnstileToken) return setError("Please complete the security check.");
            setBusy(true);
            setError("");
            try {
                  const result = await register(username, email, password, turnstileToken);

                  if (result.requiresVerification) {
                        navigate("/verify-email", {
                              state: { email: result.email },
                        });
                  }
            } catch (cause) {
                  setError(cause instanceof Error ? cause.message : "Unable to create your account.");
                  setTurnstileToken(null);
            } finally {
                  setBusy(false);
            }
      }
      return (
            <main className="mx-auto flex min-h-screen max-w-md items-center px-6">
                  <form onSubmit={submit} className="w-full rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
                        <h1 className="text-2xl font-semibold text-stone-900">Create account</h1>
                        <p className="mt-2 text-sm text-stone-600">A password needs at least 12 characters.</p>
                        <label className="mt-6 block text-sm font-medium">
                              Username
                              <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value.toLowerCase())}
                                    autoComplete="username"
                                    pattern="[a-z0-9_]{3,32}"
                                    required
                                    className="mt-1 w-full rounded-lg border p-2"
                              />
                              <span className="mt-1 block text-xs text-stone-500">
                                    3–32 lowercase letters, numbers, or underscores.
                              </span>
                        </label>
                        <label className="mt-4 block text-sm font-medium">
                              Email
                              <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="mt-1 w-full rounded-lg border p-2"
                              />
                        </label>
                        <label className="mt-4 block text-sm font-medium">
                              Password
                              <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    minLength={12}
                                    autoComplete="new-password"
                                    required
                                    className="mt-1 w-full rounded-lg border p-2"
                              />
                        </label>
                        <div className="mt-5">
                              <Turnstile onToken={setTurnstileToken} />
                        </div>
                        {error && (
                              <p role="alert" className="mt-4 text-sm text-red-600">
                                    {error}
                              </p>
                        )}
                        <button
                              disabled={busy || !turnstileToken}
                              className="mt-6 w-full rounded-lg bg-stone-900 py-2 text-white disabled:opacity-50">
                              {busy ? "Creating account…" : "Create account"}
                        </button>
                        <p className="mt-5 text-center text-sm text-stone-600">
                              Already have an account?{" "}
                              <Link className="font-medium text-stone-900 underline" to="/login">
                                    Sign in
                              </Link>
                        </p>
                  </form>
            </main>
      );
}
