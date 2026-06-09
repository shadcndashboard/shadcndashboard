# ShadcnDashboard Pro - Complete AI Instructions

## Role & Context

You are a **Frontend Admin Dashboard Architect**. Your goal is to build a visually consistent, performant, and developer-friendly React admin dashboard. The code should be production-ready, type-safe, and leverage existing premade components and patterns whenever possible. Prioritize component reusability, maintainability, and consistency across the entire application.

## Project Overview

**ShadcnDashboard Pro** is a modern Next.js admin dashboard template built with TypeScript, Tailwind CSS, and shadcn/ui components. It features:

- **Multi-app architecture** with independent application modules (Blog, Calendar, Chat, Email, Invoices, Kanban, etc.)
- **Comprehensive dashboard system** with charts, analytics, and data visualization
- **Advanced form handling** with validation, file uploads, and dynamic fields
- **Rich real-time applications** (Chat AI, Image AI)
- **Multi-language support** (i18n) with Arabic, Chinese, English, French
- **Flexible theming** system with light/dark mode and multiple color themes
- **Role-based access control** (RBAC) with CASL
- **Responsive layouts** supporting vertical and horizontal sidebar navigation

## Tech Stack

### Core Framework

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript with strict mode
- **Runtime**: Node.js

### UI & Styling

- **Component Library**: Base UI + shadcn/ui primitives (Tailwind styled)
- **Styling**: Tailwind CSS with CSS variables
- **Icons**: Lucide React + Iconify
- **Animations**: Framer Motion
- **Rich Text Editor**: TipTap with Extensions
- **Data Tables**: TanStack React Table v8+
- **Charts**: ApexCharts

### State Management & Data

- **State**: React Context API + Custom Hooks
- **Forms**: React Hook Form + Zod/Resolvers
- **Authorization**: CASL (@casl/ability, @casl/react)
- **Data Generation**: Faker.js
- **Utilities**: Lodash, date-fns, clsx, class-variance-authority

### Advanced Features

- **Drag & Drop**: @dnd-kit + @hello-pangea/dnd
- **Internationalization**: i18next with JSON language files
- **PDF Export**: jsPDF + html-to-image
- **AI Integration**: Google Generative AI (@google/generative-ai)
- **DOM Utilities**: DOMPurify
- **Carousel**: Embla Carousel React

## Commands

```bash
# Development
npm run dev           # Start dev server (http://localhost:3000)

# Production
npm run build         # Build for production
npm start             # Start production server
npm run lint          # Run ESLint checks

# Utilities
npm install           # Install dependencies
npm update            # Update packages
```

## Key Locations

### Application Structure

- `app/` — Next.js app directory with all application logic
- `app/(dashboard-layout)/` — Main dashboard layout wrapper
- `app/(dashboard-layout)/page.tsx` — Dashboard home page
- `app/layout.tsx` — Root layout with providers

### Application Modules

- `app/(dashboard-layout)/apps/` — Independent application modules:
  - `blog/` — Blog system with posts, categories, comments
  - `calendar/` — Calendar with events and scheduling
  - `chat-ai/` — AI-powered chat interface
  - `chats/` — Real-time messaging
  - `contacts/` — Contact management
  - `ecommerce/` — E-commerce product management
  - `email/` — Email client interface
  - `image-ai/` — AI image generation & analysis
  - `invoice/` — Invoice creation & management
  - `kanban/` — Kanban board with drag-drop tasks
  - `notes/` — Note-taking application
  - `tickets/` — Support ticket system
  - `user-profile/` — User profile management

### Dashboard Pages

- `app/(dashboard-layout)/dashboards/` — Dashboard variants (analytics, ecommerce, etc.)
- `app/(dashboard-layout)/charts/` — Chart showcase and examples
- `app/(dashboard-layout)/forms/` — Form patterns and components
- `app/(dashboard-layout)/react-tables/` — TanStack React Table examples
- `app/(dashboard-layout)/shadcn-tables/` — shadcn/ui table components
- `app/(dashboard-layout)/shadcn-ui/` — Complete shadcn/ui component showcase
- `app/(dashboard-layout)/layout/` — Layout components and patterns
- `app/(dashboard-layout)/icons/` — Icon library showcase

### Authentication & Security

- `app/auth/` — Authentication pages and flows:
  - `auth1/` — Login/Register variant 1
  - `auth2/` — Login/Register variant 2
  - `authforms/` — Reusable auth form components
  - `error/` — Error pages
  - `maintenance/` — Maintenance page

### Components

- `components/Themeprovider.tsx` — Root theme provider
- `components/ui/` — shadcn/ui primitive components (button, card, dialog, etc.)
  - `accordion.tsx`, `alert.tsx`, `avatar.tsx`, `badge.tsx`, `button.tsx`
  - `calendar.tsx`, `card.tsx`, `checkbox.tsx`, `collapsible.tsx`
  - `command.tsx`, `dialog.tsx`, `dropdown-menu.tsx`
  - `hover-card.tsx`, `input.tsx`, `label.tsx`
  - `popover.tsx`, `progress.tsx`, `radio-group.tsx`
  - `scroll-area.tsx`, `select.tsx`, `separator.tsx`
  - `sheet.tsx`, `sidebar.tsx`, `skeleton.tsx`
  - `slider.tsx`, `spinner.tsx`, `switch.tsx`
  - `table.tsx`, `tabs.tsx`, `textarea.tsx`, `tooltip.tsx`
- `app/components/` — Application-specific components:
  - `animated-components/` — Framer Motion animation components
  - `apps/` — App-specific UI components
  - `charts/` — ApexCharts wrapper components
  - `dashboards/` — Dashboard widgets and layouts
  - `form-components/` — Custom form inputs and patterns
  - `icons/` — Icon components
  - `react-tables/` — TanStack table implementations
  - `shadcn-table/` — shadcn table variations
  - `shadcn-ui/` — Advanced shadcn/ui combinations
  - `shared/` — Utility wrapper components (CardBox, TitleIconCard, CodeDialog, etc.)
  - `theme-pages/` — Settings & configuration page modules (account-settings, api-keys, CASL, pricing, integration, etc.)

### Context & State Management

- `app/context/config.ts` — Global configuration (theme, language, layout settings)
- `app/context/*/` — Feature-specific context providers:
  - `aichat-context/` — AI Chat state
  - `blog-context/` — Blog data & filters
  - `chat-context/` — Chat messaging state
  - `contact-context/` — Contacts state
  - `customizer-context/` — Theme customizer state
  - `ecommerce-context/` — E-commerce cart & products
  - `email-context/` — Email state
  - `imageai-context/` — Image AI state
  - `invoice-context/` — Invoice state
  - `kanban-context/` — Kanban board state
  - `notes-context/` — Notes state
  - `ticket-context/` — Tickets state
  - `userdata-context/` — User data state

### API Layer

- `app/api/global-fetcher.ts` — Centralized data fetching utility
- `app/api/*/` — Feature-specific API routes and handlers

### Utilities & Configuration

- `hooks/use-mobile.ts` — Mobile breakpoint detection hook
- `lib/utils.ts` — Shared utility functions (cn, formatting, etc.)
- `utils/i18n.ts` — Internationalization setup
- `utils/languages/` — Language JSON files (ar.json, ch.json, en.json, fr.json)
- `app/css/pages/` — Page-specific CSS overrides
- `app/globals.css` — Global styles with Tailwind directives
- `public/images/` — Static assets organized by category

### Configuration Files

- `next.config.ts` — Next.js configuration
- `tsconfig.json` — TypeScript configuration with path aliases
- `tailwind.config.ts` — Tailwind CSS configuration
- `postcss.config.mjs` — PostCSS configuration
- `components.json` — shadcn/ui configuration with aliases
- `eslint.config.mjs` — ESLint rules

## Architecture & Patterns

### Component Architecture

1. **Primitive Components** (`components/ui/`) — Base UI + shadcn/ui wrappers with Tailwind styling
2. **Feature Components** (`app/components/*/`) — Domain-specific components
3. **Page Components** (`app/(dashboard-layout)/*/page.tsx`) — Page-level layouts
4. **Context Providers** (`app/context/*/`) — State management containers

### State Management Pattern

- **Global Config**: `ConfigContext` in `app/context/config.ts`
- **Feature State**: Individual context providers per feature module
- **Local State**: React `useState` for component-scoped state
- **Form State**: React Hook Form with Zod validation

### Component Composition Patterns

```tsx
// Always use Base UI + Tailwind + shadcn/ui primitives
// Example: Button component pattern
<Button variant="outline" size="sm" className="gap-2">
  <Icon className="w-4 h-4" />
  Action
</Button>

// Card component pattern
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Type Safety

- All components use TypeScript with strict mode
- Export `interface Props` for each component
- Use discriminated unions for variant components
- Leverage Zod for runtime validation

### Naming Conventions

- **Files**: kebab-case for files (`my-component.tsx`)
- **Components**: PascalCase for React components (`MyComponent`)
- **Variables/Functions**: camelCase (`myVariable`, `myFunction`)
- **Constants**: UPPER_SNAKE_CASE (`MY_CONSTANT`)
- **CSS Classes**: Use Tailwind utilities, avoid custom class names when possible

## Design System & Theming

### Configuration

- **Theme Config**: `app/context/config.ts`
- **Available Themes**: BLUE_THEME, GREEN_THEME, BROWN_THEME, VIOLET_THEME, TEAL_THEME, LAVENDER_THEME
- **Layout Modes**: vertical, horizontal
- **Sidebar States**: expanded (full width), collapsed (icon-only mode)
- **Direction Support**: LTR and RTL (Arabic support)
- **Dark Mode**: Automatic with light/dark toggle

### Customization Points

- **Colors**: CSS variables in Tailwind config
- **Spacing**: Tailwind default scale (adjustable in tailwind.config.ts)
- **Typography**: Font stack defined in globals.css
- **Shadows**: Tailwind shadow utility classes
- **Border Radius**: Configurable in `app/context/config.ts` (default: 12px)

## Development Guidelines

### When Creating New Components

1. Check if a shadcn/ui primitive exists that matches your need
2. If yes, extend it with Tailwind + component wrapper
3. If no, create using Base UI + shadcn/ui patterns
4. Always export TypeScript interface for props
5. Support dark mode with appropriate Tailwind classes
6. Use CSS variables for theming when applicable

### When Creating New Pages

1. Create in appropriate `app/(dashboard-layout)/*/` directory
2. Wrap with relevant Context Provider if needed
3. Use existing shared layout components (Header, Sidebar, etc.)
4. Follow mobile-responsive patterns using Tailwind breakpoints
5. Add loading states and error boundaries

### When Creating New API Routes

1. Create in `app/api/` with feature-specific subdirectories
2. Use `app/api/global-fetcher.ts` for client-side data fetching
3. Handle errors consistently
4. Return meaningful HTTP status codes
5. Validate input with Zod

### Form Best Practices

1. Use React Hook Form with Zod validation
2. Leverage shadcn form components for consistency
3. Show validation errors inline
4. Implement loading states during submission
5. Handle success/error toasts

### Performance Optimization

1. Use Next.js Image component for all images
2. Leverage React memoization for expensive components
3. Implement code splitting with dynamic imports
4. Use Tailwind CSS purging for optimized bundles
5. Lazy-load charts and heavy interactive components

## Common Development Tasks

### Adding a New App Module

1. Create directory in `app/(dashboard-layout)/apps/[feature]/`
2. Create context provider in `app/context/[feature]-context/`
3. Create components in `app/components/apps/[feature]/`
4. Add API routes in `app/api/[feature]/`
5. Register in navigation/menu

### Implementing a New Feature with Context

1. Create context file: `app/context/[feature]-context/index.tsx`
2. Define interfaces for state and actions
3. Create provider component
4. Export hooks for consuming context
5. Wrap relevant page or layout with provider

### Adding Multi-language Support

1. Add translations to language JSON files in `utils/languages/`
2. Use i18n hooks to access translations
3. Test both LTR and RTL rendering
4. Update language switcher in config

### Theme Customization

1. Update CSS variables in Tailwind config
2. Modify theme options in `app/context/config.ts`
3. Test with light/dark mode
4. Verify all components respect new colors

## Prompt Categories

### Branding / Logo Prompts

- Update Brand logo and identity
- Implement New company information and assets
- follow this path for prompts `prompts/branding/update-branding.prompt.md`

### Dashboard Prompts

- Create dashboard widgets and KPI cards
- follow this path for prompts `prompts/dashboard/`

### App Modules Prompts

- Isolate a single application module (cleanup unused apps)
- follow this path for prompts `prompts/apps/isolate-app.prompt.md`

### Authentication Prompts

- Create login/register auth pages and flows
- follow this path for prompts `prompts/auth/create-auth-page.prompt.md`

### Forms & Validation Prompts

- Create form components with Zod validation
- follow this path for prompts `prompts/forms/create-form-component.prompt.md`

### Component & UI Prompts

- Build sortable, filterable tables with TanStack Table
- follow this path for prompts `prompts/components/create-data-table.prompt.md`

### Navigation Prompts

- Update sidebar and horizontal menu data
- Manage menu nesting and badges
- follow this path for prompts `prompts/navigation/`

### Theming & Customization Prompts

- Add new color themes and RTL/LTR switching
- Toggle light/dark modes
- follow this path for prompts `prompts/theming/`

### Internationalization Prompts

- Add or remove languages and implement switchers
- Manage translation keys and RTL support
- follow this path for prompts `prompts/language/`

<!-- ###  AI Features Prompts
- Integrate AI writing assistants into editors
- Build AI-powered code generators and playgrounds
- Create intelligent dashboard insight widgets
- Implement text summarization tools
- follow this path for prompts `prompts/ai/` -->

## Important Patterns & Best Practices

### Always Follow These Rules

1. **Component Reusability**: Use existing components before creating new ones
2. **Type Safety**: Every function and component must have TypeScript types
3. **Consistency**: Follow naming conventions and file structure religiously
4. **Accessibility**: Use semantic HTML and ARIA attributes
5. **Mobile First**: Design responsive with Tailwind breakpoints
6. **Performance**: Lazy load, memoize, and optimize where needed
7. **Error Handling**: Always catch and display errors gracefully
8. **User Feedback**: Show loading, success, and error states

### File Organization

- Keep related files in the same directory
- Use `index.tsx` for component exports when appropriate
- Separate concerns: components, hooks, types, utils
- Use barrel exports for cleaner imports

### Import Path Aliases (from components.json)

```tsx
// Use these aliases consistently
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useConfig } from "@/app/context/config";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
```

## Version Information

- **Next.js**: 15+
- **React**: 18+
- **TypeScript**: 5+
- **Tailwind CSS**: 3+
- **shadcn/ui**: Latest
- **ShadcnUI**: 1.0+

---

**Last Updated**: March 2026
**Template**: ShadcnDashboard Pro
**AI Instructions Version**: 1.0
