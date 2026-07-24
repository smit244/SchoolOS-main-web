import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary via-secondary to-accent p-0.5 shadow-lg shadow-primary/30">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  School<span className="text-gradient-primary">OS</span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider -mt-1">Enterprise AI School ERP</span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              SchoolOS is the world's most advanced AI-powered School ERP and Question Paper Generator platform, built to empower K-12 schools, colleges, and coaching networks worldwide.
            </p>

            <div className="text-xs text-slate-500 font-mono">
              ISO 27001:2022 Certified | 256-Bit Encrypted Platform
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">Product & Modules</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-primary transition-colors">AI Question Generator</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Student & Attendance ERP</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Automated Fee Gateway</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Exam & Marksheet Engine</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">GPS Transport Tracking</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Hostel & Library Management</a></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">Resources & Support</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#faq" className="hover:text-primary transition-colors">Help Center & Documentation</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing & Plans</a></li>
              <li><a href="#why-schoolos" className="hover:text-primary transition-colors">CBSE & ICSE Blueprint Specs</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Schedule Live 1-on-1 Demo</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Data Migration Guide</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">Educational AI Digest</h4>
            <p className="text-xs text-slate-400">Subscribe for weekly AI prompts, board exam patterns, and school management insights.</p>
            <div className="flex gap-2 pt-1">
              <input
                type="email"
                placeholder="principal@school.edu"
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary"
              />
              <button
                onClick={() => alert("Subscribed to SchoolOS Educational AI Digest!")}
                className="px-4 py-2 rounded-xl bg-primary text-xs font-bold text-white hover:bg-primary-600 shadow-md"
              >
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 SchoolOS Inc. All rights reserved. Built for modern educational institutions.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Security & Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
