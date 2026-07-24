import React, { useState } from 'react';
import { Sparkles, FileText, Download, Printer, CheckCircle, RefreshCw, Layers, Sliders, Eye } from 'lucide-react';

export const QuestionPaperGenerator: React.FC = () => {
  const [subject, setSubject] = useState('Physics');
  const [grade, setGrade] = useState('Class 12 CBSE');
  const [difficultyRatio, setDifficultyRatio] = useState<'standard' | 'challenging' | 'remedial'>('standard');
  const [marks, setMarks] = useState('70 Marks (3 Hours)');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const sampleQuestions = [
    {
      section: 'Section A - Multiple Choice Questions (1 Mark Each)',
      qs: [
        'Q1. An electric dipole of dipole moment p is placed in a uniform electric field E. The torque acting on it is given by:',
        'Q2. The SI unit of magnetic flux density is Tesla, which is equivalent to:'
      ]
    },
    {
      section: 'Section B - Short Answer Type Questions (2 Marks Each)',
      qs: [
        'Q3. Derive an expression for the energy stored in a parallel plate capacitor of capacitance C charged to potential V.',
        'Q4. State Lenz\'s law of electromagnetic induction. How does it obey the principle of conservation of energy?'
      ]
    },
    {
      section: 'Section C - Competency & Case Study Questions (5 Marks Each)',
      qs: [
        'Q5. (Bloom Level: Application) A ray of light passes through an equilateral glass prism such that angle of incidence equals angle of emergence. Calculate the refractive index of the prism if minimum deviation is 30°.'
      ]
    }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowPreviewModal(true);
    }, 1200);
  };

  return (
    <section id="ai-paper-gen" className="py-24 bg-slate-900/60 relative overflow-hidden border-y border-slate-800">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-secondary/30 text-xs font-semibold text-secondary">
            <Sparkles className="w-4 h-4" />
            <span>INDUSTRY FIRST AI QUESTION PAPER GENERATOR</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Generate Board-Grade Exam Papers in <span className="text-gradient-primary">30 Seconds</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Select curriculum, chapter weightage, and Bloom's taxonomy balance. Let SchoolOS AI generate multiple paper sets, marking schemes, and answer keys instantly.
          </p>
        </div>

        {/* Live Interactive Simulator Card */}
        <div className="mt-14 glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-primary-400" /> Paper Generator Controls
              </h3>

              {/* Subject Selection */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Select Subject & Board</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Physics', 'Mathematics', 'Chemistry', 'Biology'].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSubject(sub)}
                      className={`p-3 text-xs font-bold rounded-xl border text-left transition-all ${
                        subject === sub
                          ? 'bg-primary/20 border-primary text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>

              {/* Class & Grade */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Grade / Examination Target</label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full p-3 text-xs font-bold rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-primary"
                >
                  <option>Class 12 CBSE Board Exam</option>
                  <option>Class 10 ICSE Board Exam</option>
                  <option>JEE Main Full Syllabus Mock</option>
                  <option>NEET Physics Chapterwise Test</option>
                </select>
              </div>

              {/* Difficulty Ratio Slider */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                  <span>Bloom's Taxonomy Difficulty Balance</span>
                  <span className="text-secondary font-bold uppercase text-[10px]">{difficultyRatio}</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'standard', label: 'Standard (30-50-20)' },
                    { id: 'challenging', label: 'Challenging (20-40-40)' },
                    { id: 'remedial', label: 'Remedial (60-30-10)' }
                  ].map((diff) => (
                    <button
                      key={diff.id}
                      onClick={() => setDifficultyRatio(diff.id as any)}
                      className={`p-2.5 text-[11px] font-bold rounded-xl border text-center transition-all ${
                        difficultyRatio === diff.id
                          ? 'bg-secondary/20 border-secondary text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {diff.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate CTA Button */}
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-sm shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>AI Generating Question Paper Sets...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Generate AI Paper & Answer Key</span>
                  </>
                )}
              </button>
            </div>

            {/* Right Side Live Blueprint Preview */}
            <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">LIVE GENERATED BLUEPRINT</span>
                  <h4 className="text-lg font-bold text-white">{grade} - {subject}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-bold bg-accent/20 text-accent rounded-full">Set A, B & C</span>
                  <span className="px-3 py-1 text-xs font-bold bg-primary/20 text-primary-400 rounded-full">{marks}</span>
                </div>
              </div>

              {/* Question Paper Preview Mock Snippet */}
              <div className="space-y-4 text-xs font-sans text-slate-300">
                {sampleQuestions.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h5 className="font-bold text-slate-200 border-b border-slate-800/80 pb-1">{sec.section}</h5>
                    {sec.qs.map((q, qIdx) => (
                      <p key={qIdx} className="text-slate-400 pl-2 border-l-2 border-primary/50 py-0.5">
                        {q}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Action Toolbar */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-accent" /> Answer Key Included</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-accent" /> CBSE 2026 Schema</span>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowPreviewModal(true)}
                    className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-white hover:bg-slate-800 flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" /> Full Screen Preview
                  </button>
                  <button 
                    onClick={() => alert("Downloading PDF Question Paper & Answer Key...")}
                    className="px-4 py-2 rounded-lg bg-primary text-xs font-bold text-white hover:bg-primary-600 flex items-center gap-1.5 shadow-lg shadow-primary/30"
                  >
                    <Download className="w-3.5 h-3.5" /> Export PDF / Word
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Full Screen Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-card max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-6 relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">{subject} Question Paper - Set A</h3>
                  <p className="text-xs text-slate-400">Generated for {grade} | Time: 3 Hours | Max Marks: 70</p>
                </div>
              </div>
              <button 
                onClick={() => setShowPreviewModal(false)}
                className="px-3 py-1.5 text-xs font-bold bg-slate-800 text-slate-300 rounded-lg hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="bg-white text-slate-900 p-8 rounded-xl space-y-6 font-serif shadow-xl text-sm leading-relaxed">
              <div className="text-center border-b-2 border-slate-900 pb-4 space-y-1">
                <h2 className="font-bold text-xl uppercase tracking-wider">APEX SENIOR SECONDARY SCHOOL</h2>
                <p className="text-xs font-mono font-semibold">PRE-BOARD EXAMINATION 2026</p>
                <div className="flex justify-between text-xs font-sans font-bold pt-2">
                  <span>SUBJECT: {subject.toUpperCase()}</span>
                  <span>CLASS: 12</span>
                  <span>MAX MARKS: 70</span>
                </div>
              </div>

              <div className="space-y-4 font-sans text-xs">
                <p className="font-bold">General Instructions:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>All questions are compulsory. There are 33 questions in total.</li>
                  <li>Section A contains 16 MCQs of 1 mark each.</li>
                  <li>Section B contains 5 short answer questions of 2 marks each.</li>
                  <li>Section C contains 7 short answer questions of 3 marks each.</li>
                  <li>Section D contains 2 case study-based questions of 4 marks each.</li>
                  <li>Section E contains 3 long answer questions of 5 marks each.</li>
                </ul>
              </div>

              <div className="space-y-4 pt-2 font-sans">
                <h4 className="font-bold text-sm uppercase tracking-wide border-b border-slate-300 pb-1">SECTION A (16 Marks)</h4>
                <div className="space-y-3 text-xs text-slate-800">
                  <p>1. Two point charges +q and -q are placed at distance d. The electrostatic potential at the midpoint of line joining them is:</p>
                  <div className="grid grid-cols-2 gap-2 pl-4 text-slate-700">
                    <span>(a) Zero</span>
                    <span>(b) 2kq/d</span>
                    <span>(c) kq/d²</span>
                    <span>(d) Infinite</span>
                  </div>
                  <p>2. A circular coil of N turns and radius R carries current I. The magnetic dipole moment associated with it is proportional to:</p>
                  <div className="grid grid-cols-2 gap-2 pl-4 text-slate-700">
                    <span>(a) R</span>
                    <span>(b) R²</span>
                    <span>(c) 1/R</span>
                    <span>(d) 1/R²</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400 font-mono">Answer Key & Detailed Solution Scheme Attached (Page 2-5)</span>
              <button
                onClick={() => { alert("Printing Question Paper & Marking Scheme..."); setShowPreviewModal(false); }}
                className="px-6 py-2.5 rounded-xl bg-primary text-xs font-bold text-white hover:bg-primary-600 flex items-center gap-2 shadow-lg shadow-primary/30"
              >
                <Printer className="w-4 h-4" /> Print / Export Official PDF
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
