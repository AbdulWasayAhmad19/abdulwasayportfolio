"use client";

import React, { useMemo, useState } from "react";
import TextEngine from "spring-text-engine";
import { Inview } from "@/components/animation/springs/in-view";
import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/project-card";

const ALL = "All";

/* Client Projects: every project, filterable by category, in the staggered two-column grid. */
export const ClientProjectsSection = () => {
  const categories = useMemo(() => [ALL, ...Array.from(new Set(portfolio.projects.map((p) => p.category)))], []);
  const [active, setActive] = useState<string>(ALL);
  const projects = useMemo(
    () => portfolio.projects.filter((p) => active === ALL || p.category === active),
    [active],
  );

  return (
    <section id="projects" className="w-full bg-background pt-32 pb-24 px-4 md:px-8 xl:px-24 border-t border-border mt-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10 md:mb-16">
          <div>
            <TextEngine
              tag="h2"
              className="text-[10vw] md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-foreground text-left max-w-4xl"
              lineIn={{ opacity: 1, y: 0 }}
              lineOut={{ opacity: 0, y: 40 }}
              lineStagger={100}
              lineConfig={{ duration: 800, tension: 100, friction: 30 }}
            >
              CLIENT PROJECTS.
            </TextEngine>
            <Inview mode="once" from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} delayIn={300}>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
                Live client websites, full-stack products, an AI surveillance system and the C++ project that started it
                all — {portfolio.projects.length} builds, every one shipped end to end.
              </p>
            </Inview>
          </div>
          <div className="hidden md:block text-xs font-mono tracking-widest text-muted uppercase mb-2">
            04 / {String(projects.length).padStart(2, "0")} PROJECTS
          </div>
        </div>

        {/* Category filter */}
        <Inview mode="once" from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} delayIn={400}>
          <div className="flex flex-wrap gap-2 mb-16 md:mb-24" role="tablist" aria-label="Filter projects by category">
            {categories.map((c) => {
              const on = c === active;
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-full border text-xs font-mono tracking-widest uppercase transition-colors duration-[var(--duration-normal)] active:scale-95 ${
                    on ? "bg-accent border-accent text-white" : "bg-transparent border-border text-muted hover:text-foreground hover:border-white/30"
                  }`}
                >
                  {c}
                  <span className="ml-2 opacity-60">
                    {c === ALL ? portfolio.projects.length : portfolio.projects.filter((p) => p.category === c).length}
                  </span>
                </button>
              );
            })}
          </div>
        </Inview>

        {/* Staggered two-column grid */}
        <div key={active} className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24 w-full">
          <div className="flex flex-col gap-16 md:gap-32 w-full md:w-1/2">
            {projects.filter((_, i) => i % 2 === 0).map((project, idx) => (
              <ProjectCard key={project.title} {...project} index={idx * 2} />
            ))}
          </div>
          <div className="flex flex-col gap-16 md:gap-32 w-full md:w-1/2 md:mt-48">
            {projects.filter((_, i) => i % 2 !== 0).map((project, idx) => (
              <ProjectCard key={project.title} {...project} index={idx * 2 + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
