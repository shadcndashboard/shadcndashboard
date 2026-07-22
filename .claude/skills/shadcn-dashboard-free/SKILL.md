---
name: shadcn-dashboard-free
description: |
  Guide for building pages, features, tables, forms, mock data, and navigation in this Vite + React 19 shadcn admin dashboard SPA. Use this skill whenever the user wants to add a new page/view, wire up mock API data, build a data table, add a form, add a route, configure the sidebar, add charts, or work with this dashboard's existing conventions. Also triggers when the user asks about icon usage or theming (dark/light). Even if the user doesn't say "dashboard" explicitly — if they're adding UI, pages, or features to this project, use this skill.
---

# Shadcn Dashboard Free Development Guide

This skill encodes the exact patterns and conventions used in this Vite + React 19 client-side admin dashboard SPA. Following these patterns keeps new code consistent with the existing codebase. See [AGENTS.md](../../../AGENTS.md) for the fuller reference this skill is derived from.

## Quick Reference: What Goes Where

| Task                    | Location                                                        |
| ------------------------ | ---------------------------------------------------------------- |
| New page/view             | `src/views/<area>/<page>/index.tsx`                              |
| Route registration          | `src/routes/Router.tsx` (lazy + `Loadable`)                     |
| Sidebar nav entry             | `src/layouts/full/vertical/sidebar/`                            |
| Reusable UI component            | `src/components/<domain>/`                                    |
| shadcn-style primitive              | `src/components/ui/`                                        |
| Feature mock data                     | `src/api/<feature>/<feature>-data.ts`                       |
| MSW request handlers                    | `src/api/mocks/handlers/mock-handlers.ts`                 |
| SWR fetchers                              | `src/api/global-fetcher.ts`                             |
| Feature state/context                       | `src/context/<feature>-context/`                       |
| Shared types                                  | `src/types/apps/<feature>.ts`                        |
| Custom hooks                                    | `src/hooks/`                                       |
| i18n setup / translations                         | `src/utils/i18n.ts`, `src/utils/languages/`      |
| Tailwind/global styles                              | `src/css/`                                     |
| Theme (dark/light) context                            | `src/context/shadcntheme/`                   |

## Adding a New Feature (6 Steps)

1. Add mock data in `src/api/<name>/<name>-data.ts`.
2. Add an MSW handler for it and register it in `src/api/mocks/handlers/mock-handlers.ts`.
3. Create a context in `src/context/<name>-context/` that fetches via `useSWR` + the shared fetchers in `src/api/global-fetcher.ts`, exposing state + setters.
4. Build the view in `src/views/apps/<name>/` (or the appropriate `views/` subfolder), composing components from `src/components/<name>/` and shadcn primitives from `src/components/ui/`.
5. Register the route: add a `Loadable(lazy(() => import('../views/...')))` declaration and a route entry in `src/routes/Router.tsx`, under `FullLayout` for dashboard pages or `BlankLayout` for auth/standalone pages.
6. Add a sidebar nav item if the page should be reachable from the sidebar (`src/layouts/full/vertical/sidebar/`).

## Data Fetching Pattern

- No real backend — everything goes through **mock data + MSW handlers**, consumed via `swr`.
- `src/api/global-fetcher.ts` exports `getFetcher`, `postFetcher`, `putFetcher` for use with `useSWR`/mutations.
- Don't fetch a real endpoint for a new feature unless one already exists in this repo — follow the blog/notes/ticket pattern instead.

## Data Tables

Use the wrappers in `src/components/tables/` (e.g. `DataTable.tsx`) which wrap TanStack Table (`@tanstack/react-table`). Don't hand-roll a new table implementation.

## Forms

No form library is currently installed. See `src/components/form/index.tsx` for the existing reference pattern (Input/Select/Switch/Checkbox/RadioGroup/Calendar primitives from `src/components/ui/`); discuss with the user before adding a form library dependency.

## Charts

Use `recharts` (see `src/components/ui/chart.tsx` and `src/components/dashboards/modern/total-sales.tsx`).

## Icons

- `lucide-react` — most common
- `@iconify/react` (`import { Icon } from '@iconify/react'`) — used in some form/table components

Match whichever icon package the file you're editing already imports.



## Code Conventions

- Use `cn()` from `src/lib/utils.ts` for class merging — never concatenate className strings.
- Path aliases `src/*` and `@/*` both resolve to `./src/*` — match the convention already used in the file you're editing.
- `npm run build` runs `tsc` before `vite build`; type errors block the build.
- `npm run lint` runs with `--max-warnings 0` — fix warnings, don't suppress them.
- Package manager is **npm** (`package-lock.json`) — don't introduce pnpm/yarn/bun lockfiles or commands.
