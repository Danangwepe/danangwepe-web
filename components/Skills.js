'use client';

import { FadeSection } from '@/components/ui/Interactions';
import { BlurText } from '@/components/ui/TextAnimations';

const skillCategories = [
    {
        category: 'Languages',
        skills: [
            { name: 'Python', icon: 'python' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'SQL', icon: 'mysql' },
        ],
    },
    {
        category: 'AI / ML',
        skills: [
            { name: 'TensorFlow', icon: 'tensorflow' },
            { name: 'PyTorch', icon: 'pytorch' },
            { name: 'YOLO', icon: 'yolo' }, // Mapping manual di bawah
            { name: 'Scikit-Learn', icon: 'scikitlearn' },
        ],
    },
    {
        category: 'Data',
        skills: [
            { name: 'Pandas', icon: 'pandas' },
            { name: 'NumPy', icon: 'numpy' },
            { name: 'Matplotlib', icon: 'matplotlib' },
            { name: 'Seaborn', icon: 'seaborn' },
        ],
    },
    {
        category: 'Web',
        skills: [
            { name: 'React', icon: 'react' },
            { name: 'Next.js', icon: 'nextjs' },
            { name: 'Tailwind', icon: 'tailwindcss' },
            { name: 'FastAPI', icon: 'fastapi' },
            { name: 'Streamlit', icon: 'streamlit' },
        ],
    },
    {
        category: 'Database',
        skills: [
            { name: 'MySQL', icon: 'mysql' },
            { name: 'Firebase', icon: 'firebase' },
            { name: 'Supabase', icon: 'supabase' },
            { name: 'MongoDB', icon: 'mongodb' },
        ],
    },
    {
        category: 'Tools',
        skills: [
            { name: 'Git', icon: 'git' },
            { name: 'Docker', icon: 'docker' },
            { name: 'GCP', icon: 'googlecloud' },
        ],
    },
];

function getIconUrl(icon) {
    const mapping = {
        mysql: 'mysql/mysql-original',
        pytorch: 'pytorch/pytorch-original',
        matplotlib: 'matplotlib/matplotlib-original',
        nextjs: 'nextjs/nextjs-original',
        tailwindcss: 'tailwindcss/tailwindcss-original',
        typescript: 'typescript/typescript-original',
        scikitlearn: 'scikitlearn/scikitlearn-original',
        googlecloud: 'googlecloud/googlecloud-original',
        firebase: 'firebase/firebase-plain',
        supabase: 'supabase/supabase-original',
        mongodb: 'mongodb/mongodb-original',
        fastapi: 'fastapi/fastapi-original',
        // YOLO & Seaborn terkadang tidak ada di devicon CDN standar, 
        // kita arahkan ke slug yang paling mendekati atau file opsional
        yolo: 'opencv/opencv-original', // Alternatif visual untuk AI/Vision
        seaborn: 'python/python-original', // Fallback ke python jika icon spesifik tidak load
    };
    const path = mapping[icon] || `${icon}/${icon}-original`;
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;
}

export default function Skills() {
    return (
        <section id="skills" className="py-24 md:py-32 px-6 bg-[#f6f6f6] relative grain">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section label */}
                <FadeSection>
                    <p className="font-mono text-sm text-gray-400 mb-4">02 / Skills</p>
                </FadeSection>

                {/* Heading */}
                <FadeSection delay={100}>
                    <h2 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
                        <BlurText text="Tech Stack" />
                    </h2>
                </FadeSection>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((cat, catIdx) => (
                        <FadeSection key={cat.category} delay={200 + catIdx * 100}>
                            <div className="group h-full bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">

                                {/* Category Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="font-sora text-xl font-bold text-dark">
                                        {cat.category}
                                    </h3>
                                    <div className="w-10 h-1 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors" />
                                </div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {cat.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-3 p-2 rounded-xl transition-all duration-200"
                                        >
                                            <img
                                                src={getIconUrl(skill.icon)}
                                                alt={skill.name}
                                                // Ukuran Ikon diperbesar dari w-5 ke w-7
                                                className="w-7 h-7 object-contain flex-shrink-0"
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                            <span className="font-dm text-sm md:text-base font-medium text-gray-700">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeSection>
                    ))}
                </div>
            </div>
        </section>
    );
}