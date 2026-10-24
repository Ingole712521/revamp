"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const LENIS_SCROLL_OFFSET = -112;

const LENIS_OPTIONS = {
    autoRaf: true,
    lerp: 0.08,
    duration: 1.1,
    smoothWheel: true,
    syncTouch: false,
    anchors: { offset: LENIS_SCROLL_OFFSET },
    stopInertiaOnNavigate: true,
} as const;

function LenisRouteSync() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis || window.location.hash) return;
        lenis.scrollTo(0, { immediate: true });
    }, [pathname, lenis]);

    useEffect(() => {
        if (!lenis) return;
        const onScroll = () => ScrollTrigger.update();
        lenis.on("scroll", onScroll);
        requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => {
            lenis.off("scroll", onScroll);
        };
    }, [lenis]);

    return null;
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={LENIS_OPTIONS}>
            <LenisRouteSync />
            {children}
        </ReactLenis>
    );
}
