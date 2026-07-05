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
  { date: "Coming soon", tag: "Technology", title: "The AR² RAD framework: Recognition, Authorization, Display", excerpt: "A technical primer on the three primitives at the core of AR2's patent portfolio — how they combine into a shared spatial substrate for multi-user AR.", image: n1.url, alt: "Abstract network of cyan spatial anchors over a city map" },
  { date: "Coming soon", tag: "Portfolio", title: "Inside the 34-patent AR² portfolio", excerpt: "A walkthrough of the five patent families — Personalized Rendering, Constructed Objects, Smart Sign Post, Living Entity as Marker, and AR Messengering — and the claims that underpin each.", image: n2.url, alt: "USPTO patent diagram overlay on a modern interior" },
  { date: "Coming soon", tag: "Industry", title: "From mobile lenses to shared headworn AR", excerpt: "Why the shift from single-user mobile AR to shared headworn AR needs a common identification and display substrate — and how the RAD primitives fit.", image: n3.url, alt: "Person with AR glasses looking at a shared holographic scene" },
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
        <p className="mb-10 max-w-2xl text-sm text-muted-foreground">
          Long-form pieces on the AR² RAD framework, the underlying patent families, and the industry shift to shared headworn AR. Working drafts — sign up via the contact page for release notifications.
        </p>
        <div className="space-y-10">
          {ARTICLES.map((a) => (
            <article key={a.title} className="group grid gap-8 border-b border-border/40 pb-10 md:grid-cols-[1.2fr_2fr] md:items-center">
              <div className="aspect-[16/10] overflow-hidden rounded-xl">
                <img src={a.image} alt={a.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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