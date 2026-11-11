# Daksh Malik — Developer Portfolio

A personal portfolio for Daksh Malik, a Computer Science and Engineering student exploring artificial intelligence, machine learning, and product building. The site presents his background, current skills and learning focus, project explorations, resume structure, and contact links.

## Features

- Responsive pages for Home, About, Skills, Projects, Currently Learning, Resume, and Contact
- Dark and light themes, with a compact mobile navigation
- Project, skill, profile, and learning content maintained in central TypeScript data files
- DIY, a predefined portfolio assistant that answers from the published portfolio information
- A simulated developer terminal with a fixed set of harmless commands; it does not run shell commands
- Subtle card and scroll reveal motion, with reduced-motion support
- Metadata for the site and its individual pages

Project repository links and a downloadable resume are intentionally absent until Daksh supplies actual repository URLs and verified resume details.

## Tech stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4 with project-specific CSS styling
- Framer Motion for lightweight reveal animations
- Lucide React icons

## Local setup

Install a compatible Node.js release and npm, then run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

There are no required environment variables, database, or external AI service for the current version.

## Useful commands

```bash
npm run lint       # ESLint
npx tsc --noEmit   # TypeScript check
npm run build      # Production build
npm run start      # Serve the production build locally
```

## Updating portfolio content

- `src/data/profile.ts` — name, public contact links, headline, and introduction
- `src/data/projects.ts` — project cards and technology tags
- `src/data/skills.ts` — skill categories and listed technologies
- `src/data/learning.ts` — current focus, explored topics, next goals, and timeline

The DIY assistant reads these same data files so its answers can stay aligned with the portfolio. Keep project repository links and resume details factual when adding them.

## Routes

| Route | Content |
| --- | --- |
| `/` | Introduction and featured portfolio sections |
| `/about` | Academic background and interests |
| `/skills` | Skills grouped by topic |
| `/projects` | Project explorations |
| `/learning` | Current learning focus and goals |
| `/resume` | ATS-friendly resume page structure |
| `/contact` | Email and social links |
