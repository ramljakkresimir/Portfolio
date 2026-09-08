import { useCallback, useState } from "react";
import { Github, Menu } from "lucide-react";

import { site } from "../data/site";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useScrolled } from "../hooks/useScrolled";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const scrolled = useScrolled(8);
  const reduced = usePrefersReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToHref = useCallback(
    (href: string) => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
          block: "start",
        });
      }
    },
    [reduced],
  );

  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      event.preventDefault();
      scrollToHref(href);
    },
    [scrollToHref],
  );

  const handleMobileNavigate = useCallback(
    (href: string) => {
      setMenuOpen(false);
      // Let the overlay finish unmounting before scrolling.
      window.setTimeout(() => scrollToHref(href), reduced ? 0 : 180);
    },
    [reduced, scrollToHref],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? "border-line bg-bg/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="u-container flex h-16 items-center justify-between md:h-20"
        >
          <a
            href="#top"
            onClick={(event) => handleNavClick(event, "#top")}
            className="font-mono text-xs uppercase tracking-label text-fg"
          >
            {site.wordmark}
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {site.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Krešimir Ramljak on GitHub"
              className="text-muted transition-colors hover:text-fg"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>
          </div>

          <button
            type="button"
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-fg md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </nav>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={site.nav}
        onNavigate={handleMobileNavigate}
      />
    </header>
  );
}
