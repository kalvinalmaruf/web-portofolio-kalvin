"use client";

import { useState } from "react";

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Pendidikan", href: "#experience" },
  { label: "Skill", href: "#skills" },
  { label: "Project", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="flex items-center justify-between py-4">
          <a
            href="#"
            onClick={closeMenu}
            className="text-xl font-extrabold tracking-tight text-cyan-400"
          >
            Kalvin<span className="text-white">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <div className="rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-cyan-950/20">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/cv-kalvin.pdf"
                download
                onClick={closeMenu}
                className="mt-2 block rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}