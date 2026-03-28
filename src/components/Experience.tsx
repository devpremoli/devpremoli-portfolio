"use client";

import AnimatedSection from "./AnimatedSection";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-crimson/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Work{" "}
            <span className="text-crimson">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson to-navy mt-4 rounded-full" />
        </AnimatedSection>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-crimson via-navy to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div
                className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-[7px] md:-translate-x-[8px] top-1 rounded-full bg-crimson border-4 border-background shadow-lg shadow-crimson/20" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-8 md:ml-0 md:w-1/2 group">
                  <div className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-crimson/20 transition-all duration-300 hover:shadow-lg hover:shadow-crimson/5">
                    <span className="text-sm text-crimson font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                    <p className="text-navy-light font-medium text-sm mt-0.5">
                      {exp.company} &middot; {exp.location}
                    </p>
                    <p className="text-muted text-sm mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full bg-navy/10 text-navy-light border border-navy/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
