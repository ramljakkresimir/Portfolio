import { ArrowUpRight } from "lucide-react";

import { site } from "../data/site";
import { Reveal } from "./Reveal";

interface ContactLink {
  label: string;
  href: string;
  external: boolean;
}

export function Contact() {
  const links: ContactLink[] = [
    { label: "Email", href: `mailto:${site.email}`, external: false },
    ...(site.linkedinUrl
      ? [{ label: "LinkedIn", href: site.linkedinUrl, external: true }]
      : []),
    { label: "GitHub", href: site.githubUrl, external: true },
  ];

  return (
    <div className="grid gap-10 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-7">
        <Reveal>
          <h2
            id="contact-heading"
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-tighter2"
          >
            Let&rsquo;s build something.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
            Open to software development opportunities, collaborations and
            interesting projects.
          </p>
        </Reveal>
      </div>

      <div className="md:col-span-5">
        <Reveal delay={0.1}>
          <ul className="border-t border-line">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center justify-between border-b border-line py-5 text-lg font-medium tracking-tightish text-fg transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
