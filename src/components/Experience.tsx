import { ArrowUpRight, Code, Building, TrendingUp, Users, Zap, Target } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-large mb-6">
            <span className="text-foreground">Minha</span>
            <span className="text-electric"> Experiência</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Três pilares que definem minha trajetória profissional
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-24">
          
          {/* Engineer Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid-appear">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-electric-blue/10 border border-electric-blue/20 rounded-2xl flex items-center justify-center">
                    <Code className="text-electric-blue" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Engenheiro</h3>
                    <p className="text-electric-blue font-medium">Base Técnica Sólida</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Formação em Engenharia de Computação com foco em desenvolvimento de software, 
                  arquitetura de sistemas e soluções escaláveis. Experiência hands-on em tecnologias 
                  modernas e metodologias ágeis.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-electric-blue mb-1">5+</div>
                    <div className="text-sm text-muted-foreground">Anos Codando</div>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-electric-blue mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Tecnologias</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-appear grid-appear-delay">
              <div className="bg-background-dark rounded-3xl p-8 text-foreground-light">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold mb-4">Stack Tecnológico</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["React", "Node.js", "Python", "AWS", "Docker", "MongoDB"].map((tech) => (
                      <div key={tech} className="flex items-center gap-2 bg-electric-blue/10 rounded-lg p-2">
                        <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                        <span className="text-sm font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 grid-appear">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center">
                    <Building className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Fundador</h3>
                    <p className="text-electric-blue font-medium">CEO de Tech Company</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fundei e lidero uma empresa de tecnologia inovadora, desenvolvendo produtos 
                  que impactam o mercado e geram valor real. Foco em soluções escaláveis e 
                  experiência do usuário excepcional.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Users, text: "Liderança de Equipe" },
                    { icon: Zap, text: "Estratégia de Produto" },
                    { icon: Target, text: "Crescimento Sustentável" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <item.icon className="text-electric-blue" size={20} />
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:order-1 grid-appear grid-appear-delay">
              <div className="bg-gradient-electric rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Empresa de Tecnologia</h4>
                    <p className="text-white/90">
                      Desenvolvendo soluções inovadoras que transformam a forma como 
                      pessoas e empresas interagem com a tecnologia.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/80">
                    <ArrowUpRight size={16} />
                    <span className="text-sm font-medium">Em crescimento constante</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investor Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid-appear">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-background-dark rounded-2xl flex items-center justify-center">
                    <TrendingUp className="text-electric-blue" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Investidor</h3>
                    <p className="text-electric-blue font-medium">2 Startups em Portfólio</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Invisto em startups promissoras com foco em tecnologia e inovação. 
                  Além do capital, ofereço mentoria estratégica, network qualificado e 
                  experiência prática em scaling de produtos.
                </p>

                <div className="bg-muted/50 rounded-xl p-6">
                  <h4 className="font-bold mb-3">Áreas de Interesse</h4>
                  <div className="flex flex-wrap gap-2">
                    {["SaaS", "FinTech", "EdTech", "HealthTech"].map((area) => (
                      <span key={area} className="bg-electric-blue/10 text-electric-blue px-3 py-1 rounded-full text-sm font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-appear grid-appear-delay">
              <div className="space-y-4">
                <div className="bg-background border border-border rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold">Startup A</h4>
                    <TrendingUp className="text-electric-blue" size={20} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Plataforma SaaS para automação de processos
                  </p>
                </div>
                
                <div className="bg-background border border-border rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold">Startup B</h4>
                    <TrendingUp className="text-electric-blue" size={20} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Solução FinTech para pequenas empresas
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;