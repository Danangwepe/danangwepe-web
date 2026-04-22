'use client';

import { FadeSection } from '@/components/ui/Interactions';
import { BlurText } from '@/components/ui/TextAnimations';

const timelineData = [
    {
        year: '2021',
        title: 'Masuk Teknik Komputer',
        place: 'Universitas Diponegoro',
        description: 'Memulai perjalanan di dunia Computer Engineering',
    },
    {
        year: '2022',
        title: 'Fokus AI & Machine Learning',
        place: 'Konsentrasi Studi',
        description: 'Mendalami kursus dan projek terkait AI, ML, dan Data Science',
    },
    {
        year: '2023',
        title: 'Pengembangan SmarTik',
        place: 'Project Team',
        description: 'Membangun platform klasifikasi dan generasi motif batik Semarangan',
    },
    {
        year: '2024',
        title: 'Launch smartik.id',
        place: 'Live Platform',
        description: 'Meluncurkan platform SmarTik ke publik dengan fitur AI lengkap',
    },
];

export default function Timeline() {
    return (
        <section id="timeline" className="py-24 md:py-32 px-6 bg-[#f6f6f6] relative grain">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section label */}
                <FadeSection>
                    <p className="font-mono text-sm text-gray-400 mb-4">04 / Timeline</p>
                </FadeSection>

                {/* Heading */}
                <FadeSection delay={100}>
                    <h2 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
                        <BlurText text="Perjalanan Saya" />
                    </h2>
                </FadeSection>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[7px] md:left-[9px] top-0 bottom-0 w-px bg-gray-300" />

                    <div className="space-y-8">
                        {timelineData.map((item, i) => (
                            <FadeSection key={item.year} delay={200 + i * 100}>
                                <div className="relative pl-10 md:pl-12">
                                    {/* Dot marker */}
                                    <div className="absolute left-0 top-6 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full bg-dark border-4 border-[#f6f6f6]" />

                                    {/* Card */}
                                    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <span className="font-mono text-sm font-bold bg-gray-100 px-3 py-1 rounded-full">
                                                {item.year}
                                            </span>
                                            <span className="font-mono text-xs text-gray-400">{item.place}</span>
                                        </div>
                                        <h3 className="font-sora text-lg font-bold mb-1">{item.title}</h3>
                                        <p className="font-dm text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </div>
                            </FadeSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
