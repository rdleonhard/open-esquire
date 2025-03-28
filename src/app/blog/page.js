// app/blog/page.js (or pages/blog.js if using the pages directory)
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Parallax Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center h-[60vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/blog-header.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center"
        >
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Open Esquire Blog
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            Legal tech insights, AI advancements, and blockchain law.
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

      {/* Featured Blog Post Slider */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Insights
        </h2>
        <FeaturedBlogSlider />
      </section>

      {/* Blog Post Grid */}
      <section className="py-16 px-8 md:px-16 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Articles
        </h2>
        <BlogGrid />
      </section>

      {/* AI-Powered Blog Search Bar (Future-Ready) */}
      <section className="py-16 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold">Smart Blog Search</h2>
        <p className="text-xl text-gray-400 mt-4">
          Coming soon: AI-driven search for instant legal insights.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Open Esquire. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

/* Featured Blog Post Slider */
function FeaturedBlogSlider() {
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

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-3xl">
        <div className="flex justify-center items-center">
          <Image
            src={featuredPosts[index].image}
            alt={featuredPosts[index].title}
            width={600}
            height={400}
            className="object-contain"
          />
        </div>
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
