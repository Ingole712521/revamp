"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Eye } from 'lucide-react';

export function VisitorCount() {
    const [count, setCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                // Use counterapi.dev to increment and get the count
                // Namespace: nehal-portfolio, Key: visits
                const response = await fetch('https://api.counterapi.dev/v1/nehal-portfolio/visits/up');
                const data = await response.json();
                if (data && data.count) {
                    setCount(data.count);
                }
            } catch (error) {
                console.error('Error fetching visitor count:', error);
                // Fallback to a high number if API fails
                setCount(32858);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCount();
    }, []);

    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const getOrdinal = (n: number) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 mb-16 flex justify-center"
        >
            <div className="flex items-center gap-4 px-6 py-3 bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-sm backdrop-blur-sm group hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-default">
                <div className="flex items-center justify-center p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                    <Eye className={`w-4 h-4 transition-colors ${isLoading ? 'animate-pulse text-zinc-300' : 'text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500'}`} />
                </div>
                {isLoading ? (
                    <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-md" />
                ) : (
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                        You are the <span className="font-black text-black dark:text-white text-lg tracking-tight">{count ? formatNumber(count) : "---"}<sup>th</sup></span> visitor
                    </p>
                )}
            </div>
        </motion.div>
    );
}
