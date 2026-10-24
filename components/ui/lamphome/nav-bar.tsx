"use client";

import { EASE_OUT_EXPO, SPRING_PROGRESS } from "@/lib/motion";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import React, { useEffect, useRef, useState } from "react";

interface NavItem {
    href: string;
    label: string;
}

interface NavBarProps {
    logoSrc?: string;
    logoAlt?: string;
    navItems: NavItem[];
    mobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    setMobileMenuOpen: (open: boolean) => void;
    children?: React.ReactNode;
}

function isNavActive(href: string, pathname: string, hash: string) {
    if (href === "/") {
        return pathname === "/" && (!hash || hash === "#home" || hash === "#");
    }
    if (href.startsWith("/#")) {
        return pathname === "/" && hash === href.slice(1);
    }
    return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavBar({
    navItems,
    mobileMenuOpen,
    toggleMobileMenu,
    setMobileMenuOpen,
    children,
}: NavBarProps) {
    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const [hash, setHash] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const lenis = useLenis();
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, SPRING_PROGRESS);

    useEffect(() => {
        const syncHash = () => setHash(window.location.hash || "");
        syncHash();
        window.addEventListener("hashchange", syncHash);
        return () => window.removeEventListener("hashchange", syncHash);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setMobileMenuOpen(false);
            }
        };

        if (mobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileMenuOpen, setMobileMenuOpen]);

    useEffect(() => {
        const apply = (y: number) => setScrolled(y > 16);
        apply(window.scrollY);
        const onWindowScroll = () => {
            apply(window.scrollY);
            if (mobileMenuOpen) setMobileMenuOpen(false);
        };
        window.addEventListener("scroll", onWindowScroll, { passive: true });
        return () => window.removeEventListener("scroll", onWindowScroll);
    }, [mobileMenuOpen, setMobileMenuOpen]);

    useEffect(() => {
        if (!lenis) return;
        const onScroll = ({ scroll }: { scroll: number }) => {
            setScrolled(scroll > 16);
        };
        lenis.on("scroll", onScroll);
        return () => {
            lenis.off("scroll", onScroll);
        };
    }, [lenis]);

    return (
        <motion.div
            ref={navRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
            className={`relative flex w-full items-center justify-between rounded-2xl border px-4 py-3 shadow-sm transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-5 ${
                scrolled
                    ? "border-zinc-200/50 bg-white/65 shadow-md backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-950/55"
                    : "border-zinc-200/80 bg-white/85 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/85"
            }`}
        >
            <div className="z-10 flex flex-1 items-center justify-start">
                <Link
                    href="/"
                    className="text-[13px] font-medium tracking-tight text-zinc-950 dark:text-white"
                >
                    Nehal
                </Link>
            </div>

            <nav className="relative z-10 hidden shrink-0 items-center gap-5 sm:flex md:gap-7">
                {navItems.map((item) => {
                    const active = isNavActive(item.href, pathname, hash);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`group relative text-[13px] font-normal transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900 dark:focus-visible:outline-white ${
                                active
                                    ? "text-zinc-950 dark:text-white"
                                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                            }`}
                        >
                            {item.label}
                            <span
                                className={`absolute -bottom-1 left-0 h-px bg-current transition-[width] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                    active ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                            />
                        </Link>
                    );
                })}
            </nav>

            <div className="z-10 flex flex-1 items-center justify-end gap-2">
                {children}

                <button
                    type="button"
                    onClick={toggleMobileMenu}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                    className="flex size-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:focus-visible:outline-white sm:hidden"
                >
                    <span className="relative block size-[18px]" aria-hidden>
                        <span
                            className={`absolute left-0 h-[1.5px] w-full origin-center bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                mobileMenuOpen ? "top-1/2 rotate-45" : "top-[4px]"
                            }`}
                        />
                        <span
                            className={`absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity duration-200 ${
                                mobileMenuOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`absolute left-0 h-[1.5px] w-full origin-center bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                mobileMenuOpen ? "top-1/2 -rotate-45" : "top-[13px]"
                            }`}
                        />
                    </span>
                </button>
            </div>

            <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-x-5 bottom-0 h-px origin-left bg-emerald-600/80 dark:bg-emerald-400"
                style={{ scaleX: progress }}
            />

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 left-0 z-50 mt-2 rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-950 sm:hidden"
                    >
                        <nav className="flex flex-col py-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-900"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
