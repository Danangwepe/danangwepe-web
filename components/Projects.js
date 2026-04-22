'use client';

import { SpotlightCard } from '@/components/ui/Cards';
import { FadeSection } from '@/components/ui/Interactions';
import { BlurText } from '@/components/ui/TextAnimations';
import { useState } from 'react';

const projects = [
    {
        num: '01',
        title: 'SmarTik.id',
        description:
            'AI platform for classifying Semarang batik motifs and generating new designs from sketches using deep learning.',
        tags: ['Next.js', 'TensorFlow', 'PyTorch', 'FastAPI', 'CNN', 'GANs'],
        images: [
            '/images/smartik/cover-smartik.png',
            '/images/smartik/smartik-1.png',
        ],
        link: 'https://smartik.id',
    },
    {
        num: '02',
        title: 'RAG - ChatMyPDF',
        description:
            'AI platform for interactive PDF conversations with Retrieval-Augmented Generation (RAG) for accurate, context-aware answers.',
        tags: ['LLM', 'RAG', 'Streamlit', 'Langchain', 'GeminiAPI', 'FAISS'],
        images: [
            '/images/chatpdf/cover-chatpdf.png',
            'https://picsum.photos/seed/batikclass/600/400',
            'https://picsum.photos/seed/batikclass2/800/800',
        ],
        link: '#',
    },
    {
        num: '03',
        title: 'AI Health & Habit Coach',
        description:
            'AI-powered health assistant that provides personalized health advice and guidance based on user input.',
        tags: ['LLM', 'Langchain', 'Groq API', 'ReactJS', 'Supabase', 'FastAPI'],
        images: [
            '/images/healtcoach/cover-healthcoach.png',
            '/images/healtcoach/healthcoach-1.png',
            '/images/healtcoach/healthcoach-2.png',
            '/images/healtcoach/healthcoach-3.png',
            '/images/healtcoach/healthcoach-4.png',
        ],
        link: 'https://github.com/Danangwepe/Health-Coach-LLM',
    },
    {
        num: '04',
        title: 'Data Analytics Dashboard',
        description:
            'Interactive analytics dashboard for exploring complex datasets with real-time filtering, visualization, and insights.',
        tags: ['Pandas', 'Streamlit', 'Plotly', 'SQL'],
        images: [
            'https://picsum.photos/seed/datadash/600/400',
            'https://picsum.photos/seed/datadash2/1200/600',
        ],
        link: '#',
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedProject.images.length - 1 : prev - 1
        );
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section id="projects" className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <FadeSection>
                    <p className="font-mono text-sm text-gray-400 mb-4">03 / Projects</p>
                </FadeSection>

                <FadeSection delay={100}>
                    <h2 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
                        <BlurText text="Projects" />
                    </h2>
                </FadeSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <FadeSection key={project.num} delay={200 + i * 100}>
                            <div onClick={() => openModal(project)} className="cursor-pointer h-full">
                                <SpotlightCard className="group h-full bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden aspect-video">
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            /* Menghapus img-zoom dan group-hover:scale-105 */
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />

                                        {/* Gradasi hitam dihapus dari sini */}

                                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-dark font-mono text-xs px-3 py-1 rounded-full shadow-sm">
                                            {project.num}
                                        </span>

                                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white font-mono text-xs px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                            {project.images.length} Images
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Menghapus group-hover:text-blue-600 */}
                                        <h3 className="font-sora text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="font-dm text-sm text-gray-500 mb-4 leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="font-mono text-[11px] px-3 py-1 rounded-full border border-gray-200 text-gray-500 bg-gray-50"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </div>
                        </FadeSection>
                    ))}
                </div>
            </div>

            {/* --- MODAL / POP-UP SLIDER --- */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6 backdrop-blur-md transition-opacity"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all"
                        onClick={closeModal}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-transparent rounded-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative flex-1 flex items-center justify-center min-h-[50vh] bg-transparent">
                            <img
                                src={selectedProject.images[currentImageIndex]}
                                alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                                className="w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                            />

                            {selectedProject.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 18 9 12 15 6"></polyline>
                                        </svg>
                                    </button>

                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </button>

                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 px-3 py-2 rounded-full backdrop-blur-sm">
                                        {selectedProject.images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(idx);
                                                }}
                                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl text-white">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-sora text-2xl font-bold">{selectedProject.title}</h3>
                                {selectedProject.link !== '#' && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                                    >
                                        Visit Project
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 13L13 1M13 1H3M13 1V11" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                            <p className="font-dm text-white/80">{selectedProject.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}