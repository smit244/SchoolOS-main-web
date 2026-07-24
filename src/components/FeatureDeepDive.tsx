import React, { useState } from 'react';
import { 
  GraduationCap, CreditCard, CheckSquare, FileSpreadsheet, Bus, Globe, 
  CheckCircle2, ArrowRight, ShieldCheck, Zap 
} from 'lucide-react';

export const FeatureDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'fees' | 'attendance' | 'exams' | 'transport' | 'multischool'>('student');

  return (
    <section id="student-erp" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-ios border border-blue-200 text-xs font-bold text-blue-600">
            <Zap className="w-4 h-4" />
            <span>DEEP DIVE INTO KEY ERP SYSTEM HUBs</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for Scale, Speed & <span className="text-gradient-blue">Absolute Accuracy</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Click through the core ERP engine hubs below to see live workflow demonstrations.
          </p>
        </div>

        {/* Deep Dive Hub Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {[
            { id: 'student', label: 'Student ERP & TC', icon: GraduationCap },
            { id: 'fees', label: 'Fees & Gateways', icon: CreditCard },
            { id: 'attendance', label: 'QR & Face Attendance', icon: CheckSquare },
            { id: 'exams', label: 'Exams & Rank Cards', icon: FileSpreadsheet },
            { id: 'transport', label: 'Transport Live GPS', icon: Bus },
            { id: 'multischool', label: 'Multi-School SaaS', icon: Globe }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2.5 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'glass-ios-card text-slate-700 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="mt-12 glass-ios-card p-8 sm:p-12 rounded-4xl border border-white shadow-ios-float relative overflow-hidden">
          
          {activeTab === 'student' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">MODULE #2 - STUDENT MANAGEMENT</span>
                <h3 className="text-3xl font-extrabold text-slate-900">360° Student Admissions & Transfer Certificates</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Manage student profiles, bulk Excel imports, photo IDs, roll number allocation, grade promotion, alumni tracking, and instant automated Transfer Certificates (TC).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Automated Roll No Assignment</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant PDF Transfer Certificate</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Bulk Student Excel Upload</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> QR-Code Student ID Card Generator</div>
                </div>
              </div>

              <div className="lg:col-span-6 glass-ios p-6 rounded-3xl border border-white space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-slate-900">Student Directory Console</span>
                  <span className="text-emerald-600 font-bold">4,850 Active Records</span>
                </div>
                <div className="space-y-2 text-xs">
                  {['Rohan Verma - Grade 10-A (Roll #01)', 'Ananya Sharma - Grade 12-B (Roll #14)', 'Aarav Patel - Grade 8-C (Roll #22)'].map((s, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center justify-between shadow-sm">
                      <span className="font-bold text-slate-800">{s}</span>
                      <span className="text-blue-600 font-bold">View Profile & ID Card</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fees' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">MODULE #7 - FEES MANAGEMENT</span>
                <h3 className="text-3xl font-extrabold text-slate-900">Automated Fee Collection & Gateways</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Support Razorpay, Cashfree, Stripe, UPI payments, installment structures, custom discounts, fine calculations, and automatic WhatsApp payment reminder links to parents.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Razorpay / Cashfree / Stripe</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant GST Receipt Generator</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Defaulter WhatsApp Reminders</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Partial & Installment Schedules</div>
                </div>
              </div>

              <div className="lg:col-span-6 glass-ios p-6 rounded-3xl border border-white space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-slate-900">Fee Payment Gateway Status</span>
                  <span className="text-emerald-600 font-bold">Auto Receipt Ready</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center justify-between shadow-sm">
                    <span className="font-bold text-slate-800">Term 3 Fee - Apex Public School</span>
                    <span className="text-emerald-600 font-extrabold">Received via UPI ($1,250)</span>
                  </div>
                  <div className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center justify-between shadow-sm">
                    <span className="font-bold text-slate-800">School Bus Transport Fee</span>
                    <span className="text-emerald-600 font-extrabold">Paid via Razorpay</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600">MODULE #5 - ATTENDANCE SYSTEM</span>
                <h3 className="text-3xl font-extrabold text-slate-900">QR, Biometric & Face Recognition Attendance</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Log student and staff attendance using QR code scans, fingerprint biometric machines, facial recognition cameras, or mobile GPS for bus drivers and staff.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Face Recognition Camera Support</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> QR Card Scan Attendance</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Automated Absent SMS to Parents</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> GPS Geofence Staff Check-in</div>
                </div>
              </div>

              <div className="lg:col-span-6 glass-ios p-6 rounded-3xl border border-white space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-slate-900">Biometric Attendance Stream</span>
                  <span className="text-purple-600 font-bold">100% Synced</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs space-y-2">
                  <div className="flex justify-between font-bold">
                    <span>Gate Camera #02 - Face Scan</span>
                    <span className="text-emerald-600">Verified</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">Student ID #84920 scanned at 07:58 AM. Attendance logged.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'exams' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">MODULE #8 & #14 - EXAMS & RESULTS</span>
                <h3 className="text-3xl font-extrabold text-slate-900">Exam Schedules, Hall Tickets & GPA/CGPA</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Automate exam timetables, hall ticket generation, invigilator seat allocations, teacher marks entry, CBSE/ICSE grade cards, and rank lists.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Hall Ticket PDF Generator</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Automatic Seating Arrangement</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> GPA / CGPA & Rank Calculation</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Printable Marksheets & CCE Cards</div>
                </div>
              </div>

              <div className="lg:col-span-6 glass-ios p-6 rounded-3xl border border-white space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-slate-900">Exam Gradebook Console</span>
                  <span className="text-blue-600 font-bold">Class 10 & 12 Board</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs space-y-2">
                  <div className="flex justify-between font-bold">
                    <span>Physics Term 1 Final Marks</span>
                    <span className="text-blue-600">Grade A1 (94/100)</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">Calculated GPA: 9.8 | Class Rank: #02</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'transport' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600">MODULE #16 - TRANSPORT & GPS</span>
                <h3 className="text-3xl font-extrabold text-slate-900">Live GPS School Bus Tracking for Parents</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Real-time GPS tracking on parent mobile apps, pickup point notifications, driver contact details, speed alert warnings, and route management.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Real-time GPS Bus Location</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Driver & Vehicle License Records</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Pickup Stop Arrival Alerts</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Over-speeding Warning Logs</div>
                </div>
              </div>

              <div className="lg:col-span-6 glass-ios p-6 rounded-3xl border border-white space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-slate-900">School Bus Route #04 Tracker</span>
                  <span className="text-emerald-600 font-bold">On Schedule</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs space-y-2">
                  <div className="flex justify-between font-bold">
                    <span>Current Stop: Green Park Extension</span>
                    <span className="text-emerald-600">Speed: 28 km/h</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">ETA to Next Pickup: 4 Minutes. Parent SMS Alert Triggered.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'multischool' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600">MODULE #29 & #30 - MULTI-SCHOOL SAAS</span>
                <h3 className="text-3xl font-extrabold text-slate-900">Multi-School Trust SaaS & Super Admin</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Manage 10+ school branches under one trustee Super Admin panel. Isolated database tenancy, custom subdomain support, and consolidated financial reports.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Multi-Branch Master Dashboard</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Isolated Subdomain Database</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Consolidated Revenue Analytics</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Audit Logs & Security Control</div>
                </div>
              </div>

              <div className="lg:col-span-6 glass-ios p-6 rounded-3xl border border-white space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-slate-900">Super Admin - Multi-Branch Trust</span>
                  <span className="text-purple-600 font-bold">12 Branches Active</span>
                </div>
                <div className="space-y-2 text-xs">
                  {['Apex International - Main Campus', 'Apex Convent - North Campus', 'Apex Senior Secondary - City Branch'].map((b, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center justify-between shadow-sm">
                      <span className="font-bold text-slate-800">{b}</span>
                      <span className="text-emerald-600 font-bold">Active Tenancy</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
