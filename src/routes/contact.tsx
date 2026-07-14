import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AR2 Project" },
      {
        name: "description",
        content:
          "Get in touch with the AR2 Project. Confidential meetings, licensing inquiries, and partnerships.",
      },
      { property: "og:title", content: "Contact — AR2 Project" },
      { property: "og:description", content: "Licensing inquiries and partnerships." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Get in touch
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Let's build the spatial layer{" "}
              <span className="text-primary text-glow">together.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              For licensing, partnerships, investment, developer collaboration, or press — send a
              note and we'll route it to the right person on the team.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Licensing", "Partnerships", "Investment", "Developers", "Enterprise", "Media"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}
