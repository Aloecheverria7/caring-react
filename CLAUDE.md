# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server on localhost:5173
npm run build     # TypeScript check (tsc -b) + Vite production build → dist/
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

No test framework is configured.

## Architecture

React 19 + TypeScript SPA built with Vite. React Router v7 handles client-side routing. All routes share a `<Layout>` wrapper (Navbar → Outlet → CTA → Footer).

**Routes:** `/` `/about` `/services` `/partners` `/careers` `/contact`

**Key directories:**
- `src/components/` — Reusable UI components (navbar, hero, services, footer, etc.)
- `src/pages/` — One file per route (home, about, services, partners, careers, contact)
- `src/i18n/` — i18next setup + `locales/en.json` and `locales/es.json`
- `src/assets/` — Static images (WebP/PNG)
- `src/index.css` — All global and component styles (~26KB, no CSS framework)

**Styling:** Vanilla CSS only. All styles live in `src/index.css`. No CSS modules, Tailwind, or CSS-in-JS.

## Internationalization

The app is fully bilingual (English/Spanish). Every user-visible string must have entries in both `src/i18n/locales/en.json` and `src/i18n/locales/es.json`. Language preference is persisted in localStorage. Components use `const { t } = useTranslation()` to access translations.

## Deployment

Targets Apache shared hosting (Hostinger). `public/.htaccess` redirects all unmatched routes to `index.html` for SPA deep-link support — do not remove it. Deploy by copying `dist/` contents to `public_html/`.

## TypeScript

Strict mode is fully enabled including `noUnusedLocals` and `noUnusedParameters`. The build will fail on unused imports or variables.
