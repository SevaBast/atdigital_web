import { useState, useRef, useEffect } from "react";
import { content } from "@/content/content";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap } from "lucide-react";

const Products = () => {
  const [activeTab, setActiveTab] = useState(content.products.categories[0].id);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0, height: 0, top: 0 });
  const tabsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const activeElement = tabsRef.current[activeTab];
    if (activeElement) {
      const parent = activeElement.parentElement;
      setIndicatorStyle({
        width: activeElement.offsetWidth,
        left: activeElement.offsetLeft,
        height: activeElement.offsetHeight,
        top: activeElement.offsetTop,
      });
    }
  }, [activeTab]);

  return (
    <section id="products" className="py-24 relative bg-background-elevated/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {content.products.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content.products.subtitle}
          </p>
        </div>

        <Tabs defaultValue={content.products.categories[0].id} className="w-full" onValueChange={setActiveTab}>
          <TabsList className="bg-transparent border-0 p-0 mb-12 flex flex-wrap justify-center gap-4 h-auto relative">
            {/* Liquid Morphing Background - Only Behind Active Tab */}
            <div
              className="absolute bg-gradient-to-r from-primary/80 via-primary-glow/80 to-primary/80 rounded-xl transition-all duration-500 ease-out backdrop-blur-lg -z-0"
              style={{
                width: `${indicatorStyle.width}px`,
                height: `${indicatorStyle.height}px`,
                left: `${indicatorStyle.left}px`,
                top: `${indicatorStyle.top}px`,
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                filter: 'blur(1px)',
              }}
            />
            
            {content.products.categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                ref={(el) => (tabsRef.current[category.id] = el)}
                className="bg-transparent rounded-xl px-6 py-3 relative z-10 transition-all duration-300 hover:scale-105 data-[state=active]:bg-background/20 data-[state=active]:backdrop-blur-lg data-[state=active]:text-primary-foreground data-[state=active]:font-semibold data-[state=inactive]:text-foreground/70 data-[state=inactive]:hover:text-foreground"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {content.products.categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <Card className="glass glass-hover rounded-2xl p-8 md:p-12 border-0 max-w-4xl mx-auto">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">
                    {category.name}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    {category.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 glass rounded-xl p-4"
                      >
                        <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Products;
