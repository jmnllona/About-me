import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

type Theme = "light" | "dark";

type AppContextType = {
    theme: Theme;
    toggleTheme: () => void;
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

const AppContext = createContext<AppContextType | null>(null);

const THEME_KEY = "theme";

function getInitialTheme(): Theme {
    if (typeof window === "undefined") return "light";

    try {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === "light" || saved === "dark") return saved;
    } catch {
        // storage unavailable, fall through
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch {
            // ignore
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((t) => (t === "dark" ? "light" : "dark"));
    }, []);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((open) => !open);
    }, []);

    const value = useMemo<AppContextType>(
        () => ({ theme, toggleTheme, isMenuOpen, toggleMenu }),
        [theme, toggleTheme, isMenuOpen, toggleMenu]
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useApp must be used within AppProvider");
    }

    return context;
}
