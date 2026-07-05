import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import heroHome from "@/assets/hero-home.jpg.asset.json";
import pillarLiving from "@/assets/pillar-living.jpg.asset.json";
import pillarIdentity from "@/assets/pillar-identity.jpg.asset.json";
import pillarEntertainment from "@/assets/pillar-entertainment.jpg.asset.json";
import pillarMessaging from "@/assets/pillar-messaging.jpg.asset.json";
import solution from "@/assets/solution.jpg.asset.json";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const PILLARS = [
  {
    tag: "01",
    title: "Living Entities",
    desc: "Humans and pets become natural, moving anchors for AR content — expressed through stock or customizable skins that respond to shared movement in real time.",
    image: pillarLiving.url,
  },
  {
    tag: "02",
    title: "Virtual Identification",
    desc: "Consent-based, real-time overlays of profiles, links, and calendar data — pivoting online audiences into meaningful interactions in real places.",
    image: pillarIdentity.url,
  },
  {
    tag: "03",
    title: "AR Entertainment",
    desc: "Friends experience concerts, games, and live events together, anywhere. Multiple users view, hear, and interact with the same anchored content simultaneously.",
    image: pillarEntertainment.url,
  },
  {
    tag: "04",
    title: "Persistent Messaging",
    desc: "Record embodied messages and performances that remain anchored to physical spaces — discovered, replied to, and built upon by friends and communities.",
    image: pillarMessaging.url,
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={heroHome.url} alt="Two people in a plaza with holographic AR interfaces at dusk" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.14 0.02 240 / 0.55) 0%, oklch(0.14 0.02 240 / 0.6) 40%, oklch(0.14 0.02 240) 100%)" }} />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto flex min-h-[96vh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            <Sparkles size={12} /> Recognition · Authorization · Display
          </div>
          <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Shared AR, anchored to <span className="text-primary text-glow">the real world.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            AR2 licenses the core primitives — Recognition, Authorization, and Display — that let developers and platforms build multi-user AR anchored to real people, places, and pets. Backed by 34 granted US patents.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]">
              Book a licensing conversation <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/technology" className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-6 py-3 text-sm font-medium backdrop-blur hover:border-primary/40 hover:text-primary">
              How it works
            </Link>
          </div>
          {/* Trust bar */}
          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-border/40 pt-6 sm:grid-cols-4">
            {[
              { k: "34", v: "Granted US Patents" },
              { k: "5", v: "Patent Families" },
              { k: "USC", v: "Faculty Advisors" },
              { k: "2018", v: "First Patent Granted" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-semibold text-primary text-glow md:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Intro statement */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">The AR2 Project</p>
        <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          In a time of increasing digital isolation, AR should not pull us deeper into screens — it should help us engage more fully with the people and places right in front of us.
        </h2>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Four Pillars</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Spatially anchored tools for shared experience.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Dynamic anchors that enhance collaboration, personalization, and meaningful human connections across every physical space.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {PILLARS.map((p) => (
            <article key={p.tag} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-primary/40 bg-background/60 px-2.5 py-0.5 font-mono text-xs text-primary backdrop-blur">
                  {p.tag}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className="relative isolate overflow-hidden">
        <img src={solution.url} alt="People gathered outdoors watching a shared point of cyan light" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.14 0.02 240) 0%, oklch(0.14 0.02 240 / 0.6) 50%, oklch(0.14 0.02 240) 100%)" }} />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">The Shared Layer</p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            One anchor. Many viewers. <span className="text-primary text-glow">The same wonder.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
            Real humans in real spaces, seeing the same anchored content simultaneously — powering creative performances, targeted experiences, and new markets that reward creators and IP holders.
          </p>
          <Link to="/use-cases" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]">
            See use cases <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Principles</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          An AR ecosystem aligned with what's good for real humans.
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Brings people together in person",
            "Empowers developers and fairly rewards creators",
            "Protects content creators and IP holders",
            "Maximizes openness, with strong parental tools",
          ].map((p, i) => (
            <div key={p} className="border-t border-primary/40 pt-6">
              <div className="font-mono text-xs text-primary">0{i + 1}</div>
              <p className="mt-3 font-display text-lg leading-snug">{p}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
