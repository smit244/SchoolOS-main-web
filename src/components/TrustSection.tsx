import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const stats = [
    { label: 'Schools & Educational Trusts', value: '100+', subtext: 'Across 18 States' },
    { label: 'Active Students Managed', value: '50,000+', subtext: 'Daily Active Users' },
    { label: 'Teachers & Staff Empowered', value: '500+', subtext: 'Zero Errors' },
    { label: 'Question Papers & Results', value: '1,000,000+', subtext: 'Generated' },
  ];

  const chips = [
    'No Credit Card Required', 'English / ગુજરાતી / हिंदी', 'Print & PDF Export', 
    'Razorpay & UPI Fees', 'GPS Bus Tracking', 'ISO 27001 Certified'
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* QBMS Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pb-8 border-b border-slate-100">
          {chips.map((chip, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>{chip}</span>
            </div>
          ))}
        </div>

        {/* Big Numbers Grid */}
        <div className="pt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-qbms glass-qbms-hover p-6 rounded-3xl border border-slate-200 text-center relative overflow-hidden group"
            >
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-extrabold text-slate-800 mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
