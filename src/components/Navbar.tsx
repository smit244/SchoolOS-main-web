import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white py-3 shadow-md border-b border-slate-200' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* QBMS / i-Connect Style Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-brand flex items-center justify-center text-white font-extrabold shadow-md shadow-brand/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                School<span className="text-brand">OS</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase -mt-1">Smart School ERP Ecosystem</span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#all-modules" className="text-sm font-semibold text-slate-700 hover:text-brand transition-colors flex items-center gap-1.5">
              <span>34 Modules</span>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-brand-soft text-brand rounded-full">ALL-IN-ONE</span>
            </a>
            <a href="#student-erp" className="text-sm font-semibold text-slate-700 hover:text-brand transition-colors">Student ERP</a>
            <a href="#fees-erp" className="text-sm font-semibold text-slate-700 hover:text-brand transition-colors">Fees & Gateways</a>
            <a href="#pricing" className="text-sm font-semibold text-slate-700 hover:text-brand transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-brand transition-colors">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer hover:bg-slate-200">
              <Globe className="w-3.5 h-3.5 text-brand" />
              <span>English / ગુજરાતી / हिंदी</span>
            </div>

            <button 
              onClick={onOpenDemo}
              className="text-sm font-bold text-slate-700 hover:text-brand px-3 py-2 transition-colors"
            >
              Book Demo
            </button>
            
            <button
              onClick={onOpenTrial}
              className="btn-brand shadow-lg shadow-brand/25 text-sm py-2.5 px-5 rounded-2xl"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-800">
            <a href="#all-modules" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand">All 34 Modules</a>
            <a href="#student-erp" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand">Student ERP</a>
            <a href="#fees-erp" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand">Fees Management</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand">Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand">FAQ</a>
          </nav>
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full py-3 rounded-2xl bg-slate-100 font-bold text-slate-800 text-center hover:bg-slate-200"
            >
              Book Demo
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenTrial(); }}
              className="w-full py-3 rounded-2xl bg-brand text-white font-bold text-center shadow-lg shadow-brand/30"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
