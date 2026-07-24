import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScanFace, UserCheck, BarChart3, Database, Sparkles, FileText, Download, Wallet, CreditCard, CheckCircle } from 'lucide-react';

const StoryNode = ({ icon: Icon, title, delay, active }: { icon: any, title: string, delay: number, active: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`flex flex-col items-center gap-4 relative z-10 ${active ? 'opacity-100' : 'opacity-50'}`}
  >
    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center backdrop-blur-2xl border ${
      active 
        ? 'bg-white border-white/80 shadow-[0_10px_30px_rgba(6,182,212,0.15)]' 
        : 'bg-white/40 border-slate-200/50'
    } transition-all duration-700`}>
      <Icon className={`w-8 h-8 ${active ? 'text-vision-blueGlow' : 'text-slate-400'}`} />
    </div>
    <span className={`text-sm font-semibold tracking-wider uppercase ${active ? 'text-slate-800' : 'text-slate-500'}`}>
      {title}
    </span>
  </motion.div>
);

const ConnectionLine = ({ active, delay }: { active: boolean, delay: number }) => (
  <div className="flex-1 h-[2px] bg-slate-200 relative overflow-hidden mx-4 my-10 lg:my-0 w-[2px] lg:h-[2px] lg:w-auto">
    {active && (
      <motion.div 
        initial={{ x: '-100%' }}
        whileInView={{ x: '100%' }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-vision-blueGlow to-transparent w-full lg:w-1/2 h-1/2 lg:h-full opacity-50"
      />
    )}
  </div>
);

export const VisualStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="relative w-full py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
            Workflows that feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-blueGlow to-vision-cyan">magic</span>.
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            No more manual data entry. SchoolOS automates your entire institution with seamless, intelligent pipelines.
          </p>
        </div>

        {/* Story 1: Attendance */}
        <div className="mb-32">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Zero-Touch Attendance</h3>
            <p className="text-slate-600">Instantly log attendance using AI face recognition and update parents in real-time.</p>
          </div>
          
          <div className="relative p-12 rounded-[3rem] bg-white/60 border border-white/80 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
            <StoryNode icon={UserCheck} title="Student Arrives" delay={0} active={true} />
            <ConnectionLine active={true} delay={0} />
            <StoryNode icon={ScanFace} title="AI Face Scan" delay={0.2} active={true} />
            <ConnectionLine active={true} delay={0.4} />
            <StoryNode icon={CheckCircle} title="Logged" delay={0.4} active={true} />
            <ConnectionLine active={true} delay={0.6} />
            <StoryNode icon={BarChart3} title="Dashboard Updated" delay={0.6} active={true} />
          </div>
        </div>

        {/* Story 2: Exams */}
        <div className="mb-32">
          <div className="mb-12 text-right">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">AI Paper Generator</h3>
            <p className="text-slate-600">Generate board-compliant question papers from a million+ question bank in seconds.</p>
          </div>
          
          <div className="relative p-12 rounded-[3rem] bg-gradient-to-r from-vision-purple/5 to-transparent border border-white/80 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
            <StoryNode icon={Database} title="Question Bank" delay={0} active={true} />
            <ConnectionLine active={true} delay={0.2} />
            <StoryNode icon={Sparkles} title="AI Engine" delay={0.2} active={true} />
            <ConnectionLine active={true} delay={0.4} />
            <StoryNode icon={FileText} title="Blueprint" delay={0.4} active={true} />
            <ConnectionLine active={true} delay={0.6} />
            <StoryNode icon={Download} title="PDF Export" delay={0.6} active={true} />
          </div>
        </div>

      </div>
    </section>
  );
};
