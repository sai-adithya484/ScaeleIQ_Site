# SCAELEIQ — Enterprise Web Platform

Official web presence and digital platform for **SCAELEIQ** (Saeleiq Digital Private Limited), showcasing autonomous enterprise data modernization, agentic AI architecture, solution showcases, client case studies, and corporate insights.

---

## Technology Stack

- **Framework**: React 18 (`react`, `react-dom`)
- **Language**: TypeScript (`^5.6.3`)
- **Build Tool & Bundler**: Vite 5 (`vite`, `@vitejs/plugin-react`)
- **Routing**: React Router v6 (`react-router-dom`)
- **Styling**: Vanilla Modular CSS & Centralized Design Tokens (`src/styles/`)
- **Animations**: Framer Motion (`framer-motion`) & WebGL/OGL (`ogl`)
- **Iconography**: Lucide React (`lucide-react`)
- **Class Utilities**: `clsx`

---

## Prerequisites

- **Node.js**: `v20.x` LTS or higher (configured in `.nvmrc`)
- **Package Manager**: `npm` (`v9.x` or higher)

---

## Getting Started

### 1. Clone & Setup
```bash
git clone https://github.com/SaiAdithya04/sq-web.git
cd sq-web
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Copy the template environment file:
```bash
cp .env.example .env
```
*(No mandatory secrets or backend keys are required for frontend development.)*

### 4. Run Development Server
```bash
npm run dev
```
The local server will start at `http://localhost:5173/`.

---

## Available Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `npm run dev` | Starts Vite local development server with Hot Module Replacement (HMR). |
| `build` | `npm run build` | Runs TypeScript type checking (`tsc`) and compiles production bundle via Vite. |
| `preview` | `npm run preview` | Spins up a local preview server serving the production `dist/` build. |
| `typecheck` | `npm run typecheck` | Executes TypeScript type checking without emitting files. |

---

## Project Structure Overview

```text
sq-web/
├── public/
│   ├── assets/               # Active production static assets
│   │   ├── 3DLogos/          # Approved 3D visual marks
│   │   ├── ai-agents/        # Agent UI dashboard visualizations
│   │   ├── case-studies/     # Case study preview visuals
│   │   └── Logos/            # Technology and enterprise partner logos
│   ├── fonts/                # Self-hosted typography (Radix, Manrope)
│   ├── _redirects            # Cloudflare Pages SPA client-side routing fallback
│   ├── favicon.ico / Logo    # Browser tab icon
│   ├── robots.txt            # Search crawler directives
│   └── sitemap.xml           # Search engine sitemap
├── src/
│   ├── components/           # Modular UI & Section components
│   │   ├── cards/            # Reusable card interfaces
│   │   ├── forms/            # Form controls (Contact, Newsletter)
│   │   ├── home/             # Homepage-specific visual stages
│   │   ├── layout/           # Shared Navbar, Footer, and Containers
│   │   ├── sections/         # Feature showcases, Hero, Delivery models
│   │   ├── solutions/        # Solution showcase engines and visualizers
│   │   └── ui/               # Atomic buttons, metric stats, reveal animations
│   ├── data/                 # Decoupled mock and configuration datasets
│   ├── pages/                # Route-level views (Home, Platform, Data, AI, etc.)
│   ├── styles/               # Design tokens, typography definitions, globals
│   ├── App.tsx               # Main routing declarations and shell
│   └── main.tsx              # Application entry point
├── docs/                     # Technical documentation & architectural guides
├── archive/                  # Safely quarantined legacy & unreferenced assets
├── .github/                  # CI workflows & PR templates
└── package.json
```

---

## Testing & Quality Assurance

- **Type Checking**:
  ```bash
  npm run typecheck
  ```
- **Production Build Validation**:
  ```bash
  npm run build
  ```

---

## Deployment & Hosting

The project is structured for zero-configuration SPA hosting on **Cloudflare Pages** or **Vercel**:
- Client-side routing fallback is configured via `public/_redirects` (Cloudflare Pages) and `vercel.json` (Vercel).
- For complete production deployment guidelines, refer to [`docs/deployment-guide.md`](docs/deployment-guide.md).

---

## Documentation Index

- [`docs/architecture.md`](docs/architecture.md): Application architecture, routing, component hierarchy.
- [`docs/project-structure.md`](docs/project-structure.md): Repository layout, directory roles, file conventions.
- [`docs/development-guide.md`](docs/development-guide.md): Onboarding guide, creating pages, adding assets.
- [`docs/coding-standards.md`](docs/coding-standards.md): TypeScript, React, and CSS engineering standards.
- [`docs/asset-management.md`](docs/asset-management.md): Asset cataloging, optimization, and lifecycle rules.
- [`docs/deployment-guide.md`](docs/deployment-guide.md): Cloudflare Pages, DNS, preview, and production release procedures.
- [`docs/production-readiness-report.md`](docs/production-readiness-report.md): Formal production audit and engineering readiness verdict.

