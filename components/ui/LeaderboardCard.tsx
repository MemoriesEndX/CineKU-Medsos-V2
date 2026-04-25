'use client';

import React from 'react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  isCurrentUser?: boolean;
}

interface LeaderboardCardProps {
  entries: LeaderboardEntry[];
}

export default function LeaderboardCard({ entries }: LeaderboardCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span className="text-2xl">🏆</span>
        Leaderboard
      </h3>

      <div className="space-y-3">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
              entry.isCurrentUser
                ? 'bg-emerald-50 border border-emerald-200'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  entry.rank === 1
                    ? 'bg-amber-400 text-white'
                    : entry.rank === 2
                      ? 'bg-gray-400 text-white'
                      : entry.rank === 3
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-300 text-gray-700'
                }`}
              >
                {entry.rank}
              </div>
              <p
                className={`font-medium ${
                  entry.isCurrentUser ? 'text-emerald-900' : 'text-gray-700'
                }`}
              >
                {entry.name}
                {entry.isCurrentUser && <span className="ml-2 text-xs bg-emerald-200 text-emerald-800 px-2 py-1 rounded-full">Anda</span>}
              </p>
            </div>
            <p className="font-bold text-emerald-600">{entry.points.toLocaleString('id-ID')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
