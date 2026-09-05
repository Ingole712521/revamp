"use client";

import { HERO, SOCIALS } from "@/lib/constants";
import { useGmailRedirect } from "@/components/gmail-redirect-provider";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
    FileText,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Twitter,
    Youtube,
} from "lucide-react";

function HashnodeIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className={className}
        >
            <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.95A3.95 3.95 0 1 1 15.95 12 3.95 3.95 0 0 1 12 15.95z" />
        </svg>
    );
}

export function HeroSection({ onResumeClick }: { onResumeClick: () => void }) {
    const { requestGmailRedirect } = useGmailRedirect();

    const socialLinks = [
        { key: "github", href: SOCIALS.github.url, label: SOCIALS.github.label, icon: Github },
        { key: "linkedin", href: SOCIALS.linkedin.url, label: SOCIALS.linkedin.label, icon: Linkedin },
        { key: "twitter", href: SOCIALS.twitter.url, label: SOCIALS.twitter.label, icon: Twitter },
        { key: "youtube", href: SOCIALS.youtube.url, label: SOCIALS.youtube.label, icon: Youtube },
        { key: "hashnode", href: SOCIALS.hashnode.url, label: SOCIALS.hashnode.label, icon: HashnodeIcon },
    ] as const;

    const iconClass = "size-4";

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
                        <h1 className="text-balance text-[1.85rem] font-semibold leading-[1.1] tracking-[-0.03em] text-zinc-950 sm:text-4xl md:text-[2.65rem] dark:text-white">
                            {HERO.name}
                        </h1>
                        <p className="mt-1.5 text-[15px] font-normal leading-snug text-zinc-500 dark:text-zinc-400">
                            {HERO.role}
                        </p>
                        <p className="mt-1.5 flex items-center gap-1.5 text-sm font-normal text-zinc-500 dark:text-zinc-500">
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

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mt-8 max-w-[65ch]"
            >
                <p className="text-pretty text-base leading-[1.7] text-zinc-800 md:text-[1.05rem] dark:text-zinc-200">
                    {HERO.headline}
                </p>
                <p className="mt-4 text-pretty text-[15px] leading-[1.7] text-zinc-500 md:text-base dark:text-zinc-400">
                    {HERO.subline}
                </p>
            </motion.div>

            <motion.ul
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
                className="mt-6 flex flex-wrap items-center gap-2.5"
            >
                {socialLinks.map(({ key, href, label, icon: Icon }) => (
                    <li key={key}>
                        <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-white"
                        >
                            <Icon className={iconClass} />
                        </Link>
                    </li>
                ))}
                <li>
                    <button
                        type="button"
                        onClick={requestGmailRedirect}
                        aria-label={SOCIALS.email.label}
                        className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-white"
                    >
                        <Mail className={iconClass} />
                    </button>
                </li>
            </motion.ul>
        </section>
    );
}
