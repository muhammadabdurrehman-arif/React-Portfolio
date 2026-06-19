import React from 'react';
import { useTheme } from './context/ThemeContext';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Services from './components/Services';
import Achievements from './components/Achievements';
import YouTubeChannels from './components/YouTubeChannels';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Shared Utilities
import CanvasParticles from './components/shared/CanvasParticles';
import CustomCursor from './components/shared/CustomCursor';
import ScrollProgress from './components/shared/ScrollProgress';

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-cyber-dark text-slate-100' : 'bg-cyber-light text-slate-900'
    }`}>
      
      {/* Scroll indicator bar at viewport top */}
      <ScrollProgress />

      {/* Floating Canvas particles background */}
      <CanvasParticles />

      {/* Custom lag-behind cursor effect */}
      <CustomCursor />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Page Content Layout */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Services />
        <Achievements />
        <YouTubeChannels />
        <Hobbies />
        <Contact />
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}

export default App;
