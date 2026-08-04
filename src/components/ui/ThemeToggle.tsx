"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        if (resolvedTheme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center transition-colors duration-200 hover:opacity-60 active:text-[var(--accent)] cursor-pointer"
            aria-label="Toggle theme"
        >
            {mounted && resolvedTheme === "dark" ? (
                <div className="text-lg">✴︎</div>
            ) : (
                <div className="text-lg">⏾</div>
            )}
        </button>
    );
}