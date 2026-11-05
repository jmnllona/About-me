import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { apiFetch } from "./api";

export type User = { id: string; username: string; email: string };
type registerResponse = { message: string; email: string; requiresVerification: boolean };

type AuthContextValue = {
      user: User | null;
      loading: boolean;
      login: (identifier: string, password: string, turnstileToken: string) => Promise<{ message: string }>;
      register: (
            username: string,
            email: string,
            password: string,
            turnstileToken: string,
      ) => Promise<registerResponse>;
      logout: () => Promise<void>;
      verifyEmail: (email: string, otp: string) => Promise<{ message: string }>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// async function responseBody(response: Response): Promise<{ message?: string; user?: User }> {
//       const body = (await response.json().catch(() => ({}))) as { message: string; user?: User };
//       if (!response.ok) throw new Error(body.message ?? "Something went wrong. Please try again.");
//       return body;
// }

export function AuthProvider({ children }: { children: ReactNode }) {
      const [user, setUser] = useState<User | null>(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            void (async () => {
                  try {
                        const response = await apiFetch("/api/auth/me", { method: "GET" });
                        if (response.ok) setUser(((await response.json()) as { user: User }).user);
                  } finally {
                        setLoading(false);
                  }
            })();
      }, []);

      const value = useMemo<AuthContextValue>(
            () => ({
                  user,
                  loading,
                  async login(identifier, password, turnstileToken) {
                        const response = await apiFetch("/api/auth/login", {
                              method: "POST",
                              body: JSON.stringify({ identifier, password, turnstileToken }),
                        });

                        const body = await response.json();
                        setUser(body.user ?? null);

                        if (!response.ok) throw new Error(body.message ?? "Something went wrong. Please try again.");

                        return body;
                  },
                  async register(username, email, password, turnstileToken): Promise<registerResponse> {
                        const response = await apiFetch("/api/auth/register", {
                              method: "POST",
                              body: JSON.stringify({ username, email, password, turnstileToken }),
                        });
                        const body = await response.json();

                        if (!response.ok) throw new Error(body.message ?? "Something went wrong. Please try again.");

                        return body;
                  },
                  async logout() {
                        const response = await apiFetch("/api/auth/logout", { method: "POST" });
                        if (!response.ok) throw new Error("Unable to sign out right now.");
                        setUser(null);
                  },
                  async verifyEmail(email: string, otp: string) {
                        const response = await apiFetch("/api/auth/verify", {
                              method: "POST",
                              body: JSON.stringify({ email, otp }),
                        });

                        const body = await response.json();

                        if (!response.ok) throw new Error(body.message ?? "Something went wrong. Please try again.");

                        return body;
                  },
            }),
            [loading, user],
      );

      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
      const context = useContext(AuthContext);
      if (!context) throw new Error("useAuth must be used inside AuthProvider.");
      return context;
}
