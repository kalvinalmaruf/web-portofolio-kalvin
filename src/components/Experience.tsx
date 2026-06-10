import Reveal from "@/components/Reveal";

const experiences = [
  {
    period: "2026",
    title: "Lulusan S1 Informatika",
    place: "Universitas Teknologi Yogyakarta",
    description:
      "Menyelesaikan pendidikan di bidang Informatika dengan fokus pada pengembangan sistem informasi, web development, mobile application, database, dan teknologi digital.",
    tags: ["Informatika", "Web Development", "Sistem Informasi"],
  },
  {
    period: "Project Akhir",
    title: "Sistem Presensi Siswa Berbasis QR Code dan Geolocation",
    place: "SMK Negeri 1 Nanga Pinoh",
    description:
      "Mengembangkan sistem presensi berbasis web dan mobile dengan fitur QR Code, kode manual, upload screenshot QR, validasi lokasi GPS, serta dashboard rekap presensi.",
    tags: ["Next.js", "Flutter", "Node.js", "MongoDB"],
  },
  {
    period: "Saat Ini",
    title: "Belajar dan Mengembangkan Portofolio Web",
    place: "Personal Project",
    description:
      "Meningkatkan kemampuan dalam membangun website modern menggunakan Next.js, React, TypeScript, Tailwind CSS, animasi, dan deployment ke Vercel.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <Reveal>
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Pendidikan & Pengalaman
          </p>

          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Perjalanan belajar dan pengembangan project
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Berikut adalah ringkasan pendidikan, project, dan proses belajar
            yang saya jalani dalam membangun kemampuan di bidang teknologi dan
            web development.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 space-y-6">
        {experiences.map((experience, index) => (
          <Reveal key={experience.title} delay={index * 0.12}>
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-cyan-950/10 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/50">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent opacity-70" />

              <div className="grid gap-5 md:grid-cols-[180px_1fr]">
                <div>
                  <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                    {experience.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-300">
                    {experience.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-cyan-300">
                    {experience.place}
                  </p>

                  <p className="mt-4 leading-7 text-slate-400">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition group-hover:border-cyan-400/30 group-hover:text-cyan-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}