import { content } from "@/content/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import Prism from "@/components/Prism";
import { prismConfig } from "@/config/prismConfig";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Prism Animated Background */}
      <div className="absolute inset-0">
        <Prism
          animationType={prismConfig.animationType}
          timeScale={prismConfig.timeScale}
          height={prismConfig.height}
          baseWidth={prismConfig.baseWidth}
          scale={prismConfig.scale}
          hueShift={prismConfig.hueShift}
          colorFrequency={prismConfig.colorFrequency}
          noise={prismConfig.noise}
          glow={prismConfig.glow}
          bloom={prismConfig.bloom}
          transparent={prismConfig.transparent}
          suspendWhenOffscreen={prismConfig.suspendWhenOffscreen}
          offset={prismConfig.offset}
          hoverStrength={prismConfig.hoverStrength}
          inertia={prismConfig.inertia}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in space-y-8">
          {/* Logo */}
          <div className="space-y-4">
            <img 
              src="/atd_logo.png" 
              alt="AT Digital Logo" 
              className="mx-auto w-full max-w-3xl h-auto"
            />
            <p className="text-xl md:text-2xl text-primary font-medium">
              {content.hero.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {content.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="group glass-hover rounded-xl px-8 py-6 text-lg bg-primary hover:bg-primary-glow"
            >
              {content.hero.buttons.services}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "/academia")}
              className="group glass rounded-xl px-8 py-6 text-lg border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              {content.hero.buttons.academia}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
