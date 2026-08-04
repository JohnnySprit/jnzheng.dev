"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const LINKS = [
  { href: "#work", label: "work" },
  { href: "#projects", label: "projects" },
  { href: "#interests", label: "interests" },
];

export function Navbar() {
  return (
    <nav className="fixed left-1/2 z-50 max-w-[calc(100%-1rem)]  -translate-x-1/2 sm:top-8">
      <div className="flex items-center gap-3 border-b border-[var(--border)] drop-shadow-sm px-3 py-1.5 sm:gap-6 sm:px-6 sm:py-1">
        <Link href="/" className="hover:opacity-60 active:text-[var(--accent)]">🐵</Link>
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 text-[13px] text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:opacity-60 active:text-[var(--accent)] sm:text-base"
          >
            {link.label}
          </Link>
        ))}
        <div className="flex shrink-0 items-center">
          <ThemeToggle/>
        </div>
      </div>
    </nav>
  );
}
