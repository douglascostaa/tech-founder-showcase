import { Code, Building, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: <Code size={32} />,
      title: "Engenheiro de Computação",
      subtitle: "Base Técnica Sólida",
      description: "Formação em engenharia de computação com foco em desenvolvimento de software, arquitetura de sistemas e soluções escaláveis.",
      highlights: ["Desenvolvimento Full-Stack", "Arquitetura de Software", "Otimização de Performance"]
    },
    {
      icon: <Building size={32} />,
      title: "Fundador & CEO",
      subtitle: "Empresa de Tecnologia",
      description: "Fundei e lidero uma empresa de tecnologia inovadora, desenvolvendo produtos que impactam o mercado e geram valor real.",
      highlights: ["Liderança de Equipe", "Estratégia de Produto", "Crescimento Sustentável"]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Investidor",
      subtitle: "2 Empresas em Portfólio",
      description: "Invisto em startups promissoras, fornecendo capital inteligente e mentoria estratégica para acelerar o crescimento.",
      highlights: ["Capital Inteligente", "Mentoria Estratégica", "Network de Alto Valor"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Minha Experiência
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma jornada que conecta conhecimento técnico, liderança empresarial e visão de investimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`fade-in fade-in-delay-${index + 1}`}>
              <div className="glass-card h-full group hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-foreground group-hover:shadow-glow transition-shadow duration-300">
                    {exp.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-medium">
                    {exp.subtitle}
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in fade-in-delay-3">
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Transformando Ideias em Realidade
            </h3>
            <p className="text-muted-foreground text-lg">
              Cada etapa da minha carreira me permitiu desenvolver uma visão única sobre tecnologia, 
              negócios e investimentos. Hoje, uso essa experiência para criar valor e impacto positivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;