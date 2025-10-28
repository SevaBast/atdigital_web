import { useState, useRef, useEffect } from "react";
import { content } from "@/content/content";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp } from "lucide-react";

const References = () => {
  const [activeTab, setActiveTab] = useState(content.references.projects[0].id);
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

        <Tabs defaultValue={content.references.projects[0].id} className="w-full" onValueChange={setActiveTab}>
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
            
            {content.references.projects.map((project) => (
              <TabsTrigger
                key={project.id}
                value={project.id}
                ref={(el) => (tabsRef.current[project.id] = el)}
                className="bg-transparent rounded-xl px-6 py-3 relative z-10 transition-all duration-300 hover:scale-105 data-[state=active]:bg-background/20 data-[state=active]:backdrop-blur-lg data-[state=active]:text-primary-foreground data-[state=active]:font-semibold data-[state=inactive]:text-foreground/70 data-[state=inactive]:hover:text-foreground"
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
