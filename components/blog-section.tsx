"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface HashnodePost {
    title: string;
    slug: string;
    publishedAt: string;
    brief: string;
    coverImage?: {
        url: string;
    };
    tags?: Array<{
        name: string;
    }>;
}

const fetchPosts = async (): Promise<HashnodePost[]> => {
    const headers = {
        "content-type": "application/json",
        "Authorization": "f8c3ef54-e83e-41f2-b21b-5c57adae93eb",
    };
    const requestBody = {
        query: `query Publication {
            publication(host: "learnwithnehal.hashnode.dev") {
                posts(first: 10) {
                    edges {
                        node {
                            title
                            slug
                            publishedAt
                            brief
                            coverImage {
                                url
                            }
                            tags {
                                name
                            }
                        }
                    }
                }
            }
        }`,
    };
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
    };

    const response = await fetch("https://gql.hashnode.com", options);
    const data = await response.json();

    const edges = data?.data?.publication?.posts?.edges || [];
    return edges.map((edge: { node: HashnodePost }) => edge.node);
};

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    return `${month} ${day}, ${year}`;
};

export function BlogSection() {
    const [blogs, setBlogs] = useState<HashnodePost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                setLoading(true);
                const posts = await fetchPosts();
                setBlogs(posts);
            } catch (err) {
                setError('Failed to load blogs');
                console.error('Error fetching blogs:', err);
            } finally {
                setLoading(false);
            }
        };

        loadBlogs();
    }, []);

    if (loading) {
        return (
            <section id="blogs" className="section-container border-t border-zinc-100 dark:border-zinc-900">
                <div className="mb-12">
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2 block">Featured</span>
                    <h2>Blogs</h2>
                </div>
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="blogs" className="section-container border-t border-zinc-100 dark:border-zinc-900">
                <div className="mb-12">
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2 block">Featured</span>
                    <h2>Blogs</h2>
                </div>
                <div className="text-center py-20 text-zinc-500">
                    <p>{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section id="blogs" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <div className="mb-12">
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2 block">Featured</span>
                <h2>Blogs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog, idx) => (
                    <motion.div
                        key={blog.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30"
                    >
                        {/* Image Container */}
                        <div className="relative h-56 w-full overflow-hidden">
                            <Image
                                src={blog.coverImage?.url || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags?.slice(0, 3).map((tag) => (
                                        <span key={tag.name} className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-black dark:text-white mb-4 line-clamp-2 leading-tight group-hover:text-blue-500 transition-colors">
                                {blog.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                {blog.brief}
                            </p>

                            <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{formatDate(blog.publishedAt)}</span>
                                </div>
                                <Link
                                    href={`https://learnwithnehal.hashnode.dev/${blog.slug}`}
                                    target="_blank"
                                    className="flex items-center gap-2 text-sm font-black text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
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
                    className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:shadow-blue-500/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3 border border-zinc-800 dark:border-zinc-200"
                >
                    <span>Show all blogs</span>
                    <ExternalLink className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
