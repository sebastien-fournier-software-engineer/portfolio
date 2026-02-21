# Portfolio — Sébastien Fournier

Professional portfolio presenting my profile as a **Software Robotics Engineer & Architect**: expertise in autonomous robotics, computer vision, embedded AI, and software architecture.

---

## Overview

This single-page application showcases:

- **Profile & CV** — Introduction, downloadable CV, and contact call-to-action
- **About** — Expertise in robotics, computer vision, and software; roles (Architect, Field & Infrastructure, Strategic Partner)
- **Skills** — Professional skillset and technical stack (architecture, robotics, DevOps, observability, etc.)
- **Experience** — Professional experience and key clients, with timeline and detailed missions
- **Projects** — Selected projects (e.g. autonomous rover, REST API Fin-Tech, game engine in C) with stack and links
- **Education** — Degrees and certifications (INSA Rennes, University of Strathclyde)
- **Contact** — CTA and links (email, LinkedIn, GitHub)

The site is **bilingual (French / English)** with a language toggle and smooth transition between locales. Content is driven by a centralised translation file for easy maintenance.

---

## Tech Stack

- **React** 17
- **React Bootstrap** — Layout and UI components
- **React Context** — Language and UI state
- **CSS** — Custom styles, design tokens (colors, typography), responsive layout
- **react-icons** — Icons
- **react-tsparticles** — Background particles (home)
- **typewriter-effect** — Home hero typing animation

---

## Getting Started

### Prerequisites

- **Node.js** (LTS recommended)
- **npm** or **yarn**

### Install and run

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

Output is in the `build/` folder (static assets ready to deploy).

### Deploy on GitHub Pages

The site is set up to be hosted on **GitHub Pages** at the URL defined in `package.json` (`homepage`).

**Option 1 — Automatic deployment (recommended)**  
A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) builds and deploys the site on every push to `main` or `master`. To enable it:

1. On GitHub: repo **Settings** → **Pages**
2. Under **Build and deployment**, **Source**: select **GitHub Actions**
3. Push this repo (with the workflow) to `main`/`master`; deployment runs automatically

**Option 2 — Manual deployment**  
Locally: run `npm install` then `npm run deploy`. This builds the project and pushes the contents of `build/` to the `gh-pages` branch. In **Settings → Pages**, set the source to the **gh-pages** branch.

---

## Project Structure (main parts)

| Path | Role |
|------|------|
| `src/App.js` | App shell, section order, language provider |
| `src/context/translations.js` | All copy (EN/FR); section order matches page order |
| `src/context/LanguageContext.js` | Language state and `t()` helper |
| `src/components/Home/` | Hero, typewriter, CTA |
| `src/components/About/` | About section and avatar |
| `src/components/Skills/` | Skills and categories |
| `src/components/Experiences/` | Experience timeline and cards |
| `src/components/Projects/` | Project cards and “ongoing” badge |
| `src/components/Education/` | Education timeline and cards |
| `src/components/FindMeOn/` | Contact CTA and links |
| `src/styles/` | Global and section-specific CSS (variables, cards, experiences, etc.) |

To change copy or add a language, edit `src/context/translations.js`. To add or reorder sections, update `App.js` and the translation keys accordingly.

---

## License

This project is private. All rights reserved.

---

## Contact

- **Email:** [seb.fournier.tech@proton.me](mailto:seb.fournier.tech@proton.me)
- **LinkedIn:** [Sébastien Fournier](https://www.linkedin.com/in/sebastien-fournier-software-robotics/)
- **GitHub:** [sebastien-fournier-software-robotics](https://github.com/sebastien-fournier-software-robotics)
