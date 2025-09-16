const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Electric Blue Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-electric-blue/20 rounded-full blur-xl floating" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-electric-blue-glow/30 rounded-full blur-lg floating-delayed" />
      <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-electric-blue/25 rounded-full blur-md floating" />
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/3 right-10 w-8 h-8 border-2 border-electric-blue/40 rotate-45 floating-delayed" />
      <div className="absolute bottom-20 right-1/3 w-6 h-6 bg-electric-blue/60 rounded-sm floating" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
    </div>
  );
};

export default FloatingElements;