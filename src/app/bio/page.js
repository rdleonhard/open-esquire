// app/bio/page.js (or pages/bio.js if using the pages directory)
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/legal-tech-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center">
          <h1 className="text-6xl font-extrabold text-blue-400">
            The Minds Behind Open Ξsquire
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            Forged by legendary legal engineers. Led by Rob Leonhard.
          </p>
        </div>
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

      {/* Bio Profile Card */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-center">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-5xl font-extrabold text-white">
            Meet Rob Leonhard
          </h2>
          <p className="text-xl text-gray-300 mt-4">
            A visionary legal technologist engineering the future of law through
            AI, blockchain, and automation.
          </p>
          <div className="mt-6 flex justify-center">
            <motion.img
              src="/images/rob-leonhard.jpeg"
              alt="Rob Leonhard"
              className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
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
      year: "2020",
      text: "Open Ξsquire was conceptualized by elite legal engineers.",
    },
    { year: "2021", text: "AI-powered contract review system launched." },
    {
      year: "2022",
      text: "Blockchain-based legal agreements became industry standard.",
    },
    {
      year: "2023",
      text: "Rob Leonhard took leadership, revolutionizing legal tech.",
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
    "“Automation in legal practice is not the future—it’s the present.”",
    "“Blockchain is not just for finance. It’s revolutionizing law.”",
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
