import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Ecosystem34Modules } from './components/Ecosystem34Modules';
import { FeatureDeepDive } from './components/FeatureDeepDive';
import { iOSShowcase } from './components/iOSShowcase';
import { WhySchoolOS } from './components/WhySchoolOS';
import { Pricing } from './components/Pricing';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { TrialModal } from './components/TrialModal';

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">
      
      {/* Navigation */}
      <Navbar 
        onOpenDemo={() => setDemoModalOpen(true)}
        onOpenTrial={() => setTrialModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        <Hero 
          onOpenDemo={() => setDemoModalOpen(true)}
          onOpenTrial={() => setTrialModalOpen(true)}
        />
        
        <TrustSection />
        
        {/* Complete 34 Modules Interactive Grid Hub */}
        <Ecosystem34Modules />

        {/* Core ERP Hub Deep-Dives */}
        <FeatureDeepDive />

        {/* iPhone & iPad Glassy UI Showcase */}
        <iOSShowcase />
        
        <WhySchoolOS />
        
        <Pricing 
          onOpenDemo={() => setDemoModalOpen(true)}
          onOpenTrial={() => setTrialModalOpen(true)}
        />
        
        <ProcessTimeline />
        
        <Testimonials />
        
        <FAQ />
        
        <Contact />
        
        <CTA 
          onOpenDemo={() => setDemoModalOpen(true)}
          onOpenTrial={() => setTrialModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <DemoModal 
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <TrialModal 
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />

    </div>
  );
}

export default App;
