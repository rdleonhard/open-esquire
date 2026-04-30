"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ElegantLogo from "./ElegantLogo";

function NavLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={[
        "relative text-sm font-medium tracking-wide transition",
        active ? "text-white" : "text-slate-200/80 hover:text-white",
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-white/10 backdrop-blur-md transition-[background-color,box-shadow] duration-300",
        scrolled
          ? "bg-ink-950/96 shadow-[0_12px_32px_-24px_rgba(0,0,0,0.7)]"
          : "bg-ink-950/92",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 md:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-white"
        >
          <ElegantLogo className="h-9 w-auto max-w-[140px] shrink-0 object-contain object-left opacity-95 transition group-hover:opacity-100" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-tight md:text-xl">
              Open Esquire
            </span>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gold-300/75">
              Attorney at law
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/bio">Bio</NavLink>
          <NavLink href="/blog">Insights</NavLink>
          <a
            href="mailto:openlawesq@gmail.com"
            className="rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-ink-950 shadow-sm ring-1 ring-gold-300/40 transition hover:bg-gold-300"
          >
            Request a consult
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white/90 ring-1 ring-white/10 transition hover:bg-white/10 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
        <div className="border-t border-white/10 bg-ink-950/90 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/bio">Bio</NavLink>
            <NavLink href="/blog">Insights</NavLink>
            <a
              href="mailto:openlawesq@gmail.com"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-ink-950 shadow-sm ring-1 ring-gold-300/40 transition hover:bg-gold-300"
            >
              Request a consult
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

