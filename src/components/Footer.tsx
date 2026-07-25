import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white/60 border-t border-slate-200/50 backdrop-blur-xl text-slate-600 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/50">
          
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <img src="/logo.png" alt="SchoolOS Logo" className="h-16 object-contain" />
            </a>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm font-light">
              SchoolOS is the complete all-in-one 34-feature School Management ERP platform, built for modern institutions worldwide.
            </p>

            <div className="text-xs text-slate-400 font-mono font-medium">
              ISO 27001 Certified | 256-Bit Encrypted Platform
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">ERP Modules</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#ecosystem" className="text-slate-500 hover:text-vision-blueGlow transition-colors">Admissions & TC</a></li>
              <li><a href="#ecosystem" className="text-slate-500 hover:text-vision-blueGlow transition-colors">Fees & Payments</a></li>
              <li><a href="#ecosystem" className="text-slate-500 hover:text-vision-blueGlow transition-colors">QR Attendance</a></li>
              <li><a href="#ecosystem" className="text-slate-500 hover:text-vision-blueGlow transition-colors">Exam Schedule</a></li>
              <li><a href="#ecosystem" className="text-slate-500 hover:text-vision-blueGlow transition-colors">Bus Tracking</a></li>
              <li><a href="#ecosystem" className="text-slate-500 hover:text-vision-blueGlow transition-colors">Hostel & Library</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Resources</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#ecosystem" className="text-slate-500 hover:text-vision-blueGlow transition-colors">Feature Specs</a></li>
              <li><a href="#pricing" className="text-slate-500 hover:text-vision-blueGlow transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-slate-500 hover:text-vision-blueGlow transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-vision-blueGlow transition-colors">Book Demo</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Newsletter</h4>
            <p className="text-sm text-slate-500 font-light">Subscribe for updates on school management.</p>
            <div className="flex gap-2 pt-1">
              <input
                type="email"
                placeholder="principal@school.edu"
                className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-vision-blueGlow shadow-sm"
              />
              <button
                onClick={() => alert("Subscribed to SchoolOS Updates!")}
                className="px-4 py-2 rounded-xl bg-slate-900 text-sm font-bold text-white hover:bg-slate-800 shadow-sm"
              >
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 font-light gap-4">
          <p>© 2026 SchoolOS Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
