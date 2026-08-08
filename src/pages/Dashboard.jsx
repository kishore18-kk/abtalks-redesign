import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Trophy, Award, Target, Sparkles, ChevronRight, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import StreakCard from '../components/StreakCard';
import MomentumCard from '../components/MomentumCard';
import MissionCard from '../components/MissionCard';
import DayTimeline from '../components/DayTimeline';
import AchievementCard from '../components/AchievementCard';
import { studentData, todayChallenge, achievementsData, challengeDaysTimeline } from '../data/mockData';

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(12);
  const [student] = useState(studentData);

  const handleDaySelect = (dayNum) => {
    setSelectedDay(dayNum);
    if (dayNum === 12) {
      navigate('/day/12');
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F5F5F5] pb-24 font-sans max-w-md mx-auto relative border-x border-[#27272A]/50">
      <Navbar student={student} />

      <main className="px-4 pt-4 space-y-5">
        {/* Student Stats Header Banner */}
        <section className="bg-[#111113] border border-[#27272A] rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#CCFF00]">
                {student.college}
              </span>
              <h1 className="text-xl font-black text-[#F5F5F5] tracking-tight">
                Welcome back, {student.name}!
              </h1>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-[#A1A1AA] block">Leaderboard</span>
              <span className="text-sm font-black font-mono text-[#CCFF00]">#{student.rank}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#27272A] text-center font-mono">
            <div className="p-2 bg-[#18181B] rounded-xl border border-[#27272A]">
              <span className="text-[10px] text-[#A1A1AA] block">Current Day</span>
              <span className="text-base font-extrabold text-[#F5F5F5]">{student.currentDay}/60</span>
            </div>
            <div className="p-2 bg-[#18181B] rounded-xl border border-[#27272A]">
              <span className="text-[10px] text-[#A1A1AA] block">Streak</span>
              <span className="text-base font-extrabold text-[#CCFF00]">{student.streak} Days</span>
            </div>
            <div className="p-2 bg-[#18181B] rounded-xl border border-[#27272A]">
              <span className="text-[10px] text-[#A1A1AA] block">Percentile</span>
              <span className="text-base font-extrabold text-[#F5F5F5]">Top {100 - student.percentile}%</span>
            </div>
          </div>
        </section>

        {/* Streak & Momentum Engine Section */}
        <section className="space-y-3">
          <StreakCard
            streakCount={student.streak}
            supportingMessage="11 unbroken days of coding consistency. Keep going!"
            totalDays={student.totalDays}
            completedCount={student.completed}
          />

          <MomentumCard
            streak={student.streak}
            progress={student.completion}
          />
        </section>

        {/* Day Timeline Selector */}
        <section>
          <DayTimeline
            currentDay={student.currentDay}
            onSelectDay={handleDaySelect}
          />
        </section>

        {/* Today's Active Mission Card */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold font-mono text-[#A1A1AA] uppercase tracking-wider">
              Active Challenge
            </h2>
            <span className="text-[11px] font-mono text-[#CCFF00]">Day 12 of 60</span>
          </div>

          <MissionCard
            day={todayChallenge.day}
            title={todayChallenge.title}
            difficulty={todayChallenge.difficulty}
            duration={todayChallenge.duration}
            goal={todayChallenge.goal}
            status="current"
            ctaText="Open Day 12 Challenge"
            onCtaClick={() => navigate('/day/12')}
          />
        </section>

        {/* Recent Achievements Grid */}
        <section className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold font-mono text-[#A1A1AA] uppercase tracking-wider">
              Unlocked Badges
            </h2>
            <span className="text-[11px] font-mono text-[#CCFF00]">
              {achievementsData.filter(a => a.unlocked).length}/{achievementsData.length} Unlocked
            </span>
          </div>

          <div className="space-y-2">
            {achievementsData.slice(0, 3).map(ach => (
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
        </section>

        {/* Dashboard Placeholder Notice for Team Member 2 */}
        <section className="p-4 bg-[#18181B]/80 border border-dashed border-[#CCFF00]/40 rounded-2xl text-center space-y-2">
          <span className="text-xs font-mono font-bold text-[#CCFF00] uppercase tracking-wider block">
            Member 2 Sandbox • Dashboard Screen
          </span>
          <p className="text-xs text-[#A1A1AA]">
            This dashboard layout is ready for Team Member 2 to build detailed analytics, stats charts, and leaderboard components.
          </p>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
