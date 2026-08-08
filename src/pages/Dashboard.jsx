import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  User
} from 'lucide-react';
import BottomNav from '../components/BottomNav';
import Button from '../components/Button';
import ProgressRing from '../components/ProgressRing';
import DayTimeline from '../components/DayTimeline';
import AchievementCard from '../components/AchievementCard';
import { studentData, todayChallenge, achievementsData, getMomentumStage } from '../data/mockData';

export default function Dashboard() {
  const navigate = useNavigate();
  const [student] = useState(studentData);
  const [hasUnreadNotification, setHasUnreadNotification] = useState(true);

  const momentumInfo = getMomentumStage(student.streak);

  // Time-of-day greeting generator
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const handleDaySelect = (dayNum) => {
    if (dayNum === 12) {
      navigate('/day/12');
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F5F5F5] pb-24 font-sans max-w-md mx-auto relative border-x border-[#27272A]/50 overflow-x-hidden">
      {/* ================= 1. HEADER ================= */}
      <header className="sticky top-0 z-40 bg-[#09090B]/90 backdrop-blur-md border-b border-[#27272A] px-4 py-3">
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
                {student.avatarUrl ? (
                  <img src={student.avatarUrl} alt={student.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-4 h-4 text-[#A1A1AA]" />
                )}
              </div>
            </Link>
          </div>
        </div>
      </header>

      <main className="px-4 pt-4 space-y-6">
        {/* Greeting Banner */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-[#F5F5F5] tracking-tight">
              Good evening, {student.name} 👋
            </h1>
            <p className="text-xs text-[#A1A1AA] font-mono mt-0.5">
              {student.college} • Leaderboard <strong className="text-[#CCFF00]">#{student.rank}</strong>
            </p>
          </div>
        </div>

        {/* ================= 2. STREAK / PROGRESS SECTION ================= */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111113] border border-[#27272A] rounded-2xl p-4 relative overflow-hidden shadow-lg"
        >
          {/* Subtle Background Glow */}
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#CCFF00]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between gap-3">
            {/* Left Info: Prominent Streak & Day Count */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-xs font-bold">
                <Flame className="w-4 h-4 fill-[#CCFF00]/30 animate-pulse" />
                <span>🔥 {student.streak} DAY STREAK</span>
              </div>

              <div className="pt-1">
                <div className="text-2xl font-black text-[#F5F5F5] font-mono tracking-tight">
                  Day {student.currentDay} <span className="text-sm font-normal text-[#A1A1AA]">/ {student.totalDays}</span>
                </div>
                <p className="text-xs text-[#A1A1AA] font-medium">
                  {student.completed} days completed • <strong className="text-[#CCFF00]">{student.completion}% Complete</strong>
                </p>
              </div>
            </div>

            {/* Right: SVG Progress Ring */}
            <div className="shrink-0">
              <ProgressRing
                percentage={student.completion}
                size={76}
                strokeWidth={7}
                label={`${student.completion}%`}
                sublabel="Progress"
                strokeColor="#CCFF00"
              />
            </div>
          </div>
        </motion.section>

        {/* ================= 3. TODAY'S MISSION (VISUALLY DOMINANT) ================= */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
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
                  DAY 12
                </span>
                <span className="text-[11px] font-semibold text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded-md border border-[#CCFF00]/30 font-mono">
                  {todayChallenge.difficulty}
                </span>
              </div>

              <div className="flex items-center gap-1 text-xs text-[#A1A1AA] font-mono">
                <Clock className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>~45 min</span>
              </div>
            </div>

            {/* Mission Title & Goal */}
            <div>
              <h3 className="text-lg font-black text-[#F5F5F5] tracking-tight">
                {todayChallenge.title}
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                Goal: {todayChallenge.goal}
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
                onClick={() => navigate('/day/12')}
                className="text-base py-3.5 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
              >
                Continue Mission
              </Button>
            </div>
          </div>
        </motion.section>

        {/* ================= 4. MOMENTUM ENGINE ================= */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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
                🔥 You&apos;re on a roll
              </span>
              <span className="text-xs font-mono text-[#CCFF00] font-bold">
                {student.streak} Days
              </span>
            </div>
            <p className="text-xs text-[#A1A1AA] font-normal leading-snug">
              11 consecutive days completed. Keep up the momentum to hit Stage 4!
            </p>

            {/* Stage Progress Bar */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[10px] font-mono text-[#71717A]">
                <span>Progress to Next Milestone</span>
                <span>{student.streak}/{momentumInfo.nextMilestone} Days</span>
              </div>
              <div className="w-full h-1.5 bg-[#09090B] rounded-full overflow-hidden border border-[#27272A]">
                <div
                  className="h-full bg-gradient-to-r from-[#CCFF00]/70 to-[#CCFF00] rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.round((student.streak / momentumInfo.nextMilestone) * 100))}%` }}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ================= 5. CHALLENGE JOURNEY TIMELINE ================= */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <DayTimeline
            currentDay={student.currentDay}
            onSelectDay={handleDaySelect}
          />
        </motion.section>

        {/* ================= 6. ACHIEVEMENTS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
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
                unlocked={ach.unlocked}
                unlockedAt={ach.unlockedAt}
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
