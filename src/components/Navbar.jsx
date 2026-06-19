import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';

const navLinks = [
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

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      setScrolled(window.scrollY > 20);

      // Active section scrollspy
      const scrollPosition = window.scrollY + 150;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleDownloadCV = () => {
    // Generate dummy PDF download
    const cvUrl = '#'; // In a real project, this links to the public resume PDF
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Abdur_Rehman_Arif_Resume.pdf');
    document.body.appendChild(link);
    // Alert user or execute
    alert("CV Download Started! (Note: This is a demo resume download link)");
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-cyber-dark/85 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-white/80 backdrop-blur-md border-b border-black/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.05)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <span className="font-orbitron text-2xl font-bold tracking-wider relative">
            <span className="text-gradient">ARA</span>
            <span className={isDark ? 'text-white' : 'text-slate-900'}>.dev</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative px-3 py-2 rounded-md font-orbitron text-sm font-semibold tracking-wider transition-colors duration-200 cursor-pointer ${
                activeSection === link.id
                  ? isDark
                    ? 'text-neon-blue'
                    : 'text-blue-600'
                  : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple shadow-[0_0_8px_#00f0ff] rounded" />
              )}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
              isDark
                ? 'border-white/10 hover:border-neon-blue text-slate-300 hover:text-neon-blue bg-white/5 hover:bg-neon-blue/10'
                : 'border-slate-200 hover:border-blue-500 text-slate-600 hover:text-blue-500 bg-black/5 hover:bg-blue-500/10'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>

          {/* Download CV */}
          <button
            onClick={handleDownloadCV}
            className={`flex items-center space-x-2 font-orbitron text-xs font-bold tracking-widest px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer glow-btn ${
              isDark
                ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-black shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)]'
                : 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_4px_15px_rgba(37,99,235,0.3)]'
            }`}
          >
            <FiDownload className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-all duration-200 cursor-pointer ${
              isDark ? 'border-white/10 text-slate-300' : 'border-slate-200 text-slate-600'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>

          {/* Hamburger Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg border transition-all duration-200 cursor-pointer ${
              isDark
                ? 'border-white/10 text-slate-300 hover:text-white'
                : 'border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
            aria-label="Open menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`fixed inset-y-0 right-0 w-72 z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out border-l shadow-[0_0_40px_rgba(0,0,0,0.5)] ${
          isDark
            ? 'bg-cyber-dark/95 backdrop-blur-lg border-white/5'
            : 'bg-white/95 backdrop-blur-lg border-black/5'
        } lg:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <span className="font-orbitron text-xl font-bold text-gradient">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className={`p-2 rounded-lg border cursor-pointer ${
              isDark ? 'border-white/10 text-slate-300' : 'border-slate-200 text-slate-600'
            }`}
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col px-6 py-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left py-2 px-3 rounded-lg font-orbitron text-sm font-semibold tracking-wide transition-all ${
                activeSection === link.id
                  ? isDark
                    ? 'bg-neon-blue/10 text-neon-blue border-l-2 border-neon-blue'
                    : 'bg-blue-500/10 text-blue-600 border-l-2 border-blue-500'
                  : isDark
                    ? 'text-slate-400 hover:bg-white/5 hover:text-white'
                    : 'text-slate-600 hover:bg-black/5 hover:text-slate-900'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-6 border-t border-white/10">
            <button
              onClick={handleDownloadCV}
              className={`w-full flex items-center justify-center space-x-2 font-orbitron text-xs font-bold tracking-widest py-3 rounded-xl cursor-pointer ${
                isDark
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_4px_15px_rgba(37,99,235,0.3)]'
              }`}
            >
              <FiDownload className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </nav>
  );
};
export default Navbar;
