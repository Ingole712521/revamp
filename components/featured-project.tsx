"use client";

import { MagneticLink } from "@/components/magnetic-button";
import { LEAD_PROJECT_ID, PROJECTS } from "@/lib/constants";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const leadActionClass =
    "pressable inline-flex items-center gap-2 rounded-full bg-emerald-800 py-1.5 pr-1.5 pl-4 text-sm font-medium text-white hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-950 dark:bg-emerald-800 dark:hover:bg-emerald-700 dark:focus-visible:outline-emerald-200";

export function FeaturedProject() {
    const project = PROJECTS.find((item) => item.id === LEAD_PROJECT_ID);
    if (!project) return null;

    const liveHref = project.link || project.caseStudyLink;

    return (
        <section
            aria-labelledby="lead-project-title"
            className="section-container border-t border-zinc-200/80 dark:border-zinc-800/80"
        >
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-7">
                    {liveHref ? (
                        <Link
                            href={liveHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.name}`}
                            className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-800 dark:focus-visible:outline-white"
                        >
                            <Image
                                src={project.image}
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 640px, 100vw"
                                className="object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] motion-reduce:transform-none"
                            />
                        </Link>
                    ) : (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
                            <Image
                                src={project.image}
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 640px, 100vw"
                                className="object-cover object-top"
                            />
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-4 lg:col-span-5">
                    <h2
                        id="lead-project-title"
                        className="text-balance font-semibold leading-[1.05] tracking-[-0.03em] text-zinc-950 dark:text-white text-[clamp(2.25rem,4vw,3.25rem)]"
                    >
                        {project.name}
                    </h2>
                    {project.impact ? (
                        <p className="text-pretty text-base leading-relaxed text-zinc-800 md:text-lg dark:text-zinc-100">
                            {project.impact}
                        </p>
                    ) : null}
                    <p className="max-w-[42ch] text-pretty text-[0.9375rem] leading-[1.65] text-zinc-600 md:text-base dark:text-zinc-300">
                        {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                        {liveHref ? (
                            <MagneticLink
                                href={liveHref}
                                external
                                className={leadActionClass}
                            >
                                Open {project.name}
                            </MagneticLink>
                        ) : null}
                        {project.githubRepo ? (
                            <Link
                                href={project.githubRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pressable inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:border-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-white dark:focus-visible:outline-white"
                            >
                                <Github className="size-4" aria-hidden />
                                Source
                            </Link>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
}
