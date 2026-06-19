import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaPython, FaBrain, FaRegIdCard, FaMobileAlt, FaPaintBrush, FaCode, FaGamepad 
} from 'react-icons/fa';

const services = [
  {
    icon: <FaReact className="w-6 h-6 text-neon-blue" />,
    title: "React JS Web Dev",
    desc: "Building highly interactive, component-driven, fast, responsive web apps using modern React paradigms."
  },
  {
    icon: <FaPython className="w-6 h-6 text-neon-purple" />,
    title: "Python Development",
    desc: "Writing clean, efficient, scalable scripts, automated scripts, GUI layouts, and database adapters."
  },
  {
    icon: <FaBrain className="w-6 h-6 text-emerald-400" />,
    title: "AI Application Dev",
    desc: "Integrating pre-trained computer vision pipelines, custom TensorFlow predictions, and LLM completions."
  },
  {
    icon: <FaRegIdCard className="w-6 h-6 text-yellow-500" />,
    title: "Portfolio Web Design",
    desc: "Designing tailored personal brand hubs featuring gorgeous visuals and animations for recruiters."
  },
  {
    icon: <FaMobileAlt className="w-6 h-6 text-cyan-400" />,
    title: "Responsive Design",
    desc: "Implementing fluid mobile-first layouts that render beautifully across all display dimensions."
  },
  {
    icon: <FaPaintBrush className="w-6 h-6 text-rose-500" />,
    title: "UI/UX Design",
    desc: "Drafting sleek interactive cards, curated color schemas, glass interfaces, and micro-interactions."
  },
  {
    icon: <FaCode className="w-6 h-6 text-indigo-400" />,
    title: "Frontend Engineering",
    desc: "Converting structural layouts and styling rules into semantic, clean, lint-free JavaScript modules."
  },
  {
    icon: <FaGamepad className="w-6 h-6 text-emerald-500" />,
    title: "3D Game Development",
    desc: "Scaffolding immersive 3D simulation tracks, player movement systems, and AI models in Python."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />

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
            My <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f0ff]"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card hover:glow-border p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {srv.icon}
                </div>
                <h3 className="font-orbitron font-extrabold text-sm text-white group-hover:text-neon-blue transition-colors duration-200">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  {srv.desc}
                </p>
              </div>

              {/* Card visual footer */}
              <div className="w-6 h-0.5 bg-neon-blue mt-6 group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Services;
