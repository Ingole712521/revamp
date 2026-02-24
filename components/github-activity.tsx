"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { GITHUB_STATS } from '@/lib/constants';
import { Github, Clock } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

export function GithubActivity() {
    const [isOnline, setIsOnline] = useState(true);
    const [lastWorked, setLastWorked] = useState('8h 00m');
    const [currentTime, setCurrentTime] = useState(new Date());

    // Real-time online/offline status
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

    // Update "last worked" based on time of day (simulated real-time data)
    useEffect(() => {
        const updateLastWorked = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            // Simulate different activity patterns based on time
            if (hours >= 9 && hours <= 17) {
                // During work hours, show recent activity
                const workedMinutes = Math.min(minutes + hours * 60, 480); // Max 8 hours
                const workedHours = Math.floor(workedMinutes / 60);
                const workedMins = workedMinutes % 60;
                setLastWorked(`${workedHours}h ${workedMins.toString().padStart(2, '0')}m`);
            } else if (hours > 17) {
                // After work, show total day's work
                const totalMinutes = Math.min(480 + (hours - 17) * 10, 540); // Simulate overtime
                const workedHours = Math.floor(totalMinutes / 60);
                const workedMins = totalMinutes % 60;
                setLastWorked(`${workedHours}h ${workedMins.toString().padStart(2, '0')}m`);
            } else {
                // Early morning, show yesterday's stats
                setLastWorked('5h 30m');
            }
        };

        updateLastWorked();
        const interval = setInterval(updateLastWorked, 60000); // Update every minute

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
        <section id="github" className="section-container border-t border-zinc-100 dark:border-zinc-900">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2 block">Featured</span>
                    <h2>GitHub Activity</h2>
                </div>

                {/* Stats in column layout - each on its own line */}
                <div className="flex flex-col items-end gap-3">
                    {/* Total Contributions */}
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Total Contributions</span>
                        <span className="text-2xl font-black text-black dark:text-white leading-none mt-1">
                            {GITHUB_STATS.totalContributions.toLocaleString()}
                        </span>
                    </div>

                    {/* Online Status */}
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-zinc-400'} animate-pulse`} />
                            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                                {isOnline ? 'Online' : 'Offline'}
                            </span>
                        </div>
                    </div>

                    {/* Worked Today */}
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 text-sm font-bold text-black dark:text-white">
                            <Clock className="w-3.5 h-3.5 text-zinc-500" />
                            <span>Worked {lastWorked} today</span>
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
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                            Last updated: {currentTime.toLocaleTimeString()}
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}