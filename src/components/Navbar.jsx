import { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isDark = true, onToggleTheme }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMobileMenuOpen(false);
    };

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const textColor = isDark ? 'text-white' : 'text-slate-900';
    const textMuted = isDark ? 'text-white/80' : 'text-slate-700';
    const glassBg = isDark ? 'bg-white/10' : 'bg-slate-900/5';
    const borderCol = isDark ? 'border-white/20' : 'border-slate-900/10';

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? `${glassBg} backdrop-blur-md border-b ${borderCol} shadow-lg` 
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo/Brand */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                    {/* //     <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center"> */}
                    //         {/* <span className="text-white font-bold text-lg lg:text-xl">N</span> */}
                    {/* //     </div> */}
                        {/* <span className={`${textColor} font-bold text-xl lg:text-2xl`}>Nehal</span> */}
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {NAVIGATION_LINKS.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className={`${textMuted} hover:${textColor} font-medium transition-all duration-300 relative group`}
                                whileHover={{ y: -2 }}
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                            </motion.a>
                        ))}
                        <button
                            onClick={onToggleTheme}
                            className={`px-3 py-1.5 rounded-lg ${glassBg} ${borderCol} border ${textColor}`}
                            aria-label="Toggle theme"
                        >
                            {isDark ? 'Light' : 'Dark'}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center lg:hidden gap-2">
                        <button
                            onClick={onToggleTheme}
                            className={`px-3 py-1.5 rounded-lg ${glassBg} ${borderCol} border ${textColor}`}
                            aria-label="Toggle theme"
                        >
                            {isDark ? 'Light' : 'Dark'}
                        </button>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 rounded-lg ${glassBg} border ${borderCol}`}
                        >
                            {isMobileMenuOpen ? (
                                <CloseOutlined className={`${textColor} text-xl`} />
                            ) : (
                                <MenuOutlined className={`${textColor} text-xl`} />
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="lg:hidden mt-4 pb-4"
                        >
                            <div className={`${glassBg} backdrop-blur-md rounded-xl border ${borderCol} p-6`}>
                                <div className="space-y-4">
                                    {NAVIGATION_LINKS.map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.href}
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                            className={`block ${textMuted} hover:${textColor} font-medium text-lg transition-all duration-300`}
                                            variants={itemVariants}
                                            whileHover={{ x: 10 }}
                                        >
                                            {item.label}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
