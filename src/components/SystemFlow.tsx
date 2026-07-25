import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, MonitorPlay, CreditCard, BrainCircuit, Activity, LineChart, Sparkles, BookOpen, MapPin, ClipboardList, ChevronRight } from 'lucide-react';

export const SystemFlow = () => {
  return (
    <section className="relative w-full py-32 bg-[#050B14] overflow-hidden flex flex-col items-center border-y border-slate-800">
      
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 shadow-sm mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">3D Data Architecture</span>
        </motion.div>
        
        <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
          The SchoolOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Mainframe</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Experience our real-time data flow in full 3D. Watch as campus events are ingested, processed by the AI core, and distributed across the globe in milliseconds.
        </p>
      </div>

      {/* 3D Isometric Viewport */}
      <div className="relative w-full max-w-[1400px] mx-auto h-[800px] hidden md:flex justify-center items-center perspective-[2000px] overflow-hidden">
        
        {/* The 3D Floor Plane */}
        <motion.div 
          initial={{ rotateX: 60, rotateZ: -30, y: 100, opacity: 0 }}
          whileInView={{ rotateX: 60, rotateZ: -45, y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-[1200px] h-[800px] transform-style-3d"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Floor Grid */}
          <div className="absolute inset-0 bg-[rgba(15,23,42,0.6)] border border-slate-700 shadow-[0_0_100px_rgba(59,130,246,0.1)] rounded-3xl overflow-hidden backdrop-blur-md">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
             {/* Center glowing spot on the floor */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/20 blur-[80px] rounded-full" />
          </div>

          {/* Connection Paths & Animated Data Packets (SVG Layer on the floor) */}
          <div className="absolute inset-0 z-0 transform-style-3d translate-z-[1px]">
            <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
               <defs>
                 <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
                   <feGaussianBlur stdDeviation="6" result="blur" />
                   <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
                 <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
                   <feGaussianBlur stdDeviation="6" result="blur" />
                   <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
               </defs>

               {/* Base Lines (Left Inputs -> Center Core) */}
               {/* Center is at (600, 400). Inputs are at x=200, y=100, 250, 400, 550, 700 */}
               <path id="path1" d="M 200 100 C 400 100 400 400 600 400" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />
               <path id="path2" d="M 200 250 C 400 250 400 400 600 400" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />
               <path id="path3" d="M 200 400 L 600 400" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />
               <path id="path4" d="M 200 550 C 400 550 400 400 600 400" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />
               <path id="path5" d="M 200 700 C 400 700 400 400 600 400" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />

               {/* Animated Data Packets (Blue) */}
               {['path1', 'path2', 'path3', 'path4', 'path5'].map((pathId, pathIndex) => (
                 [0, 1.5, 3.0].map((delay, i) => (
                   <g key={`${pathId}-${i}`}>
                     <circle r="8" fill="#3B82F6" filter="url(#glow-cyan)">
                       <animateMotion dur="4s" repeatCount="indefinite" begin={`${delay + (pathIndex * 0.4)}s`}>
                         <mpath href={`#${pathId}`} />
                       </animateMotion>
                     </circle>
                     <circle r="3" fill="#FFFFFF">
                       <animateMotion dur="4s" repeatCount="indefinite" begin={`${delay + (pathIndex * 0.4)}s`}>
                         <mpath href={`#${pathId}`} />
                       </animateMotion>
                     </circle>
                   </g>
                 ))
               ))}

               {/* Base Lines (Center Core -> Right Outputs) */}
               {/* Outputs at x=1000, y=200, 400, 600 */}
               <path id="pathOut1" d="M 600 400 C 800 400 800 200 1000 200" fill="none" stroke="rgba(168,85,247,0.2)" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />
               <path id="pathOut2" d="M 600 400 L 1000 400" fill="none" stroke="rgba(168,85,247,0.2)" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />
               <path id="pathOut3" d="M 600 400 C 800 400 800 600 1000 600" fill="none" stroke="rgba(168,85,247,0.2)" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />

               {/* Animated Data Packets (Purple/Pink) */}
               {['pathOut1', 'pathOut2', 'pathOut3'].map((pathId, pathIndex) => (
                 [0, 1.3, 2.6].map((delay, i) => (
                   <g key={`${pathId}-out-${i}`}>
                     <circle r="9" fill="#D946EF" filter="url(#glow-purple)">
                       <animateMotion dur="3s" repeatCount="indefinite" begin={`${delay + (pathIndex * 0.5)}s`}>
                         <mpath href={`#${pathId}`} />
                       </animateMotion>
                     </circle>
                     <circle r="4" fill="#FFFFFF">
                       <animateMotion dur="3s" repeatCount="indefinite" begin={`${delay + (pathIndex * 0.5)}s`}>
                         <mpath href={`#${pathId}`} />
                       </animateMotion>
                     </circle>
                   </g>
                 ))
               ))}
            </svg>
          </div>

          {/* INPUT STAGE: Floating 3D Blocks (Left) */}
          {[
            { top: 100, icon: Fingerprint, title: "Biometric Gates", color: "blue", border: "border-blue-500/50" },
            { top: 250, icon: MonitorPlay, title: "Teacher App", color: "indigo", border: "border-indigo-500/50" },
            { top: 400, icon: CreditCard, title: "Fee Gateway", color: "violet", border: "border-violet-500/50" },
            { top: 550, icon: BookOpen, title: "Library Kiosk", color: "purple", border: "border-purple-500/50" },
            { top: 700, icon: MapPin, title: "Transport GPS", color: "pink", border: "border-pink-500/50" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                animate={{ z: [30, 40, 30] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                className={`absolute left-[50px] w-[300px] h-[80px] bg-slate-900/90 backdrop-blur-xl border ${item.border} rounded-2xl p-4 flex items-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transform-style-3d`}
                style={{ top: `${item.top - 40}px`, transform: 'translateZ(30px)' }}
              >
                {/* 3D Depth Shadow underneath */}
                <div className="absolute -inset-4 bg-black/40 blur-xl -translate-z-10 rounded-3xl pointer-events-none" style={{ transform: 'translateZ(-30px)' }} />
                
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/20 flex items-center justify-center shrink-0 border border-${item.color}-400/30`}>
                  <Icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <div>
                  <div className="text-white font-bold text-[18px] tracking-tight">{item.title}</div>
                  <div className="text-slate-400 text-[12px] font-mono uppercase">Node Active</div>
                </div>
              </motion.div>
            )
          })}

          {/* PROCESSING STAGE: Center AI Core Floating Pillar */}
          <motion.div 
             animate={{ z: [60, 80, 60] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute left-[500px] top-[300px] w-[200px] h-[200px] rounded-full bg-slate-900/80 backdrop-blur-2xl border-4 border-slate-700/50 shadow-[0_30px_60px_rgba(168,85,247,0.3)] flex items-center justify-center relative transform-style-3d"
             style={{ transform: 'translateZ(60px)' }}
           >
              {/* Floor Shadow */}
              <div className="absolute -inset-10 bg-black/50 blur-2xl rounded-full pointer-events-none" style={{ transform: 'translateZ(-60px)' }} />
              
              {/* Spinning data rings around the core */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border-2 border-dashed border-blue-500/40"
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-purple-500/40"
              />

              <div className="absolute inset-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex flex-col items-center justify-center z-10 border border-slate-600 shadow-inner">
                <div className="relative flex flex-col items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], filter: ["drop-shadow(0 0 10px rgba(168,85,247,0.4))", "drop-shadow(0 0 30px rgba(168,85,247,0.8))", "drop-shadow(0 0 10px rgba(168,85,247,0.4))"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img src="/logo.png" alt="SchoolOS Logo" className="h-14 object-contain" />
                  </motion.div>
                  <span className="text-[12px] font-extrabold text-white tracking-[0.2em] uppercase">Core AI</span>
                </div>
              </div>
          </motion.div>

          {/* OUTPUT STAGE: Floating 3D Blocks (Right) */}
          {[
            { top: 200, icon: Activity, title: "Admin Dashboard", color: "purple", border: "border-purple-500/50" },
            { top: 400, icon: ClipboardList, title: "Teacher Gradebook", color: "blue", border: "border-blue-500/50" },
            { top: 600, icon: LineChart, title: "Parent Mobile App", color: "pink", border: "border-pink-500/50" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                animate={{ z: [40, 50, 40] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                className={`absolute left-[850px] w-[300px] h-[90px] bg-slate-900/90 backdrop-blur-xl border ${item.border} rounded-2xl p-5 flex flex-col justify-center shadow-[0_20px_40px_rgba(0,0,0,0.4)] transform-style-3d`}
                style={{ top: `${item.top - 45}px`, transform: 'translateZ(40px)' }}
              >
                {/* 3D Depth Shadow underneath */}
                <div className="absolute -inset-4 bg-black/40 blur-xl -translate-z-10 rounded-3xl pointer-events-none" style={{ transform: 'translateZ(-40px)' }} />
                
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/20 flex items-center justify-center shrink-0 border border-${item.color}-400/30`}>
                    <Icon className={`w-6 h-6 text-${item.color}-400`} />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white font-bold text-[18px] tracking-tight">{item.title}</div>
                    <div className="text-emerald-400 text-[11px] font-mono uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE SYNC
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Mobile fallback view (Dark Theme) */}
      <div className="md:hidden text-center px-4 w-full relative z-10">
         <p className="text-slate-400 text-sm font-medium">Please view on a larger screen to experience the 3D Mainframe.</p>
         <div className="mt-8 flex flex-col items-center gap-6">
            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 shadow-lg flex items-center gap-4 w-full max-w-xs relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600"><Fingerprint className="text-blue-400" /></div>
              <span className="text-white font-extrabold text-lg">5+ Data Inputs</span>
            </div>
            <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-500" />
            <div className="bg-slate-900 p-5 rounded-full border-2 border-slate-700 flex flex-col items-center justify-center w-28 h-28 shadow-[0_20px_40px_rgba(168,85,247,0.2)]">
              <img src="/logo.png" alt="SchoolOS Logo" className="h-8 object-contain mb-1" />
              <span className="text-[9px] text-white font-bold tracking-widest">CORE AI</span>
            </div>
            <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-pink-500" />
            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 shadow-lg flex items-center gap-4 w-full max-w-xs relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500" />
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600"><Activity className="text-pink-400" /></div>
              <span className="text-white font-extrabold text-lg">Live Outputs</span>
            </div>
         </div>
      </div>
    </section>
  );
};
