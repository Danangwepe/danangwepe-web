'use client';

import { Marquee } from '@/components/ui/Interactions';

export default function MarqueeStrip({ text }) {
    return (
        <div className="py-8 md:py-12 overflow-hidden border-y border-gray-200/50">
            <Marquee speed={25}>
                <span className="stroke-text font-sora text-5xl md:text-7xl lg:text-8xl font-bold whitespace-nowrap px-4 select-none">
                    {text}
                </span>
            </Marquee>
        </div>
    );
}
