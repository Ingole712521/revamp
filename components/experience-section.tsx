"use client"

import { EXPERIENCES } from "@/lib/constants";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { SectionHeading } from "@/components/section-heading";
import { motion, AnimatePresence } from "motion/react";
import {
    Briefcase,
    Calendar,
    ChevronDown,
    MapPin,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

type Experience = (typeof EXPERIENCES)[number];

export function ExperienceSection() {
    return (
        <section
            id="work"
            className="section-container border-t border-zinc-200/80 dark:border-zinc-800/80"
        >
            <SectionHeading
                title="Experience"
                description="Roles that shaped how I ship frontend, DevOps, and production systems."
            />

            <div className="relative pl-8 md:pl-10">
                <div
                    aria-hidden
                    className="absolute top-3 bottom-3 left-1 w-px bg-zinc-200 dark:bg-zinc-800"
                />
                <motion.div
                    aria-hidden
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.15, ease: EASE_OUT_EXPO }}
                    className="absolute top-3 bottom-3 left-1 origin-top w-px bg-emerald-500/70 dark:bg-emerald-400/60"
                />
                <div className="space-y-5">
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            className="relative"
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ delay: index * 0.08, duration: 0.5, ease: EASE_OUT_EXPO }}
                        >
                            <span
                                aria-hidden
                                className="absolute -left-8 top-8 size-2.5 rounded-full border-2 border-emerald-500 bg-white md:-left-10 dark:border-emerald-400 dark:bg-zinc-950"
                            />
                            <ExperienceCard exp={exp} defaultExpanded />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExperienceCard({ exp, defaultExpanded = false }: { exp: Experience; defaultExpanded?: boolean }) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    const { resolvedTheme } = useTheme();

    const logoSrc =
        exp.company === "Alief View Media Group"
            ? resolvedTheme === "dark"
                ? "/alifview-logo.png"
                : "/lightmodeofalifview.png"
            : exp.logo;
    const isAlief = exp.company === "Alief View Media Group";

    return (
        <div className="experience-card group overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100/10 transition-[border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-zinc-400 hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-800/20 dark:hover:border-zinc-500">
            <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                className="flex w-full cursor-pointer flex-col items-start gap-4 p-5 text-left md:flex-row md:p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white"
            >
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-inner dark:border-zinc-700 dark:bg-zinc-900">
                    {logoSrc ? (
                        <div className="relative h-full w-full">
                            <Image
                                src={logoSrc}
                                alt={exp.company}
                                fill
                                className={isAlief ? "object-contain p-1" : "object-cover"}
                            />
                        </div>
                    ) : (
                        <Briefcase className="h-6 w-6 text-zinc-400" />
                    )}
                </div>

                <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-col justify-between gap-3 md:flex-row md:items-center">
                        <h3 className="truncate text-base font-semibold tracking-tight text-zinc-950 md:text-lg dark:text-white">
                            {exp.company}
                        </h3>
                        <div className="flex flex-col gap-1 whitespace-nowrap text-sm font-normal text-zinc-500 md:items-end dark:text-zinc-400">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="h-3 w-3" />
                                <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-300">
                                <MapPin className="h-3 w-3" />
                                <span>{exp.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
                            {exp.title}
                        </p>
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            className="hidden rounded-full bg-zinc-200 p-1.5 md:block dark:bg-zinc-800"
                        >
                            <ChevronDown className="h-4 w-4 text-zinc-600 dark:text-zinc-300" />
                        </motion.div>
                    </div>
                </div>
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                    >
                        <div className="border-t border-zinc-100/50 px-5 pt-3 pb-6 md:px-6 dark:border-zinc-800/50">
                            <div className="mb-5">
                                <h4 className="mb-3 text-[13px] font-medium text-zinc-700 dark:text-zinc-300">
                                    Technologies & Tools
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.techStack.map((tech: string) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-zinc-200/90 bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {exp.points?.map((point: string) => (
                                    <li key={point} className="flex gap-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
