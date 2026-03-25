import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const experiences = [
  {
    role: "Fundador & CEO",
    company: "Bah!Tech",
    period: "2021 — Presente",
    description:
      "Empresa de tecnologia especializada em Inteligência Artificial, desenvolvimento de WebSites, Aplicativos e Sistemas sob medida.",
    link: "https://bahtech.com.br",
    tag: "Tecnologia",
    color: "#2563EB",
  },
  {
    role: "Sócio",
    company: "Nexus Venture",
    period: "2025 — Presente",
    description: "Empresa focada em investimentos imobiliários.",
    tag: "Investimento",
    color: "#ffab19ff",
  },
  {
    role: "Investidor",
    company: "Contel Telecom",
    period: "2024 — Presente",
    description:
      "Startup em telefonia móvel no Brasil com expansão nos EUA.",
    tag: "Startup",
    color: "#00d22dff",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-muted-dark">
      {/* Section header — always visible above the stack */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-label mb-4"
        >
          Negócios
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          Empresas &amp;{" "}
          <span className="text-electric-blue">investimentos</span>
        </motion.h2>
      </div>

      {/* 
        useWindowScroll={true} → the ScrollStack listens to window.scrollY,
        so it never traps the user inside a container scroll. 
        The section height gives enough room for cards to stack and unstack
        before the user naturally scrolls to the next section.
      */}
      <ScrollStack
        useWindowScroll={true}
        itemDistance={80}
        itemStackDistance={20}
        stackPosition="25%"
        scaleEndPosition="12%"
        baseScale={0.88}
        itemScale={0.04}
        blurAmount={1}
        className="max-w-4xl mx-auto px-6 pb-32"
      >
        {experiences.map((exp, index) => (
          <ScrollStackItem
            key={index}
            itemClassName="!h-auto !rounded-3xl !p-0 !my-6 !shadow-none"
          >
            <div
              className="w-full rounded-3xl border border-white/10 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, #0d0d0f 0%, #111318 100%)`,
                boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px rgba(0,0,0,0.5)`,
              }}
            >
              {/* Colored top accent bar */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                }}
              />

              <div className="p-8 md:p-10">
                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                      style={{
                        background: `${exp.color}20`,
                        color: exp.color,
                        border: `1px solid ${exp.color}40`,
                      }}
                    >
                      {exp.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {exp.role}
                    </h3>
                    <p
                      className="text-lg font-medium mt-1"
                      style={{ color: exp.color }}
                    >
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-3 shrink-0 ml-4">
                    <p className="text-xs tracking-widest text-muted-foreground uppercase whitespace-nowrap">
                      {exp.period}
                    </p>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                          background: `${exp.color}20`,
                          border: `1px solid ${exp.color}50`,
                          color: exp.color,
                        }}
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="h-px w-full mb-6"
                  style={{
                    background: `linear-gradient(90deg, ${exp.color}40, transparent)`,
                  }}
                />

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                {/* Progress dots */}
                <div className="mt-8 flex items-center gap-2">
                  {experiences.map((_, i) => (
                    <div
                      key={i}
                      className="h-1 rounded-full transition-all duration-300"
                      style={{
                        width: i === index ? "24px" : "6px",
                        background:
                          i === index ? exp.color : "rgba(255,255,255,0.1)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default Experience;
