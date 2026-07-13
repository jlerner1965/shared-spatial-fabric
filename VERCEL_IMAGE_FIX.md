# Vercel image fix

The image imports in `src/components/site-layout.tsx` and `src/routes/index.tsx`
use absolute URLs from the working Lovable deployment. This avoids Vercel
rewriting Lovable asset metadata into local `/__l5e/assets-v1/...` paths that
return 404.

Upload the extracted project files and folders to the repository root. Do not
upload this ZIP as a single file.
