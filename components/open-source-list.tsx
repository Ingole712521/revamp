"use client";

import { OPEN_SOURCE_CONTRIBUTIONS } from "@/lib/constants";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const PROFILE_OSS_URL =
    "https://github.com/Ingole712521#--open-source-contributions";

export function OpenSourceList() {
    const merged = OPEN_SOURCE_CONTRIBUTIONS.filter((item) => item.status === "merged");
    const open = OPEN_SOURCE_CONTRIBUTIONS.filter((item) => item.status === "open");

    return (
        <div id="oss" className="mt-10 scroll-mt-28">
            <div className="mb-5">
                <h3 className="text-balance text-[length:var(--text-heading)] font-semibold leading-[1.3] tracking-[-0.015em] text-zinc-950 dark:text-white">
                    Open source
                </h3>
                <p className="mt-1 max-w-[65ch] text-pretty text-[0.9375rem] leading-[1.6] text-zinc-500 dark:text-zinc-400">
                    {merged.length} merged and {open.length} open pull requests in other repositories.
                </p>
                <a
                    href={PROFILE_OSS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2 inline-flex w-fit items-center gap-1 text-sm font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
                >
                    View on GitHub
                    <ArrowUpRight className="icon-nudge size-3.5" />
                </a>
            </div>

            <ContributionGroup label="Merged" items={merged} />
            <ContributionGroup label="Open" items={open} className="mt-6" />
        </div>
    );
}

function ContributionGroup({
    label,
    items,
    className = "",
}: {
    label: string;
    items: typeof OPEN_SOURCE_CONTRIBUTIONS;
    className?: string;
}) {
    return (
        <div className={className}>
            <p className="mb-2 text-[13px] font-medium leading-[1.4] text-zinc-500">
                {label}
            </p>
            <ul className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
                {items.map((item, index) => (
                    <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.28, delay: index * 0.03, ease: EASE_OUT_EXPO }}
                    >
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start justify-between gap-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white"
                        >
                            <div className="min-w-0">
                                <p className="truncate font-mono text-[12px] leading-5 text-zinc-500 dark:text-zinc-400">
                                    {item.repo}
                                </p>
                                <p className="mt-0.5 text-pretty text-sm font-medium leading-snug text-zinc-800 group-hover:text-zinc-950 dark:text-zinc-200 dark:group-hover:text-white">
                                    {item.title}
                                </p>
                            </div>
                            <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 tabular-nums text-[13px] font-medium text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-200">
                                #{item.pr}
                                <ArrowUpRight className="icon-nudge size-3.5" />
                            </span>
                        </a>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}
