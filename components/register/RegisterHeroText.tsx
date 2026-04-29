"use client";

import { motion, type Variants } from "framer-motion";
import { Camera, Clapperboard, Film, Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  {
    id: "premiere",
    icon: Clapperboard,
    text: "Kurasi film kreator Indonesia",
  },
  {
    id: "discover",
    icon: Sparkles,
    text: "Discovery yang terasa premium",
  },
  {
    id: "watchlist",
    icon: Film,
    text: "Watchlist, rating, dan progress tontonan",
  },
] as const;

export default function RegisterHeroText() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
  };

  return (
    <motion.aside className="hidden text-white/90 md:block" variants={containerVariants} initial="hidden" animate="show">
      <motion.p
        variants={itemVariants}
        className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-amber-100 sm:text-xs"
      >
        <Camera className="h-3.5 w-3.5" aria-hidden="true" />
        Cineku Premiere
      </motion.p>

      <motion.h1 variants={itemVariants} className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Daftar untuk Masuk ke Dunia Film Cineku
      </motion.h1>

      <motion.p variants={itemVariants} className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
        Jelajahi platform showcase dan discovery film kreator Indonesia dengan tampilan cinematic,
        clean, dan responsif.
      </motion.p>

      <motion.ul variants={itemVariants} className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {HIGHLIGHTS.map((highlight) => {
          const Icon = highlight.icon;

          return (
            <li
              key={highlight.id}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
            >
              <span className="inline-flex rounded-lg bg-amber-300/10 p-2 text-amber-100">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm text-slate-200">{highlight.text}</span>
            </li>
          );
        })}
      </motion.ul>
    </motion.aside>
  );
}
