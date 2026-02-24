"use client"

import React from 'react';
import { motion } from 'motion/react';
import { HERO, SKILLS_CATEGORIES } from '@/lib/constants';
import Image from 'next/image';

export function AboutSection() {
    return (
        <section id="bio" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <div className="mb-12">
                <span className=" text-zinc-500 dark:text-zinc-400 text-3xl font-bold uppercase tracking-widest mb-2 block">About Me</span>
                <h2 className="text-3xl md:text-4xl font-bold"></h2>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-8 items-center lg:items-center bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden p-6 lg:p-8 mb-16"
            >
                {/* Avatar - Shrunk size */}
                <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-2xl overflow-hidden flex-shrink-0 shadow-xl border-2 border-white dark:border-zinc-800 bg-yellow-400 group">
                    <Image
                        src={HERO.avatar}
                        alt={HERO.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                </div>

                {/* Content Area - Compact layout */}
                <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
                    <h3 className="mb-2 font-black text-2xl md:text-3xl">
                        {HERO.name}
                    </h3>

                    <p className="mb-4 text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        I'm a DevOps Engineer and Frontend Developer, passionate about building scalable cloud systems and clean, high-performance web experiences. I specialize in automation, modern infrastructure, and user-focused design.
                    </p>

                    <div className="mt-2">
                        <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest mb-3 block">Skills & Technologies</span>

                        {/* Smaller icon grid */}
                        <div className="flex flex-wrap gap-2 items-center justify-center lg:justify-start">
                            {SKILLS_CATEGORIES.flatMap(cat => cat.skills).map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-[10px] uppercase tracking-wider font-bold text-zinc-600 dark:text-zinc-400"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}