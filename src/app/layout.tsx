import type { Metadata } from "next";
import "./globals.css";
import { Tinos, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "johnny zheng",
  description: "My personal website/developer portfolio",
};

const tinos = Tinos({ subsets: ["latin"], style: ["normal", "italic"], weight: ["400", "700"], variable: "--font-display" });
const manrope = Manrope({ subsets: ["latin"], style: ["normal"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${manrope.variable} min-h-full flex flex-col`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
