"use client"

import { PROJECTS } from "@/lib/constants";
import { ProjectPlaceholder } from "@/components/project-placeholder";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export function ProjectsSection() {
    return (
        <section id="projects" className="w-full py-20 border-t border-zinc-100 dark:border-zinc-900">
            <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    const videoRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isHovered && project.videoUrl) {
            gsap.to(videoRef.current, { opacity: 1, duration: 0.5, ease: "power2.inOut" });
        } else if (project.videoUrl) {
            gsap.to(videoRef.current, { opacity: 0, duration: 0.3, ease: "power2.inOut" });
        }
    }, [isHovered, project.videoUrl]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        window.dispatchEvent(new CustomEvent('project-hover-start', { detail: { text: "Click to see" } }));
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        window.dispatchEvent(new CustomEvent('project-hover-end'));
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
            className="group relative bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-none"
        >
            <div className="relative h-48 w-full overflow-hidden">
                {imageError ? (
                    <ProjectPlaceholder name={project.name} index={idx} />
                ) : (
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImageError(true)}
                    />
                )}

                {project.videoUrl && (
                    <div
                        ref={videoRef}
                        className="absolute inset-0 opacity-0 pointer-events-none"
                    >
                        <iframe
                            src={project.videoUrl}
                            className="w-full h-full pointer-events-none scale-110"
                            allow="autoplay; encrypted-media"
                            loading="lazy"
                        />
                    </div>
                )}

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                        href={project.link}
                        target="_blank"
                        className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform pointer-events-auto shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink className="w-5 h-5" />
                    </Link>
                </div>
            </div>
            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-zinc-600 dark:text-zinc-400">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{project.name}</h3>
                <p className="text-zinc-800 dark:text-zinc-200 text-sm line-clamp-2">{project.description}</p>
            </div>
        </motion.div>
    );
}
