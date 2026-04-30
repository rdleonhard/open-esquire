"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Eyebrow from "../components/Eyebrow";
import ElegantLogo from "../components/ElegantLogo";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function MarqueeStrip() {
  const items = [
    "Commercial contracts",
    "Token launches",
    "DAO governance",
    "Risk memos",
    "Regulatory mapping",
    "Product counsel",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink-900 py-3">
      <div className="flex w-max animate-marquee gap-12 px-6">
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="shrink-0 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-300/70"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 transition hover:border-gold-500/25 hover:bg-white/[0.07]"
    >
      <div className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300/70">
        {label}
      </div>
      <div className="mt-2 font-serif text-2xl font-semibold text-white">
        {value}
      </div>
    </motion.div>
  );
}

function PracticeCard({ title, children, n }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <div className="font-mono text-[10px] font-semibold text-gold-700/90">
        {String(n).padStart(2, "0")}
      </div>
      <h3 className="mt-3 font-serif text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{children}</p>
      <div className="mt-5 h-px w-12 bg-gold-500/70 transition group-hover:w-20" />
    </motion.article>
  );
}

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950 text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold-500/20" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-6 pt-14 md:px-6 md:pb-10 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="max-w-2xl"
            >
              <motion.div variants={fadeUp}>
                <Eyebrow dark className="text-gold-300/85">
                  Technology · Blockchain · Regulatory strategy
                </Eyebrow>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-tight md:text-balance md:text-6xl md:leading-[1.06]"
              >
                Counsel that matches the velocity of your business.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-base leading-relaxed text-slate-200/85 md:text-lg"
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
                  className="inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-sm ring-1 ring-gold-300/50 transition hover:bg-gold-300"
                >
                  Request a consult
                </a>
                <Link
                  href="/bio"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
                >
                  Credentials & story
                </Link>
              </motion.div>

              <motion.div
                className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={stagger}
              >
                <Stat label="Focus" value="Web3 & tech" />
                <Stat label="Style" value="Precise memos" />
                <Stat label="Delivery" value="Fast cycles" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden justify-center lg:flex"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[min(100%,420px)] w-[min(100%,420px)] rounded-full border border-gold-500/15" />
              </div>
              <div className="relative rounded-[2rem] border border-gold-500/20 bg-ink-900 p-10 shadow-soft-xl">
                <ElegantLogo
                  priority
                  className="relative mx-auto h-44 w-auto max-w-full object-contain md:h-52"
                />
                <p className="relative mt-8 max-w-xs text-center font-serif text-lg leading-snug text-slate-200/90">
                  “Clarity is a competitive advantage—especially under
                  pressure.”
                </p>
                <div className="relative mt-6 flex justify-center gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  <span>Pittsburgh</span>
                  <span className="text-gold-400/80">·</span>
                  <span>Nationwide</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <MarqueeStrip />
      </section>

      <section className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-10 md:px-6">
          <Eyebrow>Trusted by teams shipping at the frontier</Eyebrow>
          <div className="flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
            <span>Protocols</span>
            <span>Marketplaces</span>
            <span>Funds</span>
            <span>Founders</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Practice areas</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-balance text-slate-900 md:text-5xl md:leading-tight">
              Where law meets product, markets, and code.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              Structured advice for decisions that cannot wait: launches,
              partnerships, token design, and the memos that keep boards
              aligned.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 self-start font-mono text-xs font-semibold uppercase tracking-wider text-slate-900 md:self-auto"
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

        <motion.div
          className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <PracticeCard n={1} title="Commercial & product contracts">
            Terms that reflect the deal: remedies, IP, confidentiality, and
            liability tuned to how you actually operate.
          </PracticeCard>
          <PracticeCard n={2} title="Blockchain & digital assets">
            Mechanics-first guidance on launches, governance, and on-chain
            economics—paired with practical regulatory framing.
          </PracticeCard>
          <PracticeCard n={3} title="Regulatory & compliance strategy">
            Risk maps your team can execute: policies, controls, and escalation
            paths that match your shipping cadence.
          </PracticeCard>
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-y border-slate-200 bg-sand-100">
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl md:leading-tight">
                Serious work product. Zero theatrics.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
                You get decision-ready options, crisp writing, and direct access
                to judgment—not a parade of juniors or vague “it depends.”
              </p>
            </div>
            <div className="grid gap-4">
              {[
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
              ].map((x, idx) => (
                <motion.div
                  key={x.t}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.45 }}
                  className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition hover:border-slate-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                    <div>
                      <div className="font-semibold text-slate-900">{x.t}</div>
                      <div className="mt-2 text-sm leading-relaxed text-slate-600">
                        {x.d}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 p-10 shadow-soft-xl md:p-16">
            <div className="grid gap-10 md:grid-cols-[1.35fr_1fr] md:items-center">
              <div>
                <Eyebrow dark className="text-gold-300/90">
                  Next step
                </Eyebrow>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl md:leading-tight">
                  Tell us what you are building—and your timeline.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-200/80 md:text-base">
                  A short email with context is enough to start. We will reply
                  with availability and suggested next steps.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch lg:flex-row lg:justify-end">
                <a
                  href="mailto:openlawesq@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-sm ring-1 ring-gold-300/45 transition hover:bg-gold-300"
                >
                  Email to get started
                </a>
                <Link
                  href="/bio"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
                >
                  View bio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
