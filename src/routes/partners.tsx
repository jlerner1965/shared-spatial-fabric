import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Cpu, Building2, Gamepad2, Radio, GraduationCap, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — AR2" },
      {
        name: "description",
        content:
          "AR2 partners with device manufacturers, platform operators, enterprises, and creative studios to bring collaborative spatial computing to production scale.",
      },
      { property: "og:title", content: "Partners — AR2" },
      { property: "og:description", content: "Build the shared spatial layer with us." },
    ],
  }),
  component: Partners,
});

const cats = [
  { icon: Cpu, t: "Devices & Silicon", d: "Headsets, glasses, mobile, and silicon partners integrating the R.A.D. runtime." },
  { icon: Building2, t: "Enterprise", d: "Global enterprises deploying AR2 for training, field service, and collaboration." },
  { icon: Radio, t: "Media & Broadcast", d: "Live venues, sports, and broadcast partners for shared-view experiences." },
  { icon: Gamepad2, t: "Studios", d: "Game studios and interactive teams building on AR2's rendering layer." },
  { icon: GraduationCap, t: "Research & Education", d: "Universities and research programs co-developing spatial curricula." },
  { icon: ShoppingBag, t: "Retail & Commerce", d: "Brands building spatial storefronts and product experiences." },
];

function Partners() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Partners"
        title={<>Build the shared layer <span className="text-gradient">together</span>.</>}
        subtitle="AR2 is designed as ecosystem infrastructure. We work closely with a small number of committed partners across every layer of the stack."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cats.map((c) => (
            <div key={c.t} className="glass rounded-2xl p-6">
              <c.icon className="size-6 text-[var(--cyan)]" />
              <h3 className="mt-4 font-display text-xl">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-32 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Interested in partnering?</h2>
        <p className="mt-4 text-muted-foreground">
          We work with a small number of committed partners. Send us a note and we'll be in touch.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_60px_-10px_var(--cyan)]"
        >
          Partner with AR2
        </Link>
      </section>
    </PageShell>
  );
}