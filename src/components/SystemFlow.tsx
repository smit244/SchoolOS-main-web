import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, MonitorPlay, CreditCard, BrainCircuit, Activity, LineChart, Sparkles, BookOpen, MapPin, ClipboardList } from 'lucide-react';

export const SystemFlow = () => {
  return (
    <section className="relative w-full py-32 bg-slate-50 overflow-hidden flex flex-col items-center border-y border-slate-200">
      
      {/* Background ambient glows (Light mode) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10 px-4">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          How SchoolOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">Flows</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
          Watch real-time data travel from everyday campus touchpoints, get instantly processed by our AI Engine, and delivered securely to your dashboard.
        </p>
      </div>

      {/* The Animated Flow System */}
      <div className="relative w-full max-w-[1200px] mx-auto h-[900px] hidden md:block">
        
        {/* Connection Paths & Animated Data Packets (SVG Layer) */}
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid meet">
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

             {/* Base Lines (Left to Center) - 5 Inputs -> Center (450) */}
             <path id="path1" d="M 250 150 C 400 150 450 450 550 450" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="2" strokeDasharray="4 4" />
             <path id="path2" d="M 250 300 C 400 300 450 450 550 450" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="2" strokeDasharray="4 4" />
             <path id="path3" d="M 250 450 L 550 450" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="2" strokeDasharray="4 4" />
             <path id="path4" d="M 250 600 C 400 600 450 450 550 450" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="2" strokeDasharray="4 4" />
             <path id="path5" d="M 250 750 C 400 750 450 450 550 450" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="2" strokeDasharray="4 4" />

             {/* Animated Data Packets (Cyan) - Sped up and offset randomly */}
             {['path1', 'path2', 'path3', 'path4', 'path5'].map((pathId, pathIndex) => (
               [0, 1.2, 2.4, 3.6].map((delay, i) => (
                 <g key={`${pathId}-${i}`}>
                   <circle r="5" fill="#06B6D4" filter="url(#glow-cyan)">
                     <animateMotion dur="3.5s" repeatCount="indefinite" begin={`${delay + (pathIndex * 0.3)}s`}>
                       <mpath href={`#${pathId}`} />
                     </animateMotion>
                   </circle>
                 </g>
               ))
             ))}

             {/* Base Lines (Center to Right) - Center (450) -> 3 Outputs */}
             <path id="pathOut1" d="M 650 450 C 750 450 800 250 950 250" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="2" strokeDasharray="4 4" />
             <path id="pathOut2" d="M 650 450 L 950 450" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="2" strokeDasharray="4 4" />
             <path id="pathOut3" d="M 650 450 C 750 450 800 650 950 650" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="2" strokeDasharray="4 4" />

             {/* Animated Data Packets (Purple) */}
             {['pathOut1', 'pathOut2', 'pathOut3'].map((pathId, pathIndex) => (
               [0, 1, 2, 3].map((delay, i) => (
                 <g key={`${pathId}-out-${i}`}>
                   <circle r="6" fill="#A855F7" filter="url(#glow-purple)">
                     <animateMotion dur="2.5s" repeatCount="indefinite" begin={`${delay + (pathIndex * 0.4)}s`}>
                       <mpath href={`#${pathId}`} />
                     </animateMotion>
                   </circle>
                 </g>
               ))
             ))}
          </svg>
        </div>

        {/* INPUT STAGE: 5 Left Nodes */}
        <div className="absolute left-10 top-0 bottom-0 flex flex-col justify-around py-8 z-10 w-[240px]">
           {[
             { icon: Fingerprint, title: "Biometric Gates", subtitle: "Live Attendance Data" },
             { icon: MonitorPlay, title: "Teacher App", subtitle: "Exam Marks & Notes" },
             { icon: CreditCard, title: "Fee Gateway", subtitle: "Payment Transactions" },
             { icon: BookOpen, title: "Library Kiosk", subtitle: "Book Checkouts" },
             { icon: MapPin, title: "Transport GPS", subtitle: "Bus Location Sync" }
           ].map((item, index) => {
             const Icon = item.icon;
             return (
               <motion.div 
                 key={index}
                 whileHover={{ scale: 1.05, x: 10 }}
                 className="bg-white/80 backdrop-blur-md border border-slate-200 p-4 rounded-2xl flex items-center gap-4 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
               >
                 <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center border border-cyan-100 shrink-0">
                   <Icon className="w-5 h-5 text-cyan-600" />
                 </div>
                 <div className="min-w-0">
                   <div className="text-slate-800 font-bold text-sm truncate">{item.title}</div>
                   <div className="text-slate-500 text-xs truncate">{item.subtitle}</div>
                 </div>
               </motion.div>
             )
           })}
        </div>

        {/* PROCESSING STAGE: Center AI Core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
           <motion.div 
             animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 40px rgba(6,182,212,0.3)", "0 0 80px rgba(168,85,247,0.5)", "0 0 40px rgba(6,182,212,0.3)"] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="w-36 h-36 rounded-full bg-white border-2 border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center relative overflow-hidden"
           >
              {/* Spinning background mesh (Light mode) */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(168,85,247,0.2)_360deg)] opacity-80" />
              
              <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center z-10 shadow-inner">
                <BrainCircuit className="w-10 h-10 text-slate-800 mb-1" />
                <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 tracking-wider">AI ENGINE</span>
              </div>
           </motion.div>
        </div>

        {/* OUTPUT STAGE: 3 Right Nodes */}
        <div className="absolute right-10 top-0 bottom-0 flex flex-col justify-around py-32 z-10 w-[260px]">
           {/* Output 1 */}
           <motion.div 
             whileHover={{ scale: 1.05, x: -10 }}
             className="bg-white/90 backdrop-blur-md border border-slate-200 p-5 rounded-2xl flex flex-col gap-3 cursor-pointer shadow-xl relative overflow-hidden"
           >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                 <Activity className="w-5 h-5 text-purple-600" />
               </div>
               <div className="text-slate-800 font-bold text-sm">Admin Dashboard</div>
             </div>
             <div className="bg-slate-50 rounded-lg p-2 text-xs text-slate-600 font-mono flex items-center justify-between border border-slate-100">
               <span>Sync Status</span>
               <span className="text-emerald-600 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live</span>
             </div>
           </motion.div>

           {/* Output 2 */}
           <motion.div 
             whileHover={{ scale: 1.05, x: -10 }}
             className="bg-white/90 backdrop-blur-md border border-slate-200 p-5 rounded-2xl flex flex-col gap-3 cursor-pointer shadow-xl relative overflow-hidden"
           >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                 <ClipboardList className="w-5 h-5 text-blue-600" />
               </div>
               <div className="text-slate-800 font-bold text-sm">Teacher Gradebook</div>
             </div>
             <div className="bg-slate-50 rounded-lg p-2 text-[10px] text-slate-500 flex flex-col gap-1 border border-slate-100">
               <div className="flex justify-between w-full"><span>Marks Synced</span> <span className="font-bold text-slate-700">100%</span></div>
               <div className="w-full bg-slate-200 rounded-full h-1"><div className="w-full bg-blue-500 h-full rounded-full" /></div>
             </div>
           </motion.div>

           {/* Output 3 */}
           <motion.div 
             whileHover={{ scale: 1.05, x: -10 }}
             className="bg-white/90 backdrop-blur-md border border-slate-200 p-5 rounded-2xl flex flex-col gap-3 cursor-pointer shadow-xl relative overflow-hidden"
           >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-orange-500" />
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                 <LineChart className="w-5 h-5 text-pink-600" />
               </div>
               <div className="text-slate-800 font-bold text-sm">Parent Mobile App</div>
             </div>
             <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1 overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-pink-500 to-transparent" 
                />
             </div>
             <div className="text-[10px] text-slate-500 text-center font-medium">Instant push notifications sent</div>
           </motion.div>
        </div>

      </div>

      {/* Mobile fallback view (White Theme) */}
      <div className="md:hidden text-center px-4 w-full">
         <p className="text-slate-500 text-sm">Please view on a larger screen to see the full animated data flow pipeline.</p>
         {/* Simple vertical stack for mobile */}
         <div className="mt-8 flex flex-col items-center gap-6">
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3 w-full max-w-xs shadow-sm">
              <Fingerprint className="text-cyan-600" /> <span className="text-slate-800 font-bold">5+ Data Inputs</span>
            </div>
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-400" />
            <div className="bg-white p-4 rounded-full border-2 border-slate-100 flex items-center justify-center gap-3 w-20 h-20 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <BrainCircuit className="text-purple-600 w-8 h-8" />
            </div>
            <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400" />
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3 w-full max-w-xs shadow-sm">
              <Activity className="text-pink-600" /> <span className="text-slate-800 font-bold">Real-time Outputs</span>
            </div>
         </div>
      </div>
    </section>
  );
};
