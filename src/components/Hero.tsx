import React, { useState } from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle2, TrendingUp, Users, Shield, Smartphone, Zap, Layers, DollarSign, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [activeWidget, setActiveWidget] = useState<'attendance' | 'fees' | 'exams'>('attendance');

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-grid-light bg-slate-50">
      
      {/* Background Soft Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top iOS Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-ios border border-blue-200/80 text-xs font-bold text-slate-800 shadow-sm hover:border-blue-300 transition-all cursor-pointer">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-blue-600 font-extrabold">SchoolOS v4.0</span>
            <span className="text-slate-300">|</span>
            <span>All 34 School ERP & Management Modules Live</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
          </div>
        </div>

        {/* Hero Title & Subheadline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Complete AI-Powered School ERP <br className="hidden sm:inline" />
            <span className="text-gradient-blue">Built for Modern Education</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Manage student admissions, attendance, fees, exams, transport GPS, payroll, multi-school SaaS, and parent mobile apps from one intelligent white-glove platform.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all flex items-center justify-center gap-3 group"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-ios text-slate-800 font-bold text-base border border-slate-200/80 hover:bg-white hover:border-slate-300 transition-all flex items-center justify-center gap-2 group shadow-sm"
            >
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>Book Live 1-on-1 Demo</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 34 Modules Included
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Credit Card Required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free Data Migration
            </span>
          </div>
        </div>

        {/* iPhone Glassy UI Mockup Showcase */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          
          {/* Floating iOS Glass Widgets */}
          <div className="hidden lg:block absolute -top-8 -left-10 glass-ios-card p-4 rounded-3xl border border-white/80 shadow-ios-float z-20 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-semibold">Today's Attendance</div>
                <div className="text-lg font-extrabold text-slate-900">98.4% <span className="text-emerald-600 text-xs">Live</span></div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-1/2 -right-10 glass-ios-card p-4 rounded-3xl border border-white/80 shadow-ios-float z-20 animate-float-reverse">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-semibold">Fee Collection</div>
                <div className="text-lg font-extrabold text-slate-900">$482,900 <span className="text-blue-600 text-xs">Online</span></div>
              </div>
            </div>
          </div>

          {/* Main iPhone/iPad Glassy Card Mockup */}
          <div className="glass-ios p-3 sm:p-6 rounded-[36px] border border-white/90 shadow-ios-float relative overflow-hidden">
            
            {/* Top iOS App Window Bar */}
            <div className="flex items-center justify-between pb-4 px-3 border-b border-slate-200/80">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs text-slate-500 font-mono font-bold">schoolos.app/dashboard/admin</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveWidget('attendance')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${activeWidget === 'attendance' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  Attendance ERP
                </button>
                <button
                  onClick={() => setActiveWidget('fees')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${activeWidget === 'fees' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  Fees & Gateways
                </button>
                <button
                  onClick={() => setActiveWidget('exams')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${activeWidget === 'exams' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  Exams & Marks
                </button>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-4 sm:p-6 space-y-6">
              
              {/* Header Widgets Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-ios-card p-4 rounded-2xl border border-white">
                  <div className="text-xs text-slate-500 font-semibold">Total Students</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">4,850</div>
                  <div className="text-[10px] text-emerald-600 font-bold mt-0.5">12 Grades Active</div>
                </div>

                <div className="glass-ios-card p-4 rounded-2xl border border-white">
                  <div className="text-xs text-slate-500 font-semibold">Teaching Staff</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">182</div>
                  <div className="text-[10px] text-blue-600 font-bold mt-0.5">Subject Allocated</div>
                </div>

                <div className="glass-ios-card p-4 rounded-2xl border border-white">
                  <div className="text-xs text-slate-500 font-semibold">Fee Defaulters</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">1.5%</div>
                  <div className="text-[10px] text-emerald-600 font-bold mt-0.5">Auto WhatsApp Sent</div>
                </div>

                <div className="glass-ios-card p-4 rounded-2xl border border-white">
                  <div className="text-xs text-slate-500 font-semibold">Active Modules</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">34 / 34</div>
                  <div className="text-[10px] text-purple-600 font-bold mt-0.5">100% ERP Enabled</div>
                </div>
              </div>

              {/* Dynamic View switching */}
              {activeWidget === 'attendance' && (
                <div className="glass-ios-card p-5 rounded-3xl border border-white space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Biometric & Face Recognition Attendance Log
                    </h4>
                    <span className="text-xs text-blue-600 font-bold">Real-Time Sync</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-white/90 rounded-2xl border border-slate-200/80">
                      <span className="text-slate-500">Student Attendance</span>
                      <p className="text-slate-900 font-bold text-sm mt-1">4,762 / 4,850 Present</p>
                    </div>
                    <div className="p-3 bg-white/90 rounded-2xl border border-slate-200/80">
                      <span className="text-slate-500">Teacher Attendance</span>
                      <p className="text-slate-900 font-bold text-sm mt-1">182 / 182 Present</p>
                    </div>
                    <div className="p-3 bg-white/90 rounded-2xl border border-slate-200/80">
                      <span className="text-slate-500">Absent SMS Alerts</span>
                      <p className="text-emerald-600 font-bold text-sm mt-1">88 Sent to Parents</p>
                    </div>
                  </div>
                </div>
              )}

              {activeWidget === 'fees' && (
                <div className="glass-ios-card p-5 rounded-3xl border border-white space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-blue-600" /> Razorpay, Cashfree & UPI Fee Collection Ledger
                    </h4>
                    <span className="text-xs text-emerald-600 font-bold">Instant Receipts</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    {['Quarter 3 Tuition Fee - Class 10', 'School Bus Route #04 Transport Fee', 'Library Fine & Hostel Installment'].map((fee, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white/90 rounded-2xl border border-slate-200/80">
                        <span className="text-slate-800 font-bold">{fee}</span>
                        <span className="text-emerald-600 font-extrabold">Paid Online (Receipt Generated)</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeWidget === 'exams' && (
                <div className="glass-ios-card p-5 rounded-3xl border border-white space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-600" /> Examination Schedule, Seating & Marks Entry
                    </h4>
                    <span className="text-xs text-purple-600 font-bold">Gradebook Active</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white/90 rounded-2xl border border-slate-200/80">
                      <span className="text-slate-500">Class 12 Pre-Board Schedule</span>
                      <p className="text-slate-900 font-bold mt-1">Hall Tickets & Seating Ready</p>
                    </div>
                    <div className="p-3 bg-white/90 rounded-2xl border border-slate-200/80">
                      <span className="text-slate-500">GPA / CGPA Grade System</span>
                      <p className="text-slate-900 font-bold mt-1">CBSE Compliant Report Cards</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
