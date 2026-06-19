import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Services', id: 'services' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'YouTube', id: 'youtube' },
  { name: 'Contact', id: 'contact' },
];

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950/60 pt-16 pb-8 border-t border-white/5 overflow-hidden">
      {/* Decorative vertical separator line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent shadow-[0_0_10px_#00f0ff]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top footer details */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo / Name */}
          <div className="space-y-2 text-center md:text-left">
            <h3 
              onClick={() => handleScrollTo('home')}
              className="font-orbitron font-black text-2xl tracking-widest text-gradient cursor-pointer hover:scale-105 transition-transform"
            >
              ARA.dev
            </h3>
            <p className="text-xs text-slate-400 font-medium max-w-[250px]">
              "Developing responsive frontends and intelligent machine learning models."
            </p>
          </div>

          {/* Nav links grid */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 max-w-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="font-orbitron text-[10px] font-bold text-slate-400 hover:text-neon-blue uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            {[
              { icon: <FaGithub className="w-4 h-4" />, link: "https://github.com/muhammad-abdurrehman3054", title: "GitHub" },
              { icon: <FaLinkedin className="w-4 h-4" />, link: "https://www.linkedin.com/in/mr-abdur-rehman-arif-8785a0328/", title: "LinkedIn" },
              { icon: <FaEnvelope className="w-4 h-4" />, link: "mailto:abdurrehmanairf29@gmail.com", title: "Email" },
              { icon: <FaPhoneAlt className="w-4 h-4" />, link: "tel:03316646083", title: "Phone" }
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-neon-blue hover:border-neon-blue hover:scale-110 transition-all duration-300 shadow-md"
                title={soc.title}
              >
                {soc.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <span className="font-orbitron tracking-wider text-center">
            © 2026 M. Abdur Rehman Arif | All Rights Reserved
          </span>
          <span className="font-mono uppercase tracking-widest text-[9px] text-neon-purple font-black">
            Engineered in React & Tailwind CSS
          </span>
        </div>

      </div>

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={handleScrollTop}
            className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-black shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] z-30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Back to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
export default Footer;
