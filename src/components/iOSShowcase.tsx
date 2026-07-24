import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone } from 'lucide-react';

export const IOSShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [20, 0]);

  return (
    <section ref={containerRef} className="relative w-full py-32 overflow-hidden perspective-[2000px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-slate-200/50 backdrop-blur-xl mb-6 shadow-sm"
          >
            <Smartphone className="w-4 h-4 text-vision-blueGlow" />
            <span className="text-sm font-semibold text-slate-700">Native Mobile App</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6"
          >
            Your school in your <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-blueGlow to-vision-cyan">pocket.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto font-light"
          >
            Native experiences for iOS, iPadOS, and VisionOS. Parents, teachers, and admins stay connected.
          </motion.p>
        </div>

        <motion.div 
          style={{ scale, y, rotateX, transformPerspective: 2000 }}
          className="relative w-full flex justify-center z-10 mt-12"
        >
          {/* iPad Pro Mockup */}
          <div className="relative w-[90%] md:w-[70%] aspect-[4/3] rounded-[2.5rem] p-4 bg-white/60 border border-slate-200/50 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.05)] flex items-center justify-center overflow-hidden">
            {/* Inner Screen */}
            <div className="w-full h-full rounded-[2rem] bg-white border border-slate-200 relative overflow-hidden flex shadow-inner">
              {/* Sidebar */}
              <div className="w-1/4 h-full bg-slate-50/50 border-r border-slate-200/50 p-6 flex flex-col gap-4 hidden sm:flex">
                <div className="w-full h-10 rounded-xl bg-slate-200/50 mb-8" />
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full h-8 rounded-lg bg-slate-100/50" />
                ))}
              </div>
              {/* Main Area */}
              <div className="flex-1 p-8 flex flex-col gap-6 relative">
                <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#3B82F6_50%,transparent_100%)] opacity-[0.03] animate-spin-slow pointer-events-none" />
                <div className="w-1/3 h-8 rounded-lg bg-slate-100 z-10" />
                <div className="grid grid-cols-2 gap-6 z-10">
                  <div className="h-32 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm" />
                  <div className="h-32 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm" />
                </div>
                <div className="flex-1 rounded-2xl bg-gradient-to-t from-vision-cyan/10 to-transparent border border-slate-200 z-10" />
              </div>
            </div>
          </div>

          {/* iPhone Mockup (Overlapping) */}
          <div className="absolute -bottom-10 -right-4 md:-right-10 w-[40%] md:w-[25%] aspect-[1/2] rounded-[3rem] p-3 bg-white/80 border border-slate-200/60 backdrop-blur-2xl shadow-[0_40px_80px_rgba(0,0,0,0.1)] z-20">
            <div className="w-full h-full rounded-[2.5rem] bg-white border border-slate-200 relative overflow-hidden shadow-inner">
               {/* Dynamic Island */}
               <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1/3 h-5 rounded-full bg-slate-900 z-30 shadow-sm" />
               {/* App Content */}
               <div className="w-full h-full p-4 pt-12 flex flex-col gap-4 relative bg-slate-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-vision-blueGlow/5 to-transparent z-0 pointer-events-none" />
                  <div className="w-16 h-16 rounded-full bg-white mx-auto z-10 mb-4 shadow-sm border border-slate-100" />
                  <div className="w-3/4 h-6 rounded-md bg-white mx-auto z-10 shadow-sm border border-slate-100" />
                  <div className="w-1/2 h-4 rounded-md bg-slate-200/50 mx-auto z-10 mb-6" />
                  <div className="flex-1 rounded-3xl bg-white border border-slate-100 z-10 p-4 shadow-sm">
                    <div className="w-full h-1/2 border-b border-slate-100" />
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
