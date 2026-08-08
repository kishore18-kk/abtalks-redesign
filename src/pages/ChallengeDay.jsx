import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Code2,
  ExternalLink,
  Sparkles,
  Flame,
  Moon,
  Sun,
  ShieldCheck,
  CheckSquare,
  Square,
  Layers,
  Send,
  AlertTriangle,
  Award,
  Check,
  Sliders,
  Terminal,
  RotateCcw
} from 'lucide-react';
import Button from '../components/Button';
import BottomNav from '../components/BottomNav';
import { todayChallenge, proofSubmissionData, studentData, mockEdgeCases } from '../data/mockData';

// Custom SVG Icons for GitHub and LinkedIn
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function ChallengeDay() {
  const { dayId } = useParams();
  const navigate = useNavigate();
  const currentDayNum = dayId ? parseInt(dayId, 10) : 12;

  // Focus Mode toggle (Night Mode for late-night college coding sessions)
  const [isFocusMode, setIsFocusMode] = useState(false);

  // Demo Edge Case State Selector
  const [demoState, setDemoState] = useState('active'); // 'active' | 'completed' | 'missed' | 'day1'

  // Task Checklist State
  const [checklist, setChecklist] = useState([
    { id: 'c1', label: 'Create the API project (npm init -y, express)', completed: true },
    { id: 'c2', label: 'Add CRUD endpoints (GET, POST, PUT, DELETE)', completed: true },
    { id: 'c3', label: 'Handle request validation & status codes', completed: false },
    { id: 'c4', label: 'Test the endpoints with Postman / cURL', completed: false },
    { id: 'c5', label: 'Push the completed work to GitHub', completed: false }
  ]);

  // Proof Submission Inputs & Verification States
  const [githubUrl, setGithubUrl] = useState('https://github.com/kishore/abtalks-day12-rest-api');
  const [linkedinUrl, setLinkedinUrl] = useState('https://linkedin.com/posts/kishore-abtalks-day12');
  
  const [isVerifyingGithub, setIsVerifyingGithub] = useState(false);
  const [githubVerified, setGithubVerified] = useState(false);

  const [isVerifyingLinkedin, setIsVerifyingLinkedin] = useState(false);
  const [linkedinVerified, setLinkedinVerified] = useState(false);

  // Synchronize state presets for evaluators
  useEffect(() => {
    if (demoState === 'completed') {
      setGithubVerified(true);
      setLinkedinVerified(true);
      setChecklist(prev => prev.map(item => ({ ...item, completed: true })));
    } else if (demoState === 'active') {
      setGithubVerified(false);
      setLinkedinVerified(false);
    } else if (demoState === 'missed') {
      setGithubVerified(false);
      setLinkedinVerified(false);
    } else if (demoState === 'day1') {
      setGithubVerified(false);
      setLinkedinVerified(false);
      setGithubUrl('');
      setLinkedinUrl('');
    }
  }, [demoState]);

  const toggleChecklistItem = (id) => {
    setChecklist(prev =>
      prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const handleVerifyGithub = (e) => {
    e.preventDefault();
    if (!githubUrl.trim()) return;
    setIsVerifyingGithub(true);
    setTimeout(() => {
      setIsVerifyingGithub(false);
      setGithubVerified(true);
    }, 700);
  };

  const handleVerifyLinkedin = (e) => {
    e.preventDefault();
    if (!linkedinUrl.trim()) return;
    setIsVerifyingLinkedin(true);
    setTimeout(() => {
      setIsVerifyingLinkedin(false);
      setLinkedinVerified(true);
    }, 700);
  };

  const completedChecklistCount = checklist.filter(c => c.completed).length;
  const checklistPercent = Math.round((completedChecklistCount / checklist.length) * 100);
  const isFullyCompleted = githubVerified && linkedinVerified;

  const currentStreakCount = isFullyCompleted ? 12 : demoState === 'missed' ? 0 : 11;

  return (
    <div
      className={`min-h-screen font-sans max-w-md mx-auto relative border-x transition-colors duration-300 ${
        isFocusMode
          ? 'bg-[#050507] text-[#F5F5F5] border-[#18181B] pb-32'
          : 'bg-[#09090B] text-[#F5F5F5] border-[#27272A]/50 pb-24'
      }`}
    >
      {/* ================= 1. TOP HEADER ================= */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-md border-b px-4 py-3 transition-colors ${
          isFocusMode ? 'bg-[#050507]/95 border-[#18181B]' : 'bg-[#09090B]/90 border-[#27272A]'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Back Button -> /dashboard */}
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#CCFF00] font-mono transition-colors active-press"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>

          {/* Badge: DAY 12 OF 60 */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#CCFF00] bg-[#CCFF00]/10 px-2.5 py-0.5 rounded-full border border-[#CCFF00]/30">
              DAY {currentDayNum} OF 60
            </span>

            {/* Streak Pill Header */}
            <div className="flex items-center gap-1 text-xs font-mono text-[#CCFF00]">
              <Flame className="w-3.5 h-3.5 fill-[#CCFF00]/20 animate-pulse" />
              <span>{currentStreakCount}d streak</span>
            </div>
          </div>

          {/* Focus Mode Toggle Button */}
          <button
            onClick={() => setIsFocusMode(!isFocusMode)}
            className={`p-1.5 rounded-xl border text-xs font-mono flex items-center gap-1 transition-all active-press ${
              isFocusMode
                ? 'bg-[#CCFF00] text-[#09090B] border-[#CCFF00] font-bold shadow-[0_0_12px_rgba(204,255,0,0.3)]'
                : 'bg-[#18181B] text-[#A1A1AA] border-[#27272A] hover:text-[#F5F5F5]'
            }`}
            title="Toggle Focus / Night Mode"
          >
            <Moon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isFocusMode ? 'Focused' : 'Focus'}</span>
          </button>
        </div>
      </header>

      <main className="px-4 pt-3 space-y-5">
        {/* Evaluator Demo State Selector */}
        {!isFocusMode && (
          <div className="bg-[#18181B]/80 border border-[#27272A] rounded-xl p-2 flex items-center justify-between gap-1 text-[11px] font-mono">
            <span className="text-[#A1A1AA] flex items-center gap-1 pl-1">
              <Sliders className="w-3.5 h-3.5 text-[#CCFF00]" /> Preset State:
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setDemoState('active')}
                className={`px-2 py-1 rounded-md transition-all ${
                  demoState === 'active' ? 'bg-[#CCFF00] text-[#09090B] font-bold' : 'text-[#A1A1AA]'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setDemoState('completed')}
                className={`px-2 py-1 rounded-md transition-all ${
                  demoState === 'completed' ? 'bg-emerald-400 text-[#09090B] font-bold' : 'text-[#A1A1AA]'
                }`}
              >
                Verified ✓
              </button>
              <button
                onClick={() => setDemoState('missed')}
                className={`px-2 py-1 rounded-md transition-all ${
                  demoState === 'missed' ? 'bg-amber-400 text-[#09090B] font-bold' : 'text-[#A1A1AA]'
                }`}
              >
                Missed
              </button>
            </div>
          </div>
        )}

        {/* Missed Day Recovery Warning Notice */}
        {demoState === 'missed' && (
          <div className="p-3 bg-amber-500/10 border border-amber-500/40 rounded-2xl flex items-start gap-2.5 text-xs text-amber-300">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold text-amber-200">Streak Recovery Mode Active</strong>
              Complete and verify today&apos;s proof of work to lock in Day 12 and restart your momentum engine!
            </div>
          </div>
        )}

        {/* ================= 2. DAY HERO ================= */}
        <section
          className={`rounded-2xl p-4 relative overflow-hidden transition-all ${
            isFocusMode
              ? 'bg-[#0E0E12] border border-[#CCFF00]/40 shadow-[0_0_25px_rgba(204,255,0,0.1)]'
              : 'bg-[#111113] border border-[#27272A]'
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black font-mono text-[#09090B] bg-[#CCFF00] px-2.5 py-0.5 rounded-md font-bold">
                DAY {currentDayNum}
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

          <h1 className="text-xl font-black text-[#F5F5F5] tracking-tight mb-1">
            {todayChallenge.title}
          </h1>

          {/* Motivational Hero Callout */}
          <div className="mt-2.5 pt-2.5 border-t border-[#27272A] flex items-center justify-between text-xs">
            <span className="text-[#CCFF00] font-mono font-bold flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#CCFF00] fill-[#CCFF00]/30 animate-pulse" />
              One more day. Keep the streak alive.
            </span>
            <span className="text-[11px] font-mono text-[#A1A1AA]">
              {currentStreakCount} Days Streak
            </span>
          </div>
        </section>

        {/* ================= 3. MISSION BRIEF ================= */}
        <section className="bg-[#111113] border border-[#27272A] rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#CCFF00]" />
              <h2 className="text-xs font-bold text-[#F5F5F5] uppercase tracking-wider font-mono">
                Mission Brief & Requirements
              </h2>
            </div>
            <span className="text-[10px] font-mono text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded border border-[#CCFF00]/30">
              CRUD Architecture
            </span>
          </div>

          <p className="text-xs text-[#A1A1AA] leading-relaxed font-normal">
            Build a robust Node.js/Express REST API supporting CRUD operations with JSON payload handling and standard HTTP status responses.
          </p>

          {/* Scannable Requirement Cards */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
            <div className="p-2.5 bg-[#18181B] border border-[#27272A] rounded-xl space-y-1">
              <span className="text-[10px] text-[#CCFF00] font-bold block uppercase">POST /api/items</span>
              <span className="text-[#F5F5F5] font-sans text-[11px] block">Create resource</span>
            </div>

            <div className="p-2.5 bg-[#18181B] border border-[#27272A] rounded-xl space-y-1">
              <span className="text-[10px] text-sky-400 font-bold block uppercase">GET /api/items</span>
              <span className="text-[#F5F5F5] font-sans text-[11px] block">Read resources</span>
            </div>

            <div className="p-2.5 bg-[#18181B] border border-[#27272A] rounded-xl space-y-1">
              <span className="text-[10px] text-amber-400 font-bold block uppercase">PUT /api/items/:id</span>
              <span className="text-[#F5F5F5] font-sans text-[11px] block">Update resource</span>
            </div>

            <div className="p-2.5 bg-[#18181B] border border-[#27272A] rounded-xl space-y-1">
              <span className="text-[10px] text-rose-400 font-bold block uppercase">DELETE /api/items/:id</span>
              <span className="text-[#F5F5F5] font-sans text-[11px] block">Delete resource</span>
            </div>
          </div>
        </section>

        {/* ================= 4. WHAT TO BUILD (CHECKLIST) ================= */}
        <section className="bg-[#111113] border border-[#27272A] rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#CCFF00]" />
              <h2 className="text-xs font-bold text-[#F5F5F5] uppercase tracking-wider font-mono">
                What To Build (Checklist)
              </h2>
            </div>
            <span className="text-xs font-mono text-[#CCFF00] font-bold">
              {completedChecklistCount}/{checklist.length} ({checklistPercent}%)
            </span>
          </div>

          {/* Micro Progress Bar */}
          <div className="w-full h-1.5 bg-[#18181B] rounded-full overflow-hidden border border-[#27272A]">
            <div
              className="h-full bg-[#CCFF00] transition-all duration-300"
              style={{ width: `${checklistPercent}%` }}
            />
          </div>

          <div className="space-y-2 pt-1">
            {checklist.map(item => (
              <button
                key={item.id}
                onClick={() => toggleChecklistItem(item.id)}
                className={`w-full text-left p-3 rounded-xl border flex items-center gap-3 transition-all duration-150 active-press ${
                  item.completed
                    ? 'bg-[#18181B] border-emerald-500/40 text-emerald-300'
                    : 'bg-[#18181B]/50 border-[#27272A] text-[#F5F5F5] hover:border-[#3F3F46]'
                }`}
              >
                {item.completed ? (
                  <CheckSquare className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                ) : (
                  <Square className="w-4.5 h-4.5 text-[#71717A] shrink-0" />
                )}
                <span className={`text-xs font-medium leading-snug ${item.completed ? 'line-through opacity-80' : ''}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* ================= 5. SUCCESS CRITERIA ================= */}
        <section className="bg-[#111113] border border-[#27272A] rounded-2xl p-4 space-y-2.5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
            <h2 className="text-xs font-bold text-[#F5F5F5] uppercase tracking-wider font-mono">
              Success Criteria
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-sans">
            <div className="p-2.5 bg-[#18181B] border border-[#27272A] rounded-xl flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>API runs on local port</span>
            </div>
            <div className="p-2.5 bg-[#18181B] border border-[#27272A] rounded-xl flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>CRUD endpoints work</span>
            </div>
            <div className="p-2.5 bg-[#18181B] border border-[#27272A] rounded-xl flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Pushed to GitHub</span>
            </div>
            <div className="p-2.5 bg-[#18181B] border border-[#27272A] rounded-xl flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Proof submitted</span>
            </div>
          </div>
        </section>

        {/* ================= 6. PROOF OF WORK SUBMISSION ================= */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold font-mono text-[#A1A1AA] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" /> Submit Proof of Work
            </h2>
            <span className="text-[11px] font-mono text-[#CCFF00]">
              {isFullyCompleted ? 'Both Verified ✓' : '2 Submissions Required'}
            </span>
          </div>

          {/* GITHUB PROOF CARD */}
          <div className="bg-[#111113] border border-[#27272A] rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#F5F5F5]">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#F5F5F5]">GitHub Proof</h3>
                  <span className="text-[10px] text-[#A1A1AA] font-mono block">Repository or Commit URL</span>
                </div>
              </div>

              {githubVerified ? (
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/30 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Verified
                </span>
              ) : (
                <span className="text-[10px] font-mono text-[#A1A1AA]">Pending</span>
              )}
            </div>

            <form onSubmit={handleVerifyGithub} className="space-y-2">
              <input
                type="url"
                required
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/username/project/commit/..."
                className="w-full px-3 py-2 bg-[#18181B] border border-[#27272A] rounded-xl text-xs text-[#F5F5F5] placeholder-[#71717A] focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] font-mono"
              />

              <Button
                type="submit"
                variant={githubVerified ? 'secondary' : 'primary'}
                size="md"
                fullWidth
                disabled={isVerifyingGithub}
                icon={isVerifyingGithub ? Clock : githubVerified ? Check : Send}
              >
                {isVerifyingGithub ? 'Verifying GitHub Commit...' : githubVerified ? 'Update GitHub Link' : 'Verify GitHub'}
              </Button>
            </form>
          </div>

          {/* LINKEDIN PROOF CARD */}
          <div className="bg-[#111113] border border-[#27272A] rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#18181B] border border-[#27272A] flex items-center justify-center text-sky-400">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#F5F5F5]">LinkedIn Proof</h3>
                  <span className="text-[10px] text-[#A1A1AA] font-mono block">Public Post URL</span>
                </div>
              </div>

              {linkedinVerified ? (
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/30 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Verified
                </span>
              ) : (
                <span className="text-[10px] font-mono text-[#A1A1AA]">Pending</span>
              )}
            </div>

            <form onSubmit={handleVerifyLinkedin} className="space-y-2">
              <input
                type="url"
                required
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                placeholder="https://linkedin.com/posts/username/..."
                className="w-full px-3 py-2 bg-[#18181B] border border-[#27272A] rounded-xl text-xs text-[#F5F5F5] placeholder-[#71717A] focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] font-mono"
              />

              <Button
                type="submit"
                variant={linkedinVerified ? 'secondary' : 'primary'}
                size="md"
                fullWidth
                disabled={isVerifyingLinkedin}
                icon={isVerifyingLinkedin ? Clock : linkedinVerified ? Check : Send}
              >
                {isVerifyingLinkedin ? 'Verifying LinkedIn Post...' : linkedinVerified ? 'Update LinkedIn Link' : 'Verify LinkedIn'}
              </Button>
            </form>
          </div>
        </section>

        {/* ================= 7. COMPLETION STATE ================= */}
        <section className="pt-2">
          {isFullyCompleted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-[#111113] border-2 border-[#CCFF00] text-center space-y-3 shadow-[0_0_30px_rgba(204,255,0,0.2)]"
            >
              <div className="w-12 h-12 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/40 flex items-center justify-center mx-auto text-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                <Flame className="w-6 h-6 fill-[#CCFF00]/30 animate-pulse" />
              </div>

              <div>
                <h3 className="text-xl font-black text-[#F5F5F5] tracking-tight uppercase">
                  Day 12 complete 🔥
                </h3>
                <p className="text-xs text-[#CCFF00] font-mono font-bold mt-0.5">
                  Streak preserved! 12 Days Unbroken
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#27272A] text-center font-mono">
                <div>
                  <span className="text-[10px] text-[#A1A1AA] block">Completed</span>
                  <span className="text-sm font-bold text-[#F5F5F5]">12 / 60</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#A1A1AA] block">Overall</span>
                  <span className="text-sm font-bold text-[#CCFF00]">20% Done</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#A1A1AA] block">Reward</span>
                  <span className="text-sm font-bold text-[#F5F5F5]">+150 XP</span>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={ArrowLeft}
                onClick={() => navigate('/dashboard')}
                className="text-base py-3.5 shadow-[0_0_25px_rgba(204,255,0,0.3)]"
              >
                Back to Dashboard
              </Button>
            </motion.div>
          ) : (
            <div className="p-4 rounded-2xl bg-[#111113] border border-[#27272A] text-center space-y-2">
              <span className="text-xs font-mono font-bold text-[#CCFF00] uppercase tracking-wider block">
                Complete Today&apos;s Mission
              </span>
              <p className="text-xs text-[#A1A1AA]">
                Verify both GitHub & LinkedIn proof URLs above to lock in Day 12 and preserve your 11-day streak.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Focus Mode Ambient Banner at Bottom */}
      {isFocusMode && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#050507]/95 backdrop-blur-xl border-t border-[#CCFF00]/40 p-3 max-w-md mx-auto flex items-center justify-between text-xs font-mono shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
            <span className="text-[#F5F5F5] font-bold">Focus Mode Active</span>
          </div>

          <button
            onClick={() => navigate('/dashboard')}
            className="px-3 py-1.5 bg-[#CCFF00] text-[#09090B] font-bold rounded-lg text-xs"
          >
            Dashboard
          </button>
        </div>
      )}

      {!isFocusMode && <BottomNav />}
    </div>
  );
}
