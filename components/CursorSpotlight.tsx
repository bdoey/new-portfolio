import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorSpotlight: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const smoothedMouseX = useSpring(mouseX, springConfig);
    const smoothedMouseY = useSpring(mouseY, springConfig);

    useEffect(() => {
        setIsMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    if (!isMounted) {
        return null;
    }

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300"
            style={{
                background: `radial-gradient(600px at ${smoothedMouseX}px ${smoothedMouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            }}
        />
    );
};