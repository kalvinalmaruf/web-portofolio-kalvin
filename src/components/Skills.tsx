import Reveal from "@/components/Reveal";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNpm,
  SiFigma,
} from "react-icons/si";
import { FiMonitor, FiCode } from "react-icons/fi";

type Skill = {
  name: string;
  icon: IconType;
};

type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Teknologi untuk membangun tampilan website.",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Styling",
    description: "Teknologi untuk membuat tampilan lebih rapi dan responsif.",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Responsive Design", icon: FiMonitor },
      { name: "UI Design", icon: SiFigma },
    ],
  },
  {
    title: "Backend & Database",
    description: "Dasar pengembangan server dan pengelolaan data.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST API", icon: FiCode },
    ],
  },
  {
    title: "Tools",
    description: "Tools yang digunakan dalam proses pengembangan.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: FiCode },
      { name: "npm", icon: SiNpm },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-900/30 px-6 py-24 backdrop-blur-sm"
    >
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Skill
            </p>

            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Teknologi yang sedang saya pelajari dan gunakan
            </h2>

            <p className="mt-4 text-left leading-7 text-slate-400 md:text-justify">
              Berikut beberapa teknologi dan tools yang saya gunakan dalam
              proses belajar serta pengembangan project. Daftar ini akan terus
              saya kembangkan seiring bertambahnya pengalaman.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.12}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-cyan-950/10 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-950">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-300">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    0{index + 1}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200"
                      >
                        <Icon className="text-base text-cyan-300" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}