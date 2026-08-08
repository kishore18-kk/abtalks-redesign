import React from 'react';
import { ArrowRight, Clock, Award, CheckCircle2, Lock } from 'lucide-react';
import Button from './Button';

export default function MissionCard({
  day = 12,
  title = "Build a REST API",
  difficulty = "Intermediate",
  duration = "45 min",
  goal = "Build a REST API supporting CRUD operations.",
  status = "current", // "completed" | "current" | "upcoming"
  ctaText = "Start Challenge",
  onCtaClick = () => {},
  className = ''
}) {
  const isCurrent = status === 'current';
  const isCompleted = status === 'completed';

  const difficultyColors = {
    Beginner: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    Intermediate: 'text-[#CCFF00] bg-[#CCFF00]/10 border-[#CCFF00]/30',
    Advanced: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  };

  return (
    <div className={`bg-[#111113] border ${isCurrent ? 'border-[#CCFF00]/50 shadow-[0_0_20px_rgba(204,255,0,0.1)]' : 'border-[#27272A]'} rounded-2xl p-4 transition-all duration-200 ${className}`}>
      {/* Header Badges */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold font-mono text-[#CCFF00] bg-[#18181B] px-2.5 py-1 rounded-lg border border-[#27272A]">
            DAY {day}
          </span>
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${difficultyColors[difficulty] || difficultyColors.Intermediate}`}>
            {difficulty}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs text-[#A1A1AA] font-mono">
          <Clock className="w-3.5 h-3.5" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Challenge Title & Goal */}
      <h3 className="text-base font-bold text-[#F5F5F5] tracking-tight group-hover:text-[#CCFF00] transition-colors mb-1">
        {title}
      </h3>
      
      {goal && (
        <p className="text-xs text-[#A1A1AA] line-clamp-2 mb-4 leading-relaxed font-normal">
          {goal}
        </p>
      )}

      {/* CTA Button / Status Footer */}
      <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#27272A]/80">
        {isCompleted ? (
          <div className="w-full flex items-center justify-between text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-2 rounded-xl border border-emerald-400/30">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Challenge Completed
            </span>
            <span className="font-mono text-[10px] uppercase">Done</span>
          </div>
        ) : (
          <Button
            variant={isCurrent ? 'primary' : 'secondary'}
            size="md"
            fullWidth
            icon={ArrowRight}
            iconPosition="right"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );
}
