import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ShieldCheck, Map, MessageSquare, Zap, Fingerprint } from 'lucide-react';

export const BentoFeatures = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-y border-slate-100" id="features">
      
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm uppercase tracking-widest mb-6"
          >
            <Zap className="w-4 h-4" /> Powering Every Department
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything you need. <br />
            <span className="text-slate-400">Nothing you don't.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Bento Item 1: Large Dashboard (Spans 2 columns, 2 rows on desktop) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-slate-900 p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-slate-900/20"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 max-w-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30 mb-6">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Unified Command Center</h3>
              <p className="text-slate-400 text-lg">Monitor attendance, fee collections, and academics from a single, beautiful dashboard.</p>
            </div>

            {/* Decorative UI inside card */}
            <div className="absolute -bottom-10 -right-10 w-[80%] h-[60%] bg-slate-800 rounded-tl-[2rem] border-t border-l border-slate-700 p-6 flex flex-col gap-4 shadow-2xl group-hover:-translate-y-4 transition-transform duration-500">
               <div className="w-full h-8 bg-slate-700/50 rounded-lg" />
               <div className="flex gap-4 h-full">
                 <div className="w-1/3 h-full bg-blue-500/20 border border-blue-500/30 rounded-xl" />
                 <div className="w-2/3 h-full bg-slate-700/50 rounded-xl flex items-end p-4">
                    {/* Mock chart bars */}
                    <div className="w-full flex justify-between items-end h-[80%] gap-2">
                       {[40, 70, 45, 90, 60, 100].map((h, i) => (
                         <div key={i} className="w-full bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }} />
                       ))}
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Bento Item 2: AI Face Recognition */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-[2rem] bg-gradient-to-br from-purple-500 to-indigo-600 p-8 flex flex-col relative overflow-hidden group shadow-xl shadow-purple-500/20"
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <Fingerprint className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Zero-Touch Attendance</h3>
            <p className="text-purple-100 text-sm">Face recognition gates log student entry in milliseconds.</p>
            
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            
            {/* Visual */}
            <div className="mt-auto self-center">
              <div className="w-24 h-24 rounded-full border-2 border-white/30 border-dashed animate-[spin_10s_linear_infinite] flex items-center justify-center relative">
                 <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                   <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 3: Bank-Grade Security */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-[2rem] bg-white border border-slate-200 p-8 flex flex-col relative overflow-hidden group shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-4">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Bank-Grade Security</h3>
            <p className="text-slate-500 text-sm">Automated fee reconciliations with end-to-end encryption.</p>
            
            {/* Visual */}
            <div className="absolute -bottom-10 right-4 group-hover:-translate-y-2 transition-transform duration-500">
               <div className="bg-emerald-500 text-white font-bold px-6 py-4 rounded-t-2xl shadow-xl flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-white/50 animate-pulse" />
                 Secured
               </div>
            </div>
          </motion.div>

          {/* Bento Item 4: Real-time Bus Tracking (Horizontal) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 rounded-[2rem] bg-slate-50 border border-slate-200 p-8 flex flex-row items-center gap-8 relative overflow-hidden group shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex-1 z-10">
              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center border border-pink-100 mb-4">
                <Map className="w-5 h-5 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Live Transport Tracking</h3>
              <p className="text-slate-500">Parents track school buses in real-time. No more waiting in the rain.</p>
            </div>
            
            <div className="flex-1 h-full relative min-h-[150px] hidden sm:block">
              {/* Fake map route */}
              <div className="absolute inset-0 bg-slate-200 rounded-2xl overflow-hidden border border-slate-300">
                 {/* Map lines */}
                 <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_45%,#000_45%,#000_55%,transparent_55%)] bg-[size:20px_20px]" />
                 {/* Route line */}
                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150">
                    <path d="M 20 130 C 50 130 80 50 120 50 C 150 50 170 80 180 80" fill="none" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 6" />
                 </svg>
                 {/* Moving bus dot */}
                 <motion.div 
                   animate={{ x: [20, 180], y: [130, 80] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-0 left-0 w-4 h-4 bg-pink-500 rounded-full border-2 border-white shadow-[0_0_10px_rgba(236,72,153,0.5)] -ml-2 -mt-2"
                 />
              </div>
            </div>
          </motion.div>

          {/* Bento Item 5: Communication */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-[2rem] bg-blue-600 p-8 flex flex-col relative overflow-hidden group shadow-xl shadow-blue-500/20"
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Instant Broadcasts</h3>
            <p className="text-blue-100 text-sm">Send urgent notices to 5,000+ parents in one tap.</p>
            
            {/* Visual Chat Bubbles */}
            <div className="absolute -bottom-6 -right-2 flex flex-col gap-2 group-hover:-translate-y-2 transition-transform duration-500">
               <div className="bg-white px-4 py-2 rounded-2xl rounded-br-sm text-blue-600 font-bold text-xs shadow-lg ml-8">Holiday Tomorrow!</div>
               <div className="bg-blue-400/30 px-4 py-2 rounded-2xl rounded-bl-sm text-white font-medium text-xs shadow-lg mr-8 backdrop-blur-md border border-white/20">Thanks for updating.</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
