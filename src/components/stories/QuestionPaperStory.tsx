import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Sparkles, FileText, Printer, ChevronDown } from 'lucide-react';

export const QuestionPaperStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll Progress mappings (0 to 1 over 400vh)
  
  // Step 1: Bank Node activates (0 - 0.2)
  const bankGlow = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 0]);
  const particle1Y = useTransform(scrollYProgress, [0.1, 0.3], [0, 150]);
  const particle1Opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.3], [0, 1, 1, 0]);

  // Step 2: AI Core Processing (0.3 - 0.5)
  const aiCoreScale = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [1, 1.2, 1.2, 1]);
  const aiCoreRotate = useTransform(scrollYProgress, [0.3, 0.5], [0, 360]);
  const aiGlow = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0]);
  
  const particle2Y = useTransform(scrollYProgress, [0.5, 0.7], [0, 150]);
  const particle2Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);

  // Step 3: Paper Generation & PDF (0.7 - 0.9)
  const paperY = useTransform(scrollYProgress, [0.65, 0.75], [50, 0]);
  const paperOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const paperScale = useTransform(scrollYProgress, [0.75, 0.85], [1, 1.1]);

  // Step 4: Printer Action (0.85 - 1.0)
  const printGlow = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-transparent">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden perspective-[2000px]">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_60%)] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 flex-row-reverse">
          
          {/* Right Text Story Area (Reverse order on desktop to balance layout) */}
          <div className="space-y-6 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200/50 backdrop-blur-xl shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-vision-purple" />
              <span className="text-sm font-semibold text-slate-700 tracking-wide">AI Question Generator</span>
            </motion.div>
            
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.05]">
              Generate exams <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-purple to-pink-500">in seconds.</span>
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-lg leading-relaxed">
              Watch as millions of data points from your Question Bank flow into the AI Core. Instantly generating balanced, blueprint-aligned question papers ready for export and print.
            </p>
          </div>

          {/* Left Visual Story Area (Pipeline) */}
          <div className="relative h-[700px] w-full max-w-[500px] mx-auto flex flex-col items-center justify-between py-10 lg:order-1">
            
            {/* Background Line Track */}
            <div className="absolute top-20 bottom-20 left-1/2 -translate-x-1/2 w-1.5 bg-slate-100 rounded-full z-0 shadow-inner" />

            {/* 1. Question Bank Node */}
            <div className="relative z-10">
              <motion.div style={{ opacity: bankGlow }} className="absolute inset-0 bg-vision-cyan blur-xl rounded-full mix-blend-multiply" />
              <div className="w-24 h-24 rounded-[2rem] bg-white border border-slate-200 flex items-center justify-center shadow-lg relative z-10">
                <Database className="w-10 h-10 text-slate-600" />
              </div>
              
              {/* Particle 1 */}
              <motion.div 
                style={{ y: particle1Y, opacity: particle1Opacity }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-8 bg-gradient-to-b from-vision-cyan to-transparent rounded-full blur-[2px]"
              />
            </div>

            {/* Down Arrow Indicator */}
            <ChevronDown className="w-6 h-6 text-slate-300 relative z-10" />

            {/* 2. AI Core Node */}
            <div className="relative z-10">
              <motion.div style={{ opacity: aiGlow }} className="absolute inset-[-20px] bg-vision-purple blur-2xl rounded-full mix-blend-multiply opacity-50" />
              <motion.div 
                style={{ scale: aiCoreScale }}
                className="w-32 h-32 rounded-full p-[2px] bg-gradient-to-tr from-vision-cyan via-vision-purple to-pink-500 shadow-[0_0_40px_rgba(139,92,246,0.3)] relative z-10"
              >
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                  <motion.div style={{ rotate: aiCoreRotate }} className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(139,92,246,0.2)_360deg)]" />
                  <Sparkles className="w-12 h-12 text-vision-purple relative z-10" />
                </div>
              </motion.div>

              {/* Particle 2 */}
              <motion.div 
                style={{ y: particle2Y, opacity: particle2Opacity }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-8 bg-gradient-to-b from-vision-purple to-transparent rounded-full blur-[2px]"
              />
            </div>

            <ChevronDown className="w-6 h-6 text-slate-300 relative z-10" />

            {/* 3. Generated Paper & Print Node */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div 
                style={{ y: paperY, opacity: paperOpacity, scale: paperScale }}
                className="w-40 h-52 bg-white rounded-xl border border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-4 flex flex-col gap-3 relative z-20 mb-[-20px]"
              >
                <div className="w-full h-4 bg-slate-100 rounded-md" />
                <div className="w-3/4 h-3 bg-slate-100 rounded-md" />
                <div className="flex-1 w-full border border-slate-100 rounded-md p-2 flex flex-col gap-2 mt-2">
                   <div className="w-full h-2 bg-slate-200 rounded-full" />
                   <div className="w-5/6 h-2 bg-slate-100 rounded-full" />
                   <div className="w-full h-2 bg-slate-200 rounded-full mt-2" />
                </div>
                <div className="absolute inset-0 border-2 border-vision-blueGlow rounded-xl opacity-50" />
              </motion.div>

              {/* Printer Receiver */}
              <div className="w-56 h-16 bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center gap-4 relative z-30 overflow-hidden">
                <motion.div style={{ opacity: printGlow }} className="absolute inset-0 bg-gradient-to-r from-vision-cyan/20 to-vision-blueGlow/20" />
                <Printer className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-sm tracking-wide">READY TO PRINT</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
