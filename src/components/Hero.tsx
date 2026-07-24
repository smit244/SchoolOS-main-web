import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, LogIn, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenTrial }) => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#F4F7FE]">
      
      {/* Background Decorative Circles (from screenshot) */}
      <div className="absolute top-10 -left-10 w-96 h-96 bg-[#E5D9F2]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-[40rem] h-[40rem] bg-[#E2E8F0]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-64 h-64 bg-[#FDE68A]/30 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-6">
              <Zap className="w-4 h-4 text-[#4F46E5] fill-current" />
              <span className="text-sm font-bold text-[#4F46E5]">For schools, teachers & coaching classes</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-extrabold leading-[1.1] text-slate-900 tracking-tight mb-6">
              Manage your school in <br className="hidden sm:block" />
              <span className="relative inline-block text-[#4F46E5]">
                minutes
                {/* Hand-drawn underline SVG */}
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 16" preserveAspectRatio="none">
                  <path d="M2 13 Q 50 2 198 10" stroke="#F59E0B" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>,
              <br className="hidden sm:block" />
              not hours.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed font-medium">
              Pick from 34 integrated modules: admissions, biometric attendance, Razorpay fee collection, exams, and parent mobile apps — instantly.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button
                onClick={onOpenTrial}
                className="inline-flex items-center gap-2 bg-[#4F46E5] text-white px-6 py-3.5 rounded-xl font-bold text-base hover:bg-[#4338CA] transition-colors shadow-lg shadow-[#4F46E5]/25"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Start 3-Day Free Trial</span>
              </button>
              
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 bg-white text-[#4F46E5] border-2 border-[#4F46E5] px-6 py-3.5 rounded-xl font-bold text-base hover:bg-[#EEF2FF] transition-colors"
              >
                <LogIn className="w-5 h-5" />
                <span>Book Demo</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-semibold text-slate-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#10B981] fill-[#10B981] text-white" /> No credit card</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#10B981] fill-[#10B981] text-white" /> English / ગુજરાતી / हिंदी</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#10B981] fill-[#10B981] text-white" /> Cloud Backup</span>
            </div>
          </motion.div>


          {/* Right Column: Illustration (Mimicking screenshot) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-square max-w-[500px] mx-auto lg:ml-auto flex items-center justify-center"
          >
            {/* White Circle Background */}
            <div className="absolute inset-4 bg-white rounded-full shadow-2xl shadow-slate-200/50" />
            
            {/* Decorative Floating Dots */}
            <div className="absolute top-[20%] left-[10%] w-3 h-3 rounded-full bg-emerald-400" />
            <div className="absolute bottom-[30%] left-[5%] w-4 h-4 rounded-full bg-sky-400" />
            <div className="absolute bottom-[20%] right-[15%] w-3 h-3 rounded-full bg-emerald-400" />
            <div className="absolute top-[40%] right-[5%] w-3 h-3 rounded-full bg-purple-400" />
            <div className="absolute -bottom-2 left-[25%] w-5 h-5 rounded bg-pink-300 rotate-12" />

            {/* Mock Paper/Dashboard Document */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[65%] h-[80%] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-6 flex flex-col gap-4 z-10 rotate-3"
            >
              {/* Paper Header (Purple shape) */}
              <div className="absolute top-0 left-0 w-full h-16 bg-[#4F46E5] rounded-t-2xl flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-16 h-2 rounded-full bg-white/30" />
              </div>

              <div className="mt-16 flex flex-col gap-5">
                {/* List Items representing questions/features */}
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {i % 3 === 1 ? (
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
                      </div>
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500 text-white" />
                    )}
                    <div className="flex-1">
                      <div className="w-full h-2.5 rounded-full bg-slate-200 mb-2" />
                      <div className="w-2/3 h-2.5 rounded-full bg-slate-100" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom tag */}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-indigo-50 text-indigo-500 text-xs font-bold rounded-full">
                25 M
              </div>
            </motion.div>

            {/* A+ Badge floating on top right */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-[10%] right-[10%] w-20 h-20 bg-amber-500 rounded-full shadow-lg shadow-amber-500/40 flex items-center justify-center z-20 text-white font-display font-extrabold text-3xl border-4 border-white"
            >
              A+
            </motion.div>

            {/* MCQ Floating Pill */}
            <motion.div 
              animate={{ x: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-[55%] -left-8 bg-white px-4 py-3 rounded-2xl shadow-xl shadow-slate-200 flex items-center gap-3 z-20 border border-slate-100"
            >
              <span className="text-[#4F46E5] font-bold text-sm">MCQ</span>
              <div className="w-8 h-2 rounded-full bg-slate-200" />
              <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500 text-white" />
            </motion.div>

            {/* Star decoration */}
            <div className="absolute top-[25%] left-[5%] text-amber-400 rotate-45 z-0">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2L15 9l7 1-5 5 1 7-7-4-7 4 1-7-5-5 7-1z" />
               </svg>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
