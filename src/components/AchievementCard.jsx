import React from 'react';
import { Flame, Shield, Code, Zap, Trophy, Rocket, Lock, CheckCircle } from 'lucide-react';

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
          ? 'bg-[#111113] border-[#CCFF00]/40 shadow-[0_0_15px_rgba(204,255,0,0.1)]'
          : 'bg-[#111113]/50 border-[#27272A] opacity-60 grayscale'
      } ${className}`}
    >
      <div className="flex items-start gap-3">
        {/* Icon container */}
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
            unlocked
              ? 'bg-[#18181B] border-[#CCFF00]/40 text-[#CCFF00]'
              : 'bg-[#18181B] border-[#27272A] text-[#71717A]'
          }`}
        >
          {IconComponent && <IconComponent className="w-5 h-5" />}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1 mb-0.5">
            <h4 className="text-xs font-bold text-[#F5F5F5] truncate">
              {title}
            </h4>
            <span
              className={`text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded border uppercase ${
                unlocked
                  ? 'text-[#CCFF00] bg-[#CCFF00]/10 border-[#CCFF00]/30'
                  : 'text-[#71717A] bg-[#18181B] border-[#27272A]'
              }`}
            >
              {unlocked ? 'Unlocked' : 'Locked'}
            </span>
          </div>

          <p className="text-[11px] text-[#A1A1AA] leading-snug line-clamp-2">
            {description}
          </p>

          <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-[#71717A]">
            <span>Rarity: {rarity}</span>
            <span>{unlockedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
