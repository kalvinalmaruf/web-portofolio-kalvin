const skillCategories = [
  {
    title: "Frontend",
    description: "Teknologi untuk membangun tampilan website.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Styling",
    description: "Teknologi untuk membuat tampilan lebih rapi dan responsive.",
    skills: ["Tailwind CSS", "Responsive Design", "UI Design"],
  },
  {
    title: "Backend & Database",
    description: "Dasar pengembangan server dan pengelolaan data.",
    skills: ["Node.js", "MongoDB", "REST API"],
  },
  {
    title: "Tools",
    description: "Tools yang digunakan dalam proses pengembangan.",
    skills: ["Git", "GitHub", "VS Code", "npm"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900/30 px-6 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skill
          </p>

          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Teknologi yang sedang saya pelajari dan gunakan
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Berikut beberapa teknologi dan tools yang saya gunakan dalam proses
            belajar serta pengembangan project. Daftar ini akan terus saya
            kembangkan seiring bertambahnya pengalaman.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-cyan-950/10 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300">
                {category.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition group-hover:border-cyan-400/30 group-hover:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}