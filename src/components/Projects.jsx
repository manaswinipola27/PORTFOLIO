import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ShieldCheck, Activity, GraduationCap, Cpu, Box } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    title: 'Decentralized Incident Response & Safety Intelligence Platform',
    subtitle: 'Blockchain · AI/ML · Autonomous SecOps',
    description:
      'Blockchain-anchored identity meets AI-driven autonomous threat response for real-world public safety. Deploys W3C DID-compliant smart contracts for tamper-proof digital credentials and an ML anomaly detection module that triggers SOAR-style automated alert escalation workflows.',
    tech: ['Python', 'Django', 'Solidity', 'W3C DID', 'ML Anomaly Detection', 'WebSockets', 'IPFS'],
    github: 'https://github.com/manaswinipola27/AI-Powered-Incident-Response-and-Safety-System-for-Tourists-using-Blockchain-Digital-IDs',
    live: '#',
    icon: <ShieldCheck size={22} />,
    color: '#00ff9d',
    featured: true,
    tags: ['security', 'blockchain', 'ai'],
    terms: ['Decentralized Security', 'Zero-Trust Identity', 'Autonomous Incident Response', 'Smart Contract Attestation'],
  },
  {
    id: '02',
    title: 'AegisGuard AI — Next-Gen SOAR Prototype',
    subtitle: 'SOAR · SIEM Integration · AI-Driven Triage',
    description:
      'An AI-native Security Orchestration, Automation & Response platform that thinks like a Tier-2 SOC analyst. Integrates ELK Stack SIEM pipelines with an LLM-powered playbook engine that auto-selects containment actions — IP block, account suspension, ticket escalation — with human-in-the-loop override.',
    tech: ['Python', 'ELK Stack', 'Splunk API', 'FastAPI', 'LLMs', 'Docker', 'Redis'],
    github: 'https://github.com/manaswinipola27',
    live: '#',
    icon: <Activity size={22} />,
    color: '#8b5cf6',
    featured: true,
    tags: ['security', 'ai'],
    terms: ['SOAR', 'SIEM', 'Automated Triage', 'Playbook Automation', 'MTTR Reduction'],
  },
  {
    id: '03',
    title: 'Enterprise Healthcare Security & Clinic Management Platform',
    subtitle: 'HIPAA · Zero-Trust · RBAC · Encrypted EHR',
    description:
      'HIPAA-grade data protection architecture with encrypted EHR pipelines and zero-trust network controls. Implements multi-tier RBAC/ABAC with least-privilege enforcement, AES-256 at-rest encryption, TLS-enforced APIs, and audit logging for SOC 2 compliance across multi-role clinical environments.',
    tech: ['Django', 'PostgreSQL', 'AES-256', 'JWT / OAuth 2.0', 'TLS', 'RBAC Middleware', 'Audit Logging'],
    github: 'https://github.com/manaswinipola27/clinic-management',
    live: '#',
    icon: <ShieldCheck size={22} />,
    color: '#00ff9d',
    featured: false,
    tags: ['security', 'ai'],
    terms: ['HIPAA Compliance', 'Zero-Trust Architecture', 'RBAC/ABAC', 'DLP', 'Insider Threat Mitigation'],
  },
  {
    id: '04',
    title: 'Vidyamitra AI — Career Intelligence & Talent Matching Platform',
    subtitle: 'Graph AI · NLP · Predictive Analytics',
    description:
      'Graph-based AI talent engine delivering predictive career analytics and precision skill-candidate matching. Engineers a knowledge-graph-powered semantic matching system with NLP entity extraction and a gradient-boosted ML model predicting role-fit probability and upskilling gaps.',
    tech: ['Python', 'BERT / Transformers', 'Neo4j', 'XGBoost', 'FastAPI', 'React', 'PostgreSQL'],
    github: 'https://github.com/manaswinipola27/vidyapilot',
    live: '#',
    icon: <GraduationCap size={22} />,
    color: '#8b5cf6',
    featured: false,
    tags: ['ai'],
    terms: ['Semantic AI Matching', 'Graph Neural Networks', 'NLP Entity Extraction', 'Predictive Analytics'],
  },
  {
    id: '05',
    title: 'Text-to-3D Generative AI Pipeline',
    subtitle: 'Generative AI · NeRF · Deep Learning · GPU MLOps',
    description:
      'End-to-end deep learning architecture transforming natural language prompts into photorealistic 3D neural meshes. Chains a CLIP text encoder → diffusion model for multi-view 2D generation → NeRF/instant-ngp reconstruction → mesh export, with distributed GPU training and W&B experiment tracking.',
    tech: ['PyTorch', 'CLIP', 'Stable Diffusion', 'NeRF / Instant-NGP', 'CUDA', 'Weights & Biases', 'Hugging Face'],
    github: 'https://github.com/manaswinipola27',
    live: '#',
    icon: <Box size={22} />,
    color: '#00ff9d',
    featured: false,
    tags: ['ai', 'genai'],
    terms: ['Generative AI', 'Neural Radiance Fields', 'Diffusion Models', '3D Mesh Generation', 'MLOps'],
  },
];

const FILTERS = ['all', 'security', 'ai', 'blockchain', 'genai'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hovered, setHovered] = useState(null);

  const filtered = PROJECTS.filter(p =>
    activeFilter === 'all' ? true : p.tags.includes(activeFilter)
  );

  return (
    <section
      id="projects"
      style={{
        padding: '120px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Top separator */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p style={{
            fontFamily: 'JetBrains Mono',
            fontSize: 12,
            color: '#00ff9d',
            letterSpacing: '0.3em',
            marginBottom: 16,
            textTransform: 'uppercase',
          }}>
            03. projects.ts
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 20 }}>
            <h2 style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#fff',
              letterSpacing: '-0.03em',
              whiteSpace: 'nowrap',
            }}>
              Featured Projects
            </h2>
            <div style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)',
            }} />
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8 }}>
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
          gap: 28,
        }}>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="glass-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent border on hover */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 2,
                background: hovered === project.id
                  ? `linear-gradient(90deg, transparent, ${project.color}, transparent)`
                  : 'transparent',
                transition: 'all 0.4s',
              }} />

              {/* Header Row */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 24,
              }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  border: `1px solid ${hovered === project.id ? project.color + '40' : 'rgba(255,255,255,0.08)'}`,
                  background: hovered === project.id ? `${project.color}10` : 'transparent',
                  color: project.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                }}>
                  {project.icon}
                </div>

                <div style={{ display: 'flex', gap: 14 }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#3f3f46', transition: 'color 0.25s', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#3f3f46'}
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#3f3f46', transition: 'color 0.25s', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = project.color}
                    onMouseLeave={e => e.currentTarget.style.color = '#3f3f46'}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Number */}
              <div style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 11,
                color: `${project.color}60`,
                letterSpacing: '0.2em',
                marginBottom: 8,
              }}>
                #{project.id}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: 17,
                color: hovered === project.id ? '#fff' : '#e4e4e7',
                marginBottom: 6,
                transition: 'color 0.3s',
                lineHeight: 1.35,
              }}>
                {project.title}
              </h3>

              {/* Subtitle */}
              <p style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 11,
                color: '#3f3f46',
                marginBottom: 18,
                letterSpacing: '0.08em',
              }}>
                {project.subtitle}
              </p>

              {/* Description */}
              <p style={{
                color: '#71717a',
                fontSize: 13,
                lineHeight: 1.8,
                marginBottom: 20,
                flex: 1,
              }}>
                {project.description}
              </p>

              {/* Industry Terms */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {project.terms.map(term => (
                  <span key={term} style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: 10,
                    color: project.color,
                    padding: '3px 8px',
                    borderRadius: 4,
                    background: `${project.color}08`,
                    border: `1px solid ${project.color}20`,
                    letterSpacing: '0.04em',
                  }}>
                    {term}
                  </span>
                ))}
              </div>

              {/* Tech Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 16 }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: 10,
                    color: '#52525b',
                    padding: '3px 10px',
                    borderRadius: 5,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    letterSpacing: '0.04em',
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
          style={{ textAlign: 'center', marginTop: 64 }}
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
              gap: 10,
              padding: '12px 24px',
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.06)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#00ff9d';
              e.currentTarget.style.borderColor = 'rgba(0,255,157,0.25)';
              e.currentTarget.style.background = 'rgba(0,255,157,0.04)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#52525b';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Github size={16} />
            browse all repositories →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
