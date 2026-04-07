"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { projects } from "@/lib/data";
import ImageCarousel from "./ImageCarousel";

type Project = (typeof projects)[number];

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-surface border border-white/10 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 text-muted hover:text-white transition-colors"
            >
              <FaTimes />
            </button>

            {/* Image carousel */}
            <ImageCarousel
              images={project.details.images}
              alt={project.title}
              autoSlideInterval={5000}
              className="h-72 sm:h-96 md:h-[28rem] w-full rounded-t-2xl"
              overlay={
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none" />
              }
            />

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {project.title}
                  </h2>
                  {project.featured && (
                    <span className="inline-block mt-2 text-xs px-2.5 py-1 rounded-full bg-crimson/90 text-white font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-6 text-muted leading-relaxed">
                {project.details.longDescription}
              </p>

              {/* Highlights */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-navy-light uppercase tracking-wider mb-3">
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  {project.details.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="text-crimson mt-1.5 text-[6px]">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-navy-light uppercase tracking-wider mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1.5 rounded-lg bg-surface-light border border-white/5 text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-surface-light border border-white/10 text-sm font-medium hover:border-crimson/30 transition-colors flex items-center gap-2"
                >
                  <FaGithub /> View Code
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-crimson hover:bg-crimson-dark text-white text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
