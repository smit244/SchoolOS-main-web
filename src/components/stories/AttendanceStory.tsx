import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, User, Bell } from 'lucide-react';

// Reusable Glass Cube for Buildings
const GlassCube = ({ x, y, width, height, depth, color = "bg-white/40", border = "border-white/80", label = "" }: { x: number, y: number, width: number, height: number, depth: number, color?: string, border?: string, label?: string }) => {
  return (
    <div style={{ position: 'absolute', left: x, top: y, width, height, transformStyle: 'preserve-3d' }}>
      {/* Front Face */}
      <div className={`absolute inset-0 ${color} ${border} backdrop-blur-md shadow-inner flex items-end justify-center pb-2 font-bold text-slate-800/50 text-xs`} style={{ transform: `translateZ(${depth}px)` }}>
        {label}
      </div>
      {/* Back Face */}
      <div className={`absolute inset-0 ${color} ${border} backdrop-blur-md`} style={{ transform: `translateZ(0px)` }} />
      {/* Right Face */}
      <div className={`absolute top-0 right-0 ${color} ${border} backdrop-blur-md brightness-90`} style={{ width: depth, height, transformOrigin: 'right', transform: `rotateY(90deg)` }} />
      {/* Left Face */}
      <div className={`absolute top-0 left-0 ${color} ${border} backdrop-blur-md brightness-110`} style={{ width: depth, height, transformOrigin: 'left', transform: `rotateY(-90deg)` }} />
      {/* Top Face */}
      <div className={`absolute top-0 left-0 ${color} ${border} backdrop-blur-md brightness-125`} style={{ width, height: depth, transformOrigin: 'top', transform: `rotateX(-90deg)` }} />
      
      {/* Shadow */}
      <div className="absolute inset-0 bg-black/10 blur-xl" style={{ transform: `translateZ(-1px) translateX(20px) translateY(20px)` }} />
    </div>
  );
};

export const AttendanceStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Story Sequence Progress Mappings
  const scanBeamWidth = useTransform(scrollYProgress, [0.1, 0.2, 0.3], ["0%", "100%", "0%"]);
  const scanBeamOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0]);
  
  const particlePath = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "100%"]);
  const particleOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.5, 0.55], [0, 1, 1, 0]);
  
  const dashboardY = useTransform(scrollYProgress, [0.5, 0.6], [50, 0]);
  const dashboardOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  
  const notifOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-transparent">
      
      {/* The sticky container that holds the simulation */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center perspective-[3000px]">
        
        {/* Environmental Lighting */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-vision-cyan/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-vision-purple/10 blur-[150px] rounded-full pointer-events-none" />

        {/* Floating Story Text Overlay (Optional, but helps explain what's happening) */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 text-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-white shadow-lg backdrop-blur-xl mb-4"
          >
            <span className="text-sm font-bold text-slate-800 tracking-wider uppercase">Live Simulation</span>
          </motion.div>
          <h2 className="text-4xl font-display font-bold text-slate-900 tracking-tighter">
            The Living Campus
          </h2>
        </div>

        {/* ------------------------------------------ */}
        {/* ISOMETRIC WORLD CONTAINER */}
        {/* ------------------------------------------ */}
        <div 
          className="relative w-[1200px] h-[1200px] transform-style-3d"
          style={{ transform: 'rotateX(60deg) rotateZ(-45deg) scale(0.7)' }}
        >
          {/* Ground Plane Grid */}
          <div className="absolute inset-0 border border-slate-200/50 bg-white/20 backdrop-blur-sm shadow-[0_0_100px_rgba(0,0,0,0.05)] rounded-[3rem] overflow-hidden">
             {/* Grid Lines */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          {/* SVG Road Network & Particles */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: 'translateZ(1px)' }}>
            <defs>
              <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
                <stop offset="100%" stopColor="rgba(6,182,212,0.15)" />
              </linearGradient>
              <filter id="simGlow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Main Roads */}
            <path d="M 0 600 L 1200 600 M 600 0 L 600 1200" stroke="url(#roadGrad)" strokeWidth="40" fill="none" strokeLinecap="round" />
            <path d="M 200 200 L 1000 200 L 1000 1000 L 200 1000 Z" stroke="url(#roadGrad)" strokeWidth="20" fill="none" strokeLinejoin="round" />
            
            {/* The Specific Attendance Data Path (from Gate to Admin) */}
            <path id="data-path" d="M 600 1100 L 600 700 L 300 700" stroke="none" fill="none" />

            {/* Background ambient moving students (Orbs) */}
            {[...Array(10)].map((_, i) => (
              <motion.circle 
                key={i}
                r="6" fill="#8B5CF6" filter="url(#simGlow)"
                animate={{ 
                  cx: [200, 1000, 1000, 200, 200], 
                  cy: [200, 200, 1000, 1000, 200]
                }}
                transition={{ duration: 20 + i * 2, repeat: Infinity, delay: i * -3, ease: "linear" }}
              />
            ))}
            
            {/* Ambient moving Bus */}
            <motion.rect 
              width="30" height="15" rx="5" fill="#F59E0B" filter="url(#simGlow)"
              animate={{ x: [0, 1200], y: [592, 592] }}
              transition={{ duration: 15, repeat: Infinity, delay: 5, ease: "linear" }}
            />
            <motion.rect 
              width="15" height="30" rx="5" fill="#F59E0B" filter="url(#simGlow)"
              animate={{ x: [592, 592], y: [1200, 0] }}
              transition={{ duration: 18, repeat: Infinity, delay: 2, ease: "linear" }}
            />

            {/* THE MAIN STORY PARTICLE (Scroll Driven) */}
            <motion.circle 
              r="8" fill="#06B6D4" filter="url(#simGlow)"
              style={{ offsetPath: `path('M 600 1100 L 600 700 L 300 700')`, offsetDistance: particlePath, opacity: particleOpacity }}
            />
          </svg>

          {/* BUILDINGS (Glass Cubes) */}
          
          {/* Main School Building */}
          <GlassCube x={500} y={400} width={300} height={150} depth={100} color="bg-white/60" label="MAIN BLOCK" />
          
          {/* Library */}
          <GlassCube x={800} y={250} width={150} height={150} depth={60} color="bg-vision-cyan/20" label="LIBRARY" />
          
          {/* Admin / Data Center (Target for data particle) */}
          <GlassCube x={200} y={600} width={150} height={200} depth={80} color="bg-vision-purple/20" label="ADMIN AI CORE" />
          
          {/* Sports Complex */}
          <GlassCube x={250} y={250} width={200} height={100} depth={40} color="bg-emerald-500/10" label="SPORTS" />

          {/* Attendance Gate (The start of the story) */}
          <GlassCube x={550} y={1050} width={100} height={20} depth={40} color="bg-slate-900/10" label="GATE" />

          {/* Gate Scanning Laser (Scroll Driven) */}
          <motion.div 
            style={{ width: scanBeamWidth, opacity: scanBeamOpacity }}
            className="absolute left-[500px] top-[1060px] h-2 bg-vision-cyan shadow-[0_0_20px_rgba(6,182,212,1)]"
            style={{ transform: 'translateZ(20px)' }}
          />

          {/* ------------------------------------------ */}
          {/* HOLOGRAPHIC DASHBOARDS (Floating above the 3D world) */}
          {/* We reverse the isometric rotation to make them face the camera while living in the 3D space */}
          {/* ------------------------------------------ */}
          
          {/* Main Revenue/Attendance Dashboard (Appears over Admin Building) */}
          <motion.div 
            style={{ 
              opacity: dashboardOpacity, 
              y: dashboardY,
              transform: 'translateZ(200px) rotateZ(45deg) rotateX(-60deg)' 
            }}
            className="absolute left-[50px] top-[500px] w-80 bg-white/95 backdrop-blur-3xl border border-white rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.2)] p-6"
          >
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <div className="font-bold text-slate-900">Attendance Logged</div>
                <div className="text-xs text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Sync
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-sm text-slate-500 font-medium">Campus Presence</span>
                <span className="text-2xl font-bold text-slate-900">98%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-vision-cyan to-vision-blueGlow" initial={{ width: "0%" }} whileInView={{ width: "98%" }} transition={{ duration: 1, delay: 0.2 }} />
              </div>
            </div>
          </motion.div>

          {/* Parent Notification (Appears hovering top right) */}
          <motion.div 
            style={{ 
              opacity: notifOpacity,
              transform: 'translateZ(300px) rotateZ(45deg) rotateX(-60deg)' 
            }}
            className="absolute left-[700px] top-[100px] w-64 bg-slate-900/95 backdrop-blur-3xl border border-slate-800 rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.3)] p-4 flex gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-vision-cyan/20 flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5 text-vision-cyan" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white text-sm">SchoolOS App</span>
              </div>
              <p className="text-slate-300 text-xs font-medium leading-relaxed">
                Alex has safely arrived at campus. AI face scan verified.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
