# Yani — Portfolio

My Eskwelabs Innovation Fellowship (Cohort 9) capstone portfolio.

## Run it

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

Other commands:

```bash
pnpm build   # production build + type check
pnpm start   # serve the production build
pnpm lint
```

## What's in here

```
app/
  page.tsx              home
  layout.tsx            root layout (Nav, Footer, fonts)
  globals.css           design system + Tailwind base
  components/           shared React components
  (detail)/
    contact/
    reflection/
    projects/
      slide-deck-generator/
      thought-leader-drafter/
content.md              source copy for every page
AGENTS.md               notes for AI tooling
SCREENSHOTS.md          screenshot checklist + handoff prompt
```

The `(detail)` route group keeps the home page full-bleed while leaving room for a shared layout on the detail pages later.

## Where the copy lives

Page text comes from `content.md`. The markdown is the source of truth, but it doesn't auto-load — copy is currently inlined into each page component. If you change the content, update the matching page file too.

## Screenshots

The project case studies use placeholder boxes until real screenshots are dropped in. See `SCREENSHOTS.md` for the checklist and a handoff prompt for wiring images up.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4 for resets and utilities. The design system itself is hand-written in `globals.css`.
- Geist + General Sans + JetBrains Mono (Google Fonts + Fontshare)
