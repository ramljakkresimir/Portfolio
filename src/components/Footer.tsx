import { site } from "../data/site";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 text-sm text-muted sm:flex-row sm:items-center sm:gap-3">
          <span className="text-fg">{site.name}</span>
          <span aria-hidden="true" className="hidden sm:inline">
            ·
          </span>
          <span>© {year}</span>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-fg"
          >
            GitHub
          </a>
          {site.linkedinUrl ? (
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-fg"
            >
              LinkedIn
            </a>
          ) : null}
        </div>

        <p className="font-mono text-[11px] uppercase tracking-label text-muted">
          Built with React &amp; TypeScript
        </p>
      </Container>
    </footer>
  );
}
