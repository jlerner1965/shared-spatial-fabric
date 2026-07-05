import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — AR2" },
      {
        name: "description",
        content:
          "Announcements, research, developer updates, and industry perspectives from the AR2 team.",
      },
      { property: "og:title", content: "News — AR2" },
      { property: "og:description", content: "The latest from AR2." },
    ],
  }),
  component: News,
});

const posts = [
  { cat: "Vision", date: "2026-06-18", title: "Why augmented reality should be shared by default", excerpt: "A note from our founder on the philosophical shift from private overlays to a common spatial layer." },
  { cat: "Technology", date: "2026-05-30", title: "Introducing living-entity anchors", excerpt: "Anchors that follow the people, pets, and objects they represent — persistent across devices and sessions." },
  { cat: "Developer Updates", date: "2026-05-14", title: "The AR2 SDK, redesigned", excerpt: "A smaller, sharper surface: anchors, entities, permissions, events. Everything else composes." },
  { cat: "Industry", date: "2026-04-02", title: "Standards for permissioned recognition", excerpt: "Our proposal for a common permission model across AR runtimes, submitted to the working group." },
  { cat: "Partnerships", date: "2026-03-11", title: "AR2 x Global Sports Alliance", excerpt: "Shared-view broadcast overlays are coming to live venues in 2027." },
  { cat: "Research", date: "2026-02-08", title: "Sub-100ms world-state replication", excerpt: "Benchmarks from our multi-region collaboration testbed." },
];

function News() {
  return (
    <PageShell>
      <PageHero
        eyebrow="News"
        title={<>Signals from the <span className="text-gradient">shared layer</span>.</>}
        subtitle="Announcements, research briefs, and developer updates."
      />
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              to="/news"
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20"
            >
              <div
                className="aspect-[16/10] w-full"
                style={{
                  background:
                    "linear-gradient(135deg,var(--azure),var(--aurora) 60%,var(--emerald-soft))",
                }}
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span className="text-[var(--cyan)]">{p.cat}</span>
                  <span>·</span>
                  <time>{p.date}</time>
                </div>
                <h3 className="mt-3 font-display text-2xl leading-snug">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-6 font-mono text-xs uppercase tracking-widest text-[var(--cyan)]">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}