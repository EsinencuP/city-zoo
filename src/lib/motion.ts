export const easing = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: easing }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easing }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: easing }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 }
  }
};

export const staggerItem = fadeUp;

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easing }
  }
};

export const cardHover = {
  y: -4,
  transition: { duration: 0.18, ease: easing }
};

export const softFloat = {
  y: [0, -10, 0],
  transition: { duration: 9, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" }
};

export const popupMotion = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: easing }
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeIn" }
  }
};

export const markerPulse = {
  scale: [1, 1.14, 1],
  transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
};

export const botanicalDrift = {
  x: [0, 8, -4, 0],
  y: [0, -12, 6, 0],
  rotate: [0, 2, -1, 0],
  transition: { duration: 12, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" }
};
