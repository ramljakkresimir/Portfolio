import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import type { Project } from "../types";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import {
  modalPanelVariants,
  overlayVariants,
} from "../lib/motion";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectPlaceholder } from "./ProjectPlaceholder";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  /** Element focus returns to after the modal closes. */
  returnFocusRef: React.RefObject<HTMLElement | null>;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

export function ProjectModal({
  project,
  onClose,
  returnFocusRef,
}: ProjectModalProps) {
  const reduced = usePrefersReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const titleId = useId();
  const descId = useId();

  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keep the last project mounted through the exit animation.
  const [rendered, setRendered] = useState<Project | null>(project);
  useEffect(() => {
    if (project) setRendered(project);
  }, [project]);

  const open = Boolean(project);
  useLockBodyScroll(open);

  // Move focus into the dialog when it opens; restore it when it closes.
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 20);
    return () => {
      window.clearTimeout(timer);
      returnFocusRef.current?.focus();
    };
  }, [open, returnFocusRef]);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null || el === closeButtonRef.current);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && (active === first || !panel.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  if (typeof document === "undefined") return null;

  const p = rendered;

  const metaItems: { label: string; value: string }[] = [
    { label: "Role", value: p?.role ?? "" },
    { label: "Type", value: p?.type ?? "" },
    ...(p?.year ? [{ label: "Year", value: p.year }] : []),
  ];

  return createPortal(
    <AnimatePresence>
      {open && p ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-stretch justify-center md:items-center md:p-6"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onKeyDown={onKeyDown}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            variants={overlayVariants}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            variants={modalPanelVariants(reduced, isMobile)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 flex h-full w-full flex-col overflow-hidden bg-bg md:h-auto md:max-h-[90vh] md:w-[88vw] md:max-w-[1360px] md:rounded-2xl md:border md:border-line"
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-bg/90 px-5 py-4 backdrop-blur md:px-10 md:py-5">
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-label text-muted">
                  {p.number} — {p.category}
                </p>
                <h2
                  id={titleId}
                  className="mt-1 truncate text-lg font-medium tracking-tighter2 md:text-2xl"
                >
                  {p.title}
                </h2>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <ProjectLinks
                  project={p}
                  variant="outline"
                  className="hidden md:flex"
                />
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close project details"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-fg"
                >
                  <X size={17} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-5 py-8 md:px-10 md:py-12">
              <div className="mx-auto max-w-3xl">
                <p
                  id={descId}
                  className="text-[clamp(1.1rem,1.6vw,1.35rem)] leading-snug text-fg"
                >
                  {p.description}
                </p>

                <div className="mt-8 overflow-hidden rounded-xl border border-line bg-surface">
                  <div className="aspect-[16/9] w-full">
                    {p.coverImage ? (
                      <img
                        src={p.coverImage}
                        alt={`${p.title} — project preview`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <ProjectPlaceholder label={p.title} />
                    )}
                  </div>
                </div>

                {p.gallery && p.gallery.length > 0 ? (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {p.gallery.map((src, i) => (
                      <div
                        key={src}
                        className="overflow-hidden rounded-xl border border-line bg-surface"
                      >
                        <img
                          src={src}
                          alt={`${p.title} — detail ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* Metadata */}
                <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
                  {metaItems.map((item) => (
                    <div key={item.label}>
                      <dt className="font-mono text-[10px] uppercase tracking-label text-muted">
                        {item.label}
                      </dt>
                      <dd className="mt-1.5 text-sm text-fg">{item.value}</dd>
                    </div>
                  ))}
                  <div className="col-span-2 sm:col-span-1">
                    <dt className="font-mono text-[10px] uppercase tracking-label text-muted">
                      Technologies
                    </dt>
                    <dd className="mt-1.5 flex flex-wrap gap-1.5">
                      {p.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line px-2 py-0.5 text-[11px] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                {/* Overview */}
                <div className="mt-10 border-t border-line pt-8">
                  <h3 className="font-mono text-[10px] uppercase tracking-label text-muted">
                    Overview
                  </h3>
                  <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted">
                    {p.overview.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Key work / features */}
                <div className="mt-10 border-t border-line pt-8">
                  <h3 className="font-mono text-[10px] uppercase tracking-label text-muted">
                    Key work / features
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {p.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-[15px] leading-relaxed text-fg"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <ProjectLinks
                  project={p}
                  variant="solid"
                  className="mt-12 border-t border-line pt-8"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
