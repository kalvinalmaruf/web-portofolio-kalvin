"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <motion.div
        className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{
          x: [0, 80, 20, 0],
          y: [0, 40, 120, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          x: [0, -80, -20, 0],
          y: [0, 100, 40, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-10%] left-[30%] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -80, -20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
    </div>
  );
}