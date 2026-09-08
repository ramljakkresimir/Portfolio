import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { revealVariants } from "../lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to delay the reveal — useful for hand-tuned sequencing. */
  delay?: number;
  as?: "div" | "li" | "span";
}

/**
 * Fades and lifts its children into view once, the first time they are scrolled
 * near. Collapses to a short opacity-only fade under prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={revealVariants(reduced, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
