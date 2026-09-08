interface ProjectPlaceholderProps {
  /** Project title, shown faintly so it is obvious which screenshot belongs here. */
  label: string;
  className?: string;
}

/**
 * Neutral stand-in shown until a real screenshot is added for a project.
 * Deliberately plain — no stock photography, no fake UI.
 */
export function ProjectPlaceholder({
  label,
  className = "",
}: ProjectPlaceholderProps) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-surface ${className}`.trim()}
      role="img"
      aria-label={`${label} — project preview placeholder`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5] [background-image:repeating-linear-gradient(135deg,rgb(var(--color-fg)/0.05)_0,rgb(var(--color-fg)/0.05)_1px,transparent_1px,transparent_11px)]"
      />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <span className="font-mono text-[11px] uppercase tracking-label text-muted">
          {label}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-label text-muted/70">
          Screenshot to be added
        </span>
      </div>
    </div>
  );
}
