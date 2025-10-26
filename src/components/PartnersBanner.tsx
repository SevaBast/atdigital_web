import { content } from "@/content/content";

const PartnersBanner = () => {
  // Duplicate logos for seamless loop
  const allLogos = [...content.partners.logos, ...content.partners.logos];

  return (
    <section className="py-12 overflow-hidden bg-background-elevated/50">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-lg text-muted-foreground">
          {content.partners.title}
        </h3>
      </div>
      
      <div className="relative">
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
