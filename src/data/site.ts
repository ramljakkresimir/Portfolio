import type { SiteConfig } from "../types";

/**
 * Central site configuration.
 *
 * Edit contact details, the hero copy and navigation here — nothing else in the
 * codebase hard-codes this information.
 */
export const site: SiteConfig = {
  name: "Krešimir Ramljak",
  wordmark: "Krešimir Ramljak",
  role: "Full Stack Developer",
  location: "Croatia, Bosnia and Herzegovina",
  availability: "Based in Croatia · Open to opportunities",

  email: "ramljakkresimir@gmail.com",
  githubUrl: "https://github.com/ramljakkresimir",
  // Leave as "" to hide every LinkedIn link on the site.
  linkedinUrl: "https://www.linkedin.com/in/kresimir-ramljak-32686729b/",

  hero: {
    headline: "Full Stack Developer",
    statement:
      "Building practical web applications, backend systems and digital products.",
    supporting:
      "Developer focused on creating maintainable web applications and real-world digital solutions — from backend architecture and APIs to responsive user interfaces.",
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};
