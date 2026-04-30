// app/blog/page.js (or pages/blog.js if using the pages directory)
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Eyebrow from "../../components/Eyebrow";

export default function Blog() {
  const posts = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950 text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold-500/20" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="max-w-3xl">
            <Eyebrow dark className="text-gold-300/85">
              Insights
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Writing on law, technology, and emerging markets.
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-200/80">
              Selected publications and notes aimed at founders, builders, and
              practitioners.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <FeaturedPostSlider posts={posts} />
          <div className="rounded-2xl border border-slate-200 bg-sand-50 p-8 shadow-sm">
            <Eyebrow>Need help applying this?</Eyebrow>
            <h2 className="mt-4 font-serif text-2xl font-semibold text-slate-900">
              Turn insight into action.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              If a post relates to your situation, send a short note with your
              timeline and context. We’ll respond with next steps.
            </p>
            <a
              href="mailto:openlawesq@gmail.com"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-900"
            >
              Email to get started
            </a>
          </div>
        </div>

        <Eyebrow className="mt-14">Library</Eyebrow>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Featured writing
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          A few representative pieces. More available upon request.
        </p>

        <div className="mt-8">
          <PostGrid posts={posts} />
        </div>
      </section>
    </div>
  );
}

function GradientThumb() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-ink-900">
      <div className="absolute inset-x-8 top-1/2 h-px bg-gold-500/40" />
      <div className="absolute left-8 top-8 font-serif text-6xl text-gold-300/25">
        OE
      </div>
    </div>
  );
}

/* Featured Blog Slider */
function FeaturedPostSlider({ posts }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="rounded-2xl border border-white/10 bg-ink-950 p-8 text-white shadow-soft-xl">
      <div className="text-xs font-semibold uppercase tracking-widest text-slate-200/70">
        Featured
      </div>
      <div className="mt-5">
        <GradientThumb />
      </div>

      <div className="mt-6 flex items-center gap-2">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">
          {posts[index].tag}
        </span>
      </div>

      <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug">
        {posts[index].title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-200/80">
        {posts[index].summary}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <Link
          href={posts[index].link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-gold-300"
        >
          Read
          <span aria-hidden>↗</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1))
            }
            className="rounded-full bg-white/10 p-2 ring-1 ring-white/10 transition hover:bg-white/15"
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() =>
              setIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1))
            }
            className="rounded-full bg-white/10 p-2 ring-1 ring-white/10 transition hover:bg-white/15"
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        {posts.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={[
              "h-1.5 w-10 rounded-full transition",
              i === index ? "bg-gold-500" : "bg-white/15 hover:bg-white/25",
            ].join(" ")}
            aria-label={`Go to item ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function PostGrid({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <Link
          key={index}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ y: -3 }}
            className="group relative cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {post.tag}
              </span>
            </div>
            <h3 className="mt-4 font-serif text-xl font-semibold text-slate-900">
              {post.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {post.summary}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-slate-700">
              Read
              <span aria-hidden>↗</span>
            </span>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
