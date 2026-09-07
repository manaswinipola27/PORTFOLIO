import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Radar, Lock, Brain } from 'lucide-react';

const skills = [
  {
    name: 'Security Operations & SIEM/SOAR',
    icon: <Shield size={22} />,
    color: '#00ff9d',
    items: [
      'Splunk (SPL, Dashboards, Alerts)',
      'ELK Stack (Elasticsearch · Kibana)',
      'SOAR Playbook Design & Automation',
      'Incident Triage & Escalation',
      'SOC Tier-1/2/3 Workflows',
      'Alert Correlation & Fatigue Reduction',
    ],
  },
  {
    name: 'Threat Intelligence & Network Defense',
    icon: <Radar size={22} />,
    color: '#8b5cf6',
    items: [
      'OSINT & Threat Feed Ingestion',
      'MITRE ATT&CK Framework',
      'Threat Hunting & IOC/TTP Mapping',
      'Wireshark & Packet Analysis',
      'Network Anomaly Detection',
      'CVE Analysis & Vulnerability Assessment',
    ],
  },
  {
    name: 'Blockchain & Identity Security',
    icon: <Lock size={22} />,
    color: '#00ff9d',
    items: [
      'Decentralized IDs (W3C DID)',
      'Smart Contract Development (Solidity)',
      'Cryptographic Attestation',
      'Zero-Knowledge Proofs',
      'Blockchain-Based Access Control',
      'IPFS & Immutable Audit Trails',
    ],
  },
  {
    name: 'AI/ML & Generative Engineering',
    icon: <Brain size={22} />,
    color: '#8b5cf6',
    items: [
      'PyTorch & TensorFlow (Deep Learning)',
      'LLMs & Prompt Engineering',
      'Generative AI (Diffusion · NeRF · 3D)',
      'Computer Vision & Object Detection',
      'Anomaly Detection & Threat Modeling',
      'MLOps Pipeline Architecture',
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: '120px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Subtle top separator */}
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
          style={{ marginBottom: 72 }}
        >
          <p style={{
            fontFamily: 'JetBrains Mono',
            fontSize: 12,
            color: '#00ff9d',
            letterSpacing: '0.3em',
            marginBottom: 16,
            textTransform: 'uppercase',
          }}>
            02. skills.ts
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
              Technical Arsenal
            </h2>
            <div style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)',
            }} />
          </div>
          <p style={{
            color: '#71717a',
            fontSize: 15,
            lineHeight: 1.8,
            maxWidth: 560,
          }}>
            A curated security &amp; AI skills matrix — from SOC operations and SIEM engineering to generative AI pipelines and blockchain identity systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card skill-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
              {/* Icon */}
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: `${skill.color}12`,
                border: `1px solid ${skill.color}25`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: skill.color,
                marginBottom: 20,
                transition: 'all 0.3s',
              }}>
                {skill.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: 15,
                color: '#e4e4e7',
                marginBottom: 20,
                lineHeight: 1.4,
              }}>
                {skill.name}
              </h3>

              {/* Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {skill.items.map((item) => (
                  <div key={item} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                    <div style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: skill.color,
                      opacity: 0.6,
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: 'JetBrains Mono',
                      fontSize: 12,
                      color: '#71717a',
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Marquee Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: 80,
            padding: '28px 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', gap: 60, overflow: 'hidden' }}>
            <div className="marquee-track" style={{ display: 'flex', gap: 60 }}>
              {[
                'SPLUNK', 'ELK STACK', 'MITRE ATT&CK', 'SOAR', 'SIEM',
                'THREAT INTEL', 'PYTORCH', 'BLOCKCHAIN', 'ZERO-TRUST', 'OSINT',
                'SPLUNK', 'ELK STACK', 'MITRE ATT&CK', 'SOAR', 'SIEM',
                'THREAT INTEL', 'PYTORCH', 'BLOCKCHAIN', 'ZERO-TRUST', 'OSINT',
              ].map((tech, i) => (
                <span key={i} style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.15)',
                  letterSpacing: '0.2em',
                  whiteSpace: 'nowrap',
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
