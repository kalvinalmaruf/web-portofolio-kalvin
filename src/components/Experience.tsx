import Reveal from "@/components/Reveal";
import { GraduationCap, Code2, Rocket, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    period: "2026",
    title: "Lulusan S1 Informatika",
    place: "Universitas Teknologi Yogyakarta",
    category: "Pendidikan",
    icon: GraduationCap,
    description:
      "Menyelesaikan pendidikan di bidang Informatika dengan fokus pada pengembangan sistem informasi, web development, mobile application, database, dan teknologi digital.",
    tags: ["Informatika", "Web Development", "Sistem Informasi"],
  },
  {
    period: "Project Akhir",
    title: "Sistem Presensi Siswa Berbasis QR Code dan Geolocation",
    place: "SMK Negeri 1 Nanga Pinoh",
    category: "Project",
    icon: Code2,
    description:
      "Mengembangkan sistem presensi berbasis web dan mobile dengan fitur QR Code, kode manual, upload screenshot QR, validasi lokasi GPS, serta dashboard rekap presensi.",
    tags: ["Next.js", "Flutter", "Node.js", "MongoDB"],
  },
  {
    period: "Saat Ini",
    title: "Belajar dan Mengembangkan Portofolio Web",
    place: "Personal Project",
    category: "Learning",
    icon: Rocket,
    description:
      "Meningkatkan kemampuan dalam membangun website modern menggunakan Next.js, React, TypeScript, Tailwind CSS, animasi, dan deployment ke Vercel.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-900/30 px-6 py-24 backdrop-blur-sm"
    >
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Pendidikan & Pengalaman
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Perjalanan belajar dan pengembangan kemampuan
            </h2>

            <p className="mt-4 text-left leading-7 text-slate-400 md:text-justify">
              Berikut adalah ringkasan pendidikan, pengalaman project, dan
              proses pengembangan kemampuan yang saya jalani dalam bidang
              teknologi, sistem informasi, dan web development.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-cyan-400/40 to-transparent md:block" />

          <div className="grid gap-6">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.12}>
                  <div className="relative md:pl-14">
                    <div className="absolute left-0 top-8 hidden h-8 w-8 rounded-full border border-cyan-400/40 bg-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.35)] md:block" />

                    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-cyan-950/10 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-950">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 transition group-hover:opacity-100" />

                      <Icon className="absolute -right-6 -top-6 h-32 w-32 text-cyan-400/5 transition group-hover:scale-110 group-hover:text-cyan-400/10" />

                      <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-950/20">
                            <Icon size={26} />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-3">
                              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300">
                                {item.period}
                              </span>

                              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
                                {item.category}
                              </span>
                            </div>

                            <h3 className="mt-4 text-xl font-bold leading-tight text-white transition group-hover:text-cyan-300 md:text-2xl">
                              {item.title}
                            </h3>

                            <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-400">
                              <span className="inline-flex items-center gap-2">
                                <MapPin size={16} className="text-cyan-300" />
                                {item.place}
                              </span>

                              <span className="inline-flex items-center gap-2">
                                <Calendar size={16} className="text-cyan-300" />
                                {item.period}
                              </span>
                            </div>

                            <p className="mt-4 text-left leading-7 text-slate-400 md:text-justify">
                              {item.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}