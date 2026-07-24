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
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-primary/30 text-xs font-semibold text-primary-400">
                <Sparkles className="w-4 h-4" />
                <span>EXPERIENCE SCHOOLOS LIVE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Schedule a Personalized <span className="text-gradient-primary">Live Demo</span>
              </h2>
              <p className="text-base text-slate-400">
                Our education technology consultants will demonstrate how SchoolOS can automate your institution's exams, fees, and operations.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Official Sales & Support Email</div>
                  <div className="font-bold text-white">support@schoolos.app</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">WhatsApp Executive Hotline</div>
                  <div className="font-bold text-white">+91 98765 43210 (24/7 Active)</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Headquarters</div>
                  <div className="font-bold text-white">SchoolOS Tech Park, Cyber City, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Demo Request Confirmed!</h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>. Our senior education advisor will call you within 2 hours to walk through SchoolOS for <span className="text-white font-bold">{formData.schoolName || 'your institution'}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-white hover:bg-slate-800"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">Book Your Free Live Demo</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="principal@school.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">School / College Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Apex International School"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Estimated Student Strength</label>
                  <select
                    value={formData.studentCount}
                    onChange={(e) => setFormData({...formData, studentCount: e.target.value})}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-primary"
                  >
                    <option>Under 500 Students</option>
                    <option>500 - 1,500 Students</option>
                    <option>1,500 - 5,000 Students</option>
                    <option>5,000+ Students (Multi-Branch Trust)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Specific Requirements (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us if you want specific focus on AI Question Paper Generator, Fees, or Transport..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-sm shadow-xl shadow-primary/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
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
