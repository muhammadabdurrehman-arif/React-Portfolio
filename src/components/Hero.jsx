import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaReact, FaJs, FaGitAlt, FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiTensorflow, SiOpencv, SiSqlite 
} from 'react-icons/si';

const subtitles = [
  "Python Developer",
  "React JS Developer",
  "AI Engineer",
  "Game Developer",
  "Software Engineer"
];

const mockCodeSnippets = [
  {
    lang: "python",
    title: "emotion_detector.py",
    code: `import cv2
import tensorflow as tf

# Load pre-trained MobileNet model
model = tf.keras.models.load_model("emotion_model.h5")
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    faces = detect_faces(frame)
    for (x, y, w, h) in faces:
        face_roi = frame[y:y+h, x:x+w]
        prediction = model.predict(face_roi)
        emotion = get_label(prediction)
        cv2.putText(frame, emotion, (x, y-10))
    cv2.imshow("Webcam Live", frame)
`
  },
  {
    lang: "javascript",
    title: "Portfolio.jsx",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const DeveloperProfile = () => {
  const [skills, setSkills] = useState(['React', 'AI', 'Python']);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="developer-dashboard"
    >
      <h1>M. Abdur Rehman Arif</h1>
      <p>Building Futuristic Solutions</p>
    </motion.div>
  );
};
`
  }
];

export const Hero = () => {
  const [subtitleIdx, setSubtitleIdx] = useState(0);
  const [subtitleText, setSubtitleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [snippetIdx, setSnippetIdx] = useState(0);

  // Typewriter effect for subtitles
  useEffect(() => {
    let timer;
    const currentFullText = subtitles[subtitleIdx];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setSubtitleText(prev => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setSubtitleText(currentFullText.slice(0, subtitleText.length + 1));
      }, 100);
    }

    if (!isDeleting && subtitleText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && subtitleText === '') {
      setIsDeleting(false);
      setSubtitleIdx((prev) => (prev + 1) % subtitles.length);
    }

    return () => clearTimeout(timer);
  }, [subtitleText, isDeleting, subtitleIdx]);

  // Rotate code snippet every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setSnippetIdx((prev) => (prev + 1) % mockCodeSnippets.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Abdur_Rehman_Arif_Resume.pdf');
    document.body.appendChild(link);
    alert("CV Download Started!");
    link.click();
    document.body.removeChild(link);
  };

  // Mock github data grid
  const githubActivity = Array.from({ length: 91 }, (_, i) => {
    // Return random shade of green / purple
    const shades = ['bg-slate-800/40', 'bg-emerald-900/30', 'bg-emerald-700/50', 'bg-emerald-500/70', 'bg-emerald-400'];
    const idx = Math.floor(Math.random() * shades.length);
    return shades[idx];
  });

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern dark:bg-grid-pattern"
    >
      {/* Animated glowing blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-neon-blue/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-neon-purple/10 blur-3xl animate-float-delayed pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Profile Card & Bio */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-neon-blue/10 border border-neon-blue/20 rounded-full px-4 py-1.5 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
            </span>
            <span className="font-orbitron text-xs font-bold tracking-widest text-neon-blue uppercase">
              Open to Remote & Multinational Roles
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight"
            >
              Hi, I'm <br />
              <span className="text-gradient font-black">M. Abdur Rehman Arif</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-10 text-xl sm:text-2xl font-orbitron font-semibold text-slate-300 flex items-center space-x-1"
            >
              <span>{subtitleText}</span>
              <span className="w-1.5 h-6 bg-neon-blue animate-pulse"></span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl font-medium leading-relaxed"
          >
            Passionate BS Computer Science student specializing in AI applications, Python development, React JS, machine learning, and 3D game development. I build modern, responsive, intelligent, and visually appealing software solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-4 pt-2"
          >
            <a 
              href="https://github.com/muhammad-abdurrehman3054" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-neon-blue hover:border-neon-blue hover:scale-110 transition-all duration-300"
              title="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mr-abdur-rehman-arif-8785a0328/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-neon-blue hover:border-neon-blue hover:scale-110 transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:abdurrehmanairf29@gmail.com"
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-neon-blue hover:border-neon-blue hover:scale-110 transition-all duration-300"
              title="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
            <a 
              href="tel:03316646083"
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-neon-blue hover:border-neon-blue hover:scale-110 transition-all duration-300"
              title="Phone"
            >
              <FaPhoneAlt className="w-5 h-5" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('contact')}
              className="glow-btn px-6 py-3.5 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-orbitron font-bold text-xs tracking-wider rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              HIRE ME
            </button>
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3.5 bg-white/5 border border-white/10 text-white hover:border-neon-blue hover:text-neon-blue font-orbitron font-bold text-xs tracking-wider rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              VIEW PROJECTS
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3.5 bg-white/5 border border-white/10 text-white hover:border-neon-purple hover:text-neon-purple font-orbitron font-bold text-xs tracking-wider rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              DOWNLOAD CV
            </button>
          </motion.div>
        </div>

        {/* Interactive Dashboard / Coding Terminal */}
        <div className="lg:col-span-5 relative">
          
          {/* Floating icons with Framer Motion animations */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-6 bg-cyber-dark/80 backdrop-blur border border-white/10 p-3 rounded-2xl text-neon-blue z-20 shadow-lg pointer-events-none"
          >
            <FaPython className="w-8 h-8" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 right-1/4 bg-cyber-dark/80 backdrop-blur border border-white/10 p-3 rounded-2xl text-neon-purple z-20 shadow-lg pointer-events-none"
          >
            <FaReact className="w-8 h-8 animate-spin-slow" />
          </motion.div>

          <motion.div
            animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -right-8 bg-cyber-dark/80 backdrop-blur border border-white/10 p-3 rounded-2xl text-yellow-500 z-20 shadow-lg pointer-events-none"
          >
            <FaJs className="w-6 h-6" />
          </motion.div>

          {/* Core Code Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative z-10"
          >
            {/* Window bar */}
            <div className="bg-slate-950/70 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs font-orbitron text-slate-500 font-bold">
                {mockCodeSnippets[snippetIdx].title}
              </div>
              <div className="text-xs text-slate-600 font-bold uppercase">
                {mockCodeSnippets[snippetIdx].lang}
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs text-emerald-400 bg-slate-950/40 overflow-x-auto min-h-[220px] max-h-[300px]">
              <pre className="leading-5">
                <code>
                  {mockCodeSnippets[snippetIdx].code}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* GitHub mock graph panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card mt-6 p-4 rounded-2xl border border-white/5 shadow-lg relative z-10"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-orbitron text-xs font-bold tracking-wider text-slate-400 flex items-center space-x-1.5">
                <FaGithub className="w-4 h-4 text-white" />
                <span>Contributions Grid</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">
                365+ Contributions / Year
              </span>
            </div>
            
            <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto py-1">
              {githubActivity.map((shade, idx) => (
                <div 
                  key={idx} 
                  className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 hover:scale-125 hover:shadow-[0_0_8px_#10b981] ${shade}`} 
                />
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default Hero;
