"use client";

import { motion } from "framer-motion";

interface DecorationItem {
  readonly id: string;
  readonly icon: string;
  readonly className: string;
  readonly rotate?: boolean;
}

const DASHBOARD_DECORATIONS: ReadonlyArray<DecorationItem> = [
  {
    id: "film-top-left",
    icon: "🎬",
    className: "left-3 top-24 text-2xl sm:left-8 sm:text-3xl",
    rotate: true,
  },
  {
    id: "trash-bin-left-bottom",
    icon: "🎬",
    className: "bottom-20 left-4 text-2xl sm:left-10 sm:text-3xl",
  },
  {
    id: "trash-bag-right-top",
    icon: "🛍️",
    className: "right-5 top-20 text-2xl sm:right-10 sm:text-3xl",
  },
  {
    id: "plastic-bottle-right-mid",
    icon: "🎬",
    className: "right-4 top-1/2 hidden text-2xl md:block md:text-3xl",
  },
  {
    id: "leaf-mid-left",
    icon: "🎞️",
    className: "left-1/4 top-1/3 hidden text-2xl md:block md:text-3xl",
    rotate: true,
  },
  {
    id: "paper-cardboard",
    icon: "📦",
    className: "bottom-28 right-1/4 hidden text-2xl lg:block lg:text-3xl",
  },
  {
    id: "sparkles-ai",
    icon: "✨",
    className: "right-1/3 top-28 hidden text-2xl md:block md:text-3xl",
    rotate: true,
  },
  {
    id: "paper-sheet",
    icon: "📄",
    className: "bottom-24 left-1/2 hidden text-2xl lg:block",
  },
];

export default function DashboardDcinemarations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-16 top-24 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl sm:h-64 sm:w-64"
        animate={{ x: [0, 28, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl sm:h-80 sm:w-80"
        animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
        transition={{ duration: 9.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-amber-200/20 blur-3xl sm:h-72 sm:w-72"
        animate={{ x: [0, 16, 0], y: [0, -14, 0] }}
        transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {DASHBOARD_DECORATIONS.map((item, index) => (
        <motion.span
          key={item.id}
          className={`absolute opacity-20 ${item.className}`}
          animate={{
            y: [0, index % 2 === 0 ? -12 : 10, 0],
            x: [0, index % 3 === 0 ? 8 : -7, 0],
            rotate: item.rotate ? [0, 360] : 0,
          }}
          transition={{
            duration: 5.6 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.span>
      ))}
    </div>
  );
}
