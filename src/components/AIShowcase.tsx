import React, { useState } from 'react';
import { Sparkles, Bot, Send, CheckCircle2, FileSpreadsheet, BookOpen, Cpu, RefreshCw, Zap } from 'lucide-react';

export const AIShowcase: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const prompts = [
    {
      title: 'Generate 10 High-Order MCQs',
      tag: 'MCQs',
      subject: 'Biology - Class 11 Photosynthesis',
      output: `[
  {
    "q": "Which pigment acts as the reaction center in Photosystem II?",
    "options": ["P700", "P680", "Chlorophyll b", "Carotenoid"],
    "ans": "P680",
    "bloom": "Knowledge"
  },
  {
    "q": "During non-cyclic photophosphorylation, the primary electron acceptor from PS I is:",
    "options": ["Ferredoxin", "Plastocyanin", "Cytochrome b6f", "Pheophytin"],
    "ans": "Ferredoxin",
    "bloom": "Understanding"
  }
]`
    },
    {
      title: 'Generate 1-Week Lesson Plan',
      tag: 'Lesson Plan',
      subject: 'Mathematics - Class 10 Quadratic Equations',
      output: `LESSON PLAN: 5-Day Structure
Day 1: Standard form ax² + bx + c = 0 & Factorization Method
Day 2: Completing the Square Method with visual geometric proofs
Day 3: Quadratic Formula derivation & Nature of Roots (Discriminant Δ)
Day 4: Real-world Word Problems (Speed, Time, Geometry)
Day 5: Competency Quiz & AI Weakness Assessment`
    },
    {
      title: 'Generate Remedial Worksheet',
      tag: 'Worksheet',
      subject: 'Chemistry - Class 12 Chemical Kinetics',
      output: `REMEDIAL WORKSHEET (30 Mins)
Target Weakness: First-Order Reaction Rate Constant Formula
Formula: k = (2.303 / t) * log([A]0 / [A])
Q1. A first-order reaction takes 40 mins for 30% decomposition. Calculate t1/2.
Q2. Show that time required for 99.9% completion is 10 times the half-life period.`
    },
    {
      title: 'Generate Auto Answer Key',
      tag: 'Answer Key',
      subject: 'English Literature - Class 12 The Last Lesson',
      output: `ANSWER KEY & MARKING SCHEME
Q1. Why was Franz tempted to run away and spend the day out of doors? (2 Marks)
- Warm, bright day; birds chirping at edge of woods (1 Mark)
- Prussian soldiers drilling in open field behind sawmill (1 Mark)
- Unprepared for participle test by M. Hamel`
    }
  ];

  const handlePromptClick = (index: number) => {
    setSelectedPrompt(index);
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 600);
  };

  return (
    <section className="py-24 bg-slate-900/40 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-primary/30 text-xs font-semibold text-secondary">
            <Bot className="w-4 h-4" />
            <span>INTELLIGENT EDUCATIONAL AI ENGINE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            AI Co-Pilot for <span className="text-gradient-primary">Teachers & Principals</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Empower your faculty to generate worksheets, lesson plans, mock tests, and remedial assignments in seconds.
          </p>
        </div>

        {/* AI Playground Sandbox */}
        <div className="mt-14 glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Prompt Selector */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">Select AI Generation Prompt:</h4>
              {prompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePromptClick(idx)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                    selectedPrompt === idx
                      ? 'bg-primary/20 border-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-secondary uppercase">{p.tag}</span>
                      <span className="text-[10px] text-slate-500">• {p.subject}</span>
                    </div>
                    <div className="text-sm font-bold text-slate-200 group-hover:text-white">{p.title}</div>
                  </div>
                  <Sparkles className={`w-4 h-4 ${selectedPrompt === idx ? 'text-primary-400 animate-pulse' : 'text-slate-600'}`} />
                </button>
              ))}
            </div>

            {/* Right Terminal Stream */}
            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl relative min-h-[340px] flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                  <span className="font-mono text-slate-300">schoolos-ai-core v3.2</span>
                </div>
                <span className="text-secondary font-mono">Response Time: 0.18s</span>
              </div>

              {/* Output Content */}
              <div className="flex-1 font-mono text-xs text-slate-300 space-y-3 leading-relaxed">
                {isGenerating ? (
                  <div className="h-48 flex items-center justify-center gap-2 text-slate-400">
                    <RefreshCw className="w-5 h-5 animate-spin text-primary-400" />
                    <span>AI Model Processing Curriculum Pattern...</span>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap font-mono text-emerald-400 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 overflow-x-auto text-[11px]">
                    {prompts[selectedPrompt].output}
                  </pre>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /> Bloom's Taxonomy Verified</span>
                <button
                  onClick={() => alert("Copied AI prompt result to clipboard!")}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white"
                >
                  Copy Prompt Output
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
