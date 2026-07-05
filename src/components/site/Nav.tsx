import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/vision", label: "Vision" },
  { to: "/technology", label: "Technology" },
  { to: "/platform", label: "Platform" },
  { to: "/developers", label: "Developers" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/leadership", label: "Leadership" },
  { to: "/news", label: "News" },
  { to: "/partners", label: "Partners" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--azure)] via-[var(--cyan)] to-[var(--aurora)] opacity-90" />
            <span className="absolute inset-[2px] rounded-md bg-background" />
            <span className="relative font-display text-lg leading-none">
              AR<sup className="text-[0.55em]">2</sup>
            </span>
          </span>
          <span className="hidden font-medium tracking-tight sm:inline">AR2</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-foreground transition-colors hover:bg-white/10 sm:inline-flex"
          >
            Contact
          </Link>
          <Link
            to="/platform"
            className="hidden rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-8px_var(--cyan)] transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Explore Platform
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-white/5 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}