import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import heroNews from "@/assets/hero-news.jpg.asset.json";
import n1 from "@/assets/news-1.jpg.asset.json";
import n2 from "@/assets/news-2.jpg.asset.json";
import n3 from "@/assets/news-3.jpg.asset.json";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — AR2 Project" },
      { name: "description", content: "Announcements, industry perspectives, and updates from the AR2 Project." },
      { property: "og:title", content: "News — AR2 Project" },
      { property: "og:description", content: "AR2 Project announcements and industry perspectives." },
    ],
  }),
  component: NewsPage,
});

const ARTICLES = [
  { date: "July 2026", tag: "Technology", title: "The AR² RAD lattice: how Recognition, Authorization, and Display fit together", excerpt: "A technical look at how three primitives combine into a shared spatial substrate — and why the anchor is the atomic unit of collaborative AR.", image: n1.url },
  { date: "June 2026", tag: "Platform", title: "Building the creator ecosystem for spatially anchored AR", excerpt: "Fair rewards, IP protection, and open interoperability — the values shaping our developer platform and its rollout.", image: n2.url },
  { date: "May 2026", tag: "Industry", title: "From mobile lenses to shared headworn AR: a conversation on the 2026 shift", excerpt: "Notes from a recent industry stage on de-risking headworn launches by strengthening the shared-experience layer first.", image: n3.url },
];

function NewsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="News"
        title={<>Signals from a <span className="text-primary text-glow">shared network.</span></>}
        image={heroNews.url}
        imageAlt="Abstract aerial view of a city at night with a cyan node network overlay"
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="space-y-10">
          {ARTICLES.map((a) => (
            <article key={a.title} className="group grid gap-8 border-b border-border/40 pb-10 md:grid-cols-[1.2fr_2fr] md:items-center">
              <div className="aspect-[16/10] overflow-hidden rounded-xl">
                <img src={a.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-primary">
                  <span>{a.tag}</span>
                  <span className="h-px w-8 bg-primary/40" />
                  <span className="text-muted-foreground">{a.date}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl">{a.title}</h3>
                <p className="mt-3 max-w-2xl text-muted-foreground">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}