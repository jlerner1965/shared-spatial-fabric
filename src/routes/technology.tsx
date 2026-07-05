import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Eye, Fingerprint, Sparkles } from "lucide-react";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — R.A.D. — AR2" },
      {
        name: "description",
        content:
          "Recognition, Authorization, Display: the three-layer architecture powering AR2's collaborative spatial computing platform.",
      },
      { property: "og:title", content: "Technology — AR2" },
      {
        property: "og:description",
        content: "Recognition. Authorization. Display. The R.A.D. architecture.",
      },
    ],
  }),
  component: Tech,
});

const layers = [
  {
    icon: Eye,
    name: "Recognition",
    tag: "R",
    color: "var(--azure)",
    copy: "The world becomes addressable. AR2 recognizes people, pets, objects, places, and events as first-class entities that any application can reference safely.",
    bullets: [
      "Multi-modal recognition (vision, audio, geo, beacons)",
      "Living entity anchors — humans, pets, athletes, characters",
      "Object and location fingerprints stable across sessions",
      "Event-based triggers for time-and-place experiences",
    ],
  },
  {
    icon: Fingerprint,
    name: "Authorization",
    tag: "A",
    color: "var(--aurora)",
    copy: "Every recognition, message, and hologram is permissioned. Identity, groups, and subscriptions govern who can see, edit, and share every spatial resource.",
    bullets: [
      "Zero-trust identity for entities and users",
      "Fine-grained permissions per anchor, group, and app",
      "Enterprise SSO, audit logs, and compliance controls",
      "Subscription and licensing at the platform layer",
    ],
  },
  {
    icon: Sparkles,
    name: "Display",
    tag: "D",
    color: "var(--emerald-soft)",
    copy: "Content lives in the world. Persistent holograms, shared interfaces, and spatial messaging render consistently across devices, sessions, and users.",
    bullets: [
      "Cross-device render targets — headset, phone, glasses, web",
      "Persistent holograms with world-scale coordinates",
      "Shared interactive surfaces and collaborative UI",
      "Spatial messaging anchored to entities or places",
    ],
  },
];

function Tech() {
  return (
    <PageShell>
      <PageHero
        eyebrow="R.A.D. Architecture"
        title={
          <>
            Recognition. Authorization.
            <br />
            <span className="text-gradient">Display.</span>
          </>
        }
        subtitle="Three composable layers that turn isolated AR apps into a shared operating system for the physical world."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-hero opacity-60" />
          <div className="relative grid gap-10 md:grid-cols-3">
            {layers.map((l, i) => (
              <div key={l.name} className="relative">
                <div
                  className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl border border-white/10"
                  style={{ background: `color-mix(in oklab, ${l.color} 30%, transparent)` }}
                >
                  <l.icon className="size-6" />
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Layer {i + 1} — {l.tag}
                </p>
                <h3 className="mt-2 font-display text-3xl">{l.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{l.copy}</p>
                <ul className="mt-6 space-y-2">
                  {l.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-foreground/80">
                      <span
                        className="mt-1.5 block size-1.5 shrink-0 rounded-full"
                        style={{ background: l.color }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
          Data flow
        </p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">How a spatial event travels.</h2>
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
          {[
            ["Capture", "Device senses world state — vision, audio, location, motion."],
            ["Recognize", "AR2 resolves entities and anchors from sensor data."],
            ["Authorize", "Permission engine gates access per user, group, and app."],
            ["Sync", "State replicates in real time across all participants."],
            ["Render", "Display layer projects consistent holograms per device."],
          ].map(([k, v], i) => (
            <div
              key={k}
              className="grid grid-cols-[80px_180px_1fr] items-center gap-6 border-b border-white/5 px-6 py-6 last:border-b-0"
            >
              <span className="font-mono text-xs text-[var(--cyan)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-xl">{k}</span>
              <span className="text-sm text-muted-foreground">{v}</span>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}