"use client";

import { LENIS_SCROLL_OFFSET } from "@/components/lenis-provider";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

export function HashScroll({ enabled = true }: { enabled?: boolean }) {
    const lenis = useLenis();

    useEffect(() => {
        if (!enabled || !lenis) return;

        const scrollToHash = () => {
            const hash = window.location.hash;
            if (!hash || hash === "#") return;

            const id = decodeURIComponent(hash.slice(1));
            const target = document.getElementById(id);
            if (target) {
                lenis.scrollTo(target, { offset: LENIS_SCROLL_OFFSET });
            }
        };

        const timeout = window.setTimeout(scrollToHash, 150);

        window.addEventListener("hashchange", scrollToHash);
        return () => {
            window.clearTimeout(timeout);
            window.removeEventListener("hashchange", scrollToHash);
        };
    }, [enabled, lenis]);

    return null;
}
