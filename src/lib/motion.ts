import type { Variants } from "framer-motion";

/**
 * Shared motion primitives. Each factory takes `reduced` so a single
 * `usePrefersReducedMotion()` call at the call site can collapse every
 * animation to a plain opacity fade with no movement.
 */

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const revealVariants = (reduced: boolean, delay = 0): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0.2 : 0.55, ease: EASE_OUT, delay },
  },
});

export const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const modalPanelVariants = (
  reduced: boolean,
  isMobile: boolean,
): Variants => {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.15 } },
      exit: { opacity: 0, transition: { duration: 0.12 } },
    };
  }

  if (isMobile) {
    return {
      hidden: { opacity: 0, y: "6%" },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: EASE_OUT },
      },
      exit: { opacity: 0, y: "6%", transition: { duration: 0.25 } },
    };
  }

  return {
    hidden: { opacity: 0, y: 12, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: EASE_OUT },
    },
    exit: { opacity: 0, y: 8, scale: 0.99, transition: { duration: 0.2 } },
  };
};
