import React, { useState } from 'react';
import { X, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [school, setSchool] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-6 relative animate-in zoom-in-95 duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Your Free Trial is Active!</h3>
            <p className="text-xs text-slate-300">
              We have dispatched account credentials for <span className="text-white font-bold">{school}</span> to <span className="text-white font-bold">{email}</span>.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-xl bg-primary text-xs font-bold text-white hover:bg-primary-600"
            >
              Go to Dashboard Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-bold text-white">Start 14-Day Free SchoolOS Trial</h3>
            </div>
            <p className="text-xs text-slate-400">Instant access. No credit card required. Includes 100 free AI Question Papers.</p>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-300">School / Institution Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Greenwood High School"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary mt-1"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300">Work Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="admin@greenwood.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary mt-1"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent via-emerald-500 to-primary text-white font-bold text-xs shadow-lg shadow-accent/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Activate Free Trial Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
