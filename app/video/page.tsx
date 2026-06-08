"use client";

import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { Oneko } from "@/components/oneko";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Lamphome } from "@/components/ui/lamphome";
import { NAVIGATION_LINKS, PORTFOLIO_VIDEOS, VIDEO_PAGE } from "@/lib/constants";
import { motion } from "motion/react";

export default function VideoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white dark:bg-black transition-colors duration-500 overflow-x-hidden">
      <CustomCursor />
      <Oneko />
      <Lamphome
        title={VIDEO_PAGE.title}
        description={VIDEO_PAGE.description}
        navItems={NAVIGATION_LINKS}
      >
        <div className="max-w-4xl w-full px-6 flex flex-col items-center gap-12 pb-16">
          {PORTFOLIO_VIDEOS.map((video, index) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="w-full"
            >
              <h2 className="mb-4 text-lg font-bold text-zinc-900 dark:text-zinc-100 md:text-xl">
                {video.title}
              </h2>
              <HeroVideoDialog
                animationStyle="from-center"
                videoSrc={video.videoSrc}
                thumbnailSrc={video.thumbnailSrc}
                thumbnailAlt={video.thumbnailAlt}
                className="w-full"
              />
            </motion.article>
          ))}
          <Footer />
        </div>
      </Lamphome>
    </main>
  );
}
