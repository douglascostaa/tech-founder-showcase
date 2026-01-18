import Navigation from "@/components/Navigation";
import MouseSpotlight from "@/components/MouseSpotlight";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MouseSpotlight />
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
