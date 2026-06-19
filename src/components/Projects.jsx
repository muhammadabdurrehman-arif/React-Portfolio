import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaRobot, FaCar, FaBiohazard, FaDatabase, FaShoppingBag } from 'react-icons/fa';

const categories = [
  { name: "All Projects", id: "all" },
  { name: "AI / ML", id: "ai" },
  { name: "Python / Games", id: "games" },
  { name: "Web Dev", id: "web" }
];

const projectsData = [
  {
    id: 1,
    title: "Face Emotion Detection",
    subtitle: "using MobileNetCV2",
    category: "ai",
    desc: "AI-powered face emotion detection system built using TensorFlow 2.20 and OpenCV that recognizes seven human emotions in real-time through webcam or image input.",
    tech: ["TensorFlow 2.20", "OpenCV", "Python", "MobileNet"],
    icon: <FaRobot className="w-10 h-10" />,
    gradient: "from-blue-600 to-cyan-500",
    features: [
      "Real-time emotion detection via webcam",
      "Robust face recognition system",
      "Human emotion probability analysis",
      "AI prediction probability visualization bars",
      "Intelligent camera source integration"
    ],
    github: "https://github.com/muhammad-abdurrehman3054",
    demo: "#"
  },
  {
    id: 2,
    title: "3D Car Racing Simulator",
    subtitle: "Realistic Ursina Game",
    category: "games",
    desc: "A realistic 3D car racing simulator game with intelligent AI racers, speedometer UI dashboard, lap counter system, immersive tracks, and smooth gameplay mechanics.",
    tech: ["Python", "Ursina Engine", "Game Physics"],
    icon: <FaCar className="w-10 h-10" />,
    gradient: "from-purple-600 to-indigo-500",
    features: [
      "Realistic driving and drifting physics",
      "Dynamic speedometer and HUD UI dashboard",
      "Intelligent AI racer competitors",
      "Multiple detailed race track environments",
      "Smooth WASD driving controls",
      "Immersive 3D audio tracks"
    ],
    github: "https://github.com/muhammad-abdurrehman3054",
    demo: "#"
  },
  {
    id: 3,
    title: "Zombie Shooter Survival",
    subtitle: "Action Ursina 3D Game",
    category: "games",
    desc: "A 3D zombie shooter survival game featuring AI enemies, mission tracking, weapon inventory systems, survival indicators, and immersive environments.",
    tech: ["Python", "Ursina Engine", "AI Search algorithms"],
    icon: <FaBiohazard className="w-10 h-10" />,
    gradient: "from-red-600 to-rose-500",
    features: [
      "Zombie pathfinding and tracking AI system",
      "Hardcore survival resource mechanics",
      "Multiple weapons (pistol, assault rifle) with ammo inventory",
      "Intense mission stages and boss fights",
      "First-person shooting controls",
      "Procedurally spawned wave alerts"
    ],
    github: "https://github.com/muhammad-abdurrehman3054",
    demo: "#"
  },
  {
    id: 4,
    title: "Diabetes Risk Prediction",
    subtitle: "Machine Learning GUI App",
    category: "ai",
    desc: "Machine learning application for predicting diabetes risk using Logistic Regression models with a user-friendly GUI interface and SQLite3 local database integration.",
    tech: ["Python", "Tkinter", "SQLite3", "Scikit-Learn"],
    icon: <FaDatabase className="w-10 h-10" />,
    gradient: "from-emerald-600 to-teal-500",
    features: [
      "Trained Logistic Regression predictive ML model",
      "User-friendly desktop form wizard UI",
      "Historical patient record analysis logs",
      "Secure SQLite3 local database management",
      "Instant risk percentage scoring metrics"
    ],
    github: "https://github.com/muhammad-abdurrehman3054",
    demo: "#"
  },
  {
    id: 5,
    title: "ZTA Brand E-Commerce",
    subtitle: "Responsive Online Shop",
    category: "web",
    desc: "Modern fully responsive apparel brand e-commerce website with attractive glass-styled layout UI, animated shopping pages, interactive contact widgets, and optimized performance.",
    tech: ["React JS", "HTML5", "CSS3", "JavaScript"],
    icon: <FaShoppingBag className="w-10 h-10" />,
    gradient: "from-orange-600 to-amber-500",
    features: [
      "100% responsive fluid mobile layouts",
      "Smooth page animations and hover transitions",
      "Dynamic catalog filters and product listings",
      "Working AJAX email contact forms",
      "Optimized load times and asset configurations"
    ],
    github: "https://github.com/muhammad-abdurrehman3054",
    demo: "#"
  }
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(
    proj => activeCategory === "all" || proj.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background radial effects */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />

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
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f0ff]"
          />
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-orbitron text-xs font-bold tracking-wider border transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-black border-transparent shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="interactive-card glass-card rounded-3xl overflow-hidden group border border-white/5 hover:border-neon-blue/40 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(proj)}
              >
                {/* Visual Header Render (Futuristic abstract pattern instead of static images) */}
                <div className={`relative h-48 bg-gradient-to-br ${proj.gradient} flex items-center justify-center p-6 overflow-hidden`}>
                  {/* Decorative circles */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/10 blur-xl group-hover:scale-150 transition-all duration-500" />
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-black/20 blur-md" />

                  {/* Centered Graphic Render */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                    className="p-5 bg-black/30 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-xl relative z-10"
                  >
                    {proj.icon}
                  </motion.div>

                  {/* Overlay text detail indicator */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-20">
                    <span className="font-orbitron font-bold text-xs tracking-widest text-neon-blue bg-slate-950/80 border border-neon-blue/30 px-4 py-2 rounded-xl shadow-lg">
                      EXPLORE SPECIFICATIONS
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-orbitron text-[10px] font-black text-neon-blue tracking-widest uppercase">
                      {proj.category.toUpperCase()}
                    </span>
                    <h3 className="font-orbitron font-extrabold text-lg text-white group-hover:text-neon-blue transition-colors duration-200 leading-tight">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tech list */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-2 py-1 bg-white/5 border border-white/10 rounded-md font-mono text-[9px] font-bold text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-3xl z-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
              >
                {/* Visual Header */}
                <div className={`h-40 bg-gradient-to-r ${selectedProject.gradient} p-6 relative flex items-end justify-between`}>
                  <div className="absolute top-4 right-4 z-20">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 bg-black/30 border border-white/20 rounded-full hover:bg-black/60 text-white transition-colors duration-200 cursor-pointer"
                    >
                      <FaTimes className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="relative z-10 space-y-1">
                    <span className="font-orbitron text-[10px] font-black text-black bg-white/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h2 className="font-orbitron font-black text-2xl text-white drop-shadow-md">
                      {selectedProject.title}
                    </h2>
                  </div>
                  <div className="p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-lg mb-1 hidden sm:block">
                    {selectedProject.icon}
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Summary */}
                  <div className="space-y-2">
                    <h3 className="font-orbitron text-xs font-black tracking-widest text-slate-400 uppercase">
                      Overview
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                      {selectedProject.desc}
                    </p>
                  </div>

                  {/* Core Features list */}
                  <div className="space-y-3">
                    <h3 className="font-orbitron text-xs font-black tracking-widest text-slate-400 uppercase">
                      Key Specifications & Features
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-medium">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-neon-blue mt-0.5">⚡</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="space-y-2.5">
                    <h3 className="font-orbitron text-xs font-black tracking-widest text-slate-400 uppercase">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg font-mono text-[10px] font-bold text-neon-blue"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer actions */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-5 py-3 bg-white/5 border border-white/10 text-white hover:border-neon-blue hover:text-neon-blue font-orbitron font-bold text-xs tracking-wider rounded-xl hover:scale-105 transition-all duration-300"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>GITHUB REPOSITORY</span>
                    </a>
                    <a
                      href={selectedProject.demo}
                      onClick={(e) => {
                        if (selectedProject.demo === '#') {
                          e.preventDefault();
                          alert("Demo links are simulated for portfolio review.");
                        }
                      }}
                      className="glow-btn flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-orbitron font-bold text-xs tracking-wider rounded-xl hover:scale-105 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      <span>LIVE PREVIEW</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
export default Projects;
