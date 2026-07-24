import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Lock, Unlock, IndianRupee } from 'lucide-react';

export const FeeManagementStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll Progress mappings (0 to 1 over 300vh)

  // 1. Phone Appears & Drops Payment (0.1 to 0.3)
  const phoneY = useTransform(scrollYProgress, [0.1, 0.25], [-100, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.45], [0, 1, 1, 0]);
  const paymentDrop = useTransform(scrollYProgress, [0.2, 0.3], [0, 100]);

  // 2. Vault Rings Spin & Lock (0.3 to 0.6)
  const ring1Rotate = useTransform(scrollYProgress, [0.3, 0.6], [0, 720]);
  const ring2Rotate = useTransform(scrollYProgress, [0.3, 0.6], [0, -720]);
  const lockOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.6], [0, 1, 1, 0]);
  const ringColor = useTransform(scrollYProgress, [0.4, 0.5], ["rgba(255,255,255,0.1)", "rgba(16,185,129,0.5)"]);
  const ringGlow = useTransform(scrollYProgress, [0.4, 0.5], ["drop-shadow(0 0 0px rgba(16,185,129,0))", "drop-shadow(0 0 20px rgba(16,185,129,1))"]);

  // 3. Ring Split & Burst (0.6 to 0.7)
  const ringScale = useTransform(scrollYProgress, [0.6, 0.7], [1, 3]);
  const ringFade = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);

  // 4. Massive Revenue Graph Draws across screen (0.7 to 0.9)
  const graphDraw = useTransform(scrollYProgress, [0.65, 0.9], [0, 1]);
  const graphOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-transparent">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-slate-950 text-white">
        
        {/* Background Dark Ambient Depth */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_60%)] rounded-full blur-[100px]" />
        </div>

        {/* Text Header (White text for dark mode) */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50 text-center w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 shadow-sm backdrop-blur-xl mb-4"
          >
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-bold text-white tracking-wider uppercase">Zero-Trust Payments</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">
            The Revenue Burst.
          </h2>
        </div>

        {/* ------------------------------------------------ */}
        {/* THE MAIN 2D SCENE */}
        {/* ------------------------------------------------ */}
        <div className="relative w-full max-w-7xl h-[600px] flex items-center justify-center">
          
          {/* CENTER: The Mobile Phone (Drops the payment) */}
          <motion.div 
            style={{ y: phoneY, opacity: phoneOpacity }}
            className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-60 bg-black rounded-[2rem] border-4 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-between p-4 z-30"
          >
             <div className="w-12 h-1 bg-slate-800 rounded-full mb-4" />
             <Smartphone className="w-8 h-8 text-slate-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
             
             {/* Payment Payload dropping from phone */}
             <motion.div 
               style={{ y: paymentDrop }}
               className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.6)] absolute bottom-[-20px]"
             >
               <IndianRupee className="w-5 h-5 text-white" />
             </motion.div>
          </motion.div>

          {/* CENTER: The Vault Rings */}
          <motion.div 
            style={{ scale: ringScale, opacity: ringFade }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] flex items-center justify-center z-20"
          >
             {/* Outer Ring */}
             <motion.div 
               style={{ rotate: ring1Rotate, borderColor: ringColor, filter: ringGlow }}
               className="absolute inset-0 rounded-full border-4 border-dashed transition-colors duration-300"
             />
             {/* Inner Ring */}
             <motion.div 
               style={{ rotate: ring2Rotate, borderColor: ringColor, filter: ringGlow }}
               className="absolute inset-10 rounded-full border-[6px] border-dotted transition-colors duration-300"
             />
             {/* Core Glow */}
             <div className="absolute inset-20 rounded-full bg-emerald-500/5 blur-3xl" />
             
             {/* Lock Icon in Center */}
             <motion.div style={{ opacity: lockOpacity }} className="relative z-10">
               <Lock className="w-16 h-16 text-emerald-400" />
             </motion.div>
          </motion.div>

          {/* FULL WIDTH: The Massive Revenue Graph Burst */}
          <motion.div 
            style={{ opacity: graphOpacity }}
            className="absolute inset-0 w-full h-full flex items-center justify-center z-10 pointer-events-none"
          >
             <svg className="w-full h-full overflow-visible" viewBox="0 0 1200 600" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="burstGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="rgba(16,185,129,0)" />
                   <stop offset="20%" stopColor="rgba(16,185,129,0.8)" />
                   <stop offset="50%" stopColor="rgba(6,182,212,1)" />
                   <stop offset="80%" stopColor="rgba(16,185,129,0.8)" />
                   <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                 </linearGradient>
                 <filter id="burstGlow" x="-20%" y="-20%" width="140%" height="140%">
                   <feGaussianBlur stdDeviation="15" result="blur" />
                   <feMerge>
                     <feMergeNode in="blur" />
                     <feMergeNode in="blur" />
                     <feMergeNode in="SourceGraphic" />
                   </feMerge>
                 </filter>
               </defs>

               {/* The Drawing Line */}
               <motion.path 
                 d="M -100 500 C 100 500 200 400 300 450 C 400 500 500 200 600 250 C 700 300 800 100 900 150 C 1000 200 1100 50 1300 100"
                 fill="none" 
                 stroke="url(#burstGrad)" 
                 strokeWidth="12" 
                 strokeLinecap="round"
                 filter="url(#burstGlow)"
                 style={{ pathLength: graphDraw }}
               />
               
               {/* Background Fill (Appears after line is drawn) */}
               <motion.path 
                 d="M -100 500 C 100 500 200 400 300 450 C 400 500 500 200 600 250 C 700 300 800 100 900 150 C 1000 200 1100 50 1300 100 L 1300 600 L -100 600 Z"
                 fill="url(#burstGrad)"
                 opacity="0.1"
                 style={{ opacity: useTransform(scrollYProgress, [0.8, 0.9], [0, 0.15]) }}
               />
             </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
