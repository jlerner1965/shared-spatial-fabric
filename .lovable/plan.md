Fix team photo cropping so every headshot is centered, fully visible, and fills its circular frame.

### Current state
- Team photos render in `rounded-full` circles using `aspect-square`, `object-cover`, and a per-member `pos` class (`object-center` for everyone).
- Leadership uses `w-28`; advisors use `w-24`.
- `object-cover` fills the circle but crops parts of the image. With every member set to `object-center`, some faces are off-center or partially cut off because the source image framing differs per person.

### Plan
1. Audit each team photo in the browser to identify which faces/heads are cut off or off-center.
2. Update the `pos` value for each member in `src/routes/index.tsx` to a Tailwind `object-position` that centers the face in the crop (e.g., `object-center`, `object-top`, `object-[center_20%]`, `object-[center_30%]`, `object-[center_10%]`).
3. If the source image aspect ratio leaves too much empty space or still crops the face, use `object-contain` with a subtle background fill (`bg-primary/10` or `bg-card`) so the whole face remains visible inside the circle, while preserving a consistent circular frame.
4. Ensure leadership and advisor circles use the same sizing/coordinate logic for visual consistency.
5. Verify in the live preview that every team photo shows a centered face with no cutoff and that the circle is fully filled (or intentionally filled with background when containment is needed).

### Technical details
- File: `src/routes/index.tsx`
- Data arrays: `TEAM_LEAD` and `TEAM_ADVISORS`
- Current image class: `aspect-square w-28 rounded-full border border-primary/30 object-cover ${p.pos}`
- Tailwind utilities to apply: `object-cover`/`object-contain`, `object-center`, `object-top`, `object-[center_X%]`