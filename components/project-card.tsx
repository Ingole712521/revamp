"use client"

import { CardMediaBackdrop } from "@/components/card-media-backdrop";
import { ProjectPlaceholder } from "@/components/project-placeholder";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { useState, type KeyboardEvent, type PointerEvent } from "react";

export type ProjectCardItem = {
    id: number | string;
    name: string;
    description: string;
    impact?: string;
    image: string;
    link?: string;
    caseStudyLink?: string;
    githubRepo?: string;
    videoUrl?: string;
    tags: string[];
    imageFit?: "cover" | "contain";
    category?: "Frontend" | "DevOps" | "Fullstack";
    shipped?: boolean;
    featured?: boolean;
};

function projectCtaLabel(project: ProjectCardItem) {
    if (project.videoUrl) return "Watch Demo →";
    return "View Live →";
}

function projectCornerBadge(project: ProjectCardItem) {
    if (project.shipped) return "Shipped";
    return project.category ?? null;
}

export function ProjectCard({
    project,
    idx,
    featured = false,
}: {
    project: ProjectCardItem;
    idx: number;
    featured?: boolean;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [tapped, setTapped] = useState(false);
    const reduce = useReducedMotion();
    const spotlightX = useMotionValue(0);
    const spotlightY = useMotionValue(0);
    const spotlight = useMotionTemplate`radial-gradient(280px circle at ${spotlightX}px ${spotlightY}px, rgb(16 185 129 / 0.14), transparent 58%)`;
    const clickable = Boolean(project.link || project.caseStudyLink);
    const cta = projectCtaLabel(project);
    const badge = projectCornerBadge(project);

    const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        spotlightX.set(event.clientX - rect.left);
        spotlightY.set(event.clientY - rect.top);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        window.dispatchEvent(new CustomEvent("project-hover-start", { detail: { text: "Click to see" } }));
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTapped(false);
        window.dispatchEvent(new CustomEvent("project-hover-end"));
    };

    const openProject = () => {
        const href = project.link || project.caseStudyLink;
        if (href) window.open(href, "_blank", "noopener,noreferrer");
    };

    const handleCardClick = () => {
        openProject();
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (!clickable) return;
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProject();
        }
    };

    const handleTouchStart = () => {
        setTapped(true);
        setIsHovered(true);
    };

    return (
        <motion.article
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.05, duration: 0.5, ease: EASE_OUT_EXPO }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onPointerMove={handlePointerMove}
            onTouchStart={handleTouchStart}
            onClick={handleCardClick}
            onKeyDown={handleKeyDown}
            role={clickable ? "link" : undefined}
            tabIndex={clickable ? 0 : undefined}
            aria-label={clickable ? `${project.name}, ${cta}` : project.name}
            className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-50 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.05)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-[0_1px_2px_rgba(0,0,0,0.35),0_10px_28px_rgba(0,0,0,0.28)] dark:focus-visible:outline-white ${
                featured ? "md:min-h-112" : ""
            } ${
                clickable ? "cursor-pointer hover:z-10 hover:scale-[1.02] hover:border-zinc-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.12)] dark:hover:border-zinc-600 dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)]" : ""
            }`}
        >
            <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: spotlight }}
            />
            <CardMediaBackdrop className={`${featured ? "aspect-video" : "aspect-16/10"} w-full`}>
                <div className="relative z-10 h-full w-full overflow-hidden">
                    {imageError ? (
                        <ProjectPlaceholder name={project.name} index={idx} />
                    ) : (
                        <div
                            className={
                                project.imageFit === "contain"
                                    ? "absolute inset-3"
                                    : "absolute inset-0"
                            }
                        >
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className={
                                    project.imageFit === "contain"
                                        ? "object-contain object-center"
                                        : "object-cover object-top"
                                }
                                onError={() => setImageError(true)}
                            />
                        </div>
                    )}

                    {project.videoUrl && !showVideo && (
                        <div
                            className={`pointer-events-none absolute inset-0 z-10 bg-black transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                isHovered ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <iframe
                                src={project.videoUrl}
                                className="h-full w-full scale-[1.02] pointer-events-none"
                                allow="autoplay; encrypted-media"
                                loading="lazy"
                            />
                        </div>
                    )}

                    {project.githubRepo ? (
                        <Link
                            href={project.githubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.name} GitHub repository`}
                            title="View source"
                            onClick={(e) => e.stopPropagation()}
                            onKeyDown={(e) => e.stopPropagation()}
                            className="absolute top-2.5 left-2.5 z-40 inline-flex size-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-transform hover:scale-110 hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            <Github className="size-3.5" />
                        </Link>
                    ) : null}

                    {featured || badge ? (
                        <span className="absolute top-2.5 right-2.5 z-30 rounded-full border border-white/15 bg-black/55 px-2 py-0.5 text-[10px] font-medium tracking-wide text-white/95 backdrop-blur-sm">
                            {featured ? "Featured" : badge}
                        </span>
                    ) : null}

                    {clickable ? (
                        <div
                            className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-linear-to-t from-black/75 via-black/25 to-transparent pt-12 transition-opacity duration-300 ${
                                tapped
                                    ? "opacity-100"
                                    : "opacity-80 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100"
                            }`}
                        >
                            <p className="px-3.5 pb-3 text-[13px] font-medium tracking-wide text-white">
                                {cta}
                            </p>
                        </div>
                    ) : null}
                </div>

                {showVideo && project.videoUrl && (
                    <div className="absolute inset-0 z-30 bg-black">
                        <video
                            src={project.videoUrl}
                            className="h-full w-full object-cover"
                            controls
                            autoPlay
                            onEnded={() => setShowVideo(false)}
                        />
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowVideo(false);
                            }}
                            className="absolute top-2 right-2 z-40 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                        >
                            ✕
                        </button>
                    </div>
                )}
            </CardMediaBackdrop>
            <div className={`flex flex-1 flex-col gap-2.5 ${featured ? "p-6" : "p-5"}`}>
                <h3 className={`font-bold leading-snug tracking-tight text-zinc-950 dark:text-white ${featured ? "text-2xl" : "text-xl"}`}>
                    {project.name}
                </h3>
                <div className="relative">
                    <p className={`text-sm leading-6 text-zinc-500 dark:text-zinc-400 ${featured ? "line-clamp-4" : "line-clamp-3"}`}>
                        {project.description}
                    </p>
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-linear-to-t from-zinc-50 to-transparent dark:from-zinc-900/95"
                    />
                </div>
                {project.impact ? (
                    <p className="line-clamp-2 text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-200">
                        {project.impact}
                    </p>
                ) : null}
                {project.caseStudyLink ? (
                    <button
                        type="button"
                        className="w-fit text-left text-[12px] font-medium text-zinc-500 underline-offset-2 hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
                        onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.caseStudyLink, "_blank", "noopener,noreferrer");
                        }}
                    >
                        Write-up
                    </button>
                ) : null}
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="rounded-full border border-zinc-200/90 bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}
