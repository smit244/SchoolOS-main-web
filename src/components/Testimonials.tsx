import React from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, Quote, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-slate-800 text-xs font-semibold text-accent">
            <Award className="w-4 h-4" />
            <span>REAL RESULTS FROM REAL LEADERS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by Principals, Teachers & <span className="text-gradient-primary">Trustees</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            See how educational leaders achieved zero error management and saved thousands of faculty hours.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-6 flex flex-col justify-between relative group hover:border-primary/40 transition-all hover:-translate-y-2"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-3 py-1 text-[10px] font-extrabold uppercase bg-accent/10 text-accent border border-accent/30 rounded-full">
                    {t.metrics}
                  </span>
                </div>

                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/40"
                />
                <div>
                  <h4 className="text-base font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-secondary font-medium">{t.role}</p>
                  <p className="text-[11px] text-slate-400">{t.institution}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
