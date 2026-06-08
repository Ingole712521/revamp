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
        "inline-flex items-center gap-1.5 rounded-full border border-violet-200/50 bg-white/40 px-4 py-2 text-sm font-semibold text-zinc-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/70 hover:bg-white/80 hover:shadow-md hover:shadow-violet-500/10 dark:border-violet-500/20 dark:bg-violet-500/5 dark:text-zinc-200 dark:hover:border-violet-400/40 dark:hover:bg-violet-500/10";

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
                    className="relative mb-10 overflow-hidden rounded-[2rem] p-px shadow-2xl shadow-purple-500/15 md:rounded-[2.5rem]"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-linear-to-br from-pink-500 via-violet-500 to-indigo-600"
                    />

                    <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-white/75 backdrop-blur-2xl dark:rounded-[calc(2.5rem-1px)] dark:bg-zinc-950/55 md:rounded-[calc(2.5rem-1px)]">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -right-10 -top-20 size-72 rounded-full bg-pink-500/35 blur-[90px]"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -bottom-24 -left-12 size-80 rounded-full bg-indigo-500/30 blur-[100px]"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/20 blur-[80px]"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(168,85,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.08) 1px, transparent 1px)",
                                backgroundSize: "28px 28px",
                            }}
                        />

                        <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                            <div className="max-w-md">
                                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-white/50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-violet-700 backdrop-blur-md dark:border-violet-500/25 dark:bg-violet-500/10 dark:text-violet-200">
                                    <Sparkles className="size-3 text-yellow-400" />
                                    Available for work
                                </div>
                                <h3 className="bg-linear-to-r from-zinc-900 via-violet-950 to-indigo-950 bg-clip-text text-2xl font-black tracking-tight text-transparent md:text-3xl dark:from-white dark:via-violet-100 dark:to-indigo-100">
                                    Let&apos;s build something great.
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                                    Open to frontend, DevOps, and cloud automation collaborations.
                                </p>
                            </div>

                            <Link
                                href="/#contact"
                                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-pink-500 via-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/35"
                            >
                                Get in touch
                                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
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

                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-200/50 bg-linear-to-r from-white/60 to-violet-50/50 px-4 py-2 text-xs font-medium text-zinc-600 backdrop-blur-md dark:border-violet-500/20 dark:from-violet-500/10 dark:to-indigo-500/10 dark:text-zinc-300">
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
