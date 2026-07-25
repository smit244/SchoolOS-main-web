import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, MonitorPlay, CreditCard, BrainCircuit, Activity, LineChart, Sparkles, BookOpen, MapPin, ClipboardList, ChevronRight } from 'lucide-react';

export const SystemFlow = () => {
  return (
    <section className="relative w-full py-32 bg-slate-50/50 overflow-hidden flex flex-col items-center border-y border-slate-200/50">
      
      {/* Dreamy Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-pink-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-60" />
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">The Central Nervous System</span>
        </motion.div>
        
        <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
          How SchoolOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Flows</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Watch real-time data travel from everyday campus touchpoints, get instantly processed by our AI Engine, and delivered securely to your dashboard.
        </p>
      </div>

      {/* The Animated Flow System */}
      <div className="relative w-full max-w-[1300px] mx-auto h-[900px] hidden md:block">
        
        {/* Connection Paths & Animated Data Packets (SVG Layer) */}
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 1300 900" preserveAspectRatio="xMidYMid meet">
             <defs>
               <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
                 <feGaussianBlur stdDeviation="6" result="blur" />
                 <feComposite in="SourceGraphic" in2="blur" operator="over" />
               </filter>
               <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
                 <feGaussianBlur stdDeviation="6" result="blur" />
                 <feComposite in="SourceGraphic" in2="blur" operator="over" />
               </filter>
               {/* Gradients for paths */}
               <linearGradient id="pathGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.1" />
                 <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
               </linearGradient>
               <linearGradient id="pathGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
                 <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.1" />
               </linearGradient>
             </defs>

             {/* Base Lines (Left to Center) - 5 Inputs (x=280) -> Center (550, 450) */}
             <path id="path1" d="M 280 150 C 420 150 480 450 550 450" fill="none" stroke="url(#pathGradLeft)" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
             <path id="path2" d="M 280 300 C 420 300 480 450 550 450" fill="none" stroke="url(#pathGradLeft)" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
             <path id="path3" d="M 280 450 L 550 450" fill="none" stroke="url(#pathGradLeft)" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
             <path id="path4" d="M 280 600 C 420 600 480 450 550 450" fill="none" stroke="url(#pathGradLeft)" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
             <path id="path5" d="M 280 750 C 420 750 480 450 550 450" fill="none" stroke="url(#pathGradLeft)" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />

             {/* Animated Data Packets (Blue) - Large and Glowing */}
             {['path1', 'path2', 'path3', 'path4', 'path5'].map((pathId, pathIndex) => (
               [0, 1.5, 3.0].map((delay, i) => (
                 <g key={`${pathId}-${i}`}>
                   <circle r="7" fill="#3B82F6" filter="url(#glow-blue)">
                     <animateMotion dur="4s" repeatCount="indefinite" begin={`${delay + (pathIndex * 0.4)}s`}>
                       <mpath href={`#${pathId}`} />
                     </animateMotion>
                   </circle>
                   {/* Inner bright core */}
                   <circle r="3" fill="#FFFFFF">
                     <animateMotion dur="4s" repeatCount="indefinite" begin={`${delay + (pathIndex * 0.4)}s`}>
                       <mpath href={`#${pathId}`} />
                     </animateMotion>
                   </circle>
                 </g>
               ))
             ))}

             {/* Base Lines (Center to Right) - Center (750, 450) -> 3 Outputs (x=1020) */}
             <path id="pathOut1" d="M 750 450 C 850 450 900 250 1020 250" fill="none" stroke="url(#pathGradRight)" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
             <path id="pathOut2" d="M 750 450 L 1020 450" fill="none" stroke="url(#pathGradRight)" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
             <path id="pathOut3" d="M 750 450 C 850 450 900 650 1020 650" fill="none" stroke="url(#pathGradRight)" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />

             {/* Animated Data Packets (Purple/Pink) */}
             {['pathOut1', 'pathOut2', 'pathOut3'].map((pathId, pathIndex) => (
               [0, 1.3, 2.6].map((delay, i) => (
                 <g key={`${pathId}-out-${i}`}>
                   <circle r="8" fill="#D946EF" filter="url(#glow-purple)">
                     <animateMotion dur="3s" repeatCount="indefinite" begin={`${delay + (pathIndex * 0.5)}s`}>
                       <mpath href={`#${pathId}`} />
                     </animateMotion>
                   </circle>
                   {/* Inner bright core */}
                   <circle r="3" fill="#FFFFFF">
                     <animateMotion dur="3s" repeatCount="indefinite" begin={`${delay + (pathIndex * 0.5)}s`}>
                       <mpath href={`#${pathId}`} />
                     </animateMotion>
                   </circle>
                 </g>
               ))
             ))}
          </svg>
        </div>

        {/* INPUT STAGE: 5 Left Nodes */}
        <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-around py-8 z-10 w-[260px]">
           {[
             { icon: Fingerprint, title: "Biometric Gates", subtitle: "Live Attendance", color: "blue" },
             { icon: MonitorPlay, title: "Teacher App", subtitle: "Exam Marks & Notes", color: "indigo" },
             { icon: CreditCard, title: "Fee Gateway", subtitle: "Payment Transactions", color: "violet" },
             { icon: BookOpen, title: "Library Kiosk", subtitle: "Book Checkouts", color: "purple" },
             { icon: MapPin, title: "Transport GPS", subtitle: "Bus Location Sync", color: "pink" }
           ].map((item, index) => {
             const Icon = item.icon;
             return (
               <motion.div 
                 key={index}
                 whileHover={{ scale: 1.05, x: 10 }}
                 className="group relative bg-white/70 backdrop-blur-2xl border border-white/60 p-4 rounded-3xl flex items-center gap-4 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all overflow-hidden"
               >
                 {/* Color accent line */}
                 <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                 
                 <div className={`w-12 h-12 rounded-2xl bg-${item.color}-50 flex items-center justify-center shrink-0 shadow-inner border border-${item.color}-100 group-hover:bg-${item.color}-100 transition-colors`}>
                   <Icon className={`w-5 h-5 text-${item.color}-600`} />
                 </div>
                 <div className="min-w-0">
                   <div className="text-slate-900 font-bold text-[15px] truncate tracking-tight">{item.title}</div>
                   <div className="text-slate-500 text-[11px] font-semibold uppercase tracking-wider truncate mt-0.5">{item.subtitle}</div>
                 </div>
               </motion.div>
             )
           })}
        </div>

        {/* PROCESSING STAGE: Center AI Core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
           {/* Outer rotating halo */}
           <motion.div 
             animate={{ rotate: 360 }} 
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="absolute -inset-10 rounded-full border border-dashed border-slate-300 opacity-50"
           />
           <motion.div 
             animate={{ rotate: -360 }} 
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute -inset-16 rounded-full border border-slate-200 opacity-50"
           />

           <motion.div 
             animate={{ scale: [1, 1.05, 1], boxShadow: ["0 20px 50px rgba(59,130,246,0.15)", "0 20px 80px rgba(168,85,247,0.3)", "0 20px 50px rgba(59,130,246,0.15)"] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="w-48 h-48 rounded-full bg-white/90 backdrop-blur-3xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center relative overflow-hidden"
           >
              {/* Vibrant spinning background mesh inside the core */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }} 
                className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(168,85,247,0.4)_360deg)] mix-blend-multiply" 
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }} 
                className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(59,130,246,0.4)_360deg)] mix-blend-multiply" 
              />
              
              <div className="absolute inset-3 bg-white rounded-full flex flex-col items-center justify-center z-10 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.05)] border border-slate-100">
                <div className="relative">
                  <BrainCircuit className="w-14 h-14 text-slate-800 mb-2" />
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0">
                     <BrainCircuit className="w-14 h-14 text-purple-600" />
                  </motion.div>
                </div>
                <span className="text-[11px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-[0.2em]">CORE AI</span>
              </div>
           </motion.div>
        </div>

        {/* OUTPUT STAGE: 3 Right Nodes */}
        <div className="absolute right-6 top-0 bottom-0 flex flex-col justify-around py-32 z-10 w-[280px]">
           {/* Output 1 */}
           <motion.div 
             whileHover={{ scale: 1.05, x: -10 }}
             className="group bg-white/80 backdrop-blur-2xl border border-white/60 p-6 rounded-3xl flex flex-col gap-4 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all overflow-hidden"
           >
             <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-pink-500" />
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0 shadow-inner">
                 <Activity className="w-6 h-6 text-purple-600" />
               </div>
               <div className="text-slate-900 font-extrabold text-[16px] tracking-tight">Admin Dashboard</div>
             </div>
             <div className="bg-slate-50/80 rounded-xl p-2.5 text-xs text-slate-600 font-medium flex items-center justify-between border border-slate-200/50">
               <span className="text-slate-500">Global Sync</span>
               <span className="text-emerald-600 font-bold flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981]" /> LIVE
               </span>
             </div>
           </motion.div>

           {/* Output 2 */}
           <motion.div 
             whileHover={{ scale: 1.05, x: -10 }}
             className="group bg-white/80 backdrop-blur-2xl border border-white/60 p-6 rounded-3xl flex flex-col gap-4 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all overflow-hidden"
           >
             <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 shadow-inner">
                 <ClipboardList className="w-6 h-6 text-blue-600" />
               </div>
               <div className="text-slate-900 font-extrabold text-[16px] tracking-tight">Teacher Gradebook</div>
             </div>
             <div className="bg-slate-50/80 rounded-xl p-3 text-[11px] text-slate-500 flex flex-col gap-2 border border-slate-200/50">
               <div className="flex justify-between w-full font-medium"><span>Marks Auto-Synced</span> <span className="font-bold text-blue-600">100%</span></div>
               <div className="w-full bg-slate-200/80 rounded-full h-1.5 overflow-hidden"><div className="w-full bg-blue-500 h-full rounded-full shadow-[0_0_10px_#3B82F6]" /></div>
             </div>
           </motion.div>

           {/* Output 3 */}
           <motion.div 
             whileHover={{ scale: 1.05, x: -10 }}
             className="group bg-white/80 backdrop-blur-2xl border border-white/60 p-6 rounded-3xl flex flex-col gap-4 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all overflow-hidden"
           >
             <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 to-orange-500" />
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center shrink-0 shadow-inner">
                 <LineChart className="w-6 h-6 text-pink-600" />
               </div>
               <div className="text-slate-900 font-extrabold text-[16px] tracking-tight">Parent Mobile App</div>
             </div>
             <div className="w-full bg-slate-100 rounded-full h-2 mt-1 overflow-hidden shadow-inner">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-pink-500 to-transparent" 
                />
             </div>
             <div className="text-[11px] text-slate-500 text-center font-bold uppercase tracking-wider flex items-center justify-center gap-1">
               Push Notified <ChevronRight className="w-3 h-3 text-pink-500" />
             </div>
           </motion.div>
        </div>

      </div>

      {/* Mobile fallback view (Attractive White Theme) */}
      <div className="md:hidden text-center px-4 w-full relative z-10">
         <p className="text-slate-500 text-sm font-medium">Please view on a larger screen to see the full animated data flow pipeline.</p>
         <div className="mt-8 flex flex-col items-center gap-6">
            <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-white shadow-lg flex items-center gap-4 w-full max-w-xs relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center"><Fingerprint className="text-blue-600" /></div>
              <span className="text-slate-900 font-extrabold text-lg">5+ Data Inputs</span>
            </div>
            <div className="w-1 h-10 bg-gradient-to-b from-blue-400 to-purple-500" />
            <div className="bg-white/90 backdrop-blur-xl p-5 rounded-full border-4 border-slate-50 flex items-center justify-center w-24 h-24 shadow-[0_20px_40px_rgba(168,85,247,0.2)]">
              <BrainCircuit className="text-purple-600 w-10 h-10" />
            </div>
            <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-pink-500" />
            <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-white shadow-lg flex items-center gap-4 w-full max-w-xs relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500" />
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center"><Activity className="text-pink-600" /></div>
              <span className="text-slate-900 font-extrabold text-lg">Live Outputs</span>
            </div>
         </div>
      </div>
    </section>
  );
};
