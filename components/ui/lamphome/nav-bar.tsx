"use client"

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

export function NavBar({
    logoSrc,
    logoAlt,
    navItems,
    mobileMenuOpen,
    toggleMobileMenu,
    setMobileMenuOpen,
    children
}: NavBarProps) {
    return (
        <motion.div
            initial={{ width: '95%' }}
            animate={{ width: '95%' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative flex items-center justify-between w-full max-w-4xl h-auto py-3 px-3 [@media(min-width:768px)]:px-6 bg-white/80 dark:bg-neutral-950 backdrop-blur-xs border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300'
        >
            <div className='flex-1 flex items-center justify-start'>
                {logoSrc ? (
                    <div className='shrink-0'>
                        <Image
                            src={logoSrc}
                            alt={logoAlt || 'Logo'}
                            width={28}
                            height={28}
                            className='cursor-pointer hover:scale-110 transition-transform duration-200'
                        />
                    </div>
                ) : (
                    <div className="w-7 h-7" />
                )}
            </div>

            <nav className='shrink-0 hidden [@media(min-width:640px)]:flex items-center space-x-4 [@media(min-width:768px)]:space-x-6'>
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className='text-sm [@media(min-width:768px)]:text-base font-bold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative group'
                    >
                        {item.label}
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300'></span>
                    </Link>
                ))}
            </nav>

            <div className='flex-1 flex items-center justify-end space-x-2'>
                <button
                    onClick={toggleMobileMenu}
                    className='[@media(min-width:640px)]:hidden flex justify-center items-center p-2 bg-gray-100 dark:bg-neutral-900 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200'
                >
                    <motion.svg
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <line x1='3' y1='6' x2='21' y2='6' />
                        <line x1='3' y1='12' x2='21' y2='12' />
                        <line x1='3' y1='18' x2='21' y2='18' />
                    </motion.svg>
                </button>
            </div>

            {children}

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full left-0 right-0 mt-2 [@media(min-width:640px)]:hidden bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg backdrop-blur-xs z-50'
                    >
                        <nav className='flex flex-col py-2'>
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className='px-4 py-3 text-sm font-bold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors duration-200'
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
