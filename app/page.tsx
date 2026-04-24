import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Pilah Yuk!!
            </span>
          </div>
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors text-sm"
          >
            Masuk
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Pilah Sampah <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Jadi Lebih Seru
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Ubah cara memilah sampah Anda menjadi pengalaman yang menyenangkan. Foto sampah, AI mendeteksi jenisnya, kumpulkan poin, dan naik leaderboard!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:shadow-lg transition-all duration-300 text-center"
              >
                🚀 Mulai Sekarang
              </Link>
              <a
                href="#cara-kerja"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-white border-2 border-emerald-600 text-emerald-600 font-semibold hover:bg-emerald-50 transition-colors text-center"
              >
                📖 Lihat Cara Kerja
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-900">1,200+</p>
                <p>Pengguna Aktif</p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-900">50K+</p>
                <p>Sampah Dipilah</p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-900">98%</p>
                <p>Akurasi AI</p>
              </div>
            </div>
          </div>

          {/* Hero Illustration - Simple & Modern */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              {/* Floating Cards Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Center Circle */}
                <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 blur-3xl opacity-20"></div>

                {/* Card 1 - Top Left */}
                <div className="absolute top-8 left-4 w-28 h-32 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-col items-center justify-center gap-2 animate-pulse">
                  <span className="text-4xl">📸</span>
                  <p className="text-xs font-semibold text-center text-gray-700">
                    Upload Foto
                  </p>
                </div>

                {/* Card 2 - Top Right */}
                <div className="absolute top-12 right-0 w-28 h-32 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-col items-center justify-center gap-2">
                  <span className="text-4xl">🤖</span>
                  <p className="text-xs font-semibold text-center text-gray-700">
                    AI Deteksi
                  </p>
                </div>

                {/* Card 3 - Bottom Left */}
                <div className="absolute bottom-8 left-0 w-28 h-32 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-col items-center justify-center gap-2">
                  <span className="text-4xl">⭐</span>
                  <p className="text-xs font-semibold text-center text-gray-700">
                    Raih Poin
                  </p>
                </div>

                {/* Card 4 - Bottom Right */}
                <div className="absolute bottom-12 right-4 w-28 h-32 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-col items-center justify-center gap-2">
                  <span className="text-4xl">🏆</span>
                  <p className="text-xs font-semibold text-center text-gray-700">
                    Leaderboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cara Kerja Section */}
      <section id="cara-kerja" className="bg-white border-y border-gray-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Bagaimana Cara Kerjanya?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Empat langkah sederhana untuk memulai perjalanan daur ulang Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200 h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Upload Foto Sampah
                </h3>
                <p className="text-gray-600 text-sm">
                  Ambil foto sampah Anda dengan kamera atau unggah dari galeri
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-emerald-400 rounded-full transform -translate-y-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  AI Mendeteksi Jenis
                </h3>
                <p className="text-gray-600 text-sm">
                  AI kami mengklasifikasikan: plastik, kertas, kaca, logam, atau organik
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-blue-400 rounded-full transform -translate-y-1/2"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Raih Poin & Badge
                </h3>
                <p className="text-gray-600 text-sm">
                  Dapatkan poin untuk setiap pendeteksian yang benar
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-amber-400 rounded-full transform -translate-y-1/2"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Naik Leaderboard
                </h3>
                <p className="text-gray-600 text-sm">
                  Bersaing dengan pengguna lain dan kuasai puncak peringkat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Lengkapi pengalaman gamifikasi daur ulang Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-emerald-600 text-2xl mb-4">
                🤖
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                AI Waste Classification
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Teknologi AI terdepan mengidentifikasi jenis sampah dengan akurasi 98% dari foto Anda
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-blue-600 text-2xl mb-4">
                ⭐
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Sistem Poin Dinamis
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kumpulkan poin dari setiap identifikasi sampah yang berhasil dan tingkatkan level Anda
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-amber-600 text-2xl mb-4">
                🏅
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Badge & Challenge
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Buka badge eksklusif dan ikuti challenge mingguan untuk hadiah menarik
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center text-purple-600 text-2xl mb-4">
                🏆
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Leaderboard Global
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lihat ranking Anda di leaderboard global dan bersaing dengan pengguna lain
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center text-green-600 text-2xl mb-4">
                📊
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Statistik Lingkungan
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lihat dampak positif Anda terhadap lingkungan dengan statistik real-time
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center text-red-600 text-2xl mb-4">
                🌍
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Komunitas Peduli
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bergabunglah dengan komunitas global yang peduli dengan keberlanjutan lingkungan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="bg-white border-y border-gray-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tampilan Dashboard
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kelola sampah Anda dengan antarmuka yang intuitif dan menyenangkan
            </p>
          </div>

          {/* Dashboard Preview Mock */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Greeting Card */}
              <div className="md:col-span-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Halo, User! 👋</h3>
                <p className="text-emerald-100">
                  Selamat datang kembali! Mari lanjutkan misi pilah sampah hari ini.
                </p>
              </div>

              {/* Stat Cards */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <p className="text-sm text-gray-600 font-medium">Total Poin</p>
                <p className="text-3xl font-bold text-emerald-600 mt-2">3,420</p>
                <p className="text-xs text-gray-500 mt-2">+250 hari ini</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <p className="text-sm text-gray-600 font-medium">Level</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
                <p className="text-xs text-gray-500 mt-2">Profesional</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <p className="text-sm text-gray-600 font-medium">Sampah Dipilah</p>
                <p className="text-3xl font-bold text-amber-600 mt-2">156</p>
                <p className="text-xs text-gray-500 mt-2">Dalam minggu ini</p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                <p className="text-sm text-gray-600 font-medium">Badge Aktif</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">8</p>
                <p className="text-xs text-gray-500 mt-2">Dapatkan lebih banyak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Siap Memulai Perjalanan Daur Ulang?
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pengguna yang telah membantu lingkungan melalui Pilah Yuk!!
          </p>

          <Link
            href="/login"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg hover:shadow-xl transition-all duration-300"
          >
            🚀 Daftar Sekarang dengan Google
          </Link>

          <p className="text-gray-500 text-sm mt-6">
            Gratis selamanya • Tidak perlu kartu kredit • Mulai dalam hitungan detik
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Pilah Yuk!!</h4>
              <p className="text-sm">
                Platform gamifikasi daur ulang berbasis AI untuk masa depan yang lebih berkelanjutan.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Produk</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Fitur
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Perusahaan</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">
              &copy; 2026 Pilah Yuk!!. Dibuat dengan ❤️ untuk bumi yang lebih hijau.
            </p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
