"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 py-24 md:px-6 md:pt-24">
      <div className="grid w-full gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Halo, saya
          </motion.p>

          <motion.h1
            className="text-4xl font-extrabold leading-tight text-white md:text-6xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Kalvin Al Ma&apos;ruf
          </motion.h1>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-slate-200 md:text-3xl">
              Lulusan Informatika
            </h2>

            <p className="mt-2 text-base font-medium text-cyan-300 md:text-xl">
              Universitas Teknologi Yogyakarta
            </p>
          </motion.div>

          <motion.p
            className="mt-6 max-w-xl leading-7 text-slate-400"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Saya sedang mengembangkan kemampuan dalam pembuatan website modern
            menggunakan Next.js, React, dan Tailwind CSS. Portofolio ini dibuat
            sebagai media belajar sekaligus tempat menampilkan project yang
            pernah saya kerjakan.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Lihat Project
            </a>

            <a
              href="/cv-kalvin.pdf"
              download
              className="rounded-xl border border-cyan-400/70 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
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
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur transition hover:border-cyan-400/50 hover:text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9, y: 35 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute -inset-4 rounded-[2rem] bg-cyan-400/20 blur-2xl"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl backdrop-blur">
              <Image
                src="/profile.jpg"
                alt="Foto formal Kalvin Al Ma'ruf"
                width={380}
                height={480}
                className="h-[340px] w-[260px] rounded-[1.5rem] object-cover object-top sm:h-[380px] sm:w-[300px] md:h-[420px] md:w-[320px]"
                priority
              />
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <p className="text-sm font-semibold text-white">Web Developer</p>
              <p className="text-xs text-slate-400">Informatics Graduate</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}