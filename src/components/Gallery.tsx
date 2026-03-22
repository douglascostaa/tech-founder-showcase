import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const galleryImages = [
  { src: "/gallery/gallery-1.jpg", label: "Evento" },
  { src: "/gallery/gallery-2.jpg", label: "Equipe" },
  { src: "/gallery/gallery-3.jpg", label: "Escritório" },
  { src: "/gallery/gallery-4.jpg", label: "Networking" },
  { src: "/gallery/gallery-5.jpg", label: "Projeto" },
  { src: "/gallery/gallery-6.jpg", label: "Conferência" },
];

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
  const xReverse = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);

  return (
    <section ref={containerRef} className="py-32 overflow-hidden bg-background">
      {/* Section Label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-label mb-16 px-6 md:px-12 lg:px-24"
      >
        Galeria
      </motion.p>

      {/* Row 1 - Scrolls left */}
      <motion.div style={{ x }} className="flex gap-4 mb-4">
        {[...galleryImages, ...galleryImages].map((img, index) => (
          <GalleryCard key={`row1-${index}`} image={img} index={index} />
        ))}
      </motion.div>

      {/* Row 2 - Scrolls right */}
      <motion.div style={{ x: xReverse }} className="flex gap-4">
        {[...galleryImages.slice().reverse(), ...galleryImages.slice().reverse()].map((img, index) => (
          <GalleryCard key={`row2-${index}`} image={img} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

const GalleryCard = ({ image, index }: { image: { src: string; label: string }; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative shrink-0 w-[300px] h-[200px] md:w-[400px] md:h-[280px] overflow-hidden group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
    >
      <motion.div
        className="absolute inset-0 bg-muted"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={image.src}
          alt={image.label}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-background/60"
          animate={{ opacity: isHovered ? 0 : 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Label */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4"
        animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-foreground font-medium">
          {image.label}
        </span>
      </motion.div>

      {/* Blue accent line on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-electric-blue"
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default Gallery;
