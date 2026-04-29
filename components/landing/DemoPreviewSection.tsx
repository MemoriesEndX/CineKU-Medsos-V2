'use client';

import { motion } from 'framer-motion';

export default function DemoPreviewSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Lihat Preview Dashboard
            </h2>
            <p className="text-lg text-gray-600">
              Interface yang intuitif dan mudah digunakan untuk memilah production kapan saja dan di mana saja.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-100">
                    <span className="text-lg">📱</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Upload Mudah</h4>
                  <p className="text-gray-600 text-sm">Cukup ambil foto dengan kamera smartphone, AI akan mengenalinya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-100">
                    <span className="text-lg">⚡</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hasil Instan</h4>
                  <p className="text-gray-600 text-sm">Dapatkan hasil klasifikasi dalam hitungan detik</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-100">
                    <span className="text-lg">🏆</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rewards Langsung</h4>
                  <p className="text-gray-600 text-sm">Kumpulkan poin dan unlock badge eksklusif</p>
                </div>
              </div>
            </div>

            <button className="mt-4 px-8 py-3 bg-linear-to-r from-amber-500 to-rose-600 text-white rounded-xl font-semibold w-fit hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Lihat Dashboard Lengkap
            </button>
          </motion.div>

          {/* Demo Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="relative w-full aspect-square max-w-md mx-auto" animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              {/* Background dcinemaration */}
              <div className="absolute -inset-8 bg-linear-to-br from-amber-200 to-rose-200 rounded-3xl blur-2xl opacity-20" />

              {/* Mockup card */}
              <div className="relative bg-linear-to-br from-white to-amber-50/50 rounded-3xl shadow-2xl border border-amber-200 overflow-hidden p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-400 to-rose-500" />
                  <div>
                    <p className="font-bold text-gray-900">Cineku</p>
                    <p className="text-xs text-gray-500">Dashboard</p>
                  </div>
                </div>

                {/* Upload section */}
                <div className="bg-white rounded-2xl border-2 border-dashed border-amber-300 p-8 flex flex-col items-center justify-center gap-3 mb-6">
                  <span className="text-5xl">📸</span>
                  <p className="text-sm text-gray-600 text-center font-medium">Ambil foto productionmu</p>
                </div>

                {/* Result showcase */}
                <div className="space-y-4">
                  {/* Result card 1 */}
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm font-bold text-gray-900">Plastik</p>
                        <p className="text-xs text-amber-600 font-semibold">92% Akurat</p>
                      </div>
                      <span className="text-2xl">🍾</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Poin: <span className="font-bold text-amber-500">+10</span></p>
                    <div className="w-full bg-amber-200 rounded-full h-1.5">
                      <div className="bg-amber-500 h-1.5 rounded-full w-11/12" />
                    </div>
                  </div>

                  {/* Result card 2 */}
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm font-bold text-gray-900">Kertas</p>
                        <p className="text-xs text-blue-600 font-semibold">88% Akurat</p>
                      </div>
                      <span className="text-2xl">📰</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Poin: <span className="font-bold text-blue-500">+8</span></p>
                    <div className="w-full bg-blue-200 rounded-full h-1.5">
                      <div className="bg-blue-500 h-1.5 rounded-full w-10/12" />
                    </div>
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="mt-6 pt-6 border-t border-gray-200 flex justify-around">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-500">28</p>
                    <p className="text-xs text-gray-500">Hari Ini</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-500">156</p>
                    <p className="text-xs text-gray-500">Bulan Ini</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
