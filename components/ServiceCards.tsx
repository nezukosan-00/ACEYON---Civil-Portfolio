"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function ServiceCards() {
    return (
        <section className="py-32 px-6 md:px-12 bg-arch-bg-secondary/40 backdrop-blur-sm" id="services">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-serif text-arch-text-primary mb-6">Engineering Excellence</h2>
                    <p className="text-arch-text-secondary max-w-2xl mx-auto text-lg">
                        Comprehensive structural and civil engineering services delivered with unparalleled precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-arch-bg-primary/60 backdrop-blur-sm border border-arch-border p-10 hover:border-arch-accent transition-colors duration-300 relative group overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-arch-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                <Icon className="w-12 h-12 text-arch-accent mb-8" strokeWidth={1.5} />
                                <h3 className="text-2xl font-serif text-arch-text-primary mb-4">{service.title}</h3>
                                <p className="text-arch-text-secondary leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
