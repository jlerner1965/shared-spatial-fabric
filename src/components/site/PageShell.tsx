import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background text-foreground">
      <Nav />
      <main className="relative pt-24">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-hero opacity-90" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(oklch(1_0_0/0.05)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-28 text-center md:py-40">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
          {eyebrow}
        </p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}