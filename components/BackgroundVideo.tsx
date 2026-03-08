"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8; // slightly slower for cinematic feel
        }
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-arch-bg-primary">
            {/* Video Background */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-75"
            >
                <source src="/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Lightened gradient overlay for readability */}
            <div className="absolute inset-0 bg-arch-bg-primary/20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-arch-bg-primary/40 via-transparent to-arch-bg-primary/60 pointer-events-none" />
        </div>
    );
}
