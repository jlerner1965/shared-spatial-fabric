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
          Inventors, scientists, lawyers, university professors, entrepreneurs, and media specialists — building an AR solution grounded in the RAD method and a foundation of 34 granted United States patents.
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

      {/* Patent portfolio */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Intellectual Property</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            AR<sup className="text-primary">2</sup> — 34 United States Patents, and counting.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A foundational patent portfolio covering the primitives of shared augmented reality — personalized rendering, living-entity anchors, constructed objects, smart sign posts, and AR messengering. First patent granted 2018; portfolio grown to 34 issued US patents.
          </p>

          <div className="mt-12">
            <h3 className="font-display text-2xl font-semibold tracking-tight">Five Patent Families</h3>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/60">
              <table className="w-full text-left text-sm">
                <thead className="bg-primary/10 text-primary">
                  <tr>
                    <th className="px-5 py-3 font-medium">Patent Family</th>
                    <th className="px-5 py-3 font-medium">Core Patent</th>
                    <th className="px-5 py-3 font-medium">Issue Date</th>
                    <th className="px-5 py-3 font-medium">Patent ID</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {[
                    ["Personalized Rendering", "Systems and Methods for Generating and Facilitating Access to a Personalized Augmented Rendering of a User", "2019-02-05", "US 10,198,871"],
                    ["Constructed Objects", "Systems and Methods for Rendering a Virtual Content Object in an Augmented Reality Environment", "2018-10-23", "US 10,105,601 B1"],
                    ["Smart Sign Post", "Systems and Methods for Utilizing a Device as a Marker for Augmented Reality Content", "2018-10-16", "US 10,102,659 B1"],
                    ["Living Entity as Marker", "Systems and Methods for Utilizing a Living Entity as a Marker for Augmented Reality Content", "2020-04-28", "US 10,636,188"],
                    ["AR Messengering", "Systems, Methods, and Storage Media for Conveying Virtual Content in an Augmented Reality Environment", "2020-03-10", "US 10,586,396 B1"],
                  ].map(([family, patent, date, id]) => (
                    <tr key={id} className="bg-card">
                      <td className="px-5 py-4 font-display font-semibold">{family}</td>
                      <td className="px-5 py-4 text-muted-foreground">{patent}</td>
                      <td className="px-5 py-4 font-mono text-xs text-foreground/80">{date}</td>
                      <td className="px-5 py-4 font-mono text-xs text-primary">{id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-display text-2xl font-semibold tracking-tight">Full Portfolio</h3>
            <p className="mt-2 text-sm text-muted-foreground">34 issued United States patents forming the AR<sup>2</sup> platform.</p>
            <div className="mt-6 grid gap-1.5 rounded-2xl border border-border/60 bg-card p-4 font-mono text-xs sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {[
                "10,102,659", "10,105,601", "10,198,871", "10,565,767", "10,586,396",
                "10,593,121", "10,636,188", "10,661,170", "10,672,170", "10,679,427",
                "10,796,467", "10,818,096", "10,846,931", "10,861,245", "10,867,424",
                "11,120,596", "11,145,136", "11,185,775", "11,198,064", "11,200,748",
                "11,532,134", "11,620,798", "11,631,223", "11,752,431", "11,810,226",
                "11,823,312", "11,850,511", "11,983,830", "12,026,806", "12,086,944",
                "12,106,411", "12,296,264", "12,350,586", "12,406,453",
              ].map((n) => (
                <div key={n} className="rounded-md bg-background/60 px-3 py-2 text-foreground/80">
                  <span className="text-muted-foreground">U.S.</span> {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}