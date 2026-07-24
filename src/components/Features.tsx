import React, { useState } from 'react';
import { FEATURES_DATA } from '../data/mockData';
import { 
  GraduationCap, Users, Sparkles, CheckCircle2, CreditCard, Calendar, 
  FileSpreadsheet, BookOpen, Bus, Building2, Calculator, Smartphone, 
  Briefcase, UserCheck, Boxes, BarChart3, ArrowRight, ShieldCheck 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-primary-400" />,
  Users: <Users className="w-6 h-6 text-secondary" />,
  Sparkles: <Sparkles className="w-6 h-6 text-accent" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
  CreditCard: <CreditCard className="w-6 h-6 text-cyan-400" />,
  Calendar: <Calendar className="w-6 h-6 text-blue-400" />,
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-indigo-400" />,
  BookOpen: <BookOpen className="w-6 h-6 text-amber-400" />,
  Bus: <Bus className="w-6 h-6 text-orange-400" />,
  Building2: <Building2 className="w-6 h-6 text-rose-400" />,
  Calculator: <Calculator className="w-6 h-6 text-teal-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-purple-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-sky-400" />,
  UserCheck: <UserCheck className="w-6 h-6 text-emerald-400" />,
  Boxes: <Boxes className="w-6 h-6 text-violet-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-secondary" />
};

export const Features: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'academic' | 'admin' | 'mobile'>('all');

  const filteredFeatures = activeCategory === 'all' 
    ? FEATURES_DATA 
    : FEATURES_DATA.filter(f => f.category === activeCategory);

  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-slate-800 text-xs font-semibold text-primary-400">
            <ShieldCheck className="w-4 h-4" />
            <span>360° ALL-IN-ONE SCHOOL ERP PLATFORM</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything Your Institution Needs to <span className="text-gradient-primary">Scale Effortlessly</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            24+ integrated enterprise modules built specifically for K-12 schools, colleges, and coaching networks.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Modules' },
              { id: 'academic', label: 'Academic & AI' },
              { id: 'admin', label: 'Admin & Finance' },
              { id: 'core', label: 'Core Operations' },
              { id: 'mobile', label: 'Mobile Apps' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFeatures.map((feature) => (
            <div
              key={feature.id}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[feature.iconName] || <Sparkles className="w-6 h-6 text-primary-400" />}
                  </div>
                  {feature.badge && (
                    <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-primary/10 text-primary-400 border border-primary/30">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-900 flex items-center text-xs font-semibold text-slate-500 group-hover:text-secondary transition-colors">
                <span>Explore Module</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
