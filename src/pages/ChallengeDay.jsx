import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  Code2,
  Sparkles,
  Flame,
  Moon,
  ShieldCheck,
  CheckSquare,
  Square,
  Send,
  AlertTriangle,
  Check,
  Sliders,
  Terminal
} from 'lucide-react';
import Button from '../components/Button';
import BottomNav from '../components/BottomNav';
import { todayChallenge, proofSubmissionData, mockEdgeCases } from '../data/mockData';

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

  // Focus Mode toggle (Night Mode for late-night college study sessions)
  const [isFocusMode, setIsFocusMode] = useState(false);

  // Demo Edge Case State Selector
  const [demoState, setDemoState] = useState('active'); // 'active' | 'completed' | 'missed'

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
          ? 'bg-[#0A0F1D] text-[#F8FAFC] border-slate-800 pb-32'
          : 'bg-[#F8FAF9] text-slate-900 border-slate-200/60 pb-28'
      }`}
    >
      {/* ================= 1. TOP HEADER ================= */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-md border-b px-4 py-3 transition-colors ${
          isFocusMode
            ? 'bg-[#0A0F1D]/95 border-slate-800'
            : 'bg-[#F8FAF9]/90 border-slate-200/80'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Back Button -> /dashboard */}
          <Link
            to="/dashboard"
            className={`flex items-center gap-1.5 text-xs font-mono transition-colors active-press ${
              isFocusMode ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>

          {/* Badge: DAY 12 OF 60 */}
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                isFocusMode
                  ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30'
                  : 'text-emerald-700 bg-emerald-50 border-emerald-200'
              }`}
            >
              DAY {currentDayNum} OF 60
            </span>

            {/* Streak Pill Header */}
            <div className={`flex items-center gap-1 text-xs font-mono font-bold ${isFocusMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
              <Flame className="w-3.5 h-3.5 fill-current animate-pulse" />
              <span>{currentStreakCount}d streak</span>
            </div>
          </div>

          {/* Focus Mode Toggle Button */}
          <button
            onClick={() => setIsFocusMode(!isFocusMode)}
            className={`p-1.5 rounded-full border text-xs font-mono flex items-center gap-1 transition-all active-press ${
              isFocusMode
                ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-[0_2px_10px_rgba(16,185,129,0.3)]'
                : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 shadow-xs'
            }`}
            title="Toggle Focus Mode"
          >
            <Moon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-bold">{isFocusMode ? 'Focused' : 'Focus'}</span>
          </button>
        </div>
      </header>

      <main className="px-4 pt-3 space-y-5">
        {/* Evaluator Demo State Selector */}
        {!isFocusMode && (
          <div className="bg-white border border-slate-200/90 rounded-2xl p-2 flex items-center justify-between gap-1 text-[11px] font-mono shadow-xs">
            <span className="text-slate-500 flex items-center gap-1 pl-1 font-medium">
              <Sliders className="w-3.5 h-3.5 text-emerald-600" /> Preset State:
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setDemoState('active')}
                className={`px-2.5 py-1 rounded-full transition-all font-semibold ${
                  demoState === 'active' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setDemoState('completed')}
                className={`px-2.5 py-1 rounded-full transition-all font-semibold ${
                  demoState === 'completed' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                Verified ✓
              </button>
              <button
                onClick={() => setDemoState('missed')}
                className={`px-2.5 py-1 rounded-full transition-all font-semibold ${
                  demoState === 'missed' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                Missed
              </button>
            </div>
          </div>
        )}

        {/* Missed Day Recovery Warning Notice */}
        {demoState === 'missed' && (
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-2.5 text-xs text-amber-800">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold text-amber-900">Streak Recovery Mode Active</strong>
              Complete and verify today&apos;s proof of work to lock in Day 12 and restart your momentum engine!
            </div>
          </div>
        )}

        {/* ================= 2. DAY HERO ================= */}
        <section
          className={`rounded-2xl p-5 relative overflow-hidden transition-all ${
            isFocusMode
              ? 'bg-[#111728] border border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.15)]'
              : 'bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)]'
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-black font-mono px-2.5 py-0.5 rounded-full font-bold shadow-xs ${
                isFocusMode ? 'bg-emerald-500 text-slate-950' : 'bg-emerald-600 text-white'
              }`}>
                DAY {currentDayNum}
              </span>
              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border font-mono ${
                isFocusMode
                  ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30'
                  : 'text-emerald-700 bg-emerald-50 border-emerald-200'
              }`}>
                {todayChallenge.difficulty}
              </span>
            </div>

            <div className={`flex items-center gap-1 text-xs font-mono ${isFocusMode ? 'text-slate-400' : 'text-slate-500'}`}>
              <Clock className="w-3.5 h-3.5 text-emerald-500" />
              <span>~45 min</span>
            </div>
          </div>

          <h1 className={`text-xl font-black tracking-tight mb-1 ${isFocusMode ? 'text-white' : 'text-slate-900'}`}>
            {todayChallenge.title}
          </h1>

          {/* Motivational Hero Callout */}
          <div className={`mt-3 pt-3 border-t flex items-center justify-between text-xs ${
            isFocusMode ? 'border-slate-800' : 'border-slate-100'
          }`}>
            <span className="text-emerald-600 font-mono font-bold flex items-center gap-1.5">
              <Flame className="w-4 h-4 fill-emerald-500/20 animate-pulse" />
              One more day. Keep the streak alive.
            </span>
            <span className={`text-[11px] font-mono ${isFocusMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {currentStreakCount} Days Streak
            </span>
          </div>
        </section>

        {/* ================= 3. MISSION BRIEF ================= */}
        <section className={`rounded-2xl p-5 space-y-3 ${
          isFocusMode ? 'bg-[#111728] border border-slate-800' : 'bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)]'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-600" />
              <h2 className={`text-xs font-bold uppercase tracking-wider font-mono ${isFocusMode ? 'text-white' : 'text-slate-900'}`}>
                Mission Brief & Requirements
              </h2>
            </div>
            <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-bold ${
              isFocusMode
                ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30'
                : 'text-emerald-700 bg-emerald-50 border-emerald-200'
            }`}>
              CRUD Architecture
            </span>
          </div>

          <p className={`text-xs leading-relaxed font-normal ${isFocusMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Build a robust Node.js/Express REST API supporting CRUD operations with JSON payload handling and standard HTTP status responses.
          </p>

          {/* Scannable Requirement Cards */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
            <div className={`p-3 rounded-xl border space-y-1 ${
              isFocusMode ? 'bg-[#0A0F1D] border-slate-800' : 'bg-slate-50 border-slate-200/80'
            }`}>
              <span className="text-[10px] text-emerald-600 font-bold block uppercase">POST /api/items</span>
              <span className={`font-sans text-[11px] block ${isFocusMode ? 'text-slate-200' : 'text-slate-800'}`}>Create resource</span>
            </div>

            <div className={`p-3 rounded-xl border space-y-1 ${
              isFocusMode ? 'bg-[#0A0F1D] border-slate-800' : 'bg-slate-50 border-slate-200/80'
            }`}>
              <span className="text-[10px] text-sky-600 font-bold block uppercase">GET /api/items</span>
              <span className={`font-sans text-[11px] block ${isFocusMode ? 'text-slate-200' : 'text-slate-800'}`}>Read resources</span>
            </div>

            <div className={`p-3 rounded-xl border space-y-1 ${
              isFocusMode ? 'bg-[#0A0F1D] border-slate-800' : 'bg-slate-50 border-slate-200/80'
            }`}>
              <span className="text-[10px] text-amber-600 font-bold block uppercase">PUT /api/items/:id</span>
              <span className={`font-sans text-[11px] block ${isFocusMode ? 'text-slate-200' : 'text-slate-800'}`}>Update resource</span>
            </div>

            <div className={`p-3 rounded-xl border space-y-1 ${
              isFocusMode ? 'bg-[#0A0F1D] border-slate-800' : 'bg-slate-50 border-slate-200/80'
            }`}>
              <span className="text-[10px] text-rose-600 font-bold block uppercase">DELETE /api/items/:id</span>
              <span className={`font-sans text-[11px] block ${isFocusMode ? 'text-slate-200' : 'text-slate-800'}`}>Delete resource</span>
            </div>
          </div>
        </section>

        {/* ================= 4. WHAT TO BUILD (CHECKLIST) ================= */}
        <section className={`rounded-2xl p-5 space-y-3 ${
          isFocusMode ? 'bg-[#111728] border border-slate-800' : 'bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)]'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-emerald-600" />
              <h2 className={`text-xs font-bold uppercase tracking-wider font-mono ${isFocusMode ? 'text-white' : 'text-slate-900'}`}>
                What To Build (Checklist)
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-700 font-bold">
              {completedChecklistCount}/{checklist.length} ({checklistPercent}%)
            </span>
          </div>

          {/* Micro Progress Bar */}
          <div className={`w-full h-1.5 rounded-full overflow-hidden ${isFocusMode ? 'bg-slate-800' : 'bg-slate-200/80'}`}>
            <div
              className="h-full bg-emerald-600 transition-all duration-300"
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
                    ? isFocusMode
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : isFocusMode
                    ? 'bg-[#0A0F1D] border-slate-800 text-slate-300'
                    : 'bg-slate-50/80 border-slate-200/80 text-slate-800 hover:border-slate-300'
                }`}
              >
                {item.completed ? (
                  <CheckSquare className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                ) : (
                  <Square className="w-4.5 h-4.5 text-slate-400 shrink-0" />
                )}
                <span className={`text-xs font-medium leading-snug ${item.completed ? 'line-through opacity-80' : ''}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* ================= 5. SUCCESS CRITERIA ================= */}
        <section className={`rounded-2xl p-5 space-y-2.5 ${
          isFocusMode ? 'bg-[#111728] border border-slate-800' : 'bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)]'
        }`}>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <h2 className={`text-xs font-bold uppercase tracking-wider font-mono ${isFocusMode ? 'text-white' : 'text-slate-900'}`}>
              Success Criteria
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-sans">
            <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${
              isFocusMode ? 'bg-[#0A0F1D] border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200/80 text-slate-700'
            }`}>
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span>API runs on local port</span>
            </div>
            <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${
              isFocusMode ? 'bg-[#0A0F1D] border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200/80 text-slate-700'
            }`}>
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span>CRUD endpoints work</span>
            </div>
            <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${
              isFocusMode ? 'bg-[#0A0F1D] border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200/80 text-slate-700'
            }`}>
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span>Pushed to GitHub</span>
            </div>
            <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${
              isFocusMode ? 'bg-[#0A0F1D] border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200/80 text-slate-700'
            }`}>
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span>Proof submitted</span>
            </div>
          </div>
        </section>

        {/* ================= 6. PROOF OF WORK SUBMISSION ================= */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className={`text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 ${
              isFocusMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Submit Proof of Work
            </h2>
            <span className="text-[11px] font-mono text-emerald-700 font-bold">
              {isFullyCompleted ? 'Both Verified ✓' : '2 Submissions Required'}
            </span>
          </div>

          {/* GITHUB PROOF CARD */}
          <div className={`rounded-2xl p-5 space-y-3 ${
            isFocusMode ? 'bg-[#111728] border border-slate-800' : 'bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)]'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 font-bold shadow-xs">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className={`text-xs font-bold ${isFocusMode ? 'text-white' : 'text-slate-900'}`}>GitHub Proof</h3>
                  <span className={`text-[10px] font-mono block ${isFocusMode ? 'text-slate-400' : 'text-slate-500'}`}>Repository or Commit URL</span>
                </div>
              </div>

              {githubVerified ? (
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Verified
                </span>
              ) : (
                <span className="text-[10px] font-mono text-slate-400">Pending</span>
              )}
            </div>

            <form onSubmit={handleVerifyGithub} className="space-y-2">
              <input
                type="url"
                required
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/username/project/commit/..."
                className={`w-full px-3.5 py-2.5 border rounded-xl text-xs font-mono focus:outline-none focus:border-emerald-500 ${
                  isFocusMode
                    ? 'bg-[#0A0F1D] border-slate-800 text-white placeholder-slate-500'
                    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white'
                }`}
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
          <div className={`rounded-2xl p-5 space-y-3 ${
            isFocusMode ? 'bg-[#111728] border border-slate-800' : 'bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)]'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-sky-600 font-bold shadow-xs">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className={`text-xs font-bold ${isFocusMode ? 'text-white' : 'text-slate-900'}`}>LinkedIn Proof</h3>
                  <span className={`text-[10px] font-mono block ${isFocusMode ? 'text-slate-400' : 'text-slate-500'}`}>Public Post URL</span>
                </div>
              </div>

              {linkedinVerified ? (
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Verified
                </span>
              ) : (
                <span className="text-[10px] font-mono text-slate-400">Pending</span>
              )}
            </div>

            <form onSubmit={handleVerifyLinkedin} className="space-y-2">
              <input
                type="url"
                required
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                placeholder="https://linkedin.com/posts/username/..."
                className={`w-full px-3.5 py-2.5 border rounded-xl text-xs font-mono focus:outline-none focus:border-emerald-500 ${
                  isFocusMode
                    ? 'bg-[#0A0F1D] border-slate-800 text-white placeholder-slate-500'
                    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white'
                }`}
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
              className="p-6 rounded-2xl bg-white border-2 border-emerald-500 text-center space-y-4 shadow-[0_4px_25px_rgba(22,163,74,0.15)]"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600 shadow-xs">
                <Flame className="w-6 h-6 text-emerald-600 fill-emerald-500/20 animate-pulse" />
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                  DAY 12 COMPLETE 🔥
                </h3>
                <p className="text-xs text-emerald-700 font-mono font-bold mt-0.5">
                  Streak preserved! 12 Days Unbroken
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center font-mono">
                <div>
                  <span className="text-[10px] text-slate-500 block">Completed</span>
                  <span className="text-sm font-bold text-slate-900">12 / 60</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Overall</span>
                  <span className="text-sm font-bold text-emerald-600">20% Done</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Reward</span>
                  <span className="text-sm font-bold text-slate-900">+150 XP</span>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={ArrowLeft}
                onClick={() => navigate('/dashboard')}
                className="text-base py-3.5 shadow-[0_4px_16px_rgba(22,163,74,0.25)]"
              >
                Back to Dashboard
              </Button>
            </motion.div>
          ) : (
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 text-center space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block">
                Complete Today&apos;s Mission
              </span>
              <p className="text-xs text-slate-600">
                Verify both GitHub & LinkedIn proof URLs above to lock in Day 12 and preserve your 11-day streak.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Focus Mode Ambient Banner at Bottom */}
      {isFocusMode && (
        <div className="fixed bottom-3 left-0 right-0 z-50 px-4 pointer-events-none">
          <div className="max-w-[390px] mx-auto bg-[#0A0F1D]/95 backdrop-blur-xl border border-emerald-500/40 shadow-[0_8px_30px_rgba(0,0,0,0.8)] rounded-full py-2 px-5 pointer-events-auto flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white font-bold">Focus Mode Active</span>
            </div>

            <button
              onClick={() => navigate('/dashboard')}
              className="px-3 py-1.5 bg-emerald-500 text-slate-950 font-bold rounded-full text-xs"
            >
              Dashboard
            </button>
          </div>
        </div>
      )}

      {!isFocusMode && <BottomNav />}
    </div>
  );
}
