import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, X } from "lucide-react";

import type { NavLink } from "../types";
import { site } from "../data/site";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  onNavigate: (href: string) => void;
}

export function MobileMenu({
  open,
  onClose,
  links,
  onNavigate,
}: MobileMenuProps) {
  const reduced = usePrefersReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.1 : 0.2 }}
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <span className="font-mono text-xs uppercase tracking-label">
              {site.wordmark}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-fg"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
            {links.map((link, index) => (
              <motion.button
                key={link.href}
                type="button"
                onClick={() => onNavigate(link.href)}
                className="py-3 text-left text-4xl font-medium tracking-tighter2"
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduced ? 0 : 0.06 * index + 0.05,
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          <div className="border-t border-line px-6 py-6">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-muted transition-colors hover:text-fg"
            >
              <Github size={16} strokeWidth={1.5} />
              GitHub
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
