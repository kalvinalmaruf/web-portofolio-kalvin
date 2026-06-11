import Reveal from "@/components/Reveal";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Download,
  Mail,
  MessageCircle,
} from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "almarufkalvin72@gmail.com",
    link: "mailto:almarufkalvin72@gmail.com",
    icon: Mail,
  },
  {
    title: "WhatsApp",
    value: "Hubungi melalui WhatsApp",
    link: "https://wa.me/6282250526055",
    icon: MessageCircle,
  },
  {
    title: "GitHub",
    value: "Lihat repository saya",
    link: "https://github.com/almarufkalvin72",
    icon: Code2,
  },
  {
    title: "LinkedIn",
    value: "Terhubung di LinkedIn",
    link: "https://www.linkedin.com/in/kalvinalmaruff",
    icon: Briefcase,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-24 sm:px-6"
    >
      <div className="absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div className="min-w-0">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Kontak
                </p>

                <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Tertarik bekerja sama atau ingin terhubung?
                </h2>

                <p className="mt-5 max-w-xl text-left leading-7 text-slate-400 md:text-justify">
                  Saya terbuka untuk berbagai peluang profesional, seperti
                  magang, freelance, kolaborasi project, maupun pekerjaan di
                  bidang web development, aplikasi digital, dan sistem
                  informasi.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href="mailto:almarufkalvin72@gmail.com"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-1 hover:bg-cyan-300 sm:w-auto sm:rounded-full"
                  >
                    <Mail size={20} />
                    Kirim Email
                  </a>

                  <a
                    href="/cv-kalvin.pdf"
                    download
                    className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-4 text-sm font-bold text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950 sm:w-auto sm:rounded-full"
                  >
                    <Download size={20} />
                    Download CV
                  </a>
                </div>
              </div>

              <div className="grid min-w-0 gap-4">
                {contacts.map((contact) => {
                  const Icon = contact.icon;

                  return (
                    <a
                      key={contact.title}
                      href={contact.link}
                      target={
                        contact.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group relative flex min-w-0 items-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-4 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-950 sm:p-5"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 sm:h-16 sm:w-16">
                        <Icon size={28} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-cyan-300">
                          {contact.title}
                        </h3>

                        <p className="mt-1 break-words text-sm leading-6 text-slate-300 sm:text-base">
                          {contact.value}
                        </p>
                      </div>

                      <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300 transition group-hover:translate-x-1 group-hover:border-cyan-400/40 sm:flex">
                        <ArrowRight size={18} />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}