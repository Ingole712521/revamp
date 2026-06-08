"use client"

import { Lamphome } from "@/components/ui/lamphome";
import { NAVIGATION_LINKS } from "@/lib/constants";
import React from "react";
import { HeroSection } from "@/components/hero-section";
import { ProofOfWorkSection } from "@/components/proof-of-work-section";
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
import { LoadingScreen } from "@/components/loading-screen";
import { hasSplashCompleted, markSplashCompleted } from "@/lib/splash-session";
import { useLayoutEffect, useState } from "react";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(() => !hasSplashCompleted());

  useLayoutEffect(() => {
    if (hasSplashCompleted()) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    markSplashCompleted();
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <main className="flex min-h-screen flex-col bg-white transition-colors duration-500 dark:bg-black overflow-x-hidden">
      <HashScroll enabled={!isLoading} />
      <CustomCursor />
      <Oneko />
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
        <div className="max-w-4xl w-full px-6 flex flex-col items-center">
          <HeroSection onResumeClick={() => setIsResumeOpen(true)} />
          <ExperienceSection />
          <ProofOfWorkSection />
          <ProjectsSection />
          <AboutSection />
          <GithubActivity />
          <BlogSection />
          <QuotesSection />
          <ContactSection />
        </div>
      </Lamphome>
      <Footer />
    </main>
  );
}
