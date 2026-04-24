'use client';

import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  suffix?: string;
  color?: 'emerald' | 'blue' | 'amber' | 'purple';
}

export default function StatCard({
  icon,
  label,
  value,
  suffix,
  color = 'emerald',
}: StatCardProps) {
  type ColorType = 'emerald' | 'blue' | 'amber' | 'purple';
  
  const colorClasses: Record<ColorType, string> = {
    emerald: 'bg-emerald-50 border-emerald-200',
    blue: 'bg-blue-50 border-blue-200',
    amber: 'bg-amber-50 border-amber-200',
    purple: 'bg-purple-50 border-purple-200',
  };

  const iconColorClasses: Record<ColorType, string> = {
    emerald: 'text-emerald-600',
    blue: 'text-blue-600',
    amber: 'text-amber-600',
    purple: 'text-purple-600',
  };

  const typedColor = color as ColorType;

  return (
    <div
      className={`${colorClasses[typedColor]} border rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300`}
    >
      <div className={`${iconColorClasses[typedColor]} text-2xl shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-600 font-medium">{label}</p>
        <div className="flex items-baseline gap-2 mt-2">
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {suffix && <span className="text-sm text-gray-500">{suffix}</span>}
        </div>
      </div>
    </div>
  );
}
