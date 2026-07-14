# Notes for AI agents

Read `README.md` first — it covers the stack, deploy flow, secrets, and the
fork/upstream relationship.

- This is the **production fork**. The Lovable-connected original is the
  `upstream` remote; do not push to it, and do not merge from it without being
  asked.
- Deploys go to a Cloudflare Worker: `npm run deploy`. Never run
  `wrangler delete`.
- The Cloudflare zone for ar2project.com carries the client's live
  Microsoft 365 email — never touch MX or TXT records.
- TanStack Start file-based routing conventions are documented in
  `src/routes/README.md`. `src/routeTree.gen.ts` is generated — never edit it
  by hand.
