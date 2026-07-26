"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#gear", label: "gear" },
];

export function Navbar() {
  return (
    <nav className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-lg -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--bg-tertiary)] shadow-[0_2px_16px_var(--shadow-light)] backdrop-blur-[10px] sm:top-4 sm:w-auto sm:max-w-none">
      <div className="flex items-center justify-between gap-2 px-4 py-1.5 sm:justify-center sm:gap-6 sm:px-6 sm:py-1">
        <div className="flex min-w-0 flex-1 items-center gap-3 overflow-x-auto scrollbar-none sm:flex-none sm:gap-6 sm:overflow-visible">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 text-sm text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--accent)] sm:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex shrink-0 items-center border-l border-[var(--border)] pl-3">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
