"use client";

import type { ProjectCardItem } from "@/components/project-card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function FeaturedSlide({
    project,
    compact = false,
}: {
    project: ProjectCardItem;
    compact?: boolean;
}) {
    const cta = project.videoUrl ? "Watch demo" : "View live";

    return (
        <article
            className={`featured-slide relative flex h-auto shrink-0 flex-col overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-zinc-50 md:flex-row dark:border-zinc-800 dark:bg-zinc-950/80 ${
                compact
                    ? "w-full"
                    : "w-[88vw] md:h-[min(78dvh,720px)] md:w-[min(86vw,1180px)]"
            }`}
        >
            <div className="relative aspect-16/10 w-full overflow-hidden md:aspect-auto md:h-full md:w-[58%]">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 88vw, 60vw"
                    className={
                        project.imageFit === "contain"
                            ? "object-contain object-center p-6"
                            : "object-cover object-top"
                    }
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:via-transparent md:to-zinc-50 md:dark:to-zinc-950/80" />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-4 p-6 md:w-[42%] md:p-10">
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                    {project.category}
                    {project.shipped ? " / shipped" : ""}
                </p>
                <h3 className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-zinc-950 md:text-4xl dark:text-white">
                    {project.name}
                </h3>
                <p className="max-w-[46ch] text-pretty text-[15px] leading-[1.65] text-zinc-600 dark:text-zinc-400">
                    {project.impact ?? project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                    {project.link ? (
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-zinc-800 active:scale-[0.97] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                        >
                            {cta}
                            <span className="inline-flex size-7 items-center justify-center rounded-full bg-white/10 dark:bg-zinc-950/10">
                                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                        </Link>
                    ) : null}
                    {project.githubRepo ? (
                        <Link
                            href={project.githubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-white"
                        >
                            Source
                        </Link>
                    ) : null}
                </div>
            </div>
        </article>
    );
}

export function FeaturedGallery({ projects }: { projects: ProjectCardItem[] }) {
    const wrap = useRef<HTMLDivElement>(null);
    const track = useRef<HTMLDivElement>(null);
    const [reduce, setReduce] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const apply = () => setReduce(mq.matches);
        apply();
        mq.addEventListener("change", apply);
        return () => mq.removeEventListener("change", apply);
    }, []);

    useEffect(() => {
        if (reduce || !wrap.current || !track.current) return;

        const desktop = window.matchMedia("(min-width: 768px)");
        let ctx: gsap.Context | undefined;

        const setup = () => {
            ctx?.revert();
            ctx = undefined;
            gsap.set(track.current, { clearProps: "transform" });
            if (!desktop.matches || !wrap.current || !track.current) return;

            ctx = gsap.context(() => {
                const distance = () =>
                    Math.max(0, track.current!.scrollWidth - window.innerWidth);

                gsap.to(track.current, {
                    x: () => -distance(),
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrap.current,
                        start: "top top",
                        end: () => `+=${distance()}`,
                        pin: true,
                        scrub: 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });
            }, wrap);
        };

        setup();
        desktop.addEventListener("change", setup);

        return () => {
            desktop.removeEventListener("change", setup);
            ctx?.revert();
        };
    }, [reduce, projects.length]);

    if (reduce) {
        return (
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <FeaturedSlide key={String(project.id)} project={project} compact />
                ))}
            </div>
        );
    }

    return (
        <div ref={wrap} className="relative w-full overflow-hidden">
            <div
                ref={track}
                className="flex items-center gap-5 overflow-x-auto px-4 py-6 snap-x snap-mandatory md:h-[100dvh] md:gap-8 md:overflow-visible md:px-[7vw] md:py-0 md:snap-none"
            >
                {projects.map((project) => (
                    <div key={String(project.id)} className="snap-center">
                        <FeaturedSlide project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}
