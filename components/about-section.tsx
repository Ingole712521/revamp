"use client"

import React from 'react';
import { motion } from 'motion/react';
import { HERO, TECH_STACK } from '@/lib/constants';
import Image from 'next/image';

export function AboutSection() {
    return (
        <section id="bio" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <div className="mb-12">
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2 block">About</span>
                <h2>Me</h2>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-center md:items-stretch bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden p-8"
            >
                {/* Large Avatar Card */}
                <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-[2rem] overflow-hidden flex-shrink-0 shadow-2xl border-4 border-white dark:border-zinc-800 bg-yellow-400">
                    <Image
                        src={HERO.avatar}
                        alt={HERO.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col justify-center py-4 text-center md:text-left">
                    <h3 className="mb-6 uppercase tracking-tight">
                        {HERO.name}
                    </h3>
                    <p className="mb-10 max-w-xl">
                        I'm a dedicated <span className="font-bold text-blue-600 dark:text-blue-400">DevOps Engineer</span> and <span className="font-bold text-black dark:text-white">Full Stack Enthusiast</span>.
                        I love building high-performance automation systems and high-end technical architectures.
                        Focused on cloud scalability and minimalist design aesthetics.
                    </p>

                    <div>
                        <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4 block">Skills</span>
                        <div className="flex flex-wrap justify-center md:justify-start gap-5">
                            {TECH_STACK.slice(0, 8).map((skill) => (
                                <div
                                    key={skill}
                                    className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-sm group"
                                    title={skill}
                                >
                                    <span className="text-[10px] font-black group-hover:text-blue-500 transition-colors uppercase">{skill.substring(0, 2)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
