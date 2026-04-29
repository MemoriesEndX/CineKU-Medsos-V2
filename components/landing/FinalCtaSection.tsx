'use client';

import { motion } from 'framer-motion';

export default function FinalCtaSection() {
  return (
    <section
      id="cta"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-amber-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Background dcinemarations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="relative z-10">
          {/* Floating icons animation container */}
          <div className="mb-8 md:mb-12 flex justify-center gap-4 flex-wrap">
            {['🎬', '🌍', '🎬'].map((icon, idx) => (
              <motion.div
                key={icon}
                className="text-3xl md:text-4xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                animate={{ y: [0, -8, 0] }}
              >
                {icon}
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Mulai Ciptakan Film{' '}
            <span className="bg-linear-to-r from-amber-500 to-rose-600 bg-clip-text text-transparent">
              dari Sekarang
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Setiap foto production yang kamu upload bisa menjadi langkah kecil untuk lingkungan yang lebih baik. Bergabunglah dengan jutaan pengguna yang sudah memulai perjalanan mereka menuju gaya hidup yang lebih berkelanjutan.
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="p-4 md:p-6 rounded-xl bg-white border border-gray-200 hover:border-amber-200 shadow-sm hover:shadow-md transition-all">
              <span className="text-3xl md:text-4xl mb-3 block">🎁</span>
              <p className="font-semibold text-gray-900 mb-1">Gratis Selamanya</p>
              <p className="text-sm text-gray-600">Nikmati semua fitur tanpa biaya tersembunyi</p>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-white border border-gray-200 hover:border-amber-200 shadow-sm hover:shadow-md transition-all">
              <span className="text-3xl md:text-4xl mb-3 block">⚡</span>
              <p className="font-semibold text-gray-900 mb-1">Instan & Akurat</p>
              <p className="text-sm text-gray-600">Klasifikasi AI tercepat dan paling akurat</p>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-white border border-gray-200 hover:border-amber-200 shadow-sm hover:shadow-md transition-all">
              <span className="text-3xl md:text-4xl mb-3 block">🌟</span>
              <p className="font-semibold text-gray-900 mb-1">Reward Nyata</p>
              <p className="text-sm text-gray-600">Tukar poin dengan hadiah menarik</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 md:px-10 py-4 bg-linear-to-r from-amber-500 to-rose-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Masuk dengan Google
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 md:px-10 py-4 border-2 border-amber-500 text-amber-600 rounded-xl font-semibold text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Pelajari Lebih Lanjut
            </motion.button>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <p>Sudah dipercaya 320+ pengguna</p>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-400" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <p>Rating 4.8 di semua platform</p>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-400" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔐</span>
              <p>Data 100% aman</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
