import React, { useState } from 'react';
import { PRICING_DATA } from '../data/mockData';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-primary/30 text-xs font-semibold text-primary-400">
            <Sparkles className="w-4 h-4" />
            <span>TRANSPARENT ENTERPRISE PRICING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Predictable Plans for <span className="text-gradient-primary">Institutions of All Sizes</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            No hidden setup fees. No per-student penalties. Choose the plan that fits your vision.
          </p>

          {/* Monthly / Yearly Billing Toggle */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>Monthly Billing</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 rounded-full bg-slate-900 border border-slate-700 p-1 flex items-center transition-colors relative"
            >
              <div 
                className={`w-6 h-6 rounded-full bg-primary transition-transform shadow-lg ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-bold flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
              <span>Yearly Billing</span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-accent/20 text-accent rounded-full border border-accent/30">SAVE 20%</span>
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
                className={`glass-card p-8 rounded-3xl border relative flex flex-col justify-between transition-all ${
                  plan.popular
                    ? 'border-primary shadow-2xl shadow-primary/25 scale-105 bg-slate-900/90'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-[10px] font-extrabold uppercase tracking-widest shadow-lg">
                    MOST POPULAR CHOICE
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{plan.tagline}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-display">${price}</span>
                    <span className="text-xs text-slate-400 font-semibold">/ month</span>
                    {billingCycle === 'yearly' && <span className="text-[10px] text-slate-500 ml-1">(billed annually)</span>}
                  </div>

                  <div className="pt-4 border-t border-slate-800 space-y-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Included Features:</span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-800">
                  <button
                    onClick={plan.id === 'p3' ? onOpenDemo : onOpenTrial}
                    className={`w-full py-4 rounded-xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-primary/40 hover:scale-105'
                        : 'bg-slate-900 border border-slate-700 text-white hover:bg-slate-800'
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
