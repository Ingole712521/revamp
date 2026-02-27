'use client';

import { motion, PanInfo } from 'motion/react';
import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { NavBar } from './lamphome/nav-bar';
import { ThemeChain } from './lamphome/theme-chain';
import { GlowEffects } from './lamphome/glow-effects';

interface NavItem {
  href: string;
  label: string;
}

interface LamphomeProps {
  title?: string;
  description?: string;
  logoSrc?: string;
  logoAlt?: string;
  navItems?: NavItem[];
  children?: React.ReactNode;
  className?: string;
}

export function Lamphome({
  title,
  description,
  logoSrc,
  logoAlt,
  navItems = [],
  children,
  className = '',
}: LamphomeProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use consistent values during SSR and initial hydration
  const isDarkMode = mounted && resolvedTheme === 'dark';
  const chainPulled = isDarkMode;
  const chainLength = isDarkMode ? 72 : 48;
  const showGlow = isDarkMode;
  const glowPosition: 'above' | 'below' = isDarkMode ? 'above' : 'below';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dynamicGlowPosition, setDynamicGlowPosition] = useState<
    'above' | 'below'
  >('below');

  const titleRef = useRef<HTMLHeadingElement>(null);
  const navBarRef = useRef<HTMLDivElement>(null);

  const calculateGlowPosition = (currentDragY: number) => {
    if (!titleRef.current || !navBarRef.current) return 'below';
    const navBarRect = navBarRef.current.getBoundingClientRect();
    const titleRect = titleRef.current.getBoundingClientRect();
    const chainEndY = navBarRect.bottom + chainLength + currentDragY;
    const titleCenterY = titleRect.top + titleRect.height / 2;
    return chainEndY < titleCenterY ? 'above' : 'below';
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    setIsDragging(false);
    const finalDragY = Math.max(0, info.offset.y);
    if (finalDragY > 8) {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    }
    setTimeout(() => {
      setDragY(0);
    }, 100);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const currentGlowPosition = isDragging ? dynamicGlowPosition : glowPosition;

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-start pt-2 [@media(min-width:480px)]:pt-4 [@media(min-width:768px)]:pt-6 [@media(min-width:1024px)]:pt-8 transition-all duration-500 text-black dark:text-white ${className}`}
    >
      <NavBar
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        navItems={navItems}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        setMobileMenuOpen={setMobileMenuOpen}
      >
        <ThemeChain
          chainLength={chainLength}
          dragY={dragY}
          isDragging={isDragging}
          chainPulled={chainPulled}
          isDarkMode={isDarkMode}
          currentGlowPosition={currentGlowPosition}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
          onDrag={(event, info) => {
            const newDragY = Math.max(0, info.offset.y);
            setDragY(newDragY);
            if (newDragY > 4) {
              const position = calculateGlowPosition(newDragY);
              setDynamicGlowPosition(position);
            }
          }}
        />
      </NavBar>

      <GlowEffects isDarkMode={isDarkMode} showGlow={showGlow} />

      {title && (
        <motion.h1
          ref={titleRef}
          className='mt-6 [@media(min-width:480px)]:mt-8 text-xl [@media(min-width:480px)]:text-2xl [@media(min-width:640px)]:text-3xl [@media(min-width:768px)]:text-4xl [@media(min-width:1024px)]:text-5xl [@media(min-width:1280px)]:text-6xl font-black bg-linear-to-r from-black via-zinc-700 to-black dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent text-center px-4 max-w-4xl tracking-tighter'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {title}
        </motion.h1>
      )}

      {mounted && !isDarkMode && (
        <motion.div
          initial={{ width: '60%', opacity: 1 }}
          animate={{
            width: '60%',
            opacity: 1,
          }}
          transition={{ duration: 0.8 }}
          className='border-t mt-4 max-w-2xl border-gray-300'
        />
      )}

      {description && (
        <motion.p
          className='mt-4 [@media(min-width:480px)]:mt-6 text-center text-xs [@media(min-width:480px)]:text-sm [@media(min-width:640px)]:text-base [@media(min-width:768px)]:text-lg text-zinc-800 dark:text-zinc-200 max-w-xs [@media(min-width:480px)]:max-w-md [@media(min-width:768px)]:max-w-2xl px-4 leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {description}
        </motion.p>
      )}

      {children && (
        <motion.div
          className='mt-6 [@media(min-width:480px)]:mt-8 w-full flex justify-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
