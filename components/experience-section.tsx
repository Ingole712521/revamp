"use client"

import { EXPERIENCES, SOCIALS } from "@/lib/constants";
import { motion, AnimatePresence } from "motion/react";
import {
    Briefcase,
    Calendar,
    ChevronDown,
    MapPin,
    Linkedin,
    Github,
    Twitter,
    Mail,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function ExperienceSection() {
    return (
        <section id="work" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <h2 className="mb-12 text-center text-3xl md:text-4xl font-black text-black dark:text-white">
                Professional Path
            </h2>

            <div className="space-y-4 px-4 md:px-0">
                {EXPERIENCES.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 1 }}
                        className="mb-4"
                    >
                        <ExperienceCard exp={exp} />
                    </motion.div>
                ))}
            </div>

            {/* Background Video with Hover Popup */}
            <VideoWithSocialLinks />
        </section>
    );
}

function VideoWithSocialLinks() {
    const [isHovered, setIsHovered] = useState(false);

    const socialItems = [
        { key: 'linkedin', icon: Linkedin, data: SOCIALS.linkedin },
        { key: 'github', icon: Github, data: SOCIALS.github },
        { key: 'twitter', icon: Twitter, data: SOCIALS.twitter },
        { key: 'email', icon: Mail, data: SOCIALS.email },
    ];

    return (
        <div
            className="fixed bottom-6 right-6 z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          
            <div className="w-50 h-38 rounded-2xl overflow-hidden shadow-2xl">
                <video
                    src="/Video Project.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Social Links Popup on Hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full right-0 mb-2 w-72 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                    >
                        <div className="p-3 border-b border-zinc-100 dark:border-zinc-800">
                            <h3 className="text-sm font-black text-black dark:text-white uppercase tracking-widest">
                                Connect With Me
                            </h3>
                        </div>
                        <div className="p-2">
                            {socialItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.key}
                                        href={item.data.url}
                                        target={item.key === 'email' ? '_self' : '_blank'}
                                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-colors">
                                            <Icon className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-black dark:text-white">
                                                {item.data.label}
                                            </p>
                                            <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                                                {item.data.preview}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ExperienceCard({ exp }: { exp: any }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="experience-card group bg-zinc-100/10 dark:bg-zinc-800/20 border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-500">
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-5 md:p-6 cursor-pointer flex flex-col md:flex-row gap-4 items-start"
            >
                {/* Company Logo */}
                <div className="w-12 h-12 rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-inner">
                    {exp.logo ? (
                        <div className="relative w-full h-full p-2">
                            <Briefcase className="w-6 h-6 text-zinc-400" />
                        </div>
                    ) : (
                        <Briefcase className="w-6 h-6 text-zinc-400" />
                    )}
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">

                        <div className="flex items-center gap-2">
                            <h3 className="text-xl font-black text-black dark:text-white truncate">
                                {exp.company}
                            </h3>

                        </div>

                        {/* Date & Location */}
                        <div className="flex flex-col md:items-end gap-1 text-xs  text-zinc-800 dark:text-zinc-200 uppercase tracking-widest whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3 h-3" />
                                <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-300">
                                <MapPin className="w-3 h-3" />
                                <span>{exp.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Role & Toggle */}
                    <div className="flex items-center justify-between">
                        <p className="text-sm  text-blue-600 dark:text-blue-400">
                            {exp.title}
                        </p>
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            className="bg-zinc-200 dark:bg-zinc-800 p-1.5 rounded-full hidden md:block"
                        >
                            <ChevronDown className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
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
                        transition={{ duration: 0.3, ease: "circOut" }}
                    >
                        <div className="px-5 md:px-6 pb-6 pt-3 border-t border-zinc-100/50 dark:border-zinc-800/50">
                            <div className="mb-6">
                                <h4 className="text-xs font-black text-black dark:text-white mb-3 flex items-center gap-2 uppercase tracking-widest">
                                    Technologies & Tools
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.techStack.map((tech: string, tIdx: number) => (
                                        <div
                                            key={tIdx}
                                            className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-blue-500/50 transition-all cursor-default group/tech"
                                        >
                                            <span className="text-xs text-black dark:text-white transition-colors">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {exp.points?.map((point: string, pIdx: number) => (
                                    <li key={pIdx} className="flex gap-2 text-zinc-800 dark:text-white leading-relaxed text-xs font-medium">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500/40 dark:bg-blue-500/60 flex-shrink-0" />
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