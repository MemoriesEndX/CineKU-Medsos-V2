"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import type { DashboardUser } from "@/types";

interface DashboardHeaderProps {
  readonly user: DashboardUser;
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!headerRef.current) {
        return;
      }

      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
        },
      );
    }, headerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow-[0_20px_44px_-30px_rgba(16,185,129,0.55)] sm:p-8"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-linear-to-br from-emerald-300/35 to-lime-200/40 blur-2xl" aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Eco Progress
          </span>
          <h1 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">Halo, {user.name} 👋</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            Siap memilah sampah dan kumpulkan poin hari ini?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 rounded-2xl border border-emerald-100 bg-white/90 p-2">
          <div className="rounded-xl bg-emerald-50 px-3 py-2 text-center">
            <p className="text-xs text-slate-500">Total Poin</p>
            <p className="text-sm font-bold text-emerald-700">{user.points}</p>
          </div>
          <div className="rounded-xl bg-lime-50 px-3 py-2 text-center">
            <p className="text-xs text-slate-500">Level</p>
            <p className="text-sm font-bold text-emerald-700">{user.level}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
