import { useState } from "react";
import { content } from "@/content/content";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {content.services.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content.services.subtitle}
          </p>
        </div>

        <Tabs defaultValue={content.services.categories[0].id} className="w-full">
          <TabsList className="glass rounded-2xl p-2 mb-12 flex flex-wrap justify-center gap-2 h-auto">
            {content.services.categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {content.services.categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, index) => (
                  <Card
                    key={index}
                    className="glass glass-hover rounded-2xl p-6 space-y-4 border-0"
                  >
                    <h3 className="text-2xl font-bold text-foreground">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2 pt-4">
                      <p className="text-sm font-semibold text-primary">Výhody:</p>
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
