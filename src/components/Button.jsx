import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'outline' | 'lime-subtle' | 'green-subtle'
  size = 'md', // 'sm' | 'md' | 'lg'
  fullWidth = false,
  disabled = false,
  icon: Icon = null,
  iconPosition = 'left',
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500/40 disabled:opacity-50 disabled:cursor-not-allowed active-press select-none';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 min-h-[38px] gap-1.5 rounded-full',
    md: 'text-sm px-4.5 py-2.5 min-h-[44px] gap-2 rounded-full',
    lg: 'text-base px-6 py-3.5 min-h-[48px] gap-2.5 rounded-full',
  };

  const variantClasses = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 font-bold shadow-[0_4px_16px_rgba(22,163,74,0.25)] border border-emerald-600',
    secondary: 'bg-white text-slate-800 hover:bg-slate-50 border border-slate-200/90 shadow-xs',
    ghost: 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100',
    outline: 'bg-transparent text-emerald-600 border border-emerald-500/50 hover:bg-emerald-50',
    'lime-subtle': 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100',
    'green-subtle': 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      whileHover={{ scale: disabled ? 1 : 1.01 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
}
