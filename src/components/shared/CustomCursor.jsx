import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const CustomCursor = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 300, mass: 0.8 };
  const outlineX = useSpring(cursorX, springConfig);
  const outlineY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Track if hovering buttons or links
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .interactive-card');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    // Re-check for elements periodically as sections render
    const interval = setInterval(addHoverListeners, 1500);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(interval);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Glowing Dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: isDark ? '#00f0ff' : '#2563eb',
          boxShadow: isDark ? '0 0 10px #00f0ff' : '0 0 10px #2563eb',
          scale: isHovered ? 1.5 : 1,
        }}
      />
      {/* Outer Springing Circle */}
      <motion.div
        className="custom-cursor-outline"
        style={{
          x: outlineX,
          y: outlineY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: isDark ? '#bd00ff' : '#7c3aed',
          boxShadow: isHovered 
            ? isDark ? '0 0 15px rgba(189, 0, 255, 0.4)' : '0 0 15px rgba(124, 58, 237, 0.4)'
            : 'none',
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered 
            ? isDark ? 'rgba(189, 0, 255, 0.05)' : 'rgba(124, 58, 237, 0.05)' 
            : 'transparent',
        }}
      />
    </>
  );
};
export default CustomCursor;
