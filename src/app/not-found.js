import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
        404
      </p>
      <h1 className="mt-4 font-serif text-3xl font-normal text-slate-900">
        Page not found
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center bg-ink-950 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800"
      >
        Back to home
      </Link>
    </div>
  );
}
