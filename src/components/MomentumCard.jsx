import React from 'react';
import { Sparkles } from 'lucide-react';
import { getMomentumStage } from '../data/mockData';
import ProgressRing from './ProgressRing';

export default function MomentumCard({
  streak = 11,
  momentumMessage = null,
  progress = 18,
  className = ''
}) {
  const momentumInfo = getMomentumStage(streak);
  const displayMessage = momentumMessage || momentumInfo.message;

  const nextMilestone = momentumInfo.nextMilestone;
  const milestoneProgress = Math.min(100, Math.round((streak / nextMilestone) * 100));

  return (
    <div className={`bg-white border border-slate-200/90 rounded-2xl p-5 relative overflow-hidden shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)] ${className}`}>
      {/* Top Tag */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Momentum Engine</span>
        </div>
        <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/80 font-medium">
          Stage: {momentumInfo.stage}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* Progress Ring Visual */}
        <ProgressRing
          percentage={progress}
          size={72}
          strokeWidth={6}
          label={`${streak}d`}
          sublabel="Streak"
          strokeColor="#16A34A"
          trackColor="#E2E8F0"
        />

        {/* Message & Stage Detail */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm leading-tight mb-1">
            <span className="truncate">&quot;{displayMessage}&quot;</span>
          </div>
          
          <p className="text-xs text-slate-500 leading-snug font-sans mb-2">
            Target: <strong className="text-slate-900 font-bold">{nextMilestone} days</strong> for next momentum badge!
          </p>

          {/* Micro Progress Bar towards next milestone */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>Milestone Progress</span>
              <span className="text-emerald-700 font-bold">{streak}/{nextMilestone} Days</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
              <div
                className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                style={{ width: `${milestoneProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
