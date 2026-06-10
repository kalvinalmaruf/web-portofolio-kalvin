import Reveal from "@/components/Reveal";

const contacts = [
  {
    title: "Email",
    value: "almarufkalvin72@gmail.com",
    link: "mailto:almarufkalvin72@gmail.com",
  },
  {
    title: "WhatsApp",
    value: "Hubungi melalui WhatsApp",
    link: "https://wa.me/6282250526055",
  },
  {
    title: "GitHub",
    value: "Lihat repository saya",
    link: "https://github.com/almarufkalvin72",
  },
  {
    title: "LinkedIn",
    value: "Terhubung di LinkedIn",
    link: "https://www.linkedin.com/in/kalvinalmaruff",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900/30 px-6 py-24 backdrop-blur-sm"
    >
      <div className="absolute left-10 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur md:p-12">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Kontak
                </p>

                <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
                  Tertarik bekerja sama atau ingin terhubung?
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                  Saya terbuka untuk kesempatan belajar, kolaborasi project,
                  magang, freelance, atau pekerjaan di bidang web development
                  dan sistem informasi.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:almarufkalvin72@gmail.com"
                    className="inline-flex rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-300"
                  >
                    Kirim Email
                  </a>

                  <a
                    href="/cv-kalvin.pdf"
                    download
                    className="inline-flex rounded-xl border border-cyan-400/70 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
                  >
                    Download CV
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                {contacts.map((contact, index) => (
                  <Reveal key={contact.title} delay={index * 0.08}>
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                    >
                      <div>
                        <p className="text-sm font-semibold text-cyan-300">
                          {contact.title}
                        </p>
                        <p className="mt-2 text-slate-300 transition group-hover:text-white">
                          {contact.value}
                        </p>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-cyan-300 transition group-hover:border-cyan-400/50 group-hover:bg-cyan-400 group-hover:text-slate-950">
                        →
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}