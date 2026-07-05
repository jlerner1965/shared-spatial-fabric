import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowRight, Eye, Fingerprint, Sparkles, Layers, Globe2, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <Marquee />
      <Problem />
      <Solution />
      <Pillars />
      <Comparison />
      <Ecosystem />
      <CTA />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative -mt-24 overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 bg-hero" />
      {/* Particle field */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-white/70 animate-pulse-glow"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 10) * 0.35}s`,
              filter: "blur(0.5px)",
              opacity: 0.4,
            }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(oklch(1_0_0/0.04)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 md:py-36 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[var(--emerald-soft)] animate-pulse-glow" />
            Infrastructure for Spatial Computing
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
            The Next Generation
            <br />
            of{" "}
            <span className="text-gradient">Human Connection</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            AR2 provides the foundational platform for persistent, shared, real-world augmented
            reality — enabling developers, enterprises, and future AR ecosystems to build together
            on one collaborative spatial layer.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/platform"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_60px_-10px_var(--cyan)] transition-transform hover:scale-[1.02]"
            >
              Explore the Platform
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-foreground transition-colors hover:bg-white/10"
            >
              Partner with AR2
            </Link>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/5 pt-8">
            {[
              { k: "34+", v: "US Patents" },
              { k: "5", v: "Patent Families" },
              { k: "1", v: "Shared Layer" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl text-foreground">{s.k}</dt>
                <dd className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      {/* Orbit rings */}
      <div className="absolute inset-0 rounded-full border border-white/10 [mask-image:radial-gradient(circle,transparent_58%,black_60%)]" />
      <div className="absolute inset-6 rounded-full border border-white/10 [mask-image:radial-gradient(circle,transparent_58%,black_60%)]" />
      <div className="absolute inset-14 rounded-full border border-white/10 [mask-image:radial-gradient(circle,transparent_58%,black_60%)]" />
      {/* Center orb */}
      <div className="absolute inset-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[var(--azure)] via-[var(--cyan)] to-[var(--aurora)] opacity-90 blur-2xl" />
      <div className="absolute inset-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white to-[var(--cyan)] shadow-[0_0_80px_10px_var(--cyan)]" />
      {/* Floating anchors */}
      {[
        { icon: Eye, label: "Recognition", x: "10%", y: "20%", d: "0s" },
        { icon: Fingerprint, label: "Authorization", x: "78%", y: "18%", d: "1.2s" },
        { icon: Sparkles, label: "Display", x: "72%", y: "78%", d: "2.4s" },
        { icon: Globe2, label: "Anchors", x: "6%", y: "72%", d: "0.8s" },
      ].map((a, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{ left: a.x, top: a.y, animationDelay: a.d }}
        >
          <div className="glass flex items-center gap-2 rounded-xl px-3 py-2 shadow-[var(--shadow-elevated)]">
            <a.icon className="size-4 text-[var(--cyan)]" />
            <span className="font-mono text-[10px] uppercase tracking-widest">{a.label}</span>
          </div>
        </div>
      ))}
      {/* Lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none">
        <defs>
          <linearGradient id="l" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--aurora)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          [50, 90, 200, 200],
          [330, 80, 200, 200],
          [320, 320, 200, 200],
          [40, 300, 200, 200],
        ].map((p, i) => (
          <line
            key={i}
            x1={p[0]}
            y1={p[1]}
            x2={p[2]}
            y2={p[3]}
            stroke="url(#l)"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
        ))}
      </svg>
    </div>
  );
}

function Marquee() {
  const items = [
    "Persistent",
    "Shared",
    "Permission-aware",
    "Developer-first",
    "Universal",
    "Scalable",
    "Multi-user",
    "Anchored",
  ];
  return (
    <section className="relative overflow-hidden border-y border-white/5 py-8">
      <div className="flex animate-[drift_20s_linear_infinite] gap-16 whitespace-nowrap font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className="size-1 rounded-full bg-[var(--cyan)]" />
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            The Problem
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Today's AR is <span className="text-gradient">fragmented</span>.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Every application operates as an isolated island. There is no universal collaboration
            layer — so every company rebuilds identity, permissions, anchors, and rendering from
            scratch. Users experience AR alone.
          </p>
        </div>
        <div className="relative aspect-[4/3] w-full">
          {[
            { x: "10%", y: "20%", s: 90 },
            { x: "60%", y: "8%", s: 110 },
            { x: "70%", y: "55%", s: 80 },
            { x: "20%", y: "65%", s: 100 },
            { x: "45%", y: "35%", s: 70 },
          ].map((c, i) => (
            <div
              key={i}
              className="absolute glass rounded-2xl animate-float"
              style={{
                left: c.x,
                top: c.y,
                width: c.s,
                height: c.s,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div className="flex h-full items-center justify-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  App {i + 1}
                </span>
              </div>
            </div>
          ))}
          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-dashed border-white/10" />
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[oklch(0.11_0.03_260)]">
      <div className="pointer-events-none absolute inset-0 bg-hero opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--emerald-soft)]">
            The Solution
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            One shared <span className="text-gradient">spatial layer</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            AR2 connects every application, device, and user through a common infrastructure —
            spatial anchors, identity, permissions, and rendering — so experiences persist and
            people share the same augmented world.
          </p>
        </div>

        <div className="relative mx-auto mt-20 aspect-[16/9] max-w-5xl">
          <svg viewBox="0 0 800 450" className="h-full w-full">
            <defs>
              <radialGradient id="core" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="var(--cyan)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--azure)" />
                <stop offset="100%" stopColor="var(--aurora)" />
              </linearGradient>
            </defs>
            <circle cx="400" cy="225" r="180" fill="url(#core)" opacity="0.4" />
            <circle cx="400" cy="225" r="60" fill="url(#edge)" />
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i / 12) * Math.PI * 2;
              const x = 400 + Math.cos(a) * 180;
              const y = 225 + Math.sin(a) * 180;
              return (
                <g key={i}>
                  <line
                    x1={400}
                    y1={225}
                    x2={x}
                    y2={y}
                    stroke="url(#edge)"
                    strokeOpacity="0.35"
                    strokeWidth="1"
                  />
                  <circle cx={x} cy={y} r="6" fill="var(--cyan)" opacity="0.9" />
                </g>
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest">
              AR2 Core
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const pillars = [
    {
      icon: Eye,
      name: "Recognition",
      copy: "Understand the world in context — people, pets, objects, locations, and events become addressable in shared space.",
      items: ["People", "Pets", "Objects", "Locations", "Events"],
    },
    {
      icon: Fingerprint,
      name: "Authorization",
      copy: "Enterprise-grade identity, permissions, groups, and subscriptions govern who can see, edit, and share every spatial experience.",
      items: ["Permissions", "Groups", "Subscriptions", "Identity", "Privacy"],
    },
    {
      icon: Sparkles,
      name: "Display",
      copy: "Persistent, collaborative holograms rendered consistently across devices — messaging, media, and interfaces anchored to reality.",
      items: ["Holograms", "Shared UX", "Messaging", "Media", "Interfaces"],
    },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
          Three Pillars — R.A.D.
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
          The architecture of shared reality.
        </h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <div
            key={p.name}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition-all hover:border-white/20"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
              style={{
                background:
                  i === 0
                    ? "var(--azure)"
                    : i === 1
                      ? "var(--aurora)"
                      : "var(--emerald-soft)",
              }}
            />
            <p.icon className="size-8 text-[var(--cyan)]" />
            <h3 className="mt-6 font-display text-3xl">{p.name}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.copy}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    { k: "Persistence", a: "Ephemeral", b: "Persistent, anchored in place" },
    { k: "Users", a: "Single-user", b: "Multi-user, real-time" },
    { k: "Integration", a: "Platform-specific", b: "Universal, cross-device" },
    { k: "Permissions", a: "Ad hoc", b: "First-class, enterprise-grade" },
    { k: "Ecosystem", a: "Isolated apps", b: "Developer-first infrastructure" },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
          Platform Advantages
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
          A new baseline for AR.
        </h2>
      </div>
      <div className="mt-14 overflow-hidden rounded-3xl border border-white/10">
        <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.02] px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>Capability</span>
          <span>Current AR</span>
          <span className="text-[var(--cyan)]">AR2</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.k}
            className={`grid grid-cols-3 items-center px-6 py-5 text-sm ${
              i % 2 ? "bg-white/[0.02]" : ""
            }`}
          >
            <span className="text-foreground/80">{r.k}</span>
            <span className="text-muted-foreground line-through decoration-[var(--destructive)]/60">
              {r.a}
            </span>
            <span className="font-medium text-foreground">{r.b}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Ecosystem() {
  const cards = [
    { icon: Layers, t: "SDKs", d: "Native SDKs for iOS, Android, Unity, Unreal, and Web." },
    { icon: Globe2, t: "Spatial anchors", d: "Persistent, geo-registered anchors that survive sessions." },
    { icon: ShieldCheck, t: "Identity & permissions", d: "Zero-trust identity for people, places, and objects." },
    { icon: Zap, t: "Real-time sync", d: "Sub-100ms multi-user state replication at world scale." },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.t}
            className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <c.icon className="size-6 text-[var(--cyan)]" />
            <h3 className="mt-4 font-display text-xl">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 p-12 md:p-20">
        <div className="pointer-events-none absolute inset-0 bg-hero opacity-90" />
        <div className="relative">
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Build the future of <span className="text-gradient">shared reality</span> with us.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            AR2 partners with device manufacturers, platform operators, and enterprise developers
            to bring collaborative spatial computing to production scale.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/developers"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_60px_-10px_var(--cyan)]"
            >
              Start building <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm"
            >
              Become a partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
