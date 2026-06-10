export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Tentang Saya
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
            Lulusan Informatika yang sedang membangun karier di bidang web
            development.
          </h2>

          <p className="mt-6 leading-7 text-slate-400">
            Saya adalah Kalvin Al Ma&apos;ruf, lulusan Informatika yang memiliki
            minat dalam pengembangan website, aplikasi, dan sistem informasi.
            Saat ini saya sedang memperdalam kemampuan dalam membangun website
            modern menggunakan Next.js, React, dan Tailwind CSS.
          </p>

          <p className="mt-4 leading-7 text-slate-400">
            Web portofolio ini saya buat sebagai media belajar sekaligus tempat
            untuk menampilkan project, kemampuan, dan pengalaman yang terus saya
            kembangkan. Saya percaya bahwa belajar melalui praktik langsung
            adalah cara terbaik untuk memahami dunia web development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Fresh Graduate
            </span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Web Development
            </span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Informatika
            </span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-cyan-950/20">
          <h3 className="text-xl font-bold text-white">Fokus Belajar</h3>

          <div className="mt-6 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <h4 className="font-semibold text-cyan-300">
                Frontend Development
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Membuat tampilan website yang responsive, rapi, dan mudah
                digunakan oleh pengguna.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <h4 className="font-semibold text-cyan-300">
                Modern Web Technology
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Mempelajari Next.js, React, TypeScript, dan Tailwind CSS untuk
                membangun website modern.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <h4 className="font-semibold text-cyan-300">
                Project Based Learning
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Mengembangkan kemampuan melalui praktik langsung dan pembuatan
                project nyata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}