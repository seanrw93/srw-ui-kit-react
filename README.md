# SRW UI Kit React

A React component library pulled directly from the srw-dev production site. The showcase app lets you browse components in full-page context; Storybook covers isolated states and args-driven testing for primitives.

## Tech stack

- React 18 + TypeScript
- Vite
- SCSS (with design tokens)
- React Router v6
- Storybook v10

## Getting started

```bash
npm install
npm run dev        # showcase app at http://localhost:5173
npm run storybook  # Storybook at http://localhost:6006
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the showcase app |
| `npm run storybook` | Start Storybook |
| `npm run build` | Type-check and build the showcase app |
| `npm run build-storybook` | Build Storybook for static deployment |
| `npm run preview` | Preview the production build |

## Components

| Component | Category | Storybook |
|-----------|----------|-----------|
| `Alert` | Primitive | Yes |
| `ALink` | Primitive | Yes |
| `Badge` | Primitive | Yes |
| `Button` | Primitive | Yes |
| `Input` | Primitive | Yes |
| `Card` | Container | Yes |
| `Modal` | Container | Yes |
| `PricingCard` | Container | Yes |
| `ContactForm` | Pattern | Showcase only |
| `FaqAccordion` | Pattern | Yes |
| `Footer` | Layout | Yes |
| `Hero` | Layout | Yes |
| `Navbar` | Layout | Yes |
| `Reveal` | Utility | Yes |

## Project structure

```
src/
├── components/     # Reusable UI components (each with .tsx + .scss)
├── stories/        # Storybook stories
├── pages/          # Full-page showcase demos
├── context/        # React context providers (Theme, Modal)
├── styles/         # Global styles and design tokens
├── router.tsx      # App routing
└── main.tsx        # App entry point
```

## Styles

Design tokens live in `src/styles/tokens.scss` and are shared across all component stylesheets.
