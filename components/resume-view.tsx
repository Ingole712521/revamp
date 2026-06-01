"use client";

import {
    ExternalLink,
    Github,
    Globe,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";
import Image from "next/image";
import { RESUME } from "@/lib/resume-data";

function SkillPill({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center rounded-full border border-zinc-700/80 bg-zinc-900/80 px-2.5 py-0.5 text-[11px] font-medium text-zinc-200 print:border-zinc-400 print:bg-zinc-100 print:text-zinc-800">
            {label}
        </span>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 print:text-zinc-600">
            {children}
        </h3>
    );
}

export function ResumeView({ id }: { id?: string }) {
    const { name, avatar, title, location, email, phone, website, notionUrl, links, summary, skills, experience, achievements, education } =
        RESUME;

    return (
        <article
            id={id}
            className="resume-document min-h-full bg-[#121212] text-zinc-100 print:bg-white print:text-zinc-900"
        >
            <div className="w-full px-5 py-6 sm:px-6 sm:py-8 print:px-8 print:py-8">
                {/* Header */}
                <header className="relative border-b border-zinc-800 pb-8 print:border-zinc-200">
                    <a
                        href={notionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 right-0 hidden items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white sm:inline-flex print:hidden"
                    >
                        View on Notion
                        <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </a>

                    <div className="flex items-center gap-3 pr-28 sm:pr-36">
                        <Image
                            src={avatar}
                            alt={name}
                            width={44}
                            height={44}
                            className="h-11 w-11 shrink-0 rounded-lg border border-zinc-700 object-cover print:border-zinc-300"
                        />
                        <div className="min-w-0">
                            <h1 className="text-2xl font-semibold tracking-tight text-white print:text-zinc-900 sm:text-[1.75rem]">
                                {name}
                            </h1>
                            <p className="mt-0.5 text-sm text-zinc-400 print:text-zinc-600 sm:text-base">
                                {title}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400 print:text-zinc-600">
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                            {location}
                        </span>
                        <a
                            href={`mailto:${email}`}
                            className="inline-flex items-center gap-1.5 hover:text-zinc-200 print:text-zinc-700"
                        >
                            <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                            {email}
                        </a>
                        <span className="inline-flex items-center gap-1.5">
                            <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                            {phone}
                        </span>
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-zinc-200 print:text-zinc-700"
                        >
                            <Globe className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                            nehalingole.in
                        </a>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                        <a
                            href={links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-300 print:text-zinc-600"
                        >
                            <Linkedin className="h-3.5 w-3.5" strokeWidth={1.75} />
                            LinkedIn
                        </a>
                        <span className="text-zinc-700 print:text-zinc-300">·</span>
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-300 print:text-zinc-600"
                        >
                            <Github className="h-3.5 w-3.5" strokeWidth={1.75} />
                            GitHub
                        </a>
                        <span className="text-zinc-700 print:text-zinc-300">·</span>
                        <a
                            href={links.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-300 print:text-zinc-600"
                        >
                            <Twitter className="h-3.5 w-3.5" strokeWidth={1.75} />
                            X
                        </a>
                        <span className="text-zinc-700 print:text-zinc-300">·</span>
                        <a
                            href={links.blog}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-zinc-300 print:text-zinc-600"
                        >
                            Hashnode Blog
                        </a>
                    </div>
                </header>

                {/* Summary */}
                <section className="border-b border-zinc-800 py-8 print:border-zinc-200">
                    <SectionTitle>Professional Summary</SectionTitle>
                    <p className="text-sm leading-relaxed text-zinc-400 print:text-zinc-700">
                        {summary}
                    </p>
                </section>

                {/* Skills */}
                <section className="border-b border-zinc-800 py-8 print:border-zinc-200">
                    <SectionTitle>Skills</SectionTitle>
                    <div className="space-y-4">
                        {skills.map((group) => (
                            <div
                                key={group.category}
                                className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-4"
                            >
                                <p className="text-sm text-zinc-500 print:text-zinc-600">
                                    {group.category}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {group.skills.map((skill) => (
                                        <SkillPill key={skill} label={skill} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section className="border-b border-zinc-800 py-8 print:border-zinc-200">
                    <SectionTitle>Experience</SectionTitle>
                    <div className="space-y-8">
                        {experience.map((job) => (
                            <div key={`${job.company}-${job.duration}`}>
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <p className="font-semibold text-white print:text-zinc-900">
                                            {job.company}
                                        </p>
                                        <p className="text-sm text-zinc-400 print:text-zinc-600">
                                            {job.title}
                                        </p>
                                        {job.website && (
                                            <a
                                                href={job.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-0.5 inline-block text-xs text-zinc-500 hover:text-zinc-300 print:text-zinc-500"
                                            >
                                                {job.website.replace(/^https?:\/\//, "")}
                                            </a>
                                        )}
                                    </div>
                                    <p className="shrink-0 text-sm text-zinc-500 print:text-zinc-600 sm:text-right">
                                        {job.duration}
                                        <span className="block text-xs text-zinc-600 print:text-zinc-500">
                                            {job.location}
                                        </span>
                                    </p>
                                </div>
                                <ul className="mt-3 space-y-1.5">
                                    {job.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex gap-2 text-sm leading-relaxed text-zinc-400 print:text-zinc-700"
                                        >
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600 print:bg-zinc-400" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    {job.techStack.map((tech) => (
                                        <SkillPill key={tech} label={tech} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Achievements */}
                <section className="border-b border-zinc-800 py-8 print:border-zinc-200">
                    <SectionTitle>Achievements</SectionTitle>
                    <div className="space-y-6">
                        {achievements.map((item) => (
                            <div key={item.title}>
                                <p className="font-semibold text-white print:text-zinc-900">
                                    {item.title}
                                </p>
                                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 print:text-zinc-700">
                                    {item.description}
                                </p>
                                {item.tags && item.tags.length > 0 && (
                                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                                        {item.tags.map((tag) => (
                                            <SkillPill key={tag} label={tag} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="py-8">
                    <SectionTitle>Education</SectionTitle>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <p className="font-semibold text-white print:text-zinc-900">
                                {education.degree}
                            </p>
                            <p className="text-sm text-zinc-400 print:text-zinc-600">
                                {education.school}
                            </p>
                        </div>
                        <p className="text-sm text-zinc-500 print:text-zinc-600">
                            {education.duration}
                        </p>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                        {education.highlights.map((item) => (
                            <li
                                key={item}
                                className="flex gap-2 text-sm leading-relaxed text-zinc-400 print:text-zinc-700"
                            >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600 print:bg-zinc-400" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </article>
    );
}
