"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ElegantLogo from "./ElegantLogo";

function NavLink({ href, children, onNavigate }) {
  const pathname = usePathname();
  const active = pathname === href || pathname === `${href}/`;
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={[
        "relative text-sm font-medium tracking-wide transition",
        active ? "text-white" : "text-slate-300/80 hover:text-white",
      ].join(" ")}
    >
      {children}
      {active ? (
        <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold-400/80" />
      ) : null}
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        scrolled
          ? "border-white/10 bg-ink-950/95 backdrop-blur-md"
          : "border-transparent bg-ink-950/80 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-white"
          onClick={close}
        >
          <ElegantLogo
            size="sm"
            className="h-8 w-auto max-w-[120px] shrink-0 object-contain object-left opacity-90 transition group-hover:opacity-100"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg tracking-tight md:text-xl">
              Open Esquire
            </span>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-gold-300/70">
              Attorney at law
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/bio">Bio</NavLink>
          <NavLink href="/blog">Insights</NavLink>
          <a
            href="mailto:openlawesq@gmail.com"
            className="bg-gold-500 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-gold-300"
          >
            Request a consult
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center border border-white/15 p-2 text-white/90 transition hover:bg-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-ink-950 md:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5"
            aria-label="Mobile"
          >
            <NavLink href="/" onNavigate={close}>
              Home
            </NavLink>
            <NavLink href="/bio" onNavigate={close}>
              Bio
            </NavLink>
            <NavLink href="/blog" onNavigate={close}>
              Insights
            </NavLink>
            <a
              href="mailto:openlawesq@gmail.com"
              className="mt-2 inline-flex items-center justify-center bg-gold-500 px-4 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-gold-300"
            >
              Request a consult
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
