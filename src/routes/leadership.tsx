import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — AR2" },
      {
        name: "description",
        content:
          "The team, advisors, and development partners shaping AR2 — the infrastructure for collaborative spatial computing.",
      },
      { property: "og:title", content: "Leadership — AR2" },
      { property: "og:description", content: "The people building the shared spatial layer." },
    ],
  }),
  component: Lead,
});

const team = [
  { name: "Founder & CEO", role: "Vision, Strategy", bio: "Two decades building spatial and identity systems for consumer platforms and enterprise infrastructure." },
  { name: "Chief Architect", role: "Platform, R.A.D.", bio: "Former distributed-systems lead. Designed the recognition and authorization layers powering AR2's core." },
  { name: "Head of Research", role: "Recognition, Vision", bio: "Computer-vision researcher focused on entity persistence and multi-modal recognition at world scale." },
  { name: "Head of Developer Platform", role: "SDKs, APIs", bio: "Built developer platforms at global-scale companies. Obsessed with a small, elegant API surface." },
];

const timeline = [
  ["2016", "Foundational R.A.D. patents filed"],
  ["2018", "First cross-device shared anchor demonstrated"],
  ["2020", "Platform architecture published; 15 US patents granted"],
  ["2023", "Enterprise pilots across events, retail, and industrial"],
  ["2026", "Developer preview of the shared spatial layer"],
] as const;

function Lead() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Leadership"
        title={<>A team building for the <span className="text-gradient">long horizon</span>.</>}
        subtitle="AR2 was founded on the belief that spatial computing needs infrastructure before it needs apps. Our team, advisors, and development partners share that conviction."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {team.map((p) => (
            <div key={p.name} className="glass rounded-3xl p-8">
              <div className="flex items-start gap-6">
                <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--azure)] via-[var(--aurora)] to-[var(--emerald-soft)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(1_0_0/0.4),transparent_60%)]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--cyan)]">
                    {p.role}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{p.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
          Timeline
        </p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">A decade of quiet groundwork.</h2>
        <ol className="mt-12 border-l border-white/10 pl-8">
          {timeline.map(([y, e]) => (
            <li key={y} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[38px] mt-1 flex size-4 items-center justify-center rounded-full bg-background">
                <span className="size-2 rounded-full bg-[var(--cyan)] shadow-[0_0_20px_var(--cyan)]" />
              </span>
              <p className="font-mono text-xs text-[var(--cyan)]">{y}</p>
              <p className="mt-1 text-lg">{e}</p>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}