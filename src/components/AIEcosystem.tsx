import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Users, CheckSquare, ScanFace, Database, Sparkles, FileText, 
  CreditCard, BookOpen, Library, Bus, Smartphone, Presentation, 
  GraduationCap, FileBarChart, PieChart, Award, X, Activity 
} from 'lucide-react';

const ECOSYSTEM_MODULES = [
  // --- INNER RING (6 items, evenly spaced by 60 degrees) ---
  { id: 1, title: 'Student Management', icon: Users, angle: 30, rx: 320, ry: 220, color: '#3b82f6' },
  { id: 3, title: 'AI Face Recognition', icon: ScanFace, angle: 90, rx: 320, ry: 220, color: '#8b5cf6' },
  { id: 5, title: 'AI Question Gen', icon: Sparkles, angle: 150, rx: 320, ry: 220, color: '#06b6d4' },
  { id: 7, title: 'Fee Management', icon: CreditCard, angle: 210, rx: 320, ry: 220, color: '#10b981' },
  { id: 13, title: 'Student Portal', icon: GraduationCap, angle: 270, rx: 320, ry: 220, color: '#3b82f6' },
  { id: 15, title: 'Analytics', icon: PieChart, angle: 330, rx: 320, ry: 220, color: '#eab308' },

  // --- OUTER RING (10 items, evenly spaced by 36 degrees) ---
  { id: 9, title: 'Library', icon: Library, angle: 0, rx: 520, ry: 360, color: '#8b5cf6' },
  { id: 2, title: 'Attendance', icon: CheckSquare, angle: 36, rx: 520, ry: 360, color: '#10b981' },
  { id: 10, title: 'Transport', icon: Bus, angle: 72, rx: 520, ry: 360, color: '#f59e0b' },
  { id: 4, title: 'Question Bank', icon: Database, angle: 108, rx: 520, ry: 360, color: '#f59e0b' },
  { id: 11, title: 'Parent App', icon: Smartphone, angle: 144, rx: 520, ry: 360, color: '#ec4899' },
  { id: 12, title: 'Teacher Portal', icon: Presentation, angle: 180, rx: 520, ry: 360, color: '#06b6d4' },
  { id: 6, title: 'Examination', icon: FileText, angle: 216, rx: 520, ry: 360, color: '#f43f5e' },
  { id: 8, title: 'Homework', icon: BookOpen, angle: 252, rx: 520, ry: 360, color: '#3b82f6' },
  { id: 14, title: 'Reports', icon: FileBarChart, angle: 288, rx: 520, ry: 360, color: '#d946ef' },
  { id: 16, title: 'Certificates', icon: Award, angle: 324, rx: 520, ry: 360, color: '#10b981' },
];

export const AIEcosystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const coreOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const coreScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const getPosition = (angle: number, rx: number, ry: number) => {
    const rad = (angle * Math.PI) / 180;
    return { x: Math.cos(rad) * rx, y: Math.sin(rad) * ry };
  };

  const getBezierPath = (x: number, y: number, angle: number) => {
    const rad = (angle * Math.PI) / 180;
    const cpDist = Math.sqrt(x*x + y*y) * 0.5; 
    const cpx = Math.cos(rad + Math.PI/4) * cpDist;
    const cpy = Math.sin(rad + Math.PI/4) * cpDist;
    return `M 0 0 Q ${cpx} ${cpy} ${x} ${y}`;
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-[120vh] py-32 overflow-hidden bg-[#f4f7fc] perspective-[2000px]">
      
      {/* Light Theme Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_60%)] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_60%)] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 backdrop-blur-xl mb-6 shadow-sm"
        >
          <Activity className="w-4 h-4 text-vision-blueGlow" />
          <span className="text-sm font-bold text-slate-700 tracking-wide">Dynamic Orbital Layout</span>
        </motion.div>
        
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6 leading-[1.05]">
          A deeply connected <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-blueGlow via-vision-purple to-vision-cyan">AI Ecosystem.</span>
        </h2>
        <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
          Hover over any floating node to trace its data path directly to the SchoolOS core in real-time.
        </p>
      </div>

      {/* Floating Orbital Area */}
      <div className="relative w-full h-[900px] flex items-center justify-center mt-32">
        
        {/* Connection Beams SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0.05)" />
            </linearGradient>
            <filter id="intenseGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          <g transform="translate(50%, 50%)" className="hidden lg:block">
            {/* Concentric subtle rings */}
            <motion.circle cx="0" cy="0" r="300" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="4 8" animate={{ rotate: 360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }} />
            <motion.circle cx="0" cy="0" r="450" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1" strokeDasharray="2 10" animate={{ rotate: -360 }} transition={{ duration: 200, repeat: Infinity, ease: "linear" }} />

            {/* Beams */}
            {ECOSYSTEM_MODULES.map((mod, i) => {
              const pos = getPosition(mod.angle, mod.rx, mod.ry);
              const path = getBezierPath(pos.x, pos.y, mod.angle);
              const isHovered = hoveredNode === mod.id;
              
              return (
                <g key={`synapse-${i}`}>
                  <motion.path 
                    d={path}
                    fill="none"
                    stroke={isHovered ? mod.color : "url(#neuralGrad)"} 
                    strokeWidth={isHovered ? "3" : "1.5"}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: isHovered ? 0.6 : 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 2, delay: i * 0.05, ease: "easeInOut" }}
                    style={{ filter: isHovered ? `drop-shadow(0 0 6px ${mod.color}80)` : 'none' }}
                  />
                  
                  {/* Traveling Data Packet */}
                  <motion.circle 
                    r={isHovered ? "5" : "3"} 
                    fill={mod.color}
                    filter="url(#intenseGlow)"
                    initial={{ offsetDistance: "0%", opacity: 0 }}
                    animate={{ 
                      offsetDistance: ["0%", "100%"],
                      opacity: isHovered ? [0, 1, 1, 0] : [0, 0.6, 0.6, 0]
                    }}
                    transition={{ 
                      duration: isHovered ? 1.5 : 3.5, 
                      repeat: Infinity, 
                      ease: "linear"
                    }}
                    style={{ offsetPath: `path('${path}')` }}
                  />
                </g>
              );
            })}
          </g>
        </svg>

        {/* Central Clean Core */}
        <motion.div 
          style={{ opacity: coreOpacity, scale: coreScale }}
          className="absolute z-20 w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center group cursor-pointer"
        >
          {/* Main White Circle */}
          <div className="absolute inset-0 rounded-full bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(59,130,246,0.1)] overflow-hidden" />
          
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]" />
          
          {/* Logo */}
          <div className="relative z-10 flex items-center justify-center w-full h-full p-10">
            <img 
              src="/logo.png" 
              alt="SchoolOS Logo" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </motion.div>

        {/* Floating Modules */}
        <div className="absolute inset-0 z-30 hidden lg:block">
          <div className="relative w-full h-full" style={{ transform: 'translate(50%, 50%)' }}>
            {ECOSYSTEM_MODULES.map((mod, i) => {
              const pos = getPosition(mod.angle, mod.rx, mod.ry);
              const Icon = mod.icon;
              const isHovered = hoveredNode === mod.id;

              return (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.05 + 0.5, type: "spring" }}
                  style={{ position: 'absolute', left: pos.x, top: pos.y, x: '-50%', y: '-50%' }}
                  onMouseEnter={() => setHoveredNode(mod.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setActiveNode(mod.id)}
                  className={`flex flex-col items-center gap-3 cursor-pointer group relative ${isHovered || activeNode === mod.id ? 'z-50' : 'z-10'}`}
                >
                  <motion.div animate={{ y: ["-6px", "6px", "-6px"] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}>
                    
                    {/* Light Theme Premium Node Design */}
                    <motion.div 
                      animate={{ scale: isHovered ? 1.15 : 1 }}
                      className={`relative w-[70px] h-[70px] rounded-2xl flex items-center justify-center bg-white transition-all duration-300 border ${
                        isHovered ? 'border-transparent' : 'border-slate-200/60'
                      }`}
                      style={{ boxShadow: isHovered ? `0 15px 35px ${mod.color}30` : '0 10px 20px rgba(0,0,0,0.04)' }}
                    >
                      {/* Inner colored glow on hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(circle at center, ${mod.color}15, transparent)` }} />
                      
                      <Icon className="w-7 h-7 relative z-10 transition-colors duration-300" style={{ color: isHovered ? mod.color : '#475569' }} strokeWidth={1.5} />
                    </motion.div>
                    
                    {/* Separate Pill Label */}
                    <div className="absolute top-[80px] left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-slate-100 transition-all duration-300 whitespace-nowrap group-hover:scale-105 group-hover:shadow-md">
                      <span className={`text-xs font-bold transition-colors ${isHovered ? 'text-slate-900' : 'text-slate-600'}`}>{mod.title}</span>
                    </div>

                    {/* Hover Mini Dashboard Preview */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.9, rotateX: -10 }}
                          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9, rotateX: -10 }}
                          transition={{ type: "spring", bounce: 0.4 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-10 w-56 bg-white/95 backdrop-blur-3xl border border-slate-100 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-50 pointer-events-none perspective-[1000px]"
                        >
                          <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <Activity className="w-4 h-4" style={{ color: mod.color }} />
                              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Live Sync</span>
                            </div>
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: mod.color }} />
                          </div>
                          <div className="space-y-2.5">
                            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                              <motion.div className="h-full" style={{ backgroundColor: mod.color }} initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1 }} />
                            </div>
                            <div className="h-2.5 w-3/4 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                              <motion.div className="h-full opacity-60" style={{ backgroundColor: mod.color }} initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ duration: 1, delay: 0.2 }} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden w-full max-w-md mx-auto px-4 z-30 mt-64 space-y-3 pb-20">
           {ECOSYSTEM_MODULES.map((mod, i) => {
             const Icon = mod.icon;
             return (
               <motion.div
                 key={mod.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm"
               >
                 <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-100" style={{ color: mod.color }}>
                   <Icon className="w-5 h-5" />
                 </div>
                 <div className="flex-1">
                   <h3 className="font-bold text-slate-800 text-base">{mod.title}</h3>
                   <div className="flex items-center gap-1.5 mt-0.5">
                     <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: mod.color }} />
                     <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Syncing Data</p>
                   </div>
                 </div>
               </motion.div>
             )
           })}
        </div>
      </div>

      {/* VisionOS-style Click Modal */}
      <AnimatePresence>
        {activeNode !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm cursor-pointer" 
              onClick={() => setActiveNode(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, rotateX: 10, y: 40 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: -10, y: 40 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white border border-slate-200 backdrop-blur-3xl rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col perspective-[1000px]"
            >
              {/* Header */}
              <div className="p-8 flex items-center justify-between border-b border-slate-100 relative">
                <div className="flex items-center gap-5 relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center"
                    style={{ color: ECOSYSTEM_MODULES.find(m => m.id === activeNode)?.color }}
                  >
                    {React.createElement(ECOSYSTEM_MODULES.find(m => m.id === activeNode)?.icon || Activity, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                      {ECOSYSTEM_MODULES.find(m => m.id === activeNode)?.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-wider mt-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                      Live Sync Active
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setActiveNode(null)}
                  className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors relative z-10 shadow-sm"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
                <div className="space-y-8 relative z-10">
                  <p className="text-slate-600 text-xl font-light leading-relaxed">
                    Seamlessly integrated with the SchoolOS AI Core. This module processes thousands of data points instantly, eliminating manual entry and providing predictive insights that empower your staff.
                  </p>
                  
                  <div className="space-y-5">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest bg-slate-100 inline-block px-3 py-1 rounded-md">Capabilities</h4>
                    <ul className="space-y-4">
                      {['Real-time data synchronization across all devices instantly.', 'Automated reporting and intelligent predictive analytics.', 'Zero-latency mobile app integration for parents and staff.'].map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckSquare className="w-3.5 h-3.5 text-blue-500" />
                          </div>
                          <span className="text-slate-700 text-lg">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Animated Graphic Area */}
                <div className="relative w-full aspect-square lg:aspect-auto rounded-[2.5rem] bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center shadow-inner group">
                  {/* Simulated Abstract UI Animation */}
                  <div className="relative w-4/5 h-4/5 flex flex-col gap-5">
                     <motion.div 
                        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                        className="w-full h-16 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center px-5 gap-5"
                     >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center"><Activity className="w-4 h-4 text-blue-500" /></div>
                        <div className="flex-1 space-y-2">
                           <div className="h-2 w-1/3 bg-slate-200 rounded-full" />
                           <div className="h-1.5 w-1/4 bg-slate-100 rounded-full" />
                        </div>
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, type: "spring", bounce: 0.4 }}
                        className="w-5/6 h-16 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center px-5 gap-5"
                     >
                        <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center"><PieChart className="w-4 h-4 text-purple-500" /></div>
                        <div className="flex-1 space-y-2">
                           <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                           <div className="h-1.5 w-1/3 bg-slate-100 rounded-full" />
                        </div>
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, type: "spring", bounce: 0.4 }}
                        className="w-full flex-1 bg-white rounded-[2rem] border border-slate-100 shadow-sm p-6 flex flex-col gap-4 relative overflow-hidden"
                     >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400" />
                        <div className="flex items-end justify-between gap-3 h-full pb-2">
                           {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                             <motion.div 
                               key={i} 
                               initial={{ height: 0 }} animate={{ height: `${h}%` }} 
                               transition={{ delay: 0.8 + (i * 0.1), duration: 1.5, type: "spring", bounce: 0.5 }}
                               className="flex-1 bg-blue-400 rounded-t-md opacity-90"
                             />
                           ))}
                        </div>
                     </motion.div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
