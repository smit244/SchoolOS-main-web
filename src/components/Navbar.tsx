import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3.5 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary via-secondary to-accent p-0.5 shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-1">
                School<span className="text-gradient-primary">OS</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-1">AI School ERP</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#ai-paper-gen" className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>AI Paper Generator</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-primary/20 text-primary-400 border border-primary/30 rounded-full">NEW</span>
            </a>
            <a href="#modules" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Modules</a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#why-schoolos" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Why SchoolOS</a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={onOpenDemo}
              className="text-sm font-semibold text-slate-300 hover:text-white px-4 py-2 rounded-xl transition-colors"
            >
              Book Demo
            </button>
            <button
              onClick={onOpenTrial}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-br from-primary via-secondary to-accent group-hover:from-primary group-hover:to-accent text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-950/80 rounded-[10px] flex items-center gap-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card mt-2 border-t border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-200 hover:text-primary">Features</a>
            <a href="#ai-paper-gen" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-200 hover:text-primary flex items-center justify-between">
              <span>AI Paper Generator</span>
              <span className="px-2 py-0.5 text-xs font-bold bg-primary/20 text-primary border border-primary/30 rounded-full">AI</span>
            </a>
            <a href="#modules" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-200 hover:text-primary">Modules</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-200 hover:text-primary">Pricing</a>
            <a href="#why-schoolos" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-200 hover:text-primary">Why SchoolOS</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-200 hover:text-primary">FAQ</a>
          </nav>
          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-center hover:bg-slate-800"
            >
              Book Demo
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenTrial(); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-center shadow-lg shadow-primary/30"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
