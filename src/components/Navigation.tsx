import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    { label: 'Sobre', id: 'about' },
    { label: 'Experiência', id: 'experience' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/90 backdrop-blur-md border-b border-border'
        : 'bg-transparent'
        }`}>
        <div className="px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="group flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Home"
            >
              <svg width="45" height="35" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                {/* D Layer Behind */}
                <text
                  x="0"
                  y="30"
                  fontSize="36"
                  fontWeight="900"
                  fill="currentColor"
                  className="text-foreground tracking-tighter"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  D
                </text>

                {/* C Layer Front with Cutout Effect */}
                <text
                  x="18"
                  y="30"
                  fontSize="36"
                  fontWeight="900"
                  fill="hsl(var(--electric-blue))"
                  stroke="hsl(var(--background))"
                  strokeWidth="5"
                  paintOrder="stroke"
                  className="tracking-tighter"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  C
                </text>
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="btn-text hover-line"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col justify-center items-center">
          <div className="flex flex-col gap-8 text-center">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-4xl font-bold text-foreground hover:text-electric-blue transition-colors fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;