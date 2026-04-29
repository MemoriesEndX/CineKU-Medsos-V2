'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { impactStats } from '@/data/landing';

interface CountUpProps {
  target: number;
  triggerRef: React.RefObject<HTMLElement | null>;
}

const CountUp = ({ target, triggerRef }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const isInView = useInView(triggerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) {
      return;
    }

    hasAnimatedRef.current = true;
    let frameId = 0;
    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setCount(Math.floor(eased * target));

      if (elapsed < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, target]);

  return <span>{count}</span>;
};

export default function ImpactStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-purple-50/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dampak Nyata Cineku
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pengguna yang sudah membantu menjaga lingkungan.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-linear-to-br ${stat.color} transition-opacity duration-300`}
              />

              {/* Icon */}
              <div className="text-5xl mb-6">{stat.icon}</div>

              {/* Number and label */}
              <div className="relative z-10">
                <div className="mb-2">
                  <span className={`text-4xl sm:text-5xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>
                    <CountUp target={stat.value} triggerRef={sectionRef} />
                  </span>
                  <span className="text-2xl font-bold text-gray-600 ml-1">{stat.suffix}</span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Mari bersama-sama ciptakan dampak positif untuk lingkungan
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-50 border border-amber-200 rounded-full">
            <span className="text-2xl">🎬</span>
            <p className="text-sm font-semibold text-amber-700">Bergabunglah dengan komunitas kami sekarang</p>
          </div>
        </div>
      </div>
    </section>
  );
}
