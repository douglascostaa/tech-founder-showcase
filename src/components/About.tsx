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
              Engenheiro,
              <br />
              <span className="text-electric-blue">empresário</span>
              <br />
              & investidor
            </h2>
          </div>
          
          {/* Right - Description */}
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Com formação em engenharia de computação, construí minha carreira 
              atuando no mercado internacional de desenvolvimento de software e 
              e-commerce em países como Argentina, Chile, México, Peru e Brasil.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Essa experiência global me deu a visão para fundar minha própria 
              empresa de tecnologia e investir em startups que estão transformando 
              seus mercados.
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