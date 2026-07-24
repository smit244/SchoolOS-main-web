import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface CTAProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenDemo, onOpenTrial }) => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-10 sm:p-16 rounded-3xl border border-primary/30 relative overflow-hidden text-center space-y-8 bg-gradient-to-b from-primary/10 via-slate-900 to-slate-950 shadow-2xl shadow-primary/20">
          
          {/* Background Elements */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[140px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-primary/40 text-xs font-semibold text-secondary">
            <Sparkles className="w-4 h-4" />
            <span>JOIN 100+ FORWARD-THINKING SCHOOLS TODAY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Transform Your School into an <span className="text-gradient-primary">AI-Powered Institution?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Experience zero-error school management and generate board-standard question papers in 30 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-base shadow-xl shadow-primary/30 hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-slate-200 font-semibold text-base border border-slate-700 hover:bg-slate-800 transition-all"
            >
              Book Live Demo
            </button>
          </div>

          <div className="pt-4 text-xs text-slate-400 font-medium flex flex-wrap items-center justify-center gap-6">
            <span>✓ 100% Free Data Migration</span>
            <span>✓ No Setup Charges</span>
            <span>✓ Cancel Anytime</span>
          </div>

        </div>

      </div>
    </section>
  );
};
