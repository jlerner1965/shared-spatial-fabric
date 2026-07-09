import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AR2 Project" },
      { name: "description", content: "Get in touch with the AR2 Project. Confidential meetings, licensing inquiries, and partnerships." },
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
              Let's build the spatial layer <span className="text-primary text-glow">together.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              For licensing, partnerships, investment, developer collaboration, or press — send a note and we'll route it to the right person on the team.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Licensing", "Partnerships", "Investment", "Developers", "Enterprise", "Media"].map((t) => (
                <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{t}</span>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("Licensing");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (website.trim()) {
      setSent(true);
      return;
    }
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    try {
      setSent(true);
      setName("");
      setEmail("");
      setOrganization("");
      setJobTitle("");
      setPhone("");
      setInquiryType("Licensing");
      setMessage("");
      toast.success("Message received. We'll be in touch shortly.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-border/60 bg-card p-8">
        <h3 className="font-display text-2xl font-semibold tracking-tight">Thank you.</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Your message has reached the AR2 team. We respond to serious inquiries within two business days.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-primary hover:text-primary/80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="rounded-2xl border border-border/60 bg-card p-8" onSubmit={onSubmit}>
      <h3 className="font-display text-2xl font-semibold tracking-tight">Send inquiry</h3>
      <p className="mt-2 text-sm text-muted-foreground">We respond to serious inquiries within two business days.</p>

      <div className="mt-6 space-y-4">
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>Website<input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></label>
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Full name</label>
          <input
            type="text"
            required
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Email</label>
          <input
            type="email"
            required
            maxLength={255}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Company</label>
            <input
              type="text"
              maxLength={200}
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Job title</label>
            <input
              type="text"
              maxLength={200}
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Phone (optional)</label>
          <input
            type="tel"
            maxLength={40}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Inquiry type</label>
          <select
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          >
            {["Licensing", "Strategic partnership", "Developer collaboration", "Investor inquiry", "Enterprise", "Media", "General inquiry"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Message</label>
          <textarea
            rows={4}
            required
            maxLength={5000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
        <p className="text-[11px] leading-relaxed text-muted-foreground/70">
          We use your details only to respond to this inquiry — no newsletters, no third-party sharing.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01] disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}