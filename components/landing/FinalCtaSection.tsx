'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !sectionRef.current) return;

    const content = contentRef.current;
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const elements = content.querySelectorAll('[data-animate]');

      gsap.from(elements, {
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <div ref={contentRef} className="relative z-10">
          {/* Floating icons animation container */}
          <div className="mb-8 md:mb-12 flex justify-center gap-4 flex-wrap">
            {['♻️', '🌍', '🌱'].map((icon, idx) => (
              <div
                key={icon}
                data-animate=""
                className="text-3xl md:text-4xl animate-bounce"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Content */}
          <h2
            data-animate=""
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Mulai Pilah Sampah{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              dari Sekarang
            </span>
          </h2>

          <p
            data-animate=""
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Setiap foto sampah yang kamu upload bisa menjadi langkah kecil untuk lingkungan yang lebih baik. Bergabunglah dengan jutaan pengguna yang sudah memulai perjalanan mereka menuju gaya hidup yang lebih berkelanjutan.
          </p>

          {/* Benefits */}
          <div
            data-animate=""
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12"
          >
            <div className="p-4 md:p-6 rounded-xl bg-white border border-gray-200 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all">
              <span className="text-3xl md:text-4xl mb-3 block">🎁</span>
              <p className="font-semibold text-gray-900 mb-1">Gratis Selamanya</p>
              <p className="text-sm text-gray-600">Nikmati semua fitur tanpa biaya tersembunyi</p>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-white border border-gray-200 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all">
              <span className="text-3xl md:text-4xl mb-3 block">⚡</span>
              <p className="font-semibold text-gray-900 mb-1">Instan & Akurat</p>
              <p className="text-sm text-gray-600">Klasifikasi AI tercepat dan paling akurat</p>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-white border border-gray-200 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all">
              <span className="text-3xl md:text-4xl mb-3 block">🌟</span>
              <p className="font-semibold text-gray-900 mb-1">Reward Nyata</p>
              <p className="text-sm text-gray-600">Tukar poin dengan hadiah menarik</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            data-animate=""
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 md:px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Masuk dengan Google
            </button>
            <button className="px-8 md:px-10 py-4 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Pelajari Lebih Lanjut
            </button>
          </div>

          {/* Trust badge */}
          <div
            data-animate=""
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600"
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
          </div>
        </div>
      </div>
    </section>
  );
}
