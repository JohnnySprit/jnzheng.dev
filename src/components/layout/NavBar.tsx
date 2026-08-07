"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const LINKS = [
  { href: "/#work", label: "work" },
  { href: "/#projects", label: "projects" },
  { href: "/#interests", label: "interests" },
];

export function Navbar() {
  return (
    <nav className="hidden md:block sticky top-12 self-start space-y-8 text-right text-sm text-[var(--text-muted)]">
    <Link href="/" className="block w-full hover:opacity-60">🐵</Link>
      {LINKS.map((link) => (
        <a key={link.href} href={link.href} className="block w-full hover:text-[var(--text-primary)]">
          {link.label}
        </a>
      ))}
      <ThemeToggle />
    </nav>
  );
}
