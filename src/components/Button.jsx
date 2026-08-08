import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'outline' | 'lime-subtle'
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
  // Base classes for 390px mobile-first touch optimization (min height 44px for md/lg)
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-150 ease-in-out rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CCFF00]/50 disabled:opacity-50 disabled:cursor-not-allowed active-press select-none';

  const sizeClasses = {
    sm: 'text-xs px-3 py-2 min-h-[36px] gap-1.5',
    md: 'text-sm px-4 py-2.5 min-h-[44px] gap-2',
    lg: 'text-base px-5 py-3.5 min-h-[48px] gap-2.5 rounded-2xl',
  };

  const variantClasses = {
    primary: 'bg-[#CCFF00] text-[#09090B] hover:bg-[#b4f000] font-bold shadow-[0_0_20px_rgba(204,255,0,0.2)] border border-[#CCFF00]/40',
    secondary: 'bg-[#18181B] text-[#F5F5F5] hover:bg-[#222226] border border-[#27272A] hover:border-[#3F3F46]',
    ghost: 'bg-transparent text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#18181B]',
    outline: 'bg-transparent text-[#CCFF00] border border-[#CCFF00]/50 hover:bg-[#CCFF00]/10',
    'lime-subtle': 'bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30 hover:bg-[#CCFF00]/20',
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
