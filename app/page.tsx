"use client";

import { Lamphome } from "@/components/ui/lamphome";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { Oneko } from "@/components/oneko";
import { GithubActivity } from "@/components/github-activity";
import { BlogSection } from "@/components/blog-section";
import { AboutSection } from "@/components/about-section";
import { QuotesSection } from "@/components/quotes-section";
import { ContactSection } from "@/components/contact-section";
import { ResumeModal } from "@/components/resume-modal";
import { HashScroll } from "@/components/hash-scroll";
import { FloatingAvatar } from "@/components/floating-avatar";
import { TechRail } from "@/components/tech-rail";
import { SectionReveal } from "@/components/section-reveal";
import { useState } from "react";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-transparent">
      <HashScroll />
      <CustomCursor />
      <Oneko />
      <FloatingAvatar />
      {/* <TechRail /> */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      <Lamphome
        title=""
        description=""
        navItems={NAVIGATION_LINKS}
        className="flex-1"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-stretch">
          <HeroSection onResumeClick={() => setIsResumeOpen(true)} />
          <SectionReveal>
            <ExperienceSection />
          </SectionReveal>
          <SectionReveal>
            <ProjectsSection />
          </SectionReveal>
          <SectionReveal>
            <AboutSection />
          </SectionReveal>
          <SectionReveal>
            <GithubActivity />
          </SectionReveal>
          <SectionReveal>
            <BlogSection />
          </SectionReveal>
          <SectionReveal>
            <QuotesSection />
          </SectionReveal>
          <SectionReveal>
            <ContactSection onResumeClick={() => setIsResumeOpen(true)} />
          </SectionReveal>
        </div>
      </Lamphome>
      <Footer />
    </main>
  );
}
