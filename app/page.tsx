"use client"

import { Lamphome } from "@/components/ui/lamphome";
import { NAVIGATION_LINKS } from "@/lib/constants";
import React from "react";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { GithubActivity } from "@/components/github-activity";
import { BlogSection } from "@/components/blog-section";
import { AboutSection } from "@/components/about-section";
import { QuotesSection } from "@/components/quotes-section";
import { VisitorCount } from "@/components/visitor-count";
import { ContactSection } from "@/components/contact-section";
import { ResumeModal } from "@/components/resume-modal";
import { useState } from "react";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white dark:bg-black transition-colors duration-500 overflow-x-hidden">
      <CustomCursor />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl="/Nehal_Ingole_7397966719.pdf"
      />
      <Lamphome
        title=""
        description=""
        navItems={NAVIGATION_LINKS}
      >
        <div className="max-w-4xl w-full px-6 flex flex-col items-center">
          <HeroSection onResumeClick={() => setIsResumeOpen(true)} />
          <ExperienceSection />
          <ProjectsSection />
          <AboutSection />
          <GithubActivity />
          <BlogSection />
          <QuotesSection />
          <ContactSection />
          {/* <VisitorCount /> */}
          <Footer />
        </div>
      </Lamphome>
    </main>
  );
}
