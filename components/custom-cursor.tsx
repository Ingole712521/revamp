"use client"

import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState("");

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "power2.out"
            });
        };

        const handleHoverStart = (e: any) => {
            const { detail } = e;
            if (detail && detail.text) {
                setText(detail.text);
                setIsVisible(true);
            }
        };

        const handleHoverEnd = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('project-hover-start' as any, handleHoverStart);
        window.addEventListener('project-hover-end' as any, handleHoverEnd);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('project-hover-start' as any, handleHoverStart);
            window.removeEventListener('project-hover-end' as any, handleHoverEnd);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 w-24 h-24 -ml-12 -mt-12 bg-white dark:bg-zinc-100 rounded-full flex items-center justify-center z-[9999] pointer-events-none transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 scale-50'}`}
            style={{ mixBlendMode: 'difference' }}
        >
            <span className="text-[10px] font-bold text-black uppercase tracking-widest text-center px-2">
                {text}
            </span>
        </div>
    );
}
