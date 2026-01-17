import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-background">
      
      {/* Main Content */}
      <div className="flex-1 flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-24">
          
          {/* Hero Typography */}
          <div className="space-y-8">
            <p className="text-label fade-up">Engenheiro · Fundador · Investidor</p>
            
            <h1 className="heading-hero fade-up fade-up-delay-1">
              <span className="text-foreground">Criando</span>
              <br />
              <span className="text-electric-blue">o futuro</span>
            </h1>
            
            <div className="max-w-md fade-up fade-up-delay-2">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fundador de empresa de tecnologia e investidor em startups que estão 
                transformando o mercado.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-8 fade-up fade-up-delay-3">
              <button 
                className="btn-outline"
                onClick={() => scrollToSection('about')}
              >
                Conhecer
              </button>
              <button 
                className="btn-text hover-line"
                onClick={() => scrollToSection('contact')}
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-12 lg:px-24 pb-8">
        <div className="flex items-end justify-between border-t border-border pt-8">
          <div className="flex items-center gap-12">
            <div>
              <p className="text-label mb-1">Fundador</p>
              <p className="text-foreground font-medium">Bah!Tech</p>
            </div>
            <div>
              <p className="text-label mb-1">Investidor</p>
              <p className="text-foreground font-medium">2 Startups</p>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-electric-blue transition-colors"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>

      {/* Subtle Blue Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default Hero;