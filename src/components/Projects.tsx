import Image from "next/image";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24">
      <div className="absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Project
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Project yang pernah saya kerjakan
            </h2>

            <p className="mt-4 text-left leading-7 text-slate-400 md:text-justify">
              Berikut beberapa project yang saya kembangkan sebagai bentuk
              penerapan kemampuan di bidang web development, aplikasi digital,
              dan sistem informasi.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.12}>
              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-cyan-950/10 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05] md:p-5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                      <div className="absolute left-4 top-4 rounded-full border border-cyan-400/30 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-cyan-300 backdrop-blur">
                        {index === 0 ? "Featured Project" : "Personal Project"}
                      </div>
                    </div>
                  </div>

                  <div className="p-2 md:p-4">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300">
                      <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                      Project 0{index + 1}
                    </div>

                    <h3 className="text-2xl font-extrabold leading-tight text-white transition group-hover:text-cyan-300">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-left leading-7 text-slate-400 md:text-justify">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      {project.demo !== "#" ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                        >
                          Lihat Demo →
                        </a>
                      ) : (
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300">
                          Demo belum tersedia
                        </span>
                      )}

                      {project.github !== "#" ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                        >
                          Lihat GitHub
                        </a>
                      ) : (
                        <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-400">
                          GitHub belum tersedia
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}