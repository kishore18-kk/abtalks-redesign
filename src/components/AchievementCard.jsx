import React from 'react';
import { Flame, Shield, Code, Zap, Trophy, Rocket } from 'lucide-react';

const iconMap = {
  Flame,
  Shield,
  Code,
  Zap,
  Trophy,
  Rocket
};

export default function AchievementCard({
  icon = 'Flame',
  title = 'First Blood',
  description = 'Completed Day 1 challenge successfully.',
  unlocked = false,
  unlockedAt = 'Locked',
  rarity = 'Common',
  className = ''
}) {
  const IconComponent = typeof icon === 'string' ? iconMap[icon] || Trophy : icon;

  return (
    <div
      className={`relative p-3.5 rounded-2xl border transition-all duration-200 ${
        unlocked
          ? 'bg-white border-emerald-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)]'
          : 'bg-slate-50/70 border-slate-200/80 opacity-60'
      } ${className}`}
    >
      <div className="flex items-start gap-3">
        {/* Icon container */}
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
            unlocked
              ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
              : 'bg-slate-100 border-slate-200 text-slate-400'
          }`}
        >
          {IconComponent && <IconComponent className="w-5 h-5" />}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1 mb-0.5">
            <h4 className="text-xs font-bold text-slate-900 truncate">
              {title}
            </h4>
            <span
              className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border uppercase ${
                unlocked
                  ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                  : 'text-slate-500 bg-slate-100 border-slate-200'
              }`}
            >
              {unlocked ? 'Unlocked' : 'Locked'}
            </span>
          </div>

          <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
            {description}
          </p>

          <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Rarity: {rarity}</span>
            <span>{unlockedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
