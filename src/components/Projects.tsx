"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ProjectModal from "./ProjectModal";
import ImageCarousel from "./ImageCarousel";
import { projects } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-navy/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-crimson/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured{" "}
            <span className="text-crimson">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson to-navy mt-4 rounded-full" />
        </AnimatedSection>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-full flex flex-col rounded-2xl bg-surface border border-white/5 overflow-hidden hover:border-crimson/20 transition-all duration-300 hover:shadow-xl hover:shadow-crimson/5">
                  {/* Project image carousel */}
                  <ImageCarousel
                    images={project.details.images}
                    alt={project.title}
                    autoSlideInterval={4000 + i * 500}
                    className="h-56 w-full"
                    overlay={
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none" />
                        {project.featured && (
                          <div className="absolute top-3 left-3 z-10">
                            <span className="text-xs px-2.5 py-1 rounded-full bg-crimson/90 text-white font-medium">
                              Featured
                            </span>
                          </div>
                        )}
                      </>
                    }
                  />

                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-lg font-bold group-hover:text-crimson transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm mt-2 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded bg-surface-light text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted hover:text-crimson transition-colors flex items-center gap-1.5 text-sm"
                      >
                        <FaGithub /> Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted hover:text-crimson transition-colors flex items-center gap-1.5 text-sm"
                      >
                        <FaExternalLinkAlt className="text-xs" /> Live
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
