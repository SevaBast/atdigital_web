import { useContent } from "@/context/LanguageContext";
import { useCallback } from "react";
import { AnimatedTabs, TabsContent } from "@/components/AnimatedTabs";
import { useInView } from "@/hooks/useInView";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Product Feature Card (bento-style) ───────────────────────────
interface FeatureCardProps {
  text: string;
  index: number;
}

const FeatureCard = ({ text, index }: FeatureCardProps) => {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "bento-card relative group rounded-xl overflow-hidden",
        "border border-white/[0.06]",
        "transition-all duration-500 ease-out",
        "hover:border-primary/25 hover:-translate-y-0.5",
        "opacity-0 animate-bento-in",
      )}
      style={{
        animationDelay: `${(index + 1) * 60}ms`,
        animationFillMode: "both",
      }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 p-4 flex items-start gap-3">
        <Zap className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
        <span className="text-sm text-foreground/85 leading-relaxed">{text}</span>
      </div>
    </div>
  );
};

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {content.products.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content.products.subtitle}
          </p>
        </div>

        <AnimatedTabs items={tabItems} defaultValue={content.products.categories[0].id}>
          {content.products.categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <div className="mx-auto space-y-6">
                {/* Description card */}
                <div
                  className="bento-card relative rounded-2xl overflow-hidden border border-white/[0.06] opacity-0 animate-bento-in"
                  style={{ animationFillMode: "both" }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-40" />
                  <div className="relative z-10 p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{category.name}</h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{category.description}</p>
                  </div>
                </div>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {category.features.map((feature, i) => (
                    <FeatureCard key={i} text={feature} index={i} />
                  ))}
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
