import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const links = [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Email", href: "mailto:contato@exemplo.com" },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Label */}
        <p className="text-label mb-12">Contato</p>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left - CTA */}
          <div>
            <h2 className="heading-section text-foreground mb-8">
              Vamos
              <br />
              <span className="text-electric-blue">conversar?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Interessado em parcerias, investimentos ou apenas trocar 
              uma ideia sobre tecnologia? Entre em contato.
            </p>

            <a 
              href="mailto:contato@exemplo.com"
              className="btn-blue inline-flex items-center gap-3"
            >
              Enviar Email
              <ArrowUpRight size={16} />
            </a>
          </div>
          
          {/* Right - Links */}
          <div className="flex flex-col justify-end">
            <div className="space-y-0">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6 border-t border-border hover:bg-accent/50 transition-all duration-300 -mx-6 px-6"
                >
                  <span className="text-lg text-foreground group-hover:text-electric-blue transition-colors">
                    {link.label}
                  </span>
                  <ArrowUpRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-electric-blue transition-colors" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Feito com tecnologia
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;