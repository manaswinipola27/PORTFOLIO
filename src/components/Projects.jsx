import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ShieldCheck, Calculator, AlertTriangle } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'AI Tourism Safety System',
            description: 'Intelligent web ecosystem using AI to analyze destination safety and predictive risk modeling for travelers.',
            tech: ['Python', 'Django', 'ML', 'React'],
            github: 'https://github.com/manaswinipola27',
            link: '#',
            icon: <ShieldCheck size={32} className="text-[#00ff00]" />,
        },
        {
            title: 'Accident Severity Forecast',
            description: 'Data science project predicting road accident severity based on historical trends to aid urban safety.',
            tech: ['Python', 'Pandas', 'Scikit-Learn'],
            github: 'https://github.com/manaswinipola27',
            link: '#',
            icon: <AlertTriangle size={32} className="text-[#008000]" />,
        },
        {
            title: 'Smart Python Calculator',
            description: 'Robust GUI-based calculation tool built with Python (Tkinter) featuring efficient algorithmic logic.',
            tech: ['Python', 'Tkinter', 'Algorithms'],
            github: 'https://github.com/manaswinipola27',
            link: '#',
            icon: <Calculator size={32} className="text-[#00ff00]" />,
        },
    ];

    return (
        <section id="projects" className="py-24 bg-[#050810] relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        <span className="text-[#00ff00] font-mono text-xl mr-2">03.</span> Featured Projects
                    </h2>
                    <div className="flex-grow h-px bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#0f1424]/60 backdrop-blur-md border border-white/5 flex flex-col h-full rounded-2xl overflow-hidden group hover:border-[#00ff00]/30 transition-all duration-500"
                        >
                            <div className="p-8 flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-[#00ff00]/5 transition-all">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" className="text-[#8892b0] hover:text-[#00ff00] transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.link} className="text-[#8892b0] hover:text-[#00ff00] transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00ff00] transition-colors">{project.title}</h3>
                                <p className="text-[#b8c1ec] mb-8 leading-relaxed font-light">
                                    {project.description}
                                </p>
                            </div>

                            <div className="px-8 pb-8 flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-mono text-[#00ff00]/80 px-2.5 py-1 rounded bg-[#00ff00]/5 border border-[#00ff00]/10">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="https://github.com/manaswinipola27" target="_blank" className="inline-flex items-center gap-2 text-[#b8c1ec] hover:text-[#00ff00] transition-colors font-mono">
                        Browse all repositories <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
