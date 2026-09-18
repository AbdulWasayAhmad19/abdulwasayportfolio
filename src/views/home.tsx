import React from "react";
import { portfolio } from "@/data/portfolio";
import { Hero } from "@/components/ui/hero";
import { StorySection } from "@/components/ui/story-section";
import { ClientProjectsSection } from "@/components/ui/client-projects-section";
import { StatsSection } from "@/components/ui/stats-section";
import { ExperienceSection, EducationSection } from "@/components/ui/experience-section";
import { SkillsMarquee } from "@/components/ui/skills-marquee";
import { SkillsBento } from "@/components/ui/skills-bento";
import { ServicesFlashcards } from "@/components/ui/services-flashcards";
// import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { Footer } from "@/components/ui/footer";
import { Inview } from "@/components/animation/springs/in-view";
import TextEngine from "spring-text-engine";

export const HomeView = () => {
  return (
    <main className="min-h-lvh flex flex-col items-center bg-background text-foreground overflow-hidden">
      <Hero />

      <StorySection />
      
      <ClientProjectsSection />

      <SkillsMarquee />
      <SkillsBento />

      <ServicesFlashcards />

      <StatsSection />


      <ExperienceSection />
      <EducationSection />

      {/* Enable once real client testimonials are added in testimonials-section.tsx */}
      {/* <TestimonialsSection /> */}

      <Footer />
    </main>
  );
};
