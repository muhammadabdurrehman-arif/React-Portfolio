import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBrain, FaAward, FaCalendarAlt } from 'react-icons/fa';

const stats = [
  { icon: <FaCalendarAlt className="w-5 h-5 text-neon-blue" />, value: "4+", label: "Years Coding Study" },
  { icon: <FaLaptopCode className="w-5 h-5 text-neon-purple" />, value: "15+", label: "Projects Completed" },
  { icon: <FaBrain className="w-5 h-5 text-emerald-400" />, value: "10+", label: "AI & ML Models Built" },
  { icon: <FaAward className="w-5 h-5 text-yellow-500" />, value: "5+", label: "3D Game Builds" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background shapes */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-black tracking-widest uppercase relative"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f0ff]"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Presentation (Glass Photo Frame Grid) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl p-1 bg-gradient-to-tr from-neon-blue via-transparent to-neon-purple shadow-[0_20px_40px_rgba(0,0,0,0.5)] group overflow-hidden"
            >
              <div className="absolute inset-0 bg-slate-900 rounded-2xl" />
              
              {/* Decorative Glow Grid */}
              <div className="absolute inset-1 rounded-2xl overflow-hidden glass-card flex flex-col justify-center items-center text-center p-6 space-y-4">
                
                {/* Tech Avatar Shell */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple p-0.5 shadow-lg shadow-neon-blue/20">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                    {/* Render a futuristic code profile icon */}
                    <FaLaptopCode className="w-12 h-12 text-slate-100 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-orbitron font-bold text-lg text-white">M. Abdur Rehman Arif</h3>
                  <p className="text-xs font-semibold text-neon-blue uppercase tracking-widest font-orbitron">
                    BS Computer Science
                  </p>
                </div>

                <p className="text-xs text-slate-400 font-medium max-w-[240px]">
                  "Developing responsive frontend designs and intelligent machine learning models."
                </p>

                {/* Info badging */}
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-300">
                  <span>GCU Faisalabad</span>
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full" />
                  <span>Session: 2022-26</span>
                </div>

              </div>

            </motion.div>
            
          </div>

          {/* Bio & Animated Stats Grid */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-slate-300 font-medium leading-relaxed"
            >
              <p>
                I am a passionate Computer Science student with a strong interest in artificial intelligence, software engineering, web development, and game development.
              </p>
              <p>
                I enjoy creating high-quality applications, intelligent AI systems, responsive websites, and immersive gaming experiences.
              </p>
              <p>
                My expertise includes Python, React JS, JavaScript, machine learning, OpenCV, TensorFlow, UI/UX design, and frontend development. I continuously learn modern technologies and improve my development skills to work with international clients, innovative startups, and multinational companies.
              </p>
            </motion.div>

            {/* Numeric Stats Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card hover:glow-border p-4 rounded-2xl flex flex-col justify-center items-center text-center space-y-2 group cursor-pointer"
                >
                  <div className="p-2 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-gradient font-orbitron">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default About;
