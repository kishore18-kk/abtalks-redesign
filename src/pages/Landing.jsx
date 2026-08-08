import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Zap,
  Flame,
  CheckCircle2,
  Code2,
  Terminal,
  Share2,
  FolderGit2,
  Trophy,
  Rocket,
  Layers,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Users,
  Check,
  Lock
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
      icon: Layers,
      color: 'text-sky-400 bg-sky-400/10 border-sky-400/30'
    },
    {
      step: '02',
      title: 'Build Every Day',
      description: 'Solve 45-minute production missions. Write real functional code instead of watching endless tutorials.',
      icon: Terminal,
      color: 'text-[#CCFF00] bg-[#CCFF00]/10 border-[#CCFF00]/30'
    },
    {
      step: '03',
      title: 'Share Your Proof',
      description: 'Submit your GitHub repository and LinkedIn post to lock in your daily streak and earn XP.',
      icon: Share2,
      color: 'text-[#CCFF00] bg-[#CCFF00]/10 border-[#CCFF00]/30'
    },
    {
      step: '04',
      title: 'Build Your Portfolio',
      description: 'Graduate with 60 verified builds, an active developer profile, and proof of work for recruiters.',
      icon: Trophy,
      color: 'text-amber-400 bg-amber-400/10 border-amber-400/30'
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
    <div className="min-h-screen bg-[#09090B] text-[#F5F5F5] pb-24 font-sans max-w-md mx-auto relative border-x border-[#27272A]/50 overflow-x-hidden">
      <Navbar />

      <main className="px-4 pt-4 space-y-8">
        {/* ================= 1. HERO SECTION ================= */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pt-2 space-y-4"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#CCFF00]/40 text-[#CCFF00] text-xs font-mono shadow-[0_0_15px_rgba(204,255,0,0.15)]">
            <Zap className="w-3.5 h-3.5 fill-[#CCFF00]/20 animate-pulse" />
            <span>60-Day Developer Challenge</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-extrabold tracking-tight leading-[1.15] text-[#F5F5F5] uppercase">
            60 DAYS. 60 BUILDS.<br />
            <span className="text-[#CCFF00] drop-shadow-[0_0_20px_rgba(204,255,0,0.25)]">
              ONE STRONGER YOU.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm text-[#A1A1AA] leading-relaxed font-normal">
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
          <div className="mt-4 p-4 rounded-2xl bg-[#111113] border border-[#27272A] relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#CCFF00]/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
                <span className="text-xs font-mono font-bold text-[#F5F5F5]">
                  Sprint In Progress
                </span>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30">
                DAY 12 OF 60
              </span>
            </div>

            <div className="flex items-center gap-3 bg-[#18181B] p-3 rounded-xl border border-[#27272A] mb-3">
              <ProgressRing
                percentage={studentData.completion}
                size={54}
                strokeWidth={6}
                label={`${studentData.streak}d`}
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-[#F5F5F5] truncate">
                  Today: {todayChallenge.title}
                </div>
                <p className="text-[11px] text-[#A1A1AA] line-clamp-1">
                  {todayChallenge.goal}
                </p>
                <div className="flex items-center gap-1 mt-1 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> Proof Verified • +150 XP
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
              <span className="flex items-center gap-1 text-[#A1A1AA]">
                <Flame className="w-3.5 h-3.5 text-[#CCFF00] fill-[#CCFF00]/20" />
                {studentData.streak} Day Streak
              </span>
              <span className="text-[#CCFF00]">Stage: {momentumInfo.stage}</span>
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
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#CCFF00]">
              Built for Indian Tech Colleges
            </span>
            <h2 className="text-sm font-bold text-[#A1A1AA] tracking-tight">
              Empowering students through daily consistency
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#111113] border border-[#27272A] text-center space-y-1"
              >
                <div className="text-2xl font-black font-mono text-[#CCFF00] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#F5F5F5]">{stat.label}</div>
                <div className="text-[10px] text-[#A1A1AA] font-mono">{stat.sub}</div>
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
            <span className="text-xs font-mono font-bold text-[#CCFF00] uppercase tracking-wider">
              HOW IT WORKS
            </span>
            <h2 className="text-xl font-extrabold text-[#F5F5F5] tracking-tight">
              4 Steps to Industry Readiness
            </h2>
            <p className="text-xs text-[#A1A1AA]">
              A proven framework to build coding habits that stick for life.
            </p>
          </div>

          <div className="space-y-3">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#111113] border border-[#27272A] flex items-start gap-3.5 relative overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-center shrink-0 text-[#CCFF00] font-mono font-bold text-sm">
                    {s.step}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-[#CCFF00]" />
                      <h3 className="text-sm font-bold text-[#F5F5F5] truncate">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed font-normal">
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
            <span className="text-xs font-mono font-bold text-[#CCFF00] uppercase tracking-wider">
              THE 60-DAY ROADMAP
            </span>
            <h2 className="text-xl font-extrabold text-[#F5F5F5] tracking-tight">
              Curriculum Built for Impact
            </h2>
            <p className="text-xs text-[#A1A1AA]">
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
                className={`p-3.5 rounded-2xl border transition-all ${
                  phase.highlight
                    ? 'bg-[#111113] border-[#CCFF00]/50 shadow-[0_0_20px_rgba(204,255,0,0.1)]'
                    : 'bg-[#111113]/60 border-[#27272A]'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-mono font-bold text-[#CCFF00]">
                    {phase.phase}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded-full border font-semibold ${
                      phase.highlight
                        ? 'bg-[#CCFF00]/20 text-[#CCFF00] border-[#CCFF00]/40 animate-pulse'
                        : 'bg-[#18181B] text-[#A1A1AA] border-[#27272A]'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-[#F5F5F5] mb-1">
                  {phase.title}
                </h4>
                <p className="text-[11px] text-[#A1A1AA] leading-snug">
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
          className="p-5 rounded-2xl bg-[#111113] border border-[#27272A] space-y-4 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold text-[#CCFF00] uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" /> Philosophy
            </span>
            <h2 className="text-xl font-black text-[#F5F5F5] tracking-tight uppercase">
              &quot;Consistency Compounds.&quot;
            </h2>
          </div>

          <p className="text-xs text-[#A1A1AA] leading-relaxed font-normal">
            Cramming tutorials before placement season yields temporary recall. Building 45 minutes every day for 60 days builds muscle memory, confidence, and proof of work.
          </p>

          {/* Compound Graph Comparison Visual */}
          <div className="p-3 bg-[#18181B] rounded-xl border border-[#27272A] space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between text-[#A1A1AA]">
              <span>Day 1:</span>
              <span className="text-[#F5F5F5]">1 Micro Build (First Step)</span>
            </div>
            <div className="flex items-center justify-between text-[#A1A1AA]">
              <span>Day 30:</span>
              <span className="text-[#CCFF00]">30 Verified Projects (Habit)</span>
            </div>
            <div className="flex items-center justify-between font-bold text-[#F5F5F5] pt-1 border-t border-[#27272A]">
              <span>Day 60:</span>
              <span className="text-[#CCFF00]">60 Builds + Unstoppable Rank</span>
            </div>
          </div>
        </motion.section>

        {/* ================= 6. FINAL CTA ================= */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-2xl bg-[#111113] border border-[#CCFF00]/40 text-center space-y-4 shadow-[0_0_30px_rgba(204,255,0,0.12)] relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#18181B] border border-[#CCFF00]/40 flex items-center justify-center mx-auto text-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.2)]">
            <Rocket className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-[#F5F5F5] tracking-tight uppercase leading-tight">
              Your next 60 days could change your career.
            </h2>
            <p className="text-xs text-[#A1A1AA] max-w-xs mx-auto">
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

          <p className="text-[10px] font-mono text-[#71717A]">
            100% Free • Open Source Proof • College Student Optimized
          </p>
        </motion.section>
      </main>

      <BottomNav />
    </div>
  );
}
