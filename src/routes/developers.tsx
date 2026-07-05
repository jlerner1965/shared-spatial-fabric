import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Terminal, Boxes, ShieldCheck, Webhook, Rss, Fingerprint } from "lucide-react";

export const Route = createFileRoute("/developers")({
  head: () => ({
    meta: [
      { title: "Developers — AR2" },
      {
        name: "description",
        content:
          "Build with AR2 — SDKs, REST APIs, authentication, spatial anchors, identity services, permissions, events, and subscriptions.",
      },
      { property: "og:title", content: "Developers — AR2" },
      { property: "og:description", content: "SDKs and APIs for collaborative spatial computing." },
    ],
  }),
  component: Dev,
});

const features = [
  { icon: Boxes, t: "SDKs", d: "Native SDKs for every major AR runtime." },
  { icon: Terminal, t: "REST APIs", d: "Typed, versioned endpoints with predictable errors." },
  { icon: ShieldCheck, t: "Auth", d: "OAuth2, SSO, and service accounts." },
  { icon: Fingerprint, t: "Identity", d: "Portable identity for people and entities." },
  { icon: Webhook, t: "Events", d: "Webhooks and realtime streams for every anchor." },
  { icon: Rss, t: "Subscriptions", d: "Server-driven state, no polling required." },
];

const curl = `curl https://api.ar2.dev/v1/anchors \\
  -H "Authorization: Bearer $AR2_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "location": { "lat": 40.7580, "lng": -73.9855 },
    "entity":   "times-square-mural",
    "visibleTo": ["public"],
    "content":  { "type": "video", "url": "cdn://mural.mp4" }
  }'`;

function Dev() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Developers"
        title={<>Build on the <span className="text-gradient">shared layer</span>.</>}
        subtitle="A small, well-designed API that lets any application place persistent, permissioned holograms in the real world."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.t} className="glass rounded-2xl p-6">
              <f.icon className="size-6 text-[var(--cyan)]" />
              <h3 className="mt-4 font-display text-xl">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.03] px-4 py-3 font-mono text-xs">
              <span className="text-[var(--emerald-soft)]">●</span>
              terminal — ar2 cli
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-[var(--cyan)]">$</span> npm i @ar2/sdk{"\n"}
                <span className="text-[var(--cyan)]">$</span> ar2 login{"\n"}
                <span className="text-muted-foreground">→ signed in as you@studio.com</span>
                {"\n"}
                <span className="text-[var(--cyan)]">$</span> ar2 anchors deploy ./scene.ar2
                {"\n"}
                <span className="text-muted-foreground">
                  → deploying to 3 regions... ok (312ms){"\n"}→ anchor:{" "}
                  <span className="text-[var(--gold)]">anch_9f2a…3c1</span>
                </span>
              </code>
            </pre>
          </div>
          <div className="glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.03] px-4 py-3 font-mono text-xs">
              POST /v1/anchors
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed">
              <code>{curl}</code>
            </pre>
          </div>
        </div>
      </section>
    </PageShell>
  );
}