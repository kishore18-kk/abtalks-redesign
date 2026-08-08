import React from 'react';
import { Check, Flame, Lock, ChevronRight } from 'lucide-react';
import { challengeDaysTimeline } from '../data/mockData';

export default function DayTimeline({
  currentDay = 12,
  days = challengeDaysTimeline,
  onSelectDay = () => {},
  className = ''
}) {
  return (
    <div className={`bg-[#111113] border border-[#27272A] rounded-2xl p-4 ${className}`}>
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <h3 className="text-xs font-bold font-mono text-[#F5F5F5] uppercase tracking-wider">
            60-Day Sprint Roadmap
          </h3>
          <span className="text-[10px] font-mono text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded-md border border-[#CCFF00]/30">
            Day {currentDay}/60
          </span>
        </div>
        <span className="text-[11px] text-[#A1A1AA] font-mono">Horizontal Scroll &rarr;</span>
      </div>

      {/* Horizontal Scrollable Timeline Pills for 390px mobile Viewport */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#27272A] touch-pan-x">
        {days.slice(0, 30).map((item) => {
          const isCompleted = item.status === 'completed';
          const isCurrent = item.day === currentDay;

          return (
            <button
              key={item.day}
              onClick={() => onSelectDay(item.day)}
              className={`flex flex-col items-center justify-center min-w-[56px] h-16 rounded-xl border p-1.5 transition-all duration-150 active-press ${
                isCurrent
                  ? 'bg-[#18181B] border-[#CCFF00] text-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.25)] scale-105'
                  : isCompleted
                  ? 'bg-[#18181B]/80 border-emerald-500/40 text-emerald-400'
                  : 'bg-[#18181B]/40 border-[#27272A] text-[#71717A] hover:border-[#3F3F46]'
              }`}
            >
              <span className="text-[10px] font-mono font-medium tracking-tight">
                DAY
              </span>
              <span className="text-base font-black font-mono leading-none my-0.5">
                {item.day}
              </span>

              <div className="mt-1">
                {isCurrent ? (
                  <Flame className="w-3.5 h-3.5 text-[#CCFF00] fill-[#CCFF00]/20 animate-bounce" />
                ) : isCompleted ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                ) : (
                  <Lock className="w-3 h-3 text-[#71717A]" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
