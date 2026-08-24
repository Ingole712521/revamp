"use client";

import { PROOF_OF_WORK } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export function ProofOfWorkSection() {
    return (
        <section
            id="proof-of-work"
            className="section-container border-t border-zinc-200/80 dark:border-zinc-800/80"
        >
            <SectionHeading
                title="Shipped"
                description="Production work and product builds — concepts turned into working experiences."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {PROOF_OF_WORK.map((item, idx) => (
                    <ProjectCard key={item.id} project={item} idx={idx} />
                ))}
            </div>
        </section>
    );
}
