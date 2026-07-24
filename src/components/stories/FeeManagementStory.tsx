import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Shield, Building2, ShieldCheck, IndianRupee } from 'lucide-react';

export const FeeManagementStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll Progress mappings (0 to 1 over 300vh)

  // 1. Phone Drops Packet (0.1 to 0.3)
  const phoneOpacity = useTransform(scrollYProgress, [0.05, 0.1, 0.9, 0.95], [0, 1, 1, 0]);
  const packetX = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 200, 200, 500]); // Moves, Stops at shield, Passes through
  const packetScale = useTransform(scrollYProgress, [0.35, 0.4, 0.5, 0.55], [1, 1.5, 1.5, 1]); // Pulses at shield

  // 2. Shield Matrix Reaction (0.35 to 0.55)
  // Shield starts blue/slate, turns red (scanning), then green (verified)
  const shieldColor = useTransform(scrollYProgress, 
    [0.3, 0.4, 0.5, 0.55], 
    ["rgba(148,163,184,0.2)", "rgba(239,68,68,0.6)", "rgba(16,185,129,0.8)", "rgba(16,185,129,0.2)"]
  );
  
  // 3. Shield Iris Opening (0.55 to 0.65)
  const shieldTopY = useTransform(scrollYProgress, [0.55, 0.65], [0, -150]);
  const shieldBottomY = useTransform(scrollYProgress, [0.55, 0.65], [0, 150]);
  const shieldOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.9], [1, 0.2, 0]);

  // 4. Bank Arrival & Ripple (0.75 to 0.9)
  const bankScale = useTransform(scrollYProgress, [0.75, 0.8], [1, 1.2]);
  const rippleScale = useTransform(scrollYProgress, [0.8, 0.9], [0, 4]);
  const rippleOpacity = useTransform(scrollYProgress, [0.8, 0.85, 0.9], [0, 1, 0]);

  // Hexagon Generator for the Shield Grid
  const hexPoints = "25,0 75,0 100,43.3 75,86.6 25,86.6 0,43.3";
  
  const topHexagons = [
    { x: 0, y: -86.6 }, { x: 75, y: -129.9 }, { x: 75, y: -43.3 }, { x: 150, y: -86.6 }, { x: 150, y: 0 }
  ];
  
  const bottomHexagons = [
    { x: 0, y: 86.6 }, { x: 75, y: 43.3 }, { x: 75, y: 129.9 }, { x: 150, y: 86.6 }, { x: 150, y: 173.2 }
  ];
  
  const centerHexagons = [
    { x: 0, y: 0 } // The one that directly blocks the path
  ];

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-transparent">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-slate-950 text-white">
        
        {/* Background Dark Ambient Depth */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_60%)] rounded-full blur-[100px]" />
          <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_60%)] rounded-full blur-[100px]" />
        </div>

        {/* Text Header */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50 text-center w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 border border-slate-700 shadow-sm backdrop-blur-xl mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-bold text-white tracking-wider uppercase">Zero-Trust Encryption</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">
            The Secure Shield.
          </h2>
        </div>

        {/* ------------------------------------------------ */}
        {/* THE MAIN 2D SCENE */}
        {/* ------------------------------------------------ */}
        <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center">
          
          {/* LEFT: Mobile Phone */}
          <motion.div 
            style={{ opacity: phoneOpacity }}
            className="absolute left-10 lg:left-32 top-1/2 -translate-y-1/2 w-48 h-80 bg-black rounded-[2.5rem] border-[6px] border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-4 flex flex-col z-20"
          >
             <div className="w-16 h-1.5 bg-slate-800 rounded-full mx-auto mb-6" />
             <div className="flex-1 border-2 border-slate-800 border-dashed rounded-xl flex items-center justify-center p-2 text-center text-slate-500 text-xs font-bold uppercase">
               Processing<br/>Payment
             </div>
          </motion.div>

          {/* THE DATA PACKET (Moves from Left -> Center -> Right) */}
          <motion.div 
            style={{ x: packetX, scale: packetScale }}
            className="absolute left-[180px] lg:left-[260px] top-1/2 -translate-y-1/2 z-40"
          >
             <div className="w-12 h-12 rounded-xl bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.8)] flex items-center justify-center relative">
                <IndianRupee className="w-6 h-6 text-white" />
                {/* Scanning rings around packet */}
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} 
                  transition={{ duration: 1.5, repeat: Infinity }} 
                  className="absolute inset-0 rounded-xl border-2 border-emerald-400" 
                />
             </div>
          </motion.div>

          {/* CENTER: The Zero-Trust Hexagon Shield Matrix */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[250px] h-[400px] z-30 flex items-center justify-center pointer-events-none">
             
             {/* Center Glow Aura of the Shield */}
             <motion.div 
               style={{ backgroundColor: shieldColor, opacity: shieldOpacity }}
               className="absolute inset-0 blur-[80px] rounded-full mix-blend-screen"
             />

             <svg className="w-[250px] h-[400px] overflow-visible" viewBox="-50 -100 300 500">
               <defs>
                 <filter id="hexGlow">
                   <feGaussianBlur stdDeviation="3" result="blur" />
                   <feMerge>
                     <feMergeNode in="blur" />
                     <feMergeNode in="SourceGraphic" />
                   </feMerge>
                 </filter>
               </defs>
               
               <g transform="translate(50, 150)">
                 {/* Top Half of Shield (Moves UP) */}
                 <motion.g style={{ y: shieldTopY, opacity: shieldOpacity }}>
                   {topHexagons.map((hex, i) => (
                     <motion.polygon 
                       key={`top-${i}`}
                       points={hexPoints}
                       fill="rgba(15,23,42,0.8)"
                       stroke={shieldColor as any}
                       strokeWidth="3"
                       filter="url(#hexGlow)"
                       transform={`translate(${hex.x}, ${hex.y})`}
                     />
                   ))}
                 </motion.g>

                 {/* Center Block (The actual gate, fades out) */}
                 <motion.g style={{ opacity: shieldOpacity }}>
                   {centerHexagons.map((hex, i) => (
                     <motion.polygon 
                       key={`center-${i}`}
                       points={hexPoints}
                       fill="rgba(15,23,42,0.8)"
                       stroke={shieldColor as any}
                       strokeWidth="4"
                       filter="url(#hexGlow)"
                       transform={`translate(${hex.x}, ${hex.y})`}
                     />
                   ))}
                   {/* Center Shield Icon */}
                   <motion.g style={{ opacity: shieldOpacity }}>
                     <foreignObject x={25} y={18} width="50" height="50">
                       <Shield className="w-12 h-12 text-slate-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                     </foreignObject>
                   </motion.g>
                 </motion.g>

                 {/* Bottom Half of Shield (Moves DOWN) */}
                 <motion.g style={{ y: shieldBottomY, opacity: shieldOpacity }}>
                   {bottomHexagons.map((hex, i) => (
                     <motion.polygon 
                       key={`bottom-${i}`}
                       points={hexPoints}
                       fill="rgba(15,23,42,0.8)"
                       stroke={shieldColor as any}
                       strokeWidth="3"
                       filter="url(#hexGlow)"
                       transform={`translate(${hex.x}, ${hex.y})`}
                     />
                   ))}
                 </motion.g>
               </g>
             </svg>
          </div>

          {/* RIGHT: School Bank Verification Node */}
          <div className="absolute right-10 lg:right-32 top-1/2 -translate-y-1/2 w-48 h-48 z-10 flex items-center justify-center">
             
             {/* Giant Verification Ripple */}
             <motion.div 
               style={{ scale: rippleScale, opacity: rippleOpacity }}
               className="absolute inset-0 rounded-full border-[8px] border-emerald-500 shadow-[0_0_60px_rgba(16,185,129,0.8)]"
             />

             {/* The Bank Node */}
             <motion.div 
               style={{ scale: bankScale }}
               className="w-32 h-32 rounded-3xl bg-slate-900 border border-slate-700 shadow-[inset_0_0_40px_rgba(16,185,129,0.2)] flex flex-col items-center justify-center relative overflow-hidden"
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-vision-cyan" />
                <Building2 className="w-10 h-10 text-emerald-400 mb-2" />
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">School Bank</span>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
