import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import heroAbout from "@/assets/hero-about.jpg.asset.json";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — AR2 Project" },
      { name: "description", content: "How the AR2 Project handles personal information collected through this website and direct inquiries." },
      { property: "og:title", content: "Privacy — AR2 Project" },
      { property: "og:description", content: "How AR2 handles personal information." },
      { name: "twitter:title", content: "Privacy — AR2 Project" },
      { name: "twitter:description", content: "How AR2 handles personal information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Privacy"
        title={<>Consent-based by <span className="text-primary text-glow">principle.</span></>}
        image={heroAbout.url}
        imageAlt="Quiet modern interior"
      />
      <section className="mx-auto max-w-3xl px-6 py-24 text-muted-foreground">
        <p className="text-xs text-muted-foreground/70">Last updated: July 2026</p>
        <div className="mt-8 space-y-8 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">What we collect</h2>
            <p className="mt-3">This website collects only the information you provide directly through the contact form — name, email, optional organization, and message content — plus standard server request logs (IP address, user agent, timestamp) retained for security and operational purposes.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">How we use it</h2>
            <p className="mt-3">Inquiries are used solely to respond to you about licensing, partnerships, or platform integrations. We do not send marketing newsletters, we do not sell or share personal information with third parties, and we do not use your details for advertising.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Cookies & analytics</h2>
            <p className="mt-3">This site uses only strictly necessary functional storage. No third-party advertising cookies, no cross-site tracking, no behavioral profiling.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Your rights</h2>
            <p className="mt-3">You may request a copy of the personal information we hold about you, correction of inaccuracies, or deletion. Email <a href="mailto:nickh@AR2project.com" className="text-primary hover:underline">nickh@AR2project.com</a> and we will respond within a reasonable period.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Contact</h2>
            <p className="mt-3">The AR2 Project — <a href="mailto:nickh@AR2project.com" className="text-primary hover:underline">nickh@AR2project.com</a></p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}