import React from 'react';
import { Building2, School, GraduationCap, Award, CheckCircle } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const stats = [
    { label: 'Partner Schools & Trusts', value: '100+', subtext: 'Across 18 States' },
    { label: 'Active Students Managed', value: '50,000+', subtext: 'Daily Active Users' },
    { label: 'Teachers & Educators', value: '500+', subtext: 'Empowered Daily' },
    { label: 'AI Questions Generated', value: '1,000,000+', subtext: '99.9% Accuracy' },
  ];

  const institutionTypes = [
    'K-12 Schools', 'Senior Secondary Colleges', 'JEE & NEET Coaching Institutes', 
    'International Baccalaureate (IB)', 'CBSE & ICSE Affiliated Trusts', 'Deemed Universities'
  ];

  return (
    <section className="py-16 bg-slate-950 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ticker / Badge header */}
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
            TRUSTED BY LEADING EDUCATIONAL INSTITUTIONS NATIONWIDE
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {institutionTypes.map((type, idx) => (
              <span 
                key={idx} 
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold glass-card border border-slate-800 text-slate-300 flex items-center gap-1.5 hover:border-primary/40 transition-colors"
              >
                <CheckCircle className="w-3.5 h-3.5 text-secondary" />
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Big Numbers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 text-center relative overflow-hidden group hover:border-primary/40 transition-all hover:scale-105"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-all" />
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-gradient-primary">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-200 mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
