import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-slate-200/50 backdrop-blur-xl shadow-sm text-sm font-semibold text-slate-700"
              >
                <Sparkles className="w-4 h-4 text-vision-blueGlow" />
                <span>Schedule a live demo</span>
              </motion.div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Experience SchoolOS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-blueGlow to-vision-cyan">live in action.</span>
              </h2>
              <p className="text-lg text-slate-600 font-light max-w-md">
                Our technology consultants will demonstrate how SchoolOS automates student records, fees, biometrics, and exams for your institution.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 bg-white/60 border border-slate-200/50 backdrop-blur-xl rounded-[1.5rem] shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Sales & Support</div>
                  <div className="font-bold text-slate-900">support@schoolos.app</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white/60 border border-slate-200/50 backdrop-blur-xl rounded-[1.5rem] shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">WhatsApp Executive</div>
                  <div className="font-bold text-slate-900">+91 98765 43210 (24/7)</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white/60 border border-slate-200/50 backdrop-blur-xl rounded-[1.5rem] shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Headquarters</div>
                  <div className="font-bold text-slate-900">Tech Park, Cyber City</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/80 border border-slate-200/50 backdrop-blur-2xl p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-vision-blueGlow/5 to-transparent pointer-events-none" />
            
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-6 relative z-10"
              >
                <div className="w-20 h-20 rounded-full bg-vision-cyan/10 text-vision-cyan flex items-center justify-center mx-auto border border-vision-cyan/20">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Demo Requested!</h3>
                <p className="text-base text-slate-600 max-w-md mx-auto font-light">
                  Thank you, <span className="text-slate-900 font-semibold">{formData.name}</span>. Our advisor will call you within 2 hours to walk through SchoolOS for <span className="text-slate-900 font-semibold">{formData.schoolName || 'your institution'}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-8 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Your Free Live Demo</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-4 rounded-2xl bg-white/50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-vision-blueGlow focus:ring-2 focus:ring-vision-blueGlow/20 transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="principal@school.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-4 rounded-2xl bg-white/50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-vision-blueGlow focus:ring-2 focus:ring-vision-blueGlow/20 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-4 rounded-2xl bg-white/50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-vision-blueGlow focus:ring-2 focus:ring-vision-blueGlow/20 transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Institution Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Apex International School"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                      className="w-full p-4 rounded-2xl bg-white/50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-vision-blueGlow focus:ring-2 focus:ring-vision-blueGlow/20 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Student Strength</label>
                  <select
                    value={formData.studentCount}
                    onChange={(e) => setFormData({...formData, studentCount: e.target.value})}
                    className="w-full p-4 rounded-2xl bg-white/50 border border-slate-200 text-slate-900 focus:outline-none focus:border-vision-blueGlow focus:ring-2 focus:ring-vision-blueGlow/20 transition-all shadow-sm appearance-none"
                  >
                    <option>Under 500 Students</option>
                    <option>500 - 1,500 Students</option>
                    <option>1,500 - 5,000 Students</option>
                    <option>5,000+ Students (Multi-Branch Trust)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-4 rounded-2xl bg-slate-900 text-white font-bold text-base shadow-[0_10px_30px_rgba(15,23,42,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
