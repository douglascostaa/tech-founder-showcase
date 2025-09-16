import { Mail, Linkedin, MessageCircle, ArrowUpRight, Calendar, Coffee } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background-dark text-foreground-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-large mb-6">
            <span className="text-foreground-light">Vamos</span>
            <span className="text-electric-blue"> Conversar</span>
          </h2>
          <p className="text-xl text-foreground-light/70 max-w-2xl mx-auto text-balance">
            Interessado em colaborar, investir ou trocar ideias sobre tecnologia e inovação?
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Main Contact Card */}
          <div className="lg:col-span-2 grid-appear">
            <div className="bg-background/5 backdrop-blur-lg border border-foreground-light/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-8">Entre em Contato</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="group cursor-pointer">
                  <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-2xl p-6 group-hover:bg-electric-blue/20 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-electric-blue rounded-xl flex items-center justify-center">
                        <Mail className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground-light">Email</h4>
                        <p className="text-sm text-foreground-light/60">Resposta rápida</p>
                      </div>
                    </div>
                    <p className="text-foreground-light/80 font-medium">contato@exemplo.com</p>
                    <div className="flex items-center gap-2 mt-3 text-electric-blue">
                      <span className="text-sm">Enviar email</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="group cursor-pointer">
                  <div className="bg-foreground-light/5 border border-foreground-light/10 rounded-2xl p-6 group-hover:bg-foreground-light/10 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-foreground-light/20 rounded-xl flex items-center justify-center">
                        <Linkedin className="text-electric-blue" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground-light">LinkedIn</h4>
                        <p className="text-sm text-foreground-light/60">Rede profissional</p>
                      </div>
                    </div>
                    <p className="text-foreground-light/80 font-medium">linkedin.com/in/perfil</p>
                    <div className="flex items-center gap-2 mt-3 text-electric-blue">
                      <span className="text-sm">Conectar</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="group cursor-pointer md:col-span-2">
                  <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-2xl p-6 group-hover:bg-electric-blue/20 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-electric-blue rounded-xl flex items-center justify-center">
                        <MessageCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground-light">WhatsApp</h4>
                        <p className="text-sm text-foreground-light/60">Conversa direta</p>
                      </div>
                    </div>
                    <p className="text-foreground-light/80 font-medium">+55 (11) 99999-9999</p>
                    <div className="flex items-center gap-2 mt-3 text-electric-blue">
                      <span className="text-sm">Iniciar conversa</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6 grid-appear grid-appear-delay">
            
            {/* Availability */}
            <div className="bg-background/5 backdrop-blur-lg border border-foreground-light/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-electric-blue" size={24} />
                <h4 className="font-bold text-foreground-light">Disponibilidade</h4>
              </div>
              <p className="text-foreground-light/70 text-sm mb-4">
                Sempre aberto para conversas sobre projetos interessantes e oportunidades de colaboração.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
                <span className="text-sm text-electric-blue font-medium">Disponível agora</span>
              </div>
            </div>

            {/* Coffee Chat */}
            <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="text-electric-blue" size={24} />
                <h4 className="font-bold text-foreground-light">Coffee Chat</h4>
              </div>
              <p className="text-foreground-light/80 text-sm mb-4">
                Vamos tomar um café virtual e discutir ideias, projetos ou oportunidades.
              </p>
              <button className="btn-electric w-full">
                <span>Agendar</span>
              </button>
            </div>

          </div>
        </div>

        {/* Interest Areas */}
        <div className="text-center grid-appear">
          <div className="bg-background/5 backdrop-blur-lg border border-foreground-light/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground-light mb-6">
              Interessado em discutir sobre:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Parcerias Técnicas", "Oportunidades de Investimento", "Consultoria em Tech", "Mentoria para Startups"].map((topic) => (
                <div key={topic} className="bg-electric-blue/10 border border-electric-blue/20 rounded-xl p-4 hover:bg-electric-blue/20 transition-colors cursor-pointer">
                  <span className="text-sm font-medium text-foreground-light">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;