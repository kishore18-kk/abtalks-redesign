import React, { useState } from 'react';
import { CheckCircle2, Send, Clock, Sparkles } from 'lucide-react';
import Button from './Button';
import { proofSubmissionData } from '../data/mockData';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function ProofCard({
  proofData = proofSubmissionData,
  onVerifySubmit = () => {},
  className = ''
}) {
  const [githubUrl, setGithubUrl] = useState(proofData?.githubUrl || '');
  const [linkedinUrl, setLinkedinUrl] = useState(proofData?.linkedinUrl || '');
  const [status, setStatus] = useState(proofData?.status || 'pending');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setStatus('submitted');
      setIsSubmitting(false);
      onVerifySubmit({ githubUrl, linkedinUrl, status: 'submitted' });
    }, 600);
  };

  const isSubmitted = status === 'submitted' || status === 'verified';

  return (
    <div className={`bg-white border border-slate-200/90 rounded-2xl p-5 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)] ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Proof of Work Submission
            </h3>
            <p className="text-[10px] text-slate-500 font-mono">
              Day 12 • Build a REST API
            </p>
          </div>
        </div>

        <span
          className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border uppercase ${
            isSubmitted
              ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
              : 'text-amber-700 bg-amber-50 border-amber-200'
          }`}
        >
          {isSubmitted ? 'Submitted' : 'Pending'}
        </span>
      </div>

      {/* Form or Submitted Display */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* GitHub URL Input */}
        <div>
          <label className="block text-[11px] font-mono font-medium text-slate-600 mb-1">
            GitHub Repository URL
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <GithubIcon className="w-4 h-4 text-slate-700" />
            </div>
            <input
              type="url"
              required
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/username/repo"
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white font-mono"
            />
          </div>
        </div>

        {/* LinkedIn Post URL Input */}
        <div>
          <label className="block text-[11px] font-mono font-medium text-slate-600 mb-1">
            LinkedIn Proof Post URL
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <LinkedinIcon className="w-4 h-4 text-sky-600" />
            </div>
            <input
              type="url"
              required
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="https://linkedin.com/posts/..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white font-mono"
            />
          </div>
        </div>

        {/* Status / Submit button */}
        {isSubmitted ? (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-800 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Proof submitted! Streak locked for Day 12.</span>
            </div>
            <button
              type="button"
              onClick={() => setStatus('pending')}
              className="text-[10px] text-slate-500 hover:text-slate-800 underline font-mono ml-2"
            >
              Edit
            </button>
          </div>
        ) : (
          <Button
            type="submit"
            variant="primary"
            size="md"
            fullWidth
            disabled={isSubmitting}
            icon={isSubmitting ? Clock : Send}
          >
            {isSubmitting ? 'Submitting Proof...' : 'Submit Proof & Lock Streak'}
          </Button>
        )}
      </form>
    </div>
  );
}
