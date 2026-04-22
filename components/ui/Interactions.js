'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// ===== MagnetButton: Element follows cursor within proximity =====
export function MagnetButton({ children, className = '', strength = 0.3 }) {
    const ref = useRef(null);
    const [style, setStyle] = useState({});

    const handleMouseMove = useCallback((e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setStyle({
            transform: `translate(${x * strength}px, ${y * strength}px)`,
            transition: 'transform 0.2s ease-out',
        });
    }, [strength]);

    const handleMouseLeave = useCallback(() => {
        setStyle({
            transform: 'translate(0px, 0px)',
            transition: 'transform 0.4s ease-out',
        });
    }, []);

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`inline-block ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}

// ===== ClickSpark: Spark particles on click =====
export function ClickSpark({ children, className = '' }) {
    const containerRef = useRef(null);
    const [sparks, setSparks] = useState([]);

    const handleClick = useCallback((e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newSparks = Array.from({ length: 8 }, (_, i) => ({
            id: Date.now() + i,
            x,
            y,
            angle: (i * 45) * (Math.PI / 180),
        }));

        setSparks((prev) => [...prev, ...newSparks]);
        setTimeout(() => {
            setSparks((prev) => prev.filter((s) => !newSparks.find((ns) => ns.id === s.id)));
        }, 600);
    }, []);

    return (
        <div ref={containerRef} onClick={handleClick} className={`relative ${className}`}>
            {children}
            {sparks.map((spark) => (
                <span
                    key={spark.id}
                    className="absolute pointer-events-none"
                    style={{
                        left: spark.x,
                        top: spark.y,
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#0A0A0A',
                        animation: 'sparkMove 0.6s ease-out forwards',
                        '--spark-x': `${Math.cos(spark.angle) * 40}px`,
                        '--spark-y': `${Math.sin(spark.angle) * 40}px`,
                    }}
                />
            ))}
            <style jsx>{`
        @keyframes sparkMove {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--spark-x), var(--spark-y)) scale(0);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
}

// ===== FadeSection: IntersectionObserver fade+slide wrapper =====
export function FadeSection({ children, className = '', delay = 0 }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

// ===== CountUp: Animated number counter on scroll =====
export function CountUp({ end, suffix = '', duration = 2000, className = '' }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [started, end, duration]);

    return (
        <span ref={ref} className={className}>
            {count}{suffix}
        </span>
    );
}

// ===== Marquee: Infinite horizontal scroll =====
export function Marquee({ children, className = '', speed = 30 }) {
    return (
        <div className={`overflow-hidden marquee-mask ${className}`}>
            <div
                className="flex whitespace-nowrap"
                style={{
                    animation: `marquee ${speed}s linear infinite`,
                }}
            >
                <div className="flex-shrink-0 flex items-center">{children}</div>
                <div className="flex-shrink-0 flex items-center">{children}</div>
            </div>
        </div>
    );
}
