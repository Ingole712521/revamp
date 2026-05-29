"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Mail, X } from "lucide-react";
import { CONTACT_EMAIL, GMAIL_COMPOSE_URL } from "@/lib/constants";

type GmailRedirectContextValue = {
    requestGmailRedirect: () => void;
};

const GmailRedirectContext = createContext<GmailRedirectContextValue | null>(
    null
);

export function useGmailRedirect() {
    const ctx = useContext(GmailRedirectContext);
    if (!ctx) {
        throw new Error(
            "useGmailRedirect must be used within GmailRedirectProvider"
        );
    }
    return ctx;
}

function GmailRedirectModal({
    open,
    onClose,
    onConfirm,
}: {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}) {
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="gmail-redirect-title"
                    aria-describedby="gmail-redirect-desc"
                >
                    <motion.button
                        type="button"
                        aria-label="Close dialog"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-zinc-950/50 backdrop-blur-[6px] dark:bg-black/60"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-[420px] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_24px_80px_-12px_rgba(0,0,0,0.18)] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4 border-b border-zinc-100 px-6 py-5 dark:border-zinc-800/80">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                                    <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                                        Email
                                    </p>
                                    <h2
                                        id="gmail-redirect-title"
                                        className="text-base font-semibold text-zinc-900 dark:text-zinc-50"
                                    >
                                        Open Gmail compose?
                                    </h2>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                                aria-label="Close"
                            >
                                <X className="h-4 w-4" strokeWidth={1.75} />
                            </button>
                        </div>

                        <div className="px-6 py-5">
                            <div
                                id="gmail-redirect-desc"
                                className="relative overflow-hidden rounded-xl border border-zinc-200/90 bg-linear-to-br from-zinc-50 via-white to-zinc-50 p-5 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900"
                            >
                                <div
                                    className="pointer-events-none absolute inset-y-0 left-0 w-0.5 bg-zinc-900 dark:bg-zinc-100"
                                    aria-hidden
                                />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
                                    Compose ready
                                </p>
                                <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                                    Your message is one click away.
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    We&apos;ll open Gmail with everything ready
                                    so you can start the conversation instantly.
                                </p>
                            </div>

                         

                           
                        </div>

                        <div className="flex flex-col-reverse gap-2 border-t border-zinc-100 bg-zinc-50/50 px-6 py-4 sm:flex-row sm:justify-end dark:border-zinc-800/80 dark:bg-zinc-900/30">
                            <button
                                type="button"
                                onClick={onClose}
                                className="inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={onConfirm}
                                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                            >
                                Continue to Gmail
                                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export function GmailRedirectProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const requestGmailRedirect = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);
    const handleConfirm = useCallback(() => {
        window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
        setOpen(false);
    }, []);

    return (
        <GmailRedirectContext.Provider value={{ requestGmailRedirect }}>
            {children}
            {mounted &&
                createPortal(
                    <GmailRedirectModal
                        open={open}
                        onClose={handleClose}
                        onConfirm={handleConfirm}
                    />,
                    document.body
                )}
        </GmailRedirectContext.Provider>
    );
}
