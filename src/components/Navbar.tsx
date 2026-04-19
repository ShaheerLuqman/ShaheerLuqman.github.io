"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#3f63ad]/15 shadow-sm shadow-[#3f63ad]/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — scroll to top without changing URL to #hero */}
        <button
          type="button"
          onClick={() => {
            setMenuOpen(false);
            window.history.replaceState(null, "", window.location.pathname + window.location.search);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-mono text-[#3f63ad] font-bold text-lg tracking-tight hover:text-[#2e4a84] transition-colors bg-transparent border-0 cursor-pointer rounded-md py-2.5 px-3 min-h-[44px] min-w-[44px] inline-flex items-center justify-center -ml-1"
          aria-label="Back to top"
        >
          MSL<span className="text-[#98b3d9]">.</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex items-center justify-center text-sm text-[#5a6a8a] hover:text-[#3f63ad] transition-colors font-mono tracking-wide rounded-md py-2.5 px-3 min-h-[44px]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1zDVswAt8YAlNMjtp9UqqeGmSqsbNM4OM"
          className="hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] border border-[#3f63ad] text-[#3f63ad] text-sm font-mono rounded-md hover:bg-[#3f63ad] hover:text-white transition-colors duration-200"
        >
          Resume
        </a>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col items-center justify-center gap-1.5 min-h-[44px] min-w-[44px] p-3 -mr-1 rounded-md"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-[#3f63ad] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#3f63ad] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#3f63ad] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-[#3f63ad]/15 px-6 py-4 shadow-sm">
          <ul className="flex flex-col items-stretch gap-1 text-center max-w-xs mx-auto w-full">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[48px] w-full items-center justify-center rounded-md px-4 py-3 text-[#5a6a8a] hover:text-[#3f63ad] hover:bg-[#3f63ad]/5 transition-colors font-mono text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://drive.google.com/uc?export=download&id=1zDVswAt8YAlNMjtp9UqqeGmSqsbNM4OM"
                className="flex min-h-[48px] w-full items-center justify-center rounded-md border border-[#3f63ad] px-5 py-3 text-[#3f63ad] text-sm font-mono hover:bg-[#3f63ad] hover:text-white transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
