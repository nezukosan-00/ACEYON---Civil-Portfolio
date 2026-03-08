"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function PortfolioGrid() {
    return (
        <section className="py-32 px-6 md:px-12 bg-arch-bg-primary/40 backdrop-blur-sm border-t border-arch-border/50" id="portfolio">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif text-arch-text-primary mb-4">Selected Works</h2>
                    <div className="h-1 w-20 bg-arch-accent mb-6" />
                    <p className="text-arch-text-secondary max-w-xl text-lg">
                        A showcase of our most ambitious structural achievements, defining skylines and pushing boundaries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative cursor-pointer"
                        >
                            <motion.div
                                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative overflow-hidden aspect-[4/5] rounded-lg bg-arch-bg-secondary"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-arch-bg-primary via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <p className="text-arch-accent font-medium mb-2">{project.year} / {project.type}</p>
                                    <h3 className="text-3xl font-serif text-white mb-2">{project.title}</h3>
                                    <p className="text-arch-text-secondary flex items-center">
                                        <span className="w-4 h-4 mr-2 border border-arch-text-secondary rounded-full inline-block" />
                                        {project.location}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
