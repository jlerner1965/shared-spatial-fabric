import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AR2" },
      {
        name: "description",
        content:
          "Contact AR2 — partner and developer inquiries, licensing, media, and general questions.",
      },
      { property: "og:title", content: "Contact — AR2" },
      { property: "og:description", content: "Get in touch with AR2." },
    ],
  }),
  component: Contact,
});

const kinds = ["Partner", "Developer", "Licensing", "Media", "General"] as const;

function Contact() {
  const [kind, setKind] = useState<(typeof kinds)[number]>("Partner");
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient">build</span>.</>}
        subtitle="Tell us how you'd like to engage. Our team reviews every inquiry personally."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-32 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
              Headquarters
            </p>
            <p className="mt-3 font-display text-2xl leading-tight">
              AR2, Inc.
              <br />
              San Francisco · New York · Seattle
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
              Direct
            </p>
            <ul className="mt-3 space-y-1 text-foreground/80">
              <li>partners@ar2.dev</li>
              <li>developers@ar2.dev</li>
              <li>press@ar2.dev</li>
            </ul>
          </div>
          <div className="glass relative aspect-[4/3] overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--azure),transparent_60%),radial-gradient(circle_at_80%_80%,var(--aurora),transparent_60%)] opacity-70" />
            <div className="absolute inset-0 [background-image:linear-gradient(oklch(1_0_0/0.06)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest">
                Interactive office
              </div>
            </div>
          </div>
        </div>

        <form
          className="glass space-y-6 rounded-3xl p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Inquiry type
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {kinds.map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setKind(k)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                    kind === k
                      ? "border-[var(--cyan)] bg-[color-mix(in_oklab,var(--cyan)_20%,transparent)] text-foreground"
                      : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>
          {[
            { l: "Name", t: "text", n: "name" },
            { l: "Company", t: "text", n: "company" },
            { l: "Email", t: "email", n: "email" },
          ].map((f) => (
            <div key={f.n}>
              <label
                htmlFor={f.n}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
              >
                {f.l}
              </label>
              <input
                id={f.n}
                name={f.n}
                type={f.t}
                required
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--cyan)] focus:outline-none"
                placeholder={f.l}
              />
            </div>
          ))}
          <div>
            <label
              htmlFor="message"
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--cyan)] focus:outline-none"
              placeholder="Tell us how we can help."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_60px_-10px_var(--cyan)] transition-transform hover:scale-[1.01]"
          >
            {sent ? "Thanks — we'll be in touch" : "Send inquiry"}
          </button>
        </form>
      </section>
    </PageShell>
  );
}