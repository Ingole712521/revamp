"use client"

import { motion } from 'motion/react';
import { HERO, SKILLS_CATEGORIES } from '@/lib/constants';
import Image from 'next/image';
import { TechBadge } from '@/components/tech-badge';

export function AboutSection() {
    return (
        <section id="bio" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <div className="mb-12 text-center md:mb-14">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
                    Behind The Work
                </span>
                <h2 className="text-balance text-black dark:text-white">About Me</h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 md:text-base">
                    The mix of frontend craftsmanship, cloud automation, and product thinking that shapes how I build.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-8 items-center lg:items-center bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden p-6 lg:p-8 mb-16"
            >
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border-2 border-white bg-yellow-400 shadow-xl group md:h-40 md:w-40 dark:border-zinc-800">
                    <Image
                        src={HERO.avatar}
                        alt={HERO.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                </div>

                <div className="flex flex-1 flex-col justify-center text-center lg:text-left">
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-3xl">
                        {HERO.name}
                    </h3>

                    <p className="mb-4 text-base leading-8 text-zinc-600 dark:text-zinc-300">
                        I'm a DevOps Engineer and Frontend Developer, passionate about building scalable cloud systems and clean, high-performance web experiences. I specialize in automation, modern infrastructure, and user-focused design.
                    </p>

                    <div id="skills" className="mt-2 scroll-mt-28">
                        <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">Skills & Technologies</span>

                        <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                            {SKILLS_CATEGORIES.flatMap((cat) => cat.skills).map((skill) => (
                                <TechBadge key={skill} name={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}