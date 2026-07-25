import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Zap, Activity, Users, CreditCard, BookOpen, BrainCircuit, Play } from 'lucide-react';

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
  };

  const titleWords1 = "The future of".split(" ");
  
  return (
    <section ref={containerRef} className="relative w-full min-h-[100vh] flex items-center justify-center pt-24 md:pt-32 pb-20 overflow-hidden perspective-[2000px]">
      
      {/* Dynamic Background Glows (Optimized) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-vision-purple/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-vision-cyan/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-vision-blueGlow/20 rounded-full blur-[80px] pointer-events-none" />

      <motion.div 
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center"
      >
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-slate-200/50 backdrop-blur-xl mb-8 group overflow-hidden relative cursor-pointer shadow-sm hover:scale-105 transition-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-vision-cyan/10 to-vision-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Sparkles className="w-4 h-4 text-vision-blueGlow relative z-10 animate-pulse" />
          <span className="text-sm font-semibold text-slate-700 relative z-10 tracking-wide">Introducing SchoolOS Intelligence</span>
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1 
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="font-display text-5xl sm:text-[5rem] lg:text-[7rem] font-bold leading-[1.05] tracking-tight text-slate-900 mb-8 max-w-6xl mx-auto flex flex-wrap justify-center gap-x-4 sm:gap-x-6 items-center"
        >
          {titleWords1.map((word, i) => (
            <motion.span key={i} variants={wordAnimation} className="inline-block">
              {word}
            </motion.span>
          ))}
          
          {/* Force Line Break */}
          <div className="w-full h-0" />
          
          <motion.div variants={wordAnimation} className="relative inline-flex flex-col items-center justify-center mx-2 sm:mx-4 group">
             
             {/* Beautiful Gradient Text (Normal Size) */}
             <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
               learning
             </span>

             {/* Creative Animated Hand-drawn Swoosh Underline */}
             <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-4 sm:h-6 overflow-visible pointer-events-none">
               <svg className="w-full h-full overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                 <motion.path 
                   d="M-5 15 Q 30 25, 60 10 T 105 10" 
                   fill="none" 
                   stroke="url(#swooshGradient1)" 
                   strokeWidth="3" 
                   strokeLinecap="round" 
                   initial={{ pathLength: 0, opacity: 0 }}
                   animate={{ pathLength: 1, opacity: 1 }}
                   transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                 />
                 <motion.path 
                   d="M0 20 Q 25 30, 50 15 T 100 20" 
                   fill="none" 
                   stroke="url(#swooshGradient2)" 
                   strokeWidth="2" 
                   strokeLinecap="round" 
                   initial={{ pathLength: 0, opacity: 0 }}
                   animate={{ pathLength: 1, opacity: 0.6 }}
                   transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
                 />
                 <defs>
                   <linearGradient id="swooshGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#3B82F6" />
                     <stop offset="100%" stopColor="#06B6D4" />
                   </linearGradient>
                   <linearGradient id="swooshGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#8B5CF6" />
                     <stop offset="100%" stopColor="#3B82F6" />
                   </linearGradient>
                 </defs>
               </svg>
             </div>

             {/* Small elegant accent sparkle */}
             <motion.div 
                animate={{ rotate: 180, scale: [1, 1.2, 1] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                className="absolute -top-1 -right-6 sm:-top-2 sm:-right-8 z-20 pointer-events-none"
             >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-vision-cyan drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
             </motion.div>
          </motion.div>

          <motion.span variants={wordAnimation} className="inline-block">is</motion.span>
          <motion.span variants={wordAnimation} className="inline-block">here.</motion.span>
        </motion.h1>

        {/* Subheadline with Slogan */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto mb-12 text-center flex flex-col gap-3"
        >
          <h2 className="text-2xl sm:text-3xl text-slate-800 font-semibold tracking-tight">
            Everything Your School Needs. One Powerful Platform.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
            An immersive, AI-powered ecosystem designed for modern educational institutions. Manage everything from admissions to exams in one beautiful workspace.
          </p>
        </motion.div>

        {/* Magnetic CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delayed w-full max-w-md mx-auto sm:max-w-none relative z-20"
        >
          <a
            href="https://app.schoolos.in/register"
            className="group relative w-full sm:w-auto px-8 py-4 bg-slate-900 rounded-full font-bold text-white overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.2)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-vision-blueGlow via-vision-cyan to-vision-purpleGlow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Start for Free</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://app.schoolos.in/login"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-slate-700 bg-white/60 border border-slate-200/50 backdrop-blur-xl hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:scale-105 active:scale-95"
          >
            <Play className="w-5 h-5" />
            <span>Login to Portal</span>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 150, rotateX: 30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.5, delay: 1, type: "spring", bounce: 0.2 }}
          style={{ rotateX, rotateY }}
          className="relative w-full max-w-6xl mx-auto h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center transform-style-3d mt-10 perspective-[2000px] will-change-transform"
        >
          
          {/* Main Desktop Dashboard Mockup */}
          <div className="absolute left-0 w-full md:w-[85%] h-full rounded-[2.5rem] border border-white/80 bg-white/40 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden group">
            {/* Inner Interface Mockup */}
            <div className="absolute inset-2 rounded-[2rem] border border-white/60 bg-gradient-to-b from-white/80 to-white/30 overflow-hidden flex shadow-inner">
              
              {/* Sidebar */}
              <div className="w-64 h-full border-r border-slate-200/50 p-6 hidden lg:flex flex-col gap-4 bg-white/30 backdrop-blur-md">
                <div className="w-full h-10 mb-6 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-vision-blueGlow flex items-center justify-center shadow-lg shadow-vision-blueGlow/30">
                     <BrainCircuit className="w-5 h-5 text-white" />
                   </div>
                   <span className="font-bold text-slate-800 text-lg">SchoolOS</span>
                </div>
                
                <div className="w-full h-10 rounded-xl bg-vision-blueGlow/10 flex items-center px-4 gap-3 cursor-pointer border border-vision-blueGlow/20">
                   <Activity className="w-4 h-4 text-vision-blueGlow" />
                   <span className="font-semibold text-vision-blueGlow text-sm">Dashboard</span>
                </div>
                {[
                  { icon: Users, label: 'Students' },
                  { icon: BookOpen, label: 'Academics' },
                  { icon: CreditCard, label: 'Finance' },
                  { icon: Shield, label: 'Security' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="w-full h-10 rounded-xl bg-transparent hover:bg-white/50 transition-colors flex items-center px-4 gap-3 cursor-pointer group">
                       <Icon className="w-4 h-4 text-slate-400 group-hover:text-vision-purple transition-colors" />
                       <span className="font-medium text-slate-500 group-hover:text-slate-700 text-sm">{item.label}</span>
                    </div>
                  )
                })}
              </div>
              
              {/* Main Area */}
              <div className="flex-1 p-6 sm:p-8 relative bg-white/20">
                 {/* Animated Inner Background Glow (Optimized) */}
                 <motion.div 
                   style={{ x: floatX1, y: floatY1 }}
                   className="absolute top-0 right-0 w-[400px] h-[400px] bg-vision-purple/20 blur-[80px] rounded-full pointer-events-none opacity-50 will-change-transform" 
                 />
                 <motion.div 
                   style={{ x: floatX2, y: floatY2 }}
                   className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-vision-cyan/20 blur-[80px] rounded-full pointer-events-none opacity-40 will-change-transform" 
                 />
                 
                 <div className="w-1/2 sm:w-1/3 h-10 mb-8 relative z-10 flex items-center gap-2">
                    <span className="text-xl font-bold text-slate-800">Overview</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-600 rounded-md text-[10px] font-bold uppercase tracking-wide">Live</span>
                 </div>
                 
                 {/* 3 Top Stat Cards */}
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
                    {[
                      { title: 'Total Students', value: '2,450', trend: '+12%', color: 'text-vision-blueGlow', bg: 'bg-vision-blueGlow/10' },
                      { title: 'Attendance Rate', value: '98.5%', trend: '+2.1%', color: 'text-vision-cyan', bg: 'bg-vision-cyan/10' },
                      { title: 'Active AI Nodes', value: '34', trend: 'Optimal', color: 'text-vision-purple', bg: 'bg-vision-purple/10' }
                    ].map((stat, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ y: -5 }}
                        className={`h-32 sm:h-40 rounded-2xl bg-white/70 border border-white backdrop-blur-xl shadow-sm p-4 sm:p-5 flex flex-col justify-between ${i === 2 ? 'hidden md:flex' : ''} group overflow-hidden relative`}
                      >
                        <div className="flex items-center justify-between relative z-10">
                           <div className={`w-8 h-8 rounded-full ${stat.bg} flex items-center justify-center`}>
                             <Activity className={`w-4 h-4 ${stat.color}`} />
                           </div>
                           <span className={`text-xs font-bold ${stat.color}`}>{stat.trend}</span>
                        </div>
                        <div className="space-y-1 relative z-10">
                          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-800">{stat.value}</h3>
                          <p className="text-xs sm:text-sm font-medium text-slate-500">{stat.title}</p>
                        </div>
                        {/* Sparkline Background */}
                        <div className="absolute bottom-0 left-0 w-full h-16 opacity-20 pointer-events-none">
                          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                             <motion.path 
                               d={i === 0 ? "M0,100 L20,80 L40,90 L60,40 L80,50 L100,20 L100,100 Z" : i === 1 ? "M0,100 L20,50 L40,60 L60,30 L80,20 L100,10 L100,100 Z" : "M0,100 L20,40 L40,80 L60,50 L80,30 L100,40 L100,100 Z"} 
                               fill="currentColor" 
                               className={stat.color}
                             />
                          </svg>
                        </div>
                      </motion.div>
                    ))}
                 </div>
                 
                 {/* Abstract Animated AI Scanner Area */}
                 <div className="w-full h-48 sm:h-64 mt-6 rounded-2xl bg-slate-900 border border-slate-800 relative z-10 p-6 shadow-2xl flex items-center justify-center overflow-hidden group/scanner">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
                    
                    {/* Glowing Scan Line */}
                    <motion.div 
                      animate={{ y: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-vision-cyan/20 to-vision-cyan/50 blur-md pointer-events-none z-20"
                    />
                    
                    {/* AI Matrix Scanner */}
                    <div className="relative w-32 h-32 sm:w-48 sm:h-48 border border-vision-cyan/30 rounded-xl flex items-center justify-center bg-vision-blueGlow/10 backdrop-blur-sm overflow-hidden">
                       
                       {/* Face Recognition Points */}
                       <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-[40%] left-[35%] w-2 h-2 rounded-full bg-vision-cyan shadow-[0_0_10px_#06B6D4]" />
                       <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute top-[40%] right-[35%] w-2 h-2 rounded-full bg-vision-cyan shadow-[0_0_10px_#06B6D4]" />
                       <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute bottom-[35%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-vision-purple shadow-[0_0_15px_#8B5CF6]" />
                       
                       {/* Overlay scan box */}
                       <div className="absolute inset-4 border border-vision-cyan/50 rounded-lg" />
                       <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-vision-cyan" />
                       <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-vision-cyan" />
                       <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-vision-cyan" />
                       <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-vision-cyan" />
                    </div>
                    
                    {/* Side Floating Stats */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-4 z-20">
                       <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-xs font-mono text-vision-cyan flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                         <span className="w-1.5 h-1.5 rounded-full bg-vision-cyan animate-ping" /> Face Rec Online
                       </div>
                       <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-xs font-mono text-vision-purple flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                         Match: 99.8%
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Floating Mobile Mockup */}
          <motion.div 
            style={{ x: floatX2, y: floatY1 }}
            className="absolute right-0 lg:-right-8 bottom-0 lg:bottom-10 w-[260px] lg:w-[300px] h-[520px] lg:h-[600px] rounded-[3rem] border-[8px] border-white/90 bg-white/40 backdrop-blur-xl shadow-[0_40px_100px_rgba(0,0,0,0.15)] overflow-hidden z-30 hidden md:block group/mobile will-change-transform"
          >
             {/* iPhone Dynamic Island */}
             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-900 rounded-full z-20 flex items-center justify-between px-2 shadow-inner">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <div className="w-3 h-3 rounded-full bg-slate-800" />
             </div>
             
             {/* Mobile Content */}
             <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/40 p-5 pt-16 flex flex-col gap-4">
                
                 {/* Mobile Student Profile Card */}
                 <motion.div 
                   whileHover={{ scale: 1.05 }}
                   className="w-full bg-white/90 rounded-2xl border border-white shadow-lg p-4 cursor-pointer flex flex-col gap-3 relative z-10"
                 >
                   <div className="flex items-center gap-3">
                     <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-vision-cyan p-0.5 object-cover" alt="Student" />
                     <div>
                       <div className="font-bold text-slate-800 text-sm">Emma Thompson</div>
                       <div className="text-xs font-medium text-vision-purple">Grade 10-A</div>
                     </div>
                   </div>
                   <div className="w-full bg-slate-100 rounded-lg p-2 flex justify-between items-center text-xs">
                     <span className="text-slate-500 font-medium">Status</span>
                     <span className="text-emerald-600 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Present</span>
                   </div>
                 </motion.div>
                 
                 {/* Mobile Live Feed */}
                 <div className="flex-1 bg-white/60 rounded-3xl border border-white shadow-sm p-4 relative overflow-hidden flex flex-col gap-2 group-hover/mobile:bg-white/80 transition-colors z-10">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-1">Live Activity</div>
                    
                    {[
                      { icon: CreditCard, title: 'Term Fee Paid', time: '2m ago', color: 'text-vision-blueGlow', bg: 'bg-vision-blueGlow/10' },
                      { icon: BookOpen, title: 'Math Quiz Scored', time: '1h ago', color: 'text-vision-purple', bg: 'bg-vision-purple/10' },
                      { icon: Activity, title: 'Bus GPS Updated', time: '3h ago', color: 'text-vision-cyan', bg: 'bg-vision-cyan/10' },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/50 transition-colors cursor-pointer">
                           <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center shrink-0`}>
                              <Icon className={`w-4 h-4 ${item.color}`} />
                           </div>
                           <div className="flex-1 min-w-0">
                              <div className="text-xs font-semibold text-slate-800 truncate">{item.title}</div>
                              <div className="text-[9px] font-medium text-slate-500">{item.time}</div>
                           </div>
                        </div>
                      )
                    })}
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
