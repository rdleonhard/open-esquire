"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
        Error
      </p>
      <h1 className="mt-4 font-serif text-3xl font-normal text-slate-900">
        Something went wrong
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        This page hit an unexpected error. You can try again or return home.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center justify-center bg-ink-950 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center border border-stone-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-stone-200 hover:bg-stone-50"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
