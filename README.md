# Ronnsquare — website reconstruction

Reconstruction of the English Ronnsquare website (https://ronnsquare.fr/en/) as a
static [Astro](https://astro.build) site. Content, design system, imagery, animations,
page transitions and interactions mirror the production WordPress theme.

## Stack

| Concern | Implementation |
| --- | --- |
| Pages / templating | Astro (static output, `/en/...` URL structure, trailing slashes) |
| Styles | Original theme stylesheet (`src/styles/ronnsquare.css`) + small additions (`src/styles/additions.css`) |
| Fonts | N27 Regular, Gambetta Regular/Medium/Semibold (`public/assets/fonts`) |
| Smooth scroll | Lenis (desktop ≥ 1024px), driven by the GSAP ticker |
| Animation | GSAP 3 + ScrollTrigger, Draggable, InertiaPlugin, MotionPathPlugin, CustomEase, CustomWiggle |
| Text splitting | SplitType (`splitReveal` effect) |
| Page transitions | Barba.js — curved "osmo" wipe with wordmark, scroll restoration on back/forward |
| Physics (quote / services exits) | matter-js |
| Lottie | lottie-web (footer logo, DNA page icons) |

## Project structure

```
src/
  pages/                 one file per route (src/pages/en/**), 404.astro, index.astro (→ /en/)
  layouts/BaseLayout.astro  document shell: overlays, header, Barba container, footer, modals
  components/
    layout/              Header, Breadcrumb, Footer, Overlays (loader, transition), Modals, CallbackModal
    blocks/              one component per theme block (block-1-1-hero … block-11-1-reviews, legal-page)
    ui/                  Button, FaqIllustration
    WpImage.astro        responsive <img> using the media registry (original srcsets/dimensions)
  data/
    pages-meta.json      centralised route metadata (title, description, namespace, theme, breadcrumbs)
    media.json           media registry: upload path → width/height/srcset
    blocks/*.ts          typed content for each block, keyed "<page>/<section-index>"
  scripts/
    main.ts              bootstrap (Lenis, resize handling, Barba, first page init)
    core/                runtime: page lifecycle, transitions, header, effects, lottie, parallax,
                         legal modals, lightbox, forms, toast/success popups, callback, scroll memory
    blocks/              per-block animation modules (auto-registered by data-block id)
    entrances/           first-load / transition entrances (home wordmark preloader, default)
    lib/                 shared animation helpers (horizontal loop, totems, wordmark, physics exits…)
    vendor/              thin shims mapping npm GSAP / matter-js / lottie
  styles/
public/
  assets/uploads/        all original photography, illustrations, SVGs, Lottie JSON
  assets/theme/lottie/   theme Lottie files
  api/                   static snapshots of the theme REST endpoints
                         (testimonial pages, project "load more", legal modal content)
```

### How a page works

Each page file composes blocks with their data, e.g. `src/pages/en/realisations/abylsen.astro`.
Every block renders a `<section data-block="…">`. On page enter, `src/scripts/core/page.ts`
finds each `[data-block]`, lazy-imports `src/scripts/blocks/<id>.js` and runs its `init()`
inside a `gsap.context`, which is reverted on leave. Above-the-fold blocks register a paused
timeline that the entrance (preloader or page transition) sequences.

## Routes (27 + 404)

`/en/`, `/en/dna-team/`, `/en/realisations/` (+ abylsen, merz-aesthetic, epiceum, groupe-pharma,
ccfa, niterra, rodl-partner, socoda, arneg), `/en/preoccupations/` (+ lease-expiry,
complex-projects, attract-and-retain-talent, bring-teams-back), `/en/expertises/`
(+ sustainability-ecology, technical-execution, consulting-strategy, architecture-design),
`/en/faq/`, `/en/testimonials/`, `/en/contact/`, `/en/legal-notice/`, `/en/privacy-policy/`, 404.

## Development

```bash
npm install
npm run dev        # http://localhost:4321/en/
npm run build      # static output in dist/
npm run preview
```

Docker (used by the Alloy sandbox): `docker compose -f docker-compose.alloy.yaml up -d`
(host networking, port 4321).

`/dev-test/<block-id>/` (dev server only) renders every data instance of a block for
markup verification; it is not emitted in production builds.

## Configuration (optional)

See `.env.example`.

- `PUBLIC_FORM_API_URL` — base URL that receives form submissions as JSON
  (`<url>newsletter`, `<url>contact`, `<url>callback`). When unset, forms validate and show
  their success states locally (demo mode).
- `PUBLIC_CALLPAGE_ID` — CallPage widget id. When set, "Callback in 1 min" opens the CallPage
  widget like production; otherwise a built-in callback dialog is used.

Third-party trackers present on production (Google Tag Manager, reCAPTCHA, Axeptio consent)
are intentionally not included.
