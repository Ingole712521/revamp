"use client"

import { HERO, TECH_STACK } from "@/lib/constants";
import { TechBadge } from "@/components/tech-badge";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, FileText, Send } from "lucide-react";

export function HeroSection({ onResumeClick }: { onResumeClick: () => void }) {
    return (
        <section className="section-container border-t-0 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-32 h-32 mb-8"
            >
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <Image
                    src={HERO.avatar}
                    alt={HERO.name}
                    fill
                    className="rounded-full border-4 border-zinc-200 dark:border-zinc-800 object-cover relative z-10"
                />
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-black z-20"></div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 text-4xl"
            >
                {HERO.greet} <span className="text-zinc-600 dark:text-zinc-400">{HERO.role}</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl mb-8"
            >
                I {HERO.description}
            </motion.p>

            {/* Tech Badges */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-2 mb-10"
            >
                {TECH_STACK.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4"
            >
                <button
                    onClick={onResumeClick}
                    className="flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700"
                >
                    <FileText className="w-4 h-4" /> Resume / CV
                </button>
                <Link
                    href="#contact"
                    className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-lg shadow-white/5"
                >
                    <Send className="w-4 h-4" /> Get in touch
                </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 mt-12 text-zinc-400 dark:text-zinc-500"
            >
                <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></Link>
                <Link href="mailto:nehalingole2001@gmail.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Mail className="w-5 h-5" /></Link>
            </motion.div>
        </section>
    );
}
