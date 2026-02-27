"use client"

import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

interface GlowEffectsProps {
    isDarkMode: boolean;
    showGlow: boolean;
}

export function GlowEffects({ isDarkMode, showGlow }: GlowEffectsProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !isDarkMode) return null;

    return (
        <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{
                width: showGlow ? '80%' : 0,
                opacity: showGlow ? 1 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative max-w-3xl mt-6 h-0.5 bg-linear-to-r from-transparent via-purple-400 to-transparent'
            style={{
                boxShadow: showGlow
                    ? '0 0 20px #A855F7, 0 0 40px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)'
                    : 'none',
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showGlow ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='absolute top-full left-1/2 transform -translate-x-1/2 w-full h-20 pointer-events-none'
                style={{
                    background: showGlow
                        ? 'radial-gradient(ellipse, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)'
                        : 'none',
                    filter: showGlow ? 'blur(15px)' : 'none',
                }}
            />
        </motion.div>
    );
}
