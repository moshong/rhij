'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SpaLoaderScene from './SpaLoaderScene';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  // Three.js/WebGL only exists in the browser — render it only after mount
  // so the server-rendered HTML never includes it (avoids hydration mismatches).
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    initial: { y: 16, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: 'easeOut',
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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFF6F0 0%, #FDEFE9 45%, #F9E4DC 100%)',
      }}
    >
      {/* Ambient three.js motif — soft drifting orbs for a calm, spa-like feel */}
      {mounted && <SpaLoaderScene />}

      <div className="relative flex flex-col items-center justify-center px-6">
        {/* Logo plaque — sized to the artwork's own 3:2 ratio so nothing crops */}
        <div className="relative w-56 sm:w-64 mb-8">
          {/* Soft ambient glow behind the plaque */}
          <div className="absolute -inset-4 rounded-[2rem] bg-palette-1/10 blur-2xl" />

          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            className="relative w-full aspect-[3/2]"
          >
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/imgs/rhij2.png"
                alt="Rhij Aesthetics"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Brand name */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-gray-400">
            Medical Spa &amp; Skin Care
          </p>

          {/* Minimal loading indicator */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-24 h-[2px] bg-gray-900/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-palette-2/70 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4.5, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
