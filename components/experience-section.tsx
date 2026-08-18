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
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { useGmailRedirect } from "@/components/gmail-redirect-provider";

export function ExperienceSection() {
    return (
        <section id="work" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <div className="mb-12 text-center md:mb-14">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
                    Career Journey
                </span>
                <h2 className="text-balance text-black dark:text-white">
                    Professional Path
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 md:text-base">
                    Roles and projects that shaped my approach to frontend engineering, DevOps, and production-ready systems.
                </p>
            </div>

            <div className="space-y-4 px-4 md:px-0">
                {EXPERIENCES.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 1 }}
                        className="mb-4"
                    >
                        <ExperienceCard exp={exp} defaultExpanded={idx === 0} />
                    </motion.div>
                ))}
            </div>

            <VideoWithSocialLinks />
        </section>
    );
}

function VideoWithSocialLinks() {
    const [isHovered, setIsHovered] = useState(false);
    const { requestGmailRedirect } = useGmailRedirect();

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

            <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-4 border-white dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 transition-transform duration-300 hover:scale-105">
                <video
                    src="/Video Project.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center"
                />
            </div>

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
                            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-white">
                                Connect With Me
                            </h3>
                        </div>
                        <div className="p-2">
                            {socialItems.map((item) => {
                                const Icon = item.icon;
                                const isEmail = item.key === "email";
                                const className =
                                    "flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group w-full text-left";

                                const content = (
                                    <>
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
                                    </>
                                );

                                if (isEmail) {
                                    return (
                                        <button
                                            key={item.key}
                                            type="button"
                                            onClick={requestGmailRedirect}
                                            className={className}
                                        >
                                            {content}
                                        </button>
                                    );
                                }

                                return (
                                    <Link
                                        key={item.key}
                                        href={item.data.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={className}
                                    >
                                        {content}
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

function ExperienceCard({ exp, defaultExpanded = false }: { exp: any; defaultExpanded?: boolean }) {
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
        <div className="experience-card group bg-zinc-100/10 dark:bg-zinc-800/20 border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-500">
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-5 md:p-6 cursor-pointer flex flex-col md:flex-row gap-4 items-start"
            >
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-inner dark:border-zinc-700 dark:bg-zinc-900">
                    {logoSrc ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={logoSrc}
                                alt={exp.company}
                                fill
                                className={isAlief ? "object-contain p-1" : "object-cover"}
                            />
                        </div>
                    ) : (
                        <Briefcase className="w-6 h-6 text-zinc-400" />
                    )}
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">

                        <div className="flex items-center gap-2">
                            <h3 className="truncate text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                                {exp.company}
                            </h3>

                        </div>

                        <div className="flex flex-col gap-1 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-200 md:items-end">
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

                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
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
                                <h4 className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-white">
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
                                    <li key={pIdx} className="flex gap-2 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/40 dark:bg-blue-500/60" />
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