import type { TechnologyGroup } from "../types";

/**
 * Grouped technology list. No proficiency bars — just what is used.
 * NestJS, Express, TypeScript and Vite are included on the basis of the
 * Cargo Connect and FitnessApp repositories.
 */
export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Laravel", "Node.js", "NestJS", "Express"],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Vite", "Angular"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "SQL"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Gradle"],
  },
];
