"use client";

import { motion } from "framer-motion";
import { Aperture, Camera, Clapperboard, Film, Sparkles, Ticket } from "lucide-react";

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
    className: "left-6 top-8 text-amber-200/50 md:left-12 lg:left-20 lg:top-14",
    rotate: true,
  },
  {
    id: "camera-bottom-left",
    icon: Camera,
    className: "bottom-10 left-5 text-rose-200/45 md:left-12 lg:bottom-16 lg:left-24",
  },
  {
    id: "clapper-right",
    icon: Clapperboard,
    className: "right-5 top-24 text-cyan-200/45 md:right-8 lg:right-24 lg:top-20",
    rotate: true,
  },
  {
    id: "sparkles-right-mid",
    icon: Sparkles,
    className: "right-6 bottom-24 text-amber-100/50 md:right-10 lg:right-20",
  },
  {
    id: "ticket-upper-right",
    icon: Ticket,
    className: "right-24 top-12 hidden text-rose-100/45 lg:block",
    rotate: true,
  },
  {
    id: "aperture-center",
    icon: Aperture,
    className: "left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-white/8 lg:block",
    rotate: true,
  },
];

export default function LoginDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {cinemaDecorations.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            className={`absolute ${item.className}`}
            animate={{ y: [0, -8, 0], x: [0, 6, 0], rotate: item.rotate ? [0, 360] : 0 }}
            transition={{ duration: 5.5 + (item.id.length % 4), repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="h-6 w-6" strokeWidth={1.8} />
          </motion.div>
        );
      })}
    </div>
  );
}
