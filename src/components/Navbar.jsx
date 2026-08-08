import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Code2, User, ChevronRight } from 'lucide-react';
import { studentData } from '../data/mockData';

export default function Navbar({ student = studentData, showLinks = true }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#09090B]/90 backdrop-blur-md border-b border-[#27272A] px-4 py-3">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group active-press">
          <div className="w-8 h-8 rounded-lg bg-[#18181B] border border-[#27272A] flex items-center justify-center group-hover:border-[#CCFF00]/50 transition-colors">
            <span className="font-extrabold text-sm text-[#CCFF00]">AB</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-[#F5F5F5] flex items-center gap-1">
              abtalks
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse"></span>
            </span>
            <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-mono">
              60-Day Sprint
            </span>
          </div>
        </Link>

        {/* Optional Page Nav Links for Hackathon Navigation */}
        {showLinks && (
          <nav className="hidden sm:flex items-center gap-1 text-xs">
            <Link
              to="/"
              className={`px-2.5 py-1.5 rounded-md font-medium transition-colors ${
                isActive('/') ? 'text-[#CCFF00] bg-[#18181B]' : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
              }`}
            >
              Landing
            </Link>
            <Link
              to="/dashboard"
              className={`px-2.5 py-1.5 rounded-md font-medium transition-colors ${
                isActive('/dashboard') ? 'text-[#CCFF00] bg-[#18181B]' : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/day/12"
              className={`px-2.5 py-1.5 rounded-md font-medium transition-colors ${
                isActive('/day/12') ? 'text-[#CCFF00] bg-[#18181B]' : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
              }`}
            >
              Day 12
            </Link>
          </nav>
        )}

        {/* User Profile Summary */}
        <Link to="/dashboard" className="flex items-center gap-2.5 active-press">
          <div className="flex flex-col items-end text-right">
            <span className="text-xs font-semibold text-[#F5F5F5] line-clamp-1">
              {student?.name || 'Coder'}
            </span>
            <div className="flex items-center gap-1 text-[11px] text-[#CCFF00] font-mono">
              <Flame className="w-3 h-3 text-[#CCFF00] fill-[#CCFF00]/20" />
              <span>{student?.streak || 0}d streak</span>
            </div>
          </div>

          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#18181B] border border-[#27272A] overflow-hidden flex items-center justify-center">
              {student?.avatarUrl ? (
                <img src={student.avatarUrl} alt={student.name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-4 h-4 text-[#A1A1AA]" />
              )}
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#CCFF00] border-2 border-[#09090B] rounded-full"></span>
          </div>
        </Link>
      </div>
    </header>
  );
}
