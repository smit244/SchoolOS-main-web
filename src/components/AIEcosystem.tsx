import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Users, CheckSquare, ScanFace, Database, Sparkles, FileText, 
  CreditCard, BookOpen, Library, Bus, Smartphone, Presentation, 
  GraduationCap, FileBarChart, PieChart, Award, X, Activity 
} from 'lucide-react';

const ECOSYSTEM_MODULES = [
  { id: 1, title: 'Student Management', icon: Users, angle: 15, rx: 320, ry: 190 },
  { id: 2, title: 'Attendance', icon: CheckSquare, angle: 55, rx: 420, ry: 250 },
  { id: 3, title: 'AI Face Recognition', icon: ScanFace, angle: 85, rx: 280, ry: 210 },
  { id: 4, title: 'Question Bank', icon: Database, angle: 130, rx: 460, ry: 300 },
  { id: 5, title: 'AI Question Generator', icon: Sparkles, angle: 170, rx: 340, ry: 200 },
  { id: 6, title: 'Examination', icon: FileText, angle: 210, rx: 480, ry: 280 },
  { id: 7, title: 'Fee Management', icon: CreditCard, angle: 260, rx: 290, ry: 230 },
  { id: 8, title: 'Homework', icon: BookOpen, angle: 300, rx: 430, ry: 270 },
  { id: 9, title: 'Library', icon: Library, angle: 35, rx: 500, ry: 330 },
  { id: 10, title: 'Transport', icon: Bus, angle: 105, rx: 520, ry: 350 },
  { id: 11, title: 'Parent App', icon: Smartphone, angle: 145, rx: 310, ry: 260 },
  { id: 12, title: 'Teacher Portal', icon: Presentation, angle: 190, rx: 530, ry: 340 },
  { id: 13, title: 'Student Portal', icon: GraduationCap, angle: 235, rx: 350, ry: 220 },
  { id: 14, title: 'Reports', icon: FileBarChart, angle: 280, rx: 510, ry: 360 },
  { id: 15, title: 'Analytics', icon: PieChart, angle: 325, rx: 300, ry: 180 },
  { id: 16, title: 'Certificates', icon: Award, angle: 345, rx: 450, ry: 320 },
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

  // Calculate positions based on scattered angle and custom radii
  const getPosition = (angle: number, rx: number, ry: number) => {
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * rx;
    const y = Math.sin(rad) * ry;
    
    return { x, y, rx, ry };
  };

  // Generate a beautiful bezier curve from center (0,0) to the node (x,y)
  const getBezierPath = (x: number, y: number, angle: number) => {
    // Control point bends the line in a curve based on angle
    const rad = (angle * Math.PI) / 180;
    const cpDist = Math.sqrt(x*x + y*y) * 0.4; // control point distance
    const cpx = Math.cos(rad + Math.PI/4) * cpDist;
    const cpy = Math.sin(rad + Math.PI/4) * cpDist;
    
    return `M 0 0 Q ${cpx} ${cpy} ${x} ${y}`;
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-[120vh] py-32 overflow-hidden bg-transparent perspective-[2000px]">
      
      {/* Background Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04)_0%,transparent_60%)] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06)_0%,transparent_60%)] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 border border-slate-200/80 backdrop-blur-xl mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform hover:scale-105"
        >
          <Activity className="w-4 h-4 text-vision-cyan" />
          <span className="text-sm font-bold text-slate-800 tracking-wide">Unified Intelligence</span>
        </motion.div>
        
        <h2 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-6 leading-[1.05]">
          One intelligent <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-blueGlow via-vision-purple to-vision-cyan">AI Ecosystem.</span>
        </h2>
        <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
          Say goodbye to fragmented tools. Every module in SchoolOS is deeply interconnected, powered by a central AI Core that syncs data instantly.
        </p>
      </div>

      {/* Neural Network Visualization Area */}
      <div className="relative w-full h-[900px] flex items-center justify-center mt-32">
        
        {/* SVG Visualization Layer (Rings, Curves, Particles) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: 'drop-shadow(0 0 10px rgba(6,182,212,0.4))' }}>
          <defs>
            {/* Elegant Line Gradient */}
            <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.1)" />
              <stop offset="50%" stopColor="rgba(139,92,246,0.4)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0.1)" />
            </linearGradient>
            
            {/* Particle Glow Filter */}
            <filter id="intenseGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          <g transform="translate(50%, 50%)" className="hidden lg:block">
            
            {/* Orbital Rings */}
            <motion.ellipse 
              cx="0" cy="0" rx="300" ry="200" 
              fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="1" strokeDasharray="4 8"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            />
            <motion.ellipse 
              cx="0" cy="0" rx="480" ry="320" 
              fill="none" stroke="rgba(6,182,212,0.05)" strokeWidth="1" strokeDasharray="2 12"
              animate={{ rotate: -360 }}
              transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            />

            {/* Connecting Synapses & Particles */}
            {ECOSYSTEM_MODULES.map((mod, i) => {
              const pos = getPosition(mod.angle, mod.rx, mod.ry);
              const path = getBezierPath(pos.x, pos.y, mod.angle);
              const isHovered = hoveredNode === mod.id;
              
              return (
                <g key={`synapse-${i}`}>
                  {/* Glowing Bezier Curve */}
                  <motion.path 
                    d={path}
                    fill="none"
                    stroke="url(#neuralGrad)" 
                    strokeWidth={isHovered ? "4" : "1.5"}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: isHovered ? 1 : 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 2, delay: i * 0.05 + 0.5, ease: "easeInOut" }}
                    style={{ filter: isHovered ? 'drop-shadow(0 0 6px rgba(139,92,246,0.6))' : 'none' }}
                  />
                  
                  {/* Live Data Traveling Particle */}
                  <motion.circle 
                    r="4" 
                    fill="#06B6D4"
                    filter="url(#intenseGlow)"
                    initial={{ offsetDistance: "0%", opacity: 0 }}
                    animate={{ 
                      offsetDistance: ["0%", "100%"],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: 3 + Math.random() * 2, 
                      repeat: Infinity, 
                      delay: Math.random() * 5,
                      ease: "easeInOut"
                    }}
                    style={{
                      offsetPath: `path('${path}')`,
                    }}
                  />
                </g>
              );
            })}
          </g>
        </svg>

        {/* Central Big Logo */}
        <motion.div 
          style={{ opacity: coreOpacity, scale: coreScale }}
          className="absolute z-20 w-48 h-48 md:w-[350px] md:h-[350px] flex items-center justify-center cursor-pointer"
        >
          {/* Big Logo without the glass circle */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <img 
              src="/logo.png" 
              alt="SchoolOS Logo" 
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(59,130,246,0.2)] hover:scale-110 hover:drop-shadow-[0_30px_60px_rgba(6,182,212,0.4)] transition-all duration-700" 
            />
          </div>
        </motion.div>

        {/* Floating Nodes (Desktop Circular Layout) */}
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
                  transition={{ duration: 0.8, delay: i * 0.05 + 1, type: "spring", bounce: 0.5 }}
                  style={{ 
                    position: 'absolute', 
                    left: pos.x, 
                    top: pos.y,
                    x: '-50%',
                    y: '-50%'
                  }}
                  onMouseEnter={() => setHoveredNode(mod.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setActiveNode(mod.id)}
                  className={`flex flex-col items-center gap-3 cursor-pointer group`}
                >
                  {/* Continuous Organic Floating */}
                  <motion.div 
                    animate={{ y: ["-6px", "6px", "-6px"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    <motion.div 
                      animate={{ 
                        scale: isHovered ? 1.15 : 1,
                        boxShadow: isHovered 
                          ? '0 25px 50px rgba(6,182,212,0.25), inset 0 0 0 2px rgba(255,255,255,1)' 
                          : '0 10px 30px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.8)'
                      }}
                      transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                      className={`relative w-20 h-20 rounded-[1.25rem] flex items-center justify-center backdrop-blur-2xl transition-colors duration-500 overflow-hidden ${
                        isHovered ? 'bg-white border-transparent' : 'bg-white/50 border border-slate-200/50'
                      }`}
                    >
                      {/* Inner Glow on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-vision-cyan/10 to-vision-purple/10 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />
                      
                      <Icon className={`w-8 h-8 relative z-10 transition-colors duration-300 ${isHovered ? 'text-vision-blueGlow drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'text-slate-600'}`} />
                    </motion.div>
                    
                    {/* Label */}
                    <div className={`mt-3 px-4 py-1.5 rounded-full backdrop-blur-xl border transition-all duration-300 text-center ${
                      isHovered ? 'bg-white text-slate-900 border-slate-200 shadow-lg scale-105' : 'bg-white/40 text-slate-600 border-transparent'
                    }`}>
                      <span className="text-sm font-bold whitespace-nowrap">{mod.title}</span>
                    </div>

                    {/* Hover Mini Dashboard Preview */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.9, rotateX: -10 }}
                          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9, rotateX: -10 }}
                          transition={{ type: "spring", bounce: 0.4 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white/95 backdrop-blur-3xl border border-white p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-50 pointer-events-none perspective-[1000px]"
                        >
                          <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100/80">
                            <div className="flex items-center gap-2">
                              <Activity className="w-4 h-4 text-vision-cyan" />
                              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Live Sync</span>
                            </div>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          </div>
                          <div className="space-y-2.5">
                            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                              <motion.div className="h-full bg-gradient-to-r from-vision-blueGlow to-vision-cyan" initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1 }} />
                            </div>
                            <div className="h-2.5 w-3/4 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                              <motion.div className="h-full bg-gradient-to-r from-vision-purple to-pink-500" initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ duration: 1, delay: 0.2 }} />
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

        {/* Mobile / Tablet List Layout (Hidden on Large Screens) */}
        <div className="lg:hidden w-full max-w-md mx-auto px-4 z-30 mt-80 space-y-4 pb-20">
           {ECOSYSTEM_MODULES.map((mod, i) => {
             const Icon = mod.icon;
             return (
               <motion.div
                 key={mod.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.05 }}
                 onClick={() => setActiveNode(mod.id)}
                 className="w-full flex items-center gap-4 p-5 rounded-2xl bg-white/70 border border-white backdrop-blur-xl shadow-sm hover:shadow-md cursor-pointer transition-shadow"
               >
                 <div className="w-14 h-14 rounded-[1rem] bg-gradient-to-br from-white to-slate-50 flex items-center justify-center shadow-inner border border-slate-100">
                   <Icon className="w-6 h-6 text-vision-blueGlow" />
                 </div>
                 <div className="flex-1">
                   <h3 className="font-bold text-slate-900 text-lg">{mod.title}</h3>
                   <div className="flex items-center gap-1.5 mt-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                     <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">AI Synced</p>
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
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-md cursor-pointer" 
              onClick={() => setActiveNode(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, rotateX: 10, y: 40 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: -10, y: 40 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white/85 border border-white/90 backdrop-blur-3xl rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col perspective-[1000px]"
            >
              {/* Header */}
              <div className="p-8 flex items-center justify-between border-b border-slate-200/50 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-vision-blueGlow/5 via-vision-purple/5 to-transparent pointer-events-none" />
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-white shadow-md flex items-center justify-center">
                    {React.createElement(ECOSYSTEM_MODULES.find(m => m.id === activeNode)?.icon || Activity, { className: "w-8 h-8 text-vision-blueGlow" })}
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
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vision-cyan/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-vision-purple/10 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="space-y-8 relative z-10">
                  <p className="text-slate-600 text-xl font-light leading-relaxed">
                    Seamlessly integrated with the SchoolOS AI Core. This module processes thousands of data points instantly, eliminating manual entry and providing predictive insights that empower your staff.
                  </p>
                  
                  <div className="space-y-5">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest bg-slate-100 inline-block px-3 py-1 rounded-md">Capabilities</h4>
                    <ul className="space-y-4">
                      {['Real-time data synchronization across all devices instantly.', 'Automated reporting and intelligent predictive analytics.', 'Zero-latency mobile app integration for parents and staff.'].map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-vision-blueGlow/10 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckSquare className="w-3.5 h-3.5 text-vision-blueGlow" />
                          </div>
                          <span className="text-slate-700 text-lg">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Animated Graphic Area */}
                <div className="relative w-full aspect-square lg:aspect-auto rounded-[2.5rem] bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/80 overflow-hidden flex items-center justify-center shadow-inner group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_100%)] group-hover:scale-110 transition-transform duration-1000" />
                  
                  {/* Simulated Abstract UI Animation */}
                  <div className="relative w-4/5 h-4/5 flex flex-col gap-5">
                     <motion.div 
                        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                        className="w-full h-16 bg-white rounded-2xl border border-white shadow-sm flex items-center px-5 gap-5"
                     >
                        <div className="w-8 h-8 rounded-lg bg-vision-cyan/20 flex items-center justify-center"><Activity className="w-4 h-4 text-vision-cyan" /></div>
                        <div className="flex-1 space-y-2">
                           <div className="h-2 w-1/3 bg-slate-900/20 rounded-full" />
                           <div className="h-1.5 w-1/4 bg-slate-900/10 rounded-full" />
                        </div>
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, type: "spring", bounce: 0.4 }}
                        className="w-5/6 h-16 bg-white rounded-2xl border border-white shadow-sm flex items-center px-5 gap-5"
                     >
                        <div className="w-8 h-8 rounded-lg bg-vision-purple/20 flex items-center justify-center"><PieChart className="w-4 h-4 text-vision-purple" /></div>
                        <div className="flex-1 space-y-2">
                           <div className="h-2 w-1/2 bg-slate-900/20 rounded-full" />
                           <div className="h-1.5 w-1/3 bg-slate-900/10 rounded-full" />
                        </div>
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, type: "spring", bounce: 0.4 }}
                        className="w-full flex-1 bg-white rounded-[2rem] border border-white shadow-md p-6 flex flex-col gap-4 relative overflow-hidden"
                     >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vision-cyan to-vision-blueGlow" />
                        <div className="flex items-end justify-between gap-3 h-full pb-2">
                           {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                             <motion.div 
                               key={i} 
                               initial={{ height: 0 }} animate={{ height: `${h}%` }} 
                               transition={{ delay: 0.8 + (i * 0.1), duration: 1.5, type: "spring", bounce: 0.5 }}
                               className="flex-1 bg-gradient-to-t from-vision-blueGlow to-vision-cyan rounded-t-md opacity-90 shadow-sm"
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
