import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import heroHome from "@/assets/hero-home.jpg.asset.json";
import pillarLiving from "@/assets/pillar-living.jpg.asset.json";
import pillarIdentity from "@/assets/pillar-identity.jpg.asset.json";
import pillarEntertainment from "@/assets/pillar-entertainment.jpg.asset.json";
import pillarMessaging from "@/assets/pillar-messaging.jpg.asset.json";
import solution from "@/assets/solution.jpg.asset.json";
import visionFamily from "@/assets/vision-family.jpg.asset.json";
import visionMma from "@/assets/vision-mma.jpg.asset.json";
import visionConcert from "@/assets/vision-concert.jpg.asset.json";
import teamNick from "@/assets/team-nick.png.asset.json";
import teamPerry from "@/assets/team-perry.png.asset.json";
import teamDmitri from "@/assets/team-dmitri.png.asset.json";
import teamAnthony from "@/assets/team-anthony.png.asset.json";
import teamCynthia from "@/assets/team-cynthia.png.asset.json";
import teamMark from "@/assets/team-mark.png.asset.json";
import teamBen from "@/assets/team-ben.png.asset.json";
import teamIan from "@/assets/team-ian.png.asset.json";
import { ContactForm } from "@/components/contact-form";
import { Sparkles, Eye, ShieldCheck, Layers } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AR2 — Shared AR, anchored to the real world" },
      { name: "description", content: "AR2 licenses the core primitives — Recognition, Authorization, and Display — that let developers build multi-user AR anchored to real people, places, and pets. 34 granted US patents." },
      { property: "og:title", content: "AR2 — Shared AR, anchored to the real world" },
      { property: "og:description", content: "Recognition · Authorization · Display. The spatial computing layer for multi-user augmented reality." },
    ],
  }),
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

const PRIMITIVES = [
  { n: "01", title: "Recognition", icon: Eye, desc: "Computer vision and AI detect people, pets, and objects, then store persistent spatial anchors that hold their position across sessions." },
  { n: "02", title: "Authorization", icon: ShieldCheck, desc: "Consent, permissions, and subscriptions govern every overlay. A secure identity layer keeps your digital self consistent across devices." },
  { n: "03", title: "Display", icon: Layers, desc: "A rendering engine tuned for headsets and phones aligns digital content to the physical world with spatial mapping and occlusion." },
];

const USE_CASES = [
  { tag: "Identity", title: "Virtual ID", desc: "A persistent digital identity anchored to you or your pet. Leave a virtual calling card that follows you into any shared session and unlocks personalized, permissioned content." },
  { tag: "Expression", title: "Virtual skins: people", desc: "Dynamic outfits, avatars, and effects seen through AR glasses — always governed by consent and subscriptions, so you stay in control." },
  { tag: "Expression", title: "Virtual skins: pets", desc: "Dress your pet in holographic outfits. Recognition keeps tracking the animal so their virtual persona stays anchored and responsive." },
  { tag: "Play", title: "Group games & sports", desc: "Tabletop tournaments and sports sims where everyone sees the same board anchored to the real world — a miniature stadium on your coffee table." },
  { tag: "Live", title: "Live performances", desc: "Artists appear as holographic performers, synchronized for every viewer, turning any surface into a stage." },
  { tag: "Learn", title: "Shared storytelling", desc: "Collaborative stories and lessons where holographic characters and scenery appear around you — built for education, training, and play." },
];

const TEAM_LEAD = [
  { name: "Nick Hariton", role: "Chief Executive Officer", photo: teamNick.url },
  { name: "Perry Lerner", role: "Chair", photo: teamPerry.url },
  { name: "Prof. Dmitri Williams", role: "Chief Science Officer", photo: teamDmitri.url },
  { name: "Prof. Anthony Borquez", role: "Development Partner", photo: teamAnthony.url },
];
const TEAM_ADVISORS = [
  { name: "Cynthia Veneciano, Ph.D.", role: "Strategic Advisor", photo: teamCynthia.url },
  { name: "Mark Guilarte", role: "Strategic Advisor", photo: teamMark.url },
  { name: "Prof. Ben Lee", role: "Strategic Advisor", photo: teamBen.url },
  { name: "Ian Schick, Ph.D., Esq.", role: "Strategic Advisor", photo: teamIan.url },
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
            Anchor the digital world to <span className="text-primary text-glow">the real one.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            AR2 licenses the core primitives — Recognition, Authorization, and Display — that let developers and platforms build multi-user AR anchored to real people, places, and pets. Backed by 34 granted US patents.
          </p>
          {/* Trust bar */}
          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-border/40 pt-6 sm:grid-cols-4">
            {[
              { k: "34", v: "Granted US Patents" },
              { k: "5", v: "Patent Families" },
              { k: "3", v: "Primitives (R·A·D)" },
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

      {/* Vision */}
      <section id="vision" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-32 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">AR2 — Vision</p>
        <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Technology that puts people <span className="text-primary text-glow">in the same moment.</span>
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          In a time of increasing digital isolation, AR should not pull us deeper into screens — it should help us engage more fully with the people and places right in front of us. AR2 is the spatial computing layer for multi-user augmented reality: shared sessions, anchored identity, and content that lives in the real world.
        </p>
        <div className="mt-16 grid gap-6 text-left md:grid-cols-3">
          {[
            { t: "Generational connection", d: "Anchored experiences that bring families and communities into the same shared moment, in the same physical place.", img: visionFamily.url, alt: "Grandparents sharing a moment with a holographic granddaughter singing" },
            { t: "Live performances", d: "Concerts, sports, and events where every viewer sees the same synchronized performer in their space.", img: visionMma.url, alt: "Friends wearing AR glasses watching a shared holographic MMA match on a coffee table" },
            { t: "Responsive entertainment", d: "Games and stories that react to real people, pets, and rooms — governed by consent at every layer.", img: visionConcert.url, alt: "Group watching a holographic rock band perform on their coffee table with AR flames" },
          ].map((v) => (
            <div key={v.t} className="overflow-hidden rounded-2xl border border-border/60 bg-card">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={v.img} alt={v.alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology / SDK */}
      <section id="technology" className="relative scroll-mt-24 border-y border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">The AR2 SDK</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Three primitives. Endless spatial experiences.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every AR2 experience runs on the same foundation. Recognition understands the scene, Authorization governs who and what may appear, and Display renders it precisely into the real world.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PRIMITIVES.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border/60 bg-background/40 p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <p.icon size={20} />
                  </div>
                  <span className="font-mono text-xs text-primary">{p.n}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-sm text-muted-foreground">
            Built for multi-user AR anchored to real people, places, and pets — one integration, every supported runtime.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">The AR2 Project</p>
        <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          Spatially anchored tools for shared experience.
        </h2>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
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

      {/* Use Cases */}
      <section id="use-cases" className="scroll-mt-24 border-y border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">AR2 — Use Cases</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            From digital identity to living, shared worlds.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The same patent-protected primitives unlock a wide range of experiences — each one multi-user and anchored to reality by default.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((u) => (
              <article key={u.title} className="group rounded-2xl border border-border/60 bg-background/60 p-7 transition-all hover:border-primary/50">
                <div className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-primary">
                  {u.tag}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.desc}</p>
              </article>
            ))}
          </div>
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
        </div>
      </section>

      {/* Platform */}
      <section id="platform" className="scroll-mt-24 border-y border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">AR2 — Platform</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Open, interoperable, and built for many users.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            AR2 orchestrates identity, permissions, spatial anchors, and real-time sync — so you can build on top of the SDK with the tools you already use.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { t: "Open ecosystem", d: "Works with the AR tools you know. The SDK supports Lens Studio, ARKit + RealityKit, Meta Spark, Meta XR SDK, and ARCore, so creators keep their stack." },
              { t: "IP & rights", d: "Robust rights management. Permissions, subscriptions, and parental controls keep your content safe and accessible only to approved users." },
              { t: "Multi-user by design", d: "Social AR from the ground up. Identity, session management, and state sync handle the heavy lifting so you focus on the experience." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border/60 bg-background/40 p-8">
                <h3 className="font-display text-xl font-semibold tracking-tight">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-border/60 bg-background/40 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Works with your stack</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-foreground/85">
              {["Lens Studio", "ARKit + RealityKit", "Meta Spark", "Meta XR SDK", "ARCore"].map((s) => (
                <span key={s} className="rounded-full border border-border/60 bg-card px-3 py-1.5 font-mono text-xs">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-24 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">AR2 — Team</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Meet the team.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A team of inventors, scientists, lawyers, university professors, entrepreneurs, and media specialists behind an augmented-reality platform built on the RAD method and 34 granted U.S. patents.
          </p>

          <p className="mt-14 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Leadership</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_LEAD.map((p) => (
              <div key={p.name} className="rounded-xl border border-border/60 bg-background/60 p-5 text-center">
                <img src={p.photo} alt={p.name} loading="lazy" className="mx-auto aspect-square w-28 rounded-full border border-primary/30 object-cover" />
                <div className="mt-4 font-display text-lg font-semibold tracking-tight">{p.name}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{p.role}</div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Strategic advisors</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_ADVISORS.map((p) => (
              <div key={p.name} className="rounded-xl border border-border/60 bg-background/60 p-5 text-center">
                <img src={p.photo} alt={p.name} loading="lazy" className="mx-auto aspect-square w-24 rounded-full border border-primary/30 object-cover" />
                <div className="mt-4 font-display text-base font-semibold tracking-tight">{p.name}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative isolate scroll-mt-24 overflow-hidden border-t border-border/40">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Get in touch
            </div>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Let's build the spatial layer <span className="text-primary text-glow">together.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              For licensing, partnerships, investment, developer collaboration, or press — send a note and we'll route it to the right person on the team.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Licensing", "Partnerships", "Investment", "Developers", "Enterprise", "Media"].map((t) => (
                <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{t}</span>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}
