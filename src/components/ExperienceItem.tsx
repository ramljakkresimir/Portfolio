import type { Experience } from "../types";
import { Reveal } from "./Reveal";

interface ExperienceItemProps {
  item: Experience;
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <Reveal as="li">
      <div className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-label text-muted">
            {item.period}
          </p>
        </div>

        <div className="md:col-span-9">
          <h3 className="text-xl font-medium tracking-tighter2 md:text-2xl">
            {item.company}
          </h3>
          <p className="mt-1 text-sm text-fg">
            {item.role}
            {item.roleNote ? (
              <span className="text-muted"> · {item.roleNote}</span>
            ) : null}
          </p>

          {item.summary ? (
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              {item.summary}
            </p>
          ) : null}

          {item.highlights && item.highlights.length > 0 ? (
            <ul className="mt-4 max-w-xl space-y-2 text-[15px] leading-relaxed text-muted">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
