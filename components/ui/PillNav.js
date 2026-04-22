'use client';

import { useEffect, useRef, useState } from 'react';

export default function PillNav({ items, activeSection }) {
    const [pillStyle, setPillStyle] = useState({});
    const navRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const activeIndex = items.findIndex((item) => item.id === activeSection);
        if (activeIndex >= 0 && itemRefs.current[activeIndex]) {
            const el = itemRefs.current[activeIndex];
            const nav = navRef.current;
            if (el && nav) {
                const navRect = nav.getBoundingClientRect();
                const elRect = el.getBoundingClientRect();
                setPillStyle({
                    left: elRect.left - navRect.left,
                    width: elRect.width,
                });
            }
        }
    }, [activeSection, items]);

    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            ref={navRef}
            className="relative flex items-center gap-1 rounded-full bg-gray-100/80 p-1 backdrop-blur-sm border border-gray-200/50"
        >
            {/* Sliding pill */}
            <div
                className="absolute top-1 h-[calc(100%-8px)] rounded-full bg-dark transition-all duration-300 ease-out"
                style={{
                    left: pillStyle.left || 0,
                    width: pillStyle.width || 0,
                }}
            />

            {items.map((item, index) => (
                <button
                    key={item.id}
                    ref={(el) => (itemRefs.current[index] = el)}
                    onClick={() => handleClick(item.id)}
                    className={`relative z-10 px-4 py-2 text-sm font-mono rounded-full transition-colors duration-300 ${activeSection === item.id ? 'text-light' : 'text-gray-500 hover:text-dark'
                        }`}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    );
}
