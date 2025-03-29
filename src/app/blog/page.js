// app/blog/page.js (or pages/blog.js if using the pages directory)
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 md:px-6">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-white font-bold text-2xl hover:text-blue-400 transition"
        >
          Open Ξsquire
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link
            href="/bio"
            className="text-gray-300 hover:text-white transition"
          >
            Bio
          </Link>
          <Link
            href="/blog"
            className="text-gray-300 hover:text-white transition"
          >
            Blog
          </Link>
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 transition cursor-not-allowed"
            disabled
          >
            App - Coming Soon
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } md:hidden absolute top-20 left-0 right-0 flex-col items-center bg-gray-900 py-4 space-y-4 z-50`}
        >
          <Link href="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link
            href="/bio"
            className="text-gray-300 hover:text-white transition"
          >
            Bio
          </Link>
          <Link
            href="/blog"
            className="text-gray-300 hover:text-white transition"
          >
            Blog
          </Link>
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 transition cursor-not-allowed"
            disabled
          >
            App - Coming Soon
          </button>
        </div>
      </nav>

      {/* Blog Header */}
      <header className="py-8 md:py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
          Legal Tech Insights
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Exploring the intersection of law, technology, and innovation
        </p>
      </header>

      {/* Featured Blog Slider */}
      <section className="max-w-4xl mx-auto mb-12">
        <FeaturedBlogSlider />
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {/* Blog cards */}
      </section>
    </div>
  );
}

/* Featured Blog Slider */
function FeaturedBlogSlider() {
  const [index, setIndex] = useState(0);
  const featuredPosts = [
    {
      title: "Autonomous Lawyering Using OpenLaw.",
      summary:
        "I can't say I legally represent the Ethereum community because the vast amount of ethical rules that guide my representation would apply to the millions of users around the world.",
      image: "/images/Autonomous-Lawyering.png",
      link: "https://medium.com/@openlawesq/autonomous-lawyering-using-openlaw-dad9c604975b",
    },
    {
      title: "Uniswag: Selling Products on Uniswap",
      summary:
        "Who wants a ring? To recap, we wrote a series of blog posts about tokenizing products and using Uniswap's dynamic pricing method. Do you get why this model could be perfect for artisans?",
      image: "/images/lego.png",
      link: "https://medium.com/@openlawesq/uniswag-selling-products-on-uniswap-f2d4fb25f82f",
    },
    {
      title: "Decentralized Finance on the Ethereum Blockchain",
      summary:
        "Using these applications, attorneys could advise desperate clients on using decentralized financial strategies to circumvent the authority of dysfunctional governments and insolvent banks.",
      image: "/images/article.png",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3359732",
    },
  ];

  return (
    <div className="relative bg-gray-800 rounded-xl p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Image Container */}
        <div className="w-full md:w-1/2">
          <Image
            src={featuredPosts[index].image}
            alt={featuredPosts[index].title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[200px] md:h-[300px]"
            unoptimized
          />
        </div>

        {/* Content Container */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-blue-400">
            {featuredPosts[index].title}
          </h2>
          <p className="text-sm md:text-base text-gray-300">
            {featuredPosts[index].summary}
          </p>
          <Link
            href={featuredPosts[index].link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm md:text-base"
            >
              Read More
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() =>
            setIndex((prev) =>
              prev === 0 ? featuredPosts.length - 1 : prev - 1
            )
          }
          className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() =>
            setIndex((prev) =>
              prev === featuredPosts.length - 1 ? 0 : prev + 1
            )
          }
          className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {featuredPosts.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-blue-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* Blog Grid Component */
function BlogGrid() {
  const blogPosts = [
    {
      title: "Autonomous Lawyering Using OpenLaw.",
      summary:
        "I can't say I legally represent the Ethereum community because the vast amount of ethical rules that guide my representation would apply to the millions of users around the world.",
      image: "/images/Autonomous-Lawyering.png",
      link: "https://medium.com/@openlawesq/autonomous-lawyering-using-openlaw-dad9c604975b",
    },
    {
      title: "Uniswag: Selling Products on Uniswap",
      summary:
        "Who wants a ring? To recap, we wrote a series of blog posts about tokenizing products and using Uniswap's dynamic pricing method. Do you get why this model could be perfect for artisans?",
      image: "/images/lego.png",
      link: "https://medium.com/@openlawesq/uniswag-selling-products-on-uniswap-f2d4fb25f82f",
    },
    {
      title: "Decentralized Finance on the Ethereum Blockchain",
      summary:
        "Using these applications, attorneys could advise desperate clients on using decentralized financial strategies to circumvent the authority of dysfunctional governments and insolvent banks.",
      image: "/images/article.png",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3359732",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <Link key={index} href={post.link}>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(0, 204, 255, 0.6)",
            }}
            className="relative cursor-pointer group transform transition duration-300 hover:scale-105 bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-2xl font-bold mt-4">{post.title}</h3>
            <p className="text-gray-400 mt-2">{post.summary}</p>
            <span className="text-blue-400 mt-4 opacity-0 group-hover:opacity-100 transition">
              Read More →
            </span>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
