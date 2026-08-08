import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutDashboard, Flame } from 'lucide-react';

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
    <div className="fixed bottom-3 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className="max-w-[390px] mx-auto bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full py-2 px-6 pointer-events-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-3 transition-all duration-150 relative active-press ${
                isActive ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''}`} />
                {item.badge && (
                  <span className="absolute -top-1 -right-2 text-[9px] font-mono font-bold bg-emerald-600 text-white px-1.5 rounded-full shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] mt-0.5 font-medium ${isActive ? 'font-bold text-slate-900' : ''}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute -bottom-1 w-4 h-1 bg-emerald-600 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
