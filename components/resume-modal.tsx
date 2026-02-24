"use client"

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Eye, FileText } from 'lucide-react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
    resumeUrl: string;
}

export function ResumeModal({ isOpen, onClose, resumeUrl }: ResumeModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[10000] cursor-pointer"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-4 md:inset-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl z-[10001] flex flex-col overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-black dark:text-white">Curriculum Vitae</h3>
                                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium uppercase tracking-widest">Nehal_Ingole_Resume.pdf</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href={resumeUrl}
                                    download="Nehal_Ingole_Resume.pdf"
                                    className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-black dark:text-white rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 border border-zinc-200 dark:border-zinc-700"
                                >
                                    <Download className="w-4 h-4" />
                                    <span className="hidden sm:inline">Download</span>
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-red-500/20 hover:text-red-400 text-zinc-600 dark:text-zinc-400 rounded-full transition-all border border-zinc-200 dark:border-zinc-700"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Content (PDF Preview) */}
                        <div className="flex-1 bg-zinc-950 relative">
                            <iframe
                                src={`${resumeUrl}#toolbar=0`}
                                className="w-full h-full border-none"
                                title="Resume Preview"
                            />

                            {/* Overlay for mobile or empty states if needed */}
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none">
                                <p className="text-[10px] text-zinc-500 text-center font-bold uppercase tracking-[0.2em]">
                                    Interactive PDF Viewer • Securely Served
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
