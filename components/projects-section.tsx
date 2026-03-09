"use client"

import { PROJECTS } from "@/lib/constants";
import { ProjectPlaceholder } from "@/components/project-placeholder";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

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

function ProjectCard({ project, idx }: { project: any; idx: number }) {
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
            className="group relative bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer"
        >
            <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center p-6 group/image">
                <div
                    className="relative w-full h-full flex flex-col rounded-xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-white/20 bg-white dark:bg-zinc-950 transition-all duration-500 ease-out group-hover/image:!transform-none z-10"
                    style={{
                        transform: "perspective(1000px) rotateX(15deg) rotateY(-20deg) rotateZ(2deg) scale(1.05)",
                    }}
                >
                    {/* Mock Browser Top Bar */}
                    <div className="w-full bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-white/10 px-3 py-2 flex items-center gap-1.5 z-20 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>

                    <div className="relative w-full flex-1 overflow-hidden bg-white dark:bg-zinc-950">
                        {imageError ? (
                            <ProjectPlaceholder name={project.name} index={idx} />
                        ) : (
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover object-top transition-transform duration-500"
                                onError={() => setImageError(true)}
                            />
                        )}

                        {/* Video Preview on Hover (YouTube iframe) */}
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

                {/* Full Video Player */}
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

                {/* Hover Overlay with Buttons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-40">
                    {/* {project.videoUrl && (
                        // <button
                        //     onClick={(e) => {
                        //         e.stopPropagation();
                        //         setShowVideo(true);
                        //     }}
                        //     className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform shadow-xl"
                        // >
                        //     <Play className="w-5 h-5" />
                        // </button>
                    )} */}
                    <Link
                        href={project.link}
                        target="_blank"
                        className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink className="w-5 h-5" />
                    </Link>
                </div>
            </div>
            <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-black dark:text-white">{project.name}</h3>
                <p className="text-zinc-800 dark:text-zinc-200 text-sm">{project.description}</p>
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800 mt-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        Tech :
                    </span>
                    {project.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-[10px] uppercase tracking-wider font-bold text-zinc-600 dark:text-zinc-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
