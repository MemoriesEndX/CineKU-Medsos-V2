'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { impactStats } from '@/data/landing';

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  target: number;
  triggerRef: React.RefObject<HTMLElement | null>;
}

const CountUp = ({ target, triggerRef }: CountUpProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!textRef.current || !trigger) return;

    const obj = { value: 0 };

    gsap.to(obj, {
      scrollTrigger: {
        trigger,
        start: 'top center',
        once: true,
      },
      value: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        if (textRef.current) {
          textRef.current.textContent = Math.floor(obj.value).toString();
        }
      },
    });
  }, [target, triggerRef]);

  return <span ref={textRef}>0</span>;
};

export default function ImpactStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dampak Nyata Pilah Yuk!!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pengguna yang sudah membantu menjaga lingkungan.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {impactStats.map((stat) => (
            <div
              key={stat.id}
              className={`relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${stat.color} transition-opacity duration-300`}
              />

              {/* Icon */}
              <div className="text-5xl mb-6">{stat.icon}</div>

              {/* Number and label */}
              <div className="relative z-10">
                <div className="mb-2">
                  <span className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    <CountUp target={stat.value} triggerRef={sectionRef} />
                  </span>
                  <span className="text-2xl font-bold text-gray-600 ml-1">{stat.suffix}</span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Mari bersama-sama ciptakan dampak positif untuk lingkungan
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 border border-emerald-200 rounded-full">
            <span className="text-2xl">♻️</span>
            <p className="text-sm font-semibold text-emerald-700">Bergabunglah dengan komunitas kami sekarang</p>
          </div>
        </div>
      </div>
    </section>
  );
}
