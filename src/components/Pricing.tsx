import React, { useState } from 'react';
import { PRICING_DATA } from '../data/mockData';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-ios border border-blue-200 text-xs font-bold text-blue-600">
            <Sparkles className="w-4 h-4" />
            <span>TRANSPARENT ENTERPRISE PRICING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Predictable Plans for <span className="text-gradient-blue">Institutions of All Sizes</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Includes all 34 modules. No hidden setup fees or per-student penalties.
          </p>

          {/* Monthly / Yearly Billing Toggle */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>Monthly Billing</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 rounded-full bg-slate-200 border border-slate-300 p-1 flex items-center transition-colors relative"
            >
              <div 
                className={`w-6 h-6 rounded-full bg-blue-600 transition-transform shadow-md ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-bold flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
              <span>Yearly Billing</span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-700 rounded-full border border-emerald-300">SAVE 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_DATA.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`glass-ios-card p-8 rounded-4xl border relative flex flex-col justify-between transition-all ${
                  plan.popular
                    ? 'border-blue-500 shadow-xl shadow-blue-500/10 scale-105 bg-white'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                    MOST POPULAR CHOICE
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">{plan.name}</h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">{plan.tagline}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-display">${price}</span>
                    <span className="text-xs text-slate-500 font-bold">/ month</span>
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
