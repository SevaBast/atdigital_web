import { content } from "@/content/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

// Responsive scale settings
const MOBILE_SCALE = 0.75; // Nastavenie pre telefóny (< 768px)
const DESKTOP_SCALE = 1.0; // Nastavenie pre počítače (>= 768px)

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative"
    >
      {/* Aurora Background with northern lights effect */}
      <AuroraBackground showRadialGradient={true}>
        {/* Gradient fade to background at bottom for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-[5]" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
        <div 
          className="space-y-8 origin-center transition-transform duration-300"
          style={{ 
            transform: window.innerWidth >= 768 
              ? `scale(${DESKTOP_SCALE})` 
              : `scale(${MOBILE_SCALE})` 
          }}
        >
          {/* Logo */}
          <div className="space-y-4">
            <img 
              src={`${import.meta.env.BASE_URL}atd_logo.png`}
              alt="AT Digital Logo" 
              className="mx-auto w-full max-w-3xl h-auto"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.9))' }}
            />
            <p className="text-xl md:text-2xl text-primary font-medium" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.7)' }}>
              {content.hero.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.7)' }}>
            {content.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="bg-transparent backdrop-blur-md bg-background/30 rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:bg-background/40 text-primary-foreground font-semibold"
            >
              {content.hero.buttons.services}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "/academia")}
              className="bg-transparent backdrop-blur-md bg-background/30 rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:bg-background/40 text-foreground/90 hover:text-foreground font-medium border-0"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              {content.hero.buttons.academia}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
