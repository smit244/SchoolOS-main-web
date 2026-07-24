import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-emerald-500 p-0.5 shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-slate-900">
                  School<span className="text-gradient-blue">OS</span>
                </span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider -mt-1">Complete School ERP Ecosystem</span>
              </div>
            </a>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              SchoolOS is the complete all-in-one 34-feature School Management ERP platform, built for K-12 schools, colleges, coaching networks, and universities worldwide.
            </p>

            <div className="text-xs text-slate-500 font-mono font-semibold">
              ISO 27001 Certified | 256-Bit Encrypted Platform
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">ERP Modules</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#all-modules" className="hover:text-blue-600 transition-colors">Student Admissions & TC</a></li>
              <li><a href="#all-modules" className="hover:text-blue-600 transition-colors">Fees & Online Payment Gateways</a></li>
              <li><a href="#all-modules" className="hover:text-blue-600 transition-colors">QR & Biometric Attendance</a></li>
              <li><a href="#all-modules" className="hover:text-blue-600 transition-colors">Exam Schedule & Report Cards</a></li>
              <li><a href="#all-modules" className="hover:text-blue-600 transition-colors">GPS Transport Bus Tracking</a></li>
              <li><a href="#all-modules" className="hover:text-blue-600 transition-colors">Hostel & Library Management</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">Resources</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#all-modules" className="hover:text-blue-600 transition-colors">All 34 Feature Specs</a></li>
              <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing & Subscription Plans</a></li>
              <li><a href="#faq" className="hover:text-blue-600 transition-colors">Help Center & FAQ</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Book Live 1-on-1 Demo</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">Newsletter</h4>
            <p className="text-xs text-slate-500 font-medium">Subscribe for weekly updates on school management best practices.</p>
            <div className="flex gap-2 pt-1">
              <input
                type="email"
                placeholder="principal@school.edu"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
              />
              <button
                onClick={() => alert("Subscribed to SchoolOS Updates!")}
                className="px-4 py-2 rounded-xl bg-blue-600 text-xs font-bold text-white hover:bg-blue-700 shadow-md"
              >
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-4">
          <p>© 2026 SchoolOS Inc. All rights reserved. Built for modern educational institutions.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
            <a href="#" className="hover:text-slate-900">Security & Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
