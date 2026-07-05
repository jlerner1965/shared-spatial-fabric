import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import heroVision from "@/assets/hero-vision.jpg.asset.json";
import sceneFamily from "@/assets/scene-family.jpg.asset.json";
import sceneStudents from "@/assets/scene-students.jpg.asset.json";
import sceneConcert from "@/assets/scene-concert.jpg.asset.json";
import sceneSignpost from "@/assets/scene-signpost.jpg.asset.json";

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

      <section className="border-t border-border/40">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
            <img src={sceneFamily.url} alt="Family with a glowing guardian creature overlay at dusk" loading="lazy" width={1024} height={1024} className="aspect-[16/10] w-full object-cover" />
            <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">In Practice</p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">Living Entities as Dynamic Anchors</h3>
            <p className="mt-4 text-muted-foreground">
              Imagine a family adventure or group activity where a Wookiee-inspired guardian figure dynamically overlays one participant, intelligently responding to shared movements and actions. Personal expression becomes a shared, engaging experience in the physical world.
            </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
            <img src={sceneStudents.url} alt="Students learning with a holographic 3D model in class" loading="lazy" width={1024} height={1024} className="aspect-[16/10] w-full object-cover" />
            <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">In Practice</p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">Virtual Identification & Real-Time Connection</h3>
            <p className="mt-4 text-muted-foreground">
              Consent-based overlays of profiles, links, and calendar data directly into the real world. Established social platforms can pivot their users from the empty calories of online spaces into meaningful interactions in real places.
            </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
            <img src={sceneConcert.url} alt="Two friends watching a shared holographic concert" loading="lazy" width={1024} height={1024} className="aspect-[16/10] w-full object-cover" />
            <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">In Practice</p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">AR Entertainment</h3>
            <p className="mt-4 text-muted-foreground">
              Friends experience concerts, games, and live events in real time, together, anywhere. Multiple users view, hear, and interact with the same anchored content simultaneously.
            </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
            <img src={sceneSignpost.url} alt="A trail signpost with an anchored holographic message" loading="lazy" width={1024} height={1024} className="aspect-[16/10] w-full object-cover" />
            <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">In Practice</p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">Persistent Messaging</h3>
            <p className="mt-4 text-muted-foreground">
              Embodied messages and performances remain anchored in the physical world for later access — sports highlights on a smart signpost, TED-style talks, live music sessions, adventures among friends, or training content — discovered and enjoyed at specific locations.
            </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}