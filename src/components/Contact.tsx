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
    <section id="contact" className="bg-slate-900/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
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
                magang, freelance, atau pekerjaan di bidang web development dan
                sistem informasi.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:almarufkalvin72@gmail.com"
                  className="inline-flex rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Kirim Email
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {contacts.map((contact) => (
                <a
                  key={contact.title}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                >
                  <p className="text-sm font-semibold text-cyan-300">
                    {contact.title}
                  </p>
                  <p className="mt-2 text-slate-300 group-hover:text-white">
                    {contact.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}