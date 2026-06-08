"use client";

import { useGmailRedirect } from "@/components/gmail-redirect-provider";
import {
    formatVisitorNumber,
    getVisitorOrdinal,
    useVisitorCount,
} from "@/hooks/use-visitor-count";
import { FOOTER_NAV, HERO, SOCIALS } from "@/lib/constants";
import { motion } from "motion/react";
import {
    ArrowUpRight,
    Github,
    Linkedin,
    Mail,
    Sparkles,
    Twitter,
    Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SOCIAL_ITEMS = [
    { key: "github", icon: Github, url: SOCIALS.github.url, label: SOCIALS.github.label },
    { key: "linkedin", icon: Linkedin, url: SOCIALS.linkedin.url, label: SOCIALS.linkedin.label },
    { key: "twitter", icon: Twitter, url: SOCIALS.twitter.url, label: SOCIALS.twitter.label },
    { key: "youtube", icon: Youtube, url: SOCIALS.youtube.url, label: SOCIALS.youtube.label },
] as const;

function NavPill({
    href,
    label,
    external,
}: {
    href: string;
    label: string;
    external?: boolean;
}) {
    const className =
        "inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-900";

    const content = (
        <>
          {label}
          {external && <ArrowUpRight className="size-3.5 opacity-50" />}
        </>
    );

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {content}
            </a>
        );
    }

    return (
        <Link href={href} className={className}>
            {content}
        </Link>
    );
}

export function Footer() {
    const { count, isLoading } = useVisitorCount();
    const { requestGmailRedirect } = useGmailRedirect();
    const year = new Date().getFullYear();

    return (
        <footer className="mt-auto w-full shrink-0 px-4 pb-8 pt-4 md:px-6">
            <div className="section-container mx-auto overflow-hidden border-t-0 pb-8 pt-2">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-10 overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50 md:rounded-[2.5rem] md:p-10"
                >
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-yellow-400/20 blur-3xl"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-purple-500/15 blur-3xl"
                    />

                    <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-md">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-zinc-500 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-400">
                                <Sparkles className="size-3 text-yellow-500" />
                                Available for work
                            </div>
                            <h3 className="text-2xl font-black tracking-tight text-black md:text-3xl dark:text-white">
                                Let&apos;s build something great.
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                Open to frontend, DevOps, and cloud automation collaborations.
                            </p>
                        </div>

                        <Link
                            href="/#contact"
                            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-black px-6 py-3.5 text-sm font-black uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-black"
                        >
                            Get in touch
                            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="flex flex-col gap-8"
                >
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl border-2 border-zinc-200 shadow-lg dark:border-zinc-700">
                                <Image
                                    src={HERO.avatar}
                                    alt={HERO.name}
                                    fill
                                    className="object-cover"
                                />
                                <span className="absolute bottom-1 right-1 size-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-900" />
                            </div>
                            <div>
                                <p className="text-lg font-black text-black dark:text-white">
                                    {HERO.name.trim()}
                                </p>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    {HERO.role}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            {SOCIAL_ITEMS.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.key}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.label}
                                        className="group flex size-11 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/60 text-zinc-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-black hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-white"
                                    >
                                        <Icon className="size-[18px] transition-transform group-hover:scale-110" />
                                    </a>
                                );
                            })}
                            <button
                                type="button"
                                onClick={requestGmailRedirect}
                                aria-label={SOCIALS.email.label}
                                className="group flex size-11 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/60 text-zinc-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/50 hover:text-amber-600 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:text-amber-400"
                            >
                                <Mail className="size-[18px] transition-transform group-hover:scale-110" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {FOOTER_NAV.map((link) => (
                            <NavPill
                                key={link.label}
                                href={link.href}
                                label={link.label}
                                external={link.external}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80 md:flex-row md:items-center md:justify-between">
                        <p className="text-sm text-zinc-500 dark:text-zinc-500">
                            © {year}{" "}
                            <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                                {HERO.name.trim()}
                            </span>
                        </p>

                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200/80 bg-white/50 px-4 py-2 text-xs font-medium text-zinc-600 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400">
                            {isLoading ? (
                                <span className="inline-block h-3 w-24 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
                            ) : (
                                <>
                                    <span className="size-1.5 rounded-full bg-emerald-500" />
                                    Guest{" "}
                                    <span className="font-bold text-black dark:text-white">
                                        {count
                                            ? `#${formatVisitorNumber(count)}`
                                            : "#---"}
                                    </span>
                                    {count ? getVisitorOrdinal(count) : ""}
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
