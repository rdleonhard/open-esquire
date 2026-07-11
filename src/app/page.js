"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ElegantLogo from "../components/ElegantLogo";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const practices = [
  {
    n: "01",
    title: "Commercial & product contracts",
    body: "Terms that reflect the deal: remedies, IP, confidentiality, and liability tuned to how you actually operate.",
  },
  {
    n: "02",
    title: "Blockchain & digital assets",
    body: "Mechanics-first guidance on launches, governance, and on-chain economics—paired with practical regulatory framing.",
  },
  {
    n: "03",
    title: "Regulatory & compliance strategy",
    body: "Risk maps your team can execute: policies, controls, and escalation paths that match your shipping cadence.",
  },
];

const methods = [
  {
    t: "Structured risk memos",
    d: "Plain English, citations where they matter, and a recommended path.",
  },
  {
    t: "Negotiation that preserves the deal",
    d: "Redlines and fallback positions aligned to your commercial goals.",
  },
  {
    t: "Operator-first cadence",
    d: "Advice timed to milestones: fundraising, launches, and diligence windows.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero — one composition */}
      <section className="relative min-h-[min(100svh,920px)] overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-grain opacity-60" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 0.22, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-y-0 right-0 flex w-[min(72vw,720px)] items-center justify-end pr-0 md:pr-4 lg:pr-8"
          aria-hidden
        >
          <ElegantLogo
            priority
            className="h-auto w-full max-w-none object-contain object-right opacity-90"
          />
        </motion.div>

        <div className="absolute inset-0 bg-hero-fade md:bg-gradient-to-r md:from-ink-950 md:via-ink-950/85 md:to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[min(100svh,920px)] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:justify-center md:px-6 md:pb-24 md:pt-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-xl"
          >
            <motion.p
              variants={fadeUp}
              className="font-serif text-5xl font-normal tracking-tight text-white md:text-7xl md:leading-[0.95]"
            >
              Open Esquire
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-5 origin-left"
            >
              <div className="h-px w-16 origin-left animate-line-grow bg-gold-500" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-8 font-serif text-2xl font-normal leading-snug tracking-tight text-stone-100 md:text-3xl md:leading-snug"
            >
              Counsel that matches the velocity of your business.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-base leading-relaxed text-slate-300/90"
            >
              Attorney-led strategy for founders and operators: contracts,
              digital-asset mechanics, and compliance you can actually ship
              against.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="mailto:openlawesq@gmail.com"
                className="inline-flex items-center justify-center bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-gold-300"
              >
                Request a consult
              </a>
              <Link
                href="/bio"
                className="inline-flex items-center justify-center border border-white/20 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Credentials & story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Practice areas — editorial rows */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500"
            >
              Practice areas
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-serif text-3xl font-normal tracking-tight text-slate-900 md:text-5xl md:leading-tight"
            >
              Where law meets product, markets, and code.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600"
            >
              Structured advice for decisions that cannot wait: launches,
              partnerships, token design, and the memos that keep boards
              aligned.
            </motion.p>
          </motion.div>

          <div className="mt-16 border-t border-stone-200">
            {practices.map((p, idx) => (
              <motion.article
                key={p.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.07, duration: 0.5 }}
                className="grid gap-4 border-b border-stone-200 py-10 md:grid-cols-[5rem_1fr_1.2fr] md:gap-10 md:py-12"
              >
                <span className="font-mono text-xs font-medium tracking-[0.2em] text-gold-700">
                  {p.n}
                </span>
                <h3 className="font-serif text-2xl font-normal tracking-tight text-slate-900 md:text-[1.65rem]">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  {p.body}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-900"
            >
              Read insights
              <span
                className="transition group-hover:translate-x-0.5"
                aria-hidden
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                How we work
              </p>
              <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-slate-900 md:text-5xl md:leading-tight">
                Serious work product. Zero theatrics.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
                You get decision-ready options, crisp writing, and direct access
                to judgment—not a parade of juniors or vague “it depends.”
              </p>
            </div>

            <ul className="space-y-0">
              {methods.map((x, idx) => (
                <motion.li
                  key={x.t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.45 }}
                  className="flex gap-5 border-t border-stone-200 py-8 last:border-b"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-500"
                    aria-hidden
                  />
                  <div>
                    <div className="font-serif text-xl font-normal text-slate-900">
                      {x.t}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-600">
                      {x.d}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 bg-atmosphere" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-gold-300/85"
            >
              Next step
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-serif text-3xl font-normal tracking-tight md:text-5xl md:leading-tight"
            >
              Tell us what you are building—and your timeline.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-lg text-base leading-relaxed text-slate-300/85"
            >
              A short email with context is enough to start. We will reply with
              availability and suggested next steps.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="mailto:openlawesq@gmail.com"
                className="inline-flex items-center justify-center bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-gold-300"
              >
                Email to get started
              </a>
              <Link
                href="/bio"
                className="inline-flex items-center justify-center border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                View bio
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
