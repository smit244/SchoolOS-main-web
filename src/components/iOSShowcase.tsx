import React, { useState } from 'react';
import { Smartphone, Tablet, Monitor, CheckCircle, Sparkles, Bell, Wifi, Battery } from 'lucide-react';

export const iOSShowcase: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<'iphone' | 'ipad'>('iphone');

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-ios border border-blue-200 text-xs font-bold text-blue-600">
            <Smartphone className="w-4 h-4" />
            <span>IPHONE GLASSY UI & NATIVE MOBILE APPS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Designed to Feel Like <span className="text-gradient-blue">Pure iOS Perfection</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Frosted glass card layouts, fluid micro-interactions, responsive iOS widgets, and offline sync for teachers, parents, and students.
          </p>

          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveDevice('iphone')}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeDevice === 'iphone'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'glass-ios text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>iPhone 16 Pro View</span>
            </button>
            <button
              onClick={() => setActiveDevice('ipad')}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeDevice === 'ipad'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'glass-ios text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Tablet className="w-4 h-4" />
              <span>iPad Pro 13" View</span>
            </button>
          </div>
        </div>

        {/* Device Frame Display */}
        <div className="mt-14 max-w-4xl mx-auto flex justify-center">
          
          {activeDevice === 'iphone' && (
            <div className="w-80 sm:w-96 glass-ios p-4 rounded-[48px] border-4 border-slate-300 shadow-ios-float space-y-4 animate-in zoom-in duration-300 relative">
              {/* Dynamic Island Notch */}
              <div className="w-28 h-6 bg-slate-900 rounded-full mx-auto flex items-center justify-between px-3 text-white text-[10px]">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-mono">9:41</span>
              </div>

              {/* iOS Widget Cards */}
              <div className="space-y-3 pt-2">
                <div className="glass-ios-card p-4 rounded-3xl border border-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-900">Live Bus GPS</span>
                    <span className="px-2 py-0.5 text-[9px] font-bold bg-emerald-100 text-emerald-700 rounded-full">On Route</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">Bus #04 is 3 mins away from Green Park Pickup Stop.</p>
                </div>

                <div className="glass-ios-card p-4 rounded-3xl border border-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-900">Exam Marksheet Ready</span>
                    <span className="px-2 py-0.5 text-[9px] font-bold bg-blue-100 text-blue-700 rounded-full">Class 10</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">Mathematics Term 1 Result: Grade A1 (96/100). Tap to download PDF.</p>
                </div>

                <div className="glass-ios-card p-4 rounded-3xl border border-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-900">Fee Receipt Notification</span>
                    <span className="px-2 py-0.5 text-[9px] font-bold bg-emerald-100 text-emerald-700 rounded-full">Paid</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">Receipt #84920 issued for $1,250 via Razorpay.</p>
                </div>
              </div>

              {/* iOS Home Bar */}
              <div className="w-32 h-1 bg-slate-400 rounded-full mx-auto pt-2" />
            </div>
          )}

          {activeDevice === 'ipad' && (
            <div className="w-full glass-ios p-6 rounded-4xl border-4 border-slate-300 shadow-ios-float space-y-4 animate-in zoom-in duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <span className="font-bold text-slate-800">iPad Pro 13" - Teacher Attendance & Gradebook Console</span>
                <span className="text-emerald-600 font-bold">Offline Sync Mode Active</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-ios-card p-4 rounded-3xl border border-white space-y-2">
                  <span className="text-xs text-slate-500 font-semibold">Grade 10-A Attendance</span>
                  <div className="text-xl font-extrabold text-slate-900">38 Present | 2 Absent</div>
                  <p className="text-xs text-emerald-600 font-bold">1-Tap WhatsApp Alerts Sent</p>
                </div>
                <div className="glass-ios-card p-4 rounded-3xl border border-white space-y-2">
                  <span className="text-xs text-slate-500 font-semibold">Lesson Plan Generator</span>
                  <div className="text-xl font-extrabold text-slate-900">5-Day Structure Ready</div>
                  <p className="text-xs text-blue-600 font-bold">Physics Unit 4 Velocity</p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
