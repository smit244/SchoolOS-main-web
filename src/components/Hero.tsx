import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Layers, Shield, Zap } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenTrial }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100vh] flex items-center justify-center pt-32 pb-20 overflow-hidden perspective-[1000px]">
      
      {/* Dynamic Background Glows (mimicking Apple Light Glows) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-vision-purple/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-vision-cyan/30 rounded-full blur-[100px] pointer-events-none animate-spin-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-vision-blueGlow/30 rounded-full blur-[100px] pointer-events-none" style={{ animation: 'spin 20s linear infinite reverse' }} />

      <motion.div 
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center"
      >
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-slate-200/50 backdrop-blur-xl mb-8 group overflow-hidden relative cursor-pointer shadow-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-vision-cyan/10 to-vision-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Sparkles className="w-4 h-4 text-vision-blueGlow relative z-10" />
          <span className="text-sm font-semibold text-slate-700 relative z-10 tracking-wide">Introducing SchoolOS Intelligence</span>
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[4rem] sm:text-[6rem] lg:text-[7.5rem] font-medium leading-[1.05] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600 mb-8 max-w-5xl mx-auto"
        >
          The future of <br className="hidden sm:block" />
          <span className="relative">
            <span className="absolute inset-0 bg-gradient-to-r from-vision-blueGlow via-vision-purple to-vision-cyan bg-clip-text text-transparent blur-2xl opacity-30" />
            <span className="relative bg-gradient-to-r from-vision-blueGlow via-vision-purple to-vision-cyan bg-clip-text text-transparent">learning</span>
          </span> is here.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light mx-auto mb-12"
        >
          An immersive, AI-powered ecosystem designed for modern educational institutions. Manage everything from admissions to exams in one beautiful workspace.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 relative z-20"
        >
          <button
            onClick={onOpenTrial}
            className="group relative px-8 py-4 rounded-full bg-slate-900 text-white font-semibold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_10px_30px_rgba(15,23,42,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-vision-blueGlow to-vision-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Start 3-Day Free Trial</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onOpenDemo}
            className="group px-8 py-4 rounded-full bg-white/60 border border-slate-200/50 text-slate-800 font-medium text-lg hover:bg-white transition-colors backdrop-blur-xl flex items-center gap-2 shadow-sm"
          >
            <span>Book a live demo</span>
          </button>
        </motion.div>

        {/* Floating 3D Elements Mockup (CSS based for now, can integrate ThreeJS later) */}
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl mx-auto aspect-[16/9] rounded-[2.5rem] border border-white/80 bg-white/40 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden group perspective-[2000px]"
        >
          {/* Inner Interface Mockup */}
          <div className="absolute inset-2 rounded-[2rem] border border-white/60 bg-gradient-to-b from-white/60 to-white/20 overflow-hidden flex shadow-inner">
            {/* Sidebar */}
            <div className="w-64 h-full border-r border-slate-200/50 p-6 hidden md:block bg-white/20">
              <div className="w-full h-8 bg-slate-900/10 rounded-lg mb-8" />
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-full h-6 bg-slate-900/5 rounded-md mb-4" />
              ))}
            </div>
            {/* Main Area */}
            <div className="flex-1 p-8 relative bg-white/10">
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vision-purple/20 blur-[100px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
               <div className="w-1/3 h-10 bg-slate-900/10 rounded-xl mb-8 relative z-10" />
               <div className="grid grid-cols-3 gap-6 relative z-10">
                  <div className="h-40 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-md shadow-sm" />
                  <div className="h-40 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-md shadow-sm" />
                  <div className="h-40 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-md shadow-sm" />
               </div>
               <div className="w-full h-64 mt-6 rounded-2xl bg-gradient-to-t from-vision-cyan/5 to-white/60 border border-white/80 relative z-10 backdrop-blur-md flex items-end p-6 shadow-sm">
                  {/* Fake Chart */}
                  <div className="w-full h-1/2 flex items-end gap-2">
                    {[30, 50, 40, 70, 90, 60, 80, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "circOut" }}
                        className="flex-1 bg-gradient-to-t from-vision-cyan to-vision-blueGlow rounded-t-sm opacity-80"
                      />
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Floating UI Cards */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -right-8 top-1/4 w-64 p-4 rounded-2xl bg-white/80 backdrop-blur-3xl border border-white shadow-[0_15px_35px_rgba(0,0,0,0.05)] z-20 hidden lg:flex items-center gap-4"
          >
             <div className="w-12 h-12 rounded-full bg-vision-cyan/20 flex items-center justify-center">
               <Zap className="w-6 h-6 text-vision-cyan" />
             </div>
             <div>
               <div className="text-slate-900 font-bold">AI Engine Active</div>
               <div className="text-slate-500 text-sm">Processing 1M+ queries</div>
             </div>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
            className="absolute -left-8 bottom-1/4 w-64 p-4 rounded-2xl bg-white/80 backdrop-blur-3xl border border-white shadow-[0_15px_35px_rgba(0,0,0,0.05)] z-20 hidden lg:flex items-center gap-4"
          >
             <div className="w-12 h-12 rounded-full bg-vision-purple/20 flex items-center justify-center">
               <Shield className="w-6 h-6 text-vision-purple" />
             </div>
             <div>
               <div className="text-slate-900 font-bold">Secure Gateway</div>
               <div className="text-slate-500 text-sm">Zero-trust architecture</div>
             </div>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
};
