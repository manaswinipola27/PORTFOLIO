import React from 'react';
import { motion } from 'framer-motion';

const BackgroundSparks = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050810]">
            {/* Deep Gradient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00ff00]/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00ff00]/5 blur-[120px] rounded-full" />

            {/* Dense Spark Particles */}
            {[...Array(100)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight
                    }}
                    animate={{
                        opacity: [0, Math.random() * 0.4 + 0.1, 0],
                        scale: [0, Math.random() * 1.5 + 0.5, 0],
                        y: [null, '-=100'] // Drift upwards
                    }}
                    transition={{
                        duration: Math.random() * 10 + 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10
                    }}
                    className="absolute w-[1.5px] h-[1.5px] bg-[#00ff00] rounded-full shadow-[0_0_8px_#00ff00]"
                />
            ))}

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#00ff00 1px, transparent 1px), linear-gradient(90deg, #00ff00 1px, transparent 1px)', backgroundSize: '50px 50px' }}
            />
        </div>
    );
};

export default BackgroundSparks;
