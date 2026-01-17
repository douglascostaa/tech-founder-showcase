import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Fundador & CEO",
      company: "Bah!Tech",
      period: "2019 — Presente",
      description: "Empresa de tecnologia especializada em criar experiências digitais.",
      link: "https://bahtech.com.br",
      highlight: true,
    },
    {
      role: "Investidor",
      company: "Startup 1",
      period: "2022 — Presente",
      description: "Investimento em startup de tecnologia com foco em inovação.",
    },
    {
      role: "Investidor",
      company: "Startup 2",
      period: "2023 — Presente",
      description: "Investimento estratégico em empresa de tecnologia emergente.",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-muted-dark">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Label */}
        <p className="text-label mb-12">Experiência</p>
        
        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div 
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;