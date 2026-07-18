# CLAUDE.md

This is a Vite + React 19 + TypeScript admin dashboard ("shadcn-dashboard-free"), styled with Tailwind CSS v4 and Radix/Base UI primitives. It is a client-side SPA (no server framework) using `react-router` for routing, deployed as a static build (Netlify via `netlify.toml`, or Docker via `Dockerfile` + nginx).

## Stack

- **Build tool**: Vite (`vite.config.ts`), TypeScript project compiled with `tsc` before build
- **Routing**: `react-router` (client-side, SPA) — routes under `src/routes`
- **UI**: Radix UI / Base UI primitives (`radix-ui`, `@base-ui/react`), Tailwind CSS v4, `class-variance-authority`, `tailwind-merge`
- **Forms**: `react-hook-form` + `zod` via `@hookform/resolvers`
- **Data fetching / mocking**: `swr`, `msw` (mock service worker) — see `src/api/mocks`
- **Charts**: `apexcharts` / `react-apexcharts`, `recharts`
- **Icons**: `@tabler/icons-react`, `lucide-react`, `@iconify/react`, `react-icons`
- **i18n**: `i18next` / `react-i18next`
- **Auth/permissions**: `@casl/ability` + `@casl/react`

## Project structure

- `src/components` — reusable UI components
- `src/views` — page-level view components (feature screens)
- `src/routes` — route definitions
- `src/layouts` — layout shells (sidebar/header wrappers)
- `src/api` — mock data + fetchers (`global-fetcher.ts`, `mocks/handlers`)
- `src/context` — React context providers
- `src/hooks` — custom hooks
- `src/lib` / `src/utils` — helpers
- `src/types` — shared TypeScript types
- `src/css` — global styles

## Conventions

- Path alias/component imports follow the existing folder structure under `src/` — check sibling files in `views`/`components` before adding new patterns.
- Icons: prefer whichever icon set is already used in the file you're editing (there are four in this repo — don't mix new ones in without checking).
- Mock data lives in `src/api` and `src/api/mocks` — new features should follow that pattern rather than fetching real endpoints unless one exists.
- Run `npm run lint` (ESLint, flat config extending `eslint-config-next`) before considering frontend changes done.
- `npm run build` runs `tsc` first — type errors block the build, not just lint.

## Deployment

- **Netlify**: `netlify.toml` redirects all paths to `/index.html` (SPA fallback) — already configured.
- **Docker**: `Dockerfile` does a multi-stage build (pnpm install → `vite build` → static `dist/` served via nginx). `nginx.conf` provides the same SPA fallback (`try_files ... /index.html`) as the Netlify redirect. Build with `docker build -t shadcn-dashboard-free .`
