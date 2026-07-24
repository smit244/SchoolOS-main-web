import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
    <section ref={containerRef} className="relative w-full max-w-7xl mx-auto px-4 py-32 overflow-hidden perspective-[2000px]">
      
      <div className="text-center mb-24 relative z-20">
        <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6">
          App everywhere. <br/>
          <span className="text-vision-cyan">Compromise nowhere.</span>
        </h2>
        <p className="text-xl text-vision-textMuted font-light max-w-2xl mx-auto">
          Native experiences for iOS, iPadOS, and VisionOS. Parents, teachers, and admins stay connected.
        </p>
      </div>

      <motion.div 
        style={{ scale, y, rotateX, transformPerspective: 2000 }}
        className="relative w-full flex justify-center z-10"
      >
        {/* iPad Pro Mockup */}
        <div className="relative w-[90%] md:w-[70%] aspect-[4/3] rounded-[2.5rem] p-4 bg-white/5 border border-white/20 glass-panel shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Inner Screen */}
          <div className="w-full h-full rounded-[2rem] bg-black border border-white/10 relative overflow-hidden flex">
            {/* Sidebar */}
            <div className="w-1/4 h-full bg-white/5 border-r border-white/10 p-6 flex flex-col gap-4 hidden sm:flex">
              <div className="w-full h-10 rounded-xl bg-white/10 mb-8" />
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-8 rounded-lg bg-white/5" />
              ))}
            </div>
            {/* Main Area */}
            <div className="flex-1 p-8 flex flex-col gap-6 relative">
              <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#0033ff_50%,#000_100%)] opacity-20 animate-spin-slow pointer-events-none mix-blend-screen" />
              <div className="w-1/3 h-8 rounded-lg bg-white/10 z-10" />
              <div className="grid grid-cols-2 gap-6 z-10">
                <div className="h-32 rounded-2xl bg-white/10 backdrop-blur-md border border-white/5" />
                <div className="h-32 rounded-2xl bg-white/10 backdrop-blur-md border border-white/5" />
              </div>
              <div className="flex-1 rounded-2xl bg-gradient-to-t from-vision-cyan/20 to-transparent border border-white/5 z-10" />
            </div>
          </div>
        </div>

        {/* iPhone Mockup (Overlapping) */}
        <div className="absolute -bottom-10 -right-4 md:-right-10 w-[40%] md:w-[25%] aspect-[1/2] rounded-[3rem] p-3 bg-white/5 border border-white/20 glass-panel shadow-2xl z-20">
          <div className="w-full h-full rounded-[2.5rem] bg-black border border-white/10 relative overflow-hidden">
             {/* Dynamic Island */}
             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1/3 h-5 rounded-full bg-black z-30" />
             {/* App Content */}
             <div className="w-full h-full p-4 pt-12 flex flex-col gap-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-vision-purple/30 to-black z-0 pointer-events-none" />
                <div className="w-16 h-16 rounded-full bg-white/10 mx-auto z-10 mb-4" />
                <div className="w-3/4 h-6 rounded-md bg-white/10 mx-auto z-10" />
                <div className="w-1/2 h-4 rounded-md bg-white/5 mx-auto z-10 mb-6" />
                <div className="flex-1 rounded-3xl bg-white/5 border border-white/10 z-10 p-4">
                  <div className="w-full h-1/2 border-b border-white/10" />
                </div>
             </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};
