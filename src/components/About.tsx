const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in fade-in-delay-1">
            <div className="glass-card">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Minha Jornada
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Como engenheiro de computação apaixonado por inovação, construí minha carreira 
                transformando desafios complexos em soluções elegantes e escaláveis.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Fundei minha própria empresa de tecnologia, onde lidero uma equipe dedicada 
                a criar produtos que impactam positivamente a vida das pessoas e dos negócios.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hoje, além de liderar minha empresa, invisto em outras duas startups promissoras, 
                compartilhando conhecimento e ajudando novos empreendedores a realizarem suas visões.
              </p>
            </div>
          </div>

          <div className="fade-in fade-in-delay-2">
            <div className="space-y-8">
              <div className="glass-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-bold text-xl">💡</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Inovação</h4>
                    <p className="text-muted-foreground">Busco sempre soluções criativas</p>
                  </div>
                </div>
              </div>

              <div className="glass-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-bold text-xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Liderança</h4>
                    <p className="text-muted-foreground">Construo e inspiro equipes</p>
                  </div>
                </div>
              </div>

              <div className="glass-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-bold text-xl">📈</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Visão</h4>
                    <p className="text-muted-foreground">Invisto no futuro da tecnologia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;