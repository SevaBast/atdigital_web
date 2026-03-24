import { useContent } from "@/context/LanguageContext";
import { useState, useCallback } from "react";
import { AnimatedTabs, TabsContent } from "@/components/AnimatedTabs";
import { useInView } from "@/hooks/useInView";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";

// ─── Bento Grid Patterns ──────────────────────────────────────────
const BENTO_SPANS: Record<number, number[]> = {
  1: [3],
  2: [2, 1],
  3: [2, 1, 3],
  4: [2, 1, 1, 2],
  5: [2, 1, 1, 2, 3],
  6: [2, 1, 1, 2, 2, 1],
  7: [2, 1, 1, 2, 1, 2, 3],
  8: [2, 1, 1, 2, 2, 1, 1, 2],
};

function getColSpan(index: number, total: number): number {
  return BENTO_SPANS[total]?.[index] ?? 1;
}

// ─── Bento Card ────────────────────────────────────────────────────
interface BentoCardProps {
  title: string;
  icon: string;
  description: string;
  benefits: string[];
  index: number;
  colSpan: number;
}

const BentoCard = ({ title, icon, description, benefits, index, colSpan }: BentoCardProps) => {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "bento-card relative group rounded-2xl overflow-hidden",
        "border border-white/[0.06]",
        "transition-all duration-500 ease-out",
        "hover:border-primary/25 hover:-translate-y-1",
        "opacity-0 animate-bento-in",
        colSpan === 2 && "md:col-span-2",
        colSpan === 3 && "md:col-span-3",
      )}
      style={{
        animationDelay: `${index * 80}ms`,
        animationFillMode: "both",
      }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col min-h-[140px]">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 flex items-center gap-2.5">
          {(() => { const Icon = getIcon(icon); return Icon ? <Icon className="h-5 w-5 text-foreground flex-shrink-0" /> : null; })()}
          {title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        {benefits.length > 0 && benefits[0] !== "" && (
          <ul className="flex flex-col gap-2 pt-4 border-t border-white/[0.06]">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2">
                <Zap className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/85 leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// ─── Services Section ──────────────────────────────────────────────
const Services = () => {
  const content = useContent();
  const { ref, isInView } = useInView();
  const [activeTab, setActiveTab] = useState(content.services.categories[0].id);

  const tabItems = content.services.categories.map((c) => ({ id: c.id, label: c.name }));
  const activeCategory = content.services.categories.find((c) => c.id === activeTab);

  return (
    <section id="services" className="py-24 relative">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {content.services.title}
          </h2>
          <p className="text-xl text-muted-foreground">{content.services.subtitle}</p>
        </div>

        <AnimatedTabs
          items={tabItems}
          defaultValue={content.services.categories[0].id}
          tabsListClassName="flex-col md:flex-row md:flex-wrap"
          onValueChange={setActiveTab}
        >
          {content.services.categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                {category.services.map((service, index) => (
                  <BentoCard
                    key={`${category.id}-${index}`}
                    title={service.name}
                    icon={service.icon}
                    description={service.description}
                    benefits={service.benefits}
                    index={index}
                    colSpan={getColSpan(index, category.services.length)}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </AnimatedTabs>
      </div>
    </section>
  );
};

export default Services;
