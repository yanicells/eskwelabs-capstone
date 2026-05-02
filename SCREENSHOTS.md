# Screenshots Handoff

The portfolio currently shows striped placeholder boxes wherever a screenshot is meant to go. This file lists what to capture, where to drop the files, and a copy-paste prompt for a fresh Claude Code session to wire them up.

---

## What to capture

### Thought Leader Drafter — `/projects/thought-leader-drafter`
- [ ] **Hero** — the 4-stage pipeline UI or an active writing session
- [ ] **A/B comparison** — variants side by side (with vs without writing samples)
- [ ] **Writing samples library** — upload + sample grid view

### Slide Deck Generator — `/projects/slide-deck-generator`
- [ ] **Hero** — the generation dashboard (or a generated deck preview)
- [ ] **Pipeline / generation** — generation in progress / pipeline diagram view
- [ ] **Sample deck** — an actual slide from a generated Google Slides deck (not the file list)

### Optional — home project cards (`/`)
- [ ] **TLD card thumbnail** — used as the cover image on the home page card
- [ ] **SDG card thumbnail** — same, for the second card

---

## Specs

- **Aspect ratio:** 16:9 for case-study screenshots. 16:10 for project card thumbnails.
- **Resolution:** at least 2400×1350 for case studies (2× retina) so it stays sharp on big screens. 1600×1000 for project card thumbnails is enough.
- **Format:** PNG or WebP. WebP is smaller; both work with `next/image`.
- **Theme:** light backgrounds preferred — the site is mostly white and they'll blend in cleanly.
- **Crop:** crop tight to the UI. The site already wraps each screenshot in a faux-browser chrome (window dots + url pill), so don't include real browser chrome in the image.

---

## Where to put them

Drop files in `public/screenshots/` using these exact names so the wiring step is mechanical:

```
public/screenshots/tld-hero.png
public/screenshots/tld-ab.png
public/screenshots/tld-samples.png
public/screenshots/sdg-hero.png
public/screenshots/sdg-pipeline.png
public/screenshots/sdg-deck.png
public/screenshots/tld-card.png       (optional)
public/screenshots/sdg-card.png       (optional)
```

Next.js serves `public/*` at the URL root — `public/screenshots/tld-hero.png` becomes `/screenshots/tld-hero.png`.

If you use `.webp` instead of `.png`, just swap the extension in the prompt below.

---

## Handoff prompt — paste into a new Claude Code chat

Once the files are in `public/screenshots/`, start a fresh chat in this repo and paste the block below.

```
I dropped portfolio screenshots into public/screenshots/. Wire them up by
replacing the placeholder calls in my code.

Files I added (skip any that don't exist):
- public/screenshots/tld-hero.png       Thought Leader Drafter hero (pipeline UI)
- public/screenshots/tld-ab.png         TLD A/B comparison mode
- public/screenshots/tld-samples.png    TLD writing samples library
- public/screenshots/sdg-hero.png       Slide Deck Generator hero (dashboard)
- public/screenshots/sdg-pipeline.png   SDG pipeline / generation UI
- public/screenshots/sdg-deck.png       SDG sample generated deck
- public/screenshots/tld-card.png       (optional) TLD home card thumbnail
- public/screenshots/sdg-card.png       (optional) SDG home card thumbnail

What I want:

1. Update app/components/FramedPlaceholder.tsx so FeatureScreenshot and the
   default FramedPlaceholder export both accept an optional src and alt prop.
   When src is set, render the image with next/image using fill + sizes
   (object-fit: cover) inside the framed area instead of the striped
   placeholder. When src is missing, keep the current placeholder behaviour.

2. Update app/components/ProjectCard.tsx so it accepts an optional image
   (string path) and alt prop. When set, render next/image with fill + sizes
   inside the 16:10 thumbnail slot. When unset, fall back to the existing
   striped placeholder so the home page does not break if a thumbnail is
   missing.

3. Replace placeholder calls with the new images:

   app/(detail)/projects/thought-leader-drafter/page.tsx
   - Hero FeatureScreenshot     -> src="/screenshots/tld-hero.png",
                                   alt="Thought Leader Drafter pipeline UI"
   - A/B FeatureScreenshot      -> src="/screenshots/tld-ab.png",
                                   alt="A/B comparison mode — variants side by side"
   - Samples FeatureScreenshot  -> src="/screenshots/tld-samples.png",
                                   alt="Writing samples library"

   app/(detail)/projects/slide-deck-generator/page.tsx
   - Hero FeatureScreenshot      -> src="/screenshots/sdg-hero.png",
                                    alt="Slide Deck Generator dashboard"
   - Pipeline FeatureScreenshot  -> src="/screenshots/sdg-pipeline.png",
                                    alt="Generation pipeline in progress"
   - Deck FeatureScreenshot      -> src="/screenshots/sdg-deck.png",
                                    alt="Sample generated Google Slides deck"

   app/page.tsx (home project cards)
   - TLD ProjectCard  -> image="/screenshots/tld-card.png",
                         alt="Thought Leader Drafter preview"
   - SDG ProjectCard  -> image="/screenshots/sdg-card.png",
                         alt="Slide Deck Generator preview"

4. Use next/image with fill and sizes for responsive loading. Keep the
   existing Frame (browser chrome) and aspect ratios on case-study pages.
   Do not change the surrounding layout, copy, or component shapes.

5. The placeholder fallback path must keep working — if I forget to drop
   one of the files, that page should still render with the striped
   placeholder, not 404 or crash.

6. Run `pnpm build` to verify everything still type-checks and prerenders.

Do not redesign anything else. Do not touch copy or layout. Just the image
wiring.
```

---

## Notes for whoever is wiring this up

- The faux browser frame (window-dot row + URL pill) is part of the existing component, not part of the image. The screenshot should be just the app UI.
- The home project card placeholder slot is 16:10 and lives directly above the card body — fill it edge to edge with no inner padding.
- `next/image` with `fill` requires a positioned parent. The Frame and ProjectCard components already provide that, so dropping `<Image fill ... />` inside them works.
- If you only have one card thumbnail (or one case-study image), it's fine to ship it that way — the others will keep falling back to striped placeholders until you add them.
