import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, User } from 'lucide-react';
import { studentData } from '../data/mockData';

export default function Navbar({ student = studentData, showLinks = true }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8FAF9]/90 backdrop-blur-md border-b border-slate-200/80 px-4 py-3">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {/* Brand Logo */}
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

        {/* Optional Page Nav Links for Hackathon Navigation */}
        {showLinks && (
          <nav className="hidden sm:flex items-center gap-1 text-xs">
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-full font-medium transition-colors ${
                isActive('/') ? 'text-emerald-700 bg-emerald-50 font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Landing
            </Link>
            <Link
              to="/dashboard"
              className={`px-3 py-1.5 rounded-full font-medium transition-colors ${
                isActive('/dashboard') ? 'text-emerald-700 bg-emerald-50 font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/day/12"
              className={`px-3 py-1.5 rounded-full font-medium transition-colors ${
                isActive('/day/12') ? 'text-emerald-700 bg-emerald-50 font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Day 12
            </Link>
          </nav>
        )}

        {/* User Profile Summary */}
        <Link to="/dashboard" className="flex items-center gap-2.5 active-press">
          <div className="flex flex-col items-end text-right">
            <span className="text-xs font-bold text-slate-900 line-clamp-1">
              {student?.name || 'Coder'}
            </span>
            <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-mono font-semibold">
              <Flame className="w-3 h-3 text-emerald-500 fill-emerald-500/20" />
              <span>{student?.streak || 0}d streak</span>
            </div>
          </div>

          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shadow-xs">
              {student?.avatarUrl ? (
                <img src={student.avatarUrl} alt={student.name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-4 h-4 text-slate-500" />
              )}
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
        </Link>
      </div>
    </header>
  );
}
