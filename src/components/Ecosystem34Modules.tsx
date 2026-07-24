import React, { useState } from 'react';
import { ALL_34_MODULES, Module34Item } from '../data/all34Modules';
import { 
  Search, Layers, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  LayoutDashboard, GraduationCap, UserCheck, Users, CheckSquare, 
  ClipboardList, CreditCard, FileSpreadsheet, BookOpen, BookMarked, 
  FileText, Calendar, Award, Library, Bus, Building, BadgeIndianRupee, 
  MessageSquare, Smartphone, User, Briefcase, FileCheck, Contact, Boxes, 
  Calculator, BarChart3, TrendingUp, Globe, ShieldAlert, SmartphoneNfc, Lock 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-blue-600" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-cyan-600" />,
  UserCheck: <UserCheck className="w-6 h-6 text-emerald-600" />,
  Users: <Users className="w-6 h-6 text-amber-600" />,
  CheckSquare: <CheckSquare className="w-6 h-6 text-purple-600" />,
  ClipboardList: <ClipboardList className="w-6 h-6 text-pink-600" />,
  CreditCard: <CreditCard className="w-6 h-6 text-emerald-600" />,
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-blue-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-indigo-600" />,
  BookOpen: <BookOpen className="w-6 h-6 text-sky-600" />,
  BookMarked: <BookMarked className="w-6 h-6 text-rose-600" />,
  FileText: <FileText className="w-6 h-6 text-teal-600" />,
  Calendar: <Calendar className="w-6 h-6 text-lime-600" />,
  Award: <Award className="w-6 h-6 text-purple-600" />,
  Library: <Library className="w-6 h-6 text-yellow-600" />,
  Bus: <Bus className="w-6 h-6 text-orange-600" />,
  Building: <Building className="w-6 h-6 text-cyan-600" />,
  BadgeIndianRupee: <BadgeIndianRupee className="w-6 h-6 text-emerald-600" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-blue-600" />,
  Smartphone: <Smartphone className="w-6 h-6 text-pink-600" />,
  User: <User className="w-6 h-6 text-purple-600" />,
  Briefcase: <Briefcase className="w-6 h-6 text-teal-600" />,
  FileCheck: <FileCheck className="w-6 h-6 text-indigo-600" />,
  Contact: <Contact className="w-6 h-6 text-blue-600" />,
  Boxes: <Boxes className="w-6 h-6 text-amber-600" />,
  Calculator: <Calculator className="w-6 h-6 text-emerald-600" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-blue-600" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-cyan-600" />,
  Globe: <Globe className="w-6 h-6 text-purple-600" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-red-600" />,
  SmartphoneNfc: <SmartphoneNfc className="w-6 h-6 text-emerald-600" />,
  Lock: <Lock className="w-6 h-6 text-indigo-600" />,
  Layers: <Layers className="w-6 h-6 text-blue-600" />
};

export const Ecosystem34Modules: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'academic' | 'attendance' | 'finance' | 'portals' | 'saas'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModuleModal, setSelectedModuleModal] = useState<Module34Item | null>(null);

  const filteredModules = ALL_34_MODULES.filter((m) => {
    const matchesCategory = activeCategory === 'all' || m.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.featuresList.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="all-modules" className="py-24 bg-white relative overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-ios border border-blue-200 text-xs font-extrabold text-blue-600">
            <Layers className="w-4 h-4" />
            <span>34 COMPREHENSIVE SCHOOL ERP MODULES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Complete Educational ERP & <span className="text-gradient-blue">Management Ecosystem</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From student admissions to biometrics, fee gateways, transport GPS, payroll, and multi-school SaaS. Explore all 34 modules below.
          </p>

          {/* Search Bar */}
          <div className="pt-4 relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 34 modules (e.g. attendance, fees, transport, timetable)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-inner"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All 34 Modules' },
              { id: 'core', label: 'Core & Student ERP' },
              { id: 'academic', label: 'Academic & AI' },
              { id: 'attendance', label: 'Attendance & Biometrics' },
              { id: 'finance', label: 'Fees, HR & Accounts' },
              { id: 'portals', label: 'Stakeholder Portals' },
              { id: 'saas', label: 'SaaS & Integrations' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                    : 'glass-ios text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 34 Modules Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <div
              key={module.id}
              onClick={() => setSelectedModuleModal(module)}
              className="glass-ios-card p-6 rounded-3xl border border-slate-200/90 flex flex-col justify-between cursor-pointer group hover:border-blue-300 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[module.iconName] || <Layers className="w-6 h-6 text-blue-600" />}
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                    MODULE #{module.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                    {module.tagline}
                  </p>
                </div>

                {/* Features List Sample */}
                <div className="space-y-1.5 pt-2">
                  {module.featuresList.slice(0, 4).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                  {module.featuresList.length > 4 && (
                    <span className="text-[11px] font-bold text-blue-600 inline-block pt-1">
                      + {module.featuresList.length - 4} more capabilities
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-blue-600 transition-colors">
                <span>View Full Spec</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Module Detail Modal */}
      {selectedModuleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
          <div className="glass-ios max-w-2xl w-full p-6 sm:p-8 rounded-4xl border border-white space-y-6 relative max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {iconMap[selectedModuleModal.iconName]}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">{selectedModuleModal.title}</h3>
                  <p className="text-xs text-slate-500">{selectedModuleModal.tagline}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedModuleModal(null)}
                className="px-3 py-1.5 text-xs font-bold bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300"
              >
                Close
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Complete Included Features List:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedModuleModal.featuresList.map((feat, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-2xl border border-slate-200 flex items-center gap-2.5 text-xs font-semibold text-slate-800 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold">Module #{selectedModuleModal.id} included in all Enterprise Plans</span>
              <button
                onClick={() => { alert("Redirecting to demo setup..."); setSelectedModuleModal(null); }}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-xs font-bold text-white hover:bg-blue-700 shadow-md shadow-blue-500/20"
              >
                Test Module Live
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
