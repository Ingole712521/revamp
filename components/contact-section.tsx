"use client";

import { SectionHeading } from "@/components/section-heading";
import { MagneticButton, MagneticLink } from "@/components/magnetic-button";
import { useGmailRedirect } from "@/components/gmail-redirect-provider";
import { SOCIALS } from "@/lib/constants";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { motion } from "motion/react";
import {
    ArrowUpRight,
    FileText,
    Github,
    Linkedin,
    Mail,
    Twitter,
    Youtube,
    type LucideIcon,
} from "lucide-react";

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
            key: "youtube",
            label: "YouTube",
            icon: Youtube,
            href: SOCIALS.youtube.url,
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
                description="Open a channel: GitHub, LinkedIn, mail, or the resume."
            />

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                className="flex flex-wrap gap-2.5"
            >
                {items.map((item) => {
                    const Icon = item.icon;
                    const content = (
                        <>
                            <Icon className="size-3.5 shrink-0 opacity-80" />
                            {item.label}
                            <span className="inline-flex size-6 items-center justify-center rounded-full bg-zinc-950/5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-px dark:bg-white/10">
                                <ArrowUpRight className="size-3 opacity-60 group-hover:opacity-100" />
                            </span>
                        </>
                    );

                    if ("onClick" in item) {
                        return (
                            <MagneticButton
                                key={item.key}
                                onClick={item.onClick}
                                className={className}
                            >
                                {content}
                            </MagneticButton>
                        );
                    }

                    return (
                        <MagneticLink
                            key={item.key}
                            href={item.href}
                            external
                            className={className}
                        >
                            {content}
                        </MagneticLink>
                    );
                })}
            </motion.div>
        </section>
    );
}
