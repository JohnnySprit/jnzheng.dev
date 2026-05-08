"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const LINKS = [
    { href: "#about", label: "about" },
    { href: "#skills", label: "skills" },
    { href: "#projects", label: "projects" },
    { href: "#interests", label: "interests" },
];

export function Navbar() {
    return (
        <>
            <nav className="fixed left-1/2 top-3 z-50 -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--bg-tertiary)] shadow-[0_2px_16px_var(--shadow-light)] backdrop-blur-[10px]">
                <div className="flex items-center gap-7 px-6 py-1">
                    {LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[16px] text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--accent)]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>

            <div className="fixed right-[18px] top-[18px] z-50">
                <ThemeToggle />
            </div>
        </>
    );
}