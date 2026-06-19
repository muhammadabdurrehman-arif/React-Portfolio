import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBookOpen } from 'react-icons/fa';

const educationData = [
  {
    degree: "BS Computer Science",
    institution: "Government College University Faisalabad / Govt. Graduate College Jhang",
    session: "2022 – 2026",
    details: "Focusing on artificial intelligence, modern software engineering models, data structures, and game architecture. Currently maintaining advanced development project track records.",
    roll: "Roll Number: 110229"
  },
  {
    degree: "ICS (Intermediate in Computer Science)",
    institution: "Government Graduate College Jhang",
    session: "Completed",
    details: "Foundational studies in programming paradigms, computer architecture, databases, and mathematics."
  }
];

const coursework = [
  "Software Engineering",
  "Artificial Intelligence",
  "Data Structures",
  "Database Systems",
  "Machine Learning",
  "Web Development",
  "Programming Fundamentals"
];

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />

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
            Education <span className="text-gradient">Timeline</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f0ff]"
          />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Vertical Timeline column */}
          <div className="lg:col-span-7 relative pl-8 border-l border-white/10 space-y-12">
            
            {/* Timeline Neon Line */}
            <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-neon-blue to-neon-purple shadow-[0_0_10px_#00f0ff]" />

            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Node Dot marker */}
                <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border-2 border-neon-blue shadow-[0_0_8px_#00f0ff] z-10">
                  <FaGraduationCap className="w-3.5 h-3.5 text-neon-blue" />
                </span>

                <div className="glass-card hover:glow-border p-6 rounded-2xl space-y-3 cursor-pointer group">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div className="space-y-1">
                      <span className="font-orbitron text-[10px] font-black text-neon-purple uppercase tracking-widest">
                        {edu.session}
                      </span>
                      <h3 className="font-orbitron font-extrabold text-lg text-white group-hover:text-neon-blue transition-colors duration-200">
                        {edu.degree}
                      </h3>
                    </div>
                    {edu.roll && (
                      <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md font-mono text-[9px] font-bold text-slate-300">
                        {edu.roll}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-slate-300">
                    {edu.institution}
                  </p>
                  
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

          {/* Coursework column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 space-y-6"
            >
              <div className="flex items-center space-x-3 text-white border-b border-white/5 pb-4">
                <span className="p-2.5 bg-white/5 rounded-xl text-neon-blue">
                  <FaBookOpen className="w-5 h-5" />
                </span>
                <div className="space-y-0.5">
                  <h3 className="font-orbitron font-extrabold text-base">Relevant Coursework</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Academic Subjects
                  </p>
                </div>
              </div>

              {/* Coursework tags */}
              <div className="flex flex-wrap gap-2.5">
                {coursework.map((course, idx) => (
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    key={idx}
                    className="px-3.5 py-2 bg-slate-950/60 border border-white/5 hover:border-neon-blue/40 hover:text-neon-blue rounded-xl font-orbitron text-xs font-bold text-slate-300 shadow-md cursor-pointer transition-all duration-200"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>

              {/* Professional description */}
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/5">
                These core modules have provided me with a robust theoretical and practical framework in algorithms, data structuring models, intelligence engineering, and design protocols.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Education;
