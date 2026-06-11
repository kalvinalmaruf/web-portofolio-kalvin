const footerLinks = [
  {
    title: "Navigasi",
    links: [
      { label: "Tentang", href: "#about" },
      { label: "Pendidikan", href: "#experience" },
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

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur md:p-8">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <a
                href="#"
                className="inline-flex items-center text-2xl font-extrabold tracking-tight text-white"
              >
                Kalvin
                <span className="ml-1 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  .
                </span>
              </a>

              <p className="mt-4 max-w-md text-left leading-7 text-slate-400 md:text-justify">
                Portofolio pribadi Kalvin Al Ma&apos;ruf, lulusan Informatika
                yang berfokus pada pengembangan website modern, aplikasi
                digital, dan sistem informasi.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                Terbuka untuk peluang profesional
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  {group.title}
                </h3>

                <div className="mt-5 grid gap-3">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex w-fit items-center gap-3 rounded-full px-1 py-1 text-sm text-slate-400 transition hover:text-cyan-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-600 transition group-hover:bg-cyan-300 group-hover:shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                      <span>{link.label}</span>
                      <span className="translate-x-0 text-cyan-300 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                        →
                      </span>
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
      </div>
    </footer>
  );
}