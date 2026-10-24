"use client";

import { SPRING_MAGNETIC } from "@/lib/motion";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import Link from "next/link";
import { type PointerEvent, type ReactNode, useCallback } from "react";

type SharedProps = {
    children: ReactNode;
    className?: string;
};

function useMagnetic() {
    const reduce = useReducedMotion();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, SPRING_MAGNETIC);
    const springY = useSpring(y, SPRING_MAGNETIC);

    const onPointerMove = useCallback(
        (event: PointerEvent<HTMLElement>) => {
            if (reduce) return;
            const rect = event.currentTarget.getBoundingClientRect();
            x.set((event.clientX - (rect.left + rect.width / 2)) * 0.12);
            y.set((event.clientY - (rect.top + rect.height / 2)) * 0.12);
        },
        [reduce, x, y],
    );

    const onPointerLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return { springX, springY, onPointerMove, onPointerLeave, reduce };
}

export function MagneticButton({
    children,
    className,
    type = "button",
    onClick,
    ariaLabel,
}: SharedProps & {
    type?: "button" | "submit";
    onClick?: () => void;
    ariaLabel?: string;
}) {
    const mag = useMagnetic();

    return (
        <motion.button
            type={type}
            onClick={onClick}
            aria-label={ariaLabel}
            onPointerMove={mag.onPointerMove}
            onPointerLeave={mag.onPointerLeave}
            whileTap={mag.reduce ? undefined : { scale: 0.97 }}
            style={{ x: mag.springX, y: mag.springY }}
            className={className}
        >
            {children}
        </motion.button>
    );
}

export function MagneticLink({
    children,
    className,
    href,
    external,
}: SharedProps & {
    href: string;
    external?: boolean;
}) {
    const mag = useMagnetic();

    return (
        <motion.div
            onPointerMove={mag.onPointerMove}
            onPointerLeave={mag.onPointerLeave}
            style={{ x: mag.springX, y: mag.springY }}
            className="inline-flex"
        >
            {external ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                >
                    {children}
                </a>
            ) : (
                <Link href={href} className={className}>
                    {children}
                </Link>
            )}
        </motion.div>
    );
}
