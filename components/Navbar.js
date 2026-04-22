'use client';

import PillNav from '@/components/ui/PillNav';
import { useCallback, useEffect, useState } from 'react';

const NAV_ITEMS = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Track scroll state + active section in a single scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Bottom-of-page check
            const atBottom =
                window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
            if (atBottom) {
                setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id);
                return;
            }

            // Find the last section whose top has scrolled past offset
            const offset = 150;
            let current = '';
            for (const { id } of NAV_ITEMS) {
                const el = document.getElementById(id);
                if (!el) continue;
                if (el.getBoundingClientRect().top <= offset) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = useCallback((id) => {
        setMobileOpen(false);
        setActiveSection(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-light/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="font-sora font-bold text-xl tracking-tight">
                        danangwepe<span className="text-gray-400">_.</span>
                    </a>

                    {/* Desktop PillNav + CV Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <PillNav items={NAV_ITEMS} activeSection={activeSection} />
                        <a
                            href="/docs/DANANG WAHYU PRASEKTIYO - CV.pdf"
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark text-light text-sm font-dm font-medium hover:bg-gray-800 transition-colors duration-300"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            CV
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-light/95 menu-overlay flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {NAV_ITEMS.map((item, i) => (
                    <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className="font-sora text-3xl font-semibold text-dark hover:text-gray-500 transition-colors"
                        style={{
                            transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                            opacity: mobileOpen ? 1 : 0,
                            transition: `all 0.4s ease ${i * 0.08}s`,
                        }}
                    >
                        {item.label}
                    </button>
                ))}
                {/* Mobile CV Button */}
                <a
                    href="/docs/DANANG WAHYU PRASEKTIYO - CV.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark text-light text-lg font-sora font-semibold hover:bg-gray-800 transition-colors"
                    style={{
                        transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                        opacity: mobileOpen ? 1 : 0,
                        transition: `all 0.4s ease ${NAV_ITEMS.length * 0.08}s`,
                    }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download CV
                </a>
            </div>
        </>
    );
}
