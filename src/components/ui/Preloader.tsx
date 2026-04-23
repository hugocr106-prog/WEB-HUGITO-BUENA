"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SpecialText } from "./special-text";

export const Preloader = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [isTextDone, setIsTextDone] = useState(false);

    useEffect(() => {
        const hasSeen = sessionStorage.getItem("hasSeenPreloader");
        if (hasSeen) return;

        setIsVisible(true);
        sessionStorage.setItem("hasSeenPreloader", "true");
        document.body.style.overflow = "hidden";
        
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleTextComplete = () => {
        setIsTextDone(true);
        setTimeout(() => setShowLogo(true), 600);
        setTimeout(() => setIsVisible(false), 2800);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ 
                        y: "-100%", 
                        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
                    }}
                    className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-8"
                >
                    <div className="relative flex flex-col items-center min-h-[400px] justify-center">
                        <AnimatePresence mode="wait">
                            {!showLogo ? (
                                <motion.div 
                                    key="text-step"
                                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }}
                                    className="max-w-4xl flex flex-col items-center gap-4"
                                >
                                    <h2 className="flex flex-col items-center text-center">
                                        <SpecialText 
                                            className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-none mb-2"
                                            speed={25}
                                            delay={0.5}
                                        >
                                            Marca la
                                        </SpecialText>
                                        <div className="bg-black px-6 py-3 rounded-sm">
                                            <SpecialText 
                                                className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none"
                                                speed={25}
                                                delay={1}
                                                onComplete={handleTextComplete}
                                            >
                                                Diferencia.
                                            </SpecialText>
                                        </div>
                                    </h2>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="logo-step"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="flex flex-col items-center"
                                >
                                    <Image 
                                        src="/logo.png" 
                                        alt="HUGO Logo" 
                                        width={256}
                                        height={256}
                                        className="w-40 md:w-64 h-auto object-contain invert grayscale"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
