import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ChallengeDay from './pages/ChallengeDay';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#09090B] text-[#F5F5F5] selection:bg-[#CCFF00] selection:text-[#09090B]">
        <Routes>
          {/* 1. Landing Page Route */}
          <Route path="/" element={<Landing />} />

          {/* 2. Dashboard Route */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* 3. Challenge Day Route (Supports /day/12 and dynamic day numbers) */}
          <Route path="/day/12" element={<ChallengeDay />} />
          <Route path="/day/:dayId" element={<ChallengeDay />} />

          {/* Fallback to Landing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
