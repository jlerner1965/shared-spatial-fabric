import { Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/vision", label: "Vision" },
  { to: "/technology", label: "Technology" },
  { to: "/platform", label: "Platform" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo.url} alt="AR² dragon logo" width={28} height={28} className="drop-shadow-[0_0_12px_oklch(0.82_0.14_210/0.6)]" />
          <span className="font-display text-lg font-semibold tracking-tight">
            AR<sup className="text-primary">2</sup> <span className="text-muted-foreground font-normal">Project</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-primary"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-4 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-glow)]">
            Get in touch
          </Link>
        </nav>
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-foreground [&.active]:text-primary" activeOptions={{ exact: n.to === "/" }}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t-2 border-primary/30 bg-card text-foreground shadow-[0_-1px_0_0_oklch(0.82_0.14_210/0.15)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logo.url} alt="AR² dragon logo" width={28} height={28} />
              <span className="font-display text-lg font-semibold">AR<sup className="text-primary">2</sup> Project</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-foreground/90">
              Empowering collaborative virtual user experiences in the real world.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/vision" className="text-foreground hover:text-primary">Vision</Link></li>
              <li><Link to="/technology" className="text-foreground hover:text-primary">Technology</Link></li>
              <li><Link to="/platform" className="text-foreground hover:text-primary">Platform</Link></li>
              <li><Link to="/use-cases" className="text-foreground hover:text-primary">Use Cases</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li>Nicholas Hariton</li>
              <li>Founder</li>
              <li><a href="tel:+12133046607" className="hover:text-primary">213.304.6607</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-foreground/80 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} The AR2 Project. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-foreground/90 hover:text-primary">Privacy</Link>
            <Link to="/terms" className="text-foreground/90 hover:text-primary">Terms</Link>
            <span>Recognition · Authorization · Display</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  tall,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  imageAlt: string;
  tall?: boolean;
}) {
  return (
    <section className={`relative isolate overflow-hidden ${tall ? "min-h-[92vh]" : "min-h-[60vh]"} flex items-end`}>
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
        {eyebrow && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_oklch(0.82_0.14_210)]" />
            {eyebrow}
          </div>
        )}
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}