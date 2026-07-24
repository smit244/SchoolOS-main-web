import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, LogIn, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenTrial }) => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#F4F7FE]">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-10 -left-10 w-96 h-96 bg-[#E5D9F2]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-[40rem] h-[40rem] bg-[#E2E8F0]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-64 h-64 bg-[#FDE68A]/40 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Copy & Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-8">
            <Zap className="w-4 h-4 text-[#4F46E5] fill-current" />
            <span className="text-sm font-bold text-[#4F46E5]">For schools, teachers & coaching classes</span>
          </div>

          {/* Headline - Using Poppins for a different font style */}
          <h1 className="font-['Poppins'] text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1.1] text-slate-900 tracking-tight mb-6">
            Manage your school in <br className="hidden sm:block" />
            <span className="relative inline-block text-[#4F46E5] px-2">
              minutes
              {/* Hand-drawn underline SVG */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 16" preserveAspectRatio="none">
                <path d="M2 13 Q 50 2 198 10" stroke="#F59E0B" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>,
            <br className="hidden sm:block" />
            not hours.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium mx-auto">
            Pick from 34 integrated modules: admissions, biometric attendance, Razorpay fee collection, exams, and parent mobile apps — instantly.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <button
              onClick={onOpenTrial}
              className="inline-flex items-center gap-2 bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#4338CA] transition-colors shadow-xl shadow-[#4F46E5]/30"
            >
              <ArrowRight className="w-5 h-5" />
              <span>Start 3-Day Free Trial</span>
            </button>
            
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 bg-white text-[#4F46E5] border-2 border-[#4F46E5] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#EEF2FF] transition-colors"
            >
              <LogIn className="w-5 h-5" />
              <span>Book Demo</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm font-semibold text-slate-500 bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] fill-[#10B981] text-white" /> No credit card</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] fill-[#10B981] text-white" /> English / ગુજરાતી / हिंदी</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] fill-[#10B981] text-white" /> Cloud Backup</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
