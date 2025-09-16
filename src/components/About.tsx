import BentoCard from "@/components/ui/bento-card";
import { Brain, Lightbulb, Rocket, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-large mb-6">
            <span className="text-foreground">Minha</span>
            <span className="text-electric"> História</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Uma jornada que combina paixão por tecnologia, visão empreendedora e investimento estratégico
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[200px]">
          
          {/* Main Story Card */}
          <BentoCard size="xl" variant="electric" className="md:col-span-4 lg:col-span-3 md:row-span-2">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Engenheiro de Coração</h3>
                <p className="text-white/90 leading-relaxed">
                  Formado em Engenharia de Computação, sempre fui fascinado por como a tecnologia 
                  pode resolver problemas complexos e criar soluções que impactam milhares de pessoas.
                </p>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Brain size={20} />
                <span className="text-sm font-medium">Pensamento Analítico</span>
              </div>
            </div>
          </BentoCard>

          {/* Innovation Card */}
          <BentoCard size="md" className="md:col-span-2 lg:col-span-2">
            <div className="text-center h-full flex flex-col justify-center">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-electric-blue" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Inovação</h4>
              <p className="text-muted-foreground text-sm">
                Sempre em busca de soluções criativas e disruptivas
              </p>
            </div>
          </BentoCard>

          {/* Founder Journey */}
          <BentoCard size="md" variant="dark" className="md:col-span-2 lg:col-span-3">
            <div>
              <h3 className="text-xl font-bold mb-3">Fundador & CEO</h3>
              <p className="text-foreground-light/80 mb-4 leading-relaxed">
                Transformei minha paixão por tecnologia em uma empresa que desenvolve 
                soluções inovadoras para o mercado.
              </p>
              <div className="flex items-center gap-2">
                <Rocket className="text-electric-blue" size={16} />
                <span className="text-sm text-electric-blue font-medium">Tech Company</span>
              </div>
            </div>
          </BentoCard>

          {/* Leadership Card */}
          <BentoCard size="sm" className="md:col-span-1 lg:col-span-1">
            <div className="text-center h-full flex flex-col justify-center">
              <div className="text-3xl font-bold text-electric-blue mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Anos Liderando</div>
            </div>
          </BentoCard>

          {/* Investment Focus */}
          <BentoCard size="md" className="md:col-span-3 lg:col-span-2">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-electric-blue rounded-xl flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Investidor</h4>
                  <p className="text-sm text-muted-foreground">Capital Inteligente</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Invisto em 2 startups promissoras, oferecendo não apenas capital, 
                mas mentoria estratégica e network.
              </p>
            </div>
          </BentoCard>

          {/* Vision Statement */}
          <BentoCard size="lg" className="md:col-span-4 lg:col-span-4">
            <div className="text-center h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-foreground">Construindo o</span>
                <span className="text-electric"> Futuro</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
                Cada projeto, cada investimento e cada decisão são guiados pela visão de 
                criar tecnologias que realmente importam e transformam vidas.
              </p>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default About;