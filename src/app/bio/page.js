// app/bio/page.js (or pages/bio.js if using the pages directory)
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Eyebrow from "../../components/Eyebrow";

export default function Bio() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950 text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold-500/20" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="max-w-3xl">
            <Eyebrow dark className="text-gold-300/85">
              Attorney bio
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Rob Leonhard
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-200/80">
              Legal engineering and blockchain-focused counsel for teams
              operating at the frontier—delivered with clarity and discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-sand-50 p-6">
              <Eyebrow>Summary</Eyebrow>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Blockchain law and emerging technology strategy</li>
                <li>Contract drafting, negotiation, and risk allocation</li>
                <li>Compliance-aware product and go-to-market guidance</li>
              </ul>
              <a
                href="mailto:openlawesq@gmail.com"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-900"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-semibold text-slate-900">
                Profile
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-6 text-slate-700">
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
        </div>
      </section>

      <section className="bg-sand-100">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <Eyebrow>History</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Experience timeline
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            A quick, high-level snapshot of the firm’s evolution and focus over
            time.
          </p>
          <div className="mt-10">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950">
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <AnimatedQuotes />
        </div>
      </section>
    </div>
  );
}

/* Timeline Component with Hover Effects */
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
    <div className="relative mx-auto max-w-4xl border-l border-slate-200 pl-8 md:pl-10">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -2 }}
          className="relative mb-5 rounded-2xl border border-slate-200 bg-white p-6 transition"
        >
          <span className="absolute -left-[9px] top-8 hidden h-3 w-3 rounded-full border-2 border-white bg-gold-500 md:block" />
          <div className="flex items-start gap-4">
            <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-500 md:hidden" />
            <div>
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                {item.year}
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-700">
                {item.text}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* Animated Quotes Component */
function AnimatedQuotes() {
  const quotes = [
    "“The law is not static. It evolves, just like technology.”",
    "“Automation in legal practice is not the future—it's the present.”",
    "“Blockchain is not just for finance. It's revolutionizing law.”",
    "“Artificial Intelligence will redefine how legal systems work.”",
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <motion.div
      key={quoteIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-ink-900 p-10 text-center font-serif text-2xl font-semibold leading-snug text-white shadow-soft-xl md:text-3xl"
    >
      {quotes[quoteIndex]}
    </motion.div>
  );
}
