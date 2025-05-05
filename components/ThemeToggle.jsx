'use client';

import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const variants = {
    visible: { 
      rotate: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    hidden: { 
      rotate: 90,
      scale: 0.5,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`flex items-center justify-center w-10 h-10 rounded-full focus:outline-none transition-colors ${theme === 'light' ? 'bg-white/10' : 'bg-dark-surface'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={theme === 'light' ? 'visible' : 'hidden'}
        variants={variants}
        initial={false}
      >
        <FaMoon className="text-palette-1 hover:text-palette-2 transition-colors" size={20} />
      </motion.div>
      
      <motion.div
        animate={theme === 'dark' ? 'visible' : 'hidden'}
        variants={variants}
        initial={false}
        style={{ position: 'absolute' }}
      >
        <FaSun className="text-dark-primary hover:text-dark-secondary transition-colors" size={20} />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;