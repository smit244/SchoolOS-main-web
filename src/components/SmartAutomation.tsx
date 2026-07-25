import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, BrainCircuit, CheckCircle, Smartphone, Zap, Sparkles } from 'lucide-react';

export const SmartAutomation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <section ref={containerRef} className="relative w-full py-32 overflow-hidden flex flex-col items-center">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-vision-cyan/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-vision-purple/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-24 relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vision-blueGlow/10 border border-vision-blueGlow/20 mb-6"
        >
          <Zap className="w-4 h-4 text-vision-blueGlow" />
          <span className="text-sm font-bold text-vision-blueGlow uppercase tracking-wider">Smart Automation</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
        >
          Hours of work.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-purple to-vision-cyan">
            Completed in seconds.
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light"
        >
          Watch how the SchoolOS AI Engine instantly processes manual tasks, grades papers, and notifies parents autonomously.
        </motion.p>
      </div>

      {/* Flowchart Container */}
      <div className="relative w-full max-w-5xl mx-auto px-4 h-[500px] sm:h-[400px] flex flex-col sm:flex-row items-center justify-between z-10">
        
        {/* SVG Energy Beams Layer (Desktop) */}
        <div className="absolute inset-0 hidden sm:block pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
            {/* Left to Center Beam Track */}
            <path d="M 150 200 C 300 200, 350 200, 500 200" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="4" strokeDasharray="8 8" />
            {/* Left to Center Energy Pulse */}
            <motion.path 
              d="M 150 200 C 300 200, 350 200, 500 200" 
              fill="none" 
              stroke="url(#cyan-glow)" 
              strokeWidth="6" 
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { 
                pathLength: [0, 1, 1],
                pathOffset: [0, 0, 1],
                opacity: [0, 1, 0]
              } : {}}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            />

            {/* Center to Right Beam Track */}
            <path d="M 500 200 C 650 200, 700 200, 850 200" fill="none" stroke="rgba(139,92,246,0.1)" strokeWidth="4" strokeDasharray="8 8" />
            {/* Center to Right Energy Pulse */}
            <motion.path 
              d="M 500 200 C 650 200, 700 200, 850 200" 
              fill="none" 
              stroke="url(#purple-glow)" 
              strokeWidth="6" 
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { 
                pathLength: [0, 1, 1],
                pathOffset: [0, 0, 1],
                opacity: [0, 1, 0]
              } : {}}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.25 }}
              className="drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]"
            />

            <defs>
              <linearGradient id="cyan-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="purple-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#D946EF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* SVG Energy Beams Layer (Mobile) */}
        <div className="absolute inset-0 sm:hidden pointer-events-none z-0">
           <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
             {/* Top to Center */}
             <path d="M 50% 100 L 50% 250" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="4" strokeDasharray="8 8" />
             <motion.path 
               d="M 50% 100 L 50% 250" 
               fill="none" 
               stroke="url(#cyan-glow)" 
               strokeWidth="6" 
               strokeLinecap="round"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={isInView ? { pathLength: [0, 1, 1], pathOffset: [0, 0, 1], opacity: [0, 1, 0] } : {}}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             />
             {/* Center to Bottom */}
             <path d="M 50% 250 L 50% 400" fill="none" stroke="rgba(139,92,246,0.1)" strokeWidth="4" strokeDasharray="8 8" />
             <motion.path 
               d="M 50% 250 L 50% 400" 
               fill="none" 
               stroke="url(#purple-glow)" 
               strokeWidth="6" 
               strokeLinecap="round"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={isInView ? { pathLength: [0, 1, 1], pathOffset: [0, 0, 1], opacity: [0, 1, 0] } : {}}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             />
           </svg>
        </div>

        {/* Stage 1: Input (Raw Data) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 w-[240px] h-[160px] bg-white/70 backdrop-blur-xl border border-white rounded-3xl shadow-xl p-6 flex flex-col justify-center items-center group"
        >
          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-lg">1</div>
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
             <FileText className="w-8 h-8 text-slate-400" />
          </div>
          <div className="font-bold text-slate-800 text-center">Raw Exam Papers</div>
          <div className="text-xs text-slate-500 text-center">Scanned & Uploaded</div>
        </motion.div>

        {/* Stage 2: AI Core Processing */}
        <div className="relative z-10 w-[200px] h-[200px] flex items-center justify-center my-10 sm:my-0">
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-vision-cyan text-white flex items-center justify-center font-bold text-sm shadow-lg z-30">2</div>
          
          {/* Animated rings */}
          <motion.div 
            animate={isInView ? { rotate: 360 } : {}}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-vision-cyan/30"
          />
          <motion.div 
            animate={isInView ? { rotate: -360 } : {}}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-vision-purple/30"
          />
          
          {/* Pulsating Core */}
          <motion.div 
            animate={isInView ? { scale: [1, 1.1, 1], boxShadow: ["0 0 20px rgba(6,182,212,0.3)", "0 0 60px rgba(139,92,246,0.6)", "0 0 20px rgba(6,182,212,0.3)"] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-vision-cyan to-vision-purple flex items-center justify-center shadow-2xl relative z-20"
          >
             <BrainCircuit className="w-10 h-10 text-white" />
             
             {/* Sparkles on core */}
             <motion.div animate={{ rotate: 180 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                <Sparkles className="w-4 h-4 text-white absolute -top-1 -right-1" />
             </motion.div>
          </motion.div>
          
          <div className="absolute -bottom-8 w-40 text-center">
             <span className="px-3 py-1 rounded-full bg-vision-purple/10 text-vision-purple text-xs font-bold border border-vision-purple/20">
               AI Engine Processing
             </span>
          </div>
        </div>

        {/* Stage 3: Output (Instant Action) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 w-[240px] h-[160px] bg-white/70 backdrop-blur-xl border border-white rounded-3xl shadow-xl p-6 flex flex-col justify-center items-center group"
        >
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">3</div>
          
          <div className="relative w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
             <Smartphone className="w-8 h-8 text-emerald-500" />
             <motion.div 
               initial={{ scale: 0 }}
               animate={isInView ? { scale: [0, 1.2, 1] } : {}}
               transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
               className="absolute -bottom-2 -right-2 bg-white rounded-full p-0.5 shadow-md"
             >
               <CheckCircle className="w-5 h-5 text-emerald-500" />
             </motion.div>
          </div>
          
          <div className="font-bold text-slate-800 text-center">Parents Notified</div>
          <div className="text-xs text-slate-500 text-center">Grades synced & SMS sent</div>
        </motion.div>

      </div>
    </section>
  );
};
