import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import heroAbout from "@/assets/hero-about.jpg.asset.json";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — AR2 Project" },
      { name: "description", content: "Terms governing use of the AR2 Project website and materials." },
      { property: "og:title", content: "Terms — AR2 Project" },
      { property: "og:description", content: "Terms governing use of the AR2 Project website." },
      { name: "twitter:title", content: "Terms — AR2 Project" },
      { name: "twitter:description", content: "Terms governing use of the AR2 Project website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Terms"
        title={<>Terms of <span className="text-primary text-glow">use.</span></>}
        image={heroAbout.url}
        imageAlt="Quiet modern interior"
      />
      <section className="mx-auto max-w-3xl px-6 py-24 text-muted-foreground">
        <p className="text-xs text-muted-foreground/70">Last updated: July 2026</p>
        <div className="mt-8 space-y-8 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Website purpose</h2>
            <p className="mt-3">This website presents information about the AR2 Project, its patent portfolio, and its licensing intent. It is provided for informational purposes only and does not constitute an offer to sell securities, grant licenses, or form a binding commitment.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Intellectual property</h2>
            <p className="mt-3">All content — including copy, imagery, trademarks, patent references, and the AR² RAD framework — is the property of AR2 Project, LLC or its respective owners. The AR2 patent portfolio is protected by issued United States patents; no rights are granted by publication of patent numbers or family descriptions on this site.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Forward-looking statements</h2>
            <p className="mt-3">Statements about future products, platform capabilities, and market conditions are aspirational and reflect current expectations. Actual outcomes may differ. Nothing on this site is investment, legal, or licensing advice.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Third-party references</h2>
            <p className="mt-3">References to third parties, industry reports (e.g., ARtillery Intelligence), and academic institutions are used for informational context and do not imply endorsement.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Contact</h2>
            <p className="mt-3">Questions about these terms: <a href="mailto:nickh@AR2project.com" className="text-primary hover:underline">nickh@AR2project.com</a></p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}