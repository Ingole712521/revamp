"use client";

import { useEffect, useState } from "react";

const FALLBACK_COUNT = 32858;

export function useVisitorCount() {
    const [count, setCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await fetch(
                    "https://api.counterapi.dev/v1/nehal-portfolio/visits/up",
                );
                const data = await response.json();
                if (data?.count) {
                    setCount(data.count);
                }
            } catch {
                setCount(FALLBACK_COUNT);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCount();
    }, []);

    return { count, isLoading };
}

export function formatVisitorNumber(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getVisitorOrdinal(n: number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const mod100 = n % 100;
    return suffixes[(mod100 - 20) % 10] || suffixes[mod100] || suffixes[0];
}
