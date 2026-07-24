import React, { useState } from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle2, TrendingUp, Users, FileText, DollarSign, Shield, Zap, Layers } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'paper-gen' | 'fees'>('overview');

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Glow Mesh Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-primary/30 text-xs font-semibold text-slate-200 hover:border-primary/50 transition-all cursor-pointer shadow-lg shadow-primary/10">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
            <span className="text-secondary font-bold">SchoolOS 3.0</span>
            <span className="text-slate-400">|</span>
            <span>Next-Gen AI Question Generator & ERP Released</span>
            <ArrowRight className="w-3.5 h-3.5 text-primary-400" />
          </div>
        </div>

        {/* Hero Title & Subheadline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            AI Powered School ERP <br className="hidden sm:inline" />
            <span className="text-gradient-primary">Built for Modern Education</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Manage admissions, attendance, exams, fees, AI question paper generation, reports, and administration from one intelligent, ultra-fast platform.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all flex items-center justify-center gap-3 group"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-slate-200 font-semibold text-base border border-slate-700/80 hover:bg-slate-800/60 hover:border-slate-500 transition-all flex items-center justify-center gap-2 group"
            >
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>Book Live Demo</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-accent" /> No Credit Card Required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-accent" /> 24 Hour Setup
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-accent" /> ISO 27001 Certified
            </span>
          </div>
        </div>

        {/* 3D Dashboard Mockup Showcase */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          
          {/* Floating Live Stat Badges */}
          <div className="hidden lg:block absolute -top-8 -left-12 glass-card p-4 rounded-2xl border border-slate-700/80 shadow-2xl z-20 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Attendance Rate</div>
                <div className="text-lg font-bold text-white">98.4% <span className="text-accent text-xs">↑ 3.2%</span></div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-1/2 -right-12 glass-card p-4 rounded-2xl border border-slate-700/80 shadow-2xl z-20 animate-float-reverse">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Papers Generated</div>
                <div className="text-lg font-bold text-white">1,240,890 <span className="text-secondary text-xs">AI</span></div>
              </div>
            </div>
          </div>

          {/* Main Glassmorphic Window Mockup */}
          <div className="glass-card rounded-2xl border border-slate-700/80 p-2 sm:p-4 shadow-2xl shadow-primary/20 backdrop-blur-2xl relative overflow-hidden">
            
            {/* Top Window Bar */}
            <div className="flex items-center justify-between pb-3 px-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-slate-400 font-mono">schoolos.app/dashboard/principal</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('paper-gen')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'paper-gen' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  AI Paper Gen
                </button>
                <button
                  onClick={() => setActiveTab('fees')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'fees' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Fee ERP
                </button>
              </div>
            </div>

            {/* Mockup Dashboard Content */}
            <div className="p-4 sm:p-6 space-y-6">
              
              {/* Header Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400">Total Students</div>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-1">4,850</div>
                  <div className="text-[10px] text-accent mt-0.5">Active across 12 Grades</div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400">Teachers Active</div>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-1">182</div>
                  <div className="text-[10px] text-primary-400 mt-0.5">100% Attendance</div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400">Fee Collection</div>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-1">$482,900</div>
                  <div className="text-[10px] text-accent mt-0.5">96.2% On-time</div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400">AI Papers This Month</div>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-1">1,420</div>
                  <div className="text-[10px] text-secondary mt-0.5">CBSE & ICSE Aligned</div>
                </div>
              </div>

              {/* Dynamic View switching */}
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary-400" /> Academic & Exam Performance Trend
                      </h4>
                      <span className="text-xs text-slate-400">2026 Term 1</span>
                    </div>
                    {/* Simulated SVG Chart */}
                    <div className="h-44 w-full flex items-end justify-between gap-2 pt-4 px-2">
                      {[40, 65, 55, 80, 75, 90, 85, 95, 88, 98].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                          <div className="w-full bg-slate-800 rounded-t-md relative overflow-hidden h-36 flex items-end">
                            <div 
                              className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-md group-hover:brightness-125 transition-all" 
                              style={{ height: `${h}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-slate-500">M{i+1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-4">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-secondary" /> AI Recommended Actions
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 text-xs space-y-1">
                        <span className="text-amber-400 font-semibold">Grade 10 Math Weakness</span>
                        <p className="text-slate-400 text-[11px]">Chapter 'Quadratic Equations' scores 14% below target. Generate remedial worksheet?</p>
                      </div>
                      <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 text-xs space-y-1">
                        <span className="text-accent font-semibold">Fee Reminders Ready</span>
                        <p className="text-slate-400 text-[11px]">Send automated WhatsApp notifications to 42 parents for Q3 fee balance?</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'paper-gen' && (
                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-secondary" />
                      <h4 className="text-base font-bold text-white">AI Question Paper Blueprint Sandbox</h4>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold bg-accent/20 text-accent rounded-full">Ready to Export</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Selected Board & Subject</span>
                      <p className="text-white font-bold mt-1">CBSE Class 12 Physics</p>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Bloom's Taxonomy Ratio</span>
                      <p className="text-white font-bold mt-1">30% Easy | 50% Medium | 20% Hard</p>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Paper Sets Generated</span>
                      <p className="text-white font-bold mt-1">Set A, B, C & Answer Keys</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'fees' && (
                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-accent" /> Automated Fee Gateway & WhatsApp Ledger
                    </h4>
                    <span className="text-xs text-accent font-semibold">Live Gateway Active</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    {['Apex Public School - Term 2 Fees', 'St. Jude Academy - Transport Fee', 'Greenwood High - Lab & Exam Fee'].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                        <span className="text-slate-300 font-medium">{item}</span>
                        <span className="text-accent font-bold">Received via UPI</span>
                      </div>
                    ))}
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
