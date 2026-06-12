"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, FolderOpen, Mail, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 pb-24 pt-36 sm:px-6 lg:pt-32"
    >
      <div className="grid w-full gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-w-0"
        >
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Sparkles size={15} />
            Halo, saya
          </motion.div>

          <motion.h1
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Kalvin Al Ma&apos;ruf
          </motion.h1>

          <motion.div
            className="mt-5"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-slate-200 sm:text-3xl">
              Lulusan Informatika
            </h2>

            <p className="mt-1 text-xl font-semibold text-cyan-300 sm:text-2xl">
              Universitas Teknologi Yogyakarta
            </p>
          </motion.div>

          <motion.p
            className="mt-6 max-w-xl text-left leading-7 text-slate-400 md:text-justify"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Saya memiliki minat dalam pengembangan website modern dengan
            menggunakan teknologi seperti Next.js, React, dan Tailwind CSS.
            Portofolio ini saya buat sebagai media untuk menampilkan kemampuan,
            pengalaman, serta project yang telah saya kerjakan dalam bidang web
            development dan sistem informasi.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-1 hover:bg-cyan-300 sm:w-auto sm:rounded-full"
            >
              <FolderOpen size={18} />
              Lihat Project
            </a>

            <a
              href="/cv-kalvin.pdf"
              download
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-4 text-sm font-bold text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950 sm:w-auto sm:rounded-full"
            >
              <Download size={18} />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 sm:w-auto sm:rounded-full"
            >
              <Mail size={18} />
              Hubungi Saya
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.92, y: 35 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <motion.div
            className="relative w-full max-w-[390px]"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/20 blur-3xl"
              animate={{
                opacity: [0.35, 0.75, 0.35],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-cyan-400/30 bg-cyan-400/10 blur-sm" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full border border-blue-400/20 bg-blue-400/10 blur-sm" />

            <div className="relative rounded-[2.2rem] bg-gradient-to-br from-cyan-400/60 via-white/10 to-blue-500/40 p-px shadow-2xl shadow-cyan-950/30">
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-slate-950/90 p-3 backdrop-blur-xl sm:p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]" />

                <div className="relative overflow-hidden rounded-[1.7rem] bg-slate-900">
                  <Image
                    src="/profile.jpg"
                    alt="Foto formal Kalvin Al Ma'ruf"
                    width={420}
                    height={540}
                    className="h-[430px] w-full object-contain object-top sm:h-[470px] sm:object-cover lg:h-[500px]"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent sm:from-slate-950 sm:via-slate-950/20" />

                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-cyan-400/30 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-cyan-300 backdrop-blur">
                      Web Developer
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300 backdrop-blur">
                      K
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 hidden sm:block">
                    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-xl shadow-cyan-950/20 backdrop-blur-xl">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="text-lg font-bold text-white">
                            Kalvin Al Ma&apos;ruf
                          </p>

                          <p className="mt-1 text-sm leading-6 text-slate-400">
                            Informatics Graduate • Web Development
                          </p>
                        </div>

                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-300">
                          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                          Open to Work
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {["Next.js", "React", "Frontend", "UI"].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-3 rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-xl shadow-cyan-950/20 backdrop-blur-xl sm:hidden">
                  <p className="text-lg font-bold text-white">
                    Kalvin Al Ma&apos;ruf
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Informatics Graduate • Web Development
                  </p>

                  <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-300">
                    <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                    Open to Work
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Next.js", "React", "Frontend", "UI"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}