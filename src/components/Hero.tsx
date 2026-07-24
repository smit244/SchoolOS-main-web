import React, { useState } from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle2, TrendingUp, Users, DollarSign, Bolt, Layers, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'fees' | 'attendance'>('overview');

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-soft bg-grid-soft">
      
      {/* QBMS / i-Connect Decorative Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: QBMS Style Copy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Pill Badge */}
            <div className="pill-qbms">
              <Bolt className="w-4 h-4 text-amber-500 fill-current" />
              <span>For Schools, Colleges, Coaching Classes & Trusts</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Manage your entire school in <br className="hidden sm:inline" />
              <span className="text-brand relative inline-block">
                minutes
                <svg className="absolute left-0 -bottom-2 w-full h-3" viewBox="0 0 200 13" preserveAspectRatio="none">
                  <path d="M3 8 C55 2,150 2,197 7" stroke="#f59e0b" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>, not hours.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Pick from 34 integrated modules: student admissions, biometric attendance, Razorpay/UPI fee collection, exams, transport GPS tracking, payroll, multi-school SaaS, and parent mobile apps.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenTrial}
                className="btn-brand text-base py-3.5 px-7 rounded-2xl shadow-xl shadow-brand/25"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenDemo}
                className="btn-soft text-base py-3.5 px-6 rounded-2xl border-2 border-brand text-brand hover:bg-brand-soft"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Book Live Demo</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> English / ગુજરાતી / हिंदी</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free Data Migration</span>
            </div>

            {/* i-Connect Style Glowing Stakeholder Pills */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Hubs:</span>
              <div className="badge-iconnect">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-800 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-iconnect-cyan animate-pulse" /> Student ERP
                </span>
              </div>
              <div className="badge-iconnect">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-800 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Biometrics & GPS
                </span>
              </div>
              <div className="badge-iconnect">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-800 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand" /> Parent Mobile App
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: i-Connect Style Device Showcase Graphic */}
          <div className="lg:col-span-6 relative">
            
            {/* Floating Stats */}
            <div className="hidden sm:block absolute -top-6 -left-6 glass-qbms p-4 rounded-3xl border border-white shadow-qbms-card z-20 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Today's Attendance</div>
                  <div className="text-base font-extrabold text-slate-900">98.4% <span className="text-emerald-600 text-xs">Live</span></div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute top-1/2 -right-6 glass-qbms p-4 rounded-3xl border border-white shadow-qbms-card z-20 animate-float-reverse">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Fees Collected</div>
                  <div className="text-base font-extrabold text-slate-900">$482,900 <span className="text-brand text-xs">UPI/Razorpay</span></div>
                </div>
              </div>
            </div>

            {/* Main Window Mockup */}
            <div className="bg-white p-4 sm:p-6 rounded-4xl border border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="font-mono text-slate-500 ml-2 font-bold">schoolos.app/admin</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-brand-soft text-brand font-extrabold text-[10px]">34 MODULES ACTIVE</span>
              </div>

              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                    <span className="text-xs text-slate-500">Active Students</span>
                    <p className="text-lg font-extrabold text-slate-900 mt-0.5">4,850</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                    <span className="text-xs text-slate-500">Teachers Active</span>
                    <p className="text-lg font-extrabold text-slate-900 mt-0.5">182</p>
                  </div>
                </div>

                <div className="p-4 bg-brand-soft rounded-2xl border border-brand/20 space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                    <span>Multi-School Super Admin</span>
                    <span className="text-brand text-[10px]">12 Branches</span>
                  </div>
                  <p className="text-xs text-slate-600">Isolated subdomain databases, real-time fee recovery tracking & biometric logs.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
