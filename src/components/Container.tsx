import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * Centered content column with a consistent max-width and responsive gutters.
 * Keeps the layout anchored on wide displays instead of drifting right.
 */
export function Container({
  as: Tag = "div",
  className = "",
  children,
}: ContainerProps) {
  return <Tag className={`u-container ${className}`.trim()}>{children}</Tag>;
}
