# Muhammad Shaheer Luqman — Portfolio

Personal portfolio site, built with Next.js and Tailwind CSS. Live at [shaheerluqman.github.io](https://shaheerluqman.github.io/).

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, static export) + React 19
- TypeScript
- Tailwind CSS 4
- [react-photo-view](https://github.com/MinJieLiu/react-photo-view) for the project gallery lightbox

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally. Pages auto-reload as you edit files under `src/`.

## Project Structure

Single-page layout composed of section components in [`src/components`](src/components):

`Navbar` · `Hero` · `About` · `Experience` · `Research` · `Education` · `Projects` · `Skills` · `Awards` · `Contact` · `Footer`

Assembled in [`src/app/page.tsx`](src/app/page.tsx).

## Resume

LaTeX source and compiled PDFs live under [`resume/`](resume), split by target role:

- [`resume/AI Engineer`](resume/AI%20Engineer) — applied AI / software engineering
- [`resume/AI Researcher`](resume/AI%20Researcher) — research-focused

Compile with `xelatex Shaheer_Resume.tex` from either folder (requires the bundled `fonts/`).

## Deployment

The site is a static export (`next.config.ts` sets `output: "export"`) deployed to GitHub Pages via the GitHub Actions workflow in [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml). Every push to `main` builds and publishes the `out/` directory automatically.
