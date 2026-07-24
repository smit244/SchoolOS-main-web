import React, { useState } from 'react';
import { MODULES_DATA } from '../data/mockData';
import { ShieldCheck, PenTool, Wallet, Smartphone, CheckCircle, ArrowRight, Layers } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-primary-400" />,
  PenTool: <PenTool className="w-8 h-8 text-secondary" />,
  Wallet: <Wallet className="w-8 h-8 text-accent" />,
  Smartphone: <Smartphone className="w-8 h-8 text-amber-400" />
};

export const ERPModules: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState(MODULES_DATA[0]);

  return (
    <section id="modules" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-slate-800 text-xs font-semibold text-accent">
            <Layers className="w-4 h-4" />
            <span>ROLE BASED ENTERPRISE ARCHITECTURE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tailored Experiences for <span className="text-gradient-primary">Every Stakeholder</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            From trustees to teachers, students, and accountants — dedicated workspaces with granular role-based permission control.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {MODULES_DATA.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setSelectedModule(mod)}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                selectedModule.id === mod.id
                  ? 'bg-slate-900 border-2 border-primary text-white shadow-xl shadow-primary/20 scale-105'
                  : 'glass-card border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: mod.color }} />
              <span>{mod.name}</span>
            </button>
          ))}
        </div>

        {/* Active Module Detailed View */}
        <div className="mt-12 glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg">
                  {iconMap[selectedModule.iconName]}
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-primary-400">{selectedModule.role}</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{selectedModule.name}</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedModule.description}
              </p>

              {/* Key Module Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedModule.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-2 gap-4">
                {selectedModule.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                    <div className="text-xs text-slate-400">{m.label}</div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white mt-1 text-gradient-primary">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Visual Window */}
            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="font-bold text-white uppercase tracking-wider">{selectedModule.name} Console</span>
                <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent font-mono text-[10px]">VERIFIED ROLE</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-400">Live Active Session</span>
                  <p className="text-white font-bold">Encrypted OAuth2 Role Access Enabled</p>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-400">Security Audit Log</span>
                  <p className="text-accent font-bold">100% Activity Tracked & Timestamped</p>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-400">Mobile & Web Sync</span>
                  <p className="text-secondary font-bold">Instant Real-time WebSocket Push</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
