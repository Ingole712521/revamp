"use client";

import { EASE_OUT_EXPO } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function SectionReveal({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    const reduce = useReducedMotion();

    return (
        <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px", amount: 0.18 }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
