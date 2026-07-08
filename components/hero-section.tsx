"use client";

import { HERO, TECH_STACK, SOCIALS } from "@/lib/constants";
import { TechBadge } from "@/components/tech-badge";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Youtube, FileText, Send } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import { TypewriterEffect } from "@/components/ui/typewriter";
import { useGmailRedirect } from "@/components/gmail-redirect-provider";

export function HeroSection({ onResumeClick }: { onResumeClick: () => void }) {
    return (
        <section className="section-container flex flex-col items-center border-t-0 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8 size-32"
            >
                <div className="absolute inset-0 animate-pulse rounded-full bg-yellow-400 opacity-20 blur-2xl" />
                <Image
                    src={HERO.avatar}
                    alt={HERO.name}
                    fill
                    className="relative z-10 rounded-full border-4 border-zinc-200 object-cover dark:border-zinc-800"
                />
                <div className="absolute bottom-2 right-2 z-20 size-4 rounded-full border-2 border-black bg-green-500" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 min-h-[40px] text-4xl md:min-h-[48px]"
            >
                {HERO.greet}{" "}
                <span className="text-zinc-600 dark:text-zinc-400">
                    <TypewriterEffect words={["Frontend Developer", "DevOps Engineer"]} />
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8 max-w-2xl"
            >
                I {HERO.description}
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-10 flex flex-wrap justify-center gap-2"
            >
                {TECH_STACK.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4"
            >
                <motion.div
                    initial={{ scale: 1, y: 0 }}
                    animate={{ scale: [1, 1.02, 1], y: [0, -2, 0] }}
                    transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 0.4,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97, y: 0 }}
                >
                    <button
                        onClick={onResumeClick}
                        className="relative inline-flex items-center gap-2 rounded-[999px] border border-zinc-200/80 bg-linear-to-b from-zinc-100 to-zinc-300 px-8 py-3 text-sm font-semibold text-zinc-900 shadow-[0_0_24px_rgba(148,163,184,0.35)] transition-all duration-200 outline-none hover:shadow-[0_0_30px_rgba(148,163,184,0.6)] focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/5 dark:border-zinc-600/80 dark:from-zinc-700 dark:to-zinc-900 dark:text-white dark:focus-visible:ring-zinc-500"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <FileText className="size-4" />
                            Resume / CV
                        </span>
                        <span className="pointer-events-none absolute inset-px rounded-[999px] bg-linear-to-b from-white/80 to-zinc-300/90 opacity-90 dark:from-zinc-700/90 dark:to-zinc-900/90" />
                    </button>
                </motion.div>
                <motion.div
                    initial={{ scale: 1, y: 0 }}
                    animate={{ scale: [1, 1.02, 1], y: [0, -2, 0] }}
                    transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97, y: 0 }}
                >
                    <Link
                        href="/#contact"
                        className="relative inline-flex items-center justify-center rounded-[999px] bg-linear-to-b from-[#d49b62] to-[#b5743b] px-10 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(180,116,59,0.45)] transition-all duration-200 outline-none hover:shadow-[0_0_40px_rgba(180,116,59,0.7)] focus-visible:ring-2 focus-visible:ring-[#d49b62] focus-visible:ring-offset-2 focus-visible:ring-offset-black/5"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Send className="size-4" />
                            Get in touch
                        </span>
                        <span className="pointer-events-none absolute inset-px rounded-[999px] bg-linear-to-b from-[#e2ae79] to-[#b5743b]/90 opacity-90" />
                    </Link>
                </motion.div>
            </motion.div>

            <SocialIcons />
        </section>
    );
}

function SocialIcons() {
    const { requestGmailRedirect } = useGmailRedirect();
    const socialItems = [
        { key: "twitter", icon: Twitter, data: SOCIALS.twitter },
        { key: "linkedin", icon: Linkedin, data: SOCIALS.linkedin },
        { key: "github", icon: Github, data: SOCIALS.github },
        { key: "youtube", icon: Youtube, data: SOCIALS.youtube },
    ] as const;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex gap-6"
        >
            {socialItems.map((item) => {
                const Icon = item.icon;
                return (
                    <LinkPreview
                        key={item.key}
                        url={item.data.url}
                        className="text-zinc-400 transition-colors hover:text-black dark:text-zinc-500 dark:hover:text-white"
                    >
                        <Icon className="size-5" />
                    </LinkPreview>
                );
            })}
            <button
                type="button"
                onClick={requestGmailRedirect}
                title={SOCIALS.email.preview}
                className="text-zinc-400 transition-colors hover:text-black dark:text-zinc-500 dark:hover:text-white"
            >
                <Mail className="size-5" />
            </button>
        </motion.div>
    );
}
