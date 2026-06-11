import Reveal from "@/components/Reveal";
import type { IconType } from "react-icons";
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiMonitor,
  FiArrowUpRight,
} from "react-icons/fi";

type Service = {
  title: string;
  description: string;
  icon: IconType;
  points: string[];
};

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Membantu membuat website modern yang responsif, rapi, dan mudah digunakan dengan teknologi seperti Next.js, React, dan Tailwind CSS.",
    icon: FiCode,
    points: ["Website responsif", "Landing page", "Portfolio website"],
  },
  {
    title: "Sistem Informasi",
    description:
      "Membantu merancang dan mengembangkan sistem informasi berbasis web untuk kebutuhan data, laporan, presensi, dan administrasi.",
    icon: FiLayers,
    points: ["Dashboard data", "Manajemen pengguna", "Rekap laporan"],
  },
  {
    title: "Frontend Implementation",
    description:
      "Mengubah konsep, desain, atau kebutuhan pengguna menjadi tampilan website yang rapi, interaktif, dan nyaman digunakan.",
    icon: FiMonitor,
    points: ["UI responsive", "Komponen interaktif", "Tampilan modern"],
  },
  {
    title: "Backend & Database Dasar",
    description:
      "Membantu pengembangan fitur dasar yang berkaitan dengan server, API, dan pengelolaan data menggunakan Node.js dan MongoDB.",
    icon: FiDatabase,
    points: ["REST API", "MongoDB", "Pengelolaan data"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-24">
      <div className="absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Layanan
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Apa yang bisa saya bantu?
            </h2>

            <p className="mt-4 text-left leading-7 text-slate-400 md:text-justify">
              Berikut beberapa bidang yang dapat saya bantu berdasarkan
              kemampuan, pengalaman project, dan proses belajar yang sedang saya
              kembangkan di bidang teknologi dan web development.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.12}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-cyan-950/10 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.05]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <Icon className="absolute -right-6 -top-6 h-32 w-32 text-cyan-400/5 transition group-hover:scale-110 group-hover:text-cyan-400/10" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-950/20">
                        <Icon size={26} />
                      </div>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition group-hover:border-cyan-400/40 group-hover:text-cyan-300">
                        <FiArrowUpRight size={18} />
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-white transition group-hover:text-cyan-300">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-left leading-7 text-slate-400 md:text-justify">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}