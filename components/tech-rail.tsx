"use client";

import { CORE_TECH } from "@/lib/constants";
import { getTechIcon } from "@/lib/icons";
import Image from "next/image";

export function TechRail() {
    return (
        <aside
            aria-label="Tech I use"
            className="pointer-events-none fixed top-1/2 left-3 z-40 hidden -translate-y-1/2 xl:block"
        >
            <div className="pointer-events-auto flex w-14 flex-col items-center gap-2 rounded-2xl border border-zinc-200/80 bg-white/80 px-1.5 py-3 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/75">
                <p className="rotate-0 text-center text-[9px] font-medium leading-tight tracking-wide text-zinc-500">
                    Tech
                </p>
                {CORE_TECH.map((name) => {
                    const iconUrl = getTechIcon(name);
                    const isLocal = iconUrl.startsWith("/");
                    return (
                        <span
                            key={name}
                            title={name}
                            className="flex size-9 items-center justify-center rounded-xl border border-zinc-200/80 bg-zinc-50 transition-transform hover:scale-110 dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            {isLocal ? (
                                <span className="relative size-4">
                                    <Image
                                        src={iconUrl}
                                        alt={name}
                                        fill
                                        sizes="16px"
                                        className="object-contain"
                                    />
                                </span>
                            ) : (
                                <img
                                    src={iconUrl}
                                    alt={name}
                                    width={16}
                                    height={16}
                                    className="size-4 object-contain dark:invert-0"
                                />
                            )}
                        </span>
                    );
                })}
            </div>
        </aside>
    );
}
