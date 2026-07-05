import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import {
  Users, IdCard, Ticket, MessageSquare, Landmark, ShoppingBag, GraduationCap, Factory,
} from "lucide-react";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases — AR2" },
      {
        name: "description",
        content:
          "How developers, enterprises, and ecosystems build on AR2 — from living entities and virtual identification to tourism, retail, education, and enterprise field service.",
      },
      { property: "og:title", content: "Use Cases — AR2" },
      { property: "og:description", content: "Applications of the shared spatial layer." },
    ],
  }),
  component: Uses,
});

const cases = [
  { icon: Users, title: "Living Entities", d: "Humans, pets, athletes, and characters become recognizable, addressable, and expressive in shared AR — dynamic skins and identity travel with them.", tags: ["Humans", "Pets", "Sports", "Characters", "Dynamic skins"] },
  { icon: IdCard, title: "Virtual Identification", d: "Professional networking, business cards, credentials, healthcare records — verified identity that appears when and where it is authorized.", tags: ["Networking", "Cards", "Education", "Healthcare"] },
  { icon: Ticket, title: "Events & Entertainment", d: "Concerts, sports, gaming, and shared media where every attendee sees the same augmented layer aligned with the physical venue.", tags: ["Concerts", "Sports", "Gaming", "Shared media"] },
  { icon: MessageSquare, title: "Persistent Messaging", d: "Leave experiences anchored to places — educational content, historical tours, public art, music, sports highlights, community collaboration.", tags: ["Education", "Art", "Tours", "Community"] },
  { icon: Landmark, title: "Tourism", d: "Historical overlays, guided exploration, museums, and cities that reveal their layered stories to any visitor with a device.", tags: ["History", "Museums", "Cities", "Guided"] },
  { icon: ShoppingBag, title: "Retail", d: "Interactive products, spatial commerce, and product demonstrations that live in the store and follow the customer home.", tags: ["Products", "Demos", "Commerce"] },
  { icon: GraduationCap, title: "Education", d: "Interactive science, 3D learning, laboratories, and universities collaborating on the same spatial curriculum across campuses.", tags: ["Science", "3D", "Labs", "Universities"] },
  { icon: Factory, title: "Enterprise", d: "Training, maintenance, remote collaboration, and field service where distributed teams see and act on the same shared machine.", tags: ["Training", "Maintenance", "Collaboration", "Field service"] },
];

function Uses() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Use Cases"
        title={<>Every industry, one <span className="text-gradient">shared world</span>.</>}
        subtitle="AR2 is a platform, not a product. Below are the categories developers and enterprises are already building on the shared spatial layer."
      />
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--cyan)] opacity-10 blur-3xl transition-opacity group-hover:opacity-30" />
              <c.icon className="size-7 text-[var(--cyan)]" />
              <h3 className="mt-6 font-display text-3xl">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.d}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}