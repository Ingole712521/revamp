"use client"

import React from 'react';
import { motion } from 'motion/react';
import { GITHUB_STATS } from '@/lib/constants';
import { Github, Clock } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

export function GithubActivity() {
    return (
        <section id="github" className="w-full py-20 border-t border-zinc-100 dark:border-zinc-900">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2 block">Featured</span>
                        <h2 className="text-4xl font-black text-black dark:text-white uppercase tracking-tighter">GitHub Activity</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Total Contributions</span>
                            <span className="text-2xl font-black text-black dark:text-white leading-none mt-1">
                                {GITHUB_STATS.totalContributions.toLocaleString()}
                            </span>
                        </div>
                        <div className="h-10 w-px bg-zinc-200 dark:bg-zinc-800" />
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2 mb-1">
                                <div className={`w-2 h-2 rounded-full ${GITHUB_STATS.offlineStatus ? 'bg-zinc-400' : 'bg-green-500'} animate-pulse`} />
                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                                    {GITHUB_STATS.offlineStatus ? 'Offline' : 'Online'}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-black dark:text-white">
                                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                                <span>Worked {GITHUB_STATS.lastWorked} yesterday</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Graph Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-6 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center"
                >
                    <div className="w-full overflow-x-auto pb-4 custom-scrollbar flex md:justify-center">
                        <GitHubCalendar
                            username={GITHUB_STATS.username}
                            blockSize={11}
                            blockMargin={4}
                            fontSize={12}
                            theme={{
                                light: ['#f4f4f5', '#dcfce7', '#86efac', '#22c55e', '#15803d'],
                                dark: ['#09090b', '#064e3b', '#059669', '#10b981', '#34d399'],
                            }}
                        />
                    </div>

                    <div className="w-full mt-4 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/50 pt-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                            <Github className="w-4 h-4 opacity-50" />
                            <span>{GITHUB_STATS.username}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Real-time Contribution Map</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
