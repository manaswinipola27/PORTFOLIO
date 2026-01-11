import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Brain, Layout, Database } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3'], icon: <Layout size={24} className="text-[#00ff00]" /> },
        { name: 'Backend', items: ['Django', 'Python', 'Node.js', 'REST APIs'], icon: <Server size={24} className="text-[#008000]" /> },
        { name: 'Database', items: ['MongoDB', 'Atlas', 'SQL'], icon: <Database size={24} className="text-[#00ff00]" /> },
        { name: 'Specialties', items: ['Machine Learning', 'AI Safety Systems', 'Data Analysis'], icon: <Brain size={24} className="text-[#008000]" /> },
    ];

    return (
        <section id="about" className="py-24 bg-[#050810] relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        <span className="text-[#00ff00] font-mono text-xl mr-2">02.</span> Technical Arsenal
                    </h2>
                    <div className="flex-grow h-px bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#0f1424]/60 backdrop-blur-md border border-white/5 p-8 rounded-2xl group hover:border-[#00ff00]/30 transition-all duration-500"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:bg-[#00ff00]/10 transition-colors">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{skill.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span key={item} className="px-3 py-1 rounded-full text-xs font-mono text-[#b8c1ec] border border-white/5 group-hover:border-[#00ff00]/20 transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                    {['REACT', 'DJANGO', 'NODE.JS', 'MONGODB'].map(tech => (
                        <div key={tech} className="text-white text-2xl font-black tracking-widest">{tech}</div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
