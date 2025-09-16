import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";
import FloatingElements from "./FloatingElements";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <FloatingElements />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="grid-appear">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full px-4 py-2">
                <Sparkles size={16} className="text-electric-blue" />
                <span className="text-sm font-medium text-electric-blue">Tech Founder & Investor</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="heading-display text-balance">
                  <span className="text-foreground">Eng.</span>
                  <br />
                  <span className="text-electric glitch" data-text="Fund.">Fund.</span>
                  <br />
                  <span className="text-foreground">Invest.</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg text-balance leading-relaxed">
                  Transformando ideias disruptivas em soluções que impactam milhares de pessoas e investindo no futuro da tecnologia.
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-electric-blue">
                    <AnimatedCounter end={1} suffix="x" />
                  </div>
                  <div className="text-sm text-muted-foreground">Empresa Fundada</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-electric-blue">
                    <AnimatedCounter end={2} suffix="x" />
                  </div>
                  <div className="text-sm text-muted-foreground">Investimentos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-electric-blue">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="btn-electric"
                  onClick={() => scrollToSection('about')}
                >
                  <span>Minha História</span>
                </button>
                <button 
                  className="btn-brutal"
                  onClick={() => scrollToSection('contact')}
                >
                  <span>Vamos Conversar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Section */}
          <div className="grid-appear grid-appear-delay">
            <div className="relative">
              {/* Main Profile Card */}
              <div className="bg-background border border-border rounded-3xl p-8 shadow-soft">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-mesh">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Engenheiro de Computação</h3>
                    <p className="text-muted-foreground">Base técnica sólida em desenvolvimento</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-electric-blue">
                    <Code size={16} />
                    <span className="text-sm font-medium">Full-Stack • Cloud • AI</span>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-electric-blue text-white rounded-2xl p-4 shadow-electric floating">
                <div className="text-2xl font-bold">CEO</div>
                <div className="text-sm opacity-90">Tech Company</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-background-dark text-foreground-light rounded-2xl p-4 shadow-soft floating-delayed">
                <div className="text-lg font-bold">Investor</div>
                <div className="text-sm opacity-70">2 Startups</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-electric-blue transition-colors magnetic"
          >
            <ArrowDown size={24} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;