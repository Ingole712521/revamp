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
    Briefcase,
    Github,
    Linkedin,
    Mail,
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
        "inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-600 transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100";

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
                    className="relative mb-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] md:rounded-3xl"
                >
                    <div
                        aria-hidden
                        className="h-1 w-full bg-linear-to-r from-slate-700 via-slate-500 to-slate-700 dark:from-slate-400 dark:via-slate-600 dark:to-slate-400"
                    />

                    <div className="relative overflow-hidden">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-linear-to-br from-slate-50/80 via-white to-zinc-50/50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -right-20 top-0 size-64 rounded-full bg-slate-200/40 blur-3xl dark:bg-slate-700/15"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(100,116,139,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.06) 1px, transparent 1px)",
                                backgroundSize: "32px 32px",
                            }}
                        />

                        <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                            <div className="max-w-md">
                                <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-slate-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
                                    <Briefcase className="size-3 text-slate-500 dark:text-slate-400" />
                                    <span className="size-1.5 rounded-full bg-emerald-500" />
                                    Available for work
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl dark:text-white">
                                    Let&apos;s build something great.
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    Open to frontend, DevOps, and cloud automation collaborations.
                                </p>
                            </div>

                            <Link
                                href="/#contact"
                                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-all hover:bg-slate-800 dark:border-slate-200 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
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
                            <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-zinc-200 shadow-sm dark:border-zinc-700">
                                <Image
                                    src={HERO.avatar}
                                    alt={HERO.name}
                                    fill
                                    className="object-cover"
                                />
                                <span className="absolute bottom-1 right-1 size-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-900" />
                            </div>
                            <div>
                                <p className="text-lg font-bold text-slate-900 dark:text-white">
                                    {HERO.name.trim()}
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
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
                                        className="group flex size-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:text-slate-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-400 dark:hover:border-zinc-700 dark:hover:text-white"
                                    >
                                        <Icon className="size-[18px] transition-transform group-hover:scale-110" />
                                    </a>
                                );
                            })}
                            <button
                                type="button"
                                onClick={requestGmailRedirect}
                                aria-label={SOCIALS.email.label}
                                className="group flex size-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:text-slate-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-400 dark:hover:border-zinc-700 dark:hover:text-white"
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

                       
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
