import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutDashboard, Flame, Trophy, Award } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    {
      label: 'Home',
      path: '/',
      icon: Home
    },
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard
    },
    {
      label: 'Day 12',
      path: '/day/12',
      icon: Flame,
      badge: 'Today'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#09090B]/95 backdrop-blur-lg border-t border-[#27272A] py-2 px-4 max-w-md mx-auto">
      <nav className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-150 relative active-press ${
                isActive ? 'text-[#CCFF00]' : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''}`} />
                {item.badge && (
                  <span className="absolute -top-1 -right-2 text-[9px] font-mono font-bold bg-[#CCFF00] text-[#09090B] px-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] mt-1 font-medium ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-4 h-0.5 bg-[#CCFF00] rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
