# Clone Notes — how this repo was built

**Date:** 2026-10-17
**Tool:** [rea](https://github.com/morluto/rea) v6.5.0 (`rea-agents` npm package)
**Target:** https://boringfunnels.com
**Method:** passive bundle analysis + authenticated browser capture, then a clean-room rebuild

## The method, step by step

1. **`rea analyze-web-bundle`** on the homepage tab (via the station browser's CDP endpoint) — captured and statically analyzed 18 scripts (~1.4 MB), recovered the API surface:
   - `POST /api/auth/google` — `{credential, nonce, intent, next}` → `{to, created}` (Google Identity Services, FedCM, popup mode, client `321666433906-….apps.googleusercontent.com`)
   - `POST /api/join` — FormData (`email`, `next`, Rewardful referral) → redirect or ok; the client then shows the "Check your email" state
   - `GET /api/me` — `200 {…}` | `204` (session probe, gated on a `bf_ph` cookie; PostHog key `phc_ru5jvNeYSDF27muV43pd9EZVZnYCb3WX9TLVMHBPm2Jx`, api_host `/ingest`)
2. **`rea inspect-web-page` + `export-web-scripts` + `analyze-javascript-application`** — exported the 14 retained scripts, ran the full static application analysis (490,335 AST nodes visited, 44 findings; evidence digest `8f74b9621542031b1d2cd199bcd0d1c769239f9a95323f3f7cad4ffb17d884ff`).
3. **`rea capture-web-screenshot`** + a VLM pass over the captures — the visual spec: paper white, ink `#20251e`, go-green buttons, yellow marker highlights, Caveat handwriting annotations.
4. **The design tokens** — pulled straight from the production stylesheet (`3jd_x_a79_wjw.css`): `--ink #20251e`, `--muted #6a7362`, `--field #f3f5ec`, `--line #e0e4d9`, `--go #00a651`, `--go-text #00873c`, `--hl #ffe500`, note colors y/p/m/b, `--hand "Caveat"`, column widths 640/860px, marker tilts −2.2°/2.5°. Fonts: Inter Tight (display), Inter (sans), Geist Mono, Caveat.
5. **Page captures** — all public pages (`/`, `/access`, `/privacy`, `/terms`, `/refunds`, `/removal`) fetched; the marketing copy transcribed verbatim into `src/data/`.
6. **The authenticated surface** — signed in through the production Google flow (FedCM account chooser) and captured the account, library, funnel walkthroughs, emails teardown, built gallery, finder, funnel math, Pro landing, and the Stripe checkout page. The free-tier view is what this clone reproduces; the locked Pro states are rendered as the production site renders them (the upsell cards).
7. **Assets** — the study/landing imagery downloaded from the production CDN paths and committed under `public/`.

## Honest scope (what this clone is not)

- **It is not a byte-for-byte copy.** The Next.js/Turbopack bundle structure, the PostHog analytics, the Rewardful affiliate wiring, and the real auth backends are not reproduced. The API routes implement the same observable contracts self-contained (cookie sessions; no mail is sent; the Google button opens a local consent sheet, not a real FedCM dialog).
- **The library content is the free-tier subset** captured on 2026-10-17: 6 deep dives, the guitar-challenge and keystone-roofing walkthroughs in their captured detail, the locked-funnel pattern, 28 built samples, the sixteen-email teardown's first entry. The Pro-only content was not (and could not honestly be) captured.
- **The checkout is a facsimile** of the production Stripe form (Boring Marketing, LLC) — it charges nothing.
- **The copy is the original's.** It is reproduced for study/commentary; the material belongs to its authors. Third-party funnel material (the studied businesses) stays theirs.

## Why this repo exists

Per the operator's instruction: *using https://github.com/morluto/rea, clone the product https://boringfunnels.com into a new repo on payswapdotorg.* The rea toolchain's whole pitch is "see a feature you like → understand how it works, with evidence → build a version for your project"; this repo is that loop executed against a full product, with the evidence trail above.

## Addendum — 2026-10-17 (evening session): the authenticated captures, completed

A second REA pass (same browser/CDP method, Google sign-in via the operator's
account) re-walked the product with the free library open and closed four gaps
the first pass had left:

1. **The real agent briefs.** The "Copy agent brief" buttons were captured via
   clipboard: Keystone Roofing (13,798 chars) and Tony Polecastro's 5-Day
   Guitar Challenge (6,366 chars) — both committed verbatim in
   `src/data/briefs.ts` and wired to a real `CopyBriefButton` (clipboard +
   execCommand fallback). On the production free tier, both briefs copy; only
   this week's study (Keystone) opens its deep-dive record, which the clone
   now models with `open` (decoupled from `brief`).
2. **Keystone steps 6–9** (Thank-you page, Your estimate explained, Emails,
   Ad-not-seen) and the six step-to-step edges, captured from the walkthrough.
3. **The "STEAL THESE THREE" moves** — the study's three named moves (The Open
   Ground, The Reply, The Estimate), rendered as their own section.
4. **The library surface** — industry filter chips (Trades … Agency, Deep
   dives), the stat rail (6 / 15 / 192 / 1,350 / 28), the tools (Funnel
   Finder, Funnel math), the onboarding "Tell us who you're building for"
   dialog and the account page's free-tier copy were re-verified against the
   live site; the earlier transcriptions held.

Evidence from this pass: `rea inspect-web-page` + `capture-web-screenshot` on
`/`, `/access`, `/library` (authed), `/library/funnels/keystone-roofing`,
`/library/funnels/guitar-challenge`, `/library/find`, `/funnel-math`,
`/start`, `/library?mode=pages`, `/account*` — with accessibility text, script
sources, storage keys and the two clipboard briefs.
