import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="h-px w-full bg-gold-500/30" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="font-serif text-xl font-semibold tracking-tight text-slate-900">
            Open Esquire
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
            Attorney-led counsel for teams at the intersection of law,
            technology, and markets—memos you can act on and contracts you can
            defend.
          </p>
        </div>

        <div className="grid gap-3 text-sm">
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Explore
          </div>
          <Link
            className="text-slate-700 transition hover:text-slate-900"
            href="/bio"
          >
            Attorney bio
          </Link>
          <Link
            className="text-slate-700 transition hover:text-slate-900"
            href="/blog"
          >
            Insights
          </Link>
          <Link
            className="text-slate-700 transition hover:text-slate-900"
            href="/"
          >
            Home
          </Link>
        </div>

        <div className="grid gap-3 text-sm">
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Contact
          </div>
          <a
            className="text-slate-700 transition hover:text-slate-900"
            href="mailto:openlawesq@gmail.com"
          >
            openlawesq@gmail.com
          </a>
          <a
            className="text-slate-700 transition hover:text-slate-900"
            href="https://x.com/ethlawyer"
          >
            X / @ethlawyer
          </a>
          <a
            className="text-slate-700 transition hover:text-slate-900"
            href="https://github.com/rdleonhard/OpenEsquire/blob/main/PrivacyPolicy.md"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 bg-ink-950 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs leading-relaxed md:flex-row md:items-start md:justify-between md:px-6">
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
            © {new Date().getFullYear()} Open Esquire
          </p>
          <p className="max-w-3xl text-slate-400">
            This website is for informational purposes only and does not
            constitute legal advice. No attorney-client relationship is formed
            by use of this site or by contacting us through this site.
          </p>
        </div>
      </div>
    </footer>
  );
}
