// app/page.js (or pages/index.js for "pages" directory setup)
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Add a mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
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

      {/* Hero Section with 3D Animated Text */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-4">
        <div className="mb-8">
          <Image
            src="/images/logo.jpeg"
            alt="Logo"
            width={200}
            height={200}
            unoptimized
          />
        </div>
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          The Future of Law is Here
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4 px-4">
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
      <section className="py-20 px-4 md:px-16 bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Cutting-Edge Legal Tech
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-center mt-4">
          We're pioneering the future of law with AI, automation, and
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
      <footer className="bg-gray-800 text-white text-center py-6 px-4">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Open Ξsquire. All rights reserved.
        </p>
        <div className="mt-2 space-x-2 text-sm md:text-base">
          <Link
            href="https://github.com/rdleonhard/OpenEsquire/blob/main/PrivacyPolicy.md"
            className="text-blue-400 hover:underline"
          >
            Privacy Policy
          </Link>
          {" | "}
          <Link
            href="https://x.com/ethlawyer"
            className="text-blue-400 hover:underline"
          >
            X
          </Link>
          {" | "}
          <Link
            href="mailto:openlawesq@gmail.com"
            className="text-blue-400 hover:underline"
          >
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
      className="bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg border border-gray-700"
    >
      <h3 className="text-xl md:text-2xl font-bold text-blue-400">{title}</h3>
      <p className="text-sm md:text-base text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
}
