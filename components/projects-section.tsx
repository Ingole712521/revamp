"use client"

import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
    return (
        <section id="projects" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <div className="mb-12 text-center md:mb-14">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
                    Selected Work
                </span>
                <h2 className="text-balance text-black dark:text-white">Projects</h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 md:text-base">
                    A mix of frontend builds, DevOps workflows, and cloud experiments focused on clean UX,
                    reliable automation, and practical engineering.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
                {PROJECTS.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} idx={idx} />
                ))}
            </div>
        </section>
    );
}
