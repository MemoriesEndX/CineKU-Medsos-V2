'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const floatingLeaf1Ref = useRef<HTMLDivElement>(null);
  const floatingLeaf2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate tag
      if (tagRef.current) {
        tl.from(tagRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
        }, 0);
      }

      // Animate title
      if (titleRef.current) {
        tl.from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
        }, 0.1);
      }

      // Animate subtitle
      if (subtitleRef.current) {
        tl.from(subtitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
        }, 0.2);
      }

      // Animate CTA buttons
      if (ctaContainerRef.current) {
        const buttons = ctaContainerRef.current.querySelectorAll('button, a');
        tl.from(buttons, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
        }, 0.3);
      }

      // Animate mockup
      if (mockupRef.current) {
        tl.from(mockupRef.current, {
          opacity: 0,
          scale: 0.9,
          y: 40,
          duration: 1,
        }, 0);
      }

      // Animate stats
      if (statsRef.current) {
        const stats = statsRef.current.querySelectorAll('[data-stat]');
        tl.from(stats, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
        }, 0.4);
      }

      // Floating leaves animation
      if (floatingLeaf1Ref.current) {
        gsap.to(floatingLeaf1Ref.current, {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (floatingLeaf2Ref.current) {
        gsap.to(floatingLeaf2Ref.current, {
          y: -15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-white">
      {/* Subtle background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      {/* Floating leaves decoration */}
      <div ref={floatingLeaf1Ref} className="absolute top-32 left-12 text-6xl opacity-20 pointer-events-none">🍃</div>
      <div ref={floatingLeaf2Ref} className="absolute bottom-32 right-16 text-5xl opacity-15 pointer-events-none">🍃</div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="flex flex-col gap-6 md:gap-8 pt-8 lg:pt-0">
            {/* Tag */}
            <div
              ref={tagRef}
              className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200"
            >
              <span className="text-xl">🌱</span>
              <span className="text-sm font-medium text-emerald-700">Pilah Sampah, Jaga Bumi</span>
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900"
            >
              Pilah Sampah
              <br />
              Lebih Pintar
              <br />
              <span className="text-emerald-600">dengan AI</span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl"
            >
              Upload foto sampahmu, biarkan AI mengenali jenisnya, lalu kumpulkan poin dan badge dari setiap aksi baikmu.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaContainerRef} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold text-base hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-emerald-600/40">
                Mulai Pilah Sekarang
              </button>
              <button className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold text-base hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 justify-center">
                <span>▶</span> Lihat Cara Kerja
              </button>
            </div>
          </div>

          {/* Right Side - App Mockup */}
          <div className="relative flex justify-center lg:justify-end pt-0 lg:pt-8">
            <div
              ref={mockupRef}
              className="relative w-full max-w-sm"
            >
              {/* Phone Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Status Bar */}
                <div className="bg-white h-8 flex items-center justify-between px-6 text-xs text-gray-900 font-semibold">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* Notch */}
                <div className="bg-black h-6 flex justify-center items-center">
                  <div className="w-32 h-5 bg-black rounded-b-2xl" />
                </div>

                {/* App Content */}
                <div className="bg-white p-5 space-y-5">
                  {/* App Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        🗑️
                      </div>
                      <span className="font-bold text-gray-900">Pilah Yuk!!</span>
                    </div>
                    <div className="flex gap-2 text-gray-600">
                      <span className="text-xl">🔔</span>
                      <span className="text-xl">👤</span>
                    </div>
                  </div>

                  {/* Upload Section */}
                  <div className="bg-white border-2 border-dashed border-emerald-300 rounded-2xl p-6 flex flex-col items-center gap-3 min-h-32 justify-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-xl">
                      🗑️
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-medium text-gray-700">Upload foto sampahmu</p>
                      <p className="text-xs text-gray-500">JPG, PNG maks. 5MB</p>
                    </div>
                  </div>

                  {/* Detection Result */}
                  <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                    <p className="text-xs text-gray-500 font-medium">Deteksi Hasil</p>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-gray-900">Plastik</p>
                        <p className="text-xs text-emerald-600 font-semibold">92% Akurat</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 font-medium">Poin</p>
                        <p className="font-bold text-emerald-600 text-lg">+10</p>
                      </div>
                    </div>
                  </div>

                  {/* Category Icons */}
                  <div className="flex justify-between items-center gap-2 text-center">
                    {[
                      { icon: '🧴', label: 'Plastik' },
                      { icon: '📄', label: 'Kertas' },
                      { icon: '🥛', label: 'Kaca' },
                      { icon: '🔧', label: 'Logam' },
                      { icon: '🍂', label: 'Organik' },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className="text-2xl">{item.icon}</div>
                        <p className="text-xs text-gray-600 font-medium">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="bg-white border-t border-gray-200 p-4 flex justify-around items-center">
                  {[
                    { icon: '🏠', label: 'Beranda' },
                    { icon: '📸', label: 'Upload' },
                    { icon: '⊕', label: '' },
                    { icon: '🏆', label: 'Leaderboard' },
                    { icon: '👤', label: 'Akun' },
                  ].map((item, i) => (
                    <button
                      key={i}
                      className="flex flex-col items-center gap-1 text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      <span className="text-xl">{item.icon}</span>
                      {item.label && (
                        <span className="text-xs font-medium">{item.label}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Badge with floating effect */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl border-4 border-white transform hover:scale-110 transition-transform">
                AI
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 lg:mt-20 pt-12 border-t border-gray-200">
          {[
            { icon: '🗑️', number: '1.200+', label: 'Sampah Terklasifikasi' },
            { icon: '🧴', number: '850+', label: 'Plastik Dipilah' },
            { icon: '👥', number: '320+', label: 'User Aktif' },
            { icon: '🌍', number: '5', label: 'Kategori Sampah' },
          ].map((stat, i) => (
            <div key={i} data-stat className="text-center py-4">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
