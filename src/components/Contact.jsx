import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[#050810] relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="container mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="font-mono text-[#00fff2] mb-4 tracking-widest text-sm uppercase">04. What's Next?</p>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Get In Touch</h2>

                    <p className="text-xl text-[#b8c1ec] mb-12 leading-relaxed">
                        I'm currently looking for new opportunities as a Full Stack Developer.
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                    <a
                        href="mailto:manaswinipola27@gmail.com"
                        className="btn-primary text-xl px-12 py-4 inline-flex items-center gap-3 mb-16"
                    >
                        Say Hello <Send size={24} />
                    </a>

                    <div className="flex justify-center gap-8 items-center">
                        <a href="https://github.com/manaswinipola27" target="_blank" className="p-3 rounded-full hover:bg-[#00ff00]/10 transition-colors text-[#8892b0] hover:text-[#00ff00]">
                            <Github size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/manaswini-pola-47a61b282" target="_blank" className="p-3 rounded-full hover:bg-[#00ff00]/10 transition-colors text-[#8892b0] hover:text-[#00ff00]">
                            <Linkedin size={28} />
                        </a>
                        <a href="mailto:manaswinipola27@gmail.com" className="p-3 rounded-full hover:bg-[#00ff00]/10 transition-colors text-[#8892b0] hover:text-[#00ff00]">
                            <Mail size={28} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-32 py-8 border-t border-white/5 text-center">
                <p className="text-[#8892b0] font-mono text-sm tracking-widest">
                    DESIGNED & BUILT BY <span className="text-[#00ff00]">MANASWINI POLA</span>
                </p>
            </footer>
        </section>
    );
};

export default Contact;
