"use client"

import { motion, PanInfo } from "motion/react";
import React, { useEffect, useState } from "react";

interface ThemeChainProps {
    chainLength: number;
    dragY: number;
    isDragging: boolean;
    chainPulled: boolean;
    isDarkMode: boolean;
    currentGlowPosition: 'above' | 'below';
    handleDragStart: () => void;
    handleDragEnd: (event: any, info: PanInfo) => void;
    onDrag: (event: any, info: PanInfo) => void;
}

export function ThemeChain({
    chainLength,
    dragY,
    isDragging,
    chainPulled,
    isDarkMode,
    currentGlowPosition,
    handleDragStart,
    handleDragEnd,
    onDrag
}: ThemeChainProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div className='absolute right-3 top-full mt-2 flex flex-col items-center group z-10'>
            <motion.div
                className='w-1 bg-linear-to-b from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full shadow-xs relative'
                initial={{
                    height: chainLength,
                }}
                animate={{
                    height: chainLength + dragY,
                    scaleY: 1,
                }}
                transition={{
                    duration: isDragging ? 0.05 : 0.6,
                    ease: isDragging ? 'linear' : 'easeOut',
                    type: isDragging ? 'tween' : 'spring',
                    stiffness: isDragging ? undefined : 200,
                    damping: isDragging ? undefined : 20,
                }}
                style={{
                    transformOrigin: 'top center',
                }}
            >
                {dragY > 4 && (
                    <div className='absolute inset-0 flex flex-col justify-evenly'>
                        {Array.from({
                            length: Math.floor((chainLength + dragY) / 8),
                        }).map((_, i) => (
                            <div
                                key={i}
                                className='w-full h-0.5 bg-gray-500 dark:bg-gray-400 rounded-full opacity-40'
                            />
                        ))}
                    </div>
                )}
            </motion.div>
            <motion.div
                drag='y'
                dragConstraints={{ top: 0, bottom: 12 }}
                dragElastic={0}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDrag={onDrag}
                whileHover={{ scale: 1.05 }}
                whileDrag={{
                    scale: 1.12,
                    boxShadow: `0 ${6 + dragY * 0.3}px ${14 + dragY * 0.3
                        }px rgba(0,0,0,0.3)`,
                }}
                className='w-6 h-6 bg-linear-to-br from-yellow-400 to-yellow-600 dark:from-yellow-300 dark:to-yellow-500 rounded-full shadow-lg border-2 border-yellow-500 dark:border-yellow-400 transition-shadow duration-200 relative overflow-hidden cursor-grab active:cursor-grabbing'
                animate={{
                    rotateZ: chainPulled ? 180 : 0,
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                }}
                style={{ position: 'relative', top: -20, y: 0 }}
            >
                <div className='w-full h-full rounded-full bg-linear-to-br from-yellow-300 to-transparent opacity-60'></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='flex flex-col space-y-0.5'>
                        <motion.div
                            className='w-3 h-0.5 bg-yellow-700 dark:bg-yellow-200 rounded-full opacity-60'
                            animate={{ scaleX: 1 + dragY * 0.02 }}
                        />
                        <motion.div
                            className='w-3 h-0.5 bg-yellow-700 dark:bg-yellow-200 rounded-full opacity-60'
                            animate={{ scaleX: 1 + dragY * 0.02 }}
                        />
                        <motion.div
                            className='w-3 h-0.5 bg-yellow-700 dark:bg-yellow-200 rounded-full opacity-60'
                            animate={{ scaleX: 1 + dragY * 0.02 }}
                        />
                    </div>
                </div>
                {mounted && isDarkMode && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='absolute inset-0 flex items-center justify-center bg-yellow-500/90 dark:bg-yellow-400/90 rounded-full backdrop-blur-xs'
                    >
                        <svg
                            width='12'
                            height='12'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            className='text-gray-800'
                        >
                            <circle cx='12' cy='12' r='5' />
                            <line x1='12' y1='1' x2='12' y2='3' />
                            <line x1='12' y1='21' x2='12' y2='23' />
                            <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
                            <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
                            <line x1='1' y1='12' x2='3' y2='12' />
                            <line x1='21' y1='12' x2='23' y2='12' />
                            <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
                            <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
                        </svg>
                    </motion.div>
                )}
                {mounted && !isDragging && !chainPulled && (
                    <motion.div
                        className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap pointer-events-none bg-white/80 dark:bg-slate-800/80 px-2 py-1 rounded-full'
                        initial={{ opacity: 0, y: -5 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            y: [0, -2, -2, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2,
                            ease: 'easeInOut',
                        }}
                    >
                        Pull to toggle theme!
                    </motion.div>
                )}
                {isDragging && dragY > 4 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: dragY > 8 ? 1 : 0.7,
                            scale: dragY > 8 ? 1.1 : 1,
                        }}
                        className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs text-white px-3 py-1.5 rounded-full whitespace-nowrap pointer-events-none font-medium transition-all duration-200 ${currentGlowPosition === 'above'
                                ? 'bg-purple-600'
                                : 'bg-amber-600'
                            }`}
                    >
                        {dragY > 8
                            ? `🌟 Release for ${currentGlowPosition === 'above' ? 'Dark' : 'Light'
                            } Mode!`
                            : `Pull ${Math.round(8 - dragY)}px more`}
                    </motion.div>
                )}
                {!isDragging && dragY > 0 && (
                    <motion.div
                        className='absolute inset-0 rounded-full bg-yellow-300 opacity-30'
                        initial={{ scale: 1.2, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                )}
            </motion.div>
        </div>
    );
}
