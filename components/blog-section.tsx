"use client"

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CardMediaBackdrop } from '@/components/card-media-backdrop';
import { getFeaturedBlogPosts, readingMinutes } from '@/lib/blogs';
import { SectionHeading } from '@/components/section-heading';
import { useState, type KeyboardEvent } from 'react';

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    return `${month} ${day}, ${year}`;
};

export function BlogSection() {
    const blogs = getFeaturedBlogPosts();

    return (
        <section
            id="blogs"
            className="section-container border-t border-zinc-200/80 dark:border-zinc-800/80"
        >
            <SectionHeading
                title="Writing"
                description="Articles on DevOps, frontend workflows, cloud experiments, and lessons from building in public."
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {blogs.map((blog, idx) => (
                    <BlogCard key={blog.href} blog={blog} idx={idx} />
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Link
                    href="https://learnwithnehal.hashnode.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:focus-visible:outline-white"
                >
                    <span>See other 80+ posts</span>
                    <ExternalLink className="h-4 w-4" />
                </Link>
            </div>
        </section>
    );
}

function BlogCard({
    blog,
    idx,
}: {
    blog: ReturnType<typeof getFeaturedBlogPosts>[number];
    idx: number;
}) {
    const [tapped, setTapped] = useState(false);
    const minutes = readingMinutes(`${blog.title} ${blog.brief}`);

    const open = () => window.open(blog.href, "_blank", "noopener,noreferrer");

    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            open();
        }
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.45 }}
            onClick={open}
            onKeyDown={handleKeyDown}
            onTouchStart={() => setTapped(true)}
            onMouseLeave={() => setTapped(false)}
            role="link"
            tabIndex={0}
            aria-label={`Read ${blog.title}`}
            className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-50 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.05)] transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_10px_28px_rgba(15,23,42,0.1)] motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-[0_1px_2px_rgba(0,0,0,0.35),0_10px_28px_rgba(0,0,0,0.28)] dark:hover:border-zinc-600 dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)] dark:focus-visible:outline-white"
        >
            <CardMediaBackdrop className="aspect-16/10 w-full">
                <div className="relative z-10 h-full w-full overflow-hidden">
                    <Image
                        src={blog.coverImage?.url || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"}
                        alt=""
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top"
                    />
                    <div
                        className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-linear-to-t from-black/75 via-black/25 to-transparent pt-12 transition-opacity duration-300 ${
                            tapped
                                ? "opacity-100"
                                : "opacity-80 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100"
                        }`}
                    >
                        <p className="px-3.5 pb-3 text-[13px] font-medium tracking-wide text-white">
                            Read article →
                        </p>
                    </div>
                </div>
            </CardMediaBackdrop>

            <div className="flex flex-1 flex-col gap-2.5 p-5">
                <div className="flex flex-wrap items-center gap-2 text-[12px] font-medium text-zinc-500">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                        <Calendar className="size-3" aria-hidden />
                        <time dateTime={blog.publishedAt}>{formatDate(blog.publishedAt)}</time>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-zinc-500">
                        <Clock className="size-3" aria-hidden />
                        {minutes} min read
                    </span>
                </div>
                <h3 className="line-clamp-2 text-lg font-semibold leading-[1.3] tracking-[-0.015em] text-zinc-950 dark:text-white">
                    {blog.title}
                </h3>
                <p className="line-clamp-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    {blog.brief}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {blog.tags?.slice(0, 3).map((tag) => (
                        <span
                            key={tag.name}
                            className="rounded-full border border-zinc-200/90 bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300"
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>
                <span className="mt-1 inline-flex items-center gap-1 text-[13px] font-medium text-zinc-700 dark:text-zinc-300">
                    Read more
                    <ArrowRight className="icon-nudge size-3.5" />
                </span>
            </div>
        </motion.article>
    );
}
