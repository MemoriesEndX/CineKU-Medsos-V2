"use client";

import { motion } from "framer-motion";

import type { LeaderboardEntry } from "@/types";

interface LeaderboardMiniProps {
  readonly entries: ReadonlyArray<LeaderboardEntry>;
}

export default function LeaderboardMini({ entries }: LeaderboardMiniProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
      className="rounded-3xl border border-amber-100 bg-white p-5 shadow-[0_16px_34px_-24px_rgba(16,185,129,0.55)] sm:p-6"
    >
      <h2 className="text-lg font-semibold text-slate-900">Leaderboard Mini</h2>
      <p className="mt-1 text-sm text-slate-600">Pantau posisi kamu minggu ini.</p>
      <ol className="mt-4 space-y-3">
        {entries.map((entry) => (
          <motion.li
            key={entry.id}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: 0.1 + entry.rank * 0.06, ease: "easeOut" }}
            className={`flex items-center justify-between rounded-2xl border px-3 py-2.5 ${
              entry.isCurrentUser
                ? "border-amber-300 bg-linear-to-r from-amber-50 to-amber-50"
                : "border-amber-100 bg-white"
            }`}
          >
            <p className="flex items-center gap-2 text-sm text-slate-700">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-700">
                {entry.rank}
              </span>
              {entry.name}
              {entry.isCurrentUser ? <span className="text-amber-700">(Kamu)</span> : null}
            </p>
            <p className="text-sm font-semibold text-amber-700">{entry.points} pts</p>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}
