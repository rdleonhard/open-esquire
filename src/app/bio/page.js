// app/bio/page.js (or pages/bio.js if using the pages directory)
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Bio() {
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

      {/* Bio Header */}
      <header className="py-8 md:py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
          About Open Ξsquire
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Pioneering Legal Engineering & Blockchain Law
        </p>
      </header>

      {/* Founder Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-800 rounded-xl p-6 md:p-8">
          {/* Image Container */}
          <div className="w-full md:w-1/3">
            <Image
              src="/images/rob-leonhard.jpeg"
              alt="Rob Leonhard"
              width={160}
              height={160}
              className="rounded-lg w-40 h-40 md:w-48 md:h-48 object-cover mx-auto"
              unoptimized
            />
          </div>

          {/* Bio Content */}
          <div className="w-full md:w-2/3 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 text-center md:text-left">
              Rob Leonhard
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              Rob Leonhard is a legal engineer and blockchain lawyer based in
              Pittsburgh, PA. He specializes in smart contract development and
              decentralized legal frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="bg-gray-800 rounded-xl p-6 md:p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400">
            Our Story
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-300">
            <p>
              Open Ξsquire was conceptualized by elite legal engineer Ross
              Campbell and launched out of Bushwick in Brooklyn, NY, creating
              the first instance of a hybrid LLC/DAO.
            </p>
            <p>
              Open Ξsquire began tokenizing products on Uniswap v1, most notably
              the Uniring, which was the first to integrate an NFC chip into the
              blockchain.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto mb-12">
        <motion.div
          className="bg-gray-800 rounded-xl p-6 md:p-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">
            Our Mission
          </h2>
          <p className="text-sm md:text-base text-gray-300">
            To revolutionize legal services through blockchain technology and
            artificial intelligence, making legal engineering accessible and
            efficient for the next generation of legal professionals.
          </p>
        </motion.div>
      </section>

      {/* Return Home Button */}
      <div className="flex justify-center mt-6">
        <Link href="/">
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(0, 153, 255, 0.8)",
            }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Return Home
          </motion.button>
        </Link>
      </div>

      {/* Legal Tech Evolution Timeline */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Evolution in Legal Engineering
        </h2>
        <Timeline />
      </section>

      {/* Animated Quote Block */}
      <section className="py-16 bg-gray-900 text-center">
        <AnimatedQuotes />
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Open Ξsquire. All rights reserved.
        </p>
      </footer>
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
    <div className="relative max-w-4xl mx-auto">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 10px rgba(0, 204, 255, 0.6)",
          }}
          className="flex items-center mb-8 bg-gray-800 p-4 rounded-lg border border-gray-700"
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
          <div className="text-lg">
            <span className="font-bold text-blue-300">{item.year}:</span>{" "}
            {item.text}
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
      className="text-2xl font-bold text-gray-300"
    >
      {quotes[quoteIndex]}
    </motion.div>
  );
}
