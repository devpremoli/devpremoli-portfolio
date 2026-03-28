"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-crimson/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-navy/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-crimson border border-crimson/30 rounded-full bg-crimson/5">
            6+ Years Building Distributed Systems
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-crimson via-crimson-light to-navy-light bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-crimson hover:bg-crimson-dark text-white font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-crimson/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/10 text-foreground font-medium rounded-full hover:bg-white/5 transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-crimson transition-colors text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-crimson transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted hover:text-crimson transition-colors text-xl"
            aria-label="Email"
          >
            <HiMail />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaArrowDown className="text-muted text-sm" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
