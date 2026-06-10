"use client";

import { motion } from "framer-motion";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Git",
  "GitHub",
  "REST API",
];

export default function TechMarquee() {
  const repeatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-slate-900/30 py-6 backdrop-blur-sm">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />

      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedTechnologies.map((technology, index) => (
          <div
            key={`${technology}-${index}`}
            className="rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 text-sm font-medium text-slate-300 shadow-lg shadow-cyan-950/10 backdrop-blur transition hover:border-cyan-400/60 hover:text-cyan-300"
          >
            {technology}
          </div>
        ))}
      </motion.div>
    </section>
  );
}