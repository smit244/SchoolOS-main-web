import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Users, CheckSquare, ScanFace, Database, Sparkles, FileText, 
  CreditCard, BookOpen, Library, Bus, Smartphone, Presentation, 
  GraduationCap, FileBarChart, PieChart, Award, X, Activity 
} from 'lucide-react';

const ECOSYSTEM_MODULES = [
  { id: 1, title: 'Student Management', icon: Users, angle: 0, radius: 'inner' },
  { id: 2, title: 'Attendance', icon: CheckSquare, angle: 45, radius: 'inner' },
  { id: 3, title: 'AI Face Recognition', icon: ScanFace, angle: 90, radius: 'inner' },
  { id: 4, title: 'Question Bank', icon: Database, angle: 135, radius: 'inner' },
  { id: 5, title: 'AI Question Generator', icon: Sparkles, angle: 180, radius: 'inner' },
  { id: 6, title: 'Examination', icon: FileText, angle: 225, radius: 'inner' },
  { id: 7, title: 'Fee Management', icon: CreditCard, angle: 270, radius: 'inner' },
  { id: 8, title: 'Homework', icon: BookOpen, angle: 315, radius: 'inner' },
  { id: 9, title: 'Library', icon: Library, angle: 22.5, radius: 'outer' },
  { id: 10, title: 'Transport', icon: Bus, angle: 67.5, radius: 'outer' },
  { id: 11, title: 'Parent App', icon: Smartphone, angle: 112.5, radius: 'outer' },
  { id: 12, title: 'Teacher Portal', icon: Presentation, angle: 157.5, radius: 'outer' },
  { id: 13, title: 'Student Portal', icon: GraduationCap, angle: 202.5, radius: 'outer' },
  { id: 14, title: 'Reports', icon: FileBarChart, angle: 247.5, radius: 'outer' },
  { id: 15, title: 'Analytics', icon: PieChart, angle: 292.5, radius: 'outer' },
  { id: 16, title: 'Certificates', icon: Award, angle: 337.5, radius: 'outer' },
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

  // Calculate positions based on angle and radius
  const getPosition = (angle: number, radiusType: 'inner' | 'outer') => {
    // Elliptical radii for responsive desktop
    const rx = radiusType === 'inner' ? 280 : 450;
    const ry = radiusType === 'inner' ? 180 : 300;
    
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * rx;
    const y = Math.sin(rad) * ry;
    
    return { x, y };
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-[120vh] py-32 overflow-hidden bg-transparent perspective-[2000px]">
      
      {/* Background Lighting specifically for the Ecosystem */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03)_0%,transparent_70%)] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-slate-200/50 backdrop-blur-xl mb-6 shadow-sm"
        >
          <Activity className="w-4 h-4 text-vision-cyan" />
          <span className="text-sm font-semibold text-slate-700">Unified Intelligence</span>
        </motion.div>
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-6 leading-tight">
          One intelligent <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-blueGlow to-vision-cyan">AI Ecosystem.</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light">
          Say goodbye to fragmented tools. Every module in SchoolOS is deeply interconnected, powered by a central AI Core that syncs data instantly.
        </p>
      </div>

      {/* Neural Network Visualization Area */}
      <div className="relative w-full h-[800px] flex items-center justify-center mt-20">
        
        {/* SVG Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.3))' }}>
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(6,182,212,0.1)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.3)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0.1)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <g transform="translate(50%, 50%)" className="hidden lg:block">
            {ECOSYSTEM_MODULES.map((mod, i) => {
              const pos = getPosition(mod.angle, mod.radius as 'inner' | 'outer');
              const isHovered = hoveredNode === mod.id;
              
              return (
                <g key={`line-${i}`}>
                  {/* Base Line */}
                  <motion.line 
                    x1="0" y1="0" x2={pos.x} y2={pos.y}
                    stroke="url(#lineGrad)" 
                    strokeWidth={isHovered ? "3" : "1"}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, delay: i * 0.05 + 0.5, ease: "easeOut" }}
                  />
                  {/* Traveling Particle */}
                  <motion.circle 
                    r="3" 
                    fill="#06B6D4"
                    filter="url(#glow)"
                    initial={{ cx: 0, cy: 0, opacity: 0 }}
                    animate={{ 
                      cx: [0, pos.x], 
                      cy: [0, pos.y],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2 + Math.random() * 2, 
                      repeat: Infinity, 
                      delay: Math.random() * 5,
                      ease: "easeInOut"
                    }}
                  />
                </g>
              );
            })}
          </g>
        </svg>

        {/* Central AI Core */}
        <motion.div 
          style={{ opacity: coreOpacity, scale: coreScale }}
          className="absolute z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/80 border-[4px] border-white/50 backdrop-blur-3xl shadow-[0_0_50px_rgba(59,130,246,0.3),inset_0_0_20px_rgba(255,255,255,1)] flex items-center justify-center group cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-vision-cyan/20 to-vision-blueGlow/20 animate-pulse-slow mix-blend-multiply" />
          
          {/* Pulsing Rings */}
          <div className="absolute inset-0 rounded-full border border-vision-cyan/40 animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-[-20px] rounded-full border border-vision-blueGlow/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          
          <div className="relative z-10 flex flex-col items-center">
            <Sparkles className="w-10 h-10 text-vision-blueGlow mb-1" />
            <span className="font-display font-bold text-slate-900 tracking-wider">AI CORE</span>
          </div>
        </motion.div>

        {/* Floating Nodes (Desktop Circular Layout) */}
        <div className="absolute inset-0 z-30 hidden lg:block">
          <div className="relative w-full h-full" style={{ transform: 'translate(50%, 50%)' }}>
            {ECOSYSTEM_MODULES.map((mod, i) => {
              const pos = getPosition(mod.angle, mod.radius as 'inner' | 'outer');
              const Icon = mod.icon;
              const isHovered = hoveredNode === mod.id;

              return (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 + 1, type: "spring", bounce: 0.4 }}
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
                  <motion.div 
                    animate={{ 
                      y: [-5, 5, -5],
                      boxShadow: isHovered 
                        ? '0 20px 40px rgba(6,182,212,0.2), inset 0 0 0 1px rgba(255,255,255,1)' 
                        : '0 10px 20px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.7)'
                    }}
                    transition={{ 
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 },
                      boxShadow: { duration: 0.3 }
                    }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-xl border transition-colors duration-300 ${
                      isHovered ? 'bg-white border-white scale-110' : 'bg-white/60 border-slate-200/50'
                    }`}
                  >
                    <Icon className={`w-7 h-7 transition-colors duration-300 ${isHovered ? 'text-vision-blueGlow' : 'text-slate-500'}`} />
                  </motion.div>
                  
                  {/* Label */}
                  <div className={`px-3 py-1 rounded-full backdrop-blur-md border transition-all duration-300 ${
                    isHovered ? 'bg-white text-slate-900 border-slate-200 shadow-md' : 'bg-white/40 text-slate-600 border-transparent'
                  }`}>
                    <span className="text-xs font-bold whitespace-nowrap">{mod.title}</span>
                  </div>

                  {/* Hover Mini Dashboard Preview */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute top-full mt-4 w-48 bg-white/90 backdrop-blur-2xl border border-slate-200 p-3 rounded-2xl shadow-xl z-50 pointer-events-none"
                      >
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
                          <Activity className="w-3 h-3 text-vision-cyan" />
                          <span className="text-[10px] font-bold text-slate-500 uppercase">Live Sync</span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <motion.div className="h-full bg-vision-blueGlow" initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1 }} />
                          </div>
                          <div className="h-2 w-3/4 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div className="h-full bg-vision-cyan" initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ duration: 1, delay: 0.2 }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet List Layout (Hidden on Large Screens) */}
        <div className="lg:hidden w-full max-w-md mx-auto px-4 z-30 mt-64 space-y-4">
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
                 className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-slate-200/50 backdrop-blur-xl shadow-sm cursor-pointer"
               >
                 <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100">
                   <Icon className="w-6 h-6 text-vision-blueGlow" />
                 </div>
                 <div className="flex-1">
                   <h3 className="font-bold text-slate-900">{mod.title}</h3>
                   <p className="text-xs text-slate-500">AI-Powered Module</p>
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
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm cursor-pointer" 
              onClick={() => setActiveNode(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: -10 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white/80 border border-slate-200/60 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col perspective-[1000px]"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 flex items-center justify-between border-b border-slate-200/50 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-vision-blueGlow/5 to-transparent pointer-events-none" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    {React.createElement(ECOSYSTEM_MODULES.find(m => m.id === activeNode)?.icon || Activity, { className: "w-7 h-7 text-vision-blueGlow" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {ECOSYSTEM_MODULES.find(m => m.id === activeNode)?.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 uppercase tracking-wider mt-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Sync Active
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setActiveNode(null)}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors relative z-10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-vision-cyan/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10">
                  <p className="text-slate-600 text-lg font-light leading-relaxed">
                    Seamlessly integrated with the SchoolOS AI Core. This module processes thousands of data points instantly, eliminating manual entry and providing predictive insights.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Key Capabilities</h4>
                    <ul className="space-y-3">
                      {['Real-time data synchronization across all devices.', 'Automated reporting and predictive analytics.', 'Zero-latency mobile app integration.'].map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckSquare className="w-5 h-5 text-vision-blueGlow shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Animated Graphic Area */}
                <div className="relative w-full aspect-square md:aspect-auto rounded-3xl bg-slate-50 border border-slate-200/60 overflow-hidden flex items-center justify-center shadow-inner">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_100%)]" />
                  
                  {/* Simulated Abstract UI Animation */}
                  <div className="relative w-3/4 h-3/4 flex flex-col gap-4">
                     <motion.div 
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                        className="w-full h-12 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center px-4 gap-4"
                     >
                        <div className="w-6 h-6 rounded-md bg-vision-cyan/20" />
                        <div className="h-2 w-1/3 bg-slate-100 rounded-full" />
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                        className="w-4/5 h-12 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center px-4 gap-4"
                     >
                        <div className="w-6 h-6 rounded-md bg-vision-purple/20" />
                        <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                        className="w-full flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col gap-3"
                     >
                        <div className="flex items-end gap-2 h-full pb-2">
                           {[40, 70, 45, 90, 60, 100].map((h, i) => (
                             <motion.div 
                               key={i} 
                               initial={{ height: 0 }} animate={{ height: `${h}%` }} 
                               transition={{ delay: 0.8 + (i * 0.1), duration: 1, ease: "easeOut" }}
                               className="flex-1 bg-gradient-to-t from-vision-blueGlow to-vision-cyan rounded-t-sm opacity-80"
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
