import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCopy, FaCheck } from 'react-icons/fa';

export const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formFocused, setFormFocused] = useState({ name: false, email: false, subject: false, message: false });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFocus = (field) => {
    setFormFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, val) => {
    if (!val) {
      setFormFocused(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Message Sent Successfully!\nThank you, ${formData.name}. M. Abdur Rehman Arif will review your inquiry shortly.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormFocused({ name: false, email: false, subject: false, message: false });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Visual neon particles */}
      <div className="absolute top-1/4 left-1/10 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-black tracking-widest uppercase"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f0ff]"
          />
        </div>

        {/* Outer Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left panel: Info Details & Location Radar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards */}
            <div className="space-y-4">
              {[
                { 
                  icon: <FaPhoneAlt className="w-4 h-4 text-neon-blue" />, 
                  label: "Phone Contact", 
                  val: "03316646083", 
                  field: "phone",
                  link: "tel:03316646083" 
                },
                { 
                  icon: <FaEnvelope className="w-4 h-4 text-neon-purple" />, 
                  label: "Email Address", 
                  val: "abdurrehmanairf29@gmail.com", 
                  field: "email",
                  link: "mailto:abdurrehmanairf29@gmail.com" 
                },
                { 
                  icon: <FaMapMarkerAlt className="w-4 h-4 text-emerald-400" />, 
                  label: "Location Base", 
                  val: "Pakistan", 
                  field: "loc",
                  link: "#" 
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  className="glass-card hover:glow-border p-5 rounded-2xl flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/5 rounded-xl group-hover:scale-105 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <div className="space-y-1">
                      <span className="font-orbitron text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {card.label}
                      </span>
                      <a href={card.link} className="block text-sm font-semibold text-white hover:text-neon-blue transition-colors">
                        {card.val}
                      </a>
                    </div>
                  </div>

                  {card.field !== "loc" && (
                    <button
                      onClick={() => handleCopy(card.val, card.field)}
                      className={`p-2 rounded-lg bg-white/5 border border-white/10 hover:border-neon-blue/30 text-slate-400 hover:text-white transition-all cursor-pointer`}
                      title="Copy to clipboard"
                    >
                      {copiedField === card.field ? <FaCheck className="w-3.5 h-3.5 text-neon-blue" /> : <FaCopy className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Futuristic Vector Location Radar (Instead of generic iframe) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 rounded-3xl border border-white/5 space-y-4 relative overflow-hidden"
            >
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="font-orbitron text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Location Radar
                </span>
                <span className="text-[10px] font-mono text-neon-blue font-bold">
                  Active Coordinates: Jhang / GCUF
                </span>
              </div>
              
              {/* Radial Sweep Visual Map Placeholder */}
              <div className="relative h-44 bg-slate-950/70 border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Radial circles */}
                <div className="absolute w-36 h-36 border border-neon-blue/20 rounded-full animate-pulse" />
                <div className="absolute w-24 h-24 border border-neon-blue/10 rounded-full" />
                <div className="absolute w-12 h-12 border border-neon-blue/5 rounded-full" />
                
                {/* Sweep hand animation */}
                <div className="absolute w-[50%] h-[1px] bg-gradient-to-r from-transparent to-neon-blue/55 origin-left left-1/2 top-1/2 transform -rotate-45"
                  style={{ animation: 'spin 4s linear infinite' }}
                />

                {/* Glow node marker representing user */}
                <div className="absolute top-1/3 left-1/2 flex h-3.5 w-3.5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-purple shadow-[0_0_8px_#bd00ff]"></span>
                </div>

                <span className="absolute bottom-4 font-orbitron text-[10px] font-black text-slate-500 tracking-widest uppercase">
                  PAKISTAN REGION
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right panel: Animated Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form header */}
                <div className="border-b border-white/5 pb-4">
                  <h3 className="font-orbitron font-extrabold text-base text-white">Send a Message</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Available for inquiries & projects
                  </p>
                </div>

                {/* Name */}
                <div className="relative">
                  <label 
                    className={`absolute left-3 transition-all duration-300 pointer-events-none font-orbitron text-xs font-bold tracking-wider ${
                      formFocused.name || formData.name 
                        ? '-top-5 text-[10px] text-neon-blue font-black' 
                        : 'top-3 text-slate-500'
                    }`}
                  >
                    NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    onFocus={() => handleFocus('name')}
                    onBlur={(e) => handleBlur('name', e.target.value)}
                    className="w-full bg-slate-950/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,240,255,0.15)] font-semibold transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label 
                    className={`absolute left-3 transition-all duration-300 pointer-events-none font-orbitron text-xs font-bold tracking-wider ${
                      formFocused.email || formData.email 
                        ? '-top-5 text-[10px] text-neon-blue font-black' 
                        : 'top-3 text-slate-500'
                    }`}
                  >
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    onFocus={() => handleFocus('email')}
                    onBlur={(e) => handleBlur('email', e.target.value)}
                    className="w-full bg-slate-950/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,240,255,0.15)] font-semibold transition-all"
                  />
                </div>

                {/* Subject */}
                <div className="relative">
                  <label 
                    className={`absolute left-3 transition-all duration-300 pointer-events-none font-orbitron text-xs font-bold tracking-wider ${
                      formFocused.subject || formData.subject 
                        ? '-top-5 text-[10px] text-neon-blue font-black' 
                        : 'top-3 text-slate-500'
                    }`}
                  >
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    onFocus={() => handleFocus('subject')}
                    onBlur={(e) => handleBlur('subject', e.target.value)}
                    className="w-full bg-slate-950/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,240,255,0.15)] font-semibold transition-all"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label 
                    className={`absolute left-3 transition-all duration-300 pointer-events-none font-orbitron text-xs font-bold tracking-wider ${
                      formFocused.message || formData.message 
                        ? '-top-5 text-[10px] text-neon-blue font-black' 
                        : 'top-3 text-slate-500'
                    }`}
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    onFocus={() => handleFocus('message')}
                    onBlur={(e) => handleBlur('message', e.target.value)}
                    className="w-full bg-slate-950/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,240,255,0.15)] font-semibold transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="glow-btn w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-orbitron font-bold text-xs tracking-widest rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  {isSubmitting ? "SENDING INQUIRY..." : "SEND MESSAGE"}
                </button>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
