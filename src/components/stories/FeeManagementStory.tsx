import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CreditCard, Smartphone, ShieldCheck, Receipt, LineChart } from 'lucide-react';

export const FeeManagementStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll Progress mappings (0 to 1 over 400vh)
  
  // Step 1: Phone / Payment initiation (0 - 0.25)
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 0.9], [0, 1, 1, 0]);
  const paymentBeamScale = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  // Step 2: Secure Gateway Spin (0.35 - 0.5)
  const gatewayOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.8, 0.9], [0, 1, 1, 0]);
  const gatewayRotate = useTransform(scrollYProgress, [0.35, 0.5], [0, 360]);

  // Step 3: Receipt Drop (0.5 - 0.7)
  const receiptY = useTransform(scrollYProgress, [0.5, 0.7], [-100, 0]);
  const receiptOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  // Step 4: Dark Dashboard & Revenue Line (0.7 - 0.9)
  const dashOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const lineDraw = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-transparent">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden perspective-[2000px]">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_60%)] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Text Story Area */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-white tracking-wide">Fee Management</span>
            </motion.div>
            
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.05]">
              Seamless payments. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-vision-cyan">Instant analytics.</span>
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-lg leading-relaxed">
              Parents pay securely through the mobile app. The transaction passes through a zero-trust gateway, instantly generating a receipt and updating the school's live revenue dashboard.
            </p>
          </div>

          {/* Right Visual Story Area */}
          <div className="relative h-[600px] w-full max-w-[600px] mx-auto flex items-center justify-center transform-style-3d overflow-visible">
            
            {/* The Premium Dark Dashboard (Background layer that illuminates later) */}
            <motion.div 
              style={{ opacity: dashOpacity }}
              className="absolute inset-0 rounded-[3rem] bg-slate-900 border border-slate-700 shadow-[0_40px_100px_rgba(0,0,0,0.3)] p-8 flex flex-col justify-between overflow-hidden"
            >
               {/* Internal Ambient Glow */}
               <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />
               <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-vision-blueGlow/20 blur-[100px] rounded-full pointer-events-none" />
               
               <div className="flex justify-between items-center relative z-10">
                 <div className="space-y-2">
                   <div className="w-24 h-4 bg-slate-800 rounded-full" />
                   <div className="w-48 h-8 bg-slate-800 rounded-md" />
                 </div>
                 <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                   <LineChart className="w-6 h-6 text-emerald-400" />
                 </div>
               </div>

               {/* Animated SVG Revenue Line */}
               <div className="flex-1 w-full mt-10 relative z-10 flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <motion.path
                      d="M 0,40 Q 20,40 30,25 T 60,15 T 100,5"
                      fill="none"
                      stroke="url(#emeraldGrad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      style={{ pathLength: lineDraw }}
                      className="filter drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                    />
                    <defs>
                      <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                    {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-white" />)}
                  </div>
               </div>
            </motion.div>

            {/* Foreground Story Elements */}
            <div className="relative z-30 flex flex-col items-center gap-6">
              
              <motion.div style={{ opacity: phoneOpacity }} className="w-20 h-36 bg-white rounded-3xl border-4 border-slate-200 shadow-xl flex items-center justify-center relative">
                 <Smartphone className="w-8 h-8 text-slate-400" />
                 <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-slate-200 rounded-full" />
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1] }} 
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute bottom-4 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                 >
                   <CreditCard className="w-5 h-5 text-white" />
                 </motion.div>
              </motion.div>

              {/* Connecting Beam */}
              <motion.div 
                style={{ scaleY: paymentBeamScale }}
                className="w-1 h-12 bg-gradient-to-b from-emerald-500 to-vision-cyan origin-top rounded-full blur-[1px]"
              />

              {/* Secure Gateway */}
              <motion.div 
                style={{ opacity: gatewayOpacity }}
                className="relative"
              >
                 <motion.div 
                   style={{ rotate: gatewayRotate }}
                   className="w-24 h-24 rounded-full border-2 border-dashed border-vision-cyan absolute inset-0 -m-1"
                 />
                 <div className="w-22 h-22 p-5 bg-white rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center">
                   <ShieldCheck className="w-10 h-10 text-vision-cyan" />
                 </div>
              </motion.div>

              {/* Generated Receipt */}
              <motion.div 
                style={{ y: receiptY, opacity: receiptOpacity }}
                className="w-48 bg-white rounded-xl shadow-2xl p-4 flex flex-col gap-3 relative z-40 border border-slate-100"
              >
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shadow-sm">
                   <Receipt className="w-4 h-4 text-emerald-600" />
                 </div>
                 <div className="w-full h-2 bg-slate-100 rounded-full mt-3" />
                 <div className="w-3/4 h-2 bg-slate-100 rounded-full" />
                 <div className="border-t border-dashed border-slate-200 my-1" />
                 <div className="flex justify-between">
                   <div className="w-1/2 h-4 bg-emerald-500/20 rounded-md" />
                   <div className="w-1/4 h-4 bg-emerald-500 rounded-md" />
                 </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
