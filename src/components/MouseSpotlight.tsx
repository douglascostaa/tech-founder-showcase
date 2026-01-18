import { useEffect } from "react";
import { useMotionTemplate, useMotionValue, useSpring, motion } from "framer-motion";

export const MouseSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Efeito de mola suave para seguir o mouse
    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Atualiza a posição alvo
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Cria o gradiente dinâmico baseado na posição suavizada (spring)
    const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(0, 71, 255, 0.10), transparent 80%)`;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-10 opacity-100 mix-blend-screen"
            style={{ background }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    );
};

export default MouseSpotlight;
