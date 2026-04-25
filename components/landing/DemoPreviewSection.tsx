'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DemoPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !mockupRef.current) return;

    const section = sectionRef.current;
    const content = contentRef.current;
    const mockup = mockupRef.current;

    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(content, {
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
      });

      // Mockup animation with parallax
      gsap.from(mockup, {
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: 40,
        duration: 0.8,
      });

      gsap.to(mockup, {
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: -20,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Lihat Preview Dashboard
            </h2>
            <p className="text-lg text-gray-600">
              Interface yang intuitif dan mudah digunakan untuk memilah sampah kapan saja dan di mana saja.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-100">
                    <span className="text-lg">📱</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Upload Mudah</h4>
                  <p className="text-gray-600 text-sm">Cukup ambil foto dengan kamera smartphone, AI akan mengenalinya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-100">
                    <span className="text-lg">⚡</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hasil Instan</h4>
                  <p className="text-gray-600 text-sm">Dapatkan hasil klasifikasi dalam hitungan detik</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-100">
                    <span className="text-lg">🏆</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rewards Langsung</h4>
                  <p className="text-gray-600 text-sm">Kumpulkan poin dan unlock badge eksklusif</p>
                </div>
              </div>
            </div>

            <button className="mt-4 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold w-fit hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Lihat Dashboard Lengkap
            </button>
          </div>

          {/* Demo Mockup */}
          <div ref={mockupRef} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute -inset-8 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-3xl blur-2xl opacity-20" />

              {/* Mockup card */}
              <div className="relative bg-gradient-to-br from-white to-emerald-50/50 rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500" />
                  <div>
                    <p className="font-bold text-gray-900">Pilah Yuk!!</p>
                    <p className="text-xs text-gray-500">Dashboard</p>
                  </div>
                </div>

                {/* Upload section */}
                <div className="bg-white rounded-2xl border-2 border-dashed border-emerald-300 p-8 flex flex-col items-center justify-center gap-3 mb-6">
                  <span className="text-5xl">📸</span>
                  <p className="text-sm text-gray-600 text-center font-medium">Ambil foto sampahmu</p>
                </div>

                {/* Result showcase */}
                <div className="space-y-4">
                  {/* Result card 1 */}
                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm font-bold text-gray-900">Plastik</p>
                        <p className="text-xs text-emerald-600 font-semibold">92% Akurat</p>
                      </div>
                      <span className="text-2xl">🍾</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Poin: <span className="font-bold text-emerald-500">+10</span></p>
                    <div className="w-full bg-emerald-200 rounded-full h-1.5">
                      <div className="bg-emerald-500 h-1.5 rounded-full w-11/12" />
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
                    <p className="text-2xl font-bold text-emerald-500">28</p>
                    <p className="text-xs text-gray-500">Hari Ini</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-500">156</p>
                    <p className="text-xs text-gray-500">Bulan Ini</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
