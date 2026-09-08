import { ArrowUpRight, Github } from "lucide-react";

import type { Project } from "../types";

interface ProjectLinksProps {
  project: Pick<Project, "githubUrl" | "liveUrl" | "title">;
  /** "solid" for the header, "outline" for the footer repeat. */
  variant?: "solid" | "outline";
  className?: string;
}

/**
 * GitHub + Live website buttons. A button is only rendered when its URL is set,
 * so an empty link never shows as broken.
 */
export function ProjectLinks({
  project,
  variant = "outline",
  className = "",
}: ProjectLinksProps) {
  const { githubUrl, liveUrl, title } = project;

  if (!githubUrl && !liveUrl) return null;

  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-fg text-bg hover:bg-accent"
      : "border border-line text-fg hover:border-fg";

  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`.trim()}>
      {githubUrl ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} on GitHub (opens in a new tab)`}
          className={`${base} ${styles}`}
        >
          <Github size={15} strokeWidth={1.5} />
          GitHub
          <ArrowUpRight size={14} strokeWidth={1.75} className="opacity-60" />
        </a>
      ) : null}
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} live website (opens in a new tab)`}
          className={`${base} ${styles}`}
        >
          Live website
          <ArrowUpRight size={14} strokeWidth={1.75} className="opacity-60" />
        </a>
      ) : null}
    </div>
  );
}
