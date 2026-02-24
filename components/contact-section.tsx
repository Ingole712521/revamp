"use client"

import { motion } from "motion/react";
import Link from "next/link";
import { Send, Phone } from "lucide-react";
import Image from "next/image";
import { HERO } from "@/lib/constants";

export function ContactSection() {
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
                className="relative p-10 md:p-16 rounded-[2.5rem] bg-zinc-900 dark:bg-zinc-900/80 border border-zinc-800 text-center group cursor-default"
            >
                {/* Dynamic Glow Effect on Hover */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-1000 rounded-[2.5rem] blur-3xl pointer-events-none"></div>

                {/* Floating Avatar or Emoji */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center animate-bounce">
                        <Image
                            src={HERO.avatar}
                            alt="Contact"
                            width={32}
                            height={32}
                            className="rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all"
                        />
                    </div>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h3 className="text-2xl md:text-2xl font-black text-white mb-6 tracking-tight">
                        Hey, you scrolled this far, let's talk.
                    </h3>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
                        <Link
                            href="mailto:nehalingole2001@gmail.com"
                            className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-zinc-100 transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-white/5"
                        >
                            <Send className="w-4 h-4" />
                            Email Me
                        </Link>

                        <Link
                            href="https://calendly.com/" // Placeholder, user mentioned "Book a Free Call"
                            target="_blank"
                            className="flex items-center gap-3 px-8 py-4 bg-zinc-800 text-white border border-zinc-700 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-zinc-700 transition-all hover:-translate-y-1 active:scale-95"
                        >
                            <Phone className="w-4 h-4" />
                            Book a Free Call
                        </Link>
                    </div>
                </div>

                {/* Grid Pattern Subtlety */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                </div>
            </motion.div>
        </section>
    );
}
