"use client"

import { QUOTES } from "@/lib/constants";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { AnimatePresence, motion } from "motion/react";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

export function QuotesSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(Math.floor(Math.random() * QUOTES.length));
    }, []);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) return;
        const id = window.setInterval(() => {
            setIndex((current) => (current + 1) % QUOTES.length);
        }, 7000);
        return () => window.clearInterval(id);
    }, []);

    const quote = QUOTES[index];

    return (
        <section id="quotes" className="section-container border-t border-zinc-200/80 dark:border-zinc-800/80">
            <h2 className="mb-8 text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-zinc-950 md:mb-10 md:text-4xl dark:text-white">
                A thought I work by
            </h2>
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-zinc-50/70 p-10 md:p-16 dark:border-zinc-800 dark:bg-zinc-900/40">
                <Quote className="absolute -top-3 -left-3 size-24 text-zinc-200/70 dark:text-zinc-800/70 pointer-events-none" />
                <AnimatePresence mode="wait">
                    <motion.blockquote
                        key={quote.text}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                        className="relative z-10"
                    >
                        <p className="mb-8 max-w-[65ch] text-pretty text-lg font-normal leading-[1.6] text-zinc-600 italic md:text-xl dark:text-zinc-400">
                            &ldquo;{quote.text}&rdquo;
                        </p>
                        <footer className="flex items-center gap-4">
                            <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                            <cite className="text-sm font-medium not-italic text-zinc-500 dark:text-zinc-400">
                                {quote.author}
                            </cite>
                        </footer>
                    </motion.blockquote>
                </AnimatePresence>
            </div>
        </section>
    );
}
