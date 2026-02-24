"use client"

import { QUOTES } from "@/lib/constants";
import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

export function QuotesSection() {
    const [quote, setQuote] = useState(QUOTES[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * QUOTES.length);
        setQuote(QUOTES[randomIndex]);
    }, []);

    return (
        <section id="quotes" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-10 md:p-16 rounded-[2.5rem] bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 overflow-hidden"
            >
                {/* Decorative Quote Icon */}
                <Quote className="absolute -top-4 -left-4 w-32 h-32 text-zinc-200/50 dark:text-zinc-800/50 -rotate-12 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center md:items-start">
                    <p className="text-xl md:text-xl font-medium text-zinc-900 dark:text-zinc-100 italic leading-relaxed mb-8 text-center md:text-left">
                        "{quote.text}"
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                        <span className="text-zinc-500 underline dark:text-zinc-400 font-bold uppercase tracking-[0.2em] text-sm">
                            {quote.author}
                        </span>
                    </div>
                </div>

                {/* Grid Pattern Subtlety */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
            </motion.div>
        </section>
    );
}
