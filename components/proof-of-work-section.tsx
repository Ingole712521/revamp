"use client"

import { PROOF_OF_WORK } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";

export function ProofOfWorkSection() {
    return (
        <section id="proof-of-work" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <div className="mb-12 text-center md:mb-14">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
                    Live Projects
                </span>
                <h2 className="text-balance text-black dark:text-white">Proof of Work</h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 md:text-base">
                    Production work, shipped ideas, and real client or product builds that show how I turn concepts into working experiences.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
                {PROOF_OF_WORK.map((item, idx) => (
                    <ProjectCard key={item.id} project={item} idx={idx} />
                ))}
            </div>
        </section>
    );
}
