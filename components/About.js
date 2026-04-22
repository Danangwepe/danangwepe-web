'use client';

import { TiltCard } from '@/components/ui/Cards';
import { FadeSection } from '@/components/ui/Interactions';
import { BlurText } from '@/components/ui/TextAnimations';

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section label */}
                <FadeSection>
                    <p className="font-mono text-sm text-gray-400 mb-4">01 / About</p>
                </FadeSection>

                {/* Heading */}
                <FadeSection delay={100}>
                    <h2 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
                        <BlurText text="About Me" />
                    </h2>
                </FadeSection>

                {/* Two-column layout */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
                    {/* Left: Bio + Education */}
                    <FadeSection delay={200}>
                        <div className="space-y-8">
                            {/* Bio Text */}
                            <div className="space-y-6">
                                <p className="font-dm text-lg leading-relaxed text-gray-600">
                                    I'm Danang Wahyu Prasektiyo, a Final Year Computer Engineering student
                                    with a strong focus on Artificial Intelligence, Machine Learning, and Data Science.
                                </p>
                                <p className="font-dm text-lg leading-relaxed text-gray-600">
                                    Constantly learning and improving my technical and soft skills, I aim to
                                    contribute meaningfully to impactful tech projects. Open to collaboration,
                                    internships, or opportunities that align with my interests and help me grow professionally.
                                </p>
                            </div>

                            {/* Education - Design Baru dengan Garis Vertikal */}
                            <div className="pt-8">
                                <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-6">
                                    Education
                                </p>

                                <div className="relative pl-8 md:pl-10">
                                    {/*Vertical Line */}
                                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300" />

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            {/* University Logo */}
                                            <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden">
                                                <img
                                                    src="/undip.png"
                                                    alt="Logo Universitas Diponegoro"
                                                    className="w-12 h-12 md:w-14 md:h-14 object-contain"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.parentElement.innerHTML = `
                <div class="w-full h-full flex items-center justify-center">
                    <span class="font-sora font-bold text-2xl text-gray-400">U</span>
                </div>
            `;
                                                    }}
                                                />
                                            </div>

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-sora font-bold text-lg md:text-xl leading-tight text-gray-900">
                                                    Universitas Diponegoro
                                                </h3>
                                                <p className="font-dm text-sm text-gray-500 mt-1.5">
                                                    Computer Engineering - S1
                                                </p>

                                                {/* Badges */}
                                                <div className="flex flex-wrap items-center gap-3 mt-4">
                                                    {/* Badge 1: Tahun*/}
                                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg border border-emerald-100">
                                                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span className="font-mono text-xs text-emerald-700">2022 — Now</span>
                                                    </div>

                                                    {/* Badge 2: IPK*/}
                                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg border border-emerald-100">
                                                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span className="font-mono text-xs text-emerald-700">IPK: 3.78</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeSection>

                    {/* Right: Photo - ✅ Ukuran tetap besar */}
                    <FadeSection delay={400}>
                        <div className="flex justify-center md:justify-end">
                            <TiltCard className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src="/profile.jpg"
                                    alt="Danang Wahyu Prasektiyo"
                                    width={350}
                                    height={350}
                                    className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-cover"
                                    loading="lazy"
                                />
                            </TiltCard>
                        </div>
                    </FadeSection>
                </div>
            </div>
        </section>
    );
}