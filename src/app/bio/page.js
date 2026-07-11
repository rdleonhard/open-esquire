"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Eyebrow from "../../components/Eyebrow";

export default function Bio() {
  return (
    <div className="bg-stone-50">
      <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950 text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-grain opacity-40" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <div className="max-w-3xl">
            <Eyebrow dark>Attorney bio</Eyebrow>
            <h1 className="mt-5 font-serif text-5xl font-normal tracking-tight md:text-6xl">
              Rob Leonhard
            </h1>
            <div className="mt-6 h-px w-16 bg-gold-500" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300/90">
              Legal engineering and blockchain-focused counsel for teams
              operating at the frontier—delivered with clarity and discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-16">
          <aside>
            <Eyebrow>Summary</Eyebrow>
            <ul className="mt-6 space-y-0 border-t border-stone-200">
              {[
                "Blockchain law and emerging technology strategy",
                "Contract drafting, negotiation, and risk allocation",
                "Compliance-aware product and go-to-market guidance",
              ].map((item) => (
                <li
                  key={item}
                  className="border-b border-stone-200 py-4 text-sm leading-relaxed text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:openlawesq@gmail.com"
              className="mt-8 inline-flex items-center justify-center bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              Contact
            </a>
          </aside>

          <div>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-slate-900">
              Profile
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700">
              <p>
                Rob Leonhard is a legal engineer and blockchain lawyer based in
                Pittsburgh, PA. He supports builders and operators with
                pragmatic legal strategy and execution.
              </p>
              <p>
                Open Esquire was conceptualized by legal engineer Ross Campbell
                and launched out of Bushwick in Brooklyn, NY, creating the first
                instance of a hybrid LLC/DAO. Open Esquire began tokenizing
                products on Uniswap v1, most notably the Uniring, which was the
                first to integrate an NFC chip into the blockchain.
              </p>
              <p>
                Mission: to modernize legal services through rigorous
                engineering discipline, clear writing, and technology-aware
                counsel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <Eyebrow>History</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-slate-900 md:text-4xl">
            Experience timeline
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            A quick, high-level snapshot of the firm’s evolution and focus over
            time.
          </p>
          <div className="mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0 bg-atmosphere" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
          <AnimatedQuotes />
        </div>
      </section>
    </div>
  );
}

function Timeline() {
  const timelineData = [
    {
      year: "2019",
      text: "Open Ξsquire was conceptualized by elite legal engineer Ross Campbell and launched out of Bushwick in Brooklyn, NY, creating the first instance of a hybrid LLC/DAO. Open Ξsquire began tokenizing products on Uniswap v1, most notably the Uniring, which was the first to integrate an NFC chip into the blockchain.",
    },
    {
      year: "2020",
      text: "Covid hits, blockchain usage explodes with the world being introduced to NFTs. Open Ξsquire provides services to dozens of projects across the Ethereum ecosystem.",
    },
    {
      year: "2021",
      text: "Rob Leonhard took leadership, revolutionizing legal tech.",
    },
    {
      year: "2022-Present",
      text: "Open Ξsquire continues providing clients with cutting-edge legal services integrating AI, programming and web3 mechanics.",
    },
  ];

  return (
    <div className="border-t border-stone-200">
      {timelineData.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.45 }}
          className="grid gap-3 border-b border-stone-200 py-8 md:grid-cols-[8rem_1fr] md:gap-10"
        >
          <div className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold-700">
            {item.year}
          </div>
          <div className="text-sm leading-relaxed text-slate-700 md:text-base">
            {item.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function AnimatedQuotes() {
  const quotes = [
    "“The law is not static. It evolves, just like technology.”",
    "“Automation in legal practice is not the future—it's the present.”",
    "“Blockchain is not just for finance. It's revolutionizing law.”",
    "“Artificial Intelligence will redefine how legal systems work.”",
  ];
  const reduceMotion = useReducedMotion();
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length, reduceMotion]);

  return (
    <motion.div
      key={quoteIndex}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.5 }}
      className="mx-auto max-w-3xl text-center"
    >
      <div className="mx-auto mb-8 h-px w-12 bg-gold-500/70" />
      <p className="font-serif text-2xl font-normal leading-snug text-white md:text-3xl md:leading-snug">
        {quotes[quoteIndex]}
      </p>
    </motion.div>
  );
}
