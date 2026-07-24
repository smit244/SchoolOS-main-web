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
    <section className="relative w-full py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
            className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-6"
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
            Beautiful native apps for parents, teachers, and students. Push notifications, instant fee payments, and live tracking.
          </motion.p>
        </div>

        {/* Cinematic Device Mockup */}
        <div className="relative max-w-5xl mx-auto mt-20 perspective-[2000px]">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-vision-cyan/20 to-vision-purple/20 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, rotateX: 10, y: 100 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[300px] h-[600px] mx-auto rounded-[3rem] border-[8px] border-slate-100 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.1)] overflow-hidden"
          >
             {/* Dynamic Island */}
             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1/3 h-5 rounded-full bg-slate-900 z-30" />
             {/* App Content */}
             <div className="w-full h-full p-4 pt-12 flex flex-col gap-4 relative">
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
