"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Subtle scroll effects
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Anti-gravity elements Y offset based on scroll
    const antiGravityY1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const antiGravityY2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const antiGravityY3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    // Text fade effects
    const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const titleY = useTransform(scrollYProgress, [0, 0.8], [0, 100]);
    const elementsOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* Hero Title */}
            <motion.div
                style={{ opacity: titleOpacity, y: titleY }}
                className="relative z-10 text-center pointer-events-none mt-20 px-6 max-w-4xl mx-auto"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-arch-accent tracking-[0.3em] uppercase text-sm font-medium mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                >
                    Structural Engineering
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-7xl md:text-8xl lg:text-9xl font-serif text-white tracking-tight leading-none mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                >
                    Defying<br />Gravity.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-arch-text-primary max-w-lg mx-auto text-lg md:text-xl font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                >
                    We merge visionary architecture with uncompromising structural integrity.
                </motion.p>
            </motion.div>

            {/* Anti-Gravity Floating Elements */}
            {/* Blueprint Model */}
            <motion.div
                style={{ y: antiGravityY1, opacity: elementsOpacity }}
                className="absolute right-[10%] bottom-[20%] z-20 mix-blend-screen opacity-60 pointer-events-none hidden md:block"
            >
                <div className="w-64 h-64 border border-arch-accent rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-4 border border-[#8A8F96] rounded-full border-solid opacity-50 right-4 top-4 left-4 bottom-4 animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-arch-accent/40" />
                <div className="absolute left-1/2 top-0 h-full w-px bg-arch-accent/40" />
            </motion.div>

            {/* Steel Beams (Abstractions) */}
            <motion.div
                style={{ y: antiGravityY2, opacity: elementsOpacity }}
                className="absolute left-[5%] top-[60%] z-20 pointer-events-none w-1 sm:w-2 hidden md:block h-64 bg-gradient-to-b from-transparent via-arch-steel to-transparent"
            />
            <motion.div
                style={{ y: antiGravityY2, opacity: elementsOpacity }}
                className="absolute left-[8%] top-[70%] z-20 pointer-events-none w-1 h-32 bg-gradient-to-b from-transparent via-arch-steel to-transparent"
            />


            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: elementsOpacity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10"
            >
                <span className="text-arch-text-secondary text-xs uppercase tracking-widest mb-4">Scroll to explore</span>
                <div className="w-[1px] h-16 bg-arch-border overflow-hidden">
                    <motion.div
                        className="w-full h-1/2 bg-arch-accent"
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                </div>
            </motion.div>

        </div>
    );
}
