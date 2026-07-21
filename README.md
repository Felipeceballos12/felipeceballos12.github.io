# Luis Felipe Ceballos — Personal Website

Personal portfolio site for **Luis Felipe Ceballos Caicedo**, a Software Developer with 5+ years of experience building web and mobile applications end-to-end, across both frontend and backend.

The site showcases an introduction, featured projects, work experience, and a skills overview, with light/dark theme support and a responsive mobile/desktop layout.

## Sections

- **Home** — Introduction, availability badge, and links to LinkedIn and GitHub.
- **Projects** — Featured work: MitadMitad (Figma prototype), Musicapp, Vet House, and Book App.
- **Experience** — Roles at Todos Comemos, freelance projects, Autovisas, The Stella Way Consulting, and DATECSA.
- **Skills** — TypeScript, Next.js, React, PHP, Laravel, PostgreSQL, Ruby, Django, Python, AWS, and more.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** for build and dev server
- **Radix UI** (Dialog, Separator) for accessible primitives
- **CSS Modules** for styling and theming
- **vite-plugin-svgr** for SVG-as-component imports
- **@icons-pack/react-simple-icons** for brand icons

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the project |

## Deployment

The project uses [`gh-pages`](https://github.com/tschaub/gh-pages) and is configured for GitHub Pages deployment.

## Project Structure

```
src/
├── components/     # UI components (Header, Projects, Experiences, Skills, Footer, etc.)
├── lib/            # Data (projects, experiences) and icons
├── state/          # Theme provider
└── assets/         # Images and icons
```
