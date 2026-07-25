import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, User, Bell, Fingerprint, ShieldCheck } from 'lucide-react';

export const AttendanceStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll Progress mappings (0 to 1 over 300vh)
  
  // 1. Scanner Laser sweeps down (0.1 to 0.5)
  const laserY = useTransform(scrollYProgress, [0.1, 0.5], [0, 400]);
  const laserOpacity = useTransform(scrollYProgress, [0.05, 0.1, 0.5, 0.55], [0, 1, 1, 0]);

  // 2. Data Particles shoot out (0.4 to 0.6)
  const particlePathProgress = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "100%"]);
  const particleOpacity = useTransform(scrollYProgress, [0.35, 0.4, 0.6, 0.65], [0, 1, 1, 0]);

  // 3. UI Dashboard appears (0.5 to 0.7)
  const dashboardY = useTransform(scrollYProgress, [0.5, 0.6], [50, 0]);
  const dashboardOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  // 4. Push Notification appears (0.6 to 0.8)
  const notifX = useTransform(scrollYProgress, [0.6, 0.7], [100, 0]);
  const notifOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  // Abstract Face Nodes (Glowing dots inside the face)
  const faceNodes = [
    { cx: 200, cy: 100 },
    { cx: 240, cy: 140 },
    { cx: 160, cy: 150 },
    { cx: 280, cy: 180 },
    { cx: 200, cy: 220 },
    { cx: 140, cy: 260 },
    { cx: 260, cy: 280 },
    { cx: 220, cy: 320 },
    { cx: 180, cy: 360 }
  ];

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-transparent">
      
      {/* Sticky Container for the Fullscreen 2D Scene */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Background Ambient Depth */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_60%)] rounded-full blur-[80px]" />
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_60%)] rounded-full blur-[80px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.06)_0%,transparent_60%)] rounded-full blur-[80px]" />
        </div>

        {/* Text Header */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50 text-center w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-slate-200/50 shadow-sm backdrop-blur-xl mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-vision-blueGlow" />
            <span className="text-sm font-bold text-slate-800 tracking-wider uppercase">Biometric Secure Attendance</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tighter">
            Zero-Touch Attendance.
          </h2>
        </div>

        {/* ------------------------------------------------ */}
        {/* THE MAIN 2D SCENE */}
        {/* ------------------------------------------------ */}
        <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center scale-[0.5] sm:scale-75 md:scale-100 origin-center mt-20 md:mt-0">
          
          {/* CENTER: The Glowing Abstract Face/Biometric Core */}
          <div className="relative w-[400px] h-[400px] z-10 flex items-center justify-center">
            
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 400">
              <defs>
                {/* Removed slow SVG glow filter for performance */}
                <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.1)" />
                  <stop offset="50%" stopColor="rgba(59,130,246,0.5)" />
                  <stop offset="100%" stopColor="rgba(139,92,246,0.1)" />
                </linearGradient>
              </defs>

              {/* Abstract Face Profile Path */}
              <path 
                d="M 200 20 C 300 20 380 100 380 200 C 380 280 320 350 240 370 C 200 380 180 340 180 300 C 180 280 140 280 120 260 C 100 240 120 200 120 200 C 120 200 80 180 80 140 C 80 80 120 20 200 20 Z" 
                fill="none" 
                stroke="rgba(6,182,212,0.15)" 
                strokeWidth="2" 
                strokeDasharray="4 8"
                className="animate-[spin_60s_linear_infinite] origin-center"
              />

              {/* Internal Neural Connections (Connecting the nodes) */}
              {faceNodes.map((node, i) => (
                faceNodes.slice(i + 1, i + 3).map((target, j) => (
                  <line 
                    key={`line-${i}-${j}`}
                    x1={node.cx} y1={node.cy} x2={target.cx} y2={target.cy}
                    stroke="rgba(59,130,246,0.2)"
                    strokeWidth="1"
                  />
                ))
              ))}

              {/* Glowing Nodes */}
              {faceNodes.map((node, i) => (
                <circle 
                  key={`node-${i}`}
                  cx={node.cx} cy={node.cy} r="4"
                  fill="#06b6d4"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}

              {/* Data Export Bezier Curves (Left to Dashboard, Right to Phone) */}
              <path id="path-left" d="M 100 200 C -50 200 -50 100 -200 100" fill="none" stroke="url(#lineGlow)" strokeWidth="2" strokeDasharray="4 4" />
              <path id="path-right" d="M 300 200 C 450 200 450 300 600 300" fill="none" stroke="url(#lineGlow)" strokeWidth="2" strokeDasharray="4 4" />

              {/* Data Particles traveling along paths (Scroll Driven) */}
              <motion.circle 
                r="6" fill="#06B6D4"
                style={{ offsetPath: `path('M 100 200 C -50 200 -50 100 -200 100')`, offsetDistance: particlePathProgress, opacity: particleOpacity }}
                className="will-change-transform shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              />
              <motion.circle 
                r="6" fill="#8B5CF6"
                style={{ offsetPath: `path('M 300 200 C 450 200 450 300 600 300')`, offsetDistance: particlePathProgress, opacity: particleOpacity }}
                className="will-change-transform shadow-[0_0_15px_rgba(139,92,246,0.8)]"
              />

            </svg>

            {/* The Horizontal Scanner Laser (Scroll Driven) */}
            <motion.div 
              style={{ y: laserY, opacity: laserOpacity }}
              className="absolute top-0 left-[-50px] w-[500px] h-[2px] bg-vision-cyan shadow-[0_0_20px_2px_rgba(6,182,212,0.8)] z-20 flex justify-center will-change-transform"
            >
              {/* Laser gradient tail */}
              <div className="absolute bottom-full w-full h-[60px] bg-gradient-to-t from-vision-cyan/30 to-transparent" />
            </motion.div>

            {/* Fingerprint overlay (Fades in slightly during scan) */}
            <Fingerprint className="absolute inset-0 w-full h-full text-vision-cyan/5 p-10 animate-pulse pointer-events-none" strokeWidth={1} />

          </div>

          {/* ------------------------------------------------ */}
          {/* LEFT SIDE: Live Dashboard */}
          {/* ------------------------------------------------ */}
          <motion.div 
            style={{ y: dashboardY, opacity: dashboardOpacity }}
            className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-20 top-[5%] lg:top-1/4 w-72 lg:w-80 bg-white/90 backdrop-blur-xl border border-white rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.1)] p-6 z-20 will-change-transform"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <div className="font-bold text-slate-900 leading-tight">Live Log</div>
                <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Synced
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "Alex Johnson", grade: "Grade 10-A", time: "08:14 AM" },
                { name: "Sarah Williams", grade: "Grade 11-B", time: "08:14 AM" },
                { name: "Michael Chen", grade: "Grade 9-C", time: "08:15 AM" }
              ].map((student, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                    <User className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-800">{student.name}</div>
                    <div className="text-xs text-slate-500">{student.grade}</div>
                  </div>
                  <div className="text-xs font-bold text-slate-400">{student.time}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Present</span>
                <span className="text-xl font-bold text-vision-cyan">842</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-vision-cyan to-vision-blueGlow" initial={{ width: "0%" }} whileInView={{ width: "84%" }} transition={{ duration: 1, delay: 0.5 }} />
              </div>
            </div>
          </motion.div>

          {/* ------------------------------------------------ */}
          {/* RIGHT SIDE: Push Notification / Parent Phone */}
          {/* ------------------------------------------------ */}
          <motion.div 
            style={{ x: notifX, opacity: notifOpacity }}
            className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-20 top-[60%] lg:top-1/2 w-72 lg:w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.3)] p-5 z-20 will-change-transform"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vision-blueGlow to-vision-cyan flex items-center justify-center mb-4 shadow-[0_10px_20px_rgba(6,182,212,0.3)]">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div className="mb-2">
              <span className="font-bold text-white text-lg">SchoolOS</span>
              <span className="text-slate-400 text-xs ml-2">Just now</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              <strong className="text-white font-semibold">Alex Johnson</strong> has safely arrived at school. Identity verified via AI Gate.
            </p>
            <div className="w-full h-10 bg-slate-800 rounded-xl flex items-center justify-center text-vision-cyan text-sm font-bold cursor-pointer hover:bg-slate-700 transition-colors">
              View Dashboard
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
