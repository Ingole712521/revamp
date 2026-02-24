"use client"

import React from 'react';
import { motion } from 'motion/react';
import { BLOGS } from '@/lib/constants';
import { getTechIcon } from '@/lib/icons';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function BlogSection() {
    return (
        <section id="blogs" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <div className="mb-12">
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2 block">Featured</span>
                <h2>Blogs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {BLOGS.map((blog, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30"
                    >
                        {/* Image Container */}
                        <div className="relative h-56 w-full overflow-hidden">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map(tag => {
                                        const icon = getTechIcon(tag);
                                        return (
                                            <span key={tag} className="flex items-center gap-1.5 px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
                                                <img src={icon} alt={tag} className="w-3 h-3 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-black dark:text-white mb-4 line-clamp-2 leading-tight group-hover:text-blue-500 transition-colors">
                                {blog.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                {blog.description}
                            </p>

                            <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{blog.date}</span>
                                </div>
                                <Link
                                    href={blog.link}
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
