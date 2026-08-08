import React from 'react';
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function MissionCard({
  day = 12,
  title = "Build a REST API",
  difficulty = "Intermediate",
  duration = "45 min",
  goal = "Build a REST API supporting CRUD operations.",
  status = "current", // "completed" | "current" | "upcoming"
  ctaText = "Continue Mission",
  onCtaClick = () => {},
  className = ''
}) {
  const isCompleted = status === 'completed';

  return (
    <div className={`bg-white border-2 border-emerald-500/80 shadow-[0_4px_25px_rgba(22,163,74,0.12)] rounded-2xl p-5 transition-all duration-200 ${className}`}>
      {/* Header Badges */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black font-mono text-white bg-emerald-600 px-2.5 py-0.5 rounded-full font-bold shadow-xs">
            DAY {day}
          </span>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono">
            {difficulty}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs text-slate-500 font-mono">
          <Clock className="w-3.5 h-3.5 text-emerald-600" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Challenge Title & Goal */}
      <h3 className="text-lg font-black text-slate-900 tracking-tight mb-1">
        {title}
      </h3>
      
      {goal && (
        <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed font-normal">
          Goal: {goal}
        </p>
      )}

      {/* CTA Button / Status Footer */}
      <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
        {isCompleted ? (
          <div className="w-full flex items-center justify-between text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-full border border-emerald-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Challenge Completed
            </span>
            <span className="font-mono text-[10px] uppercase font-bold">Done</span>
          </div>
        ) : (
          <Button
            variant="primary"
            size="lg"
            fullWidth
            icon={ArrowRight}
            iconPosition="right"
            onClick={onCtaClick}
            className="text-base py-3.5 shadow-[0_4px_16px_rgba(22,163,74,0.25)]"
          >
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );
}
