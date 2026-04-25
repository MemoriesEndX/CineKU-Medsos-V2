"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

import type { UserBadge } from "@/types";

interface BadgeCardProps {
  readonly badge: UserBadge;
  readonly index: number;
}

export default function BadgeCard({ badge, index }: BadgeCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const milestoneProgress = useMemo(() => {
    if (badge.unlocked) {
      return 100;
    }

    return Math.min(92, 52 + index * 14);
  }, [badge.unlocked, index]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardRef.current) {
        return;
      }

      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 26,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.15 + index * 0.1,
          duration: 0.55,
          ease: "power2.out",
        },
      );
    }, cardRef);

    return () => {
      ctx.revert();
    };
  }, [index]);

  return (
    <article
      ref={cardRef}
      className={`rounded-2xl border bg-white p-4 text-left shadow-[0_12px_28px_-22px_rgba(16,185,129,0.55)] ${
        badge.unlocked
          ? "border-emerald-200"
          : "border-emerald-100"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <p
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-2xl ${
            badge.unlocked ? "bg-emerald-50" : "bg-slate-50"
          }`}
          aria-hidden
        >
          {badge.icon}
        </p>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            badge.unlocked ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"
          }`}
        >
          {badge.unlocked ? "Aktif" : "Progres"}
        </span>
      </div>

      <h3 className="mt-3 text-sm font-semibold text-slate-900">{badge.name}</h3>
      <p className="mt-1 text-xs text-slate-600">{badge.description}</p>

      <div className="mt-3 space-y-1.5">
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>Milestone</span>
          <span className="font-semibold text-emerald-700">{milestoneProgress}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-emerald-100">
          <div
            className="h-1.5 rounded-full bg-linear-to-r from-emerald-500 to-lime-400"
            style={{ width: `${milestoneProgress}%` }}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1 text-sm opacity-70" aria-hidden="true">
        <span>♻️</span>
        <span>🍃</span>
      </div>
    </article>
  );
}
