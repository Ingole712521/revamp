"use client";

import { Footer } from "@/components/footer";
import { VideoCard } from "@/components/video-card";
import { PORTFOLIO_VIDEOS, SOCIALS, VIDEO_PAGE } from "@/lib/constants";
import { motion } from "motion/react";
import { ExternalLink, Youtube } from "lucide-react";
import Link from "next/link";

export function VideosSection() {
  const [featuredVideo, ...restVideos] = PORTFOLIO_VIDEOS;

  return (
    <section className="section-container w-full border-t-0">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center md:mb-14"
      >
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Watch &amp; Learn
        </span>
        <h2 className="text-black dark:text-white">{VIDEO_PAGE.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base">
          {VIDEO_PAGE.description}
        </p>
      </motion.div>

      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {featuredVideo && (
          <VideoCard video={featuredVideo} idx={0} featured />
        )}
        {restVideos.map((video, idx) => (
          <VideoCard key={video.id} video={video} idx={idx + 1} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex justify-center"
      >
        <Link
          href={SOCIALS.youtube.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-black px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-blue-500/20 active:scale-95 dark:border-zinc-200 dark:bg-white dark:text-black"
        >
          <Youtube className="size-4" />
          <span>View YouTube Channel</span>
          <ExternalLink className="size-4" />
        </Link>
      </motion.div>

      <Footer />
    </section>
  );
}
