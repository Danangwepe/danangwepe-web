'use client';

import { useEffect, useRef, useState } from 'react';

// ===== SplitText: Character-by-character reveal =====
export function SplitText({ text, className = '', delay = 40, bold = [] }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Parse text to handle bold words
    const words = text.split(' ');
    let charIndex = 0;

    return (
        <span ref={ref} className={`inline-block ${className}`} aria-label={text}>
            {words.map((word, wIdx) => {
                const isBold = bold.includes(word);
                const chars = word.split('').map((char, cIdx) => {
                    const ci = charIndex++;
                    return (
                        <span
                            key={`${wIdx}-${cIdx}`}
                            className="inline-block transition-all duration-300"
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                                transitionDelay: `${ci * delay}ms`,
                            }}
                        >
                            {char}
                        </span>
                    );
                });
                charIndex++; // space
                return (
                    <span key={wIdx} className={`inline-block ${isBold ? 'font-bold' : ''}`}>
                        {chars}
                        {wIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                    </span>
                );
            })}
        </span>
    );
}

// ===== BlurText: Word-by-word blur-to-focus =====
export function BlurText({ text, className = '', delay = 100 }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const words = text.split(' ');

    return (
        <span ref={ref} className={className}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className="inline-block transition-all duration-500"
                    style={{
                        opacity: visible ? 1 : 0,
                        filter: visible ? 'blur(0px)' : 'blur(8px)',
                        transform: visible ? 'translateY(0)' : 'translateY(5px)',
                        transitionDelay: `${i * delay}ms`,
                    }}
                >
                    {word}
                    {i < words.length - 1 && '\u00A0'}
                </span>
            ))}
        </span>
    );
}

// ===== RotatingText: Cycling text with fade =====
export function RotatingText({ texts, interval = 3000, className = '' }) {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % texts.length);
                setFade(true);
            }, 400);
        }, interval);
        return () => clearInterval(timer);
    }, [texts, interval]);

    return (
        <span
            className={`inline-block transition-all duration-400 ${className}`}
            style={{
                opacity: fade ? 1 : 0,
                transform: fade ? 'translateY(0)' : 'translateY(10px)',
            }}
        >
            {texts[index]}
        </span>
    );
}
