import { content } from "@/content/content";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap } from "lucide-react";

const Products = () => {
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

        <Tabs defaultValue={content.products.categories[0].id} className="w-full">
          <TabsList className="glass rounded-2xl p-2 mb-12 flex flex-wrap justify-center gap-2 h-auto">
            {content.products.categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
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
