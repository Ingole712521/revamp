"use client"

import { EDUCATION } from "@/lib/constants";
import { motion } from "motion/react";

export function EducationSection() {
    return (
        <section id="education" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <h2 className="mb-12 text-center text-black dark:text-white">Education</h2>
            <div className="space-y-8">
                {EDUCATION.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <h3 className="text-black dark:text-white">{edu.institution}</h3>
                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">{edu.duration}</span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{edu.degree}</p>
                        <p className="text-zinc-800 dark:text-zinc-200 text-sm leading-relaxed">{edu.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
