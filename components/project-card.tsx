"use client"

import { CardMediaBackdrop } from "@/components/card-media-backdrop";
import { ProjectPlaceholder } from "@/components/project-placeholder";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileText } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export type ProjectCardItem = {
    id: number | string;
    name: string;
    description: string;
    image: string;
    link: string;
    caseStudyLink?: string;
    videoUrl?: string;
    tags: string[];
    imageFit?: "cover" | "contain";
};

export function ProjectCard({ project, idx }: { project: ProjectCardItem; idx: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isHovered && project.videoUrl && !showVideo) {
            gsap.to(videoRef.current, { opacity: 1, duration: 0.5, ease: "power2.inOut" });
        } else if (project.videoUrl && !showVideo) {
            gsap.to(videoRef.current, { opacity: 0, duration: 0.3, ease: "power2.inOut" });
        }
    }, [isHovered, project.videoUrl, showVideo]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        window.dispatchEvent(new CustomEvent('project-hover-start', { detail: { text: "Click to see" } }));
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        window.dispatchEvent(new CustomEvent('project-hover-end'));
    };

    const handleCardClick = () => {
        window.open(project.link, '_blank');
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleCardClick}
            className="group relative bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer flex flex-col h-full"
        >
            <CardMediaBackdrop className="h-64 w-full p-6 group/image">
                <div
                    className="relative z-10 flex h-full w-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl transition-all duration-500 ease-out group-hover/image:transform-none! dark:border-white/20 dark:bg-zinc-950"
                    style={{
                        transform: "perspective(1000px) rotateX(15deg) rotateY(-20deg) rotateZ(2deg) scale(1.05)",
                    }}
                >
                    <div className="w-full bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-white/10 px-3 py-2 flex items-center gap-1.5 z-20 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>

                    <div className="relative w-full flex-1 overflow-hidden bg-white dark:bg-zinc-950">
                        {imageError ? (
                            <ProjectPlaceholder name={project.name} index={idx} />
                        ) : (
                            <div
                                className={
                                    project.imageFit === "contain"
                                        ? "absolute inset-4"
                                        : "absolute inset-0"
                                }
                            >
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className={
                                        project.imageFit === "contain"
                                            ? "object-contain object-center transition-transform duration-500"
                                            : "object-cover object-top transition-transform duration-500"
                                    }
                                    onError={() => setImageError(true)}
                                />
                            </div>
                        )}

                        {project.videoUrl && !showVideo && (
                            <div
                                ref={videoRef}
                                className="absolute inset-0 opacity-0 pointer-events-none bg-black z-10"
                            >
                                <iframe
                                    src={project.videoUrl}
                                    className="w-full h-full pointer-events-none scale-[1.02]"
                                    allow="autoplay; encrypted-media"
                                    loading="lazy"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {showVideo && project.videoUrl && (
                    <div className="absolute inset-0 z-30 bg-black">
                        <video
                            src={project.videoUrl}
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                            onEnded={() => setShowVideo(false)}
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowVideo(false);
                            }}
                            className="absolute top-2 right-2 z-40 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"
                        >
                            ✕
                        </button>
                    </div>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-40">
                    <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open live site"
                        className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink className="w-5 h-5" />
                    </Link>
                    {project.caseStudyLink && (
                        <Link
                            href={project.caseStudyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Read write-up"
                            className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FileText className="w-5 h-5" />
                        </Link>
                    )}
                </div>
            </CardMediaBackdrop>
            <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-white md:text-[1.35rem]">
                    {project.name}
                </h3>
                <p className="flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-300 md:text-[15px]">
                    {project.description}
                </p>
                {project.caseStudyLink && (
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]">
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Live site
                        </Link>
                        <span className="text-zinc-300 dark:text-zinc-700">·</span>
                        <Link
                            href={project.caseStudyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-600 hover:underline dark:text-zinc-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Write-up
                        </Link>
                    </div>
                )}
                <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-zinc-200 pt-3 dark:border-zinc-800">
                    <span className="pr-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                        Stack
                    </span>
                    {project.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="rounded-full border border-zinc-200 bg-zinc-100/80 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
