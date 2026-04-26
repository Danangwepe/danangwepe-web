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

                {/* Top Section: Bio + Photo (5-column grid) */}
                <FadeSection delay={200}>
                    <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center mb-16">

                        {/* Left: Bio (3 cols / 60%) */}
                        <div className="md:col-span-3 space-y-6">
                            <p className="font-dm text-lg leading-relaxed text-gray-600">
                                {"I'm"} an <span className="font-semibold text-gray-900">AI Engineer
                                    and Data Scientist</span> building trustworthy, production-ready AI
                                systems. Recent Computer Engineering graduate from Universitas
                                Diponegoro with a GPA of 3.78/4.00 and BNSP-Certified Associate
                                Data Scientist.
                            </p>
                            <p className="font-dm text-lg leading-relaxed text-gray-600">
                                My work focuses on AI architectures where computation precedes
                                interpretation, because trustworthy AI requires more than just
                                calling an LLM. Currently open to full-time opportunities.
                            </p>
                        </div>

                        {/* Right: Photo (2 cols / 40%) */}
                        <div className="md:col-span-2 flex justify-center md:justify-end">
                            <TiltCard className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src="/profile.jpg"
                                    alt="Danang Wahyu Prasektiyo"
                                    width={320}
                                    height={320}
                                    className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] object-cover"
                                    loading="lazy"
                                />
                            </TiltCard>
                        </div>

                    </div>
                </FadeSection>

                {/* Bottom Section: Education + Certification (Full Width Grid) */}
                <FadeSection delay={500}>
                    <div className="border-t border-gray-200 pt-12">
                        <div className="grid md:grid-cols-2 gap-8">

                            {/* Education Card */}
                            <div className="group bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                                <div className="flex items-start gap-3">
                                    {/* Logo */}
                                    <div className="flex-shrink-0 w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                                        <img
                                            src="/undip.png"
                                            alt="Logo Universitas Diponegoro"
                                            className="w-8 h-8 object-contain"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = `
                                                    <span class="font-sora font-bold text-xl text-gray-400">U</span>
                                                `;
                                            }}
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        {/* Eyebrow */}
                                        <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-0.5">
                                            Education
                                        </p>

                                        {/* Title */}
                                        <h3 className="font-sora font-bold text-base leading-tight text-gray-900 mb-0.5">
                                            Universitas Diponegoro
                                        </h3>
                                        <p className="font-dm text-xs text-gray-600">
                                            Bachelor of Computer Engineering
                                        </p>

                                        {/* Meta info */}
                                        <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-gray-100">
                                            <div className="inline-flex items-center gap-1.5">
                                                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="font-mono text-xs text-gray-600">2022 — 2026</span>
                                            </div>
                                            <div className="inline-flex items-center gap-1.5">
                                                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="font-mono text-xs text-gray-600 font-semibold">GPA 3.78 / 4.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Certification Card */}
                            <div className="group bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                                <div className="flex items-start gap-3">
                                    {/* BNSP Logo */}
                                    <div className="flex-shrink-0 w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                                        <img
                                            src="/bnsp-logo.png"
                                            alt="Logo BNSP"
                                            className="w-8 h-8 object-contain"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = `
                                                    <span class="font-sora font-bold text-xl text-gray-400">B</span>
                                                `;
                                            }}
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        {/* Eyebrow */}
                                        <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-0.5">
                                            Certification
                                        </p>

                                        {/* Title */}
                                        <h3 className="font-sora font-bold text-base leading-tight text-gray-900 mb-0.5">
                                            Associate Data Scientist
                                        </h3>
                                        <p className="font-dm text-xs text-gray-600">
                                            Badan Nasional Sertifikasi Profesi (BNSP)
                                        </p>

                                        {/* Meta info */}
                                        <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-gray-100">
                                            <div className="inline-flex items-center gap-1.5">
                                                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="font-mono text-xs text-gray-600">Dec 2025 — Dec 2028</span>
                                            </div>
                                            <div className="inline-flex items-center gap-1.5">
                                                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="font-mono text-xs text-emerald-600 font-semibold">Active</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </FadeSection>
            </div>
        </section>
    );
}