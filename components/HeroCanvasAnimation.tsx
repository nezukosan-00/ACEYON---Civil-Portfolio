"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const FRAME_COUNT = 40; // ezgif-frame-001.jpg to ezgif-frame-040.jpg

export default function HeroCanvasAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(0);

    // High performance scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth scroll interpolation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform scroll progress to frame index
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Transform scroll progress to cinematic camera zoom (scale)
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [1.1, 1, 1.2]);

    // Anti-gravity elements Y offset based on scroll
    const antiGravityY1 = useTransform(smoothProgress, [0, 1], [0, -300]);
    const antiGravityY2 = useTransform(smoothProgress, [0, 1], [0, -500]);
    const antiGravityY3 = useTransform(smoothProgress, [0, 1], [0, -200]);

    // Text fade effects
    const titleOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
    const titleY = useTransform(smoothProgress, [0, 0.1], [0, -50]);

    useEffect(() => {
        // Preload images
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let loadedCount = 0;

            for (let i = 0; i < FRAME_COUNT; i++) {
                const img = new Image();
                // Format: ezgif-frame-001.jpg
                const paddedIndex = String(i + 1).padStart(3, '0');
                img.src = `/frames/ezgif-frame-${paddedIndex}.jpg`;
                // In case images fail to load, we handle error so it doesn't break
                img.onerror = () => {
                    // Provide a tiny 1x1 transparent placeholder or gray pixel
                    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
                };
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve; // Resolve anyway to proceed
                });
                loadedImages.push(img);
                loadedCount++;
                setLoaded(Math.round((loadedCount / FRAME_COUNT) * 100));
            }
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    useEffect(() => {
        if (images.length === 0) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let animationFrameId: number;

        const render = () => {
            const index = Math.round(frameIndex.get());
            const currentImage = images[index];

            if (currentImage && currentImage.complete) {
                // Calculate crop to "cover" canvas area
                const hRatio = canvas.width / currentImage.width;
                const vRatio = canvas.height / currentImage.height;
                const ratio = Math.max(hRatio, vRatio);
                const centerShiftX = (canvas.width - currentImage.width * ratio) / 2;
                const centerShiftY = (canvas.height - currentImage.height * ratio) / 2;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(
                    currentImage,
                    0, 0, currentImage.width, currentImage.height,
                    centerShiftX, centerShiftY, currentImage.width * ratio, currentImage.height * ratio
                );
            }
        };

        const subscribe = frameIndex.on("change", render);

        // Initial render
        render();

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            subscribe();
            window.removeEventListener("resize", handleResize);
        };
    }, [images, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-arch-bg-primary">

            {/* Sticky Canvas Section */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Loading UI */}
                {loaded < 100 && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-arch-bg-primary">
                        <h2 className="text-arch-text-primary text-2xl font-serif mb-4">Initializing Model</h2>
                        <div className="w-64 h-1 bg-arch-border relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-arch-accent"
                                animate={{ width: `${loaded}%` }}
                                transition={{ ease: "linear" }}
                            />
                        </div>
                        <p className="text-arch-text-secondary mt-2 text-sm">{loaded}%</p>
                    </div>
                )}

                {/* Cinematic Canvas Layer with scale parameter for virtual dolly */}
                <motion.canvas
                    ref={canvasRef}
                    style={{ scale }}
                    className="absolute inset-0 z-0 origin-center filter brightness-[0.8] contrast-125 saturate-0"
                />

                {/* Depth of Field Foreground Blur Layer */}
                <div className="absolute inset-0 z-[1] shadow-[inset_0_0_150px_rgba(14,15,17,0.8)] pointer-events-none" />

                {/* Hero Title */}
                <motion.div
                    style={{ opacity: titleOpacity, y: titleY }}
                    className="relative z-10 text-center pointer-events-none"
                >
                    <p className="text-arch-accent tracking-[0.3em] uppercase text-sm font-medium mb-6">Structural Engineering</p>
                    <h1 className="text-8xl md:text-9xl font-serif text-white tracking-tight leading-none mb-6 drop-shadow-2xl">
                        Defying<br />Gravity.
                    </h1>
                    <p className="text-arch-text-secondary max-w-lg mx-auto text-lg md:text-xl font-light drop-shadow-md">
                        We merge visionary architecture with uncompromising structural integrity.
                    </p>
                </motion.div>

                {/* Anti-Gravity Floating Elements */}
                {/* Blueprint Model */}
                <motion.div
                    style={{ y: antiGravityY1 }}
                    className="absolute right-[10%] bottom-[20%] z-20 mix-blend-screen opacity-60 pointer-events-none hidden md:block"
                >
                    <div className="w-64 h-64 border border-arch-accent rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
                    <div className="absolute inset-4 border border-arch-target rounded-full border-solid opacity-50 absolute right-4 top-4 left-4 bottom-4 animate-[spin_40s_linear_infinite_reverse]" />
                    <div className="absolute top-1/2 left-0 w-full h-px bg-arch-accent/40" />
                    <div className="absolute left-1/2 top-0 h-full w-px bg-arch-accent/40" />
                </motion.div>

                {/* Steel Beams (Abstractions) */}
                <motion.div
                    style={{ y: antiGravityY2 }}
                    className="absolute left-[5%] top-[60%] z-20 pointer-events-none w-1 sm:w-2 hidden md:block h-64 bg-gradient-to-b from-transparent via-arch-steel to-transparent"
                />
                <motion.div
                    style={{ y: antiGravityY2 }}
                    className="absolute left-[8%] top-[70%] z-20 pointer-events-none w-1 h-32 bg-gradient-to-b from-transparent via-arch-steel to-transparent"
                />

                {/* CAD Grid Lines */}
                <motion.div
                    className="absolute top-0 right-0 w-1/3 h-full z-0 opacity-[0.03] pointer-events-none"
                    style={{
                        y: antiGravityY3,
                        backgroundImage: `linear-gradient(to right, #4F9C8F 1px, transparent 1px), linear-gradient(to bottom, #4F9C8F 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: titleOpacity }}
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
        </div>
    );
}
