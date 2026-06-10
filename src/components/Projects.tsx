import Image from "next/image";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <Reveal>
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Project
          </p>

          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Beberapa project yang pernah saya kerjakan
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Berikut beberapa project yang saya gunakan sebagai media belajar dan
            pengembangan kemampuan dalam bidang website, aplikasi, dan sistem
            informasi.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.12}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-xl shadow-cyan-950/10 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-cyan-500/10">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative h-48 w-full overflow-hidden border-b border-white/10 bg-slate-950 sm:h-56">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-70" />

                    <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-cyan-300 backdrop-blur">
                      Featured Project
                    </div>
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-cyan-400/20 via-slate-900 to-blue-500/20">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/80 px-6 py-4 text-center">
                      <p className="text-sm text-cyan-300">Preview Project</p>
                      <h3 className="mt-2 max-w-xs text-lg font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/60 to-transparent" />
                  <span className="text-xs font-semibold text-cyan-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400/20"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-300"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}