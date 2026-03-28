"use client";

import AnimatedSection from "./AnimatedSection";
import { skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-navy/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold">
            About{" "}
            <span className="text-crimson">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson to-navy mt-4 rounded-full" />
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 gap-16">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                I&apos;m a Full-Stack Software Engineer with 6+ years of
                experience building cloud-native, distributed systems. I
                specialize in Java, Spring Boot, Go, Python, Kafka, and AWS.
              </p>
              <p>
                I integrate LLMs, Retrieval-Augmented Generation (RAG), vector
                databases, and scalable model inference pipelines into
                event-driven microservices architectures. My work spans finance,
                healthcare, and telecommunications domains.
              </p>
              <p>
                B.S. in Computer Science from{" "}
                <span className="text-navy-light font-medium">
                  Howard University
                </span>
                , Washington, DC. Currently based in Texas, building systems that
                scale.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-semibold text-navy-light uppercase tracking-wider mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-surface-light border border-white/5 rounded-lg text-foreground hover:border-crimson/30 hover:bg-crimson/5 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
