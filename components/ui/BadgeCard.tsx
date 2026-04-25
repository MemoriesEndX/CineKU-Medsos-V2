'use client';

import React from 'react';

interface BadgeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  unlocked?: boolean;
}

export default function BadgeCard({
  icon,
  title,
  description,
  unlocked = false,
}: BadgeCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 text-center flex flex-col items-center gap-3 border transition-all duration-300 ${
        unlocked
          ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-md'
          : 'bg-gray-50 border-gray-200 opacity-60'
      }`}
    >
      <div
        className={`text-4xl transition-transform ${unlocked ? 'scale-100' : 'scale-75 grayscale'}`}
      >
        {icon}
      </div>
      <div>
        <p className="font-bold text-gray-900 text-sm">{title}</p>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
      </div>
      {unlocked && (
        <div className="text-xs font-medium text-emerald-600 mt-2">✓ Terselesaikan</div>
      )}
    </div>
  );
}
