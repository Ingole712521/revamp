"use client"

import { motion } from 'motion/react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CardMediaBackdrop } from '@/components/card-media-backdrop';
import { getFeaturedBlogPosts } from '@/lib/blogs';
import { SectionHeading } from '@/components/section-heading';

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

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {blogs.map((blog, idx) => (
                    <motion.div
                        key={blog.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08, duration: 0.5 }}
                        whileHover={{ y: -6 }}
                        whileTap={{ scale: 0.99 }}
                        className="group/card relative flex flex-col bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-400/40 dark:hover:border-slate-600/50"
                    >
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-[radial-gradient(700px_circle_at_20%_10%,rgba(99,102,241,0.28),transparent_60%),radial-gradient(600px_circle_at_85%_15%,rgba(236,72,153,0.22),transparent_55%),radial-gradient(800px_circle_at_60%_120%,rgba(34,211,238,0.14),transparent_60%)]"
                        />

                        <CardMediaBackdrop className="h-72 w-full p-6 group/image">
                            <div
                                className="relative z-10 flex h-full w-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl transition-all duration-500 ease-out group-hover/image:transform-none! dark:border-white/20 dark:bg-zinc-950"
                                style={{
                                    transform:
                                        "perspective(1000px) rotateX(12deg) rotateY(-18deg) rotateZ(1deg) scale(1.03)",
                                }}
                            >
                                <div className="w-full bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-white/10 px-3 py-2 flex items-center gap-1.5 z-20 shrink-0">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                </div>

                                <div className="relative w-full flex-1 overflow-hidden bg-white dark:bg-zinc-950">
                                    <Image
                                        src={blog.coverImage?.url || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"}
                                        alt={blog.title}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover object-top transition-transform duration-500 group-hover/image:scale-110"
                                    />
                                </div>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 z-30 flex h-32 items-end bg-linear-to-t from-black/90 via-black/40 to-transparent p-6 opacity-0 translate-y-2 blur-sm transition-all duration-300 group-hover/image:opacity-100 group-hover/image:translate-y-0 group-hover/image:blur-0">
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags?.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag.name}
                                            className="px-2 py-1 bg-white/15 backdrop-blur-xl border border-white/20 rounded-md text-[10px] font-bold text-white uppercase tracking-wider shadow-xl"
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </CardMediaBackdrop>

                        <div className="p-8 flex flex-col flex-1">
                            <h3 className="mb-4 line-clamp-2 text-xl font-semibold leading-tight tracking-tight text-zinc-950 transition-colors group-hover/card:text-indigo-600 dark:text-white group-hover/card:dark:text-indigo-300">
                                {blog.title}
                            </h3>
                            <p className="mb-8 line-clamp-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400 md:text-[15px]">
                                {blog.brief}
                            </p>

                            <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500">
                                    <Calendar className="w-4 h-4" />
                                    <span className="rounded-full border border-zinc-200/60 bg-zinc-50/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] dark:border-zinc-700/60 dark:bg-zinc-800/50">
                                        {formatDate(blog.publishedAt)}
                                    </span>
                                </div>
                                <Link
                                    href={blog.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-zinc-100/60 px-4 py-2 text-sm font-semibold text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-zinc-100 hover:border-indigo-500/30 dark:border-zinc-700/60 dark:bg-zinc-800/60 dark:text-white dark:hover:bg-zinc-800 dark:hover:border-indigo-400/30"
                                >
                                    <span>Read More</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 flex justify-center">
                <Link
                    href="https://learnwithnehal.hashnode.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-black via-slate-950 to-black dark:from-white dark:via-zinc-200 dark:to-white text-white dark:text-black rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:shadow-blue-500/25 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3 border border-zinc-800/70 dark:border-zinc-200/80"
                >
                    <span>See Other 80+ Blogs</span>
                    <ExternalLink className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}

