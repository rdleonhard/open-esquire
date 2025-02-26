// app/page.js (or pages/index.js for "pages" directory setup)
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <div className="text-white font-bold text-2xl">Open Ξsquire</div>
        <div className="space-x-4">
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

      {/* Hero Section with 3D Animated Text */}
      <section className="relative flex flex-col items-center justify-center text-center h-screen">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          The Future of Law is Here
        </motion.h1>
        <p className="text-xl text-gray-400 mt-4">
          AI-powered legal engineering. Blockchain-driven compliance. Automation
          that changes everything.
        </p>
        <div className="mt-8">
          <Link href="/bio">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(0, 153, 255, 0.7)",
              }}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Learn More
            </motion.button>
          </Link>
        </div>

        {/* Glowing Grid Background */}
        <div className="absolute inset-0 -z-10 bg-grid-white/[0.2] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"></div>
      </section>

      {/* Legal Tech Service Highlights */}
      <section className="py-20 px-8 md:px-16 bg-gray-800">
        <h2 className="text-4xl font-bold text-center">
          Cutting-Edge Legal Tech
        </h2>
        <p className="text-xl text-gray-400 text-center mt-4">
          We’re pioneering the future of law with AI, automation, and
          blockchain.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <ServiceCard
            title="AI Contract Analysis"
            description="AI-driven document review ensures faster, more accurate legal drafting."
          />
          <ServiceCard
            title="Blockchain Law"
            description="Smart contracts and decentralized legal frameworks redefine compliance."
          />
          <ServiceCard
            title="Automated Compliance"
            description="Legal automation streamlines regulatory adherence with real-time updates."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-900">
        <h2 className="text-4xl font-bold text-gray-100">
          Engineering Law for the Future
        </h2>
        <p className="text-xl text-gray-400 mt-4">
          Join the revolution in AI-driven legal services.
        </p>
        <div className="mt-6">
          <Link href="/blog">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(255, 69, 255, 0.8)",
              }}
              className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Explore Our Insights
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Open Ξsquire. All rights reserved.
        </p>
        <div className="mt-2">
          <Link href="#" className="text-blue-400 hover:underline">
            LinkedIn
          </Link>{" "}
          |
          <Link href="#" className="text-blue-400 hover:underline">
            {" "}
            Twitter
          </Link>{" "}
          |
          <Link href="#" className="text-blue-400 hover:underline">
            {" "}
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
}

/* Service Card Component */
function ServiceCard({ title, description }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 15px rgba(0, 204, 255, 0.6)",
      }}
      className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700"
    >
      <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
}
