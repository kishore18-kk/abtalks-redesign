import React from 'react';
import { Flame, ShieldCheck } from 'lucide-react';
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
      className={`relative overflow-hidden bg-white border border-slate-200/90 rounded-2xl p-4 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)] ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Flame Icon Circle */}
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 text-emerald-600 fill-emerald-500/20 animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                {streakCount}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono">
                Days Streak
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5 font-medium leading-snug">
              {supportingMessage}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Footer */}
      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
        <span className="flex items-center gap-1.5 text-slate-600 font-sans font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>{completedCount} of {totalDays} Days Done</span>
        </span>
        <span className="text-emerald-600 font-bold">
          {Math.round((completedCount / totalDays) * 100)}% Complete
        </span>
      </div>
    </motion.div>
  );
}
