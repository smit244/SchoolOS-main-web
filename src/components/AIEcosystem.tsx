import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useAnimationFrame } from 'framer-motion';
import { 
  Users, CheckSquare, ScanFace, Database, Sparkles, FileText, 
  CreditCard, BookOpen, Library, Bus, Smartphone, Presentation, 
  GraduationCap, FileBarChart, PieChart, Award, Activity 
} from 'lucide-react';

const ECOSYSTEM_MODULES = [
  // Inner Orbit
  { id: 1, title: 'Student Management', icon: Users, angle: 30, rx: 280, ry: 180, color: '#3b82f6' },
  { id: 3, title: 'AI Face Recognition', icon: ScanFace, angle: 90, rx: 280, ry: 180, color: '#8b5cf6' },
  { id: 5, title: 'AI Question Gen', icon: Sparkles, angle: 150, rx: 280, ry: 180, color: '#06b6d4' },
  { id: 7, title: 'Fee Management', icon: CreditCard, angle: 210, rx: 280, ry: 180, color: '#10b981' },
  { id: 13, title: 'Student Portal', icon: GraduationCap, angle: 270, rx: 280, ry: 180, color: '#3b82f6' },
  { id: 15, title: 'Analytics', icon: PieChart, angle: 330, rx: 280, ry: 180, color: '#eab308' },

  // Outer Orbit
  { id: 9, title: 'Library', icon: Library, angle: 0, rx: 480, ry: 320, color: '#8b5cf6' },
  { id: 2, title: 'Attendance', icon: CheckSquare, angle: 36, rx: 480, ry: 320, color: '#10b981' },
  { id: 10, title: 'Transport', icon: Bus, angle: 72, rx: 480, ry: 320, color: '#f59e0b' },
  { id: 4, title: 'Question Bank', icon: Database, angle: 108, rx: 480, ry: 320, color: '#f59e0b' },
  { id: 11, title: 'Parent App', icon: Smartphone, angle: 144, rx: 480, ry: 320, color: '#ec4899' },
  { id: 12, title: 'Teacher Portal', icon: Presentation, angle: 180, rx: 480, ry: 320, color: '#06b6d4' },
  { id: 6, title: 'Examination', icon: FileText, angle: 216, rx: 480, ry: 320, color: '#f43f5e' },
  { id: 8, title: 'Homework', icon: BookOpen, angle: 252, rx: 480, ry: 320, color: '#3b82f6' },
  { id: 14, title: 'Reports', icon: FileBarChart, angle: 288, rx: 480, ry: 320, color: '#d946ef' },
  { id: 16, title: 'Certificates', icon: Award, angle: 324, rx: 480, ry: 320, color: '#10b981' },
];

const OrbitalPlanet = ({ mod, hoveredNode, setHoveredNode, index }: any) => {
  const planetRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const packetRef = useRef<SVGCircleElement>(null);
  
  const isHovered = hoveredNode === mod.id;
  const isAnyHovered = hoveredNode !== null;

  const timeRef = useRef(0);
  const speed = mod.rx < 400 ? 0.0003 : 0.00015; // Inner faster, Outer slower
  const initialAngle = mod.angle * (Math.PI / 180);

  const Icon = mod.icon;

  useAnimationFrame((t, delta) => {
    // Pause orbit if ANY node is hovered to allow user to focus
    if (!isAnyHovered) {
      timeRef.current += delta;
    }
    
    const currentAngle = initialAngle + timeRef.current * speed;
    const x = Math.cos(currentAngle) * mod.rx;
    const y = Math.sin(currentAngle) * mod.ry;

    // Update Planet Position
    if (planetRef.current) {
      planetRef.current.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    }

    // Update Bezier Connection Line
    if (pathRef.current && packetRef.current) {
      // Dynamic Control Point for organic curve
      const cpDist = Math.sqrt(x*x + y*y) * 0.4;
      const cpx = Math.cos(currentAngle + Math.PI/4) * cpDist;
      const cpy = Math.sin(currentAngle + Math.PI/4) * cpDist;
      
      const pathData = `M 0 0 Q ${cpx} ${cpy} ${x} ${y}`;
      pathRef.current.setAttribute("d", pathData);
      
      // Update data packet animation path
      packetRef.current.style.offsetPath = `path('${pathData}')`;
    }
  });

  return (
    <>
      {/* SVG Path Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden lg:block">
        <g transform="translate(50%, 50%)">
          <path 
            ref={pathRef}
            fill="none"
            stroke={isHovered ? mod.color : "url(#beamGrad)"} 
            strokeWidth={isHovered ? "4" : "1.5"}
            className="transition-all duration-500"
            style={{ 
              opacity: isHovered ? 0.8 : 0.3,
              filter: isHovered ? `drop-shadow(0 0 10px ${mod.color}80)` : 'none' 
            }}
          />
          {/* Animated Traveling Packet */}
          <circle 
            ref={packetRef}
            r={isHovered ? "6" : "3"} 
            fill={mod.color}
            className="animate-data-travel"
            style={{ animationDuration: isHovered ? '2s' : '4s' }}
          />
        </g>
      </svg>

      {/* HTML Planet Layer */}
      <div 
        ref={planetRef} 
        className={`absolute top-1/2 left-1/2 hidden lg:flex flex-col items-center gap-3 cursor-pointer group ${isHovered ? 'z-50' : 'z-20'}`}
        onMouseEnter={() => setHoveredNode(mod.id)}
        onMouseLeave={() => setHoveredNode(null)}
      >
        <motion.div 
          animate={{ 
            scale: isHovered ? 1.25 : 1,
            y: ["-8px", "8px", "-8px"] 
          }} 
          transition={{ 
            scale: { type: "spring", bounce: 0.5 },
            y: { duration: 4, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }
          }}
          className="relative"
        >
          {/* Circular Glass Planet */}
          <div className="relative w-[76px] h-[76px] rounded-full flex items-center justify-center bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.06),inset_0_4px_10px_rgba(255,255,255,0.8)] overflow-hidden transition-all duration-300 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
             
             {/* Rotating Border Glow */}
             {isHovered && (
               <div className="absolute inset-[-50%] animate-[spin_3s_linear_infinite]" 
                    style={{ background: `conic-gradient(from 0deg, transparent 0 300deg, ${mod.color} 360deg)` }} 
               />
             )}
             
             {/* Inner Surface */}
             <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-md flex items-center justify-center">
                {/* Colored Core Glow */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                     style={{ background: `radial-gradient(circle at center, ${mod.color}, transparent)` }} />
                
                <Icon className="w-8 h-8 relative z-10 transition-colors duration-300" style={{ color: isHovered ? mod.color : '#64748b' }} strokeWidth={1.5} />
             </div>
          </div>
        </motion.div>

        {/* Floating Label Pill */}
        <div className={`absolute top-[90px] px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-slate-100 shadow-sm transition-all duration-300 whitespace-nowrap ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-80 scale-100'
        }`}>
          <span className={`text-xs font-bold ${isHovered ? 'text-slate-900' : 'text-slate-600'}`}>{mod.title}</span>
        </div>

        {/* Mini Glass Dashboard Preview (VisionOS style) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: 10, scale: 0.9, rotateX: -10 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="absolute top-full mt-10 w-64 bg-white/80 backdrop-blur-3xl border border-white/60 p-5 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.1),inset_0_2px_10px_rgba(255,255,255,0.8)] z-50 pointer-events-none perspective-[1000px]"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white shadow-sm" style={{ color: mod.color }}>
                     <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-800 uppercase tracking-widest">Live Feed</span>
                </div>
                <span className="w-2 h-2 rounded-full animate-pulse shadow-sm" style={{ backgroundColor: mod.color }} />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-full bg-slate-100/50 rounded-full overflow-hidden shadow-inner">
                  <motion.div className="h-full rounded-full" style={{ backgroundColor: mod.color }} initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1 }} />
                </div>
                <div className="h-3 w-3/4 bg-slate-100/50 rounded-full overflow-hidden shadow-inner">
                  <motion.div className="h-full opacity-60 rounded-full" style={{ backgroundColor: mod.color }} initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ duration: 1, delay: 0.2 }} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
};

export const AIEcosystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const coreOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const coreScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[140vh] py-32 overflow-hidden bg-[#fafcff] perspective-[2000px]">
      
      {/* VisionOS Premium Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Mesh Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_60%)] rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.06)_0%,transparent_60%)] rounded-full blur-[100px] animate-[pulse_12s_ease-in-out_infinite_alternate]" />
        <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_60%)] rounded-full blur-[80px]" />
        
        {/* Subtle Glass Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 mb-8 shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
        >
          <div className="w-2 h-2 rounded-full bg-vision-blueGlow animate-pulse" />
          <span className="text-sm font-extrabold text-slate-800 uppercase tracking-widest">SchoolOS VisionOS Engine</span>
        </motion.div>
        
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6 leading-[1.05]">
          A deeply connected <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">AI Ecosystem.</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
          Hover over any floating glass planet to focus the orbit and trace its real-time data sync to the AI Core.
        </p>
      </div>

      {/* Floating Orbital Engine Area */}
      <div className="relative w-full h-[1000px] flex items-center justify-center mt-20">
        
        {/* Global SVG Defs */}
        <svg className="w-0 h-0 absolute pointer-events-none">
          <defs>
            <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0.02)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Orbit Rings (Static Background Lines) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
           <div className="absolute w-[560px] h-[360px] border border-slate-300/30 rounded-[100%] border-dashed" />
           <div className="absolute w-[960px] h-[640px] border border-slate-300/20 rounded-[100%] border-dashed" />
        </div>

        {/* Central VisionOS AI Core */}
        <motion.div 
          style={{ opacity: coreOpacity, scale: coreScale }}
          className="absolute z-40 w-56 h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center group"
        >
          {/* Outer Glass Shell */}
          <div className="absolute inset-0 rounded-full bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_30px_60px_rgba(59,130,246,0.15),inset_0_0_20px_rgba(255,255,255,1)]" />
          
          {/* Animated Energy Rings */}
          <div className="absolute inset-[-20%] rounded-full border border-blue-400/20 animate-[spin_10s_linear_infinite] border-dashed" />
          <div className="absolute inset-[-40%] rounded-full border border-cyan-400/10 animate-[spin_15s_linear_infinite_reverse] border-dotted" />
          
          {/* Inner Glowing Core */}
          <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-blue-100 to-cyan-50 blur-xl animate-pulse opacity-70" />
          <div className="absolute inset-12 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent)] blur-md" />
          
          {/* Center Logo */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-12">
            <img 
              src="/logo.png" 
              alt="SchoolOS Core" 
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-700 drop-shadow-2xl" 
            />
            <div className="absolute bottom-6 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-slate-100">
               <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">AI Core Online</span>
            </div>
          </div>
        </motion.div>

        {/* Render Orbital Planets */}
        {ECOSYSTEM_MODULES.map((mod, i) => (
          <OrbitalPlanet 
            key={mod.id} 
            mod={mod} 
            index={i}
            hoveredNode={hoveredNode} 
            setHoveredNode={setHoveredNode} 
          />
        ))}

        {/* Mobile View (Stacked List) */}
        <div className="lg:hidden w-full max-w-md mx-auto px-4 z-30 mt-80 space-y-4 pb-20 relative">
           {ECOSYSTEM_MODULES.map((mod, i) => {
             const Icon = mod.icon;
             return (
               <motion.div
                 key={mod.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="w-full flex items-center gap-5 p-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
               >
                 <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-100 shadow-inner" style={{ color: mod.color }}>
                   <Icon className="w-6 h-6" strokeWidth={1.5} />
                 </div>
                 <div className="flex-1">
                   <h3 className="font-bold text-slate-800 text-lg">{mod.title}</h3>
                   <div className="flex items-center gap-2 mt-1">
                     <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: mod.color }} />
                     <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Live Syncing</p>
                   </div>
                 </div>
               </motion.div>
             )
           })}
        </div>
      </div>
      
      {/* Global Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes data-travel {
          0% { offset-distance: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .animate-data-travel {
          animation: data-travel linear infinite;
        }
      `}} />
    </section>
  );
};
