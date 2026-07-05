import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import heroPlatform from "@/assets/hero-platform.jpg.asset.json";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — AR2 Project" },
      { name: "description", content: "The AR2 Platform gives developers and creators the primitives to build spatially anchored, multi-user AR experiences — with fair reward and strong IP protection." },
      { property: "og:title", content: "Platform — AR2 Project" },
      { property: "og:description", content: "Developer primitives for shared, spatially anchored AR." },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Developer Platform"
        title={<>Build for <span className="text-primary text-glow">real spaces.</span></>}
        subtitle="A creator platform for spatially anchored AR — Recognition, Authorization, and Display as callable primitives, with monetization and IP protection built in."
        image={heroPlatform.url}
        imageAlt="Developer desk with holographic UI panels floating above a laptop"
      />

      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            { title: "Anchor SDK", desc: "Register living entities, objects, and places as persistent anchors. Consent, permissions, and lifecycle handled." },
            { title: "Skins Studio", desc: "Author stock and customizable overlays for humans and pets. Rig once, deploy across every compatible headset and phone." },
            { title: "Sessions", desc: "Multi-user synchronization at low latency — everyone sees the same performance, ad, or message on the same anchor." },
            { title: "Monetization", desc: "Programmatic marketplaces for skins, performances, and location-based advertising. Fair splits, transparent attribution." },
            { title: "IP & Rights", desc: "Enforce creator rights and IP holder policies at the anchor level. Strong parental controls by default." },
            { title: "Openness", desc: "Interoperable with existing AR ecosystems — Lens Studio, headworn platforms, mobile. Bring your existing users." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border/60 bg-card p-7 transition-all hover:border-primary/50">
              <h3 className="font-display text-xl font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">For Platforms</p>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Accelerate the shift from mobile lenses to shared, headworn AR.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            AR2's virtual identification and anchoring technologies deliver an enhanced layer of communication and sharing — de-risking headworn launches while strengthening existing mobile AR revenue.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <MarketStat value="$2.61B → $13.05B" label="Headworn AR global revenue, 2024–2029" />
            <MarketStat value="37.92%" label="Projected CAGR, 2024–2029" />
            <MarketStat value="34" label="Granted US patents anchoring the platform" />
          </div>
          <p className="mt-4 text-xs text-muted-foreground/70">
            Market figures: ARtillery Intelligence, <em>Headworn AR Global Revenue Forecast: 2024–2029</em> (June 2025).
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

function MarketStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 text-left">
      <div className="font-display text-2xl font-semibold text-primary text-glow md:text-3xl">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}