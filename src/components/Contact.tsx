import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/douglas-costa-a04b7b186/" },
    { label: "Instagram", href: "https://instagram.com/__douglas_costa" },
    { label: "Email", href: "mailto:douglas.costa@bahtech.com.br" },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Label */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-label mb-12"
        >
          Contato
        </motion.p>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-section text-foreground mb-8">
              Vamos
              <br />
              <span className="text-electric-blue">conversar?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Interessado em parcerias, investimentos ou apenas trocar 
              uma ideia sobre tecnologia? Entre em contato.
            </p>

            <motion.a 
              href="mailto:douglas.costa@bahtech.com.br"
              className="btn-blue inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Email
              <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
          
          {/* Right - Links */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <div className="space-y-0">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6 border-t border-border hover:bg-accent/50 transition-all duration-300 -mx-6 px-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <span className="text-lg text-foreground group-hover:text-electric-blue transition-colors">
                    {link.label}
                  </span>
                  <ArrowUpRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-electric-blue transition-colors" 
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2025. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Feito com tecnologia <span className="text-electric-blue font-medium">Bah!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
