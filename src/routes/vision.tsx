import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ArrowRight, Users, Handshake, Unlock, ShieldCheck, Eye, Shield, Sparkles } from "lucide-react";
import heroVision from "@/assets/hero-vision.jpg.asset.json";
import sceneFamily from "@/assets/scene-family.jpg.asset.json";
import sceneStudents from "@/assets/scene-students.jpg.asset.json";
import sceneConcert from "@/assets/scene-concert.jpg.asset.json";
import sceneSignpost from "@/assets/scene-signpost.jpg.asset.json";
import solution from "@/assets/solution.jpg.asset.json";

const PRINCIPLES = [
  { n: "01", icon: Users, title: "In-person first", desc: "Brings people together in physical spaces, not further into screens." },
  { n: "02", icon: Handshake, title: "Fair to creators", desc: "Empowers developers and fairly rewards content creators and IP holders." },
  { n: "03", icon: Unlock, title: "Open by default", desc: "Maximizes platform openness while providing strong parental and safety tools." },
  { n: "04", icon: ShieldCheck, title: "Consent-based", desc: "Real-time consent for identity, presence, and content that renders near you." },
];

const SCENES = [
  {
    tag: "01",
    id: "living-entities",
    image: sceneFamily,
    title: "Living Entities as Dynamic Anchors",
    rad: "Recognition · Authorization · Display",
    alt: "Family with a glowing guardian creature overlay at dusk",
    desc: "Imagine a family adventure or group activity where an original guardian creature dynamically overlays one participant, intelligently responding to shared movements and actions. Personal expression becomes a shared, engaging experience in the physical world.",
  },
  {
    tag: "02",
    id: "virtual-id",
    image: sceneStudents,
    title: "Virtual Identification & Real-Time Connection",
    rad: "Consent-based identity overlays",
    alt: "Students learning with a holographic 3D model in class",
    desc: "Consent-based overlays of profiles, links, and calendar data directly into the real world. Established social platforms can pivot their users from the empty calories of online spaces into meaningful interactions in real places.",
  },
  {
    tag: "03",
    id: "ar-entertainment",
    image: sceneConcert,
    title: "AR Entertainment",
    rad: "Multi-user synchronized display",
    alt: "Two friends watching a shared holographic concert",
    desc: "Friends experience concerts, games, and live events in real time, together, anywhere. Multiple users view, hear, and interact with the same anchored content simultaneously.",
  },
  {
    tag: "04",
    id: "persistent-messaging",
    image: sceneSignpost,
    title: "Persistent Messaging",
    rad: "Location-anchored recognition",
    alt: "A trail signpost with an anchored holographic message",
    desc: "Embodied messages and performances remain anchored in the physical world for later access — sports highlights on a smart signpost, TED-style talks, live music sessions, adventures among friends, or training content — discovered and enjoyed at specific locations.",
  },
];

const STATS = [
  { k: "34", v: "Granted US Patents" },
  { k: "5", v: "Patent Families" },
  { k: "2018", v: "First Patent Granted" },
  { k: "USC", v: "Faculty Advisors" },
];

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision — AR2 Project" },
      { name: "description", content: "Our vision centers on shared experiences and genuine human connection made possible by AR glasses — engaging more fully with the people and places right in front of us." },
      { property: "og:title", content: "Vision — AR2 Project" },
      { property: "og:description", content: "Shared experiences and genuine human connection through AR." },
    ],
  }),
  component: VisionPage,
});

function VisionPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate flex min-h-[82vh] items-end overflow-hidden">
        <img
          src={heroVision.url}
          alt="Empty modern plaza at dawn with a faint cyan grid overlay"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Stronger dark overlay — hero image is bright, needs more contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.14 0.02 240 / 0.72) 0%, oklch(0.14 0.02 240 / 0.55) 45%, oklch(0.14 0.02 240 / 0.9) 85%, oklch(0.14 0.02 240) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-25" />
        {/* Radial cyan accent */}
        <div
          className="pointer-events-none absolute -left-24 top-1/3 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.82 0.14 210 / 0.35), transparent 70%)" }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_oklch(0.82_0.14_210)]" />
            Our Vision
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            A quiet possibility, <span className="text-primary text-glow">shared out loud.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            AR should not pull us deeper into screens. It should help us engage more fully with the people and places right in front of us.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/technology"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              How it works <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#manifesto"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-5 py-2.5 text-sm font-medium backdrop-blur hover:border-primary/40 hover:text-primary"
            >
              Read the manifesto
            </a>
          </div>

          {/* Stat strip */}
          <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-border/40 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-semibold text-primary text-glow">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="manifesto" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-32 text-lg leading-relaxed text-foreground/85">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Manifesto</p>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Real humans. Real spaces. Real presence.
        </h2>
        <div className="mt-10 space-y-6 text-muted-foreground">
          <p>
            Our vision centers on shared experiences and genuine human connection made possible by AR glasses. In a time of increasing digital isolation, this technology should not pull us deeper into screens, but help us engage more fully with the people and places right in front of us.
          </p>
          <p>
            We approach this through the lens of shared experiences, with a strong emphasis on social connectivity. Central to the vision are dynamic, spatially anchored tools that enhance collaboration, personalization, and meaningful human connections.
          </p>
          <p>
            These applications enable companies and users to create systems and markets for real humans in real spaces — aligning profit motives with what's good for real humans.
          </p>
        </div>
      </section>

      {/* The premise */}
      <section id="premise" className="scroll-mt-24 border-t border-border/40 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">The Premise</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Shared experience over <span className="text-primary text-glow">device isolation.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground">
              <p>
                We approach AR through the lens of shared experiences, with a strong emphasis on social connectivity. Central to the vision are dynamic, spatially anchored tools that enhance collaboration, personalization, and meaningful human connections.
              </p>
              <p>
                For established social media platforms, Virtual Identification lets users pivot from the empty calories of online spaces into meaningful interactions in the real world. AR Entertainment lets friends experience concerts, games, or live events together — anywhere. Persistent Messaging lets embodied performances remain anchored to physical places for later discovery.
              </p>
              <p>
                These applications enable companies and users to create systems and markets for real humans in real spaces.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-widest">
              {[{ Icon: Eye, l: "Recognition" }, { Icon: Shield, l: "Authorization" }, { Icon: Sparkles, l: "Display" }].map(
                ({ Icon, l }) => (
                  <span
                    key={l}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-primary"
                  >
                    <Icon size={12} /> {l}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card">
            <img
              src={solution.url}
              alt="People gathered outdoors watching a shared point of cyan light"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section id="in-practice" className="scroll-mt-24 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">In Practice</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Four ways the vision meets the real world.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Every scene below is powered by the same primitives — Recognition, Authorization, and Display — expressed through Living Entities, Virtual Identification, AR Entertainment, and Persistent Messaging.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {SCENES.map((s) => (
              <article
                key={s.tag}
                id={s.id}
                className="group scroll-mt-24 overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image.url}
                    alt={s.alt}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Stronger bottom-mask to hide any garbled text baked into source images */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-primary/40 bg-background/60 px-2.5 py-0.5 font-mono text-xs text-primary backdrop-blur">
                    {s.tag}
                  </div>
                </div>
                <div className="p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80">{s.rad}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="scroll-mt-24 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Principles</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            An AR ecosystem aligned with what's good for real humans.
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p) => (
              <div key={p.n} className="group relative border-t border-primary/40 pt-6">
                <div
                  className="pointer-events-none absolute inset-x-0 -top-px h-px opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.14 210), transparent)" }}
                />
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
                    <p.icon size={16} />
                  </span>
                  <span className="font-mono text-xs text-primary">{p.n}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="border-t border-border/40">
        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 font-display text-[220px] leading-none text-primary/20 text-glow md:text-[320px]"
          >
            &ldquo;
          </span>
          <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-primary">Founder</p>
          <blockquote className="relative mt-10 font-display text-3xl font-medium italic leading-[1.15] tracking-tight text-foreground md:text-5xl">
            Our vision is to align profit motives with{" "}
            <span className="text-primary text-glow">what's good for real humans.</span>
          </blockquote>
          <figcaption className="relative mt-10 flex items-center justify-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-display text-lg text-primary">
              NH
            </span>
            <cite className="not-italic text-left">
              <div className="text-sm font-semibold">Nicholas T. Hariton</div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Founder · The AR2 Project
              </div>
            </cite>
          </figcaption>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">What's next</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            The vision is built on <span className="text-primary text-glow">infrastructure.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            See how Recognition, Authorization, and Display come together — or where developers, platforms, and enterprises are already deploying it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/technology"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              Explore the technology <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/use-cases"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-6 py-3 text-sm font-medium backdrop-blur hover:border-primary/40 hover:text-primary"
            >
              See use cases
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}