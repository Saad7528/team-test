import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#080d1b]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="#home" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400 to-blue-600 text-xl font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 group-hover:scale-105">
            D
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            Diponkor<span className="text-cyan-400">.</span>
          </span>
        </Link>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact button */}
        <Link
          href="https://www.linkedin.com/in/diponkorroy21010504"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition duration-300 hover:border-cyan-300 hover:bg-cyan-400/20 sm:inline-flex"
        >
          Let&apos;s Connect ↗
        </Link>

        {/* Mobile contact icon */}
        <Link
          href="https://www.linkedin.com/in/diponkorroy21010504"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 text-lg text-cyan-300 transition hover:bg-cyan-400/10 sm:hidden"
        >
          ↗
        </Link>
      </nav>
    </header>
  );
}
