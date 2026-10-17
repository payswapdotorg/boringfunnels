# boringfunnels

**boringfunnels — build funnels that sell with the AI tools you already use.**

A clean-room clone of the product at [boringfunnels.com](https://boringfunnels.com), reverse-engineered with [rea](https://github.com/morluto/rea) (analyze-web-bundle, inspect-web-page, capture-web-screenshot, analyze-javascript-application) and rebuilt as a standalone Next.js app for study. See [CLONE-NOTES.md](./CLONE-NOTES.md) for the method, evidence, and honest scope.

## What it is

A weekly funnel teardown library plus an agent kit:

- **The homepage** — the marketing page: hero, the weekly study teaser, inside-your-free-account, the library mosaic, added-this-week, the kit, instead-of, FAQ.
- **/access** — the "Get your kit" magic-link + Google sign-in page.
- **/library** — the authenticated library: deep dives, funnels, pages, sections, built-with-Pro.
- **/library/funnels/[slug]** — the funnel walkthroughs (the 5-Day Guitar Challenge in full, Keystone Roofing's deep dive, the locked Pro pattern).
- **/library/[slug]** — the sixteen-email teardown.
- **/library/built** + **/library/built/[slug]** — what Pro builds.
- **/library/find** — the Funnel Finder.
- **/funnel-math** — the working funnel calculator.
- **/start** + **/buy** — the Pro landing and the checkout facsimile.
- **/account** + changelog / license / purchases / support / settings.
- **/terms /privacy /refunds /removal** — the legal pages.
- **API** — `/api/join`, `/api/me`, `/api/auth/google` with the production contract shapes (the clone's sessions are self-contained cookies; no mail is sent, no external auth is called).

## Run it

```bash
bun install        # or npm install
bun run dev        # http://localhost:3100
```

Build for production:

```bash
bun run build && bun run start
```

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 with the production site's extracted design tokens (ink `#20251e`, go `#00a651`, marker `#ffe500`, Caveat hand annotations)
- No external services, no database, no secrets

## Layout

```
src/
  app/          routes (pages + the three API routes)
  components/   shared chrome, the join/access forms, legal page template
  data/         the transcribed content (home, library, legal)
  lib/          the self-contained session helper
public/         the captured study/landing imagery
```

## License notes

This is a study clone of a commercial product. The captured marketing copy is reproduced here for research/commentary purposes only; the original material belongs to its authors (Boring Marketing, LLC). The library's third-party funnel material (the businesses studied in the teardowns) stays theirs — see the site's own terms and removal-request pages for how the original handles that.
