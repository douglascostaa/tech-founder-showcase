import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'História', id: 'about' },
    { label: 'Experiência', id: 'experience' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-soft' 
        : 'bg-background/10 backdrop-blur-sm border border-foreground/10 rounded-2xl'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 font-bold text-foreground hover:text-electric-blue transition-colors group"
          >
            <div className="w-8 h-8 bg-electric-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="text-white" size={16} />
            </div>
            <span className="text-lg">Portfolio</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-foreground/70 hover:text-foreground font-medium rounded-xl hover:bg-muted/50 transition-all duration-200 magnetic"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              className="btn-electric"
              onClick={() => scrollToSection('contact')}
            >
              <span>Vamos Conversar</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 bg-electric-blue/10 border border-electric-blue/20 rounded-xl flex items-center justify-center hover:bg-electric-blue/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 
              <X className="text-electric-blue" size={20} /> : 
              <Menu className="text-electric-blue" size={20} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border/20 mt-2 pt-4 pb-4">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-xl transition-all duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button 
                className="btn-electric mt-2"
                onClick={() => scrollToSection('contact')}
              >
                <span>Vamos Conversar</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navigation;