import { useContent } from "@/context/LanguageContext";
import { AnimatedTabs, TabsContent } from "@/components/AnimatedTabs";
import { useInView } from "@/hooks/useInView";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";

// ─── Products Section ──────────────────────────────────────────────
const Products = () => {
  const content = useContent();
  const { ref, isInView } = useInView();

  const tabItems = content.products.categories.map((c) => ({ id: c.id, label: c.name }));

  return (
    <section id="products" className="py-24 relative bg-background-elevated/30">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary/70">
            {content.products.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content.products.subtitle}
          </p>
        </div>

        <AnimatedTabs items={tabItems} defaultValue={content.products.categories[0].id}>
          {content.products.categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <div className="flex flex-col gap-6">
                {/* Top – full-width card with description + features */}
                <div
                  className="bento-card group relative rounded-2xl overflow-hidden border border-white/[0.06] opacity-0 animate-bento-in"
                  style={{ animationFillMode: "both" }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 p-6 md:p-10 flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                      {(() => { const Icon = getIcon(category.icon); return Icon ? <Icon className="h-7 w-7 text-foreground flex-shrink-0" /> : null; })()}
                      {category.name}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">{category.description}</p>
                    <ul className="space-y-3">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Zap className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/85 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom – media (image, video or YouTube) */}
                <div
                  className="bento-card relative rounded-2xl overflow-hidden border border-white/[0.06] opacity-0 animate-bento-in"
                  style={{ animationDelay: "100ms", animationFillMode: "both" }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                  }}
                >
                  {category.media.type === "youtube" ? (
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${category.media.src}`}
                        title={category.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  ) : category.media.type === "video" ? (
                    <video
                      src={category.media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full"
                    />
                  ) : (
                    <img
                      src={category.media.src}
                      alt={category.name}
                      className="w-full"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </TabsContent>
          ))}
        </AnimatedTabs>
      </div>
    </section>
  );
};

export default Products;
