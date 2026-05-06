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
            <nav className="fixed left-1/2 top-[12px] z-50 -translate-x-1/2 items-center rounded-full border border-[var(--border)] bg-[var(--bg-tertiary)] shadow-[0_2px_16px_var(--shadow-light)] backdrop-blur-[10px]">
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "28px",
                        padding: "4px 24px",
                    }}
                >
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

            <div
                style={{ position: "fixed", top: "18px", right: "18px" }}
            >
                <ThemeToggle />
            </div>
        </>
    );
}