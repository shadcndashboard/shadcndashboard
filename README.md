<p align="center">
   <a href="https://shadcndashboard.dev" target="_blank">
      <img src="https://shadcndashboard-demo.vercel.app/images/logos/logoicon.svg" alt="shadcndashboard-logo" width="50px" height="50px">
   </a>
</p>

<h1 align="center">
   <a href="https://shadcndashboard.dev" target="_blank" align="center">
      Shadcn Dashboard - Free Shadcn Admin Dashboard Template (React + Vite)
   </a>
</h1>

<p align="start">Shadcn Dashboard is a modern, responsive admin dashboard template built with React (Vite). Built with Shadcn UI, Base UI and Tailwind CSS v4, it ships with a modern dashboard, Blog, Notes & Tickets apps, authentication pages, form layouts, data tables, user profile, and rich UI components - giving you everything you need to build your next admin panel faster.</p>

<!-- ![GitHub](https://img.shields.io/github/license/shadcndashboard/shadcndashboard) ![GitHub issues](https://img.shields.io/github/issues/shadcndashboard/shadcndashboard) ![GitHub closed issues](https://img.shields.io/github/issues-closed/shadcndashboard/shadcndashboard) ![Twitter Follow](https://img.shields.io/twitter/follow/shadcndashboard?style=social) -->

<kbd>[![Shadcn Dashboard - Demo Screenshot](https://shadcndashboard-demo.vercel.app/OG-Image.png)](https://shadcndashboard.dev)</kbd>

## Introduction 📊

Shadcn Dashboard is built with React (Vite), a production-ready admin dashboard starter to kickstart your next project. It features a modern dashboard, Blog, Notes & Tickets apps, authentication flows, form layouts with validation, data tables, user profile pages, and a comprehensive library of Shadcn UI components.

[View Demo (React)](https://shadcndashboard-demo.vercel.app)

[View Documentation](https://shadcndashboard.dev/docs)

<p>
   Crafted with ❤️ by
   <a href="https://shadcndashboard.dev" target="_blank">
      shadcndashboard.dev
   </a>
   , committed to empowering the open-source community.
</p>

## Key Features ✨

- **Modern Dashboard** - Ready-to-use dashboard layout with statistics, charts, and widgets
- **Apps** - Blog, Notes, and Tickets apps out of the box
- **Authentication Pages** - Login, Register, Forgot Password, OTP Verification, Reset Password, Two-Factor Auth
- **Forms & Tables** - Vertical & Horizontal form layouts, form validation, and a data table
- **User Profile** - Rich profile page with connections and activity views
- **Built with React 19 + Vite** - Modern, fast, and SEO-friendly
- **Tailwind CSS v4** - Easy theming and utility-based styling
- **Responsive & Mobile-First** - Designed to look great on all devices
- **Dark Mode Support** - Full light/dark theme toggle via a custom `ThemeProvider`/`useTheme` context
- **Rich Charting** - Recharts integration for beautiful visualizations
- **Rich Text Editor** - TipTap-powered editor for the Blog app

## Folder Structure

```
|-- public/                                    # Static assets served from the site root
|-- src/                                       # Application source code
|   |-- App.tsx                                # Root application component
|   |-- main.tsx                               # Application entry point
|   |-- api/                                   # API service layer and handlers
|   |-- assets/                                # Local SVGs, images, and static helpers
|   |-- components/                            # Shared React components
|   |-- context/                               # React context providers
|   |-- css/                                   # Global and component-level CSS
|   |-- hooks/                                 # Reusable client hooks
|   |-- layouts/                               # Dashboard shell layouts (Sidebar + Header)
|   |-- lib/                                   # General utilities and helpers
|   |-- routes/                                # React Router route definitions
|   |   |-- Router.tsx                         # Central route configuration
|   |-- types/                                 # Shared TypeScript interfaces and types
|   |-- utils/                                 # Feature-specific helper functions
|   |-- views/                                 # Page-level UI composed by route files
|   |   |-- apps/                              # App view modules
|   |   |   |-- blog/                          # Blog app views
|   |   |   |-- notes/                         # Notes app views
|   |   |   |-- tickets/                       # Tickets app views
|   |   |-- auth/                              # Auth page views
|   |   |   |-- auth2/                         # Two-factor auth views
|   |   |   |-- authforms/                     # Login, Register, etc. views
|   |   |   |-- error/                         # Error page views
|   |   |   |-- maintenance/                   # Maintenance page views
|   |   |-- dashboards/                        # Dashboard charts, statistics, and widgets
|   |   |   |-- modern/                        # Modern dashboard view
|   |   |-- icons/                             # Icon showcase views
|   |   |-- pages/                             # Inner page views
|   |   |   |-- form/                          # Form layout and validation views
|   |   |   |-- tables/                        # Data table views
|   |   |   |-- user-profile/                  # User profile views
|   |   |-- spinner/                           # Loading spinner views
|-- components.json                            # shadcn/ui aliases and registry config
|-- index.html                                 # HTML entry point
|-- vite.config.ts                             # Vite configuration
|-- package.json                               # Scripts and dependencies
|-- postcss.config.js                          # Tailwind CSS v4 PostCSS setup
|-- tsconfig.json                              # TypeScript compiler and path aliases
```

**Key UI Sections**

- **Dashboard** - Modern overview with statistics, charts, and widgets
- **Apps** - Blog, Notes, and Tickets management
- **Authentication** - Login, Register, and account recovery flows
- **Forms & Tables** - Layouts, validation, and data table views
- **User Pages** - Profile page with connections and activity

---

## What's Included 📦

- Dashboard
  - Modern Dashboard
- Apps
  - Blog
  - Notes
  - Tickets
- Pages
  - User Profile
  - Form Layouts
  - Form Validation
  - Data Table
- Authentication
  - Login Page
  - Register Page
  - Forgot Password Page
  - OTP Verification Page
  - Reset Password Page
  - Two Steps Verification Page
  - Error Page
  - Maintenance Page
- Components
  - Shadcn UI Primitives
  - Recharts
  - TipTap Rich Text Editor
  - Data Tables (TanStack Table)
  - Date Pickers & Calendar
  - File Dropzone
  - OTP Input
- Miscellaneous
  - Icons Showcase
  - Dark / Light Mode

## 🚀 Quick Start

### Prerequisites

- Node.js 18, 20, or 22+
- npm

1. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Preview the production build:**

   ```bash
   npm run preview
   ```

## 🧞 Available Commands

All scripts can be run using npm.

| Command   | Action                                                                        |
| :-------- | :---------------------------------------------------------------------------- |
| `dev`     | Starts the Vite development server with hot-reload at `http://localhost:5173` |
| `build`   | Creates an optimized production build via TypeScript + Vite                   |
| `preview` | Preview the production build locally before deploying                         |
| `lint`    | Runs ESLint to check for potential errors and code quality issues             |

## Documentation 📚

For comprehensive documentation, please visit [shadcndashboard.dev/docs](https://shadcndashboard.dev/docs).

## Changelog 📆

Please refer to the [CHANGELOG file](CHANGELOG.md). We add detailed release notes to each new release.

## License ©

- Copyright © [shadcndashboard.dev](https://shadcndashboard.dev/)
- Licensed under [MIT](LICENSE)
- All our free items are Open Source and licensed under MIT. You can use our free items for personal as well as commercial purposes. We just need attribution from your end. Copy the link below and paste it in the footer of your web application or project.
  ```html
  <a href="https://shadcndashboard.dev/">Shadcn Dashboard</a>
  ```

---

<br />

<a href="https://shadcndashboard.dev" target="_blank">
  <img src="https://shadcndashboard.dev/images/og-image/homepage.webp" alt="shadcndashboard banner" width="1200">
</a>

<p>
   <a href="https://shadcndashboard.dev" target="_blank">
      shadcndashboard.dev
   </a>
   is a free and open-source admin dashboard template built with Shadcn UI, Base UI, Tailwind CSS v4, and React - designed to help developers ship beautiful admin panels faster. 🚀
</p>

## Overview 🌏

Shadcn Dashboard is a production-ready admin dashboard kit built with React, Vite, TypeScript, Tailwind CSS v4, Shadcn UI, and Base UI. It ships with reusable UI blocks, a full component library, pre-built app pages, and authentication flows - so you can go from zero to a fully functional admin panel in minutes.

- AI-ready components with built-in prompts for ChatGPT, Claude, Cursor, Lovable, Bolt, and v0
- MCP Server support for direct editor integration (Cursor, Windsurf, VS Code, Antigravity)
- Pre-configured auth with Supabase, Firebase, and Clerk
- Production-ready blocks: dashboards, charts, tables, forms, and full apps
- Built on Base UI primitives for full design control

### Backed by WrapPixel 🏆

Shadcn Dashboard is proudly backed by [WrapPixel](https://wrappixel.com) - a trusted name in the admin dashboard space with over **15+ years** of experience building production-grade UI templates and component systems. WrapPixel's products are used by **600k+ developers and agencies** worldwide, consistently rated **4.9/5** for quality, consistency, and developer experience.

## Community 🤝

Join the Shadcn Dashboard community to ask questions, share ideas, and get help:

- 🐦 [Follow us on Twitter](https://x.com/shadcndashboard)
- 🎮 [Join us on Discord](https://discord.com/invite/eMzE8F6Wqs)

## Credits 🤘

We are grateful for the contributions of the open-source community, particularly:

- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Base UI](https://mui.com/base-ui/)
- [TanStack Table](https://tanstack.com/table)
- [Recharts](https://recharts.org/)
- [TipTap](https://tiptap.dev/)

These projects form the backbone of Shadcn Dashboard.

## Useful Links 🎁

- [Shadcn Dashboard Website](https://shadcndashboard.dev)
- [Documentation](https://shadcndashboard.dev/docs)
- [React Demo](https://shadcndashboard-demo.vercel.app/)
- [Changelog](CHANGELOG.md)
- [License](LICENSE)

## Social Media 🌐:

- [Twitter / X](https://x.com/shadcndashboard)
- [Discord](https://discord.com/invite/eMzE8F6Wqs)
- [GitHub](https://github.com/shadcndashboard/shadcndashboard)
