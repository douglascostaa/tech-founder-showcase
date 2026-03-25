import { motion } from "framer-motion";

// Only browser-compatible formats (jpg, jpeg, png, webp) — HEIC excluded
const galleryImages = [
  { src: "/gallery/IMG_1418.PNG", alt: "Evento" },
  { src: "/gallery/IMG_1547.jpg", alt: "Networking" },
  { src: "/gallery/IMG_8125_jpg.jpg", alt: "Projeto" },
  { src: "/gallery/IMG_8740_SnapseedCopy.jpg", alt: "Equipe" },
  { src: "/gallery/43be2ac1-862e-465f-a54a-a501b8cb1f0c.JPG", alt: "Momento" },
  { src: "/gallery/_DSC0525.jpeg", alt: "Evento" },
  { src: "/gallery/_DSC0601.jpeg", alt: "Palco" },
  { src: "/gallery/_DSC0612.jpeg", alt: "Apresentação" },
  { src: "/gallery/_DSC0633.jpeg", alt: "Bastidores" },
];

const row2 = [...galleryImages].reverse();

// We duplicate the array so the CSS animation can loop seamlessly:
// the track is [A B C D A B C D] and we animate translateX from 0 → -50%
// which looks identical to the start, giving an infinite loop.
const track1 = [...galleryImages, ...galleryImages];
const track2 = [...row2, ...row2];

const CARD_W = 360; // px - card width (same for both breakpoints via CSS)
const CARD_H = 240; // px
const GAP = 16;  // px gap between cards

export default function Gallery() {
  return (
    <>
      {/* Inject keyframes once */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  36s linear infinite; }
        .marquee-right { animation: marquee-right 44s linear infinite; }
      `}</style>

      <section className="py-24 bg-background overflow-hidden">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-label mb-12 px-6 md:px-12 lg:px-24"
        >
          Galeria
        </motion.p>

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-4">
          <div
            className="marquee-left flex will-change-transform"
            style={{ gap: GAP, width: "max-content" }}
          >
            {track1.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                draggable={false}
                loading={i < 4 ? "eager" : "lazy"}
                style={{ width: CARD_W, height: CARD_H, flexShrink: 0 }}
                className="object-cover rounded-xl select-none pointer-events-none"
              />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div
            className="marquee-right flex will-change-transform"
            style={{ gap: GAP, width: "max-content" }}
          >
            {track2.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                draggable={false}
                loading={i < 4 ? "eager" : "lazy"}
                style={{ width: CARD_W, height: CARD_H, flexShrink: 0 }}
                className="object-cover rounded-xl select-none pointer-events-none"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
