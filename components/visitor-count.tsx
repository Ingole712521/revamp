"use client";

import {
    formatVisitorNumber,
    getVisitorOrdinal,
    useVisitorCount,
} from "@/hooks/use-visitor-count";
import { motion } from "motion/react";
import { Eye } from "lucide-react";

export function VisitorCount() {
    const { count, isLoading } = useVisitorCount();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 mb-16 flex justify-center"
        >
            <div className="group flex cursor-default items-center gap-4 rounded-2xl border border-zinc-100 bg-zinc-50/80 px-6 py-3 shadow-sm backdrop-blur-sm transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700">
                <div className="flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
                    <Eye
                        className={`size-4 transition-colors ${isLoading ? "animate-pulse text-zinc-300" : "text-zinc-500 group-hover:text-blue-500 dark:text-zinc-400"}`}
                    />
                </div>
                {isLoading ? (
                    <div className="h-4 w-32 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
                ) : (
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                        You are the{" "}
                        <span className="text-lg font-black tracking-tight text-black dark:text-white">
                            {count ? formatVisitorNumber(count) : "---"}
                            <sup>{count ? getVisitorOrdinal(count) : "th"}</sup>
                        </span>{" "}
                        visitor
                    </p>
                )}
            </div>
        </motion.div>
    );
}
