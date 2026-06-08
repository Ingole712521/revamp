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
    Twitter,
    Youtube,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const SOCIAL_ITEMS = [
    {
        key: "github",
        icon: Github,
        url: SOCIALS.github.url,
        label: SOCIALS.github.label,
        hoverClass: "hover:border-zinc-400 hover:text-white dark:hover:border-zinc-300",
    },
    {
        key: "linkedin",
        icon: Linkedin,
        url: SOCIALS.linkedin.url,
        label: SOCIALS.linkedin.label,
        hoverClass: "hover:border-blue-500/60 hover:text-blue-400",
    },
    {
        key: "twitter",
        icon: Twitter,
        url: SOCIALS.twitter.url,
        label: SOCIALS.twitter.label,
        hoverClass: "hover:border-sky-500/60 hover:text-sky-400",
    },
    {
        key: "youtube",
        icon: Youtube,
        url: SOCIALS.youtube.url,
        label: SOCIALS.youtube.label,
        hoverClass: "hover:border-red-500/60 hover:text-red-400",
    },
] as const;

function FooterLinkItem({
    href,
    label,
    index,
    external,
}: {
    href: string;
    label: string;
    index: number;
    external?: boolean;
}) {
    const className =
        "group relative flex items-center gap-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white";

    const content = (
        <>
            <span className="w-5 shrink-0 font-mono text-[10px] font-bold tracking-tighter text-zinc-400 transition-colors group-hover:text-blue-500 dark:text-zinc-600 dark:group-hover:text-blue-400">
                {String(index + 1).padStart(2, "0")}
            </span>
            <span className="relative">
                {label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </span>
            {external && (
                <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-60" />
            )}
        </>
    );

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
            >
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
    const [year, setYear] = useState<number | null>(null);
    const { count, isLoading } = useVisitorCount();
    const { requestGmailRedirect } = useGmailRedirect();

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const midpoint = Math.ceil(FOOTER_NAV.length / 2);
    const navColumns = [
        FOOTER_NAV.slice(0, midpoint),
        FOOTER_NAV.slice(midpoint),
    ];

    return (
        <footer className="relative mt-20 w-full overflow-hidden">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgb(161 161 170 / 0.35) 1px, transparent 0)",
                    backgroundSize: "22px 22px",
                }}
            />

            <div className="relative h-px w-full bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="relative border-t border-zinc-200/80 bg-zinc-50/60 px-6 py-12 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-950/50 md:py-14">
                <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-[1.1fr_1.4fr_1fr] lg:gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <div className="relative inline-flex size-14 items-center justify-center">
                            <div className="absolute inset-0 animate-spin rounded-2xl border border-dashed border-zinc-300 animation-duration-[12s] dark:border-zinc-700" />
                            <div className="flex size-11 items-center justify-center rounded-xl border border-zinc-200 bg-white font-black tracking-tighter text-black shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-white">
                                NI
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-black tracking-tight text-black dark:text-white">
                                {HERO.name.trim()}
                            </p>
                            <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                                {HERO.role}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-500 dark:text-zinc-500">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                            </span>
                            Open to opportunities
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                    >
                        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-400 dark:text-zinc-500">
                            Explore
                        </p>
                        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                            {navColumns.map((column, colIdx) => (
                                <div key={colIdx} className="flex flex-col gap-0.5">
                                    {column.map((link, idx) => (
                                        <FooterLinkItem
                                            key={link.label}
                                            href={link.href}
                                            label={link.label}
                                            external={link.external}
                                            index={
                                                colIdx === 0
                                                    ? idx
                                                    : idx + midpoint
                                            }
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-400 dark:text-zinc-500">
                            Connect
                        </p>
                        <div className="grid grid-cols-3 gap-2.5 sm:max-w-[220px]">
                            {SOCIAL_ITEMS.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.key}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.label}
                                        className={`group flex aspect-square items-center justify-center rounded-xl border border-zinc-200/80 bg-white/80 text-zinc-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400 ${item.hoverClass} ${
                                            idx % 2 === 1 ? "sm:translate-y-1" : ""
                                        }`}
                                    >
                                        <Icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
                                    </a>
                                );
                            })}
                            <button
                                type="button"
                                onClick={requestGmailRedirect}
                                aria-label={SOCIALS.email.label}
                                className="group flex aspect-square items-center justify-center rounded-xl border border-zinc-200/80 bg-white/80 text-zinc-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500/60 hover:text-amber-500 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400 sm:translate-y-1"
                            >
                                <Mail className="size-4 transition-transform duration-300 group-hover:scale-110" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="mx-auto mt-12 max-w-4xl border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80">
                    <div className="flex flex-col gap-4 text-xs text-zinc-500 dark:text-zinc-500 md:flex-row md:items-center md:justify-between">
                        <p>
                            © {year ?? 2026}{" "}
                            <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                                {HERO.name.trim()}
                            </span>
                            . Crafted with Next.js &amp; Motion.
                        </p>

                        <div className="flex items-center gap-2 font-mono text-[11px] md:justify-end">
                            <span className="text-emerald-500/80">$</span>
                            <span className="text-zinc-400">visitor</span>
                            <span className="text-zinc-600 dark:text-zinc-400">—</span>
                            {isLoading ? (
                                <span className="inline-block h-3 w-20 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                            ) : (
                                <span className="text-zinc-600 dark:text-zinc-300">
                                    you&apos;re the{" "}
                                    <span className="font-bold text-black dark:text-white">
                                        {count
                                            ? `${formatVisitorNumber(count)}${getVisitorOrdinal(count)}`
                                            : "---"}
                                    </span>{" "}
                                    guest
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
