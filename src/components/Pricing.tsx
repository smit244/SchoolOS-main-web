import React, { useState } from 'react';
import { usePricingPlans } from '../hooks/usePricingPlans';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenDemo?: () => void;
  onOpenTrial?: () => void;
}

export const Pricing: React.FC<PricingProps> = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const { plans, isLoading } = usePricingPlans();

  // Temporary links for authentication until real ones are provided
  const REGISTER_URL = "https://app.schoolos.in/register";

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-slate-200/50 backdrop-blur-xl shadow-sm text-sm font-semibold text-slate-700">
            <Sparkles className="w-4 h-4 text-vision-blueGlow" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
            Simple plans for <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-blueGlow to-vision-cyan">every school.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-light">
            Everything you need to run your institution. No hidden fees.
          </p>

          {/* Monthly / Yearly Billing Toggle */}
          <div className="pt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>Monthly Billing</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 rounded-full bg-slate-200 border border-slate-300 p-1 flex items-center transition-colors relative shadow-inner"
            >
              <div 
                className={`w-6 h-6 rounded-full bg-slate-900 transition-transform shadow-md ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-2 ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
              <span>Yearly Billing</span>
              <span className="px-2 py-1 text-[10px] font-bold bg-vision-cyan/10 text-vision-cyan rounded-full border border-vision-cyan/20 uppercase tracking-wider">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {isLoading ? (
            /* Loading Skeleton */
            <>
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-white/40 border border-slate-200 animate-pulse">
                  <div className="w-32 h-8 bg-slate-200 rounded-lg mb-4"></div>
                  <div className="w-full h-12 bg-slate-200 rounded-lg mb-8"></div>
                  <div className="w-48 h-12 bg-slate-200 rounded-lg mb-8"></div>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <div key={j} className="w-full h-4 bg-slate-200 rounded"></div>
                    ))}
                  </div>
                  <div className="w-full h-12 bg-slate-200 rounded-2xl mt-12"></div>
                </div>
              ))}
            </>
          ) : (
            /* Actual Dynamic Pricing Plans */
            plans.map((plan) => {
              const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

              return (
                <div
                  key={plan.id}
                  className={`relative p-6 sm:p-8 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 ${
                    plan.popular
                      ? 'bg-white border border-slate-200 shadow-[0_30px_60px_rgba(0,0,0,0.08)] scale-105 z-10'
                      : 'bg-white/60 border border-slate-200/50 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-900 text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                      <p className="text-sm text-slate-500 font-medium mt-2 line-clamp-2 min-h-[40px]">{plan.tagline}</p>
                    </div>

                    <div className="flex items-baseline gap-1 py-4 border-b border-slate-100">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-display">₹{price}</span>
                      <span className="text-sm text-slate-500 font-medium">/ {billingCycle === 'yearly' ? 'year' : 'month'}</span>
                    </div>

                    <div className="pt-2 space-y-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Features</span>
                      <ul className="flex flex-col gap-3">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-vision-blueGlow' : 'text-slate-400'}`} />
                            <span className="text-sm text-slate-700 font-medium leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-4">
                    <a
                      href={REGISTER_URL}
                      className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group ${
                        plan.popular
                          ? 'bg-slate-900 text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
