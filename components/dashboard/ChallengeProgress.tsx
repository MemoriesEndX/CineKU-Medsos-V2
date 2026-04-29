"use client";

import { motion } from "framer-motion";

import type { ChallengeItem } from "@/types";

interface ChallengeProgressProps {
  readonly items: ReadonlyArray<ChallengeItem>;
}

function getProgressPercentage(current: number, target: number): number {
  const percentage = Math.round((current / target) * 100);
  return Math.min(100, percentage);
}

export default function ChallengeProgress({ items }: ChallengeProgressProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="rounded-3xl border border-amber-100 bg-white p-5 shadow-[0_16px_34px_-24px_rgba(16,185,129,0.55)] sm:p-6"
    >
      <h2 className="text-lg font-semibold text-slate-900">Challenge Mingguan</h2>
      <p className="mt-1 text-sm text-slate-600">Selesaikan challenge untuk naik level lebih cepat.</p>
      <ul className="mt-4 space-y-4">
        {items.map((item, index) => {
          const progress = getProgressPercentage(item.current, item.target);

          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.1, ease: "easeOut" }}
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-slate-700">
                  <span className="mr-1" aria-hidden>
                    {item.icon}
                  </span>
                  {item.title}
                </p>
                <p className="text-xs font-semibold text-amber-700">{progress}%</p>
              </div>
              <div className="h-2.5 rounded-full bg-amber-100">
                <motion.div
                  className="h-2.5 rounded-full bg-linear-to-r from-amber-500 to-amber-400"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${progress}%` }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.9, delay: 0.28 + index * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.section>
  );
}
