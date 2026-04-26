'use client';

import { ClickSpark, MagnetButton } from '@/components/ui/Interactions';
import Particles from '@/components/ui/Particles';
import { RotatingText, SplitText } from '@/components/ui/TextAnimations';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain">
            {/* Particles Background */}
            <Particles />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Top label */}
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 mb-8">
                    Portfolio
                </p>

                {/* Main heading */}
                <h1 className="font-sora text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
                    <SplitText text="Hello, I'm Danang Wahyu" bold={['Danang', 'Wahyu']} delay={35} />
                </h1>

                {/* SVG Underline */}
                <div className="flex justify-center mb-8">
                    <svg
                        width="280"
                        height="12"
                        viewBox="0 0 280 12"
                        fill="none"
                        className="opacity-60"
                    >
                        <path
                            d="M2 8C40 2 80 4 120 6C160 8 200 3 240 5C260 6 270 4 278 6"
                            stroke="#0A0A0A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="animate-draw"
                            style={{
                                strokeDasharray: 300,
                                strokeDashoffset: 0,
                                animation: 'drawLine 1.5s ease-out 1.2s both',
                            }}
                        />
                    </svg>
                </div>

                {/* Rotating subtitle */}
                <div className="font-mono text-lg sm:text-xl text-gray-600 mb-12">
                    <RotatingText
                        texts={['AI Engineer', 'ML Engineer', 'Data Scientist', 'Web Developer']}
                        interval={3000}
                    />
                </div>

                {/* CTA Button */}
                <MagnetButton>
                    <ClickSpark>
                        <button
                            onClick={() => {
                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-2 bg-dark text-light px-8 py-4 rounded-full font-dm font-medium text-base hover:bg-gray-800 transition-colors duration-300"
                        >
                            See My Work
                            <span className="text-lg">↓</span>
                        </button>
                    </ClickSpark>
                </MagnetButton>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
                    <div className="w-1 h-2 rounded-full bg-gray-400 animate-pulse-dot" />
                </div>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Scroll</span>
            </div>

            {/* Draw line keyframe */}
            <style jsx>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
        </section>
    );
}
