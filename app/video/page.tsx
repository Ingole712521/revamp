"use client";

import { CustomCursor } from "@/components/custom-cursor";
import { Oneko } from "@/components/oneko";
import { Lamphome } from "@/components/ui/lamphome";
import { VideosSection } from "@/components/videos-section";
import { NAVIGATION_LINKS } from "@/lib/constants";

export default function VideoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden bg-white transition-colors duration-500 dark:bg-black">
      <CustomCursor />
      <Oneko />
      <Lamphome title="" description="" navItems={NAVIGATION_LINKS}>
        <VideosSection />
      </Lamphome>
    </main>
  );
}
