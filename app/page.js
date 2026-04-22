'use client';

import About from '@/components/About';
import Chatbot from '@/components/Chatbot';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import useCanvasCursor from '@/components/ui/useCanvasCursor';

export default function Home() {
    const CanvasCursor = () => {
        useCanvasCursor();
        return <canvas className="pointer-events-none fixed inset-1 z-[7]" id="canvas" />;
    };
    return (
        <main>
            <Navbar />
            <Hero />
            <CanvasCursor />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
            <Chatbot />
        </main>
    );
}

