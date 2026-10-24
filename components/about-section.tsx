"use client";

import { ABOUT_SNAPSHOT, BIO, PORTFOLIO_BUILD_NOTE, SKILLS_CATEGORIES, TECH_STACK } from "@/lib/constants";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { SectionHeading } from "@/components/section-heading";
import { TechBadge } from "@/components/tech-badge";
import { motion } from "motion/react";
import {
    ArrowUpRight,
    Cloud,
    Code2,
    Cpu,
    Database,
    GitBranch,
    Monitor,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

const CATEGORY_ICONS = {
    Frontend: Code2,
    Cloud: Cloud,
    DevOps: Cpu,
    "Version Control": GitBranch,
    OS: Monitor,
    Data: Database,
    "AI Tools": Sparkles,
} as const;

export function AboutSection() {
    return (
        <section
            id="bio"
            className="section-container border-t border-zinc-200/80 dark:border-zinc-800/80"
        >
            <SectionHeading title="About" />

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                className="max-w-[65ch] space-y-4"
            >
                {BIO.map((paragraph) => (
                    <p
                        key={paragraph}
                        className="text-pretty text-[15px] leading-[1.7] text-zinc-500 md:text-base dark:text-zinc-400"
                    >
                        {paragraph}
                    </p>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 md:p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
                <p className="mb-4 text-[13px] font-medium text-zinc-500">
                    Snapshot
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                    {ABOUT_SNAPSHOT.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-2.5 text-[15px] leading-snug text-zinc-600 dark:text-zinc-400"
                        >
                            <span
                                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500"
                                aria-hidden
                            />
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 md:p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
                <p className="mb-2 text-[13px] font-medium text-zinc-800 dark:text-zinc-200">
                    {PORTFOLIO_BUILD_NOTE.title}
                </p>
                <p className="max-w-[65ch] text-pretty text-[15px] leading-[1.7] text-zinc-500 dark:text-zinc-400">
                    {PORTFOLIO_BUILD_NOTE.body}
                </p>
                <Link
                    href={PORTFOLIO_BUILD_NOTE.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-zinc-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:text-zinc-200 dark:focus-visible:outline-white"
                >
                    View the repo
                    <ArrowUpRight className="icon-nudge size-3.5" />
                </Link>
            </motion.div>

            <div id="skills" className="mt-10 scroll-mt-28 space-y-7">
                <div>
                    <p className="mb-3 text-[13px] font-semibold leading-[1.4] text-zinc-800 dark:text-zinc-200">
                        Tech I use
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {TECH_STACK.map((skill) => (
                            <TechBadge key={skill} name={skill} />
                        ))}
                    </div>
                </div>
                {SKILLS_CATEGORIES.map((category) => {
                    const Icon =
                        CATEGORY_ICONS[category.title as keyof typeof CATEGORY_ICONS] ?? Code2;
                    return (
                        <div key={category.title}>
                            <p className={`mb-3 flex items-center gap-2 text-[13px] font-semibold ${category.accent}`}>
                                <Icon className="size-3.5" aria-hidden />
                                {category.title}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <TechBadge key={skill} name={skill} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
