"use client";

import { HERO } from "@/lib/constants";
import { motion } from "motion/react";
import Image from "next/image";
import { FileText, MapPin } from "lucide-react";

export function HeroSection({ onResumeClick }: { onResumeClick: () => void }) {
    return (
        <section
            id="home"
            className="section-container border-t-0 pt-4 md:pt-6"
        >
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative -mx-6 overflow-hidden border-y border-zinc-200/70 dark:border-zinc-800/80"
            >
                <div className="relative h-44 w-full sm:h-52 md:h-64">
                    <Image
                        src={HERO.banner}
                        alt=""
                        fill
                        priority
                        sizes="(max-width: 896px) 100vw, 896px"
                        className="object-cover object-center grayscale contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent dark:from-black/70" />
                </div>
            </motion.div>

            <div className="relative z-10 -mt-10 flex flex-col gap-5 sm:-mt-12 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.45 }}
                    className="flex items-end gap-4 sm:gap-5"
                >
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-xl border-2 border-white bg-zinc-200 shadow-lg sm:size-24 dark:border-zinc-950 dark:bg-zinc-900">
                        <Image
                            src={HERO.avatar}
                            alt={HERO.name}
                            fill
                            priority
                            className="object-cover"
                        />
                        <span
                            className="absolute bottom-1.5 right-1.5 size-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-950"
                            aria-hidden
                        />
                    </div>

                    <div className="min-w-0 pb-0.5">
                        <h1 className="text-balance text-[1.85rem] leading-[1.1] tracking-[-0.03em] text-zinc-950 sm:text-4xl md:text-[2.65rem] dark:text-white">
                            {HERO.name}
                        </h1>
                        <p className="mt-1.5 text-[15px] leading-snug text-zinc-600 dark:text-zinc-400">
                            {HERO.role}
                        </p>
                        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-500">
                            <MapPin className="size-3.5 shrink-0" aria-hidden />
                            {HERO.location}
                        </p>
                    </div>
                </motion.div>

                <motion.button
                    type="button"
                    onClick={onResumeClick}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-300 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
                >
                    <FileText className="size-3.5" aria-hidden />
                    Resume
                </motion.button>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mt-8 max-w-[65ch] text-pretty text-[15px] leading-[1.7] text-zinc-600 md:text-base dark:text-zinc-400"
            >
                {HERO.description}
            </motion.p>
        </section>
    );
}
