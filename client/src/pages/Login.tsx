import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Turnstile from "../components/Turnstile";
import { useAuth } from "../auth/AuthContext";
import { useToast } from "../context/ToastContext";

export default function Login() {
      const { login } = useAuth();
          const { showToast } = useToast();
      const navigate = useNavigate();
      const [identifier, setIdentifier] = useState("");
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
                const result =  await login(identifier, password, turnstileToken);
                  showToast(result.message);
                  navigate("/");
            } catch (cause) {
                  setError(cause instanceof Error ? cause.message : "Unable to sign in.");
                  setTurnstileToken(null);
            } finally {
                  setBusy(false);
            }
      }

      return (
            <main className="mx-auto flex min-h-screen max-w-md items-center px-6">
                  <form onSubmit={submit} className="w-full rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
                        <h1 className="text-2xl font-semibold text-stone-900">Sign in</h1>
                        <p className="mt-2 text-sm text-stone-600">Use your username or email and password.</p>
                        <label className="mt-6 block text-sm font-medium">
                              Username or email
                              <input
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    autoComplete="username"
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
                                    autoComplete="current-password"
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
                              {busy ? "Signing in…" : "Sign in"}
                        </button>
                        <p className="mt-5 text-center text-sm text-stone-600">
                              No account?{" "}
                              <Link className="font-medium text-stone-900 underline" to="/register">
                                    Create one
                              </Link>
                        </p>
                  </form>
            </main>
      );
}
