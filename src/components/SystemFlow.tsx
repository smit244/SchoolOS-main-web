import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, MonitorPlay, CreditCard, BrainCircuit, Activity, LineChart, Sparkles } from 'lucide-react';

export const SystemFlow = () => {
  return (
    <section className="relative w-full py-32 bg-[#0a0f1c] overflow-hidden flex flex-col items-center border-y border-slate-800">
      
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10 px-4">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          How SchoolOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Flows</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
          Watch real-time data travel from everyday campus touchpoints, get instantly processed by our AI Engine, and delivered securely to your dashboard.
        </p>
      </div>

      {/* The Animated Flow System */}
      <div className="relative w-full max-w-[1200px] mx-auto h-[700px] sm:h-[600px] hidden md:block">
        
        {/* Connection Paths & Animated Data Packets (SVG Layer) */}
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
             <defs>
               <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                 <feGaussianBlur stdDeviation="4" result="blur" />
                 <feComposite in="SourceGraphic" in2="blur" operator="over" />
               </filter>
               <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
                 <feGaussianBlur stdDeviation="4" result="blur" />
                 <feComposite in="SourceGraphic" in2="blur" operator="over" />
               </filter>
             </defs>

             {/* Base Lines (Left to Center) */}
             <path id="path1" d="M 250 150 C 400 150 450 300 550 300" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="2" strokeDasharray="4 4" />
             <path id="path2" d="M 250 300 L 550 300" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="2" strokeDasharray="4 4" />
             <path id="path3" d="M 250 450 C 400 450 450 300 550 300" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="2" strokeDasharray="4 4" />

             {/* Animated Data Packets (Cyan) */}
             {[0, 1.5, 3].map((delay, i) => (
               <g key={`p1-${i}`}>
                 <circle r="4" fill="#06B6D4" filter="url(#glow-cyan)">
                   <animateMotion dur="4s" repeatCount="indefinite" begin={`${delay}s`}>
                     <mpath href="#path1" />
                   </animateMotion>
                 </circle>
               </g>
             ))}
             {[0.5, 2, 3.5].map((delay, i) => (
               <g key={`p2-${i}`}>
                 <circle r="4" fill="#06B6D4" filter="url(#glow-cyan)">
                   <animateMotion dur="4s" repeatCount="indefinite" begin={`${delay}s`}>
                     <mpath href="#path2" />
                   </animateMotion>
                 </circle>
               </g>
             ))}
             {[1, 2.5, 4].map((delay, i) => (
               <g key={`p3-${i}`}>
                 <circle r="4" fill="#06B6D4" filter="url(#glow-cyan)">
                   <animateMotion dur="4s" repeatCount="indefinite" begin={`${delay}s`}>
                     <mpath href="#path3" />
                   </animateMotion>
                 </circle>
               </g>
             ))}

             {/* Base Lines (Center to Right) */}
             <path id="pathOut1" d="M 650 300 C 750 300 800 200 950 200" fill="none" stroke="rgba(168,85,247,0.2)" strokeWidth="2" strokeDasharray="4 4" />
             <path id="pathOut2" d="M 650 300 C 750 300 800 400 950 400" fill="none" stroke="rgba(168,85,247,0.2)" strokeWidth="2" strokeDasharray="4 4" />

             {/* Animated Data Packets (Purple) */}
             {[0, 1.2, 2.4, 3.6].map((delay, i) => (
               <g key={`out1-${i}`}>
                 <circle r="5" fill="#A855F7" filter="url(#glow-purple)">
                   <animateMotion dur="3s" repeatCount="indefinite" begin={`${delay}s`}>
                     <mpath href="#pathOut1" />
                   </animateMotion>
                 </circle>
               </g>
             ))}
             {[0.6, 1.8, 3.0, 4.2].map((delay, i) => (
               <g key={`out2-${i}`}>
                 <circle r="5" fill="#A855F7" filter="url(#glow-purple)">
                   <animateMotion dur="3s" repeatCount="indefinite" begin={`${delay}s`}>
                     <mpath href="#pathOut2" />
                   </animateMotion>
                 </circle>
               </g>
             ))}
          </svg>
        </div>

        {/* INPUT STAGE: Left Nodes */}
        <div className="absolute left-10 top-0 bottom-0 flex flex-col justify-between py-16 z-10 w-[240px]">
           {/* Input 1 */}
           <motion.div 
             whileHover={{ scale: 1.05, x: 10 }}
             className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-4 rounded-2xl flex items-center gap-4 cursor-pointer shadow-lg"
           >
             <div className="w-12 h-12 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">
               <Fingerprint className="w-5 h-5 text-cyan-400" />
             </div>
             <div>
               <div className="text-white font-bold text-sm">Biometric Gates</div>
               <div className="text-slate-400 text-xs">Live Attendance Data</div>
             </div>
           </motion.div>

           {/* Input 2 */}
           <motion.div 
             whileHover={{ scale: 1.05, x: 10 }}
             className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-4 rounded-2xl flex items-center gap-4 cursor-pointer shadow-lg mt-8"
           >
             <div className="w-12 h-12 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">
               <MonitorPlay className="w-5 h-5 text-cyan-400" />
             </div>
             <div>
               <div className="text-white font-bold text-sm">Teacher App</div>
               <div className="text-slate-400 text-xs">Exam Marks & Notes</div>
             </div>
           </motion.div>

           {/* Input 3 */}
           <motion.div 
             whileHover={{ scale: 1.05, x: 10 }}
             className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-4 rounded-2xl flex items-center gap-4 cursor-pointer shadow-lg mt-8"
           >
             <div className="w-12 h-12 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">
               <CreditCard className="w-5 h-5 text-cyan-400" />
             </div>
             <div>
               <div className="text-white font-bold text-sm">Fee Gateway</div>
               <div className="text-slate-400 text-xs">Payment Transactions</div>
             </div>
           </motion.div>
        </div>

        {/* PROCESSING STAGE: Center AI Core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
           <motion.div 
             animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 40px rgba(6,182,212,0.2)", "0 0 80px rgba(168,85,247,0.4)", "0 0 40px rgba(6,182,212,0.2)"] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="w-32 h-32 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center relative overflow-hidden"
           >
              {/* Spinning background mesh */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(168,85,247,0.5)_360deg)] opacity-50" />
              
              <div className="absolute inset-1 bg-slate-900 rounded-[22px] flex flex-col items-center justify-center z-10">
                <BrainCircuit className="w-10 h-10 text-white mb-1" />
                <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wider">AI ENGINE</span>
              </div>
           </motion.div>
        </div>

        {/* OUTPUT STAGE: Right Nodes */}
        <div className="absolute right-10 top-0 bottom-0 flex flex-col justify-center py-16 z-10 w-[260px] gap-20">
           {/* Output 1 */}
           <motion.div 
             whileHover={{ scale: 1.05, x: -10 }}
             className="bg-slate-800/80 backdrop-blur-md border border-purple-500/30 p-5 rounded-2xl flex flex-col gap-3 cursor-pointer shadow-[0_0_30px_rgba(168,85,247,0.15)] relative overflow-hidden"
           >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center">
                 <Activity className="w-5 h-5 text-purple-400" />
               </div>
               <div className="text-white font-bold">Admin Dashboard</div>
             </div>
             <div className="bg-slate-900/50 rounded-lg p-2 text-xs text-slate-300 font-mono flex items-center justify-between">
               <span>Sync Status</span>
               <span className="text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live</span>
             </div>
           </motion.div>

           {/* Output 2 */}
           <motion.div 
             whileHover={{ scale: 1.05, x: -10 }}
             className="bg-slate-800/80 backdrop-blur-md border border-pink-500/30 p-5 rounded-2xl flex flex-col gap-3 cursor-pointer shadow-[0_0_30px_rgba(236,72,153,0.15)] relative overflow-hidden"
           >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-orange-500" />
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-pink-900/50 flex items-center justify-center">
                 <LineChart className="w-5 h-5 text-pink-400" />
               </div>
               <div className="text-white font-bold">Parent Mobile App</div>
             </div>
             <div className="w-full bg-slate-900/50 rounded-full h-1.5 mt-1 overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-pink-400 to-transparent" 
                />
             </div>
             <div className="text-[10px] text-slate-400 text-center">Instant push notifications sent</div>
           </motion.div>
        </div>

      </div>

      {/* Mobile fallback view */}
      <div className="md:hidden text-center px-4">
         <p className="text-slate-400 text-sm">Please view on a larger screen to see the full animated data flow pipeline.</p>
         {/* Simple vertical stack for mobile */}
         <div className="mt-8 flex flex-col items-center gap-6">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-3 w-full max-w-xs">
              <Fingerprint className="text-cyan-400" /> <span className="text-white font-bold">Input Data</span>
            </div>
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-400" />
            <div className="bg-slate-900 p-4 rounded-xl border border-purple-500 flex items-center justify-center gap-3 w-full max-w-xs shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <BrainCircuit className="text-purple-400 w-8 h-8" /> <span className="text-white font-bold text-lg">AI Engine</span>
            </div>
            <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400" />
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-3 w-full max-w-xs">
              <Activity className="text-pink-400" /> <span className="text-white font-bold">Live Output</span>
            </div>
         </div>
      </div>
    </section>
  );
};
