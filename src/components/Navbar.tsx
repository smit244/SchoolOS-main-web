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
      // The hero is light, so when we scroll past it (~80vh), we should become dark mode.
      // But for the navbar, it's safer to just adapt immediately when scrolled down a bit to match the transition, 
      // or adapt when we hit the dark section. Let's say scrollY > 50 makes it dark glass.
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      {/* Central Floating Dynamic Island */}
      <div className={`pointer-events-auto nav-squircle px-3 py-2.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between gap-4 sm:gap-8 backdrop-blur-2xl saturate-150 ${
        scrolled 
          ? 'w-[95%] max-w-4xl bg-white/70 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.05)]' 
          : 'w-[95%] max-w-5xl bg-transparent border border-transparent shadow-none'
      }`}>
        
        {/* Logo */}
        <a href="#" onClick={(e) => handleScrollTo(e, 'root')} className="flex items-center gap-2 group shrink-0 pl-2">
          <div className="w-8 h-8 rounded-[10px] bg-slate-900 flex items-center justify-center text-white font-extrabold group-hover:scale-105 transition-all relative overflow-hidden shadow-lg">
             <Sparkles className="w-4 h-4 text-white relative z-10" />
          </div>
          <span className={`font-display text-lg font-bold tracking-tighter hidden sm:block transition-colors duration-500 text-slate-900`}>
            School<span className="text-vision-blueGlow">OS</span>
          </span>
        </a>

        {/* 3 Centered Nav Items */}
        <nav className="hidden md:flex items-center gap-2">
          {['Features', 'Ecosystem', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleScrollTo(e, item.toLowerCase())}
              className={`px-5 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 relative overflow-hidden group ${
                scrolled 
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              <span className="relative z-10">{item}</span>
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-2 pr-1">
          <button 
            onClick={onOpenDemo}
            className={`hidden sm:block text-sm font-bold px-4 py-2 transition-colors rounded-2xl text-slate-700 hover:text-slate-900 hover:bg-slate-100/50`}
          >
            Login
          </button>
          
          <button
            onClick={onOpenTrial}
            className={`relative px-5 py-2.5 rounded-[18px] font-bold text-sm overflow-hidden group shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 bg-slate-900 text-white`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-vision-cyan to-vision-blueGlow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Start Free</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-[14px] transition-colors text-slate-700 hover:text-slate-900 hover:bg-slate-100/50`}
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
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute top-24 left-4 right-4 backdrop-blur-2xl saturate-150 rounded-3xl p-6 pointer-events-auto flex flex-col gap-4 shadow-2xl bg-white/80 border border-slate-200/50`}
          >
            {['Features', 'Ecosystem', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-bold py-2 border-b ${
                  scrolled 
                    ? 'text-white/70 hover:text-white border-white/10' 
                    : 'text-slate-700 hover:text-[#4F46E5] border-slate-100'
                }`}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onOpenDemo(); }}
              className={`mt-4 w-full py-3 rounded-2xl font-bold text-center transition-colors ${
                scrolled 
                  ? 'bg-white/10 text-white hover:bg-white/20' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
};
