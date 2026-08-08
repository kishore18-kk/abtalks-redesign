import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Zap,
  Flame,
  CheckCircle2,
  Terminal,
  Share2,
  Trophy,
  Rocket,
  Layers,
  TrendingUp
} from 'lucide-react';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import Button from '../components/Button';
import ProgressRing from '../components/ProgressRing';
import DayTimeline from '../components/DayTimeline';
import { studentData, todayChallenge, getMomentumStage } from '../data/mockData';

export default function Landing() {
  const momentumInfo = getMomentumStage(studentData.streak);

  const steps = [
    {
      step: '01',
      title: 'Pick Your Track',
      description: 'Select Fullstack, Backend, or Web Engineering. Clear daily tasks structured for college students.',
      icon: Layers
    },
    {
      step: '02',
      title: 'Build Every Day',
      description: 'Solve 45-minute production missions. Write real functional code instead of watching endless tutorials.',
      icon: Terminal
    },
    {
      step: '03',
      title: 'Share Your Proof',
      description: 'Submit your GitHub repository and LinkedIn post to lock in your daily streak and earn XP.',
      icon: Share2
    },
    {
      step: '04',
      title: 'Build Your Portfolio',
      description: 'Graduate with 60 verified builds, an active developer profile, and proof of work for recruiters.',
      icon: Trophy
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Students', sub: 'Across 150+ Colleges' },
    { value: '60 Days', label: 'Continuous Sprint', sub: 'Daily Micro-Missions' },
    { value: '3,600+', label: 'Verified Builds', sub: 'Shipped to GitHub' },
    { value: '82%', label: 'Completion Rate', sub: 'High Consistency' }
  ];

  const journeyPhases = [
    {
      phase: 'Phase 1 • Days 1-15',
      title: 'JS Core & DOM Foundations',
      status: 'Completed',
      desc: 'Master ES6+, Async/Await, DOM manipulation & Git workflows.'
    },
    {
      phase: 'Phase 2 • Days 16-40',
      title: 'Fullstack & API Architecture',
      status: 'Current Focus (Day 12)',
      desc: 'Build REST APIs, Express middleware, JWT Auth & Database models.',
      highlight: true
    },
    {
      phase: 'Phase 3 • Days 41-60',
      title: 'Systems & Production Deploy',
      status: 'Upcoming',
      desc: 'Optimize performant React apps, Docker containers, & Vercel deployment.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-900 pb-28 font-sans max-w-md mx-auto relative border-x border-slate-200/60 overflow-x-hidden">
      <Navbar />

      <main className="px-4 pt-4 space-y-7">
        {/* ================= 1. HERO SECTION ================= */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pt-2 space-y-4"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold shadow-xs">
            <Zap className="w-3.5 h-3.5 text-emerald-600 fill-emerald-500/20" />
            <span>60-Day Developer Challenge</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-black tracking-tight leading-[1.15] text-slate-900 uppercase">
            60 DAYS. 60 BUILDS.<br />
            <span className="text-emerald-600">
              ONE STRONGER YOU.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Build one real project every day, maintain an unbroken public streak, and transform your GitHub into a job-ready portfolio in 60 days.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col gap-2.5 pt-1">
            <Link to="/dashboard">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={ArrowRight}
                iconPosition="right"
              >
                Start the 60-Day Challenge
              </Button>
            </Link>

            <a href="#how-it-works">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                icon={ChevronDown}
                iconPosition="right"
              >
                See How It Works
              </Button>
            </a>
          </div>

          {/* Hero Concept Preview Card */}
          <div className="mt-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)] relative overflow-hidden space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-mono font-bold text-slate-900">
                  Sprint In Progress
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                DAY 12 OF 60
              </span>
            </div>

            <div className="flex items-center gap-3 bg-slate-50/80 p-3 rounded-xl border border-slate-200/70">
              <ProgressRing
                percentage={studentData.completion}
                size={54}
                strokeWidth={5}
                label={`${studentData.streak}d`}
                strokeColor="#16A34A"
                trackColor="#E2E8F0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate">
                  Today: {todayChallenge.title}
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {todayChallenge.goal}
                </p>
                <div className="flex items-center gap-1 mt-1 text-[10px] font-mono text-emerald-700 font-bold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Proof Verified • +150 XP
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
              <span className="flex items-center gap-1 text-slate-700 font-sans font-medium">
                <Flame className="w-3.5 h-3.5 text-emerald-600 fill-emerald-500/20" />
                {studentData.streak} Day Streak
              </span>
              <span className="text-emerald-700 font-bold">Stage: {momentumInfo.stage}</span>
            </div>
          </div>
        </motion.section>

        {/* ================= 2. TRUST / SOCIAL PROOF ================= */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-3 pt-2"
        >
          <div className="text-center space-y-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-700">
              Built for Indian Tech Colleges
            </span>
            <h2 className="text-sm font-bold text-slate-600 tracking-tight">
              Empowering students through daily consistency
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 text-center space-y-0.5 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)]"
              >
                <div className="text-2xl font-black font-mono text-emerald-600 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-900">{stat.label}</div>
                <div className="text-[10px] text-slate-500 font-mono">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ================= 3. HOW IT WORKS ================= */}
        <motion.section
          id="how-it-works"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-4 pt-2"
        >
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
              HOW IT WORKS
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              4 Steps to Industry Readiness
            </h2>
            <p className="text-xs text-slate-600">
              A proven framework to build coding habits that stick for life.
            </p>
          </div>

          <div className="space-y-3">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3.5 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700 font-mono font-bold text-sm">
                    {s.step}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-emerald-600" />
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {s.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* ================= 4. 60-DAY JOURNEY PREVIEW ================= */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-4 pt-2"
        >
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
              THE 60-DAY ROADMAP
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Curriculum Built for Impact
            </h2>
            <p className="text-xs text-slate-600">
              From core DOM manipulation to production APIs and deployment.
            </p>
          </div>

          {/* Interactive Timeline Pill Row */}
          <DayTimeline currentDay={12} />

          {/* Phase Cards */}
          <div className="space-y-2.5">
            {journeyPhases.map((phase, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-all ${
                  phase.highlight
                    ? 'bg-white border-2 border-emerald-500/80 shadow-[0_4px_25px_rgba(22,163,74,0.1)]'
                    : 'bg-white border-slate-200/90'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-mono font-bold text-emerald-700">
                    {phase.phase}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${
                      phase.highlight
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200 font-bold'
                        : 'bg-slate-50 text-slate-500 border-slate-200'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">
                  {phase.title}
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ================= 5. MOTIVATION SECTION ================= */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-4 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)]"
        >
          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-600" /> Philosophy
            </span>
            <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">
              &quot;Consistency Compounds.&quot;
            </h2>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Cramming tutorials before placement season yields temporary recall. Building 45 minutes every day for 60 days builds muscle memory, confidence, and proof of work.
          </p>

          {/* Compound Comparison */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-600">
              <span>Day 1:</span>
              <span className="text-slate-900 font-medium">1 Micro Build (First Step)</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>Day 30:</span>
              <span className="text-emerald-700 font-bold">30 Verified Projects (Habit)</span>
            </div>
            <div className="flex items-center justify-between font-bold text-slate-900 pt-1 border-t border-slate-200/70">
              <span>Day 60:</span>
              <span className="text-emerald-700 font-bold">60 Builds + Unstoppable Rank</span>
            </div>
          </div>
        </motion.section>

        {/* ================= 6. FINAL CTA ================= */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-2xl bg-white border-2 border-emerald-500/80 text-center space-y-4 shadow-[0_4px_25px_rgba(22,163,74,0.12)] relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600 shadow-xs">
            <Rocket className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase leading-tight">
              Your next 60 days could change your career.
            </h2>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Join 10,000+ Indian tech students building real applications line by line.
            </p>
          </div>

          <Link to="/dashboard" className="block pt-1">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              icon={ArrowRight}
              iconPosition="right"
            >
              Start Building Now
            </Button>
          </Link>

          <p className="text-[10px] font-mono text-slate-500">
            100% Free • Open Source Proof • College Student Optimized
          </p>
        </motion.section>
      </main>

      <BottomNav />
    </div>
  );
}
