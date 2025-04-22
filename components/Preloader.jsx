'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0, rotateY: -30 },
    animate: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const shineVariants = {
    initial: { x: '-100%', opacity: 0.5 },
    animate: {
      x: '100%',
      opacity: 0.8,
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  // If not loading, don't render the preloader
  if (!loading) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #FF9A8B 0%, #FFB6C1 100%)',
      }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full w-2 h-2 opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${2 + Math.random() * 3}s infinite ease-in-out ${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* 3D effect logo */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          className="relative w-64 h-64 mb-8 perspective-1000"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Main circular logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-white shadow-[0_0_50px_rgba(255,255,255,0.8)] flex items-center justify-center" 
              style={{
                transform: 'translateZ(20px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2), inset 0 5px 10px rgba(255,255,255,0.5)',
              }}
            >
              <div className="w-48 h-48 rounded-full bg-palette-1 flex items-center justify-center transform hover:scale-105 duration-500 relative overflow-hidden"
                style={{
                  boxShadow: 'inset 0 5px 15px rgba(255,255,255,0.5), inset 0 -5px 15px rgba(0,0,0,0.2)',
                }}
              >
                {/* 3D effect layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                
                {/* Shine effect */}
                <motion.div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  variants={shineVariants}
                  initial="initial"
                  animate="animate"
                />
                
                <div className="absolute bottom-0 right-0 w-full h-1/2 bg-black/10 transform skew-x-12" />
                
                {/* Logo text */}
                <div className="font-dancing font-bold text-7xl text-white tracking-wider transform -rotate-6"
                  style={{
                    textShadow: '0 2px 10px rgba(0,0,0,0.3), 0 4px 5px rgba(0,0,0,0.2)',
                  }}
                >R</div>
              </div>
            </div>
          </div>
          
          {/* Outer rotating ring */}
          <div className="absolute inset-0 flex items-center justify-center animate-[spin_6s_linear_infinite]">
            <div className="w-60 h-60 rounded-full border-2 border-dashed border-palette-3/70" />
          </div>
          
          {/* Second rotating ring (opposite direction) */}
          <div className="absolute inset-0 flex items-center justify-center animate-[spin_8s_linear_infinite_reverse]">
            <div className="w-52 h-52 rounded-full border-1 border-dotted border-white/50" />
          </div>
        </motion.div>
        
        {/* Brand name */}
        <motion.div 
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <h1 className="font-dancing font-bold text-5xl text-white mb-2"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >Rhij Aesthetics</h1>
          <p className="font-playfair text-white/90 text-lg">Where beauty is our priority</p>
          
          {/* Loading indicator */}
          <div className="mt-6 flex justify-center items-center">
            <div className="relative w-32 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: '100%',
                  transition: { duration: 3, ease: 'easeInOut' },
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Add custom CSS for floating animation */}
      <style jsx="true" global="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(0.8); opacity: 0.5; }
          50% { transform: translateY(-20px) scale(1); opacity: 0.9; }
        }
      `}</style>
    </motion.div>
  );
};

export default Preloader;