import { Link } from "@tanstack/react-router";

const groups = [
  {
    title: "Platform",
    links: [
      { to: "/technology", label: "Technology" },
      { to: "/platform", label: "Architecture" },
      { to: "/developers", label: "Developers" },
      { to: "/use-cases", label: "Use Cases" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/vision", label: "Vision" },
      { to: "/leadership", label: "Leadership" },
      { to: "/news", label: "News" },
      { to: "/partners", label: "Partners" },
    ],
  },
  {
    title: "Connect",
    links: [
      { to: "/contact", label: "Contact" },
      { to: "/contact", label: "Partner Inquiry" },
      { to: "/contact", label: "Media" },
      { to: "/contact", label: "Licensing" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="relative flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--azure)] via-[var(--cyan)] to-[var(--aurora)]" />
              <span className="absolute inset-[2px] rounded-md bg-background" />
              <span className="relative font-display text-xl leading-none">
                AR<sup className="text-[0.55em]">2</sup>
              </span>
            </span>
            <span className="font-medium tracking-tight">AR2</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            The foundational platform for collaborative spatial computing. Persistent, shared,
            permission-aware augmented reality for developers, enterprises, and ecosystems.
          </p>
          <p className="mt-6 font-mono text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} AR2, Inc. All rights reserved.
          </p>
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground/80">
              {g.title}
            </h4>
            <ul className="space-y-2">
              {g.links.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}