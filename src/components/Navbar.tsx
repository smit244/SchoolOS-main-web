import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      {/* Central Floating Dynamic Island */}
      <div className={`dynamic-island pointer-events-auto nav-squircle px-3 py-2.5 transition-all duration-500 ease-in-out flex items-center justify-between gap-4 sm:gap-8 ${scrolled ? 'w-[95%] max-w-4xl shadow-glow-cyan/20' : 'w-auto max-w-5xl shadow-glow-cyan/10'}`}>
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0 pl-2">
          <div className="w-8 h-8 rounded-[10px] bg-white/10 border border-white/20 flex items-center justify-center text-white font-extrabold group-hover:bg-white/20 transition-all backdrop-blur-md relative overflow-hidden">
             <div className="absolute inset-0 bg-hero-glow opacity-50 blur-sm group-hover:opacity-100 transition-opacity" />
             <Sparkles className="w-4 h-4 text-white relative z-10" />
          </div>
          <span className="font-display text-lg font-bold tracking-tighter text-white hidden sm:block">
            School<span className="text-vision-cyan">OS</span>
          </span>
        </a>

        {/* 3 Centered Nav Items */}
        <nav className="hidden md:flex items-center gap-2">
          {['Features', 'Ecosystem', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="px-5 py-2 rounded-2xl text-sm font-medium text-vision-textMuted hover:text-white hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-2 pr-1">
          <button 
            onClick={onOpenDemo}
            className="hidden sm:block text-sm font-medium text-white/70 hover:text-white px-4 py-2 transition-colors rounded-2xl hover:bg-white/10"
          >
            Demo
          </button>
          
          <button
            onClick={onOpenTrial}
            className="relative px-5 py-2.5 rounded-[18px] bg-white text-black font-semibold text-sm overflow-hidden group shadow-glow-cyan transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-vision-cyan to-vision-blueGlow opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="relative z-10">Start Free</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-[14px] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 left-4 right-4 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 pointer-events-auto flex flex-col gap-4 shadow-glass-panel"
          >
            {['Features', 'Ecosystem', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-white py-2 border-b border-white/10"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onOpenDemo(); }}
              className="mt-4 w-full py-3 rounded-2xl bg-white/10 font-semibold text-white text-center hover:bg-white/20 transition-colors"
            >
              Book Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
};
