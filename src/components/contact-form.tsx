import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          organization: organization.trim(),
          jobTitle: jobTitle.trim(),
          phone: phone.trim(),
          inquiryType,
          message: trimmedMessage,
          website,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        toast.error(data?.error ?? "Something went wrong. Please try again.");
        return;
      }
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

      <div className="mt-6 space-y-4">
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>Website<input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></label>
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Full name</label>
          <input type="text" required maxLength={100} value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Email</label>
          <input type="email" required maxLength={255} value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Company</label>
            <input type="text" maxLength={200} value={organization} onChange={(e) => setOrganization(e.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Job title</label>
            <input type="text" maxLength={200} value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Phone (optional)</label>
          <input type="tel" maxLength={40} value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Inquiry type</label>
          <select value={inquiryType} onChange={(e) => setInquiryType(e.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary">
            {["SDKs", "Licensing", "Strategic partnership", "Developer collaboration", "Investor inquiry", "Enterprise", "Media", "General inquiry"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Message</label>
          <textarea rows={4} required maxLength={5000} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <button type="submit" disabled={submitting} className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01] disabled:opacity-60">
          {submitting ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}