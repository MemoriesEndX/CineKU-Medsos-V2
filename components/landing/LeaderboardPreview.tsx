'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { leaderboardUsers } from '@/data/landing';

gsap.registerPlugin(ScrollTrigger);

export default function LeaderboardPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const container = containerRef.current;
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const rows = container.querySelectorAll('[data-rank]');

      gsap.from(rows, {
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.6,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Top Performers
          </h2>
          <p className="text-lg text-gray-600">
            Siapa saja yang memilah sampah terbanyak bulan ini?
          </p>
        </div>

        {/* Leaderboard Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 md:px-8 py-6">
            <h3 className="text-xl font-bold text-white">Leaderboard Global</h3>
            <p className="text-emerald-100 text-sm mt-1">Ranking pemilah sampah terbaik bulan ini</p>
          </div>

          {/* Leaderboard table */}
          <div ref={containerRef} className="divide-y divide-gray-200">
            {leaderboardUsers.map((user) => (
              <div
                key={user.id}
                data-rank={user.rank}
                className="px-6 md:px-8 py-4 hover:bg-emerald-50/50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between gap-4">
                  {/* Rank and info */}
                  <div className="flex items-center gap-4 flex-1">
                    {/* Rank badge */}
                    <div className="relative w-12 h-12 flex-shrink-0">
                      {user.rank === 1 && (
                        <div className="absolute inset-0 animate-pulse bg-yellow-300 rounded-full blur-md opacity-50" />
                      )}
                      <div
                        className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg ${
                          user.rank === 1
                            ? 'bg-gradient-to-br from-yellow-400 to-yellow-500'
                            : user.rank === 2
                              ? 'bg-gradient-to-br from-gray-400 to-gray-500'
                              : 'bg-gradient-to-br from-orange-400 to-orange-500'
                        }`}
                      >
                        {user.rank === 1 ? '👑' : `#${user.rank}`}
                      </div>
                    </div>

                    {/* User info */}
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-200 to-teal-200 flex items-center justify-center text-xl">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">
                          {user.rank === 1 ? 'Top Performer' : user.rank === 2 ? 'Rising Star' : 'Great Player'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-lg font-bold text-emerald-600">{user.points}</span>
                    <span className="text-sm text-gray-500">pts</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-3 ml-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                    style={{ width: `${(user.points / 3250) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 md:px-8 py-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Lihat lebih banyak pengguna di leaderboard lengkap
            </p>
            <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors">
              Lihat Semua →
            </button>
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 border border-emerald-200 rounded-full">
            <span className="text-2xl">🎯</span>
            <p className="text-sm font-semibold text-emerald-700">Setiap pemilahan yang tepat naik 5 peringkat di leaderboard!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
