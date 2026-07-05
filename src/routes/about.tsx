import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import heroAbout from "@/assets/hero-about.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AR2 Project" },
      { name: "description", content: "The AR2 Project — founded by Nicholas Hariton to empower collaborative virtual user experiences in the real world." },
      { property: "og:title", content: "About — AR2 Project" },
      { property: "og:description", content: "Empowering collaborative virtual user experiences in the real world." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title={<>Aligning profit motives with <span className="text-primary text-glow">what's good for real humans.</span></>}
        image={heroAbout.url}
        imageAlt="Quiet modern open-plan office with people in conversation"
      />

      <section className="mx-auto max-w-3xl px-6 py-32 text-lg leading-relaxed text-foreground/85">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Mission</p>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Our mission is to empower collaborative virtual user experiences in the real world.
        </h2>
        <div className="mt-10 space-y-6 text-muted-foreground">
          <p>
            The AR2 Project was founded on a simple conviction: AR glasses should bring people together — not pull them deeper into isolation. We design and license the primitives that let developers, platforms, and creators build shared, spatially anchored experiences for real spaces.
          </p>
          <p>
            Our approach centers on shared experiences with a strong emphasis on social connectivity. Central to our platform is the AR² RAD concept — Recognition, Authorization, and Display — a set of assets that complement existing AR ecosystems and accelerate the shift to headworn devices.
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-border/60 bg-card p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Founder</p>
          <h3 className="mt-3 font-display text-2xl font-semibold">Nicholas Hariton</h3>
          <p className="mt-2 text-sm text-muted-foreground">Founder, The AR2 Project</p>
          <p className="mt-4 text-sm text-muted-foreground">
            <a href="mailto:nickh@AR2project.com" className="text-primary hover:underline">nickh@AR2project.com</a>
            <span className="mx-2">·</span>
            <a href="tel:+12133046607" className="hover:text-foreground">213.304.6607</a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Leadership</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          A team of inventors, scientists, and operators.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Inventors, scientists, lawyers, university professors, entrepreneurs, and media specialists — building an AR solution grounded in the RAD method and a foundation of 35+ United States Patents.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Nick Hariton", role: "CEO" },
            { name: "Perry Lerner", role: "Chair" },
            { name: "Prof. Dmitri Williams", role: "CSO" },
            { name: "Prof. Anthony Borquez", role: "Development Partner" },
            { name: "Cynthia Veneciano, Ph.D.", role: "Strategic Advisor" },
            { name: "Mark Guilarte", role: "Strategic Advisor" },
            { name: "Prof. Ben Lee", role: "Strategic Advisor" },
            { name: "Jan van Merkensteijn", role: "Strategic Advisor" },
            { name: "Ian Schick, Ph.D., Esq.", role: "Strategic Advisor" },
          ].map((person) => (
            <div key={person.name} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="font-display text-lg font-semibold tracking-tight">{person.name}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{person.role}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-card p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Development Partner</p>
          <h3 className="mt-3 font-display text-2xl font-semibold">Grab Games</h3>
          <p className="mt-2 text-sm text-muted-foreground">Pioneering the future of games & technology.</p>
        </div>
      </section>
    </SiteLayout>
  );
}