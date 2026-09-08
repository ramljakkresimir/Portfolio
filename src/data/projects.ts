import type { Project } from "../types";

import oblogaCover from "../assets/projects/obloga/cover.webp";
import oblogaShot1 from "../assets/projects/obloga/obloga1.webp";
import oblogaShot2 from "../assets/projects/obloga/obloga2.webp";

import megaCover from "../assets/projects/megaplastic/mega.webp";
import megaShot1 from "../assets/projects/megaplastic/mega1.webp";
import megaShot2 from "../assets/projects/megaplastic/mega2.webp";

import cargoCover from "../assets/projects/cargo-connect/cargo.webp";
import cargoShot1 from "../assets/projects/cargo-connect/cargo1.webp";
import cargoShot2 from "../assets/projects/cargo-connect/cargo2.webp";

import fitnessCover from "../assets/projects/fitnessapp/Dashboard.webp";
import fitnessShot1 from "../assets/projects/fitnessapp/FoodDiary2.webp";
import fitnessShot2 from "../assets/projects/fitnessapp/Weight.webp";
import fitnessShot3 from "../assets/projects/fitnessapp/Exercises.webp";
/**
 * Selected work.
 *
 * To attach real screenshots: drop image files into
 * `src/assets/projects/<slug>/`, import them at the top of this file, and set
 * `coverImage` (and optionally `gallery`) on the matching project. Until then an
 * elegant neutral placeholder is rendered.
 *
 * To publish a link: set `githubUrl` / `liveUrl`. An empty string hides that
 * button — it never renders as broken.
 */
export const projects: Project[] = [
  {
    id: "obloga",
    number: "01",
    title: "Obloga.hr",
    coverImage: oblogaCover,
    gallery: [oblogaShot1, oblogaShot2],
    description:
      "E-commerce platform for a Croatian interior products retailer.",
    category: "E-commerce",
    year: "2024",
    type: "E-commerce / Client project",
    role: "Design & Development",
    technologies: ["WordPress", "WooCommerce", "HTML/CSS", "SEO"],
    overview: [
      "A complete web shop developed for a client on WordPress, focused on presenting and selling interior products through a clean and responsive shopping experience.",
      "The project was built end to end: product catalogue architecture and navigation, WooCommerce e-commerce functionality, payment system integration, and the overall product presentation.",
      "Alongside the store build, the work included a responsive design pass across devices and an SEO setup so the catalogue is discoverable.",
    ],
    features: [
      "Complete web shop development",
      "WordPress implementation",
      "E-commerce functionality with WooCommerce",
      "Responsive design across devices",
      "Product catalogue and navigation",
      "Payment system integration",
      "SEO setup",
    ],
    githubUrl: "",
    liveUrl: "https://obloga.hr/",
  },
  {
    id: "megaplastic",
    number: "02",
    title: "Megaplastic Hrvatska",
    coverImage: megaCover,
    gallery: [megaShot1, megaShot2],
    description:
      "Catalogue website presenting a company's products through structured categories and galleries.",
    category: "Product catalogue",
    year: "",
    type: "Product catalogue / Client website",
    role: "Design & Development",
    technologies: ["WordPress", "Elementor", "HTML/CSS"],
    overview: [
      "A modern catalogue website developed for a client to present the company's products through clearly structured categories and galleries.",
      "The site was built with WordPress and Elementor, with a responsive layout, a modern user interface and simple navigation so visitors can move through the product range quickly.",
    ],
    features: [
      "WordPress development",
      "Elementor implementation",
      "Responsive layout",
      "Structured product categories",
      "Product galleries",
      "Simple, clear navigation",
    ],
    githubUrl: "",
    liveUrl: "https://megaplastic-hrvatska.hr/",
  },
  {
    id: "cargo-connect",
    number: "03",
    title: "Cargo Connect",
    coverImage: cargoCover,
    gallery: [cargoShot1, cargoShot2],
    description:
      "Logistics marketplace connecting cargo owners and carriers across Bosnia and Herzegovina and Croatia.",
    category: "Logistics marketplace",
    year: "2026",
    type: "Full-stack web application",
    role: "Design & Development",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Leaflet",
    ],
    overview: [
      "CargoConnect is a logistics connection platform for Bosnia and Herzegovina and Croatia. It lets companies, freight forwarders and owner-drivers publish cargo shipments or available vehicle capacity, then search and message counterparties to arrange transport jobs.",
      "The platform provides normalised city data, route-corridor matching for vehicles, and lightweight trust signals through verified accounts and star ratings. It is organised as an npm-workspaces monorepo: a NestJS API with TypeORM and PostgreSQL, and a React + Vite single-page app with Leaflet maps, deployed on Vercel.",
      "The work spanned design and full-stack implementation — authentication and verification, the matching logic, in-app messaging and the admin dashboard.",
    ],
    features: [
      "Email + password auth with mandatory verification (bcrypt, JWT HS256)",
      "Adaptive Turnstile CAPTCHA on registration, login and password reset",
      "Cargo and vehicle post CRUD with ownership scoping and public browsing",
      "Route-corridor matching using OpenRouteService geometry and city proximity",
      "In-app messaging tied to listings with unread count badges",
      "1–5 star user ratings with aggregate summaries",
      "Admin dashboard for user and post moderation and role management",
      "Scheduled daily post expiration (@nestjs/schedule and Vercel Cron)",
    ],
    githubUrl: "https://github.com/ramljakkresimir/cargo-platform",
    liveUrl: "https://cargo-platform-frontend.vercel.app",
  },
  {
    id: "fitnessapp",
    number: "04",
    title: "FitnessApp",
    coverImage: fitnessCover,
    gallery: [fitnessShot1, fitnessShot2, fitnessShot3],
    description:
      "MyFitnessPal-style tracker for nutrition, exercise, hydration and body-weight monitoring.",
    category: "Health tracking",
    year: "2026",
    type: "Full-stack web application",
    role: "Design & Development",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Recharts", "JWT"],
    overview: [
      "FitnessApp is a MyFitnessPal-style web application for health tracking across nutrition, exercise, hydration and body weight.",
      "It pairs food logging and macro tracking with MET-based exercise calorie burn to show a net-calorie picture for each day, and includes a BMR/TDEE calculator based on the Mifflin–St Jeor equation. Food names are available in both English and Croatian.",
      "The stack is a React frontend with Recharts for the weight history chart, an Express API with express-validator, and PostgreSQL, with JWT authentication and bcryptjs.",
    ],
    features: [
      "Daily food diary with protein, carb and fat macro tracking",
      "Exercise logging across 19 types with MET-based burn calculations",
      "Net-calorie view: consumed, burned and remaining allowance",
      "Water intake quick-add with daily goals",
      "Weight history line chart with a target-weight reference",
      "BMR/TDEE calculator using the Mifflin–St Jeor equation",
      "Bilingual English / Croatian food names",
      "JWT authentication with bcryptjs",
    ],
    githubUrl: "https://github.com/ramljakkresimir/FitnessApp",
    liveUrl: "",
  },
];
