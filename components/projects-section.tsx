"use client";

import { PROJECTS } from "@/lib/constants";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { LayoutGroup, motion } from "motion/react";
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
            className="section-container border-t border-zinc-200/80 dark:border-zinc-800/80"
        >
            <SectionHeading
                title="Projects"
                description="Frontend builds, DevOps workflows, and cloud experiments. Clean UX, reliable automation."
            />

            <div className="mb-8">
                <p className="mb-3 text-[13px] font-medium leading-[1.4] text-zinc-500">
                    Featured
                </p>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {featured.map((project, idx) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            idx={idx}
                            featured
                        />
                    ))}
                </div>
            </div>

            <LayoutGroup>
                <div className="mb-6 flex flex-wrap gap-2">
                    {FILTERS.map((item) => {
                        const active = filter === item;
                        return (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setFilter(item)}
                                className={`pressable relative rounded-full border px-3 py-1.5 text-xs font-medium tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white ${
                                    active
                                        ? "border-transparent text-white dark:text-zinc-950"
                                        : "border-zinc-200 bg-transparent text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
                                }`}
                            >
                                {active ? (
                                    <motion.span
                                        layoutId="project-filter"
                                        className="absolute inset-0 rounded-full bg-zinc-950 dark:bg-white"
                                        transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                                    />
                                ) : null}
                                <span className="relative z-10">{item}</span>
                            </button>
                        );
                    })}
                </div>
            </LayoutGroup>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} idx={idx} />
                ))}
            </div>

            {projects.length === 0 ? (
                <p className="mt-4 text-sm text-zinc-500">
                    Nothing else in this filter. The featured work is above.
                </p>
            ) : null}
        </section>
    );
}
