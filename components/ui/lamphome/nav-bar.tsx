"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        const handleScroll = () => {
            if (mobileMenuOpen) setMobileMenuOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mobileMenuOpen, setMobileMenuOpen]);

    return (
        <motion.div
            ref={navRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex w-full items-center justify-between rounded-2xl border border-zinc-200/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/85 sm:px-5"
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
                            className={`relative text-[13px] font-normal transition-colors ${
                                active
                                    ? "text-zinc-950 dark:text-white"
                                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                            }`}
                        >
                            {item.label}
                            <span
                                className={`absolute -bottom-1 left-0 h-px bg-zinc-950 transition-all duration-300 dark:bg-white ${
                                    active ? "w-full" : "w-0"
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
                    aria-label="Toggle menu"
                    className="flex items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 p-2 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 sm:hidden"
                >
                    <motion.svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </motion.svg>
                </button>
            </div>

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
