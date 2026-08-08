import React from 'react';

export default function ProgressRing({
  percentage = 0,
  label = null,
  sublabel = null,
  size = 90,
  strokeWidth = 8,
  strokeColor = '#CCFF00',
  trackColor = '#27272A',
  className = ''
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  const strokeDashoffset = circumference - (clampedPercentage / 100) * circumference;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background Track Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Animated Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      {/* Inner Label Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-1">
        {label !== null ? (
          <span className="font-extrabold text-sm text-[#F5F5F5] font-mono leading-none">
            {label}
          </span>
        ) : (
          <span className="font-extrabold text-sm text-[#CCFF00] font-mono leading-none">
            {Math.round(clampedPercentage)}%
          </span>
        )}
        {sublabel && (
          <span className="text-[10px] text-[#A1A1AA] mt-0.5 tracking-tight font-sans">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}
