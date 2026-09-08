import type { TechnologyGroup } from "../types";
import { Reveal } from "./Reveal";

interface TechStackProps {
  groups: TechnologyGroup[];
}

/**
 * Grouped, typographic technology list. No bars, no logos.
 */
export function TechStack({ groups }: TechStackProps) {
  return (
    <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
      {groups.map((group, index) => (
        <Reveal key={group.title} delay={index * 0.05}>
          <div className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-7 md:py-8">
            <h3 className="font-mono text-[11px] uppercase tracking-label text-muted">
              {group.title}
            </h3>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[17px] leading-snug tracking-tightish text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
