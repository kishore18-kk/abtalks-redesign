import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckSquare, Square, Clock, Code2, BookOpen, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import ProofCard from '../components/ProofCard';
import Button from '../components/Button';
import { todayChallenge, proofSubmissionData } from '../data/mockData';

export default function ChallengeDay() {
  const { dayId } = useParams();
  const currentDayNum = dayId ? parseInt(dayId, 10) : 12;

  const [challenge, setChallenge] = useState({
    ...todayChallenge,
    day: currentDayNum
  });

  const [tasks, setTasks] = useState(todayChallenge.tasks);

  const toggleTask = (taskId) => {
    setTasks(prev =>
      prev.map(t => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F5F5F5] pb-24 font-sans max-w-md mx-auto relative border-x border-[#27272A]/50">
      <Navbar />

      <main className="px-4 pt-4 space-y-5">
        {/* Back Link & Day Header */}
        <div className="flex items-center justify-between">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#CCFF00] font-mono transition-colors active-press"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
          </Link>
          <span className="text-xs font-mono font-bold text-[#CCFF00] bg-[#CCFF00]/10 px-2.5 py-0.5 rounded-full border border-[#CCFF00]/30">
            DAY {currentDayNum} OF 60
          </span>
        </div>

        {/* Challenge Header Card */}
        <section className="bg-[#111113] border border-[#27272A] rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-[#CCFF00] bg-[#18181B] px-2.5 py-1 rounded-md border border-[#27272A]">
              {challenge.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-[#A1A1AA] font-mono">
              <Clock className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>{challenge.duration}</span>
            </div>
          </div>

          <h1 className="text-xl font-extrabold text-[#F5F5F5] tracking-tight">
            {challenge.title}
          </h1>

          <p className="text-xs text-[#A1A1AA] leading-relaxed font-normal">
            {challenge.goal}
          </p>

          <div className="pt-2 border-t border-[#27272A] flex items-center justify-between text-xs font-mono">
            <span className="text-[#A1A1AA]">Difficulty: <strong className="text-[#CCFF00]">{challenge.difficulty}</strong></span>
            <span className="text-[#A1A1AA]">Points: <strong className="text-[#F5F5F5]">+{challenge.points} XP</strong></span>
          </div>
        </section>

        {/* Interactive Tasks Checklist */}
        <section className="bg-[#111113] border border-[#27272A] rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#CCFF00]" />
              <h2 className="text-xs font-bold text-[#F5F5F5] uppercase tracking-wider font-mono">
                Task Checklist
              </h2>
            </div>
            <span className="text-xs font-mono text-[#CCFF00] font-bold">
              {completedCount}/{tasks.length} ({progressPercent}%)
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-[#18181B] rounded-full overflow-hidden border border-[#27272A]">
            <div
              className="h-full bg-[#CCFF00] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="space-y-2 pt-1">
            {tasks.map(task => (
              <button
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`w-full text-left p-3 rounded-xl border flex items-center gap-3 transition-all duration-150 active-press ${
                  task.completed
                    ? 'bg-[#18181B] border-emerald-500/40 text-emerald-300'
                    : 'bg-[#18181B]/50 border-[#27272A] text-[#F5F5F5] hover:border-[#3F3F46]'
                }`}
              >
                {task.completed ? (
                  <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-[#71717A] shrink-0" />
                )}
                <span className={`text-xs font-medium ${task.completed ? 'line-through opacity-80' : ''}`}>
                  {task.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Proof Card Component */}
        <section>
          <ProofCard proofData={proofSubmissionData} />
        </section>

        {/* Learning Resources */}
        <section className="bg-[#111113] border border-[#27272A] rounded-2xl p-4 space-y-2.5">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#CCFF00]" />
            <h2 className="text-xs font-bold text-[#F5F5F5] uppercase tracking-wider font-mono">
              Reference Resources
            </h2>
          </div>

          <div className="space-y-2">
            {challenge.resources.map((res, idx) => (
              <a
                key={idx}
                href={res.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 bg-[#18181B] border border-[#27272A] rounded-xl text-xs text-[#A1A1AA] hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors"
              >
                <span>{res.title}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            ))}
          </div>
        </section>

        {/* Challenge Day Placeholder Notice for Team Member 3 */}
        <section className="p-4 bg-[#18181B]/80 border border-dashed border-[#CCFF00]/40 rounded-2xl text-center space-y-2">
          <span className="text-xs font-mono font-bold text-[#CCFF00] uppercase tracking-wider block">
            Member 3 Sandbox • Challenge Day Screen
          </span>
          <p className="text-xs text-[#A1A1AA]">
            This challenge day view is ready for Team Member 3 to add interactive code editor preview, submission validation, and AI hints.
          </p>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
