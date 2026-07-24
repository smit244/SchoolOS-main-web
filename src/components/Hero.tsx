import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

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

  // Parallax and scale effects for Apple-style scroll depth
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const dashboardScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const dashboardRotateX = useTransform(scrollYProgress, [0, 1], [15, 0]); // 3D tilt

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[140vh] w-full flex flex-col items-center pt-[25vh] overflow-hidden perspective-[2000px]"
    >
      
      {/* Huge Apple-Style Typography Sequence */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 inline-flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-vision-cyan animate-pulse" />
          <span className="text-sm font-medium text-white/80 tracking-wide uppercase">Introducing SchoolOS</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] font-medium leading-[0.9] tracking-tighter text-white mb-6"
        >
          Manage schools. <br/>
          <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-vision-cyan via-white to-vision-purple">
            Like magic.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl text-vision-textMuted font-light max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide"
        >
          Pro-level ecosystem for admissions, biometric attendance, and fee collection. Designed for the spatial era.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onOpenTrial}
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg overflow-hidden group shadow-glow-cyan transition-transform hover:scale-105 flex items-center gap-2"
          >
            <span className="relative z-10">Start Free Trial</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onOpenDemo}
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            <span>Watch Film</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Floating 3D Dashboard Mockup */}
      <motion.div 
        style={{ 
          y: dashboardY, 
          scale: dashboardScale,
          rotateX: dashboardRotateX,
          transformPerspective: 2000
        }}
        initial={{ opacity: 0, y: 150, rotateX: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-24"
      >
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden glass-panel border border-white/20 shadow-dynamic-island group">
          
          {/* Inner Screen Blur Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm mix-blend-overlay z-10 pointer-events-none" />
          
          {/* Mockup UI Elements inside */}
          <div className="absolute top-0 left-0 w-full h-12 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2 z-20">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="mx-auto w-48 h-6 rounded-md bg-white/5" />
          </div>

          <div className="absolute top-12 left-0 w-full h-[calc(100%-3rem)] p-6 md:p-10 flex gap-6 z-20">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col gap-3 w-48 shrink-0">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-8 rounded-lg bg-white/5 ${i === 0 ? 'bg-white/20' : ''}`} />
              ))}
            </div>
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Top Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-24 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-end p-4">
                     <div className="w-1/2 h-4 rounded bg-white/10 mb-2" />
                     <div className="w-3/4 h-6 rounded bg-white/20" />
                  </div>
                ))}
              </div>
              {/* Big Chart Area */}
              <div className="flex-1 rounded-3xl bg-white/5 border border-white/5 p-6 relative overflow-hidden">
                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-vision-cyan/20 to-transparent blur-xl" />
                 <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0 100 Q 25 50, 50 80 T 100 20 L 100 100 Z" fill="rgba(255,255,255,0.05)" />
                    <path d="M0 100 Q 25 50, 50 80 T 100 20" stroke="rgba(0,240,255,0.5)" strokeWidth="0.5" fill="none" />
                 </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Accent Glows around dashboard */}
        <div className="absolute -inset-10 bg-vision-cyan/20 blur-[100px] z-0 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
      </motion.div>

    </section>
  );
};
