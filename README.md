# AR2 Project — marketing site

Production site for **https://ar2project.com** (and `www.`). Two pages — the
one-page home (`/`) and `/contact` — plus a contact API endpoint and a sitemap.

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routes, SSR)
- Tailwind CSS 4
- Deployed as a **Cloudflare Worker** named `ar2project-site`
  (Cloudflare account: ar2project-support@hypernerd.net)
- Contact form emails are sent via [Resend](https://resend.com)
  (account: ar2project-support@hypernerd.net; sending domain `ar2project.com` is verified)

Package manager is **npm**. Node 22+.

## Develop

```sh
npm install
npm run dev        # http://localhost:8080 (port may vary)
```

## Deploy

```sh
npx wrangler login   # once per machine, using the Cloudflare account above
npm run deploy       # = vite build + wrangler deploy
```

The build (nitro) generates `.output/server/wrangler.json` and merges in the
root `wrangler.jsonc`, which sets the worker name and the custom domains.
Worker secrets (set once via `wrangler secret put`, already configured in prod):

| Secret               | Purpose                                   |
| -------------------- | ----------------------------------------- |
| `RESEND_API_KEY`     | Resend API key for the contact form       |
| `CONTACT_TO_EMAIL`   | Inbox that receives inquiries             |
| `CONTACT_FROM_EMAIL` | From-address (an @ar2project.com address) |

## Where things live

- `src/routes/index.tsx` — the entire homepage. Copy, team members, use cases
  etc. are plain data arrays at the top of the file.
- `src/routes/api/contact.ts` — contact form endpoint (validates, honeypot,
  sends via Resend REST API).
- `src/components/` — layout shell, contact form, and the one shadcn/ui
  component in use (toasts).
- `public/assets/` — all site images, referenced through the small
  `src/assets/*.asset.json` descriptors (a leftover Lovable convention: each
  JSON's `url` field points at the local file in `public/assets/`).
- `src/lib/` + `src/server.ts` + `src/start.ts` — SSR error-page plumbing from
  the original template. Rarely needs touching.

## History / upstream

This repo is a fork of
[jlerner1965/shared-spatial-fabric](https://github.com/jlerner1965/shared-spatial-fabric),
a Lovable.dev project (remote `upstream`). **Production deploys come from this
fork only.** Lovable edits sync into upstream's `main` unreviewed — pull them
deliberately (`git fetch upstream && git merge upstream/main`), re-test, then
deploy. This fork was heavily cleaned up after the handoff (unused shadcn
components, Supabase wiring, and Lovable scaffolding removed), so upstream
merges will conflict on deleted files; resolving in favor of the deletion is
almost always right.

## DNS caution

The `ar2project.com` zone (Cloudflare) also carries the client's
**Microsoft 365 email** (MX/TXT records). Never delete or edit those when
touching DNS.
