"use client";

import { PROJECTS } from "@/lib/constants";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { FeaturedGallery } from "@/components/featured-gallery";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useMemo, useState } from "react";

const FILTERS = ["All", "Shipped", "Frontend", "DevOps", "Fullstack"] as const;
type Filter = (typeof FILTERS)[number];

export function ProjectsSection() {
    const [filter, setFilter] = useState<Filter>("All");
    const featured = useMemo(
        () => PROJECTS.filter((project) => project.featured),
        [],
    );

    const projects = useMemo(() => {
        const rest = PROJECTS.filter((project) => !project.featured);
        if (filter === "All") return rest;
        if (filter === "Shipped") return rest.filter((project) => project.shipped);
        return rest.filter((project) => project.category === filter);
    }, [filter]);

    return (
        <section
            id="projects"
            className="border-t border-zinc-200/80 dark:border-zinc-800/80"
        >
            <div className="section-container border-x-0 py-16 md:py-20 md:pb-8">
                <SectionHeading
                    title="Projects"
                    description="Frontend builds, DevOps workflows, and cloud experiments. Clean UX, reliable automation."
                />
            </div>

            <div className="w-full border-y border-zinc-200/70 bg-zinc-100/40 dark:border-zinc-800/70 dark:bg-zinc-950/30">
                <FeaturedGallery projects={featured} />
            </div>

            <div className="section-container border-x-0 pt-12 md:pt-16">
                <LayoutGroup>
                    <div className="mb-8 flex flex-wrap gap-2">
                        {FILTERS.map((item) => {
                            const active = filter === item;
                            return (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => setFilter(item)}
                                    className={`relative rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white ${
                                        active
                                            ? "border-transparent text-white dark:text-zinc-950"
                                            : "border-zinc-200 bg-transparent text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
                                    }`}
                                >
                                    {active ? (
                                        <motion.span
                                            layoutId="project-filter"
                                            className="absolute inset-0 rounded-full bg-zinc-950 dark:bg-white"
                                            transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                                        />
                                    ) : null}
                                    <span className="relative z-10">{item}</span>
                                </button>
                            );
                        })}
                    </div>
                </LayoutGroup>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    <AnimatePresence mode="popLayout">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.35, delay: idx * 0.04, ease: EASE_OUT_EXPO }}
                            >
                                <ProjectCard project={project} idx={idx} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {projects.length === 0 ? (
                    <p className="text-sm text-zinc-500">
                        Nothing else in this filter. The featured work is above.
                    </p>
                ) : null}
            </div>
        </section>
    );
}
