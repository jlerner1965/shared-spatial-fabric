import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import heroTech from "@/assets/hero-tech.jpg.asset.json";
import { Eye, Shield, Sparkles, Users, UserCircle2, Radio, MessageSquare, Heart, Handshake, Lock, Unlock } from "lucide-react";
import sceneFamily from "@/assets/scene-family.jpg.asset.json";
import sceneStudents from "@/assets/scene-students.jpg.asset.json";
import sceneConcert from "@/assets/scene-concert.jpg.asset.json";
import sceneSignpost from "@/assets/scene-signpost.jpg.asset.json";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — AR² RAD | AR2 Project" },
      { name: "description", content: "Recognition + Authorization + Display: the AR² RAD concept powering personal IDs, digital skins, multi-user performances, and immersive monetization." },
      { property: "og:title", content: "Technology — AR² RAD" },
      { property: "og:description", content: "Recognition, Authorization, Display." },
    ],
  }),
  component: TechPage,
});

const RAD = [
  { icon: Eye, letter: "R", title: "Recognition", desc: "Identify people, pets, objects, and places as spatial anchors — the substrate for every anchored experience." },
  { icon: Shield, letter: "A", title: "Authorization", desc: "Consent-based permissions govern what content overlays whom, protecting users, creators, and IP holders." },
  { icon: Sparkles, letter: "D", title: "Display", desc: "Render shared, synchronized AR content across multiple viewers in real time — the same anchor, many devices." },
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
          {RAD.map(({ icon: Icon, letter, title, desc }) => (
            <div key={letter} className="relative rounded-2xl border border-border/60 bg-card p-8">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-6xl font-semibold text-primary text-glow">{letter}</span>
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">What we build</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Core AR technologies.</h2>
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

      <section className="border-t border-border/60 bg-gradient-to-b from-transparent to-primary/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Vision</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Shared experiences. <span className="text-primary text-glow">Genuine connection.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              In a time of increasing digital isolation, AR glasses should not pull us deeper into screens — they should help us engage more fully with the people and places right in front of us. We approach this through the lens of shared experiences, with a strong emphasis on social connectivity: dynamic, spatially anchored tools that enhance collaboration, personalization, and meaningful human connection.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card p-8">
                <div className="overflow-hidden rounded-xl border border-border/60 -m-2 mb-6">
                  <img
                    src={(PILLAR_IMAGES as Record<string, string>)[title]}
                    alt={title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <Icon size={22} className="text-primary" />
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">The Ecosystem</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Profit motives aligned with what's good for real humans.
              </h2>
              <p className="mt-6 text-muted-foreground">
                These applications enable companies and users to create systems and markets for real humans in real spaces — evolving digital layers over the physical world, discovered and shared in person.
              </p>
            </div>
            <ul className="space-y-4">
              {PRINCIPLES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5">
                  <Icon size={20} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const PILLARS = [
  {
    icon: Users,
    title: "Living Entities as Dynamic Anchors",
    desc: "Humans and pets act as natural, moving anchors for AR content — expressed through stock or customizable skins. Imagine a family adventure where a Wookiee-inspired guardian dynamically overlays one participant, responding to shared movement. Creative performances, targeted advertising, and new revenue streams — turning personal expression into shared experiences in the physical world.",
  },
  {
    icon: UserCircle2,
    title: "Virtual Identification & Real-Time Connection",
    desc: "Consent-based overlays of profiles, links, and calendar data directly into the real world. For established social platforms, this pivots users away from the empty calories of online spaces into meaningful, in-person interactions.",
  },
  {
    icon: Radio,
    title: "AR Entertainment",
    desc: "Friends experience concerts, games, and live events in real time — together, anywhere. Multiple users view, hear, and interact with the same anchored content simultaneously.",
  },
  {
    icon: MessageSquare,
    title: "Persistent Messaging",
    desc: "Record embodied messages or performances in custom or fantasy forms that remain anchored in the physical world for later access. Sports highlights on a smart signpost, TED-style talks, live music sessions, adventures among friends — discovered, replied to, and built upon by communities as evolving digital layers over physical spaces.",
  },
];

const PILLAR_IMAGES: Record<string, string> = {
  "Living Entities as Dynamic Anchors": sceneFamily.url,
  "Virtual Identification & Real-Time Connection": sceneStudents.url,
  "AR Entertainment": sceneConcert.url,
  "Persistent Messaging": sceneSignpost.url,
};

const PRINCIPLES = [
  { icon: Heart, text: "Brings people together in person." },
  { icon: Handshake, text: "Empowers developers and fairly rewards creators." },
  { icon: Lock, text: "Protects content creators and IP holders." },
  { icon: Unlock, text: "Maximizes openness — with strong parental tools." },
];