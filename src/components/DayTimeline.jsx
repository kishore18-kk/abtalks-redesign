import React from 'react';
import { Check, Flame, Lock } from 'lucide-react';
import { challengeDaysTimeline } from '../data/mockData';

export default function DayTimeline({
  currentDay = 12,
  days = challengeDaysTimeline,
  onSelectDay = () => {},
  className = ''
}) {
  return (
    <div className={`bg-white border border-slate-200/90 rounded-2xl p-4 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)] ${className}`}>
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <h3 className="text-xs font-bold font-mono text-slate-900 uppercase tracking-wider">
            60-Day Roadmap
          </h3>
          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
            Day {currentDay}/60
          </span>
        </div>
        <span className="text-[11px] text-slate-400 font-mono">Scroll &rarr;</span>
      </div>

      {/* Horizontal Scrollable Timeline Pills for 390px Mobile Viewport */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200 touch-pan-x">
        {days.slice(0, 30).map((item) => {
          const isCompleted = item.status === 'completed';
          const isCurrent = item.day === currentDay;

          return (
            <button
              key={item.day}
              onClick={() => onSelectDay(item.day)}
              className={`flex flex-col items-center justify-center min-w-[56px] h-16 rounded-xl border p-1.5 transition-all duration-150 active-press ${
                isCurrent
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-[0_4px_14px_rgba(22,163,74,0.3)] scale-105 font-bold'
                  : isCompleted
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  : 'bg-slate-50 border-slate-200/80 text-slate-400 hover:border-slate-300'
              }`}
            >
              <span className="text-[10px] font-mono font-medium tracking-tight opacity-90">
                DAY
              </span>
              <span className="text-base font-black font-mono leading-none my-0.5">
                {item.day}
              </span>

              <div className="mt-1">
                {isCurrent ? (
                  <Flame className="w-3.5 h-3.5 text-white fill-white/30 animate-bounce" />
                ) : isCompleted ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                ) : (
                  <Lock className="w-3 h-3 text-slate-300" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
