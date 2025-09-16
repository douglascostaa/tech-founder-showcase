import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Vamos Conversar
          </h2>
          <div className="w-24 h-1 bg-primary-foreground/30 mx-auto mb-8"></div>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Interessado em colaborar, investir ou simplesmente trocar ideias sobre tecnologia e inovação?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in fade-in-delay-1">
            <div className="bg-primary-foreground/10 backdrop-blur-lg rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                Conecte-se Comigo
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-primary-foreground/5 rounded-xl hover:bg-primary-foreground/10 transition-colors">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">Email</h4>
                    <p className="text-primary-foreground/70">contato@exemplo.com</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-primary-foreground/5 rounded-xl hover:bg-primary-foreground/10 transition-colors">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mr-4">
                    <Linkedin className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">LinkedIn</h4>
                    <p className="text-primary-foreground/70">linkedin.com/in/perfil</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-primary-foreground/5 rounded-xl hover:bg-primary-foreground/10 transition-colors">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">WhatsApp</h4>
                    <p className="text-primary-foreground/70">+55 (11) 99999-9999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in fade-in-delay-2">
            <div className="text-center space-y-8">
              <div className="bg-primary-foreground/10 backdrop-blur-lg rounded-2xl p-8 border border-primary-foreground/20">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Interessado em:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/5 rounded-lg p-4">
                    <span className="text-primary-foreground font-medium">Parcerias</span>
                  </div>
                  <div className="bg-primary-foreground/5 rounded-lg p-4">
                    <span className="text-primary-foreground font-medium">Consultoria</span>
                  </div>
                  <div className="bg-primary-foreground/5 rounded-lg p-4">
                    <span className="text-primary-foreground font-medium">Investimentos</span>
                  </div>
                  <div className="bg-primary-foreground/5 rounded-lg p-4">
                    <span className="text-primary-foreground font-medium">Mentoria</span>
                  </div>
                </div>
              </div>

              <Button 
                className="btn-hero text-lg w-full"
                onClick={() => window.open('mailto:contato@exemplo.com', '_blank')}
              >
                Enviar Mensagem
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;