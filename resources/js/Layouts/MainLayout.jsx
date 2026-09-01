import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function MainLayout({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });
    // State baru untuk mengontrol menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    // Fungsi untuk menutup menu saat link diklik
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <div className="min-h-screen bg-[#f4f4f4] text-gray-900 dark:bg-zinc-900 dark:text-white transition-colors duration-500 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black flex flex-col">

            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-6 bg-[#f4f4f4]/80 dark:bg-zinc-900/80 backdrop-blur-md transition-all duration-500"
            >
                <div className="flex items-center space-x-4">
                    {/* TOMBOL HAMBURGER (Hanya muncul di Mobile/HP) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-[60]"
                    >
                        <motion.span
                            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-black dark:bg-white block transition-transform"
                        ></motion.span>
                        <motion.span
                            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-black dark:bg-white block"
                        ></motion.span>
                        <motion.span
                            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-black dark:bg-white block transition-transform"
                        ></motion.span>
                    </button>

                    <div className="text-xl md:text-2xl font-bold tracking-widest uppercase">
                        <Link href="/" onClick={closeMenu} className="hover:opacity-70 transition-opacity">
                            MYWATCH
                        </Link>
                    </div>
                </div>

                <div className="flex items-center space-x-6 md:space-x-8 text-sm uppercase tracking-widest">
                    {/* MENU DESKTOP (Sembunyi di HP) */}
                    <ul className="hidden md:flex space-x-8">
                        <li><Link href="/#collection" className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors">Collection</Link></li>
                        <li><Link href="/#design" className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors">Design</Link></li>
                        <li><Link href="/about" className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors">About</Link></li>
                    </ul>

                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full border border-gray-900 dark:border-white flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                    >
                        {isDarkMode ? '☼' : '☾'}
                    </button>
                </div>
            </motion.nav>

            {/* OVERLAY MENU MOBILE */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '-100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[55] bg-white dark:bg-zinc-900 flex flex-col items-center justify-center space-y-10 md:hidden"
                    >
                        <ul className="text-center space-y-8 text-2xl font-light tracking-[0.3em] uppercase">
                            <motion.li initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                                <Link href="/#collection" onClick={closeMenu} className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors">Collection</Link>
                            </motion.li>
                            <motion.li initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                <Link href="/#design" onClick={closeMenu} className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors">Design</Link>
                            </motion.li>
                            <motion.li initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                                <Link href="/about" onClick={closeMenu} className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors">About</Link>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-grow pt-20">
                {children}
            </main>

            <Footer />
        </div>
    );
}
