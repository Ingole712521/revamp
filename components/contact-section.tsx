"use client";

import { SectionHeading } from "@/components/section-heading";
import { useGmailRedirect } from "@/components/gmail-redirect-provider";
import { SOCIALS } from "@/lib/constants";
import { motion } from "motion/react";
import {
    ArrowUpRight,
    FileText,
    Github,
    Linkedin,
    Mail,
    Twitter,
    type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type ContactItem =
    | {
          key: string;
          label: string;
          icon: LucideIcon;
          href: string;
      }
    | {
          key: string;
          label: string;
          icon: LucideIcon;
          onClick: () => void;
      };

type ContactSectionProps = {
    onResumeClick: () => void;
};

export function ContactSection({ onResumeClick }: ContactSectionProps) {
    const { requestGmailRedirect } = useGmailRedirect();

    const items: ContactItem[] = [
        {
            key: "github",
            label: "GitHub",
            icon: Github,
            href: SOCIALS.github.url,
        },
        {
            key: "linkedin",
            label: "LinkedIn",
            icon: Linkedin,
            href: SOCIALS.linkedin.url,
        },
        {
            key: "twitter",
            label: "Twitter",
            icon: Twitter,
            href: SOCIALS.twitter.url,
        },
        {
            key: "mail",
            label: "Mail",
            icon: Mail,
            onClick: requestGmailRedirect,
        },
        {
            key: "resume",
            label: "Resume",
            icon: FileText,
            onClick: onResumeClick,
        },
    ];

    const className =
        "group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-300 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800";

    return (
        <section
            id="contact"
            className="section-container border-t border-zinc-200/80 dark:border-zinc-800/80"
        >
            <SectionHeading
                title="Contact"
                description="Open a channel — GitHub, LinkedIn, mail, or the resume."
            />

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5"
            >
                {items.map((item) => {
                    const Icon = item.icon;
                    const content = (
                        <>
                            <Icon className="size-3.5 shrink-0 opacity-80" />
                            {item.label}
                            <ArrowUpRight className="size-3.5 opacity-40 transition-opacity group-hover:opacity-80" />
                        </>
                    );

                    if ("onClick" in item) {
                        return (
                            <button
                                key={item.key}
                                type="button"
                                onClick={item.onClick}
                                className={className}
                            >
                                {content}
                            </button>
                        );
                    }

                    return (
                        <Link
                            key={item.key}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                        >
                            {content}
                        </Link>
                    );
                })}
            </motion.div>
        </section>
    );
}
