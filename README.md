# SCAELEIQ — Production Enterprise Web Platform

Official production web presence and technical showcase for **SCAELEIQ** (Saeleiq Digital Private Limited), communicating autonomous enterprise data modernization, agentic AI architecture, solution showcases, client case studies, and corporate insights.

---

## 1. Project Overview

SCAELEIQ is an enterprise data and AI transformation platform built to accelerate complex data migrations into modern cloud data warehouses (Snowflake, SAP HANA, Databricks, BigQuery) using swarms of specialized domain agents and subject-matter expert pods.

This repository contains the complete frontend corporate platform, featuring interactive 3D WebGL visualizers, dynamic client case studies, detailed agent telemetry, and responsive presentation views.

---

## 2. Purpose of the Website

The website serves four primary enterprise objectives:
1. **Capabilities Showcase**: Presenting the 5-layer autonomous data modernization architecture and Pod delivery model.
2. **AI Agent Deep Dives**: Demonstrating specialized domain agents (`Docu Agent`, `Incident Summarization Agent`, `Forecasting Agent`) with interactive telemetry, citations, and architecture flows.
3. **Client Proof & Case Studies**: Documenting measurable outcomes across healthcare, fintech, agritech, and public sector transformations.
4. **Lead Conversion**: Streamlined platform briefing and demonstration request funnels for enterprise decision makers.

---

## 3. Technologies & Architecture

- **Core Framework**: React 18 (`react`, `react-dom` `^18.3.1`)
- **Language**: TypeScript (`^5.6.3`) with strict compiler validation
- **Bundler & Build Tool**: Vite 5 (`vite` `^5.4.9`, `@vitejs/plugin-react` `^4.3.3`)
- **Routing**: React Router DOM (`^6.27.0`) with route-level code splitting (`React.lazy` + `Suspense`)
- **3D & WebGL Shaders**: OGL (`^1.0.11`) powering interactive particle orbs and backgrounds
- **Animation**: Framer Motion (`^11.11.9`) and hardware-accelerated CSS keyframes
- **Iconography**: Lucide React (`^0.453.0`)
- **Class Utilities**: `clsx` (`^2.1.1`)
- **Styling Architecture**: Vanilla CSS with centralized CSS Custom Property tokens (`src/styles/tokens.css`)

---

## 4. Key Website Pages & Routes

| Route | View Component | Description |
|---|---|---|
| `/` | `HomePage` | Primary landing page with living data hero, outcome metrics, timeline, and client proof grid. |
| `/platform` | `PlatformPage` | Enterprise platform capabilities and collaborative Pod delivery model. |
| `/data` | `DataPage` | Enterprise data modernization architecture, 6 expertise areas, and 5-phase ELT framework tabs. |
| `/ai` | `AiPage` | Snowflake-native AI agent ecosystem overview and 5-layer architecture. |
| `/ai/agents/:agentId` | `AgentDetailPage` | Deep-dive telemetry for individual agents (`docu`, `incident-summarization`, `forecasting`). |
| `/solutions` | `SolutionsPage` | Interactive multi-category solution comparison matrix with SVG pipeline diagrams. |
| `/case-studies` | `CaseStudiesPage` | Filterable library of enterprise transformations. |
| `/case-studies/:slug` | `CaseStudyPage` | Detailed client case study with metrics stat bar and architecture blocks. |
| `/insights` | `InsightsPage` | Technical research articles, whitepapers, and newsletter subscription. |
| `/post/:slug` | `ArticlePage` | Long-form reading experience with interactive table of contents. |
| `/about` | `AboutPage` | Corporate overview, leadership team profiles, principles, and company at a glance. |
| `/careers` | `CareersPage` | Open positions with dynamic department and location filtering. |
| `/contact` | `ContactPage` | Enterprise inquiry form with client-side validation and office locations. |
| `/demo` | `DemoPage` | Product demonstration funnel with value proposition checklist. |
| `/privacy-policy` | `PrivacyPage` | Corporate privacy disclosures and data governance notices. |
| `*` | Catch-all | Automatic client-side redirect to `/`. |

---

## 5. Folder Structure

```text
S_IQ_Site/
│
├── public/
│   ├── assets/               # Verified runtime media (logos, agent dashboards, case studies)
│   ├── fonts/                # Self-hosted typography (Radix display, Manrope variable)
│   ├── _redirects            # Cloudflare Pages SPA client-side routing fallback
│   ├── robots.txt            # Search crawler directives
│   └── sitemap.xml           # Canonical XML sitemap index
│
├── src/
│   ├── components/           # Modular React components by domain
│   │   ├── article/          # ArticleBody, TableOfContents
│   │   ├── cards/            # CaseStudyCard, InsightCard, JobCard
│   │   ├── careers/          # EmptyState, FilterBar
│   │   ├── case-study/       # CaseStudyBlocks, InfoTable
│   │   ├── forms/            # ContactForm, NewsletterForm
│   │   ├── home/             # AIAgentsSection, OglOrb, visual stages
│   │   ├── layout/           # Navbar, Footer, Container
│   │   ├── sections/         # Hero, CTASection, DeliveryModel, ArchitectureSection
│   │   ├── solutions/        # SolutionShowcase, SolutionVisuals
│   │   └── ui/               # Button, MetricStat, RevealAnimation, SectionLabel
│   │
│   ├── hooks/                # Reusable custom hooks (useCountUp, useInView)
│   ├── types/                # Centralized TypeScript entity type definitions
│   ├── data/                 # Decoupled content datasets & models
│   ├── pages/                # Route views with adjacent CSS stylesheets
│   ├── styles/               # tokens.css, fonts.css, globals.css
│   ├── App.tsx               # Root routing shell with React.lazy code-splitting
│   └── main.tsx              # Application entry point
│
├── UNUSED_REVIEW/            # Safely quarantined non-production files
│   ├── superseded-components/# Obsolete components replaced by inline implementations
│   ├── abandoned-code/       # Unused data structures
│   ├── duplicate-assets/     # Exact duplicates of public assets
│   ├── potentially-unused-images/ # Unreferenced high-res renders
│   ├── old-design-experiments/    # Exploratory Data page graphics
│   └── legacy-quarantine/    # Consolidated legacy archives & index
│
├── DOCS/                     # Technical architecture & onboarding documentation
│   ├── ARCHITECTURE.md       # System architecture & code-splitting design
│   ├── COMPONENT_GUIDE.md    # Reusable component API reference
│   ├── DEVELOPMENT_GUIDE.md  # Developer setup and workflows
│   ├── ASSET_GUIDE.md        # Asset placement, optimization, and referencing
│   ├── CODING_STANDARDS.md   # TypeScript, React, and CSS standards
│   ├── DEPLOYMENT_GUIDE.md   # Production deployment & DNS procedures
│   ├── BASELINE.md           # Pre-refactoring verification baseline
│   ├── PRODUCTION_AUDIT.md   # Full codebase inventory & audit
│   ├── UNUSED_FILES_REPORT.md# Detailed log of all quarantined files
│   └── PRODUCTION_CLEANUP_REPORT.md # Final cleanup & verification report
│
├── .env.example              # Sample environment configuration
├── .gitattributes            # Line-ending and binary configurations
├── .gitignore                # Git exclusion rules
├── .nvmrc                    # Node version lock (v20)
├── .prettierrc               # Prettier code formatting rules
├── index.html                # SPA HTML shell with Open Graph meta & favicon
├── package.json              # Clean dependencies & build scripts
├── tsconfig.json             # Strict TypeScript compiler options
├── vercel.json               # Vercel SPA rewrite fallback
└── vite.config.ts            # Vite build configuration
```

---

## 6. Prerequisites

- **Node.js**: `v20.x` LTS (configured in `.nvmrc`)
- **Package Manager**: `npm` (`v9.x` or higher)

---

## 7. Installation Instructions

```bash
# Clone the repository
git clone <repository-url>
cd S_IQ_Site

# Ensure Node 20 is active
nvm use

# Install dependencies cleanly
npm install
```

---

## 8. Development Commands

```bash
# Start local development server with Hot Module Replacement
npm run dev
```
The server will start at `http://localhost:5173/`.

---

## 9. Production Build Instructions

```bash
# Typecheck and compile production bundle into dist/
npm run build
```
The build executes TypeScript typechecking (`tsc`) and compiles optimized Rollup chunks into `dist/`.

---

## 10. Preview Instructions

```bash
# Serve the compiled dist/ directory locally
npm run preview
```
Opens a local preview server (typically at `http://localhost:4173/`) mirroring production HTTP headers and SPA routing.

---

## 11. Environment Variables

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

| Variable | Description | Default |
|---|---|---|
| `VITE_APP_URL` | Canonical application base URL | `http://localhost:5173` |
| `VITE_CONTACT_API_URL` | Optional backend contact submission endpoint | *(optional)* |
| `VITE_ANALYTICS_ID` | Optional analytics tracking tag | *(optional)* |

*(No mandatory backend secrets are required for frontend development or static compilation.)*

---

## 12. Asset Management Guidelines

- **Active Assets**: All production assets live in `public/assets/` and `public/fonts/`.
- **Referencing**: Always reference assets with leading-slash absolute paths: `/assets/...`.
- **Zero Deletion Policy**: Unreferenced assets are quarantined to `UNUSED_REVIEW/` rather than deleted.
- Refer to [`DOCS/ASSET_GUIDE.md`](DOCS/ASSET_GUIDE.md) for full asset specifications.

---

## 13. Component Development Guidelines

- Place reusable presentation primitives in `src/components/ui/`.
- Place layout containers in `src/components/layout/`.
- Place composable full-width page sections in `src/components/sections/`.
- Every component must define an explicit TypeScript props interface.
- Refer to [`DOCS/COMPONENT_GUIDE.md`](DOCS/COMPONENT_GUIDE.md) for prop interfaces.

---

## 14. Styling & Design-System Conventions

- Always use CSS Custom Properties from `src/styles/tokens.css` (`var(--accent)`, `var(--bg-primary)`, `var(--border-card)`).
- Follow BEM-style class naming (`.block__element--modifier`).
- Responsive breakpoints: Desktop (`1024px+`), Tablet (`768px–1024px`), Mobile (`<640px`).
- Refer to [`DOCS/CODING_STANDARDS.md`](DOCS/CODING_STANDARDS.md).

---

## 15. Routing Conventions

- All routes are declared in `src/App.tsx`.
- Secondary routes use `React.lazy()` for code-splitting.
- Every route transition triggers instantaneous scroll-to-top via `<ScrollToTop />`.
- Non-matching paths redirect to home via `<Navigate to="/" replace />`.

---

## 16. Testing & Quality Checks

```bash
# Run strict TypeScript typecheck
npm run typecheck

# Validate full production build
npm run build

# Validate route accessibility and SPA fallback
python scratch/test_routes.py
```

---

## 17. Deployment Preparation

- **SPA Routing Fallback**: `public/_redirects` is automatically bundled to `dist/_redirects` for Cloudflare Pages.
- **SEO & Social**: `index.html` includes Open Graph, Twitter Cards, canonical URL, and favicon.
- **Crawlers**: `public/robots.txt` and `public/sitemap.xml` are active.
- Refer to [`DOCS/DEPLOYMENT_GUIDE.md`](DOCS/DEPLOYMENT_GUIDE.md) for step-by-step launch instructions.

---

## 18. Troubleshooting

| Issue | Cause | Solution |
|---|---|---|
| `Node version mismatch` | Running Node < 20 | Run `nvm use` to select Node 20. |
| `404 on page refresh` | Missing SPA redirect rule | Verify `dist/_redirects` exists on Cloudflare Pages or `vercel.json` on Vercel. |
| `Typecheck failure` | Unused variable or missing prop | Run `npm run typecheck` to view compiler diagnostics. |

---

## 19. Contribution Guidelines

1. Create a feature branch: `git checkout -b feature/your-feature`.
2. Follow Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`.
3. Verify `npm run typecheck` and `npm run build` pass with 0 errors.
4. Ensure no hardcoded colors; use design tokens from `tokens.css`.
