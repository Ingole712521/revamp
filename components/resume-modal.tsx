"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLenis } from "lenis/react";
import { X, Download, FileText } from "lucide-react";
import { ResumeView } from "@/components/resume-view";
import { RESUME_PDF_FILENAME, RESUME_PDF_URL } from "@/lib/resume-data";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    const resumeRef = useRef<HTMLDivElement>(null);
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        if (isOpen) {
            lenis.stop();
        } else {
            lenis.start();
        }

        return () => {
            lenis.start();
        };
    }, [isOpen, lenis]);

    const handleDownloadPdf = useCallback(() => {
        const link = document.createElement("a");
        link.href = RESUME_PDF_URL;
        link.download = RESUME_PDF_FILENAME;
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="resume-modal-backdrop fixed inset-0 z-[10000] cursor-pointer bg-zinc-950/50 backdrop-blur-[6px] dark:bg-black/60 print:hidden"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 16 }}
                        data-lenis-prevent
                        className="resume-modal-shell fixed left-1/2 top-1/2 z-[10001] flex h-[min(78vh,640px)] w-[min(calc(100vw-1.5rem),40rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_24px_80px_-12px_rgba(0,0,0,0.18)] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] print:inset-0 print:h-auto print:max-h-none print:w-full print:translate-none print:rounded-none print:border-0"
                    >
                        <div className="resume-modal-toolbar flex shrink-0 items-center justify-between border-b border-zinc-100 bg-zinc-50/80 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/50 sm:px-6 print:hidden">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                    <FileText className="h-4 w-4" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                                        Curriculum Vitae
                                    </h3>
                                    <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                                        Preview & download
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* <a
                                    href={NOTION_RESUME_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden items-center gap-1.5 rounded-lg border border-zinc-700 px-3 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white sm:inline-flex"
                                >
                                    View on Notion
                                    <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
                                </a> */}
                                <button
                                    type="button"
                                    onClick={handleDownloadPdf}
                                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                                >
                                    <Download className="h-3.5 w-3.5" strokeWidth={1.75} />
                                    <span className="hidden sm:inline">Download PDF</span>
                                    <span className="sm:hidden">PDF</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                                    aria-label="Close"
                                >
                                    <X className="h-5 w-5" strokeWidth={1.75} />
                                </button>
                            </div>
                        </div>

                        <div
                            ref={resumeRef}
                            data-lenis-prevent
                            data-lenis-prevent-wheel
                            data-lenis-prevent-touch
                            className="flex-1 overflow-y-auto overscroll-contain print:overflow-visible"
                            onWheel={(e) => e.stopPropagation()}
                        >
                            <ResumeView id="resume-print-root" />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
