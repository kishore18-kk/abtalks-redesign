import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  Flame,
  Sparkles,
  ArrowRight,
  Trophy,
  Zap,
  Shield,
  CheckCircle2,
  Clock,
  Code2,
  User,
  AlertTriangle,
  RotateCcw,
  Sliders
} from 'lucide-react';
import BottomNav from '../components/BottomNav';
import Button from '../components/Button';
import ProgressRing from '../components/ProgressRing';
import DayTimeline from '../components/DayTimeline';
import AchievementCard from '../components/AchievementCard';
import {
  studentData,
  todayChallenge,
  achievementsData,
  getMomentumStage,
  mockEdgeCases
} from '../data/mockData';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeStateMode, setActiveStateMode] = useState('active'); // 'active' | 'firstDay' | 'missedDay'
  const [hasUnreadNotification, setHasUnreadNotification] = useState(true);

  // Determine current active state object dynamically based on state mode
  let currentStudent = studentData;
  let currentChallenge = todayChallenge;
  let isMissed = false;

  if (activeStateMode === 'firstDay') {
    currentStudent = mockEdgeCases.firstDay.student;
    currentChallenge = mockEdgeCases.firstDay.todayChallenge;
  } else if (activeStateMode === 'missedDay') {
    currentStudent = mockEdgeCases.missedDay.student;
    currentChallenge = mockEdgeCases.missedDay.todayChallenge;
    isMissed = true;
  }

  const momentumInfo = getMomentumStage(currentStudent.streak);

  const handleDaySelect = (dayNum) => {
    if (dayNum === 12 || dayNum === 1) {
      navigate(`/day/${dayNum}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F5F5F5] pb-24 font-sans max-w-md mx-auto relative border-x border-[#27272A]/50 overflow-x-hidden">
      {/* ================= 1. HEADER ================= */}
      <header className="sticky top-0 z-40 bg-[#09090B]/95 backdrop-blur-md border-b border-[#27272A] px-4 py-3">
        <div className="flex items-center justify-between">
          {/* ABTalks Brand */}
          <Link to="/" className="flex items-center gap-2 group active-press">
            <div className="w-8 h-8 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-center group-hover:border-[#CCFF00]/50 transition-colors">
              <span className="font-black text-sm text-[#CCFF00]">AB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[#F5F5F5] flex items-center gap-1">
                abtalks
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse"></span>
              </span>
              <span className="text-[9px] text-[#A1A1AA] uppercase tracking-wider font-mono">
                60-Day Sprint
              </span>
            </div>
          </Link>

          {/* Right Action Bar: Notification & Profile */}
          <div className="flex items-center gap-2.5">
            {/* Notification Icon */}
            <button
              onClick={() => setHasUnreadNotification(false)}
              aria-label="Notifications"
              className="relative p-2 rounded-xl bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors active-press"
            >
              <Bell className="w-4 h-4" />
              {hasUnreadNotification && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#CCFF00] rounded-full ring-2 ring-[#09090B] animate-pulse" />
              )}
            </button>

            {/* Student Avatar */}
            <Link to="/dashboard" className="flex items-center gap-2 active-press">
              <div className="w-8 h-8 rounded-full bg-[#18181B] border border-[#CCFF00]/40 overflow-hidden flex items-center justify-center">
                {currentStudent.avatarUrl ? (
                  <img src={currentStudent.avatarUrl} alt={currentStudent.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-4 h-4 text-[#A1A1AA]" />
                )}
              </div>
            </Link>
          </div>
        </div>
      </header>

      <main className="px-4 pt-3 space-y-5">
        {/* State Demo Toggle Bar for Evaluators / Hackathon Judges */}
        <div className="bg-[#18181B]/80 border border-[#27272A] rounded-xl p-2 flex items-center justify-between gap-1 text-[11px] font-mono">
          <span className="text-[#A1A1AA] flex items-center gap-1 pl-1">
            <Sliders className="w-3.5 h-3.5 text-[#CCFF00]" /> Demo State:
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveStateMode('active')}
              className={`px-2 py-1 rounded-md transition-all ${
                activeStateMode === 'active'
                  ? 'bg-[#CCFF00] text-[#09090B] font-bold'
                  : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
              }`}
            >
              11d Streak
            </button>
            <button
              onClick={() => setActiveStateMode('firstDay')}
              className={`px-2 py-1 rounded-md transition-all ${
                activeStateMode === 'firstDay'
                  ? 'bg-[#CCFF00] text-[#09090B] font-bold'
                  : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
              }`}
            >
              Day 1
            </button>
            <button
              onClick={() => setActiveStateMode('missedDay')}
              className={`px-2 py-1 rounded-md transition-all ${
                activeStateMode === 'missedDay'
                  ? 'bg-amber-400 text-[#09090B] font-bold'
                  : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
              }`}
            >
              Missed
            </button>
          </div>
        </div>

        {/* Greeting Banner */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-[#F5F5F5] tracking-tight">
              Good evening, {currentStudent.name} 👋
            </h1>
            <p className="text-xs text-[#A1A1AA] font-mono mt-0.5">
              {currentStudent.college} • Leaderboard <strong className="text-[#CCFF00]">#{currentStudent.rank}</strong>
            </p>
          </div>
        </div>

        {/* Missed Day Recovery Banner (if active) */}
        {isMissed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-3 bg-amber-500/10 border border-amber-500/40 rounded-2xl flex items-start gap-3 text-xs text-amber-300"
          >
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold text-amber-200">Streak Recovery Available!</strong>
              You missed yesterday&apos;s build. Complete today&apos;s mission to protect your progress and reignite your momentum!
            </div>
          </motion.div>
        )}

        {/* ================= 2. STREAK / PROGRESS SECTION ================= */}
        <motion.section
          key={activeStateMode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111113] border border-[#27272A] rounded-2xl p-4 relative overflow-hidden shadow-lg"
        >
          {/* Background Glow */}
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#CCFF00]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between gap-3">
            {/* Left Info: Prominent Streak & Day Count */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-xs font-bold">
                <Flame className="w-4 h-4 fill-[#CCFF00]/30 animate-pulse" />
                <span>🔥 {currentStudent.streak} DAY STREAK</span>
              </div>

              <div className="pt-1">
                <div className="text-2xl font-black text-[#F5F5F5] font-mono tracking-tight">
                  Day {currentStudent.currentDay} <span className="text-sm font-normal text-[#A1A1AA]">/ {currentStudent.totalDays}</span>
                </div>
                <p className="text-xs text-[#A1A1AA] font-medium">
                  {currentStudent.completed} days completed • <strong className="text-[#CCFF00]">{currentStudent.completion}% Complete</strong>
                </p>
              </div>
            </div>

            {/* Right: SVG Progress Ring */}
            <div className="shrink-0">
              <ProgressRing
                percentage={currentStudent.completion}
                size={76}
                strokeWidth={7}
                label={`${currentStudent.completion}%`}
                sublabel="Progress"
                strokeColor="#CCFF00"
              />
            </div>
          </div>
        </motion.section>

        {/* ================= 3. TODAY'S MISSION (VISUALLY DOMINANT) ================= */}
        <motion.section
          key={`mission-${activeStateMode}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="space-y-2"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold font-mono text-[#A1A1AA] uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#CCFF00]" /> Today&apos;s Mission
            </h2>
            <span className="text-[11px] font-mono text-[#CCFF00] font-bold">
              Action Required
            </span>
          </div>

          {/* Visually Dominant Mission Card */}
          <div className="bg-[#111113] border-2 border-[#CCFF00] rounded-2xl p-4 shadow-[0_0_30px_rgba(204,255,0,0.18)] relative overflow-hidden space-y-3">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Card Badges */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black font-mono text-[#09090B] bg-[#CCFF00] px-2.5 py-0.5 rounded-md font-bold">
                  DAY {currentChallenge.day}
                </span>
                <span className="text-[11px] font-semibold text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded-md border border-[#CCFF00]/30 font-mono">
                  {currentChallenge.difficulty}
                </span>
              </div>

              <div className="flex items-center gap-1 text-xs text-[#A1A1AA] font-mono">
                <Clock className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>{currentChallenge.duration}</span>
              </div>
            </div>

            {/* Mission Title & Goal */}
            <div>
              <h3 className="text-lg font-black text-[#F5F5F5] tracking-tight">
                {currentChallenge.title}
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                Goal: {currentChallenge.goal}
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => navigate(`/day/${currentChallenge.day}`)}
                className="text-base py-3.5 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
              >
                {isMissed ? 'Rebuild Streak & Complete Day 12' : currentStudent.currentDay === 1 ? 'Start Day 1 Mission' : 'Continue Mission'}
              </Button>
            </div>
          </div>
        </motion.section>

        {/* ================= 4. MOMENTUM ENGINE ================= */}
        <motion.section
          key={`momentum-${activeStateMode}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#111113] border border-[#27272A] rounded-2xl p-4 space-y-3 relative overflow-hidden"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#CCFF00] font-mono">
              <Sparkles className="w-4 h-4" />
              <span>Momentum Engine</span>
            </div>
            <span className="text-[10px] font-mono text-[#A1A1AA] bg-[#18181B] px-2 py-0.5 rounded border border-[#27272A]">
              Stage: {momentumInfo.stage}
            </span>
          </div>

          <div className="p-3 bg-[#18181B] rounded-xl border border-[#27272A] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#F5F5F5] flex items-center gap-1.5">
                🔥 {momentumInfo.message}
              </span>
              <span className="text-xs font-mono text-[#CCFF00] font-bold">
                {currentStudent.streak} Days
              </span>
            </div>
            <p className="text-xs text-[#A1A1AA] font-normal leading-snug">
              {currentStudent.streak === 0
                ? 'Complete today’s task to ignite your initial coding habit and unlock Stage 1!'
                : `${currentStudent.streak} consecutive days completed. Keep up the momentum to hit Stage ${momentumInfo.level + 1}!`}
            </p>

            {/* Stage Progress Bar */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[10px] font-mono text-[#71717A]">
                <span>Progress to Next Milestone</span>
                <span>{currentStudent.streak}/{momentumInfo.nextMilestone} Days</span>
              </div>
              <div className="w-full h-1.5 bg-[#09090B] rounded-full overflow-hidden border border-[#27272A]">
                <div
                  className="h-full bg-gradient-to-r from-[#CCFF00]/70 to-[#CCFF00] rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.round((currentStudent.streak / momentumInfo.nextMilestone) * 100))}%` }}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ================= 5. CHALLENGE JOURNEY TIMELINE ================= */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <DayTimeline
            currentDay={currentStudent.currentDay}
            onSelectDay={handleDaySelect}
          />
        </motion.section>

        {/* ================= 6. ACHIEVEMENTS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2.5"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold font-mono text-[#A1A1AA] uppercase tracking-wider flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-[#CCFF00]" /> Achievements
            </h2>
            <span className="text-[11px] font-mono text-[#CCFF00]">
              {achievementsData.filter(a => a.unlocked).length}/{achievementsData.length} Unlocked
            </span>
          </div>

          <div className="space-y-2">
            {achievementsData.slice(0, 3).map((ach) => (
              <AchievementCard
                key={ach.id}
                title={ach.title}
                description={ach.description}
                icon={ach.icon}
                unlocked={activeStateMode === 'firstDay' ? false : ach.unlocked}
                unlockedAt={activeStateMode === 'firstDay' ? 'Locked' : ach.unlockedAt}
                rarity={ach.rarity}
              />
            ))}
          </div>
        </motion.section>
      </main>

      <BottomNav />
    </div>
  );
}
