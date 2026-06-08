"use client";

import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import type { PortfolioVideo } from "@/lib/constants";
import { motion } from "motion/react";
import { ExternalLink, Play } from "lucide-react";
import Link from "next/link";

export function VideoCard({
  video,
  idx,
  featured = false,
}: {
  video: PortfolioVideo;
  idx: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: idx * 0.08, duration: 0.5 }}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/40 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 ${
          featured ? "p-6 md:p-8" : "p-4 md:p-5"
        }`}
      >
        <div
          className="relative z-10 w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 shadow-2xl transition-all duration-500 ease-out group-hover:transform-none dark:border-white/20"
          style={{
            transform: featured
              ? "perspective(1000px) rotateX(10deg) rotateY(-12deg) rotateZ(1deg) scale(1.02)"
              : "perspective(1000px) rotateX(12deg) rotateY(-16deg) rotateZ(1.5deg) scale(1.03)",
          }}
        >
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-zinc-900 px-3 py-2">
            <div className="size-2.5 rounded-full bg-red-500/80" />
            <div className="size-2.5 rounded-full bg-yellow-500/80" />
            <div className="size-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 truncate text-[10px] font-medium uppercase tracking-widest text-zinc-500">
              youtube.com
            </span>
          </div>

          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc={video.videoSrc}
            thumbnailSrc={video.thumbnailSrc}
            thumbnailAlt={video.thumbnailAlt}
            compact
            className="w-full [&_img]:rounded-none [&_img]:border-0 [&_img]:shadow-none"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
          <Play className="size-3 fill-white" />
          Click to play
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "p-8" : "p-6"}`}>
        <div className="mb-4 flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className={`mb-3 font-bold leading-tight text-black transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {video.title}
        </h3>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {video.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-zinc-100 pt-5 dark:border-zinc-800/50">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            Video {idx + 1} of 5
          </span>
          <Link
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-black text-black transition-all hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
          >
            <span>YouTube</span>
            <ExternalLink className="size-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
