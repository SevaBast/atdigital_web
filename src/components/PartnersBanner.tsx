import { content } from "@/content/content";
import { LogoLoop } from "@/components/ui/logo-loop";
import { partnersConfig } from "@/config/partnersConfig";

const PartnersBanner = () => {
  // Transform logos to LogoLoop format with BASE_URL
  const logos = content.partners.logos.map(logo => ({
    src: `${import.meta.env.BASE_URL}${logo.image.startsWith('/') ? logo.image.slice(1) : logo.image}`,
    alt: logo.name,
    title: logo.name,
  }));

  return (
    <section className="relative py-12">
      {/* Gradient blur overlay at top for smooth transition from Hero */}
      {partnersConfig.section.topGradient.enabled && (
        <div 
          className="absolute inset-x-0 top-0 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none"
          style={{ height: `${partnersConfig.section.topGradient.height}px` }}
        />
      )}
      
      <div className="container mx-auto px-4 mb-8 relative z-10">
        <h3 className="text-center text-lg text-muted-foreground">
          {content.partners.title}
        </h3>
      </div>
      
      <div className="relative z-10">
        <LogoLoop
          logos={logos}
          speed={partnersConfig.logoLoop.speed}
          direction={partnersConfig.logoLoop.direction}
          logoHeight={partnersConfig.logoLoop.logoHeight}
          gap={partnersConfig.logoLoop.gap}
          pauseOnHover={partnersConfig.logoLoop.pauseOnHover}
          fadeOut={partnersConfig.logoLoop.fadeOut}
          fadeOutColor={partnersConfig.logoLoop.fadeOutColor}
          scaleOnHover={partnersConfig.logoLoop.scaleOnHover}
        />
      </div>
    </section>
  );
};

export default PartnersBanner;
