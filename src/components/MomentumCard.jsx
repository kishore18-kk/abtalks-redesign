import React from 'react';
import { Zap, TrendingUp, Sparkles, Target } from 'lucide-react';
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

  // Calculate milestone progress percentage towards next stage
  const currentLevel = momentumInfo.level;
  const nextMilestone = momentumInfo.nextMilestone;
  const milestoneProgress = Math.min(100, Math.round((streak / nextMilestone) * 100));

  return (
    <div className={`bg-[#111113] border border-[#27272A] rounded-2xl p-4 relative overflow-hidden ${className}`}>
      {/* Top Tag */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#CCFF00] bg-[#CCFF00]/10 px-2.5 py-1 rounded-full border border-[#CCFF00]/30 font-mono">
          <Zap className="w-3.5 h-3.5 fill-[#CCFF00]/20" />
          <span>Momentum Engine</span>
        </div>
        <span className="text-xs font-mono text-[#A1A1AA] bg-[#18181B] px-2 py-0.5 rounded border border-[#27272A]">
          Stage: {momentumInfo.stage}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* Progress Ring Visual */}
        <ProgressRing
          percentage={progress}
          size={76}
          strokeWidth={7}
          label={`${streak}d`}
          sublabel="Streak"
          strokeColor="#CCFF00"
        />

        {/* Message & Stage Detail */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[#F5F5F5] font-bold text-sm leading-tight mb-1">
            <Sparkles className="w-4 h-4 text-[#CCFF00] shrink-0" />
            <span className="truncate">&quot;{displayMessage}&quot;</span>
          </div>
          
          <p className="text-xs text-[#A1A1AA] leading-snug font-sans mb-2">
            Target: <strong className="text-[#F5F5F5]">{nextMilestone} days</strong> for next momentum badge!
          </p>

          {/* Micro Progress Bar towards next milestone */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-mono text-[#71717A]">
              <span>Milestone Progress</span>
              <span>{streak}/{nextMilestone} Days</span>
            </div>
            <div className="w-full h-1.5 bg-[#18181B] rounded-full overflow-hidden border border-[#27272A]">
              <div
                className="h-full bg-gradient-to-r from-[#CCFF00]/80 to-[#CCFF00] rounded-full transition-all duration-500"
                style={{ width: `${milestoneProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
