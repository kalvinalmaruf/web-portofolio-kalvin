import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 py-24 md:px-6 md:pt-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="grid w-full gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Halo, saya
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Kalvin Al Ma&apos;ruf
          </h1>

         <div className="mt-4">
  <h2 className="text-2xl font-semibold text-slate-200 md:text-4xl">
    Lulusan Informatika
  </h2>

  <p className="mt-2 text-lg font-medium text-cyan-300 md:text-4xl">
    Universitas Teknologi Yogyakarta
  </p>
</div>

          <p className="mt-6 max-w-xl leading-7 text-slate-400">
            Saya sedang mengembangkan kemampuan dalam pembuatan website modern
            menggunakan Next.js, React, dan Tailwind CSS. Portofolio ini dibuat
            sebagai media belajar sekaligus tempat menampilkan project yang
            pernah saya kerjakan.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Lihat Project
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-cyan-400/70 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Next.js
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              React
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Tailwind CSS
            </span>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-4 shadow-2xl">
              <Image
  src="/profile.jpg"
  alt="Foto formal Kalvin Al Ma'ruf"
  width={380}
  height={480}
  className="h-[340px] w-[260px] rounded-[1.5rem] object-cover object-top sm:h-[380px] sm:w-[300px] md:h-[420px] md:w-[320px]"
  priority
/>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">
              <p className="text-sm font-semibold text-white">
                Web Developer
              </p>
              <p className="text-xs text-slate-400">
                Informatics Graduate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}