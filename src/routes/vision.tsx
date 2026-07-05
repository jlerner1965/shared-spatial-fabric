import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Users, Heart, Palette, Code2, Lock, ShieldCheck, Leaf, Baby } from "lucide-react";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision — AR2" },
      {
        name: "description",
        content:
          "Why AR should strengthen — not replace — human relationships. The AR2 philosophy of shared, ethical, collaborative spatial computing.",
      },
      { property: "og:title", content: "Vision — AR2" },
      {
        property: "og:description",
        content: "AR that augments reality instead of replacing it.",
      },
    ],
  }),
  component: Vision,
});

const tenets = [
  { icon: Users, t: "Shared experiences", d: "AR should be something you do with others, not something you disappear into alone." },
  { icon: Heart, t: "Social connection", d: "Technology succeeds when it deepens real-world relationships between real people." },
  { icon: Palette, t: "Collaborative creativity", d: "Anyone can leave art, memory, and meaning anchored to the physical world." },
  { icon: Code2, t: "Developer ecosystem", d: "An open platform where thousands of teams can build compatible experiences." },
  { icon: Lock, t: "Content ownership", d: "Creators and users own their identity, their content, and who can see it." },
  { icon: ShieldCheck, t: "Privacy by design", d: "Recognition and identity are opt-in, permissioned, and auditable at every layer." },
  { icon: Baby, t: "Parental controls", d: "Families can shape what children see, share, and encounter in shared space." },
  { icon: Leaf, t: "Ethical AR", d: "We design for attention, wellbeing, and long-term trust — never engagement at any cost." },
];

function Vision() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Vision"
        title={
          <>
            Augment reality.
            <br />
            Don't <span className="text-gradient">replace</span> it.
          </>
        }
        subtitle="The most valuable use of augmented reality is not another screen to disappear into. It is a shared layer that helps people engage more deeply with each other and the world around them."
      />

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            For a decade, augmented reality has been treated as a private overlay — an app that
            one person opens, alone, on one device. Each new product rebuilds the same primitives:
            anchoring, identity, permissions, rendering, collaboration. Nothing carries over.
            Nothing is shared.
          </p>
          <p>
            AR2 was founded on a different premise. Spatial computing only reaches its potential
            when it is <em>social</em>: when the same hologram sits on the same table for
            everyone in the room, when a message left in a park is still there tomorrow, when a
            surgeon and a technician half a world apart share the same view of the same machine.
          </p>
          <p>
            This requires infrastructure, not another app. It requires recognition, authorization,
            and display as first-class primitives, provided consistently across devices and
            operating systems. That is what AR2 is building.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
          Guiding Principles
        </p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Eight commitments.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tenets.map((t) => (
            <div key={t.t} className="glass rounded-2xl p-6">
              <t.icon className="size-6 text-[var(--cyan)]" />
              <h3 className="mt-4 font-display text-xl">{t.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}