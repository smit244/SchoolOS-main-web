import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Layers } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav-light py-3.5 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-emerald-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
                School<span className="text-gradient-blue">OS</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase -mt-1">School ERP Ecosystem</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#all-modules" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5">
              <span>All 34 Modules</span>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-200 rounded-full">COMPLETE</span>
            </a>
            <a href="#student-erp" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Student ERP</a>
            <a href="#fees-erp" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Fees & Gateways</a>
            <a href="#pricing" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={onOpenDemo}
              className="text-sm font-bold text-slate-700 hover:text-blue-600 px-4 py-2 rounded-xl transition-colors"
            >
              Book Demo
            </button>
            <button
              onClick={onOpenTrial}
              className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-ios mt-2 border-t border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-800">
            <a href="#all-modules" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">All 34 Modules</a>
            <a href="#student-erp" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Student ERP</a>
            <a href="#fees-erp" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Fees Management</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">FAQ</a>
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
              className="w-full py-3 rounded-2xl bg-blue-600 text-white font-bold text-center shadow-lg shadow-blue-500/30"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
