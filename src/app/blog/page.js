// app/blog/page.js (or pages/blog.js if using the pages directory)
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/blog-header.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center">
          <h1 className="text-6xl font-extrabold">Legal Tech Insights</h1>
          <p className="text-xl text-gray-300 mt-4">
            Stay ahead with the latest legal engineering innovations.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Articles
        </h2>
        <BlogGrid />
      </section>

      {/* AI-Powered Legal Insights */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-center">
        <h2 className="text-4xl font-bold">AI-Powered Legal Insights</h2>
        <p className="text-xl text-gray-200 mt-4">
          Open Ξsquire is pioneering AI-driven contract analysis and compliance
          automation.
        </p>
      </section>

      {/* Footer with Newsletter */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Open Ξsquire. All rights reserved.
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Subscribe for Updates</h3>
          <NewsletterSignup />
        </div>
      </footer>
    </div>
  );
}

/* Blog Grid Component */
function BlogGrid() {
  const blogPosts = [
    {
      title: "AI in Contract Law: The Future is Now",
      summary:
        "How AI is revolutionizing contract drafting, analysis, and compliance.",
      image: "/images/ai-contracts.jpg",
      link: "/blog/ai-in-contract-law",
    },
    {
      title: "Blockchain & Legal Engineering",
      summary:
        "Smart contracts and the decentralized future of legal frameworks.",
      image: "/images/blockchain-law.jpg",
      link: "/blog/blockchain-legal-engineering",
    },
    {
      title: "Automated Compliance & the Law",
      summary: "How legal automation is reshaping regulatory compliance.",
      image: "/images/legal-automation.jpg",
      link: "/blog/automated-compliance",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <Link key={index} href={post.link}>
          <div className="relative cursor-pointer group transform transition duration-300 hover:scale-105">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold">{post.title}</h3>
              <p className="text-gray-300 mt-2">{post.summary}</p>
              <span className="text-blue-400 mt-4 opacity-0 group-hover:opacity-100 transition">
                Read More →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* Newsletter Signup Component */
function NewsletterSignup() {
  return (
    <div className="flex justify-center mt-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-3 rounded-l-lg w-64 text-black"
      />
      <button className="bg-blue-500 px-4 py-3 rounded-r-lg hover:bg-blue-400 transition">
        Subscribe
      </button>
    </div>
  );
}
