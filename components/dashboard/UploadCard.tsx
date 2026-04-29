"use client";

import { motion } from "framer-motion";

export default function UploadCard() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.97, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
      className="relative overflow-hidden rounded-3xl border border-amber-100 bg-white p-5 shadow-[0_16px_34px_-24px_rgba(16,185,129,0.55)] sm:p-6"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-2xl" aria-hidden="true" />

      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Upload foto productionmu</h2>
          <p className="mt-1 text-sm text-slate-600">AI akan membantu mengenali jenis production.</p>
        </div>
        <div className="hidden items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 sm:inline-flex">
          <span aria-hidden="true">🎬</span>
          Smart Scan
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-dashed border-amber-300 bg-amber-50/50 p-5 sm:p-6">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left">
          <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-amber-500 text-2xl text-white shadow-lg shadow-amber-700/20">
            🎬
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-700">Ambil foto production, lalu upload untuk diproses AI.</p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-amber-700 sm:justify-start">
              <span className="rounded-full bg-white px-2 py-1">🎬 Recycle</span>
              <span className="rounded-full bg-white px-2 py-1">🎬 Plastik</span>
              <span className="rounded-full bg-white px-2 py-1">📦 Kardus</span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-amber-600 to-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-900/20 transition hover:brightness-105 active:scale-[0.99]"
      >
        Pilih Gambar
      </button>
    </motion.section>
  );
}
