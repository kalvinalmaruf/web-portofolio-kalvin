export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
        <a
          href="#"
          className="text-xl font-extrabold tracking-tight text-cyan-400"
        >
          Kalvin<span className="text-white">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-cyan-400">
            Tentang
          </a>
          <a href="#skills" className="transition hover:text-cyan-400">
            Skill
          </a>
          <a href="#projects" className="transition hover:text-cyan-400">
            Project
          </a>
          <a href="#contact" className="transition hover:text-cyan-400">
            Kontak
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-cyan-400/40 px-4 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 md:hidden"
        >
          Kontak
        </a>
      </div>
    </nav>
  );
}