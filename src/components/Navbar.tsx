"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Pendidikan", href: "#experience" },
  { label: "Skill", href: "#skills" },
  { label: "Layanan", href: "#services" },
  { label: "Project", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (const link of navLinks) {
        const section = document.querySelector(link.href);

        if (section) {
          const element = section as HTMLElement;
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.href);
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto max-w-6xl rounded-full border border-white/10 bg-slate-950/70 px-5 py-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <a
            href="#"
            onClick={closeMenu}
            className="group inline-flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300 shadow-lg shadow-cyan-950/30 transition group-hover:border-cyan-300 group-hover:bg-cyan-400/20">
              K
            </span>

            <span className="text-lg font-extrabold tracking-tight text-white">
              Kalvin
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                .
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-950/30"
                      : "text-slate-300 hover:bg-white/10 hover:text-cyan-300"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href="/cv-kalvin.pdf"
              download
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
            >
              Download CV
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-xl shadow-cyan-950/20 md:hidden">
            <div className="grid gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-cyan-400 text-slate-950"
                        : "text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="/cv-kalvin.pdf"
                download
                onClick={closeMenu}
                className="mt-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}