"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "../../components/Eyebrow";
import { CONTACT_MAILTO } from "../../lib/site";
import { viewportOnce } from "../../lib/motion";

const POSTS = [
  {
    title: "Autonomous Lawyering Using OpenLaw",
    summary:
      "Ethics, scale, and what autonomy could look like in a world with open networks.",
    link: "https://medium.com/@openlawesq/autonomous-lawyering-using-openlaw-dad9c604975b",
    tag: "Strategy",
  },
  {
    title: "Uniswag: Selling Products on Uniswap",
    summary:
      "A practical look at tokenized products and AMM mechanics for real commerce.",
    link: "https://medium.com/@openlawesq/uniswag-selling-products-on-uniswap-f2d4fb25f82f",
    tag: "Web3",
  },
  {
    title: "Decentralized Finance on the Ethereum Blockchain",
    summary:
      "How decentralized applications change legal advice and financial access globally.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3359732",
    tag: "Research",
  },
];

export default function Blog() {
  const reduceMotion = useReducedMotion();
  const featured = POSTS[0];

  return (
    <div className="bg-stone-50">
      <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950 text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-grain opacity-40" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <div className="max-w-3xl">
            <Eyebrow dark>Insights</Eyebrow>
            <h1 className="mt-5 font-serif text-4xl font-normal tracking-tight md:text-5xl md:leading-tight">
              Writing on law, technology, and emerging markets.
            </h1>
            <div className="mt-6 h-px w-16 bg-gold-500" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300/90">
              Selected publications and notes aimed at founders, builders, and
              practitioners.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={reduceMotion ? { duration: 0 } : undefined}
          className="border-b border-stone-200 pb-14"
        >
          <Eyebrow>Featured</Eyebrow>
          <div className="mt-4 flex items-center gap-3">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gold-700">
              {featured.tag}
            </span>
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl font-normal tracking-tight text-slate-900 md:text-4xl">
            {featured.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            {featured.summary}
          </p>
          <Link
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
          >
            Read
            <span aria-hidden>↗</span>
          </Link>
        </motion.article>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_minmax(0,18rem)] lg:gap-16">
          <div>
            <Eyebrow>Library</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-slate-900">
              Featured writing
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">
              A few representative pieces. More available upon request.
            </p>

            <div className="mt-10 border-t border-stone-200">
              {POSTS.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { delay: index * 0.05 }
                  }
                >
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-2 border-b border-stone-200 py-8 transition md:grid-cols-[6rem_1fr] md:gap-8"
                  >
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gold-700">
                      {post.tag}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-normal tracking-tight text-slate-900 transition group-hover:text-ink-800 md:text-2xl">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {post.summary}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                        Read
                        <span
                          className="transition group-hover:translate-x-0.5"
                          aria-hidden
                        >
                          ↗
                        </span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <aside className="lg:pt-2">
            <div className="border-t border-stone-200 pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              <Eyebrow>Need help applying this?</Eyebrow>
              <h2 className="mt-4 font-serif text-2xl font-normal tracking-tight text-slate-900">
                Turn insight into action.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                If a post relates to your situation, send a short note with your
                timeline and context. We’ll respond with next steps.
              </p>
              <a
                href={CONTACT_MAILTO}
                className="mt-6 inline-flex items-center justify-center bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
              >
                Email to get started
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
