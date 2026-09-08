# Krešimir Ramljak — Portfolio

Personal developer portfolio. React + TypeScript + Vite + Tailwind CSS, with
Framer Motion for subtle motion and Lucide for icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Production build

```bash
npm run build     # type-checks, then builds to dist/
npm run preview   # serve the built output locally
```

The output in `dist/` is a static site. Deploy it to **Vercel** or **Netlify**
with zero configuration:

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

## Where to edit content

All copy and data live in `src/data/` — presentation components never hard-code
it.

| File | Contains |
| --- | --- |
| `src/data/site.ts` | Name, role, hero copy, availability line, navigation, **email**, **GitHub URL**, **LinkedIn URL** |
| `src/data/projects.ts` | The four projects: text, metadata, technologies, features, `githubUrl`, `liveUrl`, images |
| `src/data/experience.ts` | Work history |
| `src/data/technologies.ts` | Grouped tech list (Stack section) |
| `src/data/education.ts` | Education entries |

### GitHub / live URLs

- Per project: `githubUrl` and `liveUrl` in `src/data/projects.ts`. An empty
  string (`""`) hides that button — it never renders broken.
- Site-wide: `githubUrl`, `linkedinUrl`, `email` in `src/data/site.ts`.
  Setting `linkedinUrl` to `""` removes every LinkedIn link.

### Project screenshots

Add images under `src/assets/projects/<project>/` and reference them from
`src/data/projects.ts`. Full instructions in
[`src/assets/projects/README.md`](src/assets/projects/README.md). Until an image
is set, a neutral "Screenshot to be added" placeholder is shown.

### SEO / social preview

`index.html` holds the `<title>`, meta description and Open Graph tags. After
deploying, update `og:url` to the live domain and add a real
`public/og-image.png` (1200×630).

## Component architecture

```
src/
├── App.tsx                     Page composition + skip link
├── components/                 Reusable building blocks
│   ├── Container.tsx           Centered max-width column
│   ├── Navbar.tsx / MobileMenu.tsx
│   ├── Hero.tsx
│   ├── SectionHeader.tsx       Mono label + editorial heading
│   ├── Reveal.tsx              Scroll-into-view fade/slide (respects reduced motion)
│   ├── ProjectCard.tsx         Editorial, fully clickable project block
│   ├── ProjectModal.tsx        Accessible dialog: focus trap, Esc, outside click, scroll lock
│   ├── ProjectLinks.tsx        GitHub / Live buttons (hidden when URL empty)
│   ├── ProjectPlaceholder.tsx  Neutral preview stand-in
│   ├── ExperienceItem.tsx
│   ├── TechStack.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── sections/                   One file per page section; WorkSection owns modal state
├── data/                       All portfolio content (see table above)
├── hooks/                      usePrefersReducedMotion, useLockBodyScroll, useScrolled, useMediaQuery
├── lib/motion.ts               Shared Framer Motion variants
└── types/index.ts              Project, Experience, TechnologyGroup, EducationItem, SiteConfig
```

Only one project modal can be open at a time (single `openId` state in
`WorkSection`). The modal closes on the X button, `Escape`, or a click on the
backdrop; body scrolling is locked while it is open and focus returns to the
card that opened it.
