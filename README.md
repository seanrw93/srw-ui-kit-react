# SRW UI Kit React

A React component library pulled directly from the srw-dev production site. The showcase app lets you browse and test each component in isolation.

## Tech stack

- React 18 + TypeScript
- Vite
- SCSS (with design tokens)
- React Router v6

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |

## Components

| Component | Description |
|-----------|-------------|
| `Alert` | Status and notification alerts |
| `ALink` | Styled anchor/link component |
| `Badge` | Label and status badges |
| `Button` | Primary interactive button |
| `Card` | Content container card |
| `ContactForm` | Contact/inquiry form |
| `FaqAccordion` | Collapsible FAQ accordion |
| `Footer` | Page footer |
| `Hero` | Hero/banner section |
| `Input` | Form input field |
| `Modal` | Dialog/modal overlay |
| `Navbar` | Navigation bar |
| `PricingCard` | Pricing plan card |
| `Reveal` | Scroll-reveal animation wrapper |

## Project structure

```
src/
├── components/     # Reusable UI components (each with .tsx + .scss)
├── pages/          # Component showcase pages
├── context/        # React context providers (Theme, Modal)
├── styles/         # Global styles and design tokens
├── router.tsx      # App routing
└── main.tsx        # App entry point
```

## Styles

Design tokens live in `src/styles/tokens.scss` and are shared across all component stylesheets.
