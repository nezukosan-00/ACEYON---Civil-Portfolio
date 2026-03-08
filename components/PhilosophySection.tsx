"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PhilosophySection() {
    return (
        <section className="py-32 px-6 md:px-12 bg-arch-bg-primary/40 backdrop-blur-sm overflow-hidden" id="philosophy">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative aspect-[4/5] lg:aspect-square"
                    >
                        <div className="absolute inset-0 bg-arch-accent/10 z-10" />
                        <Image
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
                            alt="Architectural Blueprint"
                            fill
                            className="object-cover grayscale contrast-125 opacity-80"
                        />
                        {/* Architectural structural lines overlay */}
                        <div className="absolute top-10 left-10 right-10 bottom-10 border border-arch-text-secondary/30 z-20 pointer-events-none" />
                        <div className="absolute top-1/2 left-0 w-full h-px bg-arch-text-secondary/20 z-20 pointer-events-none" />
                        <div className="absolute left-1/2 top-0 h-full w-px bg-arch-text-secondary/20 z-20 pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-arch-accent font-medium tracking-widest uppercase mb-4 text-sm">Our Philosophy</h2>
                        <h3 className="text-4xl md:text-6xl font-serif text-arch-text-primary mb-8 leading-tight">
                            Engineering the<br />Invisible Skeleton
                        </h3>

                        <div className="space-y-6 text-arch-text-secondary text-lg">
                            <p>
                                We believe that true architectural beauty relies on an unyielding foundation. Our engineering practice merges aesthetic vision with structural pragmatism.
                            </p>
                            <p>
                                Every beam, every joint, and every concrete pour is calculated not just for safety, but for elegance. We do not just support buildings; we enable them to defy gravity.
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 px-8 py-4 bg-transparent border border-arch-steel text-arch-text-primary hover:bg-arch-text-primary hover:text-arch-bg-primary transition-colors duration-300 uppercase tracking-widest text-sm"
                        >
                            Read Manifesto
                        </motion.button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
