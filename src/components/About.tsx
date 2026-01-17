const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Label */}
        <p className="text-label mb-12">Sobre</p>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left - Heading */}
          <div>
            <h2 className="heading-section text-foreground">
              Engenheiro de
              <br />
              <span className="text-electric-blue">computação</span>
            </h2>
          </div>
          
          {/* Right - Description */}
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Com uma base técnica sólida em engenharia de computação, 
              fundei uma empresa de tecnologia focada em criar experiências 
              digitais inovadoras.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Além de liderar minha própria empresa, sou investidor em duas 
              startups promissoras que estão redefinindo seus respectivos mercados.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-4xl font-bold text-foreground">1</p>
                <p className="text-label mt-2">Empresa</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-foreground">2</p>
                <p className="text-label mt-2">Investimentos</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-foreground">5+</p>
                <p className="text-label mt-2">Anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;