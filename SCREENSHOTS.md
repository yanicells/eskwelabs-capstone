# Screenshots

All case-study and home-card images are wired up and live in `public/projects/`.

## Files in use

```
public/projects/tld-home-screen.png            — Thought Leader Drafter, home card + project hero
public/projects/tld-pipeline-page.png        — Thought Leader Drafter, 4-stage writing pipeline
public/projects/tld-output-page.png          — Thought Leader Drafter, draft output
public/projects/slides-gen-home-screen.png     — Slide Deck Generator, home card
public/projects/slides-gen-page.png     — Slide Deck Generator, project hero
public/projects/slides-gen-history-page.png  — Slide Deck Generator, generation history
public/projects/slides-gen-notes-page.png    — Slide Deck Generator, speaker notes
```

Next.js serves `public/*` at the URL root, so these resolve as `/projects/<file>.png`.

## Where they're rendered

- `app/page.tsx` — home project cards
  - TLD card → `tld-home-screen.png`
  - SDG card → `slides-gen-home-screen.png`
- `app/(detail)/projects/thought-leader-drafter/page.tsx`
  - Hero → `tld-home-screen.png`
  - Grid Fig. 1 → `tld-pipeline-page.png`
  - Grid Fig. 2 → `tld-output-page.png`
- `app/(detail)/projects/slide-deck-generator/page.tsx`
  - Hero → `slides-gen-page.png`
  - Grid Fig. 1 → `slides-gen-history-page.png`
  - Grid Fig. 2 → `slides-gen-notes-page.png`

## How the wiring works

`FeatureScreenshot` and `FramedPlaceholder` (`app/components/FramedPlaceholder.tsx`) take an optional `src` and `alt`. When `src` is set they render a `next/image` (`fill` + `sizes`, `object-fit: cover`) inside the faux browser frame. When `src` is omitted they fall back to the striped placeholder — so removing a file won't break a page.

`ProjectCard` (`app/components/ProjectCard.tsx`) does the same with an optional `image` / `alt` for the 16:10 thumbnail slot.

## Specs (for replacements)

- 16:9 for case-study screenshots, 16:10 for project card thumbnails.
- ≥ 2400×1350 for case studies (2× retina), 1600×1000 for thumbnails.
- PNG or WebP. Light backgrounds preferred — site is mostly white.
- Crop tight to the UI; the faux browser chrome (window dots + url pill) is part of the component, not the image.

## Replacing or adding images

1. Drop the new file into `public/projects/` (any name works).
2. Update the `src="/projects/<file>"` and `alt` on the relevant `FeatureScreenshot` / `ProjectCard`.
3. If you remove an image without rewiring, the page falls back to the striped placeholder rather than breaking.
