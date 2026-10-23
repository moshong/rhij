export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
    opacity: 1,
  },
});

// Shared easing: fast start, long soft landing.
export const ease = [0.16, 1, 0.3, 1];

export const textVariant = (delay) => ({
  hidden: {
    y: 24,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.1,
      ease,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.9,
      ease,
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 24 : direction === 'right' ? -24 : 0,
    y: direction === 'up' ? 24 : direction === 'down' ? -24 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration: Math.max(duration || 0, 1),
      ease,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};

export const animateOnScroll = {
  initial: {
    y: 50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.6
    },
  },
  whileHover: {
    scale: 1.2,
    transition: {
      duration: 0.2
    },
  },
  whileTap: {
    scale: 1
  },
}
