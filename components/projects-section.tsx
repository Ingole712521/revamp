"use client"

import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
    return (
        <section id="projects" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <h2 className="mb-12 text-center text-black dark:text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
                {PROJECTS.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} idx={idx} />
                ))}
            </div>
        </section>
    );
}
