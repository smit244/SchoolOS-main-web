import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Users, CheckSquare, ScanFace, Database, Sparkles, FileText, 
  CreditCard, BookOpen, Library, Bus, Smartphone, Presentation, 
  GraduationCap, FileBarChart, PieChart, Award, X, Activity 
} from 'lucide-react';

const ECOSYSTEM_MODULES = [
  { id: 1, title: 'Student Management', icon: Users, angle: 15, rx: 320, ry: 190, color: '#3b82f6' },
  { id: 2, title: 'Attendance', icon: CheckSquare, angle: 55, rx: 420, ry: 250, color: '#10b981' },
  { id: 3, title: 'AI Face Recognition', icon: ScanFace, angle: 85, rx: 280, ry: 210, color: '#8b5cf6' },
  { id: 4, title: 'Question Bank', icon: Database, angle: 130, rx: 460, ry: 300, color: '#f59e0b' },
  { id: 5, title: 'AI Question Gen', icon: Sparkles, angle: 170, rx: 340, ry: 200, color: '#06b6d4' },
  { id: 6, title: 'Examination', icon: FileText, angle: 210, rx: 480, ry: 280, color: '#f43f5e' },
  { id: 7, title: 'Fee Management', icon: CreditCard, angle: 260, rx: 290, ry: 230, color: '#10b981' },
  { id: 8, title: 'Homework', icon: BookOpen, angle: 300, rx: 430, ry: 270, color: '#3b82f6' },
  { id: 9, title: 'Library', icon: Library, angle: 35, rx: 500, ry: 330, color: '#8b5cf6' },
  { id: 10, title: 'Transport', icon: Bus, angle: 105, rx: 520, ry: 350, color: '#f59e0b' },
  { id: 11, title: 'Parent App', icon: Smartphone, angle: 145, rx: 310, ry: 260, color: '#ec4899' },
  { id: 12, title: 'Teacher Portal', icon: Presentation, angle: 190, rx: 530, ry: 340, color: '#06b6d4' },
  { id: 13, title: 'Student Portal', icon: GraduationCap, angle: 235, rx: 350, ry: 220, color: '#3b82f6' },
  { id: 14, title: 'Reports', icon: FileBarChart, angle: 280, rx: 510, ry: 360, color: '#d946ef' },
  { id: 15, title: 'Analytics', icon: PieChart, angle: 325, rx: 300, ry: 180, color: '#eab308' },
  { id: 16, title: 'Certificates', icon: Award, angle: 345, rx: 450, ry: 320, color: '#10b981' },
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
    <section ref={containerRef} className="relative w-full min-h-[120vh] py-32 overflow-hidden bg-[#020617] perspective-[2000px]">
      
      {/* Deep Space Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_60%)] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
        >
          <Activity className="w-4 h-4 text-vision-cyan" />
          <span className="text-sm font-bold text-white tracking-wide">Dynamic Orbital Layout</span>
        </motion.div>
        
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.05]">
          A deeply connected <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-blueGlow via-vision-purple to-vision-cyan">AI Ecosystem.</span>
        </h2>
        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
          Hover over any floating node to trace its data path directly to the SchoolOS core in real-time.
        </p>
      </div>

      {/* Floating Orbital Area */}
      <div className="relative w-full h-[900px] flex items-center justify-center mt-32">
        
        {/* Connection Beams SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0.1)" />
            </linearGradient>
            <filter id="intenseGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          <g transform="translate(50%, 50%)" className="hidden lg:block">
            {/* Concentric subtle rings */}
            <motion.circle cx="0" cy="0" r="300" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 8" animate={{ rotate: 360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }} />
            <motion.circle cx="0" cy="0" r="450" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="2 10" animate={{ rotate: -360 }} transition={{ duration: 200, repeat: Infinity, ease: "linear" }} />

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
                    strokeWidth={isHovered ? "3" : "1"}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: isHovered ? 0.8 : 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 2, delay: i * 0.05, ease: "easeInOut" }}
                    style={{ filter: isHovered ? `drop-shadow(0 0 8px ${mod.color})` : 'none' }}
                  />
                  
                  {/* Traveling Data Packet */}
                  <motion.circle 
                    r={isHovered ? "4" : "2"} 
                    fill={mod.color}
                    filter="url(#intenseGlow)"
                    initial={{ offsetDistance: "0%", opacity: 0 }}
                    animate={{ 
                      offsetDistance: ["0%", "100%"],
                      opacity: isHovered ? [0, 1, 1, 0] : [0, 0.4, 0.4, 0]
                    }}
                    transition={{ 
                      duration: isHovered ? 1.5 : 4, 
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

        {/* Central Glowing Core */}
        <motion.div 
          style={{ opacity: coreOpacity, scale: coreScale }}
          className="absolute z-20 w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center group cursor-pointer"
        >
          {/* Glass Outer Shell */}
          <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(59,130,246,0.2)]" />
          {/* Intense Inner Core */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-vision-cyan/30 to-vision-blueGlow/30 blur-md animate-pulse" />
          
          {/* Logo */}
          <div className="relative z-10 flex items-center justify-center w-full h-full p-10">
            <img 
              src="/logo.png" 
              alt="SchoolOS Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-110 transition-transform duration-500" 
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
                  className="flex flex-col items-center gap-3 cursor-pointer group"
                >
                  <motion.div animate={{ y: ["-5px", "5px", "-5px"] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}>
                    
                    {/* The Premium Node Design */}
                    <motion.div 
                      animate={{ scale: isHovered ? 1.15 : 1 }}
                      className={`relative w-[70px] h-[70px] rounded-2xl flex items-center justify-center backdrop-blur-xl transition-all duration-300 border ${
                        isHovered ? 'bg-white/10 border-white/30' : 'bg-white/5 border-white/10'
                      }`}
                      style={{ boxShadow: isHovered ? `0 0 30px ${mod.color}40, inset 0 0 20px rgba(255,255,255,0.1)` : '0 10px 20px rgba(0,0,0,0.2)' }}
                    >
                      <Icon className="w-7 h-7 relative z-10 transition-all duration-300" style={{ color: isHovered ? '#fff' : mod.color, filter: isHovered ? `drop-shadow(0 0 8px ${mod.color})` : 'none' }} strokeWidth={1.5} />
                    </motion.div>
                    
                    {/* Floating Label */}
                    <div className={`absolute top-[80px] left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full border transition-all duration-300 whitespace-nowrap ${
                      isHovered ? 'bg-white/10 border-white/20 backdrop-blur-md opacity-100' : 'bg-transparent border-transparent opacity-60'
                    }`}>
                      <span className="text-xs font-bold text-white">{mod.title}</span>
                    </div>

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
                 className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
               >
                 <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10" style={{ color: mod.color }}>
                   <Icon className="w-5 h-5" />
                 </div>
                 <div className="flex-1">
                   <h3 className="font-bold text-white text-base">{mod.title}</h3>
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
    </section>
  );
};
