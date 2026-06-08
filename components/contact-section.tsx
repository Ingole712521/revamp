"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Phone, Send } from "lucide-react";
import { useGmailRedirect } from "@/components/gmail-redirect-provider";

export function ContactSection() {
    const { requestGmailRedirect } = useGmailRedirect();

    return (
        <section id="contact" className="section-container border-t border-zinc-100 pb-20 dark:border-zinc-900">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-linear-to-br from-zinc-100 via-white to-slate-100 p-10 text-center dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-slate-950 md:p-16"
            >
                <div className="relative z-10 mx-auto max-w-2xl">
                    <h3 className="mb-6 text-2xl font-black tracking-tight text-zinc-900 dark:text-white md:text-3xl">
                        Still scrolling? Good. Let&apos;s build something amazing together
                    </h3>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
                        <button
                            type="button"
                            onClick={requestGmailRedirect}
                            className="flex items-center gap-3 rounded-2xl bg-zinc-900 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                        >
                            <Send className="size-4" />
                            Email Me
                        </button>
                        <Link
                            href="tel:7397966719"
                            className="flex items-center gap-3 rounded-2xl bg-zinc-900 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                        >
                            <Phone className="size-4" />
                            Call 7397966719
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
