"use client"

import { PROOF_OF_WORK } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";

export function ProofOfWorkSection() {
    return (
        <section id="proof-of-work" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <h2 className="mb-12 text-center text-black dark:text-white">Proof of Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
                {PROOF_OF_WORK.map((item, idx) => (
                    <ProjectCard key={item.id} project={item} idx={idx} />
                ))}
            </div>
        </section>
    );
}
