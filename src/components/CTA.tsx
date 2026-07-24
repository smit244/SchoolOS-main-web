import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenDemo, onOpenTrial }) => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-ios-card p-10 sm:p-16 rounded-4xl border border-white relative overflow-hidden text-center space-y-8 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 shadow-ios-float">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-ios border border-blue-200 text-xs font-bold text-blue-600">
            <Sparkles className="w-4 h-4" />
            <span>JOIN 100+ FORWARD-THINKING SCHOOLS TODAY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Transform Your School with <span className="text-gradient-blue">34 AI ERP Modules?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Get instant access to student admissions, fees, biometrics, exams, transport GPS, payroll, and parent mobile apps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-500/30 hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-ios text-slate-800 font-bold text-base border border-slate-200 hover:bg-white transition-all shadow-sm"
            >
              Book Live Demo
            </button>
          </div>

          <div className="pt-4 text-xs text-slate-500 font-bold flex flex-wrap items-center justify-center gap-6">
            <span>✓ 100% Free Data Migration</span>
            <span>✓ No Setup Charges</span>
            <span>✓ Cancel Anytime</span>
          </div>

        </div>

      </div>
    </section>
  );
};
