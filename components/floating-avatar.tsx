"use client";

import { SOCIALS } from "@/lib/constants";
import { useGmailRedirect } from "@/components/gmail-redirect-provider";
import { AnimatePresence, motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-avatar-dismissed";

export function FloatingAvatar() {
    const [isHovered, setIsHovered] = useState(false);
    const [dismissed, setDismissed] = useState(true);
    const { requestGmailRedirect } = useGmailRedirect();

    useEffect(() => {
        setDismissed(window.localStorage.getItem(STORAGE_KEY) === "1");
    }, []);

    const dismiss = () => {
        window.localStorage.setItem(STORAGE_KEY, "1");
        setDismissed(true);
        setIsHovered(false);
    };

    const socialItems = [
        { key: "linkedin", icon: Linkedin, data: SOCIALS.linkedin },
        { key: "github", icon: Github, data: SOCIALS.github },
        { key: "twitter", icon: Twitter, data: SOCIALS.twitter },
        { key: "email", icon: Mail, data: SOCIALS.email },
    ];

    return (
        <AnimatePresence>
            {dismissed ? null : (
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    className="fixed bottom-5 right-5 z-50"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative">
                        <button
                            type="button"
                            onClick={dismiss}
                            aria-label="Hide intro video"
                            className="absolute -top-2 -right-2 z-10 inline-flex size-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-colors hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white dark:focus-visible:outline-white"
                        >
                            <X className="size-3.5" />
                        </button>
                        <div className="size-28 overflow-hidden rounded-2xl border-2 border-white bg-zinc-100 shadow-[0_10px_28px_rgba(0,0,0,0.16)] opacity-90 transition-transform duration-300 hover:scale-[1.03] hover:opacity-100 md:size-32 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_10px_28px_rgba(0,0,0,0.45)]">
                            <video
                                src="/Video Project.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    <AnimatePresence>
                        {isHovered ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                                transition={{ duration: 0.18 }}
                                className="absolute right-0 bottom-full mb-2 w-64 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                            >
                                <div className="border-b border-zinc-100 p-3 dark:border-zinc-800">
                                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                                        Connect
                                    </h3>
                                </div>
                                <div className="p-2">
                                    {socialItems.map((item) => {
                                        const Icon = item.icon;
                                        const isEmail = item.key === "email";
                                        const className =
                                            "flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:hover:bg-zinc-800 dark:focus-visible:outline-white";

                                        const content = (
                                            <>
                                                <div className="flex size-9 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                                                    <Icon className="size-4 text-zinc-600 dark:text-zinc-400" />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                                                        {item.data.label}
                                                    </p>
                                                    <p className="truncate text-xs text-zinc-500">
                                                        {item.data.preview}
                                                    </p>
                                                </div>
                                            </>
                                        );

                                        if (isEmail) {
                                            return (
                                                <button
                                                    key={item.key}
                                                    type="button"
                                                    onClick={requestGmailRedirect}
                                                    className={className}
                                                >
                                                    {content}
                                                </button>
                                            );
                                        }

                                        return (
                                            <Link
                                                key={item.key}
                                                href={item.data.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={className}
                                            >
                                                {content}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
