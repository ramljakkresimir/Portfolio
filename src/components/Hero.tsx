import { ArrowDownRight, Github } from "lucide-react";

import { site } from "../data/site";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Hero() {
  const reduced = usePrefersReducedMotion();

  const handleWorkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.querySelector("#work")?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40 lg:pb-36 lg:pt-48"
    >
      {/* Very faint vertical hairlines — the only decorative element on the page. */}
      <div
        aria-hidden="true"
        className="u-grid-lines pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
      />

      <Container className="relative">
        <Reveal>
          <p className="u-label">{site.role}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-5 text-[clamp(2.75rem,8vw,6.25rem)] font-medium leading-[0.98] tracking-tighter2">
            {site.name}
          </h1>
        </Reveal>

        <div className="mt-8 grid gap-10 md:mt-12 md:grid-cols-12 md:gap-8">
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-[clamp(1.35rem,2.6vw,2rem)] font-medium leading-[1.2] tracking-tightish text-fg">
              {site.hero.headline}
            </p>
            <p className="mt-3 text-[clamp(1.35rem,2.6vw,2rem)] font-medium leading-[1.2] tracking-tightish text-muted">
              {site.hero.statement}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-5 md:pt-2">
            <p className="max-w-md text-[15px] leading-relaxed text-muted">
              {site.hero.supporting}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-3 md:mt-14">
            <a
              href="#work"
              onClick={handleWorkClick}
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              View my work
              <ArrowDownRight
                size={16}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-fg"
            >
              <Github size={16} strokeWidth={1.5} />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-10 flex items-center gap-3 text-[13px] text-muted">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
            />
            {site.availability}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
