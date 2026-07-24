import React from 'react';
import { Search, Compass, Palette, Database, Users, Rocket, LifeBuoy } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Needs Audit',
      desc: 'We analyze your school structure, existing student databases, and examination board specifications.',
      icon: Search
    },
    {
      num: '02',
      title: 'Planning & Workflow Mapping',
      desc: 'Custom permission roles, fee schedule structures, and syllabus blueprints are mapped.',
      icon: Compass
    },
    {
      num: '03',
      title: 'Branding & UI Customization',
      desc: 'Your custom school domain and branded iOS & Android apps are compiled.',
      icon: Palette
    },
    {
      num: '04',
      title: 'Automated Data Migration',
      desc: 'Student, teacher, fee ledgers, and academic marks are imported seamlessly in <24 hrs.',
      icon: Database
    },
    {
      num: '05',
      title: 'Faculty & Staff Training',
      desc: 'Hands-on live webinars and interactive video guides for teachers, principals, and accountants.',
      icon: Users
    },
    {
      num: '06',
      title: 'Go-Live & Broadcast',
      desc: 'Launch parent apps with SMS/WhatsApp announcements for seamless adoption.',
      icon: Rocket
    },
    {
      num: '07',
      title: '24/7 Dedicated Support',
      desc: 'Dedicated relationship manager and 99.99% uptime guarantee for peace of mind.',
      icon: LifeBuoy
    }
  ];

  return (
    <section className="py-24 bg-slate-900/40 relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-slate-800 text-xs font-semibold text-secondary">
            <Compass className="w-4 h-4" />
            <span>SEAMLESS 7-STEP ONBOARDING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Zero to Live in <span className="text-gradient-primary">Less Than 48 Hours</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Our white-glove onboarding engineering team handles 100% of data migration and staff setup.
          </p>
        </div>

        {/* Timeline Horizontal / Vertical Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-4 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-extrabold text-slate-700 group-hover:text-primary-400 transition-colors">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-secondary">
                  <step.icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                {step.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
