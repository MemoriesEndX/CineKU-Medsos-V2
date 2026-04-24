'use client';

import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-white via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              Pilah Yuk!!
            </h1>
            <p className="text-gray-600 text-sm">
              Platform gamifikasi daur ulang sampah berbasis AI
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

          {/* Main Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Selamat Datang Kembali 👋
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Masuk dengan akun Google Anda untuk mulai berkontribusi menyelamatkan lingkungan.
              </p>
            </div>

            {/* Google Login Button */}
            <button
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-900 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300"
              onClick={() => {
                // TODO: Integrasi Google OAuth
                // 1. Setup NextAuth.js dengan Google provider
                // 2. Implementasi callback untuk menyimpan user ke database Prisma
                // 3. Redirect ke /dashboard setelah login berhasil
                console.log('Google Auth akan diimplementasikan di sini');
                // Untuk sekarang, arahkan ke dashboard
                window.location.href = '/dashboard';
              }}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Lanjutkan dengan Google
            </button>

            {/* Alternative Message */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">atau</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 p-4 bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
              <h3 className="font-semibold text-gray-900 text-sm">
                Mengapa Pilah Yuk!!?
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>AI canggih mendeteksi jenis sampah dengan akurasi 98%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Kumpulkan poin dan badge eksklusif</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Bersaing di leaderboard global</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Lihat dampak lingkungan Anda secara real-time</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-500 space-y-2">
            <p>
              Dengan masuk, Anda menyetujui{' '}
              <a href="#" className="text-emerald-600 hover:underline">
                Ketentuan Layanan
              </a>{' '}
              dan{' '}
              <a href="#" className="text-emerald-600 hover:underline">
                Kebijakan Privasi
              </a>
              .
            </p>
            <p>
              Belum punya akun?{' '}
              <a href="#" className="text-emerald-600 hover:underline font-medium">
                Buat akun baru
              </a>
            </p>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            <span>←</span>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
