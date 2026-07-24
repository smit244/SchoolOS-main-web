import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Features } from './components/Features';
import { QuestionPaperGenerator } from './components/QuestionPaperGenerator';
import { ERPModules } from './components/ERPModules';
import { AIShowcase } from './components/AIShowcase';
import { DashboardShowcase } from './components/DashboardShowcase';
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-primary selection:text-white antialiased">
      
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
        
        <Features />
        
        <QuestionPaperGenerator />
        
        <ERPModules />
        
        <AIShowcase />
        
        <DashboardShowcase />
        
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
