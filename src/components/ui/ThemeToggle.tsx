"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center transition-colors duration-200 hover:text-[var(--text-primary)] active:text-[var(--accent)] cursor-pointer"
            aria-label="Toggle theme"
        >
            <span className="relative inline-grid text-lg leading-none">
                <span className="col-start-1 row-start-1 dark:invisible" aria-hidden>
                    ⏾
                </span>
                <span className="col-start-1 row-start-1 invisible dark:visible" aria-hidden>
                    ✴︎
                </span>
            </span>
        </button>
    );
}
