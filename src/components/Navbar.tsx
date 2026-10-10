"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Saad", href: "/saad" },
  ];

  return (
    <header className="border-b border-zinc-800/80 backdrop-blur-md sticky top-0 z-50 bg-zinc-950/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white text-base shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
            S
          </div>
          <span className="font-semibold text-zinc-100 tracking-tight text-lg group-hover:text-white transition-colors">
            Team Workspace
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Login */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all duration-200 shadow-md shadow-white/10 active:scale-95"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
