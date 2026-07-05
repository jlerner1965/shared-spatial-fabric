import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Database, KeyRound, Layers, Radar, Cpu, Cloud } from "lucide-react";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — AR2" },
      {
        name: "description",
        content:
          "AR2's platform architecture — SDKs, APIs, spatial databases, permission engine, rendering, and identity as one coherent system.",
      },
      { property: "og:title", content: "Platform — AR2" },
      { property: "og:description", content: "SDKs, APIs, and the shared spatial layer." },
    ],
  }),
  component: Platform,
});

const stack = [
  { icon: Layers, t: "SDKs", d: "iOS, Android, Unity, Unreal, Web — one API surface across every runtime." },
  { icon: Cpu, t: "Rendering layer", d: "Deterministic hologram rendering with device-native performance." },
  { icon: Radar, t: "Spatial database", d: "Persistent anchors, entities, and events indexed at world scale." },
  { icon: KeyRound, t: "Permission engine", d: "Rules and roles for every anchor, message, and holographic surface." },
  { icon: Database, t: "Identity layer", d: "Portable identity for humans, entities, and enterprise directories." },
  { icon: Cloud, t: "REST + realtime APIs", d: "HTTP for control plane, streaming for state and collaboration." },
];

const snippet = `import { AR2 } from "@ar2/sdk";

const ar2 = new AR2({ apiKey: process.env.AR2_KEY });

// Anchor a persistent, shared hologram to a location
const anchor = await ar2.anchors.create({
  location: { lat: 37.7749, lng: -122.4194 },
  entity:   "team-artifact",
  visibleTo: ["group:design-team"],
  content:  { type: "gltf", url: "cdn://sculpture.glb" },
});

// Subscribe to real-time collaboration
ar2.anchors.on(anchor.id, "update", (state) => {
  console.log("shared state:", state);
});`;

function Platform() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Platform"
        title={
          <>
            One <span className="text-gradient">shared</span> layer.
            <br />
            Every AR runtime.
          </>
        }
        subtitle="AR2 provides the primitives every AR product rebuilds from scratch — as one cohesive, cross-platform infrastructure."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => (
            <div key={s.t} className="glass rounded-2xl p-6">
              <s.icon className="size-6 text-[var(--cyan)]" />
              <h3 className="mt-4 font-display text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Developer surface
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              A single API for every anchor, entity, and interaction.
            </h2>
            <p className="mt-6 text-muted-foreground">
              The SDK is intentionally small. Anchors, entities, permissions, events. Everything
              else composes from these primitives.
            </p>
          </div>
          <div className="glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-3">
              <span className="size-2.5 rounded-full bg-[oklch(0.7_0.18_25)]" />
              <span className="size-2.5 rounded-full bg-[var(--gold)]" />
              <span className="size-2.5 rounded-full bg-[var(--emerald-soft)]" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                anchor.example.ts
              </span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-foreground/90">
              <code>{snippet}</code>
            </pre>
          </div>
        </div>
      </section>
    </PageShell>
  );
}