"use client"

import { QUOTES } from "@/lib/constants";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { SectionHeading } from "@/components/section-heading";
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
        }, 8000);
        return () => window.clearInterval(id);
    }, []);

    const quote = QUOTES[index];

    return (
        <section id="quotes" className="section-container border-t border-zinc-200/80 dark:border-zinc-800/80">
            <SectionHeading title="A thought I work by" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-6 md:p-8 dark:border-zinc-800 dark:bg-zinc-900/40">
                <Quote className="pointer-events-none absolute -top-2 -left-2 size-16 text-zinc-200/80 dark:text-zinc-800/80" />
                <AnimatePresence mode="wait">
                    <motion.blockquote
                        key={quote.text}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                        className="relative z-10"
                    >
                        <p className="mb-5 max-w-[65ch] text-pretty text-base font-normal leading-[1.6] text-zinc-600 italic dark:text-zinc-400">
                            &ldquo;{quote.text}&rdquo;
                        </p>
                        <footer className="flex items-center gap-3">
                            <div className="h-px w-6 bg-zinc-300 dark:bg-zinc-700" />
                            <cite className="text-[13px] font-medium not-italic leading-[1.4] text-zinc-500 dark:text-zinc-400">
                                {quote.author}
                            </cite>
                        </footer>
                    </motion.blockquote>
                </AnimatePresence>
            </div>
        </section>
    );
}
