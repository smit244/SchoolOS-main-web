import React from 'react';
import { Zap, ShieldCheck, Cloud, Bot, Sparkles, Lock, RefreshCw, BarChart2, Code, Smartphone } from 'lucide-react';

export const WhySchoolOS: React.FC = () => {
  const reasons = [
    {
      title: 'Ultra Fast Performance',
      description: 'Sub-100ms response time powered by edge caching and optimized database indexing.',
      icon: Zap,
      color: 'text-yellow-400'
    },
    {
      title: 'ISO 27001 & Military Security',
      description: '256-bit AES encryption at rest and in transit with automated threat protection.',
      icon: ShieldCheck,
      color: 'text-emerald-400'
    },
    {
      title: 'Cloud Based (99.99% Uptime)',
      description: 'Zero hardware server maintenance needed. Automatic scaling for admission peak days.',
      icon: Cloud,
      color: 'text-sky-400'
    },
    {
      title: 'Native AI Architecture',
      description: 'Built-in LLM models fine-tuned on K-12 education standards and Bloom Taxonomy.',
      icon: Bot,
      color: 'text-secondary'
    },
    {
      title: 'Apple-Style Minimal UI',
      description: 'Zero learning curve for non-technical staff. Intuitive, sleek, and pleasant to use.',
      icon: Sparkles,
      color: 'text-primary-400'
    },
    {
      title: 'Granular Role Access',
      description: 'Define precise permissions for principals, trustees, accountants, teachers, and parents.',
      icon: Lock,
      color: 'text-rose-400'
    },
    {
      title: 'Automated Instant Backups',
      description: 'Redundant multi-region backup snapshots taken every 15 minutes with zero data loss guarantee.',
      icon: RefreshCw,
      color: 'text-accent'
    },
    {
      title: 'Predictive School Analytics',
      description: 'Predict student dropout risks, fee defaulter patterns, and academic score trajectories.',
      icon: BarChart2,
      color: 'text-cyan-400'
    },
    {
      title: 'REST API & Webhooks',
      description: 'Connect with Tally, QuickBooks, WhatsApp Business API, RFID hardware, and biometric gates.',
      icon: Code,
      color: 'text-indigo-400'
    },
    {
      title: 'Branded iOS & Android Apps',
      description: 'Get your own school name & logo published on Apple App Store and Google Play Store.',
      icon: Smartphone,
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="why-schoolos" className="py-24 bg-slate-900/50 relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-slate-800 text-xs font-semibold text-accent">
            <ShieldCheck className="w-4 h-4" />
            <span>THE UNFAIR ADVANTAGE FOR SCHOOLS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why 100+ Leading Institutions Choose <span className="text-gradient-primary">SchoolOS</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Designed from the ground up to replace outdated legacy software with a fast, beautiful, and intelligent cloud platform.
          </p>
        </div>

        {/* 10 Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-primary-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
