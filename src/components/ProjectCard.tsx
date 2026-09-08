import { ArrowUpRight } from "lucide-react";

import type { Project } from "../types";
import { Reveal } from "./Reveal";
import { ProjectPlaceholder } from "./ProjectPlaceholder";

interface ProjectCardProps {
  project: Project;
  /** Index in the list — drives the alternating desktop layout. */
  index: number;
  onOpen: (id: string, trigger: HTMLButtonElement) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const previewFirst = index % 2 === 0;
  const meta = [project.category, project.year].filter(Boolean).join(" · ");

  return (
    <Reveal>
      <article className="group relative border-t border-line pt-8 md:pt-12">
        <div className="grid gap-6 md:grid-cols-12 md:gap-10">
          {/* Preview */}
          <div
            className={`md:col-span-7 ${
              previewFirst ? "md:order-1" : "md:order-2"
            }`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-surface">
              {project.coverImage ? (
                <img
                  src={project.coverImage}
                  alt={`${project.title} — project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
                />
              ) : (
                <ProjectPlaceholder
                  label={project.title}
                  className="transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
                />
              )}
            </div>
          </div>

          {/* Text */}
          <div
            className={`flex flex-col md:col-span-5 md:justify-center ${
              previewFirst ? "md:order-2" : "md:order-1"
            }`}
          >
            <span className="font-mono text-xs tracking-label text-muted">
              {project.number}
            </span>

            <h3 className="mt-3 text-2xl font-medium tracking-tighter2 md:text-[1.75rem]">
              {project.title}
            </h3>

            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
              {project.description}
            </p>

            {meta ? (
              <p className="mt-4 font-mono text-[11px] uppercase tracking-label text-muted">
                {meta}
              </p>
            ) : null}

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg">
              View project
              <ArrowUpRight
                size={15}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>

        {/* One control covers the whole block. Tags/heading stay non-interactive. */}
        <button
          type="button"
          onClick={(event) => onOpen(project.id, event.currentTarget)}
          aria-haspopup="dialog"
          className="absolute inset-0 rounded-xl focus-visible:outline-offset-4"
        >
          <span className="sr-only">View {project.title} project details</span>
        </button>
      </article>
    </Reveal>
  );
}
