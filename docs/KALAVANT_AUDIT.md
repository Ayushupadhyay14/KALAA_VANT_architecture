# KALAVANT Audit

Static code review only. Nothing was run: `node_modules` is not installed, so there is no build, lint or browser check.
No `CLAUDE.md` exists; `AGENTS.md` and `README.md` were read.

**Confirmed business facts (from the owner):** KALAVANT is a multidisciplinary art business (paintings, sculptures, murals, mixed media, commercial art commissions); Instagram `@kalaa_vant`. Everything else in the codebase is unconfirmed.

## Verified issues

### KV-01 — Contact form discards every inquiry (Critical)
- **Route/file:** `/` Contact section, `src/sections/Contact.tsx:23-29`
- **Evidence:** `handleSubmit` only runs `setTimeout(() => setSubmitted(true), 1200)`. No `fetch`, server action or `mailto`.
- **Impact:** Visitors see success but the studio receives nothing. Leads are lost silently on the main conversion path.
- **Fix:** Send the inquiry through a real channel (needs owner decision: email, WhatsApp or form service). Interim: `mailto:` with prefilled fields. Never show success unless delivery happened.

### KV-02 — Site presents an architecture studio, not an art business (High)
- **Route/file:** all routes. `src/app/layout.tsx:25` (title/OG), `src/data/projects.ts` (categories, services, `STUDIO_INFO`), `src/sections/Contact.tsx:~49-53` (form options: villa, penthouse, earth compound).
- **Evidence:** Title "Contextual Architecture & Spatial Craft"; categories residential/commercial/interiors/sustainable/heritage; inquiry options are building types.
- **Impact:** Search/social previews and the inquiry form misdescribe the business; visitors cannot choose a painting, mural, sculpture or mixed-media commission.
- **Fix:** Replace title, description, categories, services and inquiry options with owner-confirmed art disciplines.

### KV-03 — Unconfirmed facts shown as real (High)
- **Route/file:** `src/data/projects.ts:~680-720` (`STUDIO_INFO`), shown in Contact, Footer, Header, AboutStudio.
- **Evidence:** Three studio addresses with coordinates, phone, two emails, LinkedIn/Behance URLs, founder name, stats (14+ years, 48+ works, 100%), project clients and quotes. None supplied by the owner.
- **Impact:** Wrong phone/address misroutes clients; invented claims harm trust and credibility.
- **Fix:** Remove or hide every unconfirmed value until verified; fill from owner-provided data only.

### KV-04 — Artwork, captions and labels do not match (High)
- **Route/file:** `/` Featured Projects, `/projects/[slug]`, `src/data/projects.ts:63-101`, `src/components/Lightbox.tsx:58`
- **Evidence:** "Sahyadri Cliff Sanctuary" (residential architecture) uses `temple-arch-lakshmi.jpg` and `tree-of-life-pichwai.jpg` as hero/gallery. "Drawings" are labelled Plan/Section; Lightbox aria-label says "Architectural drawing and plan lightbox". All referenced image files exist (scripted check: none missing).
- **Impact:** Real artwork is presented as buildings; titles, descriptions and alt text contradict images; weak for accessibility and SEO.
- **Fix:** Rebuild project entries around the real images, with owner-confirmed titles, medium, size, year. Drop fake drawings; fix lightbox label and alt text.

## Suspected issues (not yet confirmed in a browser)

### KV-05 — Forced intro and heavy motion delay first view (Medium)
- **Route/file:** `/`, `src/components/Preloader.tsx`, `src/components/SmoothScroll.tsx`; GSAP + Lenis + framer-motion sitewide.
- **Evidence:** Preloader is a fake random progress counter (~70 ms ticks to 100, +350 ms, then 1–1.6 s exit animations), once per session. Reduced-motion is handled in `globals.css:186` and SmoothScroll, but not confirmed for the preloader's framer-motion animations.
- **Impact:** Visitors from Instagram on mobile wait before seeing any art; possible janky scroll on mid-range phones.
- **Fix:** Shorten or remove the preloader, honour `prefers-reduced-motion`, then measure with Lighthouse on a real build.

## Also noted (lower priority, not in top five)
- `src/components/Header.tsx`: menu toggle has no `aria-expanded`; no Escape-to-close or visible scroll lock for the full-screen overlay (suspected).
- Instagram URL contains tracking parameters (`utm_source`, `vrfl`).
- Content is hard-coded in `projects.ts`; every edit needs a developer.

## Not audited
Mobile layout and menu behaviour, keyboard/focus order, real performance, SEO output, lightbox on touch devices. These need a running build.

## Recommended first fix
KV-01 (contact form), using the `mailto:` interim. It needs no new dependencies, is easy to revert, and stops silent lead loss. The real delivery channel needs an owner decision.

---

# Business Workflow Audit

Static review of `Contact.tsx`, `projects.ts`, `CulturalArchive.tsx`, `src/app/` (no `CLAUDE.md` exists). Findings KV-01 to KV-04 (form delivery, architecture framing, unconfirmed contact data, artwork/caption mismatch) are not repeated here.

## Confirmed facts
- KALAVANT is a multidisciplinary art business: paintings, sculptures, murals, mixed media, commercial art commissions.
- Instagram: `@kalaa_vant`.

## Assumptions in the code (unconfirmed)
Budget bands (₹3 Cr–₹15 Cr+), "construction budget", site topography/lifestyle brief, building-type inquiry options, a "founder" role, and any service list or pricing. None came from the owner.

## Unanswered questions
Client types, commission process (brief → quote → approval → execution), whether quotes/pricing are shown, whether works are sold, installation/materials policy, who handles inquiries, and who will update content.

## What exists today
Static public site only. `src/app/` has no API routes, no admin, no auth, no database; all content is hard-coded in `src/data/projects.ts`. Instagram is a link and a text strip (`CulturalArchive.tsx:136-160`), not a live feed.

## Top five gaps

### BW-01 — Inquiry brief asks the wrong questions (High, verified)
- **Evidence:** `Contact.tsx` fields: building type, location, "Estimated Construction Budget" (₹3 Cr+), message about "site topography, family requirements". The select's default `"₹5 Cr - ₹15 Cr ($600K - $1.8M)"` (line 16) is not one of its options (lines 85-88), so the control shows no matching choice (verified in code).
- **Impact:** Mural, painting and sculpture clients cannot describe their need; crore-level budgets would put off typical art commissioners. Briefs arrive without medium, size, site or deadline.
- **Owner decision:** Which fields a commission brief needs, and whether to ask budget at all (and in what ranges).

### BW-02 — No art categories or artwork records (High, verified)
- **Evidence:** `Project.category` is residential/commercial/interiors/sustainable/heritage/photography; fields include `area`, `sustainabilityFeatures`, `drawings`; none for medium, dimensions, year, status. 13 real art images in `public/images/kalaavant/` are not organised by discipline.
- **Impact:** Visitors cannot browse paintings vs murals vs sculpture; no way to show size, medium or availability.
- **Owner decision:** Final category list, which fields to display per work, and whether works can be shown as available/sold.

### BW-03 — No client-type or service path (Medium, verified)
- **Evidence:** Services in `projects.ts` are architectural; nothing separates residential, commercial (restaurants, kids' spaces, offices), or institutional clients, though images like `kids-dreamy-balloon-mural`, `sweet-therapy-mural` and `play-area-dinosaur-art` suggest commercial/mural work (suspected, images not viewed).
- **Impact:** Commercial clients cannot see relevant proof or a route to commission; services are not tied to real offerings.
- **Owner decision:** The real service list and client types; which images belong to which client, and whether client names may be shown.

### BW-04 — No quotation, approval or project-status workflow (Medium, verified absence)
- **Evidence:** No code, route or data model for quotes, approvals, stages or execution/installation notes.
- **Impact:** Not necessarily a defect: it is only a gap if the business wants it online. Today everything after the inquiry must happen outside the site.
- **Owner decision:** Does the owner want any of this online? Recommended default: no; keep quotes and approvals off-site until the inquiry flow works. Do not add pricing or stages without owner policy.

### BW-05 — No admin, validation or access control (Medium, verified absence)
- **Evidence:** No auth, API or admin routes anywhere in `src/`; form validation is only HTML `required` plus `type="email"`; no spam protection; content is edited in code.
- **Impact:** Owner cannot add or edit artworks without a developer; once a real inquiry endpoint exists it will accept unvalidated, spammable input.
- **Owner decision:** Who updates content and how often (decides code-edit vs CMS vs Instagram-driven), and who receives inquiries. Server-side validation and basic spam protection belong with KV-01, not a separate admin.

## Contact and Instagram
Instagram is linked but unverified: the URL carries tracking parameters (`utm_source`, `vrfl`), and `CulturalArchive.tsx:57` attributes the page to a founder "Akash Kapare" (unconfirmed). Handle `@kalaa_vant` is confirmed; contact email/phone/addresses are not (see KV-03).

## Owner decisions needed (consolidated)
1. Final art categories and per-work fields (BW-02).
2. Real service list and client types (BW-03).
3. Commission brief fields and whether to collect budget (BW-01).
4. Inquiry delivery channel and recipient (KV-01).
5. Whether any quote/approval/status step goes online (BW-04).
6. Who maintains content (BW-05).

## Recommended next action
Fix KV-01 plus BW-01 together as one small change: replace the architecture fields with a minimal art-commission brief (name, contact, medium/discipline, location, size if known, message) sent by `mailto:`, and remove the budget field and the mismatched default. This needs two owner answers: the medium list and a real recipient address.

---

# Implementation Log

## Consolidated plan (duplicates merged)
| Rank | Issue | Merges | Blocked on owner? |
|---|---|---|---|
| 1 | Contact form fakes success | KV-01 (+ BW-01 budget-default bug) | Recipient address unconfirmed; the mechanism itself is not blocked |
| 2 | Screenshot-quality / upscaled artwork | VD-01 (+ VD-02 stock imagery) | Yes: original photos, ownership list |
| 3 | Site framed as architecture, invented facts | KV-02, KV-03, KV-04, BW-02, BW-03 | Yes: services, categories, contact details |

Other items (KV-05 motion, BW-04/05 admin and quotes, VD-03/04/05) stay queued.

## Fix 1 — KV-01: stop the fake inquiry success (2026-10-25)
**Change:** `handleSubmit` now opens the visitor's email app (`mailto:`) with all form fields prefilled, addressed to `STUDIO_INFO.contact.email`. The confirmation screen says nothing is delivered until the visitor presses send, and gives the address as a fallback. Removed the fake 1.2 s "Transmitting" delay and the invented promise ("A partner architect … respond within two business days"). Budget default changed from a value not in the list to the existing "Undetermined" option.

**Changed files:** `src/sections/Contact.tsx` only. No new dependencies.

**Deliberately not changed (owner decisions pending):** form fields and architecture wording (BW-01), recipient address (KV-03), submit button label.

**Verification:**
| Check | Result |
|---|---|
| `npm run build` | Pass: compiled, 16/16 static pages generated |
| `npm run lint` | Fails, same as baseline: 13 errors and 8 warnings before and after. The only diff is that the 2 existing `jsx-no-comment-textnodes` errors in `Contact.tsx` moved lines (52→61, 169→182). No new lint issues. |
| Browser, production build on localhost | Pass: empty form blocked by `required`; budget default matches a real option; submit shows the honest "Almost There" state; "Inquiry Received" no longer appears; "Back to Form" keeps entered values; no console errors |
| Mailto draft opened in an email client | Not tested: the browser pane cannot open an email app. Subject and body are built with `encodeURIComponent`. |
| Automated tests | None exist in the project |

**Remaining risk:** inquiries go to `atelier@kalaavant.com`, which is unconfirmed (KV-03). The Instagram bio lists its own contact email, so the owner must confirm the right address. Mailto also needs the visitor to have an email app set up; a server-side endpoint is the long-term fix.

## Remaining issues (in order)
1. Confirm the recipient email (one-line change in `src/data/projects.ts`).
2. VD-01 / VD-02: needs original photos and an ownership list.
3. Content reframe (KV-02/03/04, BW-01/02/03): needs services, categories and verified contact details.
4. Pre-existing lint errors (13, mostly `react/jsx-no-comment-textnodes`): low-risk cleanup, no owner input needed.

## Fix 2 — Home hero cleanup (owner-approved, 2026-10-25)
**Change:** Removed the stretched, blurry background photo and its click-to-swap behaviour, so the hero sits on a plain dark background. Added two buttons under the title: "View Work" (`/#projects`) and "Commission a Piece" (`/#contact`). Removed the "Auto-scrolling client works • Hover to pause" label; the strip now also pauses on tap (`:active`) and keyboard focus, and becomes swipeable when reduced motion is on. Removed the Mumbai live clock from the header. This also clears the dev warning about `quality={95}`.

**Changed files:** `src/sections/Hero.tsx`, `src/components/Header.tsx`, `src/app/globals.css`.

**Not changed (pending owner):** "Mumbai • Pune • Goa" line (Instagram says Indore), card titles, Instagram badges on images (need originals). The preloader still reads "Atelier of Contextual Architecture" (KV-02).

**Verification:** `npm run build` passes. `npm run lint`: 13 errors and 8 warnings, the same as before (checked with the change stashed). Browser on the dev server: the desktop hero renders with the title, both buttons and the scrolling strip. At 375 px, the hero links go to the right targets and there is no horizontal page scroll. Tap-to-pause on a real touch device: not tested.

## Fix 3 — Loading screen wording and logo-to-top (owner-approved, 2026-10-25)
**Change:** Loading screen no longer says "Contextual Architecture", "Mumbai • Pune • Goa" or Mumbai coordinates; it now shows "Art & Murals Atelier", "@kalaa_vant" and "Loading artworks". Clicking the KALAA VANT logo in the header while on the home page now scrolls to the top and clears the `#section` from the URL (before, it did nothing on `/`).
**Changed files:** `src/components/Preloader.tsx`, `src/components/Header.tsx`.
**Verification:** build passes; lint unchanged (13 errors, 8 warnings, none new). Browser: from `/#services` (scrollY 12511) clicking the logo gave scrollY 0 and URL `/`. Loading-screen text checked by code and build only, not viewed. Logo click from a project page (`/projects/...` → `/`) not tested.
**Still open:** "Mumbai • Pune • Goa" in the hero footer (location unconfirmed), page title/metadata (KV-02).

## Fix 4 — Colour system: charcoal / ivory / antique gold (owner-approved, 2026-10-25)
**Tokens** (in `src/app/globals.css` `@theme`): `charcoal #111111`, `ivory #F5F0E8`, `ivory-deep #EAE4D8`, `gold #C5A46D`, `bronze-deep #7A6350` (darker bronze for small text on ivory, because gold on ivory is only about 2:1 contrast). Hard-coded `#141414`, `#101012`, `#1A1A1A`, `#F5F3EF`, `#EBE7DF`, `#E8E4DC`, `#B8A99A` in classes were replaced by these tokens across components, sections and the project page (zero left in `src/`).
**Layout:** Header stays charcoal when scrolled (it used to turn ivory). Studio section (`AboutStudio.tsx`) is now ivory with charcoal text; the dark overlay card on its photo is kept. Section order is now charcoal hero, ivory Philosophy and Projects, charcoal Archive, ivory Studio and Services, charcoal Contact. Footer keeps its own `#0D0D0D`. No images, copy or routes changed. No textures added.
**Verification:** `npm run build` passes. `npm run lint` unchanged (13 errors, 8 warnings, none new). Browser (dev server): computed section backgrounds match the intended colours; Studio section and scrolled header viewed on desktop; no horizontal overflow at 375 px on `/` or a project page. Not verified: mobile view of the ivory Studio section (the loading screen was still showing in that capture), Services/Featured/Contact visually after the swap, and a measured contrast ratio. Other ivory sections still use `#A08975`-style small text (about 3:1); only Philosophy's label and the Studio section were moved to `bronze-deep`.
**New finding (pre-existing, not colour-related):** the dev console on `/projects/[slug]` reports "params accessed outside `<Suspense>`" (Next.js instant-shell warning from `projects/[slug]/page.tsx`); the production build still passes.

---

# Business Strategy and Workflow Plan

Planning only. No application code was changed for this section. It builds on BW-01 to BW-05 and the Implementation Log above.

## A. Confirmed facts (from the owner)
- KALAVANT is a multidisciplinary art business: paintings, sculptures, murals, mixed media and commercial art commissions.
- Instagram: `@kalaa_vant`.

## B. Seen but not confirmed
- Instagram bio (read once, partially): "DM for collaboration", a contact email, location Indore, and some grid posts credited to other accounts.
- The site's tagline "Bespoke Murals • Sacred Indian Art • 3D Architectural Reliefs", card titles, studio offices, stats, founder name and contact details are unverified placeholders (KV-03).
- Segments (homeowners, interior designers, architects, hotels, restaurants, offices, developers, brands) are hypotheses only. The images suggest homes, children's play areas and cafés, but that is an inference, not a client list.

## C. Proposed business ideas (to be confirmed before any build)
| Area | Proposal | Depends on |
|---|---|---|
| 1. Positioning | One plain sentence in the hero: what you make, for whom, and where. Draft only after owner answers Q1–Q3. | Q1–Q3 |
| 2. Segments | Pick at most 2–3 primary segments; show a short "Who we work with" line for each only if real. | Q4 |
| 3. Services | Group the confirmed disciplines (paintings, murals, sculpture/reliefs, mixed media, commercial commissions) into one short list with a sample image each. Replace the architecture service list. | Q2 |
| 4. Portfolio as sales material | Each project: finished photo, process photo if available, medium, place, year, and size only if confirmed. Skip any field that is unknown. | Q5, original photos |
| 5. Conversion paths | Three clear entry points: "Commission a piece" (private/custom), "Residential or interior project", "Commercial project". Same form, a type selector that changes the optional fields. | Q2, Q4 |
| 6. Enquiry brief | Required: name, one contact method, what they want. Optional: location, approximate size, budget range, timeline, inspiration link or photo. | Q6 |
| 7. Quotation workflow | Off-site for now. Suggested stages: enquiry → qualify → discuss → quote → approval → advance → execution → delivery. No prices or promised response times on the site. | Q7 |
| 8. Operations | Start with a shared inbox plus a simple tracker (spreadsheet) with stage, date, source and next follow-up. A site admin, CRM or payment system is not justified yet. | Q8 |
| 9. Trust | Use only owner-confirmed work, credentials and testimonials. Show the Instagram handle. Remove invented stats and awards. | Q5 |
| 10. Measurement | See metrics below. | Q6, Q8 |

## D. Operational reality of the current build
- No backend, database, auth or admin; inquiries now open the visitor's email app (Fix 1). Anything needing server storage, payments or client logins would be a new architecture and is out of scope until justified.
- Smallest next steps that need no backend: a better brief via `mailto:`; a free form service (owner decision); and an enquiry-source tag (see metrics).

## E. Metrics (practical, no tooling assumed)
1. Qualified enquiries per month (has a project type and a contact method).
2. Enquiry source: Instagram, referral, search, other. Capture by an optional "How did you find us?" field, or by a UTM-tagged Instagram bio link.
3. Enquiry → quote sent → commission won, as a count at each stage.
4. Average commission value and time from enquiry to approval (owner tracker, not the website).
5. Share of enquiries by type (private, residential, commercial).

## F. Top three opportunities
| # | Opportunity | Business value | Complexity | Decisions needed |
|---|---|---|---|---|
| 1 | **Make enquiries reach the owner and fit art commissions**: confirmed recipient, art-specific brief with optional fields, source field | Highest: every lead currently depends on the form | Low (one component, no new dependency) | Recipient address; medium list (Q2); budget ask yes/no and ranges (Q6) |
| 2 | **Clear positioning and services on the home page**: replace architecture copy and services with confirmed art disciplines, with one image each | High: visitors understand the offer in seconds | Low to medium (copy and data file, no layout rebuild) | Services, tagline, segments (Q1–Q4) |
| 3 | **Genuine portfolio and trust**: owner-confirmed originals, project cards with only real details, remove invented stats | High for credibility with commercial and design-trade buyers | Medium (depends on photo supply and sign-off) | Original photos, which images are theirs, whether client names can be shown (Q5) |

## G. Questions for the owner (essential)
1. In one sentence, what does KALAVANT do and for whom?
2. Which services are offered today (paintings, murals, sculpture/reliefs, mixed media, commercial)? Anything else, or anything to leave out?
3. Where are you based and which cities do you serve or travel to?
4. Which client types do you actually work with now, and which do you want more of?
5. Which images are your own work? Can client names or locations be shown? Are there real testimonials or credentials?
6. What do you want to know before replying to an enquiry? Do you want budget asked, and in what ranges (or not at all)?
7. How do you quote and confirm a commission today (site visit, sketch, advance)? What is your usual reply time?
8. Who answers enquiries, and do you already track them anywhere?

## H. Suggested order
1. Answer Q6 and send the recipient address, then do opportunity 1.
2. Answer Q1–Q4, then do opportunity 2.
3. Send photos and Q5 answers, then do opportunity 3 (with VD-01 and VD-02).
4. Revisit admin, CRM or payments only after real enquiry volume shows a need.

---

## Fix 5 — Enquiry form: art brief, no hard-coded recipient (2026-10-25)
**Services check against this audit:** the old project-type options (villa, coastal estate, penthouse, earth compound, atelier/commercial pavilion) and the crore budget bands were unconfirmed architecture assumptions (KV-02, BW-01), so they were removed. New options use only the five disciplines you confirmed: Painting, Mural, Sculpture, Mixed media, Commercial art commission, plus "Not sure yet". The tagline's "architectural reliefs" is not in the confirmed list and was not added.
**Form now collects:** name*, email*, project type, location, approximate dimensions, timeline, budget (free text, no invented ranges), reference link, and project description*. Everything marked optional is optional. Fields now have `htmlFor` labels.
**Submission mechanism (no backend exists):**
- Recipient comes from `NEXT_PUBLIC_INQUIRY_EMAIL` (not in code). If set: the visitor's email app opens prefilled and the screen says nothing is delivered until they press send.
- If not set (the current state): nothing is sent. The screen says "Not Sent Yet", shows the brief to copy, and links to Instagram for a direct message. The site never claims delivery.
- Reference images: a `mailto:` cannot carry attachments, so only a reference link is supported. Real uploads need a backend or form service.
**Changed files:** `src/sections/Contact.tsx` only. No dependencies added.
**Verification:** `npm run build` passes. `npm run lint`: 13 errors and 8 warnings, same as before; the two errors in `Contact.tsx` are the existing `jsx-no-comment-textnodes` ones. Browser (dev server): required-field check blocks an empty form; brief text contains every field; with no env var the "Not Sent Yet" screen with Copy Brief and Open Instagram appears; with a throwaway test address set, the "Almost There" screen appears. Not tested: the mailto draft in a real mail client, the Copy Brief clipboard action, mobile layout of the new fields, and any real delivery. No automated tests exist.
**Remaining configuration (owner):**
1. Provide the confirmed inbox and set `NEXT_PUBLIC_INQUIRY_EMAIL` in the host's environment (and `.env.local` for local use; `.env*` is git-ignored). It is public by design, since it ends up in the page.
2. The left column of the Contact section and the Footer/Header still show `STUDIO_INFO.contact.email` and the phone number, which remain unconfirmed (KV-03).
3. Decide whether to move to a form service for real delivery and image uploads.

## Fix 6 — "Selected Works" gallery of real artwork (2026-10-25)
**Why:** the home page's main showcase was "Featured Architecture", built on photoreal architecture images whose origin is unconfirmed (VD-02), while the real murals, paintings and reliefs were only in the hero strip.
**Change:** new `src/sections/ArtworkGallery.tsx` replaces `FeaturedProjects` on the home page (same `id="projects"`, so the hero button, header and footer links still work). It shows 23 of the 24 photos in `public/images/kalaavant/` in an uncropped editorial masonry grid on ivory, with an editorial serif headline, gold hairline, discipline filter (All / Murals / Paintings / Reliefs & Sculpture / Process), a "Commission a piece" link and an Instagram link. Captions only describe what each photo shows; no places, years, sizes, clients or invented titles. The filter buttons use `aria-pressed`. `festival-architectural-decor.jpg` was left out (video frame of event decor, not clearly the studio's art). `FeaturedProjects.tsx`, the project pages and the Archive section are untouched; the architecture showcase is simply no longer on the home page (one-line revert in `src/app/page.tsx`).
**Blur:** no higher-resolution originals exist on this machine (the source photos are ~456 px wide Instagram screenshots), so blur cannot be truly fixed. Images are shown at about their native width and never cropped or enlarged. The photos still carry Instagram badges (VD-01). Sending the originals remains the real fix.
**Changed files:** `src/sections/ArtworkGallery.tsx` (new), `src/app/page.tsx`.
**Verification:** `npm run build` passes; `npm run lint` unchanged (13 errors, 8 warnings). Browser (dev server): the gallery renders, all images load, the Paintings filter shows 6 items and marks the button pressed, no horizontal overflow at 375 px. Not verified: the mobile gallery visually (the loading screen was still showing in that capture, so check that the loading screen finishes on phones), the other filters, keyboard focus order, and performance (no Lighthouse run).
**Not done (needs owner input):** original photos (VD-01), removing or keeping the architecture imagery in the Archive and project pages (VD-02), formal artwork titles, sizes and places, a lightbox for larger views (would enlarge 456 px images and blur), and a cinematic full-bleed hero (needs high-resolution images).

## Review of Fix 6 gallery before commit (2026-10-25)
| Check | Result |
|---|---|
| Mobile loading screen "stuck at 0%" | **Not an app bug; test-environment artefact.** The pane was hidden (`document.visibilityState === "hidden"`), which pauses animation frames. With a fresh session on a 375 px viewport, progress ran 0 → 100 % within 1 s. The overlay's exit animation (framer-motion) only completes when the page is visible; on a visible desktop tab the overlay was gone after load. Not confirmed: the exit animation finishing on a visible mobile viewport (could not make the pane visible during the mobile test). |
| Filters (All / Murals / Paintings / Reliefs & Sculpture / Process) | Pass. Counts 23 / 12 / 6 / 3 / 2 (sum 23); every shown caption matches the active discipline; exactly one button has `aria-pressed="true"`. CSS-uppercase labels (rendered "PAINTINGS" etc.) checked with `textContent`, not `innerText`. |
| Keyboard | Pass. Tab moves between filters, Enter and Space both activate, focus stays on the button, default focus ring is visible (`:focus-visible` true). Gallery images are non-interactive, so no extra tab stops. |
| Responsive layout | Pass: 2 columns at 375 px, 3 at 768 px, 4 at 1440 px; no horizontal overflow at any of them. |
| Sharpness | Server returns the real file (456 px, or a 384 px downscale); images render at about 160 / 230 / 300 px wide, never enlarged. (`naturalWidth` is unreliable with `srcset`, so a first upscale reading of 1.2–2.3× was invalid.) No high-resolution images were created or implied. |
| Console errors | None on `/`. Image requests: all 200/304. |
| `npm run build` / `tsc --noEmit` | Pass. |
| `npm run lint` | 13 errors, 8 warnings, identical to the baseline at the start (none in the new gallery). |
| Not tested | Real touch devices, Lighthouse/performance, screen-reader output. |
