import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  jobTitle?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type RateLimiter = { limit: (options: { key: string }) => Promise<{ success: boolean }> };

// Per-IP rate limit via the CONTACT_RATE_LIMIT binding in wrangler.jsonc.
// Nitro's Cloudflare entry assigns the raw worker env (with all bindings) to
// `globalThis.__env__` on every request; that's the only reliable way to reach
// bindings from a route handler. Local `vite dev` has no binding: fail open.
async function isRateLimited(request: Request): Promise<boolean> {
  try {
    const env = (globalThis as { __env__?: { CONTACT_RATE_LIMIT?: RateLimiter } }).__env__;
    const limiter = env?.CONTACT_RATE_LIMIT;
    if (!limiter) return false;
    const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
    const { success } = await limiter.limit({ key: ip });
    return !success;
  } catch (err) {
    console.error("Rate limiter unavailable, failing open:", err);
    return false;
  }
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (await isRateLimited(request)) {
          return Response.json(
            {
              error: "Too many messages from your connection — please wait a minute and try again.",
            },
            { status: 429 },
          );
        }

        let body: ContactPayload;
        try {
          body = (await request.json()) as ContactPayload;
        } catch {
          return Response.json({ error: "Invalid request body." }, { status: 400 });
        }

        // Honeypot: pretend success so bots don't learn anything.
        if (body.website?.trim()) {
          return Response.json({ ok: true });
        }

        const name = body.name?.trim().slice(0, 100) ?? "";
        const email = body.email?.trim().slice(0, 255) ?? "";
        const message = body.message?.trim().slice(0, 5000) ?? "";
        if (!name || !email || !message || !EMAIL_RE.test(email)) {
          return Response.json(
            { error: "Name, a valid email, and a message are required." },
            { status: 400 },
          );
        }

        const apiKey = process.env.RESEND_API_KEY;
        const to = process.env.CONTACT_TO_EMAIL;
        const from = process.env.CONTACT_FROM_EMAIL ?? "AR2 Website <onboarding@resend.dev>";
        if (!apiKey || !to) {
          console.error(
            "Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL.",
          );
          return Response.json(
            { error: "The contact form is temporarily unavailable." },
            { status: 503 },
          );
        }

        const fields: Array<[string, string | undefined]> = [
          ["Name", name],
          ["Email", email],
          ["Company", body.organization?.trim().slice(0, 200)],
          ["Job title", body.jobTitle?.trim().slice(0, 200)],
          ["Phone", body.phone?.trim().slice(0, 40)],
          ["Inquiry type", body.inquiryType?.trim().slice(0, 100)],
        ];
        const rows = fields
          .filter(([, v]) => v)
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 12px 4px 0;color:#555;">${k}</td><td style="padding:4px 0;">${escapeHtml(v!)}</td></tr>`,
          )
          .join("");
        const html = `<h2 style="margin:0 0 12px;">New inquiry from the AR2 website</h2><table>${rows}</table><h3 style="margin:16px 0 4px;">Message</h3><p style="white-space:pre-wrap;">${escapeHtml(message)}</p>`;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from,
            to: [to],
            reply_to: email,
            subject: `AR2 inquiry (${body.inquiryType?.trim() || "General"}) from ${name}`,
            html,
          }),
        });

        if (!res.ok) {
          console.error("Resend API error:", res.status, await res.text());
          return Response.json(
            { error: "We couldn't send your message. Please try again." },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
