import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Hero = () => {
    const nameChars = "MANASWINI POLA".split("");

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 overflow-hidden relative bg-[#050810]">
            {/* Subtle Background Neon Sparks */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.4, 0],
                            scale: [0, 1, 0],
                            x: [Math.random() * 1200 - 600, Math.random() * 1200 - 600],
                            y: [Math.random() * 800 - 400, Math.random() * 800 - 400]
                        }}
                        transition={{
                            duration: Math.random() * 8 + 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute w-[1.5px] h-[1.5px] bg-[#00ff00] rounded-full blur-[1px]"
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="font-mono text-[#00ff00] mb-6 tracking-[0.4em] uppercase text-xs sm:text-sm font-bold">
                            &lt; Full Stack Developer /&gt;
                        </p>

                        <div className="relative inline-block mb-4">
                            {/* Floating Name in One Line */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none whitespace-nowrap tracking-tighter">
                                {nameChars.map((char, i) => (
                                    <motion.span
                                        key={i}
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.1
                                        }}
                                        className={`inline-block ${char === " " ? "mr-3 md:mr-6" : ""} hover:text-[#00ff00] transition-colors duration-300 drop-shadow-[0_0_10px_rgba(0,255,0,0.2)]`}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-lg md:text-2xl font-medium text-[#00ff00]/80 mb-10 font-mono tracking-tight"
                        >
                            Crafting robust digital ecosystems with precision and AI innovation.
                        </motion.p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-base md:text-lg text-[#b8c1ec] max-w-2xl mb-12 leading-relaxed"
                    >
                        Bridge the gap between vision and reality. I specialize in building high-performance,
                        full-stack applications with <span className="text-[#00ff00]">React</span> and <span className="text-[#00ff00]">Django</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex flex-wrap gap-6 justify-center lg:justify-start"
                    >
                        <a href="#projects" className="btn-primary px-10 py-4 text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(0,255,0,0.2)]">Explore Work</a>
                        <a href="https://github.com/manaswinipola27" target="_blank" className="flex items-center gap-3 px-8 py-4 rounded-md text-white hover:bg-[#00ff00]/10 border border-white/10 transition-all font-mono text-sm">
                            <Terminal size={18} className="text-[#00ff00]" /> {`> view_code`}
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 relative flex justify-center items-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                        <div className="absolute inset-0 rounded-full bg-[#00ff00]/5 blur-3xl" />

                        <div className="relative w-full h-full rounded-full p-1.5 border-2 border-[#00ff00]/20 group-hover:border-[#00ff00] transition-colors duration-500 overflow-hidden shadow-[0_0_50px_rgba(0,255,0,0.15)]">
                            <img
                                src="me.jpg"
                                alt="Manaswini Pola"
                                className="w-full h-full object-cover rounded-full brightness-110 saturate-[1.1]"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
