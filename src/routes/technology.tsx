import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import heroTech from "@/assets/hero-tech.jpg.asset.json";
import { Eye, Shield, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — AR² RAD | AR2 Project" },
      { name: "description", content: "Recognition + Authorization + Display: the AR² RAD concept powering personal IDs, digital skins, multi-user performances, and immersive monetization." },
      { property: "og:title", content: "Technology — AR² RAD" },
      { property: "og:description", content: "Recognition, Authorization, Display." },
      { name: "twitter:title", content: "Technology — AR² RAD" },
      { name: "twitter:description", content: "Recognition, Authorization, Display." },
    ],
  }),
  component: TechPage,
});

const RAD = [
  {
    icon: Eye, letter: "R", title: "Recognition",
    desc: "Identify people, pets, objects, and places as spatial anchors — the substrate for every anchored experience.",
    families: ["Living Entity as Marker", "Smart Sign Post", "Constructed Objects"],
  },
  {
    icon: Shield, letter: "A", title: "Authorization",
    desc: "Consent-based permissions govern what content overlays whom, protecting users, creators, and IP holders.",
    families: ["Personalized Rendering", "AR Messengering"],
  },
  {
    icon: Sparkles, letter: "D", title: "Display",
    desc: "Render shared, synchronized AR content across multiple viewers in real time — the same anchor, many devices.",
    families: ["Personalized Rendering", "AR Messengering"],
  },
];

function TechPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Core Technology"
        title={<>AR² <span className="text-primary text-glow">RAD.</span></>}
        subtitle="Recognition + Authorization + Display — the three primitives that turn any real-world location or living entity into a shared AR canvas."
        image={heroTech.url}
        imageAlt="Minimalist architectural interior with glowing cyan anchor markers"
      />

      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-6 md:grid-cols-3">
          {RAD.map(({ icon: Icon, letter, title, desc, families }) => (
            <div key={letter} className="relative rounded-2xl border border-border/60 bg-card p-8">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-6xl font-semibold text-primary text-glow">{letter}</span>
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <div className="mt-5 border-t border-border/60 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/80">Patent families</p>
                <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                  {families.map((f) => <li key={f}>· {f}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">What we build</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Core AR technologies.</h2>
            <p className="mt-6 text-muted-foreground">
              Four capability areas, all expressed through the RAD primitives and grounded in 34 granted US patents.
            </p>
          </div>
          <ul className="space-y-6">
            {[
              ["Personal IDs & virtual identities", "Consent-based digital selves that overlay onto real people in real time."],
              ["Stock & customizable digital skins", "For humans and pets — expressive, animated overlays that respond to shared movement."],
              ["Performances & dynamic multi-user interactions", "Multiple viewers see and interact with the same anchored content simultaneously."],
              ["Advertising & immersive monetization", "New revenue streams that reward creators and IP holders while preserving user choice."],
            ].map(([title, desc]) => (
              <li key={title} className="border-t border-border/60 pt-6">
                <h4 className="font-display text-lg font-semibold">{title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Next</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            The <span className="text-primary text-glow">why</span> and the <span className="text-primary text-glow">who</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            RAD is the how. See the vision it enables, or the concrete use cases already mapped out.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/vision" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]">
              Read the vision <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/use-cases" className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-6 py-3 text-sm font-medium backdrop-blur hover:border-primary/40 hover:text-primary">
              See use cases
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}