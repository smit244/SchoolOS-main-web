import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Zap, Activity } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenTrial }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(smoothMouseY, [-1, 1], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-1, 1], [-10, 10]);
  
  const floatX1 = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
  const floatY1 = useTransform(smoothMouseY, [-1, 1], [-20, 20]);
  
  const floatX2 = useTransform(smoothMouseX, [-1, 1], [30, -30]);
  const floatY2 = useTransform(smoothMouseY, [-1, 1], [30, -30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize mouse coordinates between -1 and 1
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Staggered text animation variants
  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const titleWords1 = "The future of".split(" ");
  
  return (
    <section ref={containerRef} className="relative w-full min-h-[100vh] flex items-center justify-center pt-32 pb-20 overflow-hidden perspective-[2000px]">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-vision-purple/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-vision-cyan/30 rounded-full blur-[100px] pointer-events-none animate-spin-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-vision-blueGlow/30 rounded-full blur-[100px] pointer-events-none" style={{ animation: 'spin 20s linear infinite reverse' }} />

      <motion.div 
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center"
      >
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-slate-200/50 backdrop-blur-xl mb-8 group overflow-hidden relative cursor-pointer shadow-sm hover:scale-105 transition-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-vision-cyan/10 to-vision-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Sparkles className="w-4 h-4 text-vision-blueGlow relative z-10 animate-pulse" />
          <span className="text-sm font-semibold text-slate-700 relative z-10 tracking-wide">Introducing SchoolOS Intelligence</span>
        </motion.div>

        {/* Cinematic Headline with Staggered Words */}
        <motion.h1 
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="font-display text-[4rem] sm:text-[6rem] lg:text-[7.5rem] font-medium leading-[1.05] tracking-tighter text-slate-900 mb-8 max-w-5xl mx-auto flex flex-wrap justify-center gap-x-4 sm:gap-x-8"
        >
          {titleWords1.map((word, i) => (
            <motion.span key={i} variants={wordAnimation} className="inline-block">
              {word}
            </motion.span>
          ))}
          <motion.span variants={wordAnimation} className="relative inline-block mt-2 sm:mt-0">
            <span className="absolute inset-0 bg-gradient-to-r from-vision-blueGlow via-vision-purple to-vision-cyan bg-clip-text text-transparent blur-2xl opacity-40 animate-pulse-slow" />
            <span className="relative bg-gradient-to-r from-vision-blueGlow via-vision-purple to-vision-cyan bg-clip-text text-transparent">learning</span>
          </motion.span>
          <motion.span variants={wordAnimation} className="inline-block">is</motion.span>
          <motion.span variants={wordAnimation} className="inline-block">here.</motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light mx-auto mb-12"
        >
          An immersive, AI-powered ecosystem designed for modern educational institutions. Manage everything from admissions to exams in one beautiful workspace.
        </motion.p>

        {/* Magnetic CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 relative z-20"
        >
          <button
            onClick={onOpenTrial}
            className="group relative px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg overflow-hidden transition-all hover:scale-110 active:scale-95 flex items-center gap-2 shadow-[0_10px_40px_rgba(15,23,42,0.2)] hover:shadow-[0_15px_50px_rgba(15,23,42,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-vision-blueGlow to-vision-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Start 3-Day Free Trial</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          
          <button
            onClick={onOpenDemo}
            className="group px-8 py-4 rounded-full bg-white/60 border border-slate-200/80 text-slate-800 font-bold text-lg hover:bg-white transition-all backdrop-blur-xl flex items-center gap-2 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95"
          >
            <span>Book a live demo</span>
          </button>
        </motion.div>

        {/* Floating 3D Elements Mockup with Mouse Parallax */}
        <motion.div 
          initial={{ opacity: 0, y: 150, rotateX: 30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.5, delay: 1, type: "spring", bounce: 0.2 }}
          style={{ rotateX, rotateY }}
          className="relative w-full max-w-6xl mx-auto h-[400px] sm:h-[600px] lg:h-[700px] flex items-center justify-center transform-style-3d mt-10 perspective-[2000px]"
        >
          
          {/* Main Desktop Dashboard Mockup */}
          <div className="absolute left-0 w-full md:w-[85%] h-full rounded-[2.5rem] border border-white/80 bg-white/40 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden group">
            {/* Inner Interface Mockup */}
            <div className="absolute inset-2 rounded-[2rem] border border-white/60 bg-gradient-to-b from-white/80 to-white/30 overflow-hidden flex shadow-inner">
              
              {/* Sidebar */}
              <div className="w-64 h-full border-r border-slate-200/50 p-6 hidden lg:flex flex-col gap-4 bg-white/30 backdrop-blur-md">
                <div className="w-full h-10 bg-slate-900/10 rounded-xl mb-6 shadow-sm" />
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-full h-8 bg-slate-900/5 rounded-lg mb-2 flex items-center px-3 gap-3 hover:bg-white/50 transition-colors cursor-pointer">
                     <div className="w-4 h-4 rounded-full bg-slate-200" />
                     <div className="h-2 flex-1 rounded-full bg-slate-200" />
                  </div>
                ))}
              </div>
              
              {/* Main Area */}
              <div className="flex-1 p-6 sm:p-8 relative bg-white/20">
                 {/* Animated Inner Background Glow */}
                 <motion.div 
                   style={{ x: floatX1, y: floatY1 }}
                   className="absolute top-0 right-0 w-[600px] h-[600px] bg-vision-purple/20 blur-[100px] rounded-full pointer-events-none opacity-60" 
                 />
                 <motion.div 
                   style={{ x: floatX2, y: floatY2 }}
                   className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-vision-cyan/20 blur-[100px] rounded-full pointer-events-none opacity-50" 
                 />
                 
                 <div className="w-1/2 sm:w-1/3 h-10 bg-slate-900/10 rounded-xl mb-8 relative z-10 shadow-sm" />
                 
                 {/* 3 Top Stat Cards */}
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
                    {[1, 2, 3].map(i => (
                      <motion.div 
                        key={i} 
                        whileHover={{ y: -5 }}
                        className={`h-32 sm:h-40 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-md shadow-sm p-4 sm:p-5 flex flex-col justify-between ${i === 3 ? 'hidden md:flex' : ''}`}
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                          <Activity className="w-4 h-4 text-vision-blueGlow" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-4 sm:h-6 w-1/2 bg-slate-900/10 rounded-md" />
                          <div className="h-2 w-3/4 bg-slate-900/5 rounded-full" />
                        </div>
                      </motion.div>
                    ))}
                 </div>
                 
                 {/* Abstract Animated Visualization Area */}
                 <div className="w-full h-48 sm:h-64 mt-6 rounded-2xl bg-gradient-to-tr from-white/80 to-white/40 border border-white/80 relative z-10 backdrop-blur-xl p-6 shadow-sm flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_100%)]" />
                    
                    {/* Floating Data Nodes inside dashboard */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full border border-vision-cyan/20 flex items-center justify-center"
                    >
                       <div className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-vision-cyan shadow-[0_0_15px_rgba(6,182,212,0.5)] -top-1.5 sm:-top-2" />
                       <div className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-vision-purple shadow-[0_0_15px_rgba(139,92,246,0.5)] -bottom-1 sm:-bottom-1.5" />
                       
                       <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-vision-blueGlow/30 flex items-center justify-center">
                         <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-vision-blueGlow/20 animate-pulse flex items-center justify-center">
                           <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-vision-blueGlow shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                         </div>
                       </div>
                    </motion.div>
                 </div>
              </div>
            </div>
          </div>

          {/* Floating Mobile Mockup */}
          <motion.div 
            style={{ x: floatX2, y: floatY1 }}
            className="absolute right-0 lg:-right-8 bottom-0 lg:bottom-10 w-[260px] lg:w-[300px] h-[520px] lg:h-[600px] rounded-[3rem] border-[8px] border-white/90 bg-white/40 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.15)] overflow-hidden z-30 hidden md:block group/mobile"
          >
             {/* iPhone Dynamic Island */}
             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-900 rounded-full z-20 flex items-center justify-between px-2 shadow-inner">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <div className="w-3 h-3 rounded-full bg-slate-800" />
             </div>
             
             {/* Mobile Content */}
             <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/40 p-5 pt-16 flex flex-col gap-4">
                
                {/* Mobile Header Card */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-14 bg-white/80 rounded-2xl border border-white shadow-sm flex items-center px-4 gap-3 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-vision-cyan to-vision-blueGlow flex items-center justify-center shadow-md">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="w-2/3 h-2 bg-slate-800/20 rounded-full" />
                    <div className="w-1/3 h-1.5 bg-slate-800/10 rounded-full" />
                  </div>
                </motion.div>
                
                {/* Mobile Main Chart Card */}
                <div className="flex-1 bg-white/60 rounded-3xl border border-white shadow-sm p-5 relative overflow-hidden flex flex-col justify-end group-hover/mobile:bg-white/80 transition-colors">
                   <div className="absolute -right-10 -top-10 w-40 h-40 bg-vision-blueGlow/20 blur-3xl rounded-full" />
                   <div className="absolute -left-10 top-20 w-32 h-32 bg-vision-purple/20 blur-3xl rounded-full" />
                   
                   {/* Fake mobile chart */}
                   <div className="flex items-end gap-2 h-[60%] w-full relative z-10">
                      {[50, 30, 80, 45, 95, 60].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="flex-1 bg-gradient-to-t from-vision-purple to-vision-cyan rounded-t-sm opacity-90 shadow-sm" 
                        />
                      ))}
                   </div>
                </div>

                {/* Mobile Bottom Status Card */}
                <div className="w-full h-24 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl p-5 flex items-center gap-4 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-r from-vision-blueGlow/20 to-transparent pointer-events-none" />
                   <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                     <Shield className="w-6 h-6 text-white" />
                   </div>
                   <div className="space-y-2 flex-1">
                     <div className="text-white text-sm font-bold">Secure Sync</div>
                     <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                       <motion.div 
                         animate={{ width: ["0%", "100%", "0%"] }} 
                         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                         className="h-full bg-vision-cyan" 
                       />
                     </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Floating UI Cards (Parallaxed) */}
          <motion.div 
            style={{ x: floatX2, y: floatY1 }}
            className="absolute -right-8 lg:-right-16 top-1/4 w-64 p-5 rounded-2xl bg-white/90 backdrop-blur-3xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-40 hidden xl:flex items-center gap-4 hover:scale-105 transition-transform cursor-default"
          >
             <div className="w-14 h-14 rounded-full bg-gradient-to-br from-vision-cyan to-vision-blueGlow flex items-center justify-center shadow-inner">
               <Zap className="w-6 h-6 text-white" />
             </div>
             <div>
               <div className="text-slate-900 font-bold text-lg">AI Engine</div>
               <div className="text-slate-500 text-sm font-medium">Processing Live Data</div>
             </div>
          </motion.div>

          <motion.div 
            style={{ x: floatX1, y: floatY2 }}
            className="absolute -left-8 lg:-left-12 bottom-1/3 w-64 p-5 rounded-2xl bg-white/90 backdrop-blur-3xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-40 hidden xl:flex items-center gap-4 hover:scale-105 transition-transform cursor-default"
          >
             <div className="w-14 h-14 rounded-full bg-gradient-to-br from-vision-purple to-pink-500 flex items-center justify-center shadow-inner">
               <Shield className="w-6 h-6 text-white" />
             </div>
             <div>
               <div className="text-slate-900 font-bold text-lg">Secure Cloud</div>
               <div className="text-emerald-600 text-sm font-bold flex items-center gap-1.5">
                 <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                 Zero-trust Active
               </div>
             </div>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
};
