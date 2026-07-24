import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Banknote, MapPin } from 'lucide-react';

export const FeatureDeepDive: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      title: "Biometric & Face ID",
      desc: "Live attendance with military-grade Face Recognition and RFID.",
      icon: ShieldCheck,
      color: "from-vision-cyan to-vision-blueGlow"
    },
    {
      title: "Instant Fee Settlement",
      desc: "Razorpay, Stripe & UPI with zero-delay auto reconciliation.",
      icon: Banknote,
      color: "from-vision-purple to-pink-500"
    },
    {
      title: "Live GPS Tracking",
      desc: "Real-time transport tracking for parents via the mobile app.",
      icon: MapPin,
      color: "from-emerald-400 to-vision-cyan"
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full max-w-7xl mx-auto px-4 py-32 overflow-hidden">
      
      <motion.div 
        style={{ opacity }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        
        {/* Left Text Content */}
        <div className="space-y-8 z-10">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md inline-block">
            <span className="text-sm font-medium text-vision-cyan tracking-wide uppercase">Core Intelligence</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-white leading-[1.1]">
            Intelligence <br/>
            <span className="text-vision-textMuted">built into every pixel.</span>
          </h2>

          <p className="text-lg text-vision-textMuted font-light max-w-lg leading-relaxed">
            SchoolOS isn't just software. It's an intelligent ecosystem that thinks, adapts, and automates your entire institution.
          </p>

          <div className="flex flex-col gap-6 pt-4">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex items-start gap-4"
              >
                <div className={`mt-1 w-10 h-10 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center shrink-0`}>
                  <feat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">{feat.title}</h4>
                  <p className="text-sm text-vision-textMuted font-light mt-1">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Parallax Mockups */}
        <div className="relative h-[600px] w-full hidden lg:block z-0 perspective-[1000px]">
          {/* Card 1 */}
          <motion.div 
            style={{ y: y1, rotateY: -15, rotateX: 5 }}
            className="absolute top-10 right-10 w-80 h-96 glass-panel rounded-3xl p-6 shadow-2xl z-20 border border-white/20"
          >
            <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-vision-cyan/20 to-transparent mb-4 flex items-center justify-center">
              <ShieldCheck className="w-12 h-12 text-vision-cyan opacity-80" />
            </div>
            <div className="w-3/4 h-4 bg-white/10 rounded mb-3" />
            <div className="w-1/2 h-4 bg-white/5 rounded mb-8" />
            <div className="flex gap-2">
               <div className="w-10 h-10 rounded-full bg-white/10" />
               <div className="w-10 h-10 rounded-full bg-white/10" />
               <div className="w-10 h-10 rounded-full bg-white/10" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            style={{ y: y2, rotateY: -25, rotateX: -5 }}
            className="absolute bottom-10 left-10 w-72 h-80 glass-panel rounded-3xl p-6 shadow-2xl z-10 border border-white/10"
          >
            <div className="w-full h-full rounded-2xl border border-white/5 bg-white/5 relative overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[bg-pan_3s_linear_infinite]" />
               <div className="absolute bottom-4 left-4 w-32 h-6 bg-vision-purple/40 rounded-full blur-md" />
            </div>
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-vision-cyan/10 rounded-full blur-[100px] -z-10" />
        </div>

      </motion.div>

    </section>
  );
};
