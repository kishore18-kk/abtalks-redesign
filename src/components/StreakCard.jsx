import React from 'react';
import { Flame, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StreakCard({
  streakCount = 11,
  supportingMessage = "You're on an unbroken coding streak!",
  totalDays = 60,
  completedCount = 11,
  className = ''
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden bg-[#111113] border border-[#27272A] rounded-2xl p-4 shadow-lg ${className}`}
    >
      {/* Background Accent Glow */}
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#CCFF00]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Flame Icon Circle */}
          <div className="w-12 h-12 rounded-xl bg-[#18181B] border border-[#CCFF00]/40 flex items-center justify-center shadow-[0_0_15px_rgba(204,255,0,0.15)] shrink-0">
            <Flame className="w-6 h-6 text-[#CCFF00] fill-[#CCFF00]/20 animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-[#F5F5F5] font-mono tracking-tight">
                {streakCount}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded-full border border-[#CCFF00]/30 font-mono">
                Days Streak
              </span>
            </div>
            <p className="text-xs text-[#A1A1AA] mt-1 font-medium leading-snug">
              {supportingMessage}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Footer */}
      <div className="mt-3 pt-3 border-t border-[#27272A] flex items-center justify-between text-xs font-mono text-[#71717A]">
        <span className="flex items-center gap-1 text-[#A1A1AA]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#CCFF00]" />
          <span>{completedCount} of {totalDays} Days Done</span>
        </span>
        <span className="text-[#CCFF00] font-bold">
          {Math.round((completedCount / totalDays) * 100)}% Complete
        </span>
      </div>
    </motion.div>
  );
}
