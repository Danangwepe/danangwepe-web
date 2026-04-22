'use client';

import { FadeSection } from '@/components/ui/Interactions';
import { BlurText } from '@/components/ui/TextAnimations';

const workData = [
    {
        year: '2024 — 2026',
        title: 'Laboratory Assistant',
        place: 'Department of Computer Engineering',
        description: [
            "Entrusted as a Teaching Assistant for 5 practicum periods across 3 semesters, instructing a massive cohort of over 150 students per session.",
            "Demonstrated technical reliability by being re-appointed to lead Basic Electronics and Digital Systems labs twice, mentoring students in logic circuits and hardware troubleshooting.",
            "Facilitated Multimedia sessions focused on Video Editing software and creative workflows, guiding students in producing high-quality digital content.",
            "Managed administrative responsibilities for concurrent classes, including grading and providing personalized feedback, while maintaining high academic performance."
        ]
    },
    {
        year: '2024',
        title: 'Frontend Developer Intern',
        place: 'Diskominfo Kota Semarang',
        description: [
            "Engineered responsive user interfaces using React.js and Tailwind CSS, ensuring high performance across devices.",
            "Integrated RESTful APIs to connect frontend modules with backend services, optimizing data retrieval and state management.",
            "Collaborated with backend engineers and UI/UX designers to translate Figma prototypes into scalable, reusable code components."
        ]
    },
];

const organizationData = [
    {
        year: '2024 — 2025',
        title: 'Member, Multimedia Division',
        place: 'Computer Engineering Research Club',
        description: [
            "Conducting mentoring sessions and workshops on Figma features and optimal design workflows.",
            "Providing technical guidance and creative solutions in game development using Unity, helping the team overcome technical challenges."
        ]
    },
    {
        year: '2024 — 2025',
        title: 'Vice Chairperson, Information and Communication Unit',
        place: 'Himpunan Mahasiswa Teknik Komputer',
        description: [
            "Spearheading strategic planning and unit management, acting as a key decision-maker to ensure seamless communication between internal and external stakeholders.",
            "Previously achieved a 90% success rate in program execution during tenure as Junior Staff."
        ]
    },
];

function TimelineItem({ item, index }) {
    return (
        <FadeSection delay={200 + index * 100}>
            <div className="relative pl-10 md:pl-12">
                {/* Dot marker */}
                <div className="absolute left-0 top-6 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full bg-dark border-4 border-[#f6f6f6]" />

                {/* Card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="font-mono text-sm font-bold bg-gray-100 px-3 py-1 rounded-full">
                            {item.year}
                        </span>
                        <span className="font-mono text-xs text-gray-400">
                            {item.place}
                        </span>
                    </div>
                    <h3 className="font-sora text-lg font-bold mb-3">{item.title}</h3>

                    {/* ✅ Bullet Points List */}
                    <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                            <li
                                key={i}
                                className="font-dm text-sm text-gray-500 flex items-start gap-2"
                            >
                                {/* Custom Bullet Point */}
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                <span>{desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </FadeSection>
    );
}

function TimelineGroup({ title, items }) {
    return (
        <div className="mb-14 last:mb-0">
            <FadeSection>
                <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-6 pl-10 md:pl-12">
                    {title}
                </p>
            </FadeSection>
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[7px] md:left-[9px] top-0 bottom-0 w-px bg-gray-300" />
                <div className="space-y-8">
                    {items.map((item, i) => (
                        <TimelineItem key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="py-24 md:py-32 px-6 bg-[#f6f6f6] relative grain">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section label */}
                <FadeSection>
                    <p className="font-mono text-sm text-gray-400 mb-4">04 / Experience</p>
                </FadeSection>

                {/* Heading */}
                <FadeSection delay={100}>
                    <h2 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
                        <BlurText text="Experience" />
                    </h2>
                </FadeSection>

                {/* Work */}
                <TimelineGroup title="Work" items={workData} />

                {/* Organization */}
                <TimelineGroup title="Organization" items={organizationData} />
            </div>
        </section>
    );
}