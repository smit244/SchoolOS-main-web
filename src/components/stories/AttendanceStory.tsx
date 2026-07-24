import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { User, ScanFace, CheckCircle2, Bell, BarChart3, ArrowRight } from 'lucide-react';

export const AttendanceStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll Progress mappings (0 to 1 over 300vh)
  // Step 1: Student Appears (0 - 0.2)
  // Step 2: Face Scan Laser (0.2 - 0.4)
  // Step 3: Verified Checkmark (0.4 - 0.6)
  // Step 4: Parent Notification (0.6 - 0.8)
  // Step 5: Dashboard Growth (0.8 - 1.0)

  // Opacities
  const studentOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scanLaserY = useTransform(scrollYProgress, [0.15, 0.35], [0, 150]);
  const scanLaserOpacity = useTransform(scrollYProgress, [0.1, 0.15, 0.35, 0.4], [0, 1, 1, 0]);
  
  const verifiedOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.9, 1], [0, 1, 1, 0]);
  const verifiedScale = useTransform(scrollYProgress, [0.35, 0.45], [0.5, 1]);

  const notifOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.9, 1], [0, 1, 1, 0]);
  const notifX = useTransform(scrollYProgress, [0.55, 0.65], [100, 0]);

  const dashboardOpacity = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const chartHeight1 = useTransform(scrollYProgress, [0.8, 0.9], ["0%", "60%"]);
  const chartHeight2 = useTransform(scrollYProgress, [0.8, 0.9], ["0%", "85%"]);
  const chartHeight3 = useTransform(scrollYProgress, [0.8, 0.9], ["0%", "40%"]);
  const chartHeight4 = useTransform(scrollYProgress, [0.8, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-transparent">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden perspective-[2000px]">
        
        {/* Ambient Background Lights */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_60%)] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Text Story Area */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200/50 backdrop-blur-xl shadow-sm"
            >
              <ScanFace className="w-4 h-4 text-vision-cyan" />
              <span className="text-sm font-semibold text-slate-700 tracking-wide">Automated Attendance</span>
            </motion.div>
            
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.05]">
              Walk in. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-cyan to-vision-blueGlow">You're present.</span>
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-lg leading-relaxed">
              No roll calls. No RFID cards. The moment a student walks through the gates, the SchoolOS AI core instantly recognizes them, updates the live dashboard, and notifies parents seamlessly.
            </p>
          </div>

          {/* Right Visual Story Area */}
          <div className="relative h-[600px] w-full max-w-[600px] mx-auto rounded-[3rem] border border-white/80 bg-white/40 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden transform-style-3d">
            
            {/* Inner Dashboard Layer */}
            <div className="absolute inset-4 rounded-[2rem] border border-white/60 bg-gradient-to-b from-white/80 to-white/30 p-8 shadow-inner overflow-hidden flex flex-col justify-end">
              
              {/* Dashboard Elements */}
              <motion.div style={{ opacity: dashboardOpacity }} className="w-full h-full flex flex-col justify-between absolute inset-0 p-8 z-0">
                <div className="flex justify-between items-center mb-8">
                   <div className="w-1/3 h-6 bg-slate-900/10 rounded-full" />
                   <div className="w-10 h-10 rounded-full bg-vision-blueGlow/10 flex items-center justify-center"><BarChart3 className="w-5 h-5 text-vision-blueGlow" /></div>
                </div>
                
                {/* Live Growing Chart */}
                <div className="flex-1 flex items-end justify-between gap-4 h-full pt-20">
                   <motion.div style={{ height: chartHeight1 }} className="w-full bg-gradient-to-t from-vision-cyan/80 to-vision-cyan/40 rounded-t-xl" />
                   <motion.div style={{ height: chartHeight2 }} className="w-full bg-gradient-to-t from-vision-purple/80 to-vision-purple/40 rounded-t-xl" />
                   <motion.div style={{ height: chartHeight3 }} className="w-full bg-gradient-to-t from-slate-300 to-slate-200 rounded-t-xl" />
                   <motion.div style={{ height: chartHeight4 }} className="w-full bg-gradient-to-t from-vision-blueGlow/90 to-vision-blueGlow/50 rounded-t-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-vision-blueGlow rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                   </motion.div>
                </div>
              </motion.div>

              {/* Central AI Scan Story */}
              <div className="relative z-20 flex flex-col items-center justify-center h-full pb-20">
                
                <motion.div 
                  style={{ opacity: studentOpacity }}
                  className="relative w-40 h-40 rounded-3xl bg-white border border-slate-200 shadow-xl flex items-center justify-center overflow-hidden"
                >
                  <User className="w-16 h-16 text-slate-300" />
                  
                  {/* Face Scan Laser */}
                  <motion.div 
                    style={{ y: scanLaserY, opacity: scanLaserOpacity }}
                    className="absolute top-0 left-0 w-full h-1 bg-vision-cyan shadow-[0_0_15px_3px_rgba(6,182,212,0.8)]"
                  >
                     <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-vision-cyan/30 to-transparent" />
                  </motion.div>
                </motion.div>

                {/* Verified Badge */}
                <motion.div 
                  style={{ opacity: verifiedOpacity, scale: verifiedScale }}
                  className="absolute bottom-1/2 translate-y-1/2 flex flex-col items-center gap-3 bg-white/90 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-emerald-100"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <span className="font-bold text-slate-900 text-lg">Identity Verified</span>
                  <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Attendance Logged</span>
                </motion.div>
                
              </div>
            </div>

            {/* Floating Parent Notification */}
            <motion.div 
              style={{ opacity: notifOpacity, x: notifX }}
              className="absolute -right-8 top-1/4 w-72 bg-white/90 backdrop-blur-3xl border border-white/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-4 flex gap-4 z-40 hidden md:flex"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
                <Bell className="w-5 h-5 text-vision-blueGlow" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-900 text-sm">SchoolOS</span>
                  <span className="text-xs text-slate-400">Just now</span>
                </div>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                  Alex has safely arrived at school. Live attendance marked present.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
