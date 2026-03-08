"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
    return (
        <section className="relative py-32 px-6 md:px-12 bg-arch-bg-primary/60 backdrop-blur-sm overflow-hidden border-t border-arch-border/50" id="contact">

            {/* Blueprint Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #4F9C8F 1px, transparent 1px),
            linear-gradient(to bottom, #4F9C8F 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row justify-between gap-16">

                <div className="w-full lg:w-5/12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-serif text-arch-text-primary mb-6">Start a Project.</h2>
                        <p className="text-arch-text-secondary text-xl mb-12 max-w-md">
                            Consult with our engineering team to build the impossible. structural integrity guaranteed.
                        </p>

                        <div className="space-y-6 text-arch-concrete">
                            <div>
                                <b className="block text-arch-text-primary uppercase text-sm tracking-wider mb-1">Office</b>
                                <p>128 Architectural Row<br />London, UK EC1A 1BB</p>
                            </div>
                            <div>
                                <b className="block text-arch-text-primary uppercase text-sm tracking-wider mb-1">Contact</b>
                                <p>inquiries@studio.engineering<br />+44 (0) 20 7123 4567</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full lg:w-6/12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-arch-bg-primary/40 backdrop-blur-sm p-8 md:p-12 border border-arch-border"
                    >
                        <form className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-arch-text-primary uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-arch-border py-3 text-arch-text-primary focus:outline-none focus:border-arch-accent transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-arch-text-primary uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-arch-border py-3 text-arch-text-primary focus:outline-none focus:border-arch-accent transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-arch-text-primary uppercase tracking-wider">Project Details</label>
                                <textarea
                                    className="w-full bg-transparent border-b border-arch-border py-3 text-arch-text-primary focus:outline-none focus:border-arch-accent transition-colors h-24 resize-none"
                                    placeholder="Tell us about your structural needs..."
                                />
                            </div>

                            <button
                                type="button"
                                className="w-full flex items-center justify-between text-left py-4 px-6 bg-arch-accent text-arch-bg-primary font-medium hover:bg-arch-steel transition-colors duration-300"
                            >
                                <span className="uppercase tracking-widest text-sm">Submit Request</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
