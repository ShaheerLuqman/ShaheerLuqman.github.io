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
        {/* Logo */}
        <a href="#hero" className="font-mono text-[#3f63ad] font-bold text-lg tracking-tight hover:text-[#2e4a84] transition-colors">
          MSL<span className="text-[#98b3d9]">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#5a6a8a] hover:text-[#3f63ad] transition-colors font-mono tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1zDVswAt8YAlNMjtp9UqqeGmSqsbNM4OM"
          className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 border border-[#3f63ad] text-[#3f63ad] text-sm font-mono rounded hover:bg-[#3f63ad] hover:text-white transition-colors duration-200"
        >
          Resume
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
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
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[#5a6a8a] hover:text-[#3f63ad] transition-colors font-mono text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/uc?export=download&id=1zDVswAt8YAlNMjtp9UqqeGmSqsbNM4OM"
                className="inline-flex items-center px-4 py-1.5 border border-[#3f63ad] text-[#3f63ad] text-sm font-mono rounded hover:bg-[#3f63ad] hover:text-white transition-colors"
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
