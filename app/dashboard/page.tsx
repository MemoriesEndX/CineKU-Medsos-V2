'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import StatCard from '@/components/StatCard';
import LeaderboardCard from '@/components/LeaderboardCard';
import BadgeCard from '@/components/BadgeCard';

export default function DashboardPage() {
  // TODO: Ganti dummy data dengan data real dari database Prisma
  // - Fetch user data dari session (NextAuth)
  // - Fetch user stats, badges, leaderboard dari database
  // - Update setiap kali ada activity baru

  const userName = 'Dafa Rizqy';
  const userLevel = 12;
  const userLevelName = 'Profesional';

  // Dummy data stats
  const stats = {
    totalPoints: 3420,
    pointsToday: 250,
    wasteDetected: 156,
    wasteThisWeek: 42,
    activeBadges: 8,
    level: userLevel,
  };

  // Dummy leaderboard data
  const leaderboardEntries = [
    { rank: 1, name: 'Nadia Putri', points: 4250, isCurrentUser: false },
    { rank: 2, name: 'Rafi Kurniawan', points: 3850, isCurrentUser: false },
    { rank: 3, name: userName, points: stats.totalPoints, isCurrentUser: true },
    { rank: 4, name: 'Salsa Nabila', points: 2950, isCurrentUser: false },
    { rank: 5, name: 'Budi Santoso', points: 2600, isCurrentUser: false },
  ];

  // Dummy weekly challenges
  const weeklyChallenges = [
    {
      id: 1,
      title: 'Deteksi 20 sampah plastik',
      current: 16,
      target: 20,
      icon: '♻️',
    },
    {
      id: 2,
      title: 'Upload 8 sampah organik',
      current: 5,
      target: 8,
      icon: '🌱',
    },
    {
      id: 3,
      title: 'Capai 1000 poin mingguan',
      current: 750,
      target: 1000,
      icon: '⭐',
    },
  ];

  // Dummy badges
  const badges = [
    { id: 1, icon: '♻️', title: 'Eco Starter', description: 'Upload 10 sampah', unlocked: true },
    { id: 2, icon: '🌱', title: 'Green Thumb', description: 'Deteksi 50 organik', unlocked: true },
    { id: 3, icon: '🏆', title: 'Champion', description: 'Ranking #1', unlocked: false },
    { id: 4, icon: '🌍', title: 'Global Hero', description: '5000 poin', unlocked: false },
    { id: 5, icon: '⚡', title: 'Streak Master', description: '30 hari berturut-turut', unlocked: true },
    { id: 6, icon: '💎', title: 'Platinum', description: 'Level 20', unlocked: false },
  ];

  const calculateProgress = (current: number, target: number): number => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  const handleUploadClick = () => {
    // TODO: Implementasi upload foto sampah
    // 1. Buka file picker
    // 2. Send image ke backend untuk AI classification
    // 3. Display hasil klasifikasi (jenis sampah)
    // 4. Award poin berdasarkan akurasi
    // 5. Update user points & stats di database
    alert('Fitur upload akan segera hadir! 📸');
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-white via-emerald-50 to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Pilah Yuk!!
          </Link>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              🔔
            </button>
            <button className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-bold flex items-center justify-center">
              DR
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Greeting Section */}
        <section className="mb-8">
          <div className="bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 sm:p-12 text-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Halo, {userName}! 👋
            </h1>
            <p className="text-emerald-100 text-lg">
              Selamat datang kembali! Semakin dekat dengan puncak leaderboard. Mari lanjutkan perjalanan menyelamatkan lingkungan hari ini.
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon="⭐"
              label="Total Poin"
              value={stats.totalPoints}
              suffix={`+${stats.pointsToday} hari ini`}
              color="emerald"
            />
            <StatCard
              icon="📊"
              label="Level"
              value={userLevel}
              suffix={userLevelName}
              color="blue"
            />
            <StatCard
              icon="📸"
              label="Sampah Dipilah"
              value={stats.wasteDetected}
              suffix={`+${stats.wasteThisWeek} minggu ini`}
              color="amber"
            />
            <StatCard
              icon="🏅"
              label="Badge Aktif"
              value={stats.activeBadges}
              suffix="Dapatkan lebih banyak"
              color="purple"
            />
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Upload & Challenges */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Upload Section */}
            <section className="bg-white border border-gray-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                📸 Foto Sampah Sekarang
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Ambil foto sampah Anda dan biarkan AI kami mendeteksi jenisnya. Dapatkan poin dan naik level!
              </p>
              <button
                onClick={handleUploadClick}
                className="w-full bg-linear-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="text-xl">📤</span>
                Upload Foto Sampah
              </button>
            </section>

            {/* Weekly Challenges */}
            <section className="bg-white border border-gray-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Challenge Mingguan
              </h2>

              <div className="space-y-6">
                {weeklyChallenges.map((challenge) => {
                  const progress = calculateProgress(challenge.current, challenge.target);
                  return (
                    <div key={challenge.id}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{challenge.icon}</span>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {challenge.title}
                            </p>
                            <p className="text-sm text-gray-500">
                              {challenge.current} / {challenge.target}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-emerald-600">
                          {progress}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-linear-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right Column - Leaderboard */}
          <div className="lg:col-span-1">
            <LeaderboardCard entries={leaderboardEntries} />
          </div>
        </div>

        {/* Badges Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            Badge Saya
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge) => (
              <BadgeCard
                key={badge.id}
                icon={badge.icon}
                title={badge.title}
                description={badge.description}
                unlocked={badge.unlocked}
              />
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-white border border-gray-100 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">📈</span>
            Dampak Lingkungan Anda
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                156
              </div>
              <p className="text-gray-600 text-sm">Sampah Terdeteksi</p>
              <p className="text-gray-500 text-xs mt-1">
                Membantu menjaga 156 item dari tempat pembuangan
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">
                12
              </div>
              <p className="text-gray-600 text-sm">Minggu Streak</p>
              <p className="text-gray-500 text-xs mt-1">
                Konsistensi Anda sangat menginspirasi!
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ~25kg
              </div>
              <p className="text-gray-600 text-sm">CO₂ Berkurang</p>
              <p className="text-gray-500 text-xs mt-1">
                Estimasi dampak positif Anda ke lingkungan
              </p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-linear-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Ingin tahu lebih banyak tentang dampak Anda?
          </h2>
          <p className="mb-6 text-emerald-100">
            Lihat statistik lengkap dan pencapaian Anda di halaman profil
          </p>
          <Link
            href="#"
            className="inline-block bg-white text-emerald-600 font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Lihat Profil Lengkap
          </Link>
        </section>
      </div>
    </main>
  );
}
