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
  Clock,
  User,
  AlertTriangle,
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

  // Dynamic state assignment for demo evaluator controls
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
    <div className="min-h-screen bg-[#F8FAF9] text-slate-900 pb-28 font-sans max-w-md mx-auto relative border-x border-slate-200/60 overflow-x-hidden">
      {/* ================= 1. HEADER ================= */}
      <header className="sticky top-0 z-40 bg-[#F8FAF9]/90 backdrop-blur-md border-b border-slate-200/80 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* ABTalks Brand */}
          <Link to="/" className="flex items-center gap-2.5 group active-press">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-[0_2px_10px_rgba(22,163,74,0.3)]">
              AB
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-tight text-slate-900 flex items-center gap-1.5">
                abtalks
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </span>
              <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono font-medium">
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
              className="relative p-2 rounded-xl bg-white border border-slate-200/90 text-slate-600 hover:text-slate-900 transition-colors shadow-xs active-press"
            >
              <Bell className="w-4 h-4" />
              {hasUnreadNotification && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white animate-pulse" />
              )}
            </button>

            {/* Student Avatar */}
            <Link to="/dashboard" className="flex items-center gap-2 active-press">
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shadow-xs">
                {currentStudent.avatarUrl ? (
                  <img src={currentStudent.avatarUrl} alt={currentStudent.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-4 h-4 text-slate-500" />
                )}
              </div>
            </Link>
          </div>
        </div>
      </header>

      <main className="px-4 pt-3 space-y-5">
        {/* State Demo Toggle Control for Evaluators */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-2 flex items-center justify-between gap-1 text-[11px] font-mono shadow-xs">
          <span className="text-slate-500 flex items-center gap-1 pl-1 font-medium">
            <Sliders className="w-3.5 h-3.5 text-emerald-600" /> Demo State:
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveStateMode('active')}
              className={`px-2.5 py-1 rounded-full transition-all font-semibold ${
                activeStateMode === 'active'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              11d Streak
            </button>
            <button
              onClick={() => setActiveStateMode('firstDay')}
              className={`px-2.5 py-1 rounded-full transition-all font-semibold ${
                activeStateMode === 'firstDay'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Day 1
            </button>
            <button
              onClick={() => setActiveStateMode('missedDay')}
              className={`px-2.5 py-1 rounded-full transition-all font-semibold ${
                activeStateMode === 'missedDay'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Missed
            </button>
          </div>
        </div>

        {/* Greeting Banner */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Good evening, {currentStudent.name} 👋
            </h1>
            <p className="text-xs text-slate-500 font-mono mt-0.5 font-medium">
              {currentStudent.college} • Leaderboard <strong className="text-emerald-700">#{currentStudent.rank}</strong>
            </p>
          </div>
        </div>

        {/* Missed Day Recovery Banner */}
        {isMissed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-800"
          >
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold text-amber-900">Streak Recovery Available!</strong>
              You missed yesterday&apos;s build. Complete today&apos;s mission to protect your progress and reignite your momentum!
            </div>
          </motion.div>
        )}

        {/* ================= 2. STREAK / PROGRESS SECTION ================= */}
        <motion.section
          key={activeStateMode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-slate-200/90 rounded-2xl p-5 relative overflow-hidden shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)]"
        >
          <div className="flex items-center justify-between gap-3">
            {/* Left Info: Prominent Streak & Day Count */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold">
                <Flame className="w-4 h-4 text-emerald-600 fill-emerald-500/20" />
                <span>🔥 {currentStudent.streak} DAY STREAK</span>
              </div>

              <div className="pt-1">
                <div className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                  Day {currentStudent.currentDay} <span className="text-sm font-normal text-slate-500">/ {currentStudent.totalDays}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {currentStudent.completed} days completed • <strong className="text-emerald-700">{currentStudent.completion}% Complete</strong>
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
                strokeColor="#16A34A"
                trackColor="#E2E8F0"
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
            <h2 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-600" /> Today&apos;s Mission
            </h2>
            <span className="text-[11px] font-mono text-emerald-700 font-bold">
              Action Required
            </span>
          </div>

          {/* Visually Dominant Mission Card */}
          <div className="bg-white border-2 border-emerald-500/80 rounded-2xl p-5 shadow-[0_4px_25px_rgba(22,163,74,0.12)] relative overflow-hidden space-y-3">
            {/* Card Badges */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black font-mono text-white bg-emerald-600 px-2.5 py-0.5 rounded-full font-bold shadow-xs">
                  DAY {currentChallenge.day}
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono">
                  {currentChallenge.difficulty}
                </span>
              </div>

              <div className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>{currentChallenge.duration}</span>
              </div>
            </div>

            {/* Mission Title & Goal */}
            <div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                {currentChallenge.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
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
                className="text-base py-3.5 shadow-[0_4px_16px_rgba(22,163,74,0.25)]"
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
          className="bg-white border border-slate-200/90 rounded-2xl p-5 space-y-3 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)] relative overflow-hidden"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 font-mono">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Momentum Engine</span>
            </div>
            <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/80 font-medium">
              Stage: {momentumInfo.stage}
            </span>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                🔥 {momentumInfo.message}
              </span>
              <span className="text-xs font-mono text-emerald-700 font-bold">
                {currentStudent.streak} Days
              </span>
            </div>
            <p className="text-xs text-slate-600 font-normal leading-snug">
              {currentStudent.streak === 0
                ? 'Complete today’s task to ignite your initial coding habit and unlock Stage 1!'
                : `${currentStudent.streak} consecutive days completed. Keep up the momentum to hit Stage ${momentumInfo.level + 1}!`}
            </p>

            {/* Stage Progress Bar */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Progress to Next Milestone</span>
                <span className="text-emerald-700 font-bold">{currentStudent.streak}/{momentumInfo.nextMilestone} Days</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200/70 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 rounded-full transition-all duration-500"
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
            <h2 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-emerald-600" /> Achievements
            </h2>
            <span className="text-[11px] font-mono text-emerald-700 font-bold">
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
