"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { GITHUB_STATS } from '@/lib/constants';
import { Github, Clock } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export function GithubActivity() {
    const { theme, systemTheme } = useTheme();
    const [isOnline, setIsOnline] = useState(true);
    const [lastWorked, setLastWorked] = useState('8h 00m');
    const [currentTime, setCurrentTime] = useState<Date | null>(null);
    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        setIsOnline(navigator.onLine);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    useEffect(() => {
        const updateLastWorked = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            if (hours >= 9 && hours <= 17) {
                const workedMinutes = Math.min(minutes + hours * 60, 480);
                const workedHours = Math.floor(workedMinutes / 60);
                const workedMins = workedMinutes % 60;
                setLastWorked(`${workedHours}h ${workedMins.toString().padStart(2, '0')}m`);
            } else if (hours > 17) {
                const totalMinutes = Math.min(480 + (hours - 17) * 10, 540);
                const workedHours = Math.floor(totalMinutes / 60);
                const workedMins = totalMinutes % 60;
                setLastWorked(`${workedHours}h ${workedMins.toString().padStart(2, '0')}m`);
            } else {
                setLastWorked('5h 30m');
            }
        };

        updateLastWorked();
        const interval = setInterval(updateLastWorked, 600000);

        return () => clearInterval(interval);
    }, []);

    // Update current time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="github" className="section-container border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="text-balance text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-zinc-950 md:text-2xl dark:text-white">
                        GitHub
                    </h2>
                    <p className="mt-2.5 max-w-[65ch] text-[15px] leading-[1.65] text-zinc-500 dark:text-zinc-400">
                        Contribution history and a snapshot of shipping cadence.
                    </p>
                </div>
                <div className="flex flex-col items-end gap-3">
                    <div className="flex flex-col items-end">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Total Contributions</span>
                        <span className="mt-1 text-2xl font-semibold tabular-nums leading-none text-black dark:text-white">
                            {GITHUB_STATS.totalContributions.toLocaleString('en-US')}
                        </span>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-zinc-400'} animate-pulse`} />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                                {isOnline ? 'Online' : 'Offline'}
                            </span>
                        </div>
                    </div>

                  
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-6 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[200px]"
            >
                <div className="flex-1 overflow-x-auto overflow-y-hidden pb-2 custom-horizontal-scrollbar">
                    {currentTime && (
                        <div className="w-max flex justify-start md:justify-center py-2 px-4">
                            <GitHubCalendar
                                username={GITHUB_STATS.username}
                                blockSize={11}
                                blockMargin={4}
                                fontSize={12}
                                colorScheme={theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? 'dark' : 'light'}
                                theme={{
                                    light: ['#f4f4f5', '#dcfce7', '#86efac', '#22c55e', '#15803d'],
                                    dark: ['#09090b', '#064e3b', '#059669', '#10b981', '#34d399'],
                                }}
                                renderBlock={(block, activity) =>
                                    React.cloneElement(block as React.ReactElement, {
                                        'data-tooltip-id': 'react-tooltip',
                                        'data-tooltip-content': `${activity.count} contributions on ${activity.date}`,
                                    } as any)
                                }
                            />
                            <Tooltip id="react-tooltip" className="z-50! rounded-md! bg-zinc-900! px-3! py-1.5! text-xs! font-bold! text-white! shadow-xl dark:bg-zinc-100! dark:text-black!" />
                        </div>
                    )}
                </div>

                <div className="w-full mt-4 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/50 pt-4">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                        <Github className="w-4 h-4 opacity-50" />
                        <span>{GITHUB_STATS.username}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                            Last updated: {currentTime?.toLocaleTimeString() ?? '--:--:--'}
                        </span>
                    </div>
                </div>
            </motion.div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-horizontal-scrollbar::-webkit-scrollbar {
                    height: 10px;
                }
                
                /* Track styling */
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-horizontal-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                    border-radius: 10px;
                    margin: 0 10px;
                }

                /* Thumb styling (the gray draggable bar) */
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d4d4d8;
                    border-radius: 3px;
                }
                .custom-horizontal-scrollbar::-webkit-scrollbar-thumb {
                    background: #9ca3af;
                    border-radius: 10px;
                }
                
                .dark .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #3f3f46;
                }
                .dark .custom-horizontal-scrollbar::-webkit-scrollbar-thumb {
                    background: #52525b;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover,
                .custom-horizontal-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #6b7280;
                }
                
                /* Adding the little directional arrows using scrollbar scroll buttons */
                .custom-horizontal-scrollbar::-webkit-scrollbar-button:single-button {
                    background-color: transparent;
                    display: block;
                    width: 16px;
                    height: 10px;
                    background-size: 10px;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                
                /* Left Arrow */
                .custom-horizontal-scrollbar::-webkit-scrollbar-button:single-button:horizontal:decrement {
                    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='%239ca3af'><path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z'/></svg>");
                }
                .dark .custom-horizontal-scrollbar::-webkit-scrollbar-button:single-button:horizontal:decrement {
                    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='%2352525b'><path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z'/></svg>");
                }

                /* Right Arrow */
                .custom-horizontal-scrollbar::-webkit-scrollbar-button:single-button:horizontal:increment {
                    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='%239ca3af'><path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z'/></svg>");
                }
                .dark .custom-horizontal-scrollbar::-webkit-scrollbar-button:single-button:horizontal:increment {
                    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='%2352525b'><path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z'/></svg>");
                }
            `}</style>
        </section>
    );
}