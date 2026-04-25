"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import type { LeaderboardEntry } from "@/types";

interface LeaderboardMiniProps {
  readonly entries: ReadonlyArray<LeaderboardEntry>;
}

export default function LeaderboardMini({ entries }: LeaderboardMiniProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) {
        return;
      }

      const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

      timeline.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          delay: 0.25,
        },
      );

      timeline.from(
        "[data-leaderboard-item]",
        {
          opacity: 0,
          x: 10,
          duration: 0.35,
          stagger: 0.08,
        },
        "-=0.35",
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [entries]);

  return (
    <section
      ref={sectionRef}
      className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-[0_16px_34px_-24px_rgba(16,185,129,0.55)] sm:p-6"
    >
      <h2 className="text-lg font-semibold text-slate-900">Leaderboard Mini</h2>
      <p className="mt-1 text-sm text-slate-600">Pantau posisi kamu minggu ini.</p>
      <ol className="mt-4 space-y-3">
        {entries.map((entry) => (
          <li
            key={entry.id}
            data-leaderboard-item
            className={`flex items-center justify-between rounded-2xl border px-3 py-2.5 ${
              entry.isCurrentUser
                ? "border-emerald-300 bg-linear-to-r from-emerald-50 to-lime-50"
                : "border-emerald-100 bg-white"
            }`}
          >
            <p className="flex items-center gap-2 text-sm text-slate-700">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                {entry.rank}
              </span>
              {entry.name}
              {entry.isCurrentUser ? <span className="text-emerald-700">(Kamu)</span> : null}
            </p>
            <p className="text-sm font-semibold text-emerald-700">{entry.points} pts</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
