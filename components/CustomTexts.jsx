'use client';

import { motion } from 'framer-motion';
import { textVariant2 } from '../utils/motion';

// Small uppercase section label. Callers may still pass a leading "| ".
export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textVariant2}
    className={`font-sans font-semibold text-[13px] uppercase tracking-[0.25em] text-palette-2 dark:text-palette-1 ${textStyles}`}
  >
    {title.replace(/^\|\s*/, '')}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-3 font-cormorant font-medium md:text-[56px] text-[38px] leading-[1.05] text-[#2B2220] dark:text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
