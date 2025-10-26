import { content } from "@/content/content";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp } from "lucide-react";

const References = () => {
  return (
    <section id="references" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {content.references.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content.references.subtitle}
          </p>
        </div>

        <Tabs defaultValue={content.references.projects[0].id} className="w-full">
          <TabsList className="glass rounded-2xl p-2 mb-12 flex flex-wrap justify-center gap-2 h-auto">
            {content.references.projects.map((project) => (
              <TabsTrigger
                key={project.id}
                value={project.id}
                className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                {project.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {content.references.projects.map((project) => (
            <TabsContent key={project.id} value={project.id} className="animate-fade-in">
              <Card className="glass glass-hover rounded-2xl p-8 md:p-12 border-0 max-w-5xl mx-auto">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {project.name}
                    </h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="glass rounded-xl p-6 space-y-2 text-center hover:scale-105 transition-transform duration-300"
                      >
                        <TrendingUp className="h-6 w-6 text-primary mx-auto" />
                        <p className="text-3xl font-bold text-primary">
                          {metric.value}
                        </p>
                        <p className="text-sm text-foreground/70">
                          {metric.label}
                        </p>
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

export default References;
