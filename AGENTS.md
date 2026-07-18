# AGENTS.md - AI Coding Agent Reference

This file provides essential information for AI coding agents working on this project. It contains project-specific details, conventions, and guidelines that complement the README and CLAUDE.md.

---

## Project Overview

**Shadcn Dashboard Pro** is a client-side admin dashboard SPA built with:

- **Framework**: Vite 8 + React 19 (no server framework — pure client-side SPA)
- **Language**: TypeScript, compiled with `tsc` before every build
- **Routing**: `react-router` (client-side, `createBrowserRouter`)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn-style primitives on Radix UI (`radix-ui`) and Base UI (`@base-ui/react`)
- **Forms**: `react-hook-form` + `zod` via `@hookform/resolvers`
- **Data fetching / mocking**: `swr` for fetching, `msw` for mocked API responses
- **Charts**: `recharts` (actively used) — `apexcharts`/`react-apexcharts` are installed but not wired into any view
- **Icons**: four icon packages exist in `package.json` (`lucide-react`, `@iconify/react`, `@tabler/icons-react`, `react-icons`) — in practice only `lucide-react` and `@iconify/react` are used in `src/`
- **i18n**: `i18next` / `react-i18next`
- **Deployment**: static `dist/` build served via Netlify redirect (`netlify.toml`) or Docker + nginx (`Dockerfile`, `nginx.conf`)
- **Package Manager**: npm (`package-lock.json` is the lockfile of record)

There is no backend in this repo. All "API" calls go through mock handlers (`msw`) backed by static data in `src/api/*/**-data.ts`.

---

## Installed-but-unused packages (verify before relying on the README)

The following are present in `package.json` but have **no imports anywhere in `src/`** as of the last audit. Do not assume a feature exists just because the dependency is installed — grep for the import first:

- `@casl/ability`, `@casl/react` — no CASL-based permissions/RBAC in the codebase
- `apexcharts`, `react-apexcharts` — only `recharts` is actually charted
- `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/utilities`, `@hello-pangea/dnd` — no drag-and-drop UI wired up
- `@google/genai`, `@google/generative-ai` — no AI integration wired up

If asked to add a feature that "should already exist" per one of these packages, treat it as new work, not a bug fix.

---

## Project Structure

```
/src
├── App.tsx                 # Root app component
├── main.tsx                 # Vite entry point
├── routes/
│   └── Router.tsx           # All route definitions (react-router, createBrowserRouter), lazy-loaded via Loadable
├── layouts/
│   ├── full/                # Main dashboard shell (sidebar + header)
│   └── blank/                # Bare layout (auth pages, error pages)
├── views/                    # Page-level screens, one folder per route
│   ├── apps/                 # Blog, notes, tickets app screens
│   ├── auth/                  # Login/register/forgot-password/2FA/error/maintenance
│   ├── dashboards/            # Dashboard variants (e.g. modern)
│   ├── icons/                 # Icon showcase page
│   └── pages/                 # Tables, forms, user-profile, etc.
├── components/                # Reusable UI building blocks
│   ├── ui/                    # shadcn-style primitives (button, dialog, calendar, input-otp, chart, etc.)
│   ├── dashboards/             # Dashboard-specific widgets (e.g. total-sales chart)
│   ├── apps/                   # Feature components for blog/notes/tickets
│   ├── tables/                  # TanStack Table wrappers (DataTable, CheckboxTable, etc.)
│   ├── form/                    # Form field showcase/wrappers
│   ├── icons/                    # Icon registry/data (iconify-icons.tsx)
│   ├── animated-components/       # Framer Motion / dropzone-based components
│   ├── user-profile/               # Profile page components
│   └── shared/                      # Cross-cutting shared components
├── context/                  # React context providers (one folder per domain)
│   ├── blog-context/, notes-context/, ticket-context/
│   ├── dashboard-context/, sidebar-context/, library-context/
│   └── shadcntheme/           # Theme (dark/light) context
├── api/                       # Mock data + fetchers
│   ├── global-fetcher.ts       # SWR fetcher functions (GET/POST/PUT)
│   ├── blog/, notes/, ticket/    # Per-feature mock data (*-data.ts)
│   └── mocks/
│       ├── browser.ts            # MSW browser worker setup
│       └── handlers/mock-handlers.ts  # Combines all feature handlers
├── hooks/                     # Custom hooks (e.g. use-mobile.ts)
├── lib/
│   └── utils.ts                # cn() and shared helpers
├── utils/
│   ├── i18n.ts                  # i18next setup
│   └── languages/                 # Translation files
├── types/                      # Shared TypeScript types (e.g. types/apps/*)
└── css/                          # Global styles

netlify.toml                  # SPA redirect (all paths → /index.html)
Dockerfile                    # Multi-stage build: npm ci → vite build → nginx
nginx.conf                    # SPA fallback for the Docker image
```

---

## Build & Development Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:5173)
npm run dev

# Type-check + production build
npm run build

# Preview the production build
npm run preview

# Lint (ESLint, must pass with zero warnings)
npm run lint
```

`npm run build` runs `tsc` before `vite build` — TypeScript errors fail the build, not just lint. Always run `npm run lint` before considering frontend changes done.

---

## Routing Pattern

All routes are declared in `src/routes/Router.tsx` using `react-router`'s `createBrowserRouter`. Every page component is:

1. Lazily imported with `lazy(() => import('../views/...'))`
2. Wrapped in `Loadable` (`src/layouts/full/shared/loadable/Loadable.tsx`) to provide a suspense fallback

When adding a new page:

1. Create the view under `src/views/<area>/<page>/index.tsx` (or similar), following sibling folders.
2. Add a `Loadable(lazy(() => import(...)))` declaration near related routes in `Router.tsx`.
3. Add the route entry under the appropriate layout (`FullLayout` for dashboard pages, `BlankLayout` for auth/error pages).
4. If the page needs a sidebar entry, wire it into the sidebar nav data (check `src/layouts/full/vertical/sidebar/` for the existing pattern).

---

## Data & Mocking Pattern

This project has no real backend — follow the existing mock pattern rather than adding real endpoints:

1. Static mock data lives in `src/api/<feature>/<feature>-data.ts`.
2. MSW request handlers per feature are combined in `src/api/mocks/handlers/mock-handlers.ts`.
3. Components/contexts fetch via `swr` using the shared fetchers in `src/api/global-fetcher.ts` (`getFetcher`, `postFetcher`, `putFetcher`).
4. Feature state (e.g. blog posts, notes, tickets) is exposed through a dedicated context in `src/context/<feature>-context/`, which wraps the SWR call and exposes state + setters.

When adding a new feature that needs data, mirror the blog/notes/ticket pattern: mock data file → MSW handler → context provider → view/components consuming the context.

---

## Component & Styling Conventions

- **Icons**: check which icon package the file you're editing already imports before adding icons — `lucide-react` and `@iconify/react` (`import { Icon } from '@iconify/react'`) are the two actually in use. Don't introduce `@tabler/icons-react` or `react-icons` usage without checking with the user first, since they're currently dead weight in the dependency tree.
- **UI primitives**: `src/components/ui/` holds the shadcn-style primitives (Radix/Base UI wrapped with `cva` + `cn()`). Extend these via composition in feature components rather than editing the primitives directly, unless the change is meant to apply globally.
- **Styling**: Tailwind v4 utility classes; use `cn()` from `src/lib/utils.ts` for conditional/merged class names — never string-concatenate classes.
- **Forms**: use `react-hook-form` + `zod` schemas via `@hookform/resolvers`, following the pattern in `src/components/form/`.
- **Tables**: use TanStack Table via the wrappers in `src/components/tables/` (e.g. `DataTable.tsx`) rather than building a table from scratch.
- **Charts**: use `recharts` via `src/components/ui/chart.tsx` — do not reach for `apexcharts`/`react-apexcharts`, they aren't set up in this codebase despite being installed.

---

## TypeScript & Path Aliases

- Both `src/*` and `@/*` alias to `./src/*` (see `vite.config.ts` and `tsconfig.json`). Existing files use a mix of `src/...` and `@/...` imports — match whichever convention the file you're editing already uses.
- `npm run build` type-checks the whole project with `tsc` first; don't rely on Vite dev-server transpilation alone to catch type errors.

---

## Linting

ESLint config is `.eslintrc.cjs` (legacy config format, not flat config):

- Extends `eslint:recommended`, `plugin:@typescript-eslint/recommended`, `plugin:react-hooks/recommended`
- `react-refresh/only-export-components` is a warning
- `npm run lint` runs with `--max-warnings 0` — treat warnings as build-breaking

---

## Deployment

- **Netlify**: `netlify.toml` redirects all paths to `/index.html` for SPA routing — already configured, no changes usually needed.
- **Docker**: `Dockerfile` is a 3-stage build — `npm ci` (deps) → `npm run build` (Vite build) → static `dist/` served by `nginx:alpine` with `nginx.conf` providing the same SPA fallback. Build with:
  ```bash
  docker build -t shadcn-dashboard-free .
  ```

---

## Notes for AI Agents

1. **Verify feature claims against code, not the dependency list.** Several packages in `package.json` (CASL, ApexCharts, dnd-kit, Hello Pangea DnD, Google Generative AI) are installed but unused — see "Installed-but-unused packages" above. Grep `src/` before telling the user a feature exists.
2. **This is a client-only SPA** — there are no server actions, API routes, or server components. All "backend" behavior is MSW-mocked.
3. **Match existing import conventions** — check sibling files in `views`/`components` for path alias style (`src/...` vs `@/...`) and icon package before adding new code.
4. **Icons**: prefer `lucide-react` or `@iconify/react`, matching whichever the file already uses. Don't mix in `@tabler/icons-react` or `react-icons` without asking.
5. **Mock data first** — new features should follow the mock-data + MSW-handler + context pattern in `src/api/`, not fetch a real endpoint, unless one already exists.
6. **Package manager is npm** — use `npm install`/`npm run <script>`; don't reintroduce pnpm/yarn/bun lockfiles or commands.
7. **Type errors block the build** — `npm run build` runs `tsc` before `vite build`, so don't leave `any`-typed shortcuts assuming the dev server alone will catch problems.
8. **Lint must be clean** — `npm run lint` uses `--max-warnings 0`; fix warnings, don't suppress them with disable comments unless justified.

---

## External Documentation

- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [Base UI](https://base-ui.com/)
- [TanStack Table](https://tanstack.com/table/latest)
- [Recharts](https://recharts.org/)
- [TipTap](https://tiptap.dev/)
- [MSW (Mock Service Worker)](https://mswjs.io/)
- [SWR](https://swr.vercel.app/)
