"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { siteConfig } from "@/lib/data";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/mjgpgjgr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-navy/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get In{" "}
            <span className="text-crimson">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson to-navy mt-4 rounded-full" />
          <p className="mt-6 text-muted max-w-xl">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Drop me a message and I&apos;ll get back to you as soon as
            possible.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <AnimatedSection delay={0.1} className="md:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-crimson/10 text-crimson">
                <HiMail className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Email</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-muted text-sm hover:text-crimson transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-navy/10 text-navy-light">
                <HiLocationMarker className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Location</h3>
                <p className="text-muted text-sm">Texas, USA</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-crimson/10 text-crimson">
                <FaGithub className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Socials</h3>
                <div className="flex gap-3 mt-1">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-crimson transition-colors text-lg"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-crimson transition-colors text-lg"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.2} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 transition-colors resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-crimson hover:bg-crimson-dark text-white font-medium rounded-full transition-colors flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-crimson/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane className="text-sm" />
                {status === "submitting" ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "success" && (
                <p className="text-green-400 text-sm mt-3">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-3">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
