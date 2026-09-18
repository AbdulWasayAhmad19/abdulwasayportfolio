"use client";

import React from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Inview } from "@/components/animation/springs/in-view";

export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  index: number;
  image: string;
  category: string;
  tech: string[];
  year: string;
  status: string;
  features?: string[];
}

export const ProjectCard = ({ title, description, link, index, image, category, tech, year, status, features }: ProjectCardProps) => {
  const isLive = status.toLowerCase() === "live";

  return (
    <div className="w-full flex flex-col group/card">
      <Inview
        mode="once"
        from={{ opacity: 0, y: 150, scale: 0.95 }}
        to={{ opacity: 1, y: 0, scale: 1 }}
        delayIn={100 + (index % 2) * 150}
        config={{ mass: 1, tension: 80, friction: 20 }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full group/image">
          {/* Image frame — full colour, whole screenshot visible, no filters */}
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-border bg-gradient-to-br from-white/[0.07] to-white/[0.02] mb-6 transition-all duration-500 ease-out group-hover/image:border-accent/50 group-hover/image:shadow-[0_20px_60px_-25px_var(--accent)] group-hover/image:-translate-y-1">
            {/* Shine sweep on hover */}
            <div className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 transition-transform duration-[1100ms] ease-out group-hover/image:translate-x-full motion-reduce:hidden" />

            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-contain p-3 transition-transform duration-[900ms] ease-out group-hover/image:scale-[1.04]"
            />

            {/* Category + status chips */}
            <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-black/70 border border-white/15 text-[10px] font-mono tracking-widest uppercase text-white backdrop-blur">
                {category}
              </span>
              <span className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase backdrop-blur border ${isLive ? "bg-accent/90 border-accent text-white" : "bg-black/70 border-white/15 text-white/80"}`}>
                {isLive && <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-1.5 align-middle animate-pulse" />}
                {status}
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="flex justify-between items-start w-full gap-6">
            <div className="flex flex-col max-w-[78%]">
              <h3 className="text-xl md:text-3xl font-bold tracking-tight text-foreground mb-3 group-hover/image:text-accent transition-colors duration-[var(--duration-normal)] flex items-start gap-2">
                {title}
                <FiArrowUpRight className="w-5 h-5 mt-1.5 shrink-0 opacity-0 -translate-x-2 translate-y-2 group-hover/image:opacity-100 group-hover/image:translate-x-0 group-hover/image:translate-y-0 transition-all duration-300" />
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed mb-4">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span key={t} className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-muted border border-border rounded-full px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end shrink-0 pt-1">
              <span className="text-xs font-mono tracking-widest text-muted mb-2">{year}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-accent">{status}</span>
            </div>
          </div>
        </a>

        {features && features.length > 0 && (
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 border-t border-border pt-6" aria-label={`${title} capabilities`}>
            {features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm text-muted leading-snug">
                <FiCheck className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}
      </Inview>
    </div>
  );
};
