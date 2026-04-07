"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageCarousel({
  images,
  alt,
  autoSlideInterval = 4000,
  className = "",
  overlay,
}: {
  images: string[];
  alt: string;
  autoSlideInterval?: number;
  className?: string;
  overlay?: React.ReactNode;
}) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, autoSlideInterval);
    return () => clearInterval(timer);
  }, [next, autoSlideInterval, images.length]);

  // Reset index when images change (e.g. different project opened)
  useEffect(() => {
    setCurrent(0);
  }, [images]);

  if (images.length === 0) {
    return (
      <div
        className={`bg-gradient-to-br from-surface-light via-navy/10 to-crimson/10 ${className}`}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden group/carousel ${className}`}>
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className="relative w-full h-full flex-shrink-0">
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay (gradient, badges, etc.) */}
      {overlay}

      {/* Navigation arrows — only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
          >
            <FaChevronLeft className="text-xs" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
          >
            <FaChevronRight className="text-xs" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-crimson w-5"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
