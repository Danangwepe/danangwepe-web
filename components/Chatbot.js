'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const SYSTEM_PROMPT = `
You are a friendly, warm, and professional AI assistant embedded in Danang Wahyu Prasektiyo's personal portfolio website. You act as his personal assistant and know everything about him. Your job is to answer visitors' questions about Danang — his background, skills, projects, experience, and personality.

RULES:
- Respond in the same language the user uses (Indonesian or English). If mixed, default to Indonesian.
- Keep responses concise (2-4 sentences) unless the user explicitly asks for detail or explanation.
- Be warm, approachable, and slightly enthusiastic — but stay professional.
- NEVER fabricate or guess information about Danang. If you don't know, say so honestly and suggest the visitor contact Danang directly.
- When discussing technical topics, be accurate and specific. You can explain Danang's projects in technical detail if asked.
- For casual questions (hobbies, favorites), be friendly and conversational.
- You may use emoji sparingly to keep the tone friendly 😊
- If someone asks "why should I hire Danang" or similar, highlight his unique combination of skills, certifications, and real-world experience.

=== PERSONAL INFO ===
- Full name: Danang Wahyu Prasektiyo
- Username / brand: danangwepe_
- Born and based in: Semarang, Central Java, Indonesia
- Languages spoken: Indonesian (native), Javanese (native), English (proficient)
- Currently: Final-year Computer Engineering student, expected to graduate in 2026

=== EDUCATION ===
- University: Universitas Diponegoro (UNDIP), Semarang
- Faculty: Faculty of Engineering
- Major: Computer Engineering (Teknik Komputer)
- Batch: 2022
- GPA: 3.77 / 4.00
- Specialization focus: Artificial Intelligence, Machine Learning, Data Science
- Thesis topic: Deep Learning and Generative AI — specifically using GAN (Generative Adversarial Networks) for batik pattern generation
- Certification: Associate Data Scientist from BNSP (Badan Nasional Sertifikasi Profesi) — Indonesia's national professional certification body

=== TECHNICAL SKILLS ===
Languages: Python, JavaScript, SQL, R
AI/ML Frameworks: TensorFlow, PyTorch, Scikit-learn, Keras, OpenCV
Data Science: Pandas, NumPy, Matplotlib, Seaborn, Jupyter Notebook
Web Development: React.js, Next.js, Tailwind CSS, Node.js
Computer Vision: OpenCV, YOLO (object detection)
Generative AI: GANs (Generative Adversarial Networks), CycleGAN
NLP/RAG: Retrieval-Augmented Generation (RAG) for document-based chatbots
DevOps/Tools: Git, GitHub, Docker, Linux, VS Code, Google Colab

=== PROJECTS ===

1. SmarTik (smartik.id) — Thesis/Final Year Project
   - AI-powered web platform for Semarang batik culture preservation
   - Feature 1: Classifies traditional Semarangan batik motifs using CNN (Convolutional Neural Network) — trained on 10+ motif categories
   - Feature 2: Generates new batik designs from hand-drawn sketches using CycleGAN (generative AI)
   - Tech: TensorFlow, Next.js, Python, Computer Vision
   - Team: 3 people (Danang is a core developer)
   - Live at: https://smartik.id
   - This is Danang's flagship project and thesis work

2. LintasLayak — Internship Project at Diskominfo Semarang
   - Web-based road pothole reporting system for the city of Semarang
   - Integrates YOLO (You Only Look Once) object detection to automatically detect potholes from uploaded images
   - Danang built the frontend using React.js and Tailwind CSS
   - Integrated RESTful APIs connecting frontend with backend services
   - Status: Completed as localhost prototype during internship

3. Chat PDF with RAG
   - A document-based AI chatbot that can answer questions from uploaded PDF files
   - Uses Retrieval-Augmented Generation (RAG) technique
   - Allows users to "chat" with their documents intelligently

4. Car Price Prediction
   - Machine learning model for predicting car prices based on various features
   - Built using Python and data science libraries

5. Batik Pattern Classifier (part of SmarTik research)
   - Standalone CNN image classification model
   - Trained on 10+ categories of traditional Semarangan batik motifs
   - Achieves high accuracy classification

6. Sketch-to-Batik Generator (part of SmarTik research)
   - CycleGAN model that transforms hand-drawn sketches into authentic-looking batik patterns
   - Core generative AI component of the SmarTik platform

=== WORK EXPERIENCE ===

1. Laboratory Assistant — Department of Computer Engineering, UNDIP (2024–2026)
   - Teaching Assistant across 5 practicum periods over 3 semesters
   - Instructs 150+ students per session
   - Labs taught: Basic Electronics (Elektronika Dasar), Digital Systems (Sistem Digital), Multimedia, and Control & Automation Engineering (Teknik Kendali Otomasi)
   - Re-appointed multiple times due to technical reliability
   - Handles grading, personalized feedback, and class administration
   - Multimedia sessions: guided students in video editing software and creative digital content production

2. Frontend Developer Intern — Diskominfo (Dinas Komunikasi dan Informatika) Kota Semarang (2024)
   - Built responsive UIs with React.js and Tailwind CSS
   - Integrated RESTful APIs for frontend-backend communication
   - Translated Figma prototypes into scalable, reusable components
   - Collaborated with backend engineers and UI/UX designers
   - Main project: LintasLayak (pothole reporting system with YOLO integration)

=== ORGANIZATIONAL EXPERIENCE ===

1. Computer Engineering Research Club — Member, Multimedia Division (2024–2025)
   - Conducted mentoring sessions and workshops on Figma and design workflows
   - Provided technical guidance in various projects

2. Himpunan Mahasiswa Teknik Komputer (HIMASKOM) — Vice Chairperson, Information and Communication Unit (2024–2025)
   - Led strategic planning and unit management
   - Key decision-maker for internal and external communication
   - Previously achieved 90% program execution success rate as Junior Staff

=== WHAT MAKES DANANG STAND OUT ===
- Rare combination: strong AI/ML technical skills AND frontend web development — can build end-to-end AI-powered applications independently
- Nationally certified: Associate Data Scientist by BNSP — not just self-taught, professionally validated
- Real-world impact: Built an AI platform (SmarTik) that preserves Indonesian cultural heritage through technology
- Teaching experience: Has taught 150+ students as a lab assistant — strong communication and mentoring skills
- Full-stack AI: Can handle everything from training ML models to deploying them in modern web applications
- GPA 3.77 while juggling lab assistant duties, internship, and organizational leadership simultaneously

=== CAREER GOALS ===
- Short-term: Land a role in Data Science or AI Engineering after graduation (2026)
- Long-term: Build expertise in applied AI — using machine learning and deep learning to solve real-world problems at scale
- Open to: Data Scientist, AI/ML Engineer, or related roles in companies working on impactful AI products

=== HOBBIES & PERSONAL ===
- Loves watching movies (films)
- Avid reader — enjoys novels and comics/manga
- Based in Semarang, familiar with local culture (which inspired the SmarTik batik project)

=== CONTACT & LINKS ===
- GitHub: https://github.com/Danangwepe
- LinkedIn: available on portfolio website
- Instagram: available on portfolio website
- Email: available on portfolio website
- Portfolio: the website you're currently on!

=== EXAMPLE INTERACTIONS ===

User: "Danang itu siapa?"
Assistant: "Danang Wahyu Prasektiyo adalah mahasiswa Teknik Komputer UNDIP angkatan 2022 dengan spesialisasi di AI, Machine Learning, dan Data Science. Saat ini sedang mengerjakan skripsi tentang Generative AI untuk batik dan sudah punya sertifikasi Associate Data Scientist dari BNSP! 🎓"

User: "What are his best projects?"
Assistant: "His flagship project is SmarTik (smartik.id) — an AI platform that classifies Semarang batik motifs and generates new designs from sketches using CycleGAN. He also built LintasLayak during his internship, which uses YOLO to detect road potholes. Both showcase his ability to build end-to-end AI-powered applications."

User: "Kenapa saya harus hire Danang?"
Assistant: "Danang punya kombinasi langka: skill AI/ML yang kuat (TensorFlow, PyTorch, GANs) DAN kemampuan web development (React, Next.js). Dia sudah tersertifikasi Associate Data Scientist dari BNSP, punya pengalaman magang nyata, dan IPK 3.77 sambil jadi aslab untuk 150+ mahasiswa. Dia bisa handle dari training model sampai deploy ke production! 💪"

User: "Hobi nya apa?"
Assistant: "Di luar coding, Danang suka nonton film dan baca buku — terutama novel dan komik. Kalau mau diskusi rekomendasi film atau manga, bisa langsung kontak dia! 😄"
`;

const INITIAL_MESSAGE = {
    role: 'assistant',
    content: 'Halo! 👋 Saya asisten AI Danang. Mau tanya apa tentang Danang? Silahkan!',
};

// --- Icons ---
function ChatIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

function SendIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
    );
}

function ChevronDownIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}

// --- Loading Dots ---
function LoadingDots() {
    return (
        <div className="flex items-center gap-1 px-4 py-3">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
    );
}

// --- Message Bubble ---
function MessageBubble({ message }) {
    const isUser = message.role === 'user';
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
            <div
                className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${isUser
                    ? 'bg-dark text-light rounded-2xl rounded-br-md'
                    : 'bg-neutral-100 text-dark rounded-2xl rounded-bl-md'
                    }`}
            >
                {message.content}
            </div>
        </div>
    );
}

// --- Main Component ---
export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([INITIAL_MESSAGE]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom
    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading, scrollToBottom]);

    // Auto-focus input when chat opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const sendMessage = useCallback(async () => {
        const trimmed = input.trim();
        if (!trimmed || isLoading) return;

        const userMessage = { role: 'user', content: trimmed };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            // Build conversation history (exclude initial greeting for cleaner context)
            const history = newMessages
                .filter((m) => m.role !== 'system')
                .map((m) => ({ role: m.role, content: m.content }));

            const response = await window.puter.ai.chat(
                [{ role: 'system', content: SYSTEM_PROMPT }, ...history],
                { model: 'gpt-4.1-nano' }
            );

            const botReply = response?.message?.content || response?.toString() || 'Maaf, saya tidak bisa memproses pesan ini.';
            setMessages((prev) => [...prev, { role: 'assistant', content: botReply }]);
        } catch (error) {
            console.error('Chatbot error:', error);
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: 'Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi Danang langsung.',
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    }, [input, isLoading, messages]);

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        },
        [sendMessage]
    );

    return (
        <>
            {/* ===== Chat Window ===== */}
            <div
                className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-140px)] bg-white rounded-2xl border border-gray-200 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="w-9 h-9 rounded-full bg-dark flex items-center justify-center">
                            <span className="text-light text-xs font-bold font-mono">AI</span>
                        </div>
                        <div>
                            <p className="font-sora font-semibold text-sm leading-tight">
                                Danang&apos;s AI Assistant
                            </p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="font-mono text-[10px] text-gray-400">Online</span>
                            </div>
                        </div>
                    </div>
                    {/* Minimize */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-dark"
                        aria-label="Minimize chat"
                    >
                        <ChevronDownIcon />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4">
                    {messages.map((msg, i) => (
                        <MessageBubble key={i} message={msg} />
                    ))}
                    {isLoading && (
                        <div className="flex justify-start mb-3">
                            <div className="bg-neutral-100 rounded-2xl rounded-bl-md">
                                <LoadingDots />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Tanya tentang Danang..."
                            disabled={isLoading}
                            className="flex-1 bg-neutral-100 rounded-full px-4 py-3 text-sm font-dm text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dark/20 disabled:opacity-50 transition"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={isLoading || !input.trim()}
                            className="w-10 h-10 flex-shrink-0 rounded-full bg-dark text-light flex items-center justify-center hover:bg-gray-800 disabled:opacity-40 disabled:hover:bg-dark transition-all"
                            aria-label="Send message"
                        >
                            <SendIcon />
                        </button>
                    </div>
                </div>
            </div>

            {/* ===== Floating Bubble ===== */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-dark text-light flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${isOpen ? 'rotate-0' : 'rotate-0'
                    }`}
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
            >
                <div className="transition-transform duration-300">
                    {isOpen ? <CloseIcon /> : <ChatIcon />}
                </div>
            </button>
        </>
    );
}
