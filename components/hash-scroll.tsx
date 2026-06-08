"use client";

import { useEffect } from "react";

function scrollToHash(hash: string) {
    if (!hash || hash === "#") return;

    const id = decodeURIComponent(hash.slice(1));
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HashScroll({ enabled = true }: { enabled?: boolean }) {
    useEffect(() => {
        if (!enabled) return;

        const handleHash = () => {
            requestAnimationFrame(() => {
                scrollToHash(window.location.hash);
            });
        };

        const timeout = window.setTimeout(handleHash, 100);

        window.addEventListener("hashchange", handleHash);
        return () => {
            window.clearTimeout(timeout);
            window.removeEventListener("hashchange", handleHash);
        };
    }, [enabled]);

    return null;
}
