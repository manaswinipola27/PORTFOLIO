import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#050810] selection:bg-[#00ff00] selection:text-[#050810] overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Social Sidebar (Desktop only) */}
      <div className="fixed bottom-0 left-12 hidden lg:flex flex-col items-center gap-6 z-40">
        <a href="https://github.com/manaswinipola27" target="_blank" className="text-[#b8c1ec] hover:text-[#00ff00] hover:-translate-y-1 transition-all">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/manaswini-pola-47a61b282" target="_blank" className="text-[#b8c1ec] hover:text-[#00ff00] hover:-translate-y-1 transition-all">
          <Linkedin size={20} />
        </a>
        <div className="w-px h-24 bg-white/20" />
      </div>

      {/* Email Sidebar (Desktop only) */}
      <div className="fixed bottom-0 right-12 hidden lg:flex flex-col items-center gap-6 z-40">
        <a
          href="mailto:manaswinipola27@gmail.com"
          className="text-[#b8c1ec] hover:text-[#00ff00] hover:-translate-y-1 transition-all vertical-text font-mono text-xs tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          manaswinipola27@gmail.com
        </a>
        <div className="w-px h-24 bg-white/20" />
      </div>
    </div>
  );
}

export default App;
