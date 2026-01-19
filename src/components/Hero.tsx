import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-background">

      {/* Background Hero Image */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-full md:w-[60%] lg:w-[50%] h-full">
          <img
            src="/hero-profile.png"
            alt="Douglas Costa"
            className="w-full h-full object-cover object-[20%] md:object-top"
          />

          {/* Dark overlay for discrete look */}
          <div className="absolute inset-0 bg-black/80 md:bg-black/40" />

          {/* Gradient Fade - Bottom (darker from middle down) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

          {/* Gradient Fade - Left (to blend with content) */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="w-full px-6 md:px-12 lg:px-24">

          {/* Hero Typography */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-label"
            >
              Empresário · Engenheiro · Investidor
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-hero"
            >
              <span className="text-foreground">Criando</span>
              <br />
              <span className="text-electric-blue">o futuro</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-md"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fundador de empresa de tecnologia e investidor em startups que estão
                transformando o mercado.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8"
            >
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="px-6 md:px-12 lg:px-24 pb-8 relative z-10"
      >
        <div className="flex items-end justify-between border-t border-border pt-8">
          <div className="flex items-center gap-12">
            <div>
              <p className="text-label mb-1">Fundador</p>
              <p className="text-foreground font-medium">Bah!Tech</p>
            </div>
            <div>
              <p className="text-label mb-1">Sócio</p>
              <p className="text-foreground font-medium">Nexus Venture</p>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-electric-blue transition-colors"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </motion.div>

      {/* Subtle Blue Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default Hero;
