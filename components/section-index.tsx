"use client";

import { INDEX_LINKS } from "@/lib/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SectionIndex() {
    const [activeId, setActiveId] = useState(INDEX_LINKS[0]?.id ?? "");

    useEffect(() => {
        const ids = INDEX_LINKS.map((item) => item.id).filter(Boolean);
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => Boolean(el));

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio,
                    );
                if (visible[0]?.target.id) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0.15, 0.35, 0.6],
            },
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <aside className="pointer-events-none fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 xl:block">
            <nav
                aria-label="Page index"
                className="pointer-events-auto w-36"
            >
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                    Index
                </p>
                <ul className="space-y-2">
                    {INDEX_LINKS.map((item) => {
                        const isActive = activeId === item.id;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-2 text-[13px] transition-colors ${
                                        isActive
                                            ? "text-zinc-950 dark:text-white"
                                            : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                                    }`}
                                >
                                    <span
                                        className={`h-px shrink-0 transition-all ${
                                            isActive
                                                ? "w-4 bg-zinc-950 dark:bg-white"
                                                : "w-2 bg-zinc-400 dark:bg-zinc-600"
                                        }`}
                                        aria-hidden
                                    />
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}
