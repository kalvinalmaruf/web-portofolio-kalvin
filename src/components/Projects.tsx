import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
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

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-xl shadow-cyan-950/10 transition hover:-translate-y-1 hover:border-cyan-400/50"
          >
            <div className="relative h-48 w-full overflow-hidden border-b border-white/10 bg-slate-950 sm:h-56">
              {project.image ? (
                <Image
  src={project.image}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover object-top transition duration-300 group-hover:scale-105"
/>
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
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300">
                {project.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href={project.github}
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}