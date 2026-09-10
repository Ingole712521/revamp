"use client";

import { HERO, SOCIALS } from "@/lib/constants";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { useGmailRedirect } from "@/components/gmail-redirect-provider";
import { HeroWallpaper } from "@/components/hero-wallpaper";
import { MagneticButton } from "@/components/magnetic-button";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

function TypedRole({ text }: { text: string }) {
    const [shown, setShown] = useState("");

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
            setShown(text);
            return;
        }

        setShown("");
        let i = 0;
        const id = window.setInterval(() => {
            i += 1;
            setShown(text.slice(0, i));
            if (i >= text.length) window.clearInterval(id);
        }, 38);

        return () => window.clearInterval(id);
    }, [text]);

    return (
        <p className="mt-1.5 min-h-5 text-[15px] font-normal leading-snug text-zinc-500 dark:text-zinc-400">
            {shown}
            <span
                className="hero-caret ml-0.5 inline-block h-3.5 w-0.5 translate-y-px bg-emerald-600 align-middle dark:bg-emerald-400"
                aria-hidden
            />
        </p>
    );
}

function KineticName({ name }: { name: string }) {
    const reduce = useReducedMotion();

    return (
        <h1 className="text-balance text-[2.05rem] font-semibold leading-[1.1] tracking-[-0.05em] text-zinc-950 sm:text-[2.6rem] md:text-[3.15rem] dark:text-white">
            {name.split("").map((char, index) => (
                <span key={`${char}-${index}`} className="inline-block overflow-hidden pb-1 align-bottom">
                    <motion.span
                        className="inline-block"
                        initial={reduce ? false : { y: "108%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            duration: 0.72,
                            delay: 0.18 + index * 0.028,
                            ease: EASE_OUT_EXPO,
                        }}
                    >
                        {char === " " ? "\u00a0" : char}
                    </motion.span>
                </span>
            ))}
        </h1>
    );
}

const SOCIAL_HOVER: Record<string, string> = {
    github: "hover:scale-110 hover:border-zinc-400 hover:text-zinc-950 dark:hover:text-white",
    linkedin: "hover:scale-110 hover:border-[#0A66C2]/40 hover:text-[#0A66C2]",
    twitter: "hover:scale-110 hover:border-sky-400/50 hover:text-sky-500",
    youtube: "hover:scale-110 hover:border-red-400/50 hover:text-red-600",
    hashnode: "hover:scale-110 hover:border-blue-400/50 hover:text-[#2962FF]",
    email: "hover:scale-110 hover:border-emerald-400/50 hover:text-emerald-600",
};

const socialButtonClass =
    "inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-[transform,color,border-color,background-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 motion-reduce:transform-none dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:focus-visible:outline-white";

export function HeroSection({ onResumeClick }: { onResumeClick: () => void }) {
    const { requestGmailRedirect } = useGmailRedirect();
    const reduce = useReducedMotion();

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
            className="section-container border-t-0 pt-4 pb-16 md:pt-6 md:pb-24"
        >
            <motion.div
                initial={reduce ? false : { opacity: 0.35, clipPath: "inset(10% 6% 14% 6% round 0px)" }}
                animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 0px)" }}
                transition={{ duration: 1.05, ease: EASE_OUT_EXPO }}
                className="relative -mx-6 overflow-hidden border-y border-zinc-200/70 dark:border-zinc-800/80"
            >
                <div className="relative h-64 w-full overflow-hidden sm:h-80 md:h-96">
                    <HeroWallpaper />
                </div>
            </motion.div>

            <div className="relative z-10 -mt-10 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <motion.div
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22, duration: 0.55, ease: EASE_OUT_EXPO }}
                    className="flex items-end gap-4 sm:gap-5"
                >
                    <div className="rounded-2xl border border-white/80 bg-white/50 p-1 shadow-[0_12px_36px_rgba(15,23,42,0.12)] dark:border-zinc-800 dark:bg-zinc-950/40">
                        <div className="relative size-20 shrink-0 overflow-hidden rounded-[0.9rem] bg-zinc-200 sm:size-24 dark:bg-zinc-900">
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
                    </div>

                    <div className="min-w-0 pb-0.5">
                        <KineticName name={HERO.name} />
                        <TypedRole text={HERO.role} />
                        <p className="mt-1.5 flex items-center gap-1.5 text-sm font-normal text-zinc-500 dark:text-zinc-500">
                            <MapPin className="size-3.5 shrink-0" aria-hidden />
                            {HERO.location}
                        </p>
                    </div>
                </motion.div>

                <MagneticButton
                    onClick={onResumeClick}
                    className="group inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 py-2 pr-2 pl-4 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:focus-visible:outline-white"
                >
                    Resume
                    <span className="inline-flex size-7 items-center justify-center rounded-full bg-zinc-950 text-white transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px dark:bg-white dark:text-zinc-950">
                        <FileText className="size-3.5" aria-hidden />
                    </span>
                </MagneticButton>
            </div>

            <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.55, ease: EASE_OUT_EXPO }}
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
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, duration: 0.45, ease: EASE_OUT_EXPO }}
                className="mt-6 flex flex-wrap items-center gap-2.5"
            >
                {socialLinks.map(({ key, href, label, icon: Icon }, index) => (
                    <motion.li
                        key={key}
                        initial={reduce ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.56 + index * 0.04, duration: 0.35, ease: EASE_OUT_EXPO }}
                    >
                        <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className={`${socialButtonClass} ${SOCIAL_HOVER[key]}`}
                        >
                            <Icon className={iconClass} />
                        </Link>
                    </motion.li>
                ))}
                <li>
                    <button
                        type="button"
                        onClick={requestGmailRedirect}
                        aria-label={SOCIALS.email.label}
                        className={`${socialButtonClass} ${SOCIAL_HOVER.email}`}
                    >
                        <Mail className={iconClass} />
                    </button>
                </li>
            </motion.ul>
        </section>
    );
}
