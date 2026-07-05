import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import heroUseCases from "@/assets/hero-usecases.jpg.asset.json";
import augmentedId from "@/assets/deck-augmented-id.jpg.asset.json";
import liveSports from "@/assets/deck-live-sports.jpg.asset.json";
import concerts from "@/assets/deck-concerts.jpg.asset.json";
import skinsPets from "@/assets/deck-virtual-skins-pets.jpg.asset.json";
import skinsPeople from "@/assets/deck-virtual-skins-people.jpg.asset.json";
import education from "@/assets/case-education.jpg.asset.json";
import retail from "@/assets/case-retail.jpg.asset.json";
import enterprise from "@/assets/case-enterprise.jpg.asset.json";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases — AR² | The Next Generation of Augmented Reality" },
      { name: "description", content: "Augmented ID, live sports, concerts, virtual skins for pets and people, education, retail, enterprise — the shared AR use cases powered by AR²." },
      { property: "og:title", content: "Use Cases — AR² | Next Generation Augmented Reality" },
      { property: "og:description", content: "The shared, anchored AR use cases from the AR² deck — brought to life." },
    ],
  }),
  component: UseCases,
});

const CASES = [
  {
    title: "Augmented ID",
    tag: "First Use Case",
    desc: "Takes the ID badge of today and brings it into the AR future — consent-based profiles, links, and calendar data overlaid on real people in real spaces.",
    image: augmentedId.url,
  },
  {
    title: "Live Sports",
    tag: "Augmented Performances",
    desc: "3D live entertainment brought to any table, bar, or living room — multiple viewers see and interact with the same anchored match at the same time.",
    image: liveSports.url,
  },
  {
    title: "Concerts",
    tag: "Augmented Performances",
    desc: "Holographic performances anchored to a table between friends — synchronized across every headset in the room.",
    image: concerts.url,
  },
  {
    title: "Virtual Skins — Pets",
    tag: "Long-Term Vision",
    desc: "Custom or stock digital skins overlay onto real pets — a robotic winged companion by day, a mythical creature by night.",
    image: skinsPets.url,
  },
  {
    title: "Virtual Skins — People",
    tag: "Long-Term Vision",
    desc: "Expressive digital identities and fantasy overlays on real humans — personal expression as a shared, in-person experience.",
    image: skinsPeople.url,
  },
  {
    title: "Education",
    tag: "Emerging",
    desc: "3D anchored models replace flat diagrams. Students explore molecules, planets, and history as shared objects in the room.",
    image: education.url,
  },
  {
    title: "Retail",
    tag: "Emerging",
    desc: "Product specs, reviews, and provenance appear beside physical goods on the shelf — no app open, no phone raised.",
    image: retail.url,
  },
  {
    title: "Enterprise",
    tag: "Emerging",
    desc: "Shared holographic data, 3D models, and collaborative annotations grounded on the conference table — remote and in-room equal.",
    image: enterprise.url,
  },
];

function UseCases() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Use Cases"
        title={<>The next generation, <span className="text-primary text-glow">applied.</span></>}
        subtitle="Augmented ID, live sports, concerts, and virtual skins — the shared AR use cases from the AR² deck, plus the emerging applications that follow."
        image={heroUseCases.url}
        imageAlt="Grand museum hall with cyan holographic information panels beside artworks"
      />

      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <article key={c.title} className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary">{c.tag}</p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}