import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ecosystem34Modules } from './components/Ecosystem34Modules';
import { FeatureDeepDive } from './components/FeatureDeepDive';
import { IOSShowcase } from './components/iOSShowcase';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { TrialModal } from './components/TrialModal';
import { Background } from './components/Background';

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like smooth easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen text-vision-text selection:bg-vision-cyan selection:text-black relative">
      <Background />
      <div className="noise-bg" />
      
      <Navbar 
        onOpenDemo={() => setIsDemoOpen(true)} 
        onOpenTrial={() => setIsTrialOpen(true)} 
      />
      
      <main className="relative z-10 flex flex-col items-center">
        <Hero 
          onOpenDemo={() => setIsDemoOpen(true)} 
          onOpenTrial={() => setIsTrialOpen(true)} 
        />
        
        {/* Modules Section */}
        <div id="ecosystem" className="w-full relative z-10 py-32">
          <Ecosystem34Modules />
        </div>

        {/* Deep Dive Section */}
        <div id="features" className="w-full relative z-10 py-20">
          <FeatureDeepDive />
        </div>

        {/* Device Showcase Section */}
        <div className="w-full relative z-10 py-32">
          <IOSShowcase />
        </div>

        {/* Pricing */}
        <div id="pricing" className="w-full relative z-10 py-20">
          <Pricing onOpenDemo={() => setIsDemoOpen(true)} onOpenTrial={() => setIsTrialOpen(true)} />
        </div>

        {/* FAQ */}
        <div id="faq" className="w-full relative z-10 py-20">
          <FAQ />
        </div>

        {/* Contact */}
        <div className="w-full relative z-10 py-20">
          <Contact />
        </div>
      </main>

      <Footer />

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <TrialModal isOpen={isTrialOpen} onClose={() => setIsTrialOpen(false)} />
    </div>
  );
}

export default App;
