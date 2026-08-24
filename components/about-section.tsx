"use client";

import { ABOUT_SNAPSHOT, BIO, SKILLS_CATEGORIES } from "@/lib/constants";
import { SectionHeading } from "@/components/section-heading";
import { TechBadge } from "@/components/tech-badge";
import { motion } from "motion/react";

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
                className="space-y-4 max-w-[65ch]"
            >
                {BIO.map((paragraph) => (
                    <p
                        key={paragraph}
                        className="text-pretty text-[15px] leading-[1.7] text-zinc-600 md:text-base dark:text-zinc-400"
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
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                    Snapshot
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                    {ABOUT_SNAPSHOT.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-2.5 text-[15px] leading-snug text-zinc-700 dark:text-zinc-300"
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

            <div id="skills" className="mt-10 scroll-mt-28">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                    Skills
                </p>
                <div className="flex flex-wrap gap-2">
                    {SKILLS_CATEGORIES.flatMap((cat) => cat.skills).map(
                        (skill) => (
                            <TechBadge key={skill} name={skill} />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
