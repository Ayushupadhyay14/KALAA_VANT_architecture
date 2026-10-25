# KALAVANT Design Review

Static review plus visual inspection of assets (contact sheets of `public/images/**`). No build was run and no browser checks were done (`node_modules` not installed). No `CLAUDE.md` exists. Does not repeat KV-01..05 or BW-01..05 in `KALAVANT_AUDIT.md`.

## Sources and limits
- **Instagram (`@kalaa_vant`):** fetched once, partially readable. Bio: "Art is born of the observation and investigation of the nature", "DM for collaboration", a contact email and location **Indore**. Only 12 grid thumbnails were visible, mixing reels and carousels; some are credited to other accounts (e.g. architecture/design studios). Visual style could not be assessed in detail from the page text. Treat as a limited, unverified read.
- **Reference studios:** no external research done; not needed for these findings.

## Confirmed facts
Art business: paintings, sculptures, murals, mixed media, commercial commissions. Handle `@kalaa_vant`.

## New facts that conflict with the site (needs owner confirmation)
- Instagram bio location is **Indore**; the site claims Mumbai, Pune and Goa/Alibaug (see KV-03).
- Instagram bio's contact is a DM/email for collaboration; the site's email/phone differ from what the bio shows (not compared character-by-character).
- Some Instagram grid posts belong to other accounts; the owner must confirm which works are theirs before they are credited as KALAVANT work.

## Asset inspection (verified by viewing)
| Folder | Count | What it is |
|---|---|---|
| `images/kalaavant/` | 24 | Instagram screenshots: 456 px wide, grid thumbnails with video/carousel icons, uneven crops. Real mural, pichwai, line-art, relief and sculpture subject matter. |
| `images/client/`, `client-photo-*`, `kalaavant-hero-*`, `client-panorama-scroll.jpg` (19224×1080) | ~19 | Same screenshot origin; client files are only 152 px wide. |
| Other root images (`sahyadri-cliff`, `alibaug-*`, `marine-drive-*`, `deccan-*`, `wari-*`, etc.) | ~17 | Photoreal 1376×768 architecture/travel imagery that does not match the Instagram feed. Likely generated or stock; origin unconfirmed. |

## Strengths worth keeping
- Warm stone, charcoal and bronze palette, with a serif/sans pairing (Cormorant Garamond, Plus Jakarta Sans). Calm and gallery-like; suits murals and pichwai.
- Hero is already led by the studio's own artwork, with a short title and no text blocking the art.
- Reduced-motion is handled in CSS and Lenis.

## Top five visual improvements

### VD-01 — Replace screenshot-quality artwork images (Critical)
- **Evidence:** 456 px source images are shown full-bleed (`Hero.tsx:~107`, `fill`, `sizes="100vw"`, `quality={95}`), so on a desktop they upscale roughly 3–4×. Screenshot UI icons (video/carousel badges), blurred borders and watermark-like crops are visible in the files; the client set is 152 px.
- **Components:** `Hero.tsx`, `FeaturedProjects.tsx`, `CulturalArchive.tsx`, `AboutStudio.tsx`, `ProjectDetailClient.tsx`, `public/images/**`.
- **Rationale:** Art sells on fidelity. Soft, icon-marked images undermine credibility with commercial clients.
- **Acceptance:** Owner supplies original photos (suggest ≥1600 px long edge); no image shows platform UI; hero image is rendered at no more than 1.5× upscale; dev tooling warns when a displayed image is below a set resolution. Until originals exist, cap hero/feature display size to source width and use a neutral background rather than stretching.
- **Owner decision:** Provide originals, and confirm each is the studio's work.

### VD-02 — Remove or flag the non-art stock imagery (High)
- **Evidence:** About 17 photoreal architecture and travel images (`sahyadri-cliff`, `marine-drive-penthouse`, `wari-pilgrimage` etc.) look unlike the Instagram feed and could be mistaken for the studio's work. Origin and rights unknown.
- **Components:** `projects.ts` entries using them, `FeaturedProjects.tsx`, project detail pages.
- **Rationale:** Passing off unconfirmed images as portfolio work is a credibility and possible legal risk.
- **Acceptance:** Every image shown is on an owner-confirmed list; unconfirmed images removed from rendered pages; sitemap lists no pages built only on them.
- **Owner decision:** Which images are genuinely theirs or licensed.

### VD-03 — Discipline-based portfolio experience (High)
- **Evidence:** Real subject matter clusters naturally: murals (botanical, kids' spaces, line art), pichwai/sacred painting, textured relief/sculpture, framed paintings, and process shots. The UI has one generic project grid and architecture categories (see BW-02).
- **Components:** `FeaturedProjects.tsx`, `ProjectDetailClient.tsx`, new filter or section component, `projects.ts` type.
- **Rationale:** Clients arrive looking for a specific type of work; a mural client and a sculpture client need different proof.
- **Acceptance:** A visitor can filter or jump to Murals / Paintings / Sculpture-Relief / Mixed media (names to be owner-confirmed) within one tap on a 375 px screen; each tile shows medium and, only if confirmed, size; the filtered state is URL-shareable.

### VD-04 — Art-led detail pages with real project context (Medium)
- **Evidence:** `ProjectDetailClient.tsx` is built around concept, materiality, sustainability and drawings; the Lightbox is labelled for architectural drawings. Process photos (e.g. hand drawing, workers on a wall) and finished-room shots exist but are not used as before/process/result.
- **Rationale:** Commission buyers judge on site context, scale and craft process; a finished photo alone doesn't show these.
- **Acceptance:** Detail page shows lead image, 2–6 supporting images with captions that state only confirmed facts (medium, place, year if known), optional process photo; no empty architectural sections render; lightbox label and alt text describe the artwork.

### VD-05 — Readability and accessibility pass (Medium, partly suspected)
- **Evidence:** 69 uses of `text-[9px]/[10px]/[11px]`; 41 uses of muted colours `#524F4B`, `#8C7D70`, `#595856` (contrast not measured; `#524F4B` placeholder text on `#141414` is likely below 4.5:1, suspected); uppercase mono labels with wide tracking carry key information; header menu button has no `aria-expanded` (noted in audit).
- **Components:** `Contact.tsx`, `Header.tsx`, `Footer.tsx`, section labels across `src/sections/`.
- **Rationale:** Many clients will view on phones; tiny low-contrast text (labels, form hints) is hard to read and fails basic accessibility.
- **Acceptance:** Body and form text ≥ 14 px, labels ≥ 12 px; text contrast ≥ 4.5:1 (measured with a tool, not eyeballed); interactive controls have visible focus and correct ARIA state; tested at 375 px with no horizontal scroll.

## Not assessed
Real typography rendering, mobile layouts, scroll performance and Lighthouse results (need a running build); Instagram's actual visual style beyond the 12 thumbnails.

## Recommended order
VD-01 and VD-02 depend on owner-supplied originals, so ask now. VD-03 and VD-05 can proceed in parallel once categories are confirmed. VD-04 follows VD-03.
