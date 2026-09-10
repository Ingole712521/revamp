"use client";

import { TechBadge } from "@/components/tech-badge";
import { useReducedMotion } from "motion/react";

export function TechMarquee({ items, label }: { items: string[]; label: string }) {
    const reduce = useReducedMotion();
    const loop = reduce ? items : [...items, ...items];

    return (
        <div>
            <p className="mb-3 text-[13px] font-semibold text-zinc-800 dark:text-zinc-200">
                {label}
            </p>
            <div
                className={`relative ${reduce ? "" : "overflow-hidden mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"}`}
            >
                <div
                    className={
                        reduce
                            ? "flex flex-wrap gap-2"
                            : "flex w-max gap-2 py-1 will-change-transform animate-tech-marquee hover:[animation-play-state:paused]"
                    }
                    aria-hidden={!reduce}
                >
                    {loop.map((skill, index) => (
                        <TechBadge key={`${skill}-${index}`} name={skill} />
                    ))}
                </div>
            </div>
            {!reduce ? (
                <p className="sr-only">{items.join(", ")}</p>
            ) : null}
        </div>
    );
}
