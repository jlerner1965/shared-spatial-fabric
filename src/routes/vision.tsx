import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import heroVision from "@/assets/hero-vision.jpg.asset.json";
import sceneFamily from "@/assets/scene-family.jpg.asset.json";
import sceneStudents from "@/assets/scene-students.jpg.asset.json";
import sceneConcert from "@/assets/scene-concert.jpg.asset.json";
import sceneSignpost from "@/assets/scene-signpost.jpg.asset.json";
import solution from "@/assets/solution.jpg.asset.json";

const PRINCIPLES = [
  {
    n: "01",
    title: "In-person first",
    desc: "Brings people together in physical spaces, not further into screens.",
  },
  {
    n: "02",
    title: "Fair to creators",
    desc: "Empowers developers and fairly rewards content creators and IP holders.",
  },
  {
    n: "03",
    title: "Open by default",
    desc: "Maximizes platform openness while providing strong parental and safety tools.",
  },
  {
    n: "04",
    title: "Consent-based",
    desc: "Real-time consent for identity, presence, and content that renders near you.",
  },
];

const SCENES = [
  {
    tag: "01",
    image: sceneFamily,
    title: "Living Entities as Dynamic Anchors",
    alt: "Family with a glowing guardian creature overlay at dusk",
    desc: "Imagine a family adventure or group activity where a Wookiee-inspired guardian figure dynamically overlays one participant, intelligently responding to shared movements and actions. Personal expression becomes a shared, engaging experience in the physical world.",
  },
  {
    tag: "02",
    image: sceneStudents,
    title: "Virtual Identification & Real-Time Connection",
    alt: "Students learning with a holographic 3D model in class",
    desc: "Consent-based overlays of profiles, links, and calendar data directly into the real world. Established social platforms can pivot their users from the empty calories of online spaces into meaningful interactions in real places.",
  },
  {
    tag: "03",
    image: sceneConcert,
    title: "AR Entertainment",
    alt: "Two friends watching a shared holographic concert",
    desc: "Friends experience concerts, games, and live events in real time, together, anywhere. Multiple users view, hear, and interact with the same anchored content simultaneously.",
  },
  {
    tag: "04",
    image: sceneSignpost,
    title: "Persistent Messaging",
    alt: "A trail signpost with an anchored holographic message",
    desc: "Embodied messages and performances remain anchored in the physical world for later access — sports highlights on a smart signpost, TED-style talks, live music sessions, adventures among friends, or training content — discovered and enjoyed at specific locations.",
  },
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
      <PageHero
        eyebrow="Our Vision"
        title={<>A quiet possibility, <span className="text-primary text-glow">shared out loud.</span></>}
        subtitle="AR should not pull us deeper into screens. It should help us engage more fully with the people and places right in front of us."
        image={heroVision.url}
        imageAlt="Empty modern plaza at dawn with a faint cyan grid overlay"
        tall
      />

      <section className="mx-auto max-w-3xl px-6 py-32 text-lg leading-relaxed text-foreground/85">
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
      <section className="border-t border-border/40">
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

      <section className="border-t border-border/40">
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
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-primary/40 bg-background/60 px-2.5 py-0.5 font-mono text-xs text-primary backdrop-blur">
                    {s.tag}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Principles</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            An AR ecosystem aligned with what's good for real humans.
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p) => (
              <div key={p.n} className="border-t border-primary/40 pt-6">
                <div className="font-mono text-xs text-primary">{p.n}</div>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Founder</p>
          <blockquote className="mt-8 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            <span className="text-primary text-glow">“</span>
            Our vision is to align profit motives with what's good for real humans.
            <span className="text-primary text-glow">”</span>
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            — Nicholas T. Hariton · Founder, The AR2 Project
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}