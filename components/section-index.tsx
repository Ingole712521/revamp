"use client";

import { INDEX_LINKS } from "@/lib/constants";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const MARKER = 128;

export function SectionIndex() {
    const [activeId, setActiveId] = useState(INDEX_LINKS[0]?.id ?? "");
    const lenis = useLenis();

    useEffect(() => {
        const ids = INDEX_LINKS.map((item) => item.id);

        const updateActive = () => {
            const elements = ids
                .map((id) => document.getElementById(id))
                .filter((el): el is HTMLElement => Boolean(el));

            if (elements.length === 0) return;

            let current = elements[0].id;
            for (const el of elements) {
                if (el.getBoundingClientRect().top - MARKER <= 0) {
                    current = el.id;
                }
            }
            setActiveId(current);
        };

        updateActive();

        if (!lenis) {
            window.addEventListener("scroll", updateActive, { passive: true });
            return () => window.removeEventListener("scroll", updateActive);
        }

        lenis.on("scroll", updateActive);
        return () => {
            lenis.off("scroll", updateActive);
        };
    }, [lenis]);

    return (
        <aside className="pointer-events-none absolute top-8 left-[calc(50%+29rem)] hidden h-[calc(100%-2rem)] w-32 xl:block">
            <nav
                aria-label="Page index"
                className="pointer-events-auto sticky top-28"
            >
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                    Index
                </p>
                <ul className="space-y-2.5">
                    {INDEX_LINKS.map((item) => {
                        const isActive = activeId === item.id;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`grid grid-cols-[1.25rem_minmax(0,1fr)] items-center text-[13px] leading-none transition-colors ${
                                        isActive
                                            ? "font-medium text-zinc-950 dark:text-white"
                                            : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                                    }`}
                                >
                                    <span
                                        className="flex h-px w-5 justify-start"
                                        aria-hidden
                                    >
                                        <span
                                            className={`h-px transition-all duration-200 ${
                                                isActive
                                                    ? "w-5 bg-zinc-950 dark:bg-white"
                                                    : "w-2.5 bg-zinc-500 dark:bg-zinc-600"
                                            }`}
                                        />
                                    </span>
                                    <span className="whitespace-nowrap">
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}
