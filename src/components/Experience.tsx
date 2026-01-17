import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Fundador & CEO",
      company: "Bah!Tech",
      period: "2019 — Presente",
      description: "Empresa de tecnologia especializada em Inteligência Artificial, desenvolvimento de WebSites, Aplicativos e Sistemas sob medida.",
      link: "https://bahtech.com.br",
      highlight: true,
    },
    {
      role: "Sócio",
      company: "Nexus Venture",
      period: "2022 — Presente",
      description: "Empresa focada em investimentos imobiliários.",
    },
    {
      role: "Investidor",
      company: "Contel Telecom",
      period: "2023 — Presente",
      description: "Startup em telefonia móvel no Brasil com expansão nos EUA.",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-muted-dark">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Label */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-label mb-12"
        >
          Experiência
        </motion.p>
        
        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-t border-border py-12 hover:bg-accent/50 transition-all duration-300 -mx-6 px-6"
            >
              <div className="grid lg:grid-cols-12 gap-6 items-start">
                
                {/* Role & Company */}
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-medium text-foreground group-hover:text-electric-blue transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {exp.company}
                  </p>
                </div>
                
                {/* Period */}
                <div className="lg:col-span-2">
                  <p className="text-label">{exp.period}</p>
                </div>
                
                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                
                {/* Link */}
                <div className="lg:col-span-1 flex justify-end">
                  {exp.link && (
                    <a 
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-electric-blue hover:border-electric-blue transition-all duration-300"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
