"use client";

import { useState } from "react";

const inputClasses =
  "border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-500 transition focus:border-gold-400 focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setStatus("Sending your message…");
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/b1cd22c342928e9dffbcf98f9ecb7ee7",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        },
      );
      const result = await response.json();
      if (!response.ok || String(result.success) !== "true") {
        throw new Error(result.message ?? `Request failed: ${response.status}`);
      }
      form.reset();
      setStatus("Thank you — your message has been sent.");
    } catch {
      setStatus(
        "Something went wrong sending your message. Please try again in a moment.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid max-w-lg gap-5">
      <input
        type="hidden"
        name="_subject"
        value="New consult request from openesquire.com"
      />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Name
          <input name="name" autoComplete="name" required className={inputClasses} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClasses}
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        What are you building—and your timeline?
        <textarea name="message" rows={4} required className={inputClasses} />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending…" : "Request a consult"}
        </button>
      </div>
      <p role="status" aria-live="polite" className="min-h-5 text-sm text-slate-300">
        {status}
      </p>
      <p className="text-xs leading-relaxed text-slate-400">
        Please do not send confidential, sensitive, or time-sensitive
        information through this form. Submitting a message does not create an
        attorney-client relationship.
      </p>
    </form>
  );
}
