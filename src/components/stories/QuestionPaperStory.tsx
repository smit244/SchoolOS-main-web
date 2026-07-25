import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Sparkles, Wand2, Lock, ShieldCheck } from 'lucide-react';

export const QuestionPaperStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll Progress mappings (0 to 1 over 300vh)

  // 1. Vortex Suck In (0.1 to 0.4)
  const particleScale = useTransform(scrollYProgress, [0.1, 0.4], [1, 0]);
  const particleRotate = useTransform(scrollYProgress, [0.1, 0.4], [0, 720]);
  const vortexGlow = useTransform(scrollYProgress, [0.1, 0.3, 0.4, 0.5], [0, 1, 1, 0]);

  // 2. Blueprint Formation (0.4 to 0.6)
  const blueprintOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const blueprintScale = useTransform(scrollYProgress, [0.35, 0.45, 0.6], [0, 1.2, 1]);
  
  // 3. Blueprint Stamping to PDF (0.6 to 0.8)
  const blueprintX = useTransform(scrollYProgress, [0.6, 0.75], [0, 400]);
  const blueprintY = useTransform(scrollYProgress, [0.6, 0.75], [0, 100]);
  
  const pdfOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const stampFlash = useTransform(scrollYProgress, [0.7, 0.75, 0.8], [0, 1, 0]);
  const pdfScale = useTransform(scrollYProgress, [0.75, 0.85], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-transparent">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Deep ambient background (Optimized) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_60%)] rounded-full blur-[80px]" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05)_0%,transparent_60%)] rounded-full blur-[80px]" />
        </div>

        {/* Text Header */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50 text-center w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-slate-200/50 shadow-sm backdrop-blur-xl mb-4"
          >
            <Wand2 className="w-4 h-4 text-vision-purple" />
            <span className="text-sm font-bold text-slate-800 tracking-wider uppercase">Bcrypt Secure Paper Generation</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tighter">
            The Knowledge Vortex.
          </h2>
        </div>

        {/* ------------------------------------------------ */}
        {/* THE MAIN 2D SCENE */}
        {/* ------------------------------------------------ */}
        <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center scale-[0.45] sm:scale-75 md:scale-100 origin-center mt-20 md:mt-0">
          
          {/* LEFT SIDE: The SVG Vortex */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-32 top-[10%] lg:top-1/2 -translate-y-1/2 w-[400px] h-[400px]">
             
             {/* Vortex Base Rings (Optimized) */}
             <motion.div style={{ opacity: vortexGlow }} className="absolute inset-0 bg-vision-purple/30 blur-[40px] rounded-full will-change-transform" />
             
             <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
               <defs>
                 <linearGradient id="vortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="rgba(139,92,246,0.8)" />
                   <stop offset="100%" stopColor="rgba(236,72,153,0.2)" />
                 </linearGradient>
               </defs>
               
               {/* Spinning Swirls */}
               <motion.g 
                 style={{ rotate: particleRotate, originX: "200px", originY: "200px" }}
                 className="will-change-transform"
               >
                 {[...Array(8)].map((_, i) => (
                   <path 
                     key={i}
                     d={`M 200 200 Q ${200 + Math.cos(i*45) * 300} ${200 + Math.sin(i*45) * 100} ${200 + Math.cos(i*45) * 400} ${200 + Math.sin(i*45) * 400}`}
                     fill="none" 
                     stroke="url(#vortexGrad)" 
                     strokeWidth={2}
                     className="opacity-40"
                   />
                 ))}
               </motion.g>
               
               {/* Sucked-in Particles (Question Bank Data) */}
               <motion.g style={{ scale: particleScale, rotate: particleRotate, originX: "200px", originY: "200px" }} className="will-change-transform">
                 {['?', 'A', 'B', 'C', 'x', '=', '+', 'Q', '1', '2', '?', 'A', 'B', 'C', 'x', '=', '+', 'Q', '1', '2', '?', 'A', 'B', 'C', 'x', '=', '+', 'Q', '1', '2'].map((char, i) => (
                   <text 
                     key={`char-${i}`}
                     x={200 + Math.cos(i * 12) * (100 + Math.random() * 150)}
                     y={200 + Math.sin(i * 12) * (100 + Math.random() * 150)}
                     fill={i % 2 === 0 ? "#8B5CF6" : "#EC4899"}
                     fontSize={Math.random() * 14 + 10}
                     fontWeight="bold"
                     className="animate-pulse drop-shadow-md"
                     style={{ animationDelay: `${Math.random()}s` }}
                   >
                     {char}
                   </text>
                 ))}
               </motion.g>
             </svg>
             
             {/* Center Black Hole Core (Secure Encrypted Core) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-slate-900 rounded-full shadow-[inset_0_0_20px_rgba(139,92,246,0.8),0_0_40px_rgba(139,92,246,0.6)] flex flex-col items-center justify-center">
               <ShieldCheck className="w-5 h-5 text-emerald-400 mb-0.5" />
               <span className="text-[6px] font-bold text-emerald-400 tracking-widest uppercase">Encrypted</span>
             </div>
          </div>

          {/* CENTER: The Glowing Blueprint Grid */}
          <motion.div 
            style={{ 
              opacity: blueprintOpacity, 
              scale: blueprintScale,
              x: blueprintX,
              y: blueprintY
            }}
            className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[300px] top-[40%] lg:top-[150px] w-48 h-48 z-30 will-change-transform"
          >
            {/* The Blueprint Design */}
            <div className="w-full h-full border-2 border-vision-purple bg-vision-purple/10 rounded-2xl p-3 shadow-[0_0_50px_rgba(139,92,246,0.5)] backdrop-blur-md relative overflow-hidden">
               {/* Glowing Grid inside blueprint */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.4)_1px,transparent_1px)] bg-[size:20px_20px]" />
               
               <div className="absolute inset-0 bg-gradient-to-tr from-vision-purple/40 to-transparent mix-blend-overlay" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                 <Lock className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)] mb-1" />
                 <span className="text-[10px] font-bold text-white tracking-widest uppercase drop-shadow-md">Secure Blueprint</span>
               </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The PDF Document Output */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-40 top-[70%] lg:top-1/2 -translate-y-1/2 w-72 h-96 z-20">
             
             {/* The Blank Document */}
             <motion.div 
               style={{ opacity: pdfOpacity, scale: pdfScale }}
               className="w-full h-full bg-white rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-slate-100 p-6 flex flex-col gap-4 relative overflow-hidden will-change-transform"
             >
                {/* Security Watermark */}
                <Lock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-slate-50 rotate-[-15deg] pointer-events-none" />

                <div className="flex items-center gap-3 border-b border-slate-100 pb-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">FINAL_EXAM_2026.pdf</div>
                    <div className="text-[9px] text-emerald-500 font-bold uppercase tracking-widest flex items-center gap-1 mt-0.5">
                      <ShieldCheck className="w-3 h-3" /> Bcrypt Encryption
                    </div>
                  </div>
                </div>
                
                {/* Lines of text that appear (Simulated Questions) */}
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-2 relative z-10">
                    <div className="w-1/4 h-2 bg-slate-200 rounded-full" />
                    <div className="w-full h-2 bg-slate-100 rounded-full" />
                    <div className="w-5/6 h-2 bg-slate-50 rounded-full" />
                  </div>
                ))}
                
                {/* STAMP FLASH EFFECT */}
                <motion.div 
                  style={{ opacity: stampFlash }}
                  className="absolute inset-0 bg-vision-purple/20 backdrop-blur-sm flex items-center justify-center"
                >
                   <div className="w-full h-full border-4 border-vision-purple m-4 rounded-xl shadow-[inset_0_0_30px_rgba(139,92,246,0.5)]" />
                </motion.div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
