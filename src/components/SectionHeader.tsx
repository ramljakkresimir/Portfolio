import type { ReactNode } from "react";

import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  /** e.g. "01 / Selected work" — rendered uppercase in mono. */
  label: string;
  heading: string;
  /** Optional id applied to the heading so a section can be labelled by it. */
  headingId?: string;
  children?: ReactNode;
}

/**
 * Consistent section intro: a small mono label above an editorial heading.
 */
export function SectionHeader({
  label,
  heading,
  headingId,
  children,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <p className="u-label flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-px w-8 bg-line"
          />
          {label}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          id={headingId}
          className="mt-6 text-[clamp(2rem,4vw,3.25rem)] leading-[1.05]"
        >
          {heading}
        </h2>
      </Reveal>
      {children ? (
        <Reveal delay={0.1}>
          <div className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
            {children}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
