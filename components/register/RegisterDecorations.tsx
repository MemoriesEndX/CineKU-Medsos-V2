"use client";

import { motion } from "framer-motion";
import { Camera, Clapperboard, Film, Play, Sparkles, Star } from "lucide-react";

interface DecorationItem {
  id: string;
  icon: typeof Film;
  className: string;
  rotate?: boolean;
}

const cinemaDecorations: DecorationItem[] = [
  {
    id: "film-top-left",
    icon: Film,
    className: "left-6 top-10 text-amber-200/70 sm:left-10 lg:left-16 lg:top-14",
    rotate: true,
  },
  {
    id: "camera-left-bottom",
    icon: Camera,
    className: "bottom-12 left-4 text-rose-200/55 sm:left-10 lg:bottom-16 lg:left-20",
  },
  {
    id: "clapper-right-top",
    icon: Clapperboard,
    className: "right-5 top-20 text-cyan-200/55 sm:right-10 lg:right-20 lg:top-16",
    rotate: true,
  },
  {
    id: "play-right-mid",
    icon: Play,
    className: "right-6 bottom-28 text-amber-100/55 sm:right-10 lg:right-20 lg:bottom-24",
  },
  {
    id: "sparkles-mid",
    icon: Sparkles,
    className: "left-1/4 top-1/4 text-amber-100/55 lg:left-[28%]",
    rotate: true,
  },
  {
    id: "star-center",
    icon: Star,
    className: "bottom-1/4 right-1/3 hidden text-white/50 md:block",
  },
];

export default function RegisterDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
      <motion.div
        className="absolute left-[10%] top-[18%] h-52 w-52 rounded-full bg-amber-400/10 blur-3xl sm:h-64 sm:w-64"
        animate={{ x: [0, 36, 0], y: [0, -28, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[8%] right-[8%] h-56 w-56 rounded-full bg-rose-500/10 blur-3xl sm:h-72 sm:w-72"
        animate={{ x: [0, 24, 0], y: [0, -20, 0] }}
        transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      <div className="absolute left-1/2 top-1/2 h-112 w-md -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
      <div className="absolute left-1/2 top-1/2 h-88 w-88 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/10" />

      {cinemaDecorations.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            className={`absolute ${item.className}`}
            animate={{ x: [0, 6, -6, 0], y: [0, -10, 8, 0], rotate: item.rotate ? [0, 360] : 0 }}
            transition={{ duration: 5.6 + (item.id.length % 3), repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
          </motion.div>
        );
      })}
    </div>
  );
}
