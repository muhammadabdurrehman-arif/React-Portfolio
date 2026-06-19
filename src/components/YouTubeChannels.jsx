import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaVideo, FaGamepad, FaUsers, FaPlay } from 'react-icons/fa';

const channels = [
  {
    name: "Laiba Khan",
    content: "Drama shorts and entertainment videos.",
    icon: <FaVideo className="w-5 h-5 text-rose-500" />,
    metrics: "120k+ Views",
    gradient: "from-rose-600 to-orange-500",
    banner: "🎭 Drama Shorts"
  },
  {
    name: "Nanha Tunes",
    content: "Kids entertainment and educational content.",
    icon: <FaUsers className="w-5 h-5 text-amber-500" />,
    metrics: "Kids Special",
    gradient: "from-amber-500 to-yellow-400",
    banner: "🧸 Learning & Fun"
  },
  {
    name: "Gaming Channel @M.r_ARA",
    content: "Gaming videos, tutorials, technical edits, and hacker-style gaming content.",
    icon: <FaGamepad className="w-5 h-5 text-red-500" />,
    metrics: "Active Gameplay",
    gradient: "from-red-600 to-rose-600",
    banner: "🎮 Gaming & Edits"
  }
];

export const YouTubeChannels = () => {
  return (
    <section id="youtube" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background neon grid elements */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-red-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-rose-500/5 blur-3xl rounded-full pointer-events-none" />

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
            YouTube <span className="text-red-500">Channels</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)]"
          />
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {channels.map((chan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card hover:glow-border rounded-3xl overflow-hidden flex flex-col justify-between group border border-white/5 shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Cover Banner Mock */}
              <div className={`h-28 bg-gradient-to-br ${chan.gradient} flex items-center justify-center p-6 relative`}>
                <span className="font-orbitron font-black text-white text-sm tracking-widest bg-black/30 backdrop-blur px-4 py-2 rounded-xl border border-white/10 shadow-md">
                  {chan.banner}
                </span>
                
                {/* Visual red glow logo */}
                <div className="absolute top-4 right-4 p-2 bg-black/40 rounded-full border border-white/10 text-red-500">
                  <FaYoutube className="w-4 h-4" />
                </div>
              </div>

              {/* Information body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-orbitron font-extrabold text-base text-white group-hover:text-red-500 transition-colors duration-200">
                    {chan.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {chan.content}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="flex items-center space-x-2 text-[10px] font-mono text-slate-400">
                    {chan.icon}
                    <span>{chan.metrics}</span>
                  </span>
                  
                  {/* Simulate Play action */}
                  <span className="inline-flex items-center space-x-1 font-orbitron text-[10px] font-black text-red-500 hover:text-red-400 tracking-wider">
                    <FaPlay className="w-2.5 h-2.5" />
                    <span>WATCH SHORTS</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default YouTubeChannels;
