import { content } from "@/content/content";

const PartnersBanner = () => {
  // Duplicate logos for seamless loop
  const allLogos = [...content.partners.logos, ...content.partners.logos];

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Gradient blur overlay at top for smooth transition from Hero */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 mb-8 relative z-10">
        <h3 className="text-center text-lg text-muted-foreground">
          {content.partners.title}
        </h3>
      </div>
      
      <div className="relative z-10">
        <div className="flex animate-scroll">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 glass rounded-xl px-8 py-4 min-w-[200px] flex items-center justify-center"
            >
              <span className="text-xl font-semibold text-foreground/60">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBanner;
