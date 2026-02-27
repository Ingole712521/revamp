"use client";

import { HERO } from "@/lib/constants";
import { useEffect, useState } from "react";

export function Footer() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="section-container border-t border-zinc-100 dark:border-zinc-900 text-center py-10">
            <p className="text-sm">© {year ?? 2026} {HERO.name}. Built with Next.js & ScrollX UI.</p>
        </footer>
    );
}
