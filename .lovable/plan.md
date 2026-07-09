Four changes:

**1. Upload 3 images as CDN assets** (via `lovable-assets create`):
- `four_diffent_young_men_watching_a_MMA_fightcZhcO_1.jpg` → `src/assets/vision-mma.jpg.asset.json` (for Live Performances)
- `alternative_young_couples_watching_a_concert_with_Flames_1.jpg` → `src/assets/vision-concert.jpg.asset.json` (for Responsive Entertainment)
- `image-3.png` (grandmothers + holographic granddaughter) → `src/assets/vision-family.jpg.asset.json` (for Generational Connection)

**2. `src/routes/index.tsx` — Vision cards (~lines 155–166):**
- Convert the three vision cards to include a full-width top image (h-48, object-cover, rounded top corners) above the title/description.
- Map images:
  - Generational connection → vision-family
  - Live performances → vision-mma
  - Responsive entertainment → vision-concert
- Import the three new asset JSONs at the top.

**3. `src/routes/contact.tsx` — match uploaded screenshot exactly:**
- Remove the `<PageHero>` component AND the separate `<section>` below it.
- Replace with a single two-column section: left column has eyebrow "— GET IN TOUCH", title "Let's build the spatial layer together.", subtitle, and the 6 pill chips (Licensing / Partnerships / Investment / Developers / Enterprise / Media). Right column has the `<ContactForm />`.
- Drop the "Inquiries we handle" heading, the descriptive paragraph, and the Phone card (per screenshot).
- Remove now-unused imports: `PageHero`, `heroContact`, `Phone`.

**4. No other files change.** Navigation, footer, form logic, and other sections stay identical.