Delete the Privacy and Terms route pages and remove their links from the footer.

## Steps
1. Delete `src/routes/privacy.tsx`.
2. Delete `src/routes/terms.tsx`.
3. Update `src/components/site-layout.tsx`:
   - Remove the Privacy and Terms `<Link>` items from the footer bottom row.
   - Keep the copyright text and the R·A·D tagline.
4. Verify no other navigation or links reference `/privacy` or `/terms`.

No new files or dependencies needed.