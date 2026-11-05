import { useEffect, useRef, useState } from "react";

type TurnstileApi = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window { turnstile?: TurnstileApi; }
}

type Props = { onToken: (token: string | null) => void };
const developmentSiteKey = "1x00000000000000000000AA";

export default function Turnstile({ onToken }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<string | undefined>(undefined);
  const [error, setError] = useState("");
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? (import.meta.env.DEV ? developmentSiteKey : "");

  useEffect(() => {
    if (!siteKey) {
      setError("Security check is not configured.");
      return;
    }

    const render = () => {
      if (!elementRef.current || !window.turnstile || widgetRef.current) return;
      widgetRef.current = window.turnstile.render(elementRef.current, {
        sitekey: siteKey,
        action: "auth",
        callback: (token: string) => onToken(token),
        "expired-callback": () => onToken(null),
        "error-callback": () => {
          setError("Security check could not load. Please try again.");
          onToken(null);
        },
      });
    };

    const existing = document.querySelector<HTMLScriptElement>('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"]');
    if (existing) {
      existing.addEventListener("load", render);
      render();
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.addEventListener("load", render);
      document.head.appendChild(script);
    }

    return () => {
      if (widgetRef.current && window.turnstile) window.turnstile.remove(widgetRef.current);
      widgetRef.current = undefined;
    };
  }, [onToken, siteKey]);

  return <div><div ref={elementRef} />{error && <p className="mt-2 text-sm text-red-600">{error}</p>}</div>;
}
