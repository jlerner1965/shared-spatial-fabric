
## Changes to `src/routes/index.tsx`

**1. Hero (line 124–131)**
- Remove the "Book a licensing conversation" primary button and the "How it works" secondary button. Leave the tagline, subtitle, and trust bar.

**2. Delete the "Principles" section entirely** (lines 312–331).

**3. Team section — add photos and drop Jan**
- Remove `Jan van Merkensteijn` from `TEAM_ADVISORS`.
- Crop the 9 headshots (Nick, Perry, Dmitri, Anthony, Cynthia, Mark, Ben Lee, Ian) from the uploaded `image-4.png` into individual circular PNGs, upload each via `lovable-assets`, and attach a `photo` URL to every team entry.
- Team cards: replace monogram initials with a round photo (`aspect-square rounded-full object-cover`), keep name + role beneath.
- Leadership grid stays 4-up; advisors grid becomes 4-up (was 5-up) after Jan's removal.

**4. Final CTA section (lines 410–421) → inline contact form**
- Remove the "Get in touch" button.
- Replace that section with the exact two-column layout from `src/routes/contact.tsx` (eyebrow "Get in touch", headline "Let's build the spatial layer together.", subtitle, chips on the left; `<ContactForm />` on the right).
- Extract the existing `ContactForm` component out of `src/routes/contact.tsx` into `src/components/contact-form.tsx` so both pages import the same component (no duplicated logic).

## Changes to `src/routes/contact.tsx`

- Import `ContactForm` from the new shared module; delete the local copy. Layout and copy unchanged.

## Technical notes

- Portrait extraction: run a short Python/PIL script against `/mnt/user-uploads/image-4.png` producing 9 square PNGs in `/tmp/portraits/`, then `lovable-assets create --file …` for each and write `.asset.json` pointers under `src/assets/team-<slug>.jpg.asset.json`.
- No route additions — team stays as the anchored `#team` section on the homepage.
- No functional/backend changes to the form submission handler.
