"use client"

import { HERO, TECH_STACK, SOCIALS } from "@/lib/constants";
import { TechBadge } from "@/components/tech-badge";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, FileText, Send } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import { TypewriterEffect } from "@/components/ui/typewriter";

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
                className="mb-6 text-4xl min-h-[40px] md:min-h-[48px]"
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
                        className="relative inline-flex items-center gap-2 px-8 py-3 rounded-[999px] text-sm font-semibold text-zinc-900 dark:text-white bg-gradient-to-b from-zinc-100 to-zinc-300 dark:from-zinc-700 dark:to-zinc-900 shadow-[0_0_24px_rgba(148,163,184,0.35)] hover:shadow-[0_0_30px_rgba(148,163,184,0.6)] border border-zinc-200/80 dark:border-zinc-600/80 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-300 dark:focus-visible:ring-zinc-500 focus-visible:ring-offset-black/5"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            Resume / CV
                        </span>
                        <span className="pointer-events-none absolute inset-[1px] rounded-[999px] bg-gradient-to-b from-white/80 to-zinc-300/90 dark:from-zinc-700/90 dark:to-zinc-900/90 opacity-90" />
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
                        href="#contact"
                        className="relative inline-flex items-center justify-center px-10 py-3 rounded-[999px] text-sm font-semibold text-white bg-gradient-to-b from-[#d49b62] to-[#b5743b] shadow-[0_0_32px_rgba(180,116,59,0.45)] hover:shadow-[0_0_40px_rgba(180,116,59,0.7)] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d49b62] focus-visible:ring-offset-black/5"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Get in touch
                        </span>
                        <span className="pointer-events-none absolute inset-[1px] rounded-[999px] bg-gradient-to-b from-[#e2ae79] to-[#b5743b]/90 opacity-90" />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Social Icons with Link Preview */}
            <SocialIconsWithPreview />
        </section>
    );
}

function SocialIconsWithPreview() {
    const socialItems = [
        {
            key: 'twitter',
            icon: Twitter,
            data: SOCIALS.twitter,
            staticPreview: {
                isStatic: true as const,
                imageSrc: "/twitter-profile.png",
            },
        },
        {
            key: 'linkedin',
            icon: Linkedin,
            data: SOCIALS.linkedin,
            // Uses a static screenshot image for the tooltip preview
            // Place your LinkedIn profile screenshot in the public folder with this name
            staticPreview: {
                isStatic: true as const,
                imageSrc: "/linkedin-profile.png",
            },
        },
        {
            key: 'github',
            icon: Github,
            data: SOCIALS.github,
            staticPreview: {
                isStatic: true as const,
                imageSrc: "/github-profile.png",
            },
        },
    ] as const;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 mt-12"
        >
            {socialItems.map((item) => {
                const Icon = item.icon;
                const previewProps =
                    "staticPreview" in item
                        ? {
                            isStatic: item.staticPreview.isStatic,
                            imageSrc: item.staticPreview.imageSrc,
                        }
                        : {};

                return (
                    <LinkPreview
                        key={item.key}
                        url={item.data.url}
                        className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                        {...previewProps}
                    >
                        <Icon className="w-5 h-5" />
                    </LinkPreview>
                );
            })}
            {/* Email without preview */}
            <Link
                href={SOCIALS.email.url}
                title="nehalingole2001@gmail.com"
                className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            >
                <Mail className="w-5 h-5" />
            </Link>
        </motion.div>
    );
}
