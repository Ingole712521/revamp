"use client"

import { EXPERIENCES } from "@/lib/constants";
import { motion, AnimatePresence } from "motion/react";
import {
    Briefcase,
    Calendar,
    ChevronDown,
    Globe,
    Linkedin,
    Twitter,
    Github,
    MapPin,
    ExternalLink
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function ExperienceSection() {
    return (
        <section id="work" className="w-full py-24 border-t border-zinc-100 dark:border-zinc-900">
            <h2 className="text-4xl font-black mb-16 text-center text-black dark:text-white uppercase tracking-tighter">
                Professional Path
            </h2>

            <div className="max-w-4xl mx-auto space-y-6 px-4">
                {EXPERIENCES.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.05 }}
                        transition={{
                            delay: idx * 0.1,
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                    >
                        <ExperienceCard exp={exp} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function ExperienceCard({ exp }: { exp: any }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="experience-card group bg-zinc-100/10 dark:bg-zinc-800/20 border border-zinc-200 dark:border-zinc-700 rounded-3xl overflow-hidden transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-500">
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row gap-6 items-start"
            >
                {/* Company Logo */}
                <div className="w-16 h-16 rounded-2xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-inner">
                    {exp.logo ? (
                        <div className="relative w-full h-full p-2">
                            <Briefcase className="w-8 h-8 text-zinc-400" />
                        </div>
                    ) : (
                        <Briefcase className="w-8 h-8 text-zinc-400" />
                    )}
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                        {/* Company & Socials */}
                        <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-black text-black dark:text-white truncate">
                                {exp.company}
                            </h3>
                            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-300">
                                {exp.socials?.website && <Globe className="w-4 h-4 hover:text-blue-500 transition-colors cursor-pointer" />}
                                {exp.socials?.linkedin && <Linkedin className="w-4 h-4 hover:text-blue-600 transition-colors cursor-pointer" />}
                                {exp.socials?.twitter && <Twitter className="w-4 h-4 hover:text-blue-400 transition-colors cursor-pointer" />}
                                {exp.socials?.github && <Github className="w-4 h-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer" />}
                            </div>
                        </div>

                        {/* Date & Location (Right side desktop) */}
                        <div className="flex flex-col md:items-end gap-1 text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-widest whitespace-nowrap">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                                <MapPin className="w-3.5 h-3.5" />
                                <span>{exp.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Role & Toggle */}
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            {exp.title}
                        </p>
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            className="bg-zinc-200 dark:bg-zinc-800 p-2 rounded-full hidden md:block"
                        >
                            <ChevronDown className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Collapsible Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                    >
                        <div className="px-6 md:px-8 pb-8 pt-2 border-t border-zinc-100/50 dark:border-zinc-800/50">
                            <div className="mb-8">
                                <h4 className="text-sm font-bold text-black dark:text-white mb-6 flex items-center gap-2">
                                    Technologies & Tools
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {exp.techStack.map((tech: string, tIdx: number) => (
                                        <div
                                            key={tIdx}
                                            className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center gap-2.5 hover:border-blue-500/50 transition-all cursor-default group/tech"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-blue-500/70 group-hover/tech:bg-blue-500 transition-colors shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                            <span className="text-sm font-bold text-black dark:text-white transition-colors">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {exp.points?.map((point: string, pIdx: number) => (
                                    <li key={pIdx} className="flex gap-4 text-zinc-800 dark:text-white leading-relaxed text-sm font-medium">
                                        <span className="mt-2 w-2 h-2 rounded-full bg-blue-500/40 dark:bg-blue-500/60 flex-shrink-0" />
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
