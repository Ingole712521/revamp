"use client";

import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { useMemo, useState } from "react";

const FILTERS = ["All", "Shipped", "Frontend", "DevOps", "Fullstack"] as const;
type Filter = (typeof FILTERS)[number];

export function ProjectsSection() {
    const [filter, setFilter] = useState<Filter>("All");

    const projects = useMemo(() => {
        if (filter === "All") return PROJECTS;
        if (filter === "Shipped") return PROJECTS.filter((project) => project.shipped);
        return PROJECTS.filter((project) => project.category === filter);
    }, [filter]);

    return (
        <section
            id="projects"
            className="section-container border-t border-zinc-200/80 dark:border-zinc-800/80"
        >
            <SectionHeading
                title="Projects"
                description="Frontend builds, DevOps workflows, and cloud experiments — clean UX, reliable automation."
            />

            <div className="mb-8 flex flex-wrap gap-2">
                {FILTERS.map((item) => {
                    const active = filter === item;
                    return (
                        <button
                            key={item}
                            type="button"
                            onClick={() => setFilter(item)}
                            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                                active
                                    ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-950"
                                    : "border-zinc-200 bg-transparent text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
                            }`}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {projects.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} idx={idx} />
                ))}
            </div>

            {projects.length === 0 ? (
                <p className="text-sm text-zinc-500">
                    Nothing in this filter yet — try All.
                </p>
            ) : null}
        </section>
    );
}
