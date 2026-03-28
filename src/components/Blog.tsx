"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { blogPosts } from "@/lib/data";
import { FaArrowRight, FaClock } from "react-icons/fa";

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-crimson/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Latest{" "}
            <span className="text-crimson">Blog Posts</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson to-navy mt-4 rounded-full" />
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group h-full"
              >
                <a
                  href={`/blog/${post.slug}`}
                  className="h-full flex flex-col p-6 rounded-2xl bg-surface border border-white/5 hover:border-crimson/20 transition-all duration-300 hover:shadow-lg hover:shadow-crimson/5 cursor-pointer"
                >
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <time>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-[10px]" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mt-3 group-hover:text-crimson transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-muted text-sm mt-2 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-navy/10 text-navy-light border border-navy/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="text-sm text-crimson font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </a>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
