import Reveal from "@/components/Reveal";

const focusItems = [
  {
    title: "Frontend Development",
    description:
      "Berfokus pada pengembangan tampilan website yang responsif, menarik,interaktif, dan memberikan pengalaman penggunaan yang nyaman.",
  },
  {
    title: "Modern Web Technology",
    description:
      "Mendalami penggunaan Next.js, React, TypeScript, dan Tailwind CSS untuk membangun website modern yang responsif, terstruktur, dan mudah dikembangkan.",
  },
  {
    title: "Project Based Learning",
    description:
      "Mengembangkan kemampuan melalui praktik langsung, eksplorasi teknologi, dan pembuatan project nyata yang relevan dengan kebutuhan pengguna.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Tentang Saya
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Lulusan Informatika yang berfokus pada pengembangan website modern dan sistem informasi.
            </h2>

          <p className="mt-6 text-justify leading-7 text-slate-400">
  Saya Kalvin Al Ma&apos;ruf, lulusan Informatika yang memiliki minat dalam
  pengembangan website, aplikasi digital, dan sistem informasi. Saya terus
  mengembangkan kemampuan dalam membangun website modern menggunakan Next.js,
  React, TypeScript, dan Tailwind CSS.
</p>

<p className="mt-4 text-justify leading-7 text-slate-400">
  Portofolio ini saya buat sebagai media untuk menampilkan project, kemampuan,
  dan pengalaman yang telah saya kembangkan melalui proses belajar serta praktik
  langsung. Bagi saya, membangun project nyata merupakan salah satu cara terbaik
  untuk meningkatkan pemahaman dan keterampilan di bidang web development.
</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Fresh Graduate", "Web Development", "Informatika"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur transition hover:border-cyan-300 hover:bg-cyan-400/20"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur">
            <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-cyan-400/30 via-transparent to-blue-500/20 opacity-60" />

            <h3 className="text-xl font-bold text-white">Fokus Belajar</h3>

            <div className="mt-6 space-y-5">
              {focusItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.1}>
                  <div className="group rounded-2xl border border-white/10 bg-slate-950/70 p-5 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-950">
                    <h4 className="font-semibold text-cyan-300 group-hover:text-cyan-200">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}