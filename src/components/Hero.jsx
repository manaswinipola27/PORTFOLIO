import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowDownCircle } from 'lucide-react';
import meImg from '../assets/me.jpg';

const ROLES = [
  'Full Stack Developer',
  'React Specialist',
  'Python Developer',
  'AI/ML Enthusiast',
  'Problem Solver',
];

const TypingText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = texts[currentIndex];
    let timer;
    if (!deleting && charIdx < current.length) {
      timer = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 65);
    } else if (!deleting && charIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, 35);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setCurrentIndex(i => (i + 1) % texts.length);
    }
    return () => clearTimeout(timer);
  }, [charIdx, deleting, currentIndex, texts]);

  return (
    <span>
      <span style={{ color: '#00ff9d' }}>{displayed}</span>
      <span className="cursor-blink" />
    </span>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 0 80px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          width: '100%',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 64,
          flexWrap: 'wrap',
        }}
      >
        {/* Left Content */}
        <div style={{ flex: 1, minWidth: 300 }}>
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontFamily: 'JetBrains Mono', color: '#00ff9d', fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 20 }}>
              $ whoami — Manaswini Pola
            </p>

            {/* Name with glitch effect */}
            <h1
              className="glitch section-title"
              data-text="Manaswini"
              style={{ fontSize: 'clamp(48px, 8vw, 88px)', lineHeight: 1, marginBottom: 8 }}
            >
              Manaswini
            </h1>
            <h1
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: 'clamp(48px, 8vw, 88px)',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.15)',
                letterSpacing: '-0.03em',
                marginBottom: 28,
              }}
            >
              Pola
            </h1>

            {/* Typing Role */}
            <p style={{ fontFamily: 'JetBrains Mono', fontSize: 'clamp(16px, 2.5vw, 22px)', marginBottom: 24, minHeight: 32 }}>
              <span style={{ color: '#3f3f46' }}>// </span>
              <TypingText texts={ROLES} />
            </p>

            <p style={{ color: '#71717a', lineHeight: 1.8, maxWidth: 480, marginBottom: 40, fontSize: 15 }}>
              Bridge the gap between vision and reality. I build{' '}
              <span style={{ color: '#00ff9d' }}>high-performance</span>,{' '}
              full-stack applications with React, Django &amp; AI, crafting digital ecosystems with{' '}
              <span style={{ color: '#8b5cf6' }}>precision</span> and innovation.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}
          >
            <a href="#projects" className="btn-primary">
              <Terminal size={16} />
              ./view_work
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 13,
                color: '#71717a',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'color 0.25s',
                padding: '12px 4px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#71717a';
              }}
            >
              <ArrowDownCircle size={16} /> scroll_down
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ display: 'flex', gap: 32, marginTop: 48, flexWrap: 'wrap' }}
          >
            {[
              { num: '3+', label: 'Projects Built' },
              { num: 'B.Tech', label: 'CS Graduate' },
              { num: 'Full', label: 'Stack Dev' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 28, color: '#fff', lineHeight: 1 }}>
                  {stat.num}
                </div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#3f3f46', letterSpacing: '0.1em', marginTop: 4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}
          className="hidden lg:flex"
        >
          <div style={{ position: 'relative', width: 320, height: 320 }}>
            {/* Glowing ring */}
            <div style={{
              position: 'absolute',
              inset: -4,
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #00ff9d, #8b5cf6, #00ff9d)',
              animation: 'spin 6s linear infinite',
              opacity: 0.6,
            }} />
            <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
            <div style={{
              position: 'absolute',
              inset: 2,
              borderRadius: '50%',
              background: '#030303',
            }} />
            <img
              src={meImg}
              alt="Manaswini Pola"
              style={{
                position: 'absolute',
                inset: 6,
                width: 'calc(100% - 12px)',
                height: 'calc(100% - 12px)',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'top center',
                filter: 'brightness(1.05) saturate(1.1)',
              }}
            />
            {/* Status badge */}
            <div style={{
              position: 'absolute',
              bottom: 16,
              right: 8,
              background: 'rgba(10,10,10,0.9)',
              border: '1px solid rgba(0,255,157,0.3)',
              borderRadius: 30,
              padding: '6px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              backdropFilter: 'blur(12px)',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00ff9d', boxShadow: '0 0 8px #00ff9d', animation: 'blink 2s infinite' }} />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#00ff9d' }}>open_to_work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
