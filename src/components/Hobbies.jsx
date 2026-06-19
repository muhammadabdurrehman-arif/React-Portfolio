import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaBrain, FaGamepad, FaPalette, FaPaintBrush, FaLightbulb, FaVideo, FaTrophy 
} from 'react-icons/fa';

const hobbies = [
  { name: "Programming", icon: <FaCode className="text-neon-blue" />, desc: "Writing scripts and building pipelines." },
  { name: "AI Learning", icon: <FaBrain className="text-neon-purple" />, desc: "Studying transformer patterns & vision arrays." },
  { name: "Game Development", icon: <FaGamepad className="text-emerald-400" />, desc: "Modeling Ursina levels and AI competition physics." },
  { name: "Graphic Designing", icon: <FaPalette className="text-yellow-500" />, desc: "Prototyping vector shapes and typography details." },
  { name: "Gaming", icon: <FaTrophy className="text-rose-500" />, desc: "Playing action games and analyzing UI elements." },
  { name: "UI/UX Design", icon: <FaPaintBrush className="text-indigo-400" />, desc: "Drafting micro-interactions and smooth components." },
  { name: "Learning Tech", icon: <FaLightbulb className="text-cyan-400" />, desc: "Evaluating frameworks, packages, and compilers." },
  { name: "YouTube Content", icon: <FaVideo className="text-red-500" />, desc: "Editing game montages and educational tracks." }
];

export const Hobbies = () => {
  return (
    <section id="hobbies" className="py-24 relative overflow-hidden bg-slate-950/20">
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
            Hobbies & <span className="text-gradient">Interests</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f0ff]"
          />
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {hobbies.map((hby, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card hover:glow-border p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 cursor-pointer group"
            >
              <div className="p-3 bg-white/5 rounded-xl text-xl group-hover:scale-110 transition-transform duration-300">
                {hby.icon}
              </div>
              <h3 className="font-orbitron font-extrabold text-xs text-white group-hover:text-neon-blue transition-colors duration-200">
                {hby.name}
              </h3>
              <p className="text-[10px] text-slate-400 leading-normal font-medium max-w-[150px]">
                {hby.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Hobbies;
