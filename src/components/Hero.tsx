import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="fade-in">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-primary-foreground/20">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-lg opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left lg:flex-1 fade-in fade-in-delay-1">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Engenheiro
              <span className="block gradient-text">Fundador</span>
              <span className="block text-accent-foreground">Investidor</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-8 max-w-2xl">
              Transformando ideias em soluções tecnológicas e investindo no futuro da inovação
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in fade-in-delay-2">
              <Button 
                className="btn-hero text-lg"
                onClick={() => scrollToSection('about')}
              >
                Conheça Minha História
              </Button>
              <Button 
                variant="outline" 
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-4"
                onClick={() => scrollToSection('contact')}
              >
                Vamos Conversar
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in fade-in-delay-3">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;