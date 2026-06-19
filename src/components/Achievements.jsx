import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaReact, FaGamepad, FaEye, FaGithub, FaBrain } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaRobot className="w-5 h-5 text-neon-blue" />,
    title: "AI applications developed",
    desc: "Built multiple intelligence-based pipelines including face detection and data analytics tools."
  },
  {
    icon: <FaReact className="w-5 h-5 text-neon-purple" />,
    title: "React JS builds deployed",
    desc: "Engineered responsive, state-driven frontends utilizing modern CSS frameworks and libraries."
  },
  {
    icon: <FaGamepad className="w-5 h-5 text-emerald-400" />,
    title: "3D Game builds compiled",
    desc: "Coded interactive racing and combat survival gameplay engines inside Python environments."
  },
  {
    icon: <FaEye className="w-5 h-5 text-yellow-500" />,
    title: "TensorFlow & OpenCV expertise",
    desc: "Implemented real-time visual prediction nodes, ROI extractions, and object classifying grids."
  },
  {
    icon: <FaGithub className="w-5 h-5 text-cyan-400" />,
    title: "Active GitHub contributor",
    desc: "Publishing clean repositories, tracking progress commits, and engaging with open source ideas."
  },
  {
    icon: <FaBrain className="w-5 h-5 text-rose-500" />,
    title: "Continuous tech education",
    desc: "Constantly expanding mastery across LLMs, generative layers, API structures, and frameworks."
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />

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
            My <span className="text-gradient">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f0ff]"
          />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card hover:glow-border p-6 rounded-2xl flex items-start space-x-4 cursor-pointer group"
            >
              <div className="p-3 bg-white/5 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                {ach.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-orbitron font-extrabold text-sm text-white group-hover:text-neon-blue transition-colors duration-200">
                  {ach.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Achievements;
