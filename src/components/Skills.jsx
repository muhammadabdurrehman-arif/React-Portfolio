import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPython, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaCode, FaBrain, FaWrench 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiCplusplus, SiTensorflow, SiOpencv, SiSqlite, SiFramer, SiOpenai 
} from 'react-icons/si';

const categories = [
  { name: "All", id: "all" },
  { name: "Technical", id: "technical" },
  { name: "Development", id: "development" },
  { name: "AI Tools", id: "ai_tools" }
];

const skillsData = [
  // Technical Skills
  { name: "Python", val: 95, icon: <FaPython />, type: "technical" },
  { name: "React JS", val: 90, icon: <FaReact />, type: "technical" },
  { name: "JavaScript", val: 88, icon: <FaJs />, type: "technical" },
  { name: "HTML5", val: 95, icon: <FaHtml5 />, type: "technical" },
  { name: "CSS3", val: 90, icon: <FaCss3Alt />, type: "technical" },
  { name: "Tailwind CSS", val: 92, icon: <SiTailwindcss />, type: "technical" },
  { name: "C++", val: 80, icon: <SiCplusplus />, type: "technical" },
  { name: "TensorFlow", val: 85, icon: <SiTensorflow />, type: "technical" },
  { name: "OpenCV", val: 87, icon: <SiOpencv />, type: "technical" },
  { name: "SQLite3", val: 83, icon: <SiSqlite />, type: "technical" },
  { name: "Tkinter", val: 85, icon: <FaCode />, type: "technical" },
  { name: "Machine Learning", val: 88, icon: <FaBrain />, type: "technical" },
  { name: "Logistic Regression", val: 86, icon: <FaBrain />, type: "technical" },
  { name: "Git & GitHub", val: 90, icon: <FaGitAlt />, type: "technical" },
  { name: "Responsive Design", val: 94, icon: <FaCode />, type: "technical" },
  { name: "Framer Motion", val: 85, icon: <SiFramer />, type: "technical" },
  { name: "UI/UX Design", val: 87, icon: <FaCode />, type: "technical" },

  // Development Skills
  { name: "Frontend Development", val: 93, icon: <FaCode />, type: "development" },
  { name: "AI App Development", val: 89, icon: <FaBrain />, type: "development" },
  { name: "Software Engineering", val: 85, icon: <FaCode />, type: "development" },
  { name: "Problem Solving", val: 90, icon: <FaWrench />, type: "development" },
  { name: "Debugging", val: 92, icon: <FaWrench />, type: "development" },
  { name: "API Integration", val: 88, icon: <FaCode />, type: "development" },
  { name: "Responsive Web Design", val: 94, icon: <FaCode />, type: "development" },
  { name: "Game Development", val: 84, icon: <FaCode />, type: "development" },

  // AI Tools
  { name: "ChatGPT", val: 95, icon: <SiOpenai />, type: "ai_tools" },
  { name: "Claude AI", val: 93, icon: <SiOpenai />, type: "ai_tools" },
  { name: "DeepSeek AI", val: 90, icon: <FaBrain />, type: "ai_tools" },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skillsData.filter(
    skill => activeCategory === "all" || skill.type === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glowing circle */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />

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
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f0ff]"
          />
        </div>

        {/* Category Filters */}
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

        {/* Featured Skill Gauges (Circular dials) for top skillsets */}
        {activeCategory === "all" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Python", val: 95, color: "text-neon-blue", stroke: "#00f0ff" },
              { name: "React JS", val: 90, color: "text-neon-purple", stroke: "#bd00ff" },
              { name: "TensorFlow", val: 85, color: "text-yellow-500", stroke: "#eab308" },
              { name: "Machine Learning", val: 88, color: "text-emerald-400", stroke: "#34d399" }
            ].map((skill, index) => {
              const radius = 40;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (skill.val / 100) * circumference;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center space-y-4 hover:glow-border"
                >
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    {/* Circle Gauge SVG */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        className="stroke-slate-800"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r={radius}
                        stroke={skill.stroke}
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <span className="absolute font-orbitron font-black text-lg text-white">
                      {skill.val}%
                    </span>
                  </div>
                  <span className="font-orbitron font-bold text-sm tracking-wide text-slate-300 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Dynamic Skills List Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="glass-card p-5 rounded-2xl flex flex-col justify-between hover:glow-border border border-white/5 relative group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3 text-slate-300">
                    <span className="text-xl p-2 bg-white/5 rounded-lg group-hover:text-neon-blue transition-colors duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-orbitron text-xs font-bold tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-neon-blue">
                    {skill.val}%
                  </span>
                </div>

                {/* Progress bar line */}
                <div className="w-full bg-slate-800/40 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-neon-blue to-neon-purple h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
export default Skills;
