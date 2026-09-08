/**
 * Shared content types for the portfolio.
 *
 * All user-facing copy lives in `src/data/*`. These interfaces describe the
 * shape of that data so presentation components never have to guess.
 */

export interface Project {
  /** Stable identifier, used as the key and modal target. */
  id: string;
  /** Display index, e.g. "01". */
  number: string;
  title: string;
  /** One line shown on the card. */
  description: string;
  /** Short label, e.g. "E-commerce". */
  category: string;
  /** Four-digit year, or "" when unknown (then it is not rendered). */
  year: string;
  /** Longer classification shown in the modal, e.g. "Full-stack web application". */
  type: string;
  /** Krešimir's role on the project, e.g. "Design & Development". */
  role: string;
  technologies: string[];
  /** Modal overview — one string per paragraph. */
  overview: string[];
  /** Modal "Key work / features" — 3–6 concise items. */
  features: string[];
  /** Main preview image import. Omit to render an elegant placeholder. */
  coverImage?: string;
  /** Optional additional screenshots. */
  gallery?: string[];
  /** Repository URL, or "" when there is no public repo (button is hidden). */
  githubUrl: string;
  /** Live site URL, or "" when none exists yet (button is hidden). */
  liveUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  /** Optional secondary line, e.g. a programme name. */
  roleNote?: string;
  /** e.g. "2025 — 2026" or "2025". */
  period: string;
  /** Short paragraph shown when there are no bullet points. */
  summary?: string;
  /** Bullet points describing the work. */
  highlights?: string[];
  technologies: string[];
}

export interface TechnologyGroup {
  /** e.g. "Backend". */
  title: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  qualification: string;
  period: string;
  location: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  /** Uppercase wordmark used in the navbar and footer. */
  wordmark: string;
  role: string;
  location: string;
  availability: string;
  email: string;
  githubUrl: string;
  /** LinkedIn profile URL. Leave "" to hide every LinkedIn link. */
  linkedinUrl: string;
  hero: {
    headline: string;
    statement: string;
    supporting: string;
  };
  nav: NavLink[];
}
