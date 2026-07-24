import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    studentCount: '500-1500 Students',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-ios border border-blue-200 text-xs font-bold text-blue-600">
                <Sparkles className="w-4 h-4" />
                <span>SCHEDULE YOUR LIVE 1-ON-1 DEMO</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Experience All 34 SchoolOS <span className="text-gradient-blue">Modules Live</span>
              </h2>
              <p className="text-base text-slate-600">
                Our senior technology consultants will demonstrate how SchoolOS automates student records, fees, biometrics, exams, and mobile apps for your institution.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-4 p-4 glass-ios-card rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Official Sales & Support Email</div>
                  <div className="font-extrabold text-slate-900">support@schoolos.app</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-ios-card rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">WhatsApp Executive Hotline</div>
                  <div className="font-extrabold text-slate-900">+91 98765 43210 (24/7 Active)</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-ios-card rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Headquarters</div>
                  <div className="font-extrabold text-slate-900">SchoolOS Tech Park, Cyber City, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 glass-ios-card p-8 sm:p-10 rounded-4xl border border-slate-200/90 shadow-ios-float relative">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Demo Request Confirmed!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. Our education advisor will call you within 2 hours to walk through SchoolOS for <span className="text-slate-900 font-bold">{formData.schoolName || 'your institution'}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-xs font-bold text-slate-900 hover:bg-slate-200"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Book Your Free Live 1-on-1 Demo</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="principal@school.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">School / College Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Apex International School"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                      className="w-full p-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Estimated Student Strength</label>
                  <select
                    value={formData.studentCount}
                    onChange={(e) => setFormData({...formData, studentCount: e.target.value})}
                    className="w-full p-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  >
                    <option>Under 500 Students</option>
                    <option>500 - 1,500 Students</option>
                    <option>1,500 - 5,000 Students</option>
                    <option>5,000+ Students (Multi-Branch Trust)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Live 1-on-1 Demo</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
