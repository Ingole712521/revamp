"use client";

import { HERO, SOCIALS } from "@/lib/constants";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { useGmailRedirect } from "@/components/gmail-redirect-provider";
import { HeroWallpaper } from "@/components/hero-wallpaper";
import { MagneticButton } from "@/components/magnetic-button";
import { motion, useReducedMotion } from "motion/react";
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

function KineticName({ name }: { name: string }) {
    const reduce = useReducedMotion();
    const words = name.split(" ");

    return (
        <h1
            aria-label={name}
            className="max-w-full font-semibold text-zinc-950 dark:text-white text-[clamp(2.6rem,7vw,6rem)] leading-none tracking-[-0.04em]"
        >
            {words.map((word, index) => (
                <span
                    key={`${word}-${index}`}
                    className="mr-[0.22em] inline-block overflow-hidden pb-[0.2em] align-bottom leading-[1.05] last:mr-0"
                >
                    <motion.span
                        className="inline-block"
                        initial={reduce ? false : { y: "108%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            duration: 0.7,
                            delay: 0.06 + index * 0.08,
                            ease: EASE_OUT_EXPO,
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </h1>
    );
}

const SOCIAL_HOVER: Record<string, string> = {
    github: "hover:scale-[1.06] hover:border-zinc-400 hover:text-zinc-950 dark:hover:text-white",
    linkedin: "hover:scale-[1.06] hover:border-[#0A66C2]/40 hover:text-[#0A66C2]",
    twitter: "hover:scale-[1.06] hover:border-sky-400/50 hover:text-sky-500",
    youtube: "hover:scale-[1.06] hover:border-red-400/50 hover:text-red-600",
    hashnode: "hover:scale-[1.06] hover:border-blue-400/50 hover:text-[#2962FF]",
    email: "hover:scale-[1.06] hover:border-emerald-400/50 hover:text-emerald-600",
};

const socialButtonClass =
    "pressable inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 motion-reduce:transform-none dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:focus-visible:outline-white";

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
            className="section-container border-t-0 pt-4 pb-12 md:pt-6 md:pb-16"
        >
            <div className="relative -mx-5 overflow-hidden border-y border-zinc-200/70 md:-mx-6 dark:border-zinc-800/80">
                <div className="relative h-28 w-full overflow-hidden sm:h-36">
                    <HeroWallpaper />
                </div>
            </div>

            <div className="relative z-10 mt-6 flex flex-wrap items-end gap-x-6 gap-y-3 sm:mt-8">
                <KineticName name={HERO.name} />
                <div className="mb-1 shrink-0 rounded-2xl border border-zinc-200 bg-white p-0.5 dark:border-zinc-800 dark:bg-zinc-950">
                    <div className="relative size-16 overflow-hidden rounded-[0.85rem] bg-zinc-200 sm:size-24 dark:bg-zinc-900">
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
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                    <p className="text-base font-medium text-zinc-800 dark:text-zinc-100">
                        {HERO.role}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                        <MapPin className="size-3.5 shrink-0" aria-hidden />
                        {HERO.location}
                    </p>
                </div>
                <MagneticButton
                    onClick={onResumeClick}
                    className="pressable group inline-flex w-fit items-center gap-2 rounded-full bg-emerald-800 py-1.5 pr-1.5 pl-4 text-sm font-medium text-white hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-950 dark:bg-emerald-800 dark:hover:bg-emerald-700 dark:focus-visible:outline-emerald-200"
                >
                    Resume
                    <span className="inline-flex size-7 items-center justify-center rounded-full bg-white text-emerald-800">
                        <FileText className="icon-nudge size-3.5" aria-hidden />
                    </span>
                </MagneticButton>
            </div>

            <div className="mt-7 max-w-[65ch]">
                <p className="text-pretty text-[0.9375rem] leading-[1.65] text-zinc-800 md:text-base dark:text-zinc-200">
                    {HERO.headline}
                </p>
                <p className="mt-3 text-pretty text-[0.9375rem] leading-[1.65] text-zinc-600 md:text-base dark:text-zinc-300">
                    {HERO.subline}
                </p>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-2.5">
                {socialLinks.map(({ key, href, label, icon: Icon }) => (
                    <li key={key}>
                        <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className={`${socialButtonClass} ${SOCIAL_HOVER[key]}`}
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
                        className={`${socialButtonClass} ${SOCIAL_HOVER.email}`}
                    >
                        <Mail className={iconClass} />
                    </button>
                </li>
            </ul>
        </section>
    );
}
