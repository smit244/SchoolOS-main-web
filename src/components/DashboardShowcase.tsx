import React, { useState } from 'react';
import { Laptop, Tablet, Smartphone, Monitor, CheckCircle, Sparkles } from 'lucide-react';

export const DashboardShowcase: React.FC = () => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-slate-800 text-xs font-semibold text-primary-400">
            <Monitor className="w-4 h-4" />
            <span>RESPONSIVE MULTI-DEVICE EXPERIENCE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Seamless Performance Across <span className="text-gradient-primary">Every Screen</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Native desktop dashboard for school leadership, optimized iPad tablet mode for classroom teachers, and ultra-fast iOS & Android apps for parents.
          </p>

          {/* Device Viewport Switcher */}
          <div className="pt-6 flex items-center justify-center gap-3">
            {[
              { id: 'desktop', label: 'Desktop Console', icon: Laptop },
              { id: 'tablet', label: 'Tablet Mode', icon: Tablet },
              { id: 'mobile', label: 'Mobile Apps', icon: Smartphone }
            ].map(d => (
              <button
                key={d.id}
                onClick={() => setDevice(d.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  device === d.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <d.icon className="w-4 h-4" />
                <span>{d.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="mt-14 max-w-5xl mx-auto flex justify-center">
          
          {device === 'desktop' && (
            <div className="w-full glass-card p-4 sm:p-6 rounded-3xl border border-slate-800 shadow-2xl shadow-primary/20 space-y-4 animate-in zoom-in duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="font-mono text-slate-400 ml-2">SchoolOS Principal Workspace - Desktop 4K</span>
                </div>
                <span className="text-accent font-bold">100% Cloud Synced</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400">Total Admission Inquiries</span>
                  <div className="text-2xl font-bold text-white">1,420</div>
                  <p className="text-[10px] text-accent">+24% vs Last Academic Session</p>
                </div>
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400">Daily Student Attendance</span>
                  <div className="text-2xl font-bold text-white">98.2%</div>
                  <p className="text-[10px] text-secondary">RFID & Facial Scans Verified</p>
                </div>
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400">Exams Scheduled This Week</span>
                  <div className="text-2xl font-bold text-white">14</div>
                  <p className="text-[10px] text-primary-400">Class 10 & 12 Pre-Boards</p>
                </div>
              </div>
            </div>
          )}

          {device === 'tablet' && (
            <div className="w-full max-w-3xl glass-card p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-4 animate-in zoom-in duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="font-mono text-slate-400">iPad Pro 12.9" - Teacher Attendance & Marks Portal</span>
                <span className="text-secondary font-bold">Offline Sync Ready</span>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-white text-sm">Class 10-A Attendance</h5>
                    <span className="text-xs text-slate-400">38 Present | 2 Absent (WhatsApp Sent)</span>
                  </div>
                  <span className="px-3 py-1 text-xs font-bold bg-accent/20 text-accent rounded-full">Completed</span>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-white text-sm">Physics Lab Assignment Upload</h5>
                    <span className="text-xs text-slate-400">35/40 Submissions Received</span>
                  </div>
                  <span className="px-3 py-1 text-xs font-bold bg-primary/20 text-primary-400 rounded-full">Evaluating</span>
                </div>
              </div>
            </div>
          )}

          {device === 'mobile' && (
            <div className="w-80 glass-card p-4 rounded-[40px] border-4 border-slate-800 shadow-2xl space-y-4 animate-in zoom-in duration-300">
              <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto" />
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-white">
                    <span>School Bus Tracking</span>
                    <span className="text-accent">Live</span>
                  </div>
                  <p className="text-slate-400 text-[10px]">Bus #04 is 5 mins away from your drop location.</p>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-white">
                    <span>Q3 Fee Receipt</span>
                    <span className="text-secondary">Paid</span>
                  </div>
                  <p className="text-slate-400 text-[10px]">Amount: $1,250 | Transaction ID: #84920</p>
                </div>
              </div>
              <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto pt-2" />
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
