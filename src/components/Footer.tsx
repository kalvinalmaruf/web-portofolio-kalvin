const footerLinks = [
  {
    title: "Navigasi",
    links: [
      { label: "Tentang", href: "#about" },
      { label: "Skill", href: "#skills" },
      { label: "Project", href: "#projects" },
      { label: "Kontak", href: "#contact" },
    ],
  },
  {
    title: "Sosial",
    links: [
      { label: "GitHub", href: "https://github.com/almarufkalvin72" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kalvinalmaruff" },
      { label: "Email", href: "mailto:almarufkalvin72@gmail.com" },
      { label: "WhatsApp", href: "https://wa.me/6282250526055" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -right-20 top-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a
              href="#"
              className="text-2xl font-extrabold tracking-tight text-cyan-400"
            >
              Kalvin<span className="text-white">.</span>
            </a>

            <p className="mt-4 max-w-md leading-7 text-slate-400">
              Web portofolio pribadi Kalvin Al Ma&apos;ruf, lulusan Informatika
              yang sedang mengembangkan kemampuan di bidang web development dan
              sistem informasi.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300">
                Next.js
              </span>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300">
                React
              </span>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300">
                Tailwind CSS
              </span>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                {group.title}
              </h3>

              <div className="mt-5 grid gap-3">
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group inline-flex w-fit items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
                  >
                    <span className="h-px w-0 bg-cyan-300 transition-all group-hover:w-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row md:text-left">
            <p>
              © 2026{" "}
              <span className="font-semibold text-slate-300">
                Kalvin Al Ma&apos;ruf
              </span>
              . All rights reserved.
            </p>

            <p>
              Built with <span className="text-cyan-400">Next.js</span>,{" "}
              <span className="text-cyan-400">TypeScript</span>, and{" "}
              <span className="text-cyan-400">Tailwind CSS</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}