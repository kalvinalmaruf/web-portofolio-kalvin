"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Download,
  Mail,
  MessageCircle,
  MessageSquare,
  Send,
  User,
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Pesan dari ${formData.name} melalui Web Portfolio`;
    const body = `
Nama: ${formData.name}
Email: ${formData.email}

Pesan:
${formData.message}
`;

    window.location.href = `mailto:almarufkalvin72@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

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
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
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

                <div className="mt-8 grid gap-4">
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
                        className="group relative flex min-w-0 items-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-4 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-950"
                      >
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                          <Icon size={26} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-cyan-300">
                            {contact.title}
                          </h3>

                          <p className="mt-1 break-words text-sm leading-6 text-slate-300">
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

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
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

              <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-xl shadow-cyan-950/10 backdrop-blur sm:p-6"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
                <MessageSquare className="absolute -right-6 -top-6 h-32 w-32 text-cyan-400/5" />

                <div className="relative">
                  <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                      Kirim Pesan
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      Hubungi saya langsung
                    </h3>

                    <p className="mt-3 text-left text-sm leading-6 text-slate-400 md:text-justify">
                      Isi form berikut untuk membuat pesan email secara otomatis.
                      Pesan akan diarahkan ke email saya.
                    </p>
                  </div>

                  <div className="grid gap-5">
                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-slate-300">
                        Nama
                      </span>

                      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition focus-within:border-cyan-400/60 focus-within:bg-cyan-400/10">
                        <User size={18} className="shrink-0 text-cyan-300" />

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Masukkan nama Anda"
                          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                        />
                      </div>
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-slate-300">
                        Email
                      </span>

                      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition focus-within:border-cyan-400/60 focus-within:bg-cyan-400/10">
                        <Mail size={18} className="shrink-0 text-cyan-300" />

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Masukkan email Anda"
                          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                        />
                      </div>
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-slate-300">
                        Pesan
                      </span>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tulis pesan Anda di sini..."
                        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:bg-cyan-400/10"
                      />
                    </label>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-1 hover:bg-cyan-300"
                    >
                      <Send size={19} />
                      Kirim Pesan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}