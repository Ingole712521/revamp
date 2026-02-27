"use client"

import { motion } from "motion/react";
import Link from "next/link";
import { Send, Phone } from "lucide-react";
import Image from "next/image";
import { HERO } from "@/lib/constants";
import LetterGlitch from "@/components/LetterGlitch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ContactSection() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);



    return (
        <section id="contact" className="section-container border-t border-zinc-100 dark:border-zinc-900 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                    scale: 1.01,
                    boxShadow: "0 0 40px rgba(255, 255, 255, 0.05)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative p-10 md:p-16 rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center group cursor-defaul"
            >
                {/* Floating Avatar - Outside the box */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center z-30">
                    <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl border-2 border-zinc-200 dark:border-zinc-700 flex items-center justify-center animate-bounce overflow-hidden">
                        <Image
                            src={HERO.avatar}
                            alt="Contact"
                            width={50}
                            height={50}
                            className="rounded-lg object-cover  group-hover:grayscale-0 transition-all"
                        />
                    </div>
                </div>

                {/* LetterGlitch Background */}
                <div className="absolute inset-0 rounded-lg ">
                    {mounted && (
                        <LetterGlitch
                            glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
                            glitchSpeed={50}
                            centerVignette={false}
                            outerVignette={true}
                            smooth={true}
                            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
                        />
                    )}
                </div>

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 rounded-lg"></div>

                {/* Dynamic Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-lg bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-1000 blur-3xl pointer-events-none"></div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h3 className="text-2xl md:text-2xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight">
                        Hey, you scrolled this far, let's talk.
                    </h3>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
                        <Link
                            href="mailto:nehalingole2001@gmail.com"
                            className="flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all hover:-translate-y-1 active:scale-95 shadow-xl"
                        >
                            <Send className="w-4 h-4" />
                            Email Me
                        </Link>

                        <Link
                            href="https://calendly.com/"
                            target="_blank"
                            className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all hover:-translate-y-1 active:scale-95"
                        >
                            <Phone className="w-4 h-4" />
                            Book a Free Call
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
