import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Users, CheckSquare, ScanFace, Database, Sparkles, FileText, 
  CreditCard, BookOpen, Library, Bus, Smartphone, Presentation, 
  GraduationCap, FileBarChart, PieChart, Award, Activity 
} from 'lucide-react';

const ECOSYSTEM_MODULES = [
  { id: 1, title: 'Student Management', icon: Users, desc: 'Centralized profiles and records.', color: 'from-blue-500/20 to-cyan-500/20', text: 'text-blue-600' },
  { id: 2, title: 'Attendance', icon: CheckSquare, desc: 'Automated tracking.', color: 'from-emerald-500/20 to-teal-500/20', text: 'text-emerald-600' },
  { id: 3, title: 'AI Face Recognition', icon: ScanFace, desc: 'Secure biometric entry.', color: 'from-purple-500/20 to-pink-500/20', text: 'text-purple-600' },
  { id: 4, title: 'Question Bank', icon: Database, desc: 'Massive repository of data.', color: 'from-orange-500/20 to-red-500/20', text: 'text-orange-600' },
  
  { id: 5, title: 'AI Question Gen', icon: Sparkles, desc: 'Smart auto-generation.', color: 'from-indigo-500/20 to-blue-500/20', text: 'text-indigo-600' },
  // CORE WILL BE HERE
  { id: 6, title: 'Examination', icon: FileText, desc: 'End-to-end exam flow.', color: 'from-rose-500/20 to-orange-500/20', text: 'text-rose-600' },
  
  { id: 7, title: 'Fee Management', icon: CreditCard, desc: 'Streamlined payments.', color: 'from-green-500/20 to-emerald-500/20', text: 'text-green-600' },
  { id: 8, title: 'Homework', icon: BookOpen, desc: 'Digital assignments.', color: 'from-sky-500/20 to-blue-500/20', text: 'text-sky-600' },
  
  { id: 9, title: 'Library', icon: Library, desc: 'Catalog and issuance.', color: 'from-violet-500/20 to-purple-500/20', text: 'text-violet-600' },
  { id: 10, title: 'Transport', icon: Bus, desc: 'Live GPS tracking.', color: 'from-amber-500/20 to-orange-500/20', text: 'text-amber-600' },
  { id: 11, title: 'Parent App', icon: Smartphone, desc: 'Real-time updates.', color: 'from-pink-500/20 to-rose-500/20', text: 'text-pink-600' },
  { id: 12, title: 'Teacher Portal', icon: Presentation, desc: 'Tools for educators.', color: 'from-cyan-500/20 to-teal-500/20', text: 'text-cyan-600' },
  
  { id: 13, title: 'Student Portal', icon: GraduationCap, desc: 'Student dashboard.', color: 'from-blue-500/20 to-indigo-500/20', text: 'text-blue-600' },
  { id: 14, title: 'Reports', icon: FileBarChart, desc: 'Detailed analytics.', color: 'from-fuchsia-500/20 to-pink-500/20', text: 'text-fuchsia-600' },
  { id: 15, title: 'Analytics', icon: PieChart, desc: 'AI-driven insights.', color: 'from-yellow-500/20 to-amber-500/20', text: 'text-yellow-600' },
  { id: 16, title: 'Certificates', icon: Award, desc: 'Automated generation.', color: 'from-emerald-500/20 to-cyan-500/20', text: 'text-emerald-600' },
];

const BentoCard = ({ mod, index, isHovered, setHoveredId }: any) => {
  const Icon = mod.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setHoveredId(mod.id)}
      onMouseLeave={() => setHoveredId(null)}
      className="relative group w-full h-[200px] rounded-[2rem] bg-white border border-slate-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-1"
    >
      {/* Dynamic Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${mod.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Moving Border Beam Effect */}
      {isHovered && (
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
           <div className="absolute top-0 left-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(59,130,246,0.3)_360deg)] animate-[spin_2s_linear_infinite]" />
        </div>
      )}

      {/* Inner Mask for Border effect */}
      <div className={`absolute inset-[1.5px] rounded-[calc(2rem-1.5px)] bg-white z-1 transition-colors duration-500 ${isHovered ? 'bg-white/95 backdrop-blur-md' : 'bg-white'}`} />

      <div className="relative z-10 w-full h-full p-6 flex flex-col justify-between pointer-events-none">
        <div className="flex items-start justify-between">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm border border-slate-100 transition-transform duration-300 group-hover:scale-110 ${mod.text}`}>
            <Icon strokeWidth={1.5} size={24} />
          </div>
          <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isHovered ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
        </div>
        
        <div>
          <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1">{mod.title}</h3>
          <p className="text-sm text-slate-500 font-medium line-clamp-1 group-hover:text-slate-700 transition-colors">{mod.desc}</p>
        </div>
      </div>
      
      {/* Expandable Chart Graphic on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '40%' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-100 p-4 flex items-end justify-between gap-1 z-20 pointer-events-none"
          >
            {[40, 70, 50, 90, 60, 100].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, type: 'spring' }}
                className={`flex-1 rounded-t-sm opacity-80 bg-gradient-to-t ${mod.color.replace('/20', '/60')}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const AIEcosystem: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative w-full py-32 bg-[#f8fafc] overflow-hidden" id="ecosystem">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
        >
          <Activity className="w-4 h-4 text-vision-blueGlow" />
          <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">The Bento Grid</span>
        </motion.div>
        
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Everything you need.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-blueGlow to-vision-purple">Perfectly connected.</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          SchoolOS uses a central AI core that instantly synchronizes data across every single module. No silos, no manual entry. Just seamless intelligence.
        </p>
      </div>

      {/* The Bento Box Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* We use grid-flow-dense so the 2x2 core slots perfectly without breaking row structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-[200px] grid-flow-row-dense">
          
          {/* Row 1 */}
          <BentoCard mod={ECOSYSTEM_MODULES[0]} index={0} isHovered={hoveredId === 1} setHoveredId={setHoveredId} />
          <BentoCard mod={ECOSYSTEM_MODULES[1]} index={1} isHovered={hoveredId === 2} setHoveredId={setHoveredId} />
          <BentoCard mod={ECOSYSTEM_MODULES[2]} index={2} isHovered={hoveredId === 3} setHoveredId={setHoveredId} />
          <BentoCard mod={ECOSYSTEM_MODULES[3]} index={3} isHovered={hoveredId === 4} setHoveredId={setHoveredId} />

          {/* Row 2 */}
          <BentoCard mod={ECOSYSTEM_MODULES[4]} index={4} isHovered={hoveredId === 5} setHoveredId={setHoveredId} />
          
          {/* THE AI CORE (Takes up 2x2 space) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative w-full h-full rounded-[2.5rem] bg-white border-2 border-vision-blueGlow/20 shadow-[0_20px_60px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center p-8 overflow-hidden group"
          >
            {/* Animated Grid Background inside the core */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
            
            {/* Glowing Orbs behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-vision-cyan/20 rounded-full blur-[60px] group-hover:bg-vision-blueGlow/30 transition-colors duration-700 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-vision-purple/20 rounded-full blur-[40px] animate-pulse-slow pointer-events-none" />
            
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
               <img src="/logo.png" alt="SchoolOS Core" className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700" />
               <div className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 backdrop-blur-md">
                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">AI Core Online</span>
               </div>
            </div>
            
            {/* Animated connection beams shooting out */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-vision-blueGlow/50 to-transparent -translate-y-full animate-[shimmerY_3s_infinite]" />
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-vision-blueGlow/50 to-transparent -translate-x-full animate-[shimmer_3s_infinite_1s]" />
            </div>
          </motion.div>

          <BentoCard mod={ECOSYSTEM_MODULES[5]} index={5} isHovered={hoveredId === 6} setHoveredId={setHoveredId} />
          
          {/* Row 3 (Core takes up middle 2 slots, so these wrap nicely) */}
          <BentoCard mod={ECOSYSTEM_MODULES[6]} index={6} isHovered={hoveredId === 7} setHoveredId={setHoveredId} />
          <BentoCard mod={ECOSYSTEM_MODULES[7]} index={7} isHovered={hoveredId === 8} setHoveredId={setHoveredId} />
          
          {/* Row 4 */}
          <BentoCard mod={ECOSYSTEM_MODULES[8]} index={8} isHovered={hoveredId === 9} setHoveredId={setHoveredId} />
          <BentoCard mod={ECOSYSTEM_MODULES[9]} index={9} isHovered={hoveredId === 10} setHoveredId={setHoveredId} />
          <BentoCard mod={ECOSYSTEM_MODULES[10]} index={10} isHovered={hoveredId === 11} setHoveredId={setHoveredId} />
          <BentoCard mod={ECOSYSTEM_MODULES[11]} index={11} isHovered={hoveredId === 12} setHoveredId={setHoveredId} />

          {/* Row 5 */}
          <BentoCard mod={ECOSYSTEM_MODULES[12]} index={12} isHovered={hoveredId === 13} setHoveredId={setHoveredId} />
          <BentoCard mod={ECOSYSTEM_MODULES[13]} index={13} isHovered={hoveredId === 14} setHoveredId={setHoveredId} />
          <BentoCard mod={ECOSYSTEM_MODULES[14]} index={14} isHovered={hoveredId === 15} setHoveredId={setHoveredId} />
          <BentoCard mod={ECOSYSTEM_MODULES[15]} index={15} isHovered={hoveredId === 16} setHoveredId={setHoveredId} />
          
        </div>
      </div>
      
      {/* Global CSS animations for shimmer */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes shimmerY {
          100% { transform: translateY(100%); }
        }
      `}} />

    </section>
  );
};
