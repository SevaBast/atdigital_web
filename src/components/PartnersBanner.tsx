import { useMemo } from "react";
import { useContent } from "@/context/LanguageContext";
import { LogoLoop } from "@/components/ui/logo-loop";
import { partnersConfig } from "@/config/partnersConfig";
import { useInView } from "@/hooks/useInView";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const PartnersBanner = () => {
  const content = useContent();
  const { ref, isInView } = useInView();
  // Transform logos to LogoLoop format with BASE_URL
  const logos = content.partners.logos.map(logo => ({
    src: `${import.meta.env.BASE_URL}${logo.image.startsWith('/') ? logo.image.slice(1) : logo.image}`,
    alt: logo.name,
    title: logo.name,
    width: 120,
    height: partnersConfig.logoLoop.logoHeight,
  }));

  // Split logos by index: even → row 1, odd → row 2 (auto-alternates when adding new logos)
  const logosRow1 = useMemo(() => shuffle(logos.filter((_, i) => i % 2 === 0)), [logos]);
  const logosRow2 = useMemo(() => shuffle(logos.filter((_, i) => i % 2 === 1)), [logos]);

  return (
    <section
      ref={ref}
      className={`relative py-8 md:py-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
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
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col gap-4">
        <LogoLoop
          logos={logosRow1}
          speed={partnersConfig.logoLoop.speed}
          direction="left"
          logoHeight={partnersConfig.logoLoop.logoHeight}
          gap={partnersConfig.logoLoop.gap}
          pauseOnHover={partnersConfig.logoLoop.pauseOnHover}
          fadeOut={partnersConfig.logoLoop.fadeOut}
          fadeOutColor={partnersConfig.logoLoop.fadeOutColor}
          scaleOnHover={partnersConfig.logoLoop.scaleOnHover}
        />
        <LogoLoop
          logos={logosRow2}
          speed={partnersConfig.logoLoop.speed}
          direction="right"
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
