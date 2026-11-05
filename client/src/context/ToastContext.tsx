
import { createContext, useContext, useEffect, useState } from "react";

type ToastContextType = {
    showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [message, setMessage] = useState("");

    function showToast(message: string) {
        setMessage(message);
    }

    useEffect(() => {
        if (!message) return;

        const timer = setTimeout(() => {
            setMessage("");
        }, 3000);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            {message && (
                <div className="fixed bottom-6 right-20 z-50 right move it below">
                    <div className="rounded-lg border border-stone-700 bg-amber-50 px-5 py-3 text-sm text-black shadow-lg">
                        {message}
                    </div>
                </div>
            )}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error("useToast must be used within ToastProvider");
    }

    return context;
}
