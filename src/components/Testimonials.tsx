import React from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-ios border border-blue-200 text-xs font-bold text-blue-600">
            <Award className="w-4 h-4" />
            <span>TRUSTED BY 100+ EDUCATIONAL INSTITUTIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by Principals, Teachers & <span className="text-gradient-blue">Trustees</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="glass-ios-card p-8 rounded-4xl border border-slate-200/90 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-3 py-1 text-[10px] font-extrabold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                    {t.metrics}
                  </span>
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed font-medium">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
                />
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-blue-600 font-bold">{t.role}</p>
                  <p className="text-[11px] text-slate-500 font-medium">{t.institution}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
