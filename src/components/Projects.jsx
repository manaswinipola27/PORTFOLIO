import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ShieldCheck, Activity, GraduationCap } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    title: 'AI Tourism Safety System',
    subtitle: 'Full Stack · AI/ML',
    description: 'Intelligent web ecosystem powered by AI to analyze destination safety and build predictive risk models for travelers. Integrates real-time data pipelines and a blockchain-based digital ID system.',
    tech: ['Python', 'Django', 'React', 'ML', 'Blockchain'],
    github: 'https://github.com/manaswinipola27/AI-Powered-Incident-Response-and-Safety-System-for-Tourists-using-Blockchain-Digital-IDs',
    live: '#',
    icon: <ShieldCheck size={24} />,
    color: '#00ff9d',
    featured: true,
    tags: ['fullstack', 'ai'],
  },
  {
    id: '02',
    title: 'Clinic Management System',
    subtitle: 'Full Stack · Web App',
    description: 'A comprehensive clinic management web application that streamlines patient registration, appointment scheduling, doctor management and medical records — built for real-world healthcare workflows.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
    github: 'https://github.com/manaswinipola27/clinic-management',
    live: '#',
    icon: <Activity size={24} />,
    color: '#8b5cf6',
    featured: false,
    tags: ['fullstack', 'data'],
  },
  {
    id: '03',
    title: 'Vidya Pilot AI',
    subtitle: 'AI · EdTech · Web App',
    description: 'An AI-powered educational platform that acts as an intelligent learning pilot — delivering personalised study plans, interactive quizzes and smart content recommendations for students.',
    tech: ['Python', 'React', 'AI/ML', 'Django', 'NLP'],
    github: 'https://github.com/manaswinipola27/vidyapilot',
    live: '#',
    icon: <GraduationCap size={24} />,
    color: '#00ff9d',
    featured: false,
    tags: ['ai', 'fullstack', 'edtech'],
  },
];

const FILTERS = ['all', 'fullstack', 'ai', 'data', 'edtech'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hovered, setHovered] = useState(null);

  const filtered = PROJECTS.filter(p =>
    activeFilter === 'all' ? true : p.tags.includes(activeFilter)
  );

  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 48 }}
        >
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#00ff9d', letterSpacing: '0.3em', marginBottom: 12 }}>
            03. projects.ts
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
            <h2 className="section-title" style={{ fontSize: 'clamp(32px,5vw,48px)' }}>
              Featured Projects
            </h2>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`pill ${activeFilter === f ? 'active' : ''}`}
              >
                ./{f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="glass-card"
              style={{
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Border Glow on hover */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 2,
                background: hovered === project.id
                  ? `linear-gradient(90deg, transparent, ${project.color}, transparent)`
                  : 'transparent',
                transition: 'all 0.4s',
              }} />

              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div style={{
                  padding: '10px',
                  borderRadius: 10,
                  border: `1px solid ${hovered === project.id ? project.color + '30' : 'rgba(255,255,255,0.06)'}`,
                  background: hovered === project.id ? `${project.color}08` : 'transparent',
                  color: project.color,
                  transition: 'all 0.3s',
                }}>
                  {project.icon}
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <a href={project.github} target="_blank" rel="noreferrer"
                    style={{ color: '#52525b', transition: 'color 0.25s', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#52525b'}
                  >
                    <Github size={18} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer"
                    style={{ color: '#52525b', transition: 'color 0.25s', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = project.color}
                    onMouseLeave={e => e.currentTarget.style.color = '#52525b'}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Number */}
              <div className="project-num" style={{ marginBottom: 6 }}>#{project.id}</div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: 20,
                color: hovered === project.id ? '#fff' : '#e4e4e7',
                marginBottom: 4,
                transition: 'color 0.3s',
              }}>
                {project.title}
              </h3>
              <p style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#3f3f46', marginBottom: 14, letterSpacing: '0.1em' }}>
                {project.subtitle}
              </p>

              {/* Description */}
              <p style={{ color: '#71717a', fontSize: 14, lineHeight: 1.75, marginBottom: 20, flex: 1 }}>
                {project.description}
              </p>

              {/* Tech Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: 11,
                    color: project.color,
                    padding: '3px 10px',
                    borderRadius: 4,
                    background: `${project.color}0d`,
                    border: `1px solid ${project.color}20`,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <a
            href="https://github.com/manaswinipola27"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 13,
              color: '#52525b',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 20px',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#00ff9d';
              e.currentTarget.style.borderColor = 'rgba(0,255,157,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#52525b';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
            }}
          >
            <Github size={16} /> browse all repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
