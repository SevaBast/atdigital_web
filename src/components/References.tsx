import { useContent } from "@/context/LanguageContext";
import { useCallback } from "react";
import { AnimatedTabs, TabsContent } from "@/components/AnimatedTabs";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import type { ReferenceProject } from "@/content/types";

// ─── Project Card ──────────────────────────────────────────────────
const ProjectCard = ({ project, index }: { project: ReferenceProject; index: number }) => {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "bento-card relative rounded-2xl overflow-hidden",
        "border border-white/[0.06]",
        "transition-[border-color] duration-500 ease-out",
        "hover:border-primary/25",
        "opacity-0 animate-bento-in",
      )}
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-40" />
      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 flex items-center gap-2.5">
          {(() => { const Icon = getIcon(project.icon); return Icon ? <Icon className="h-6 w-6 text-foreground flex-shrink-0" /> : null; })()}
          {project.name}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>
        {project.highlights.length > 0 && (
          <ul className="space-y-2 mt-auto">
            {project.highlights.map((h, i) => (
              <li key={i} className="text-sm text-primary font-medium leading-relaxed">
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// ─── References Section ────────────────────────────────────────────
const References = () => {
  const content = useContent();
  const { ref, isInView } = useInView();

  const tabItems = content.references.categories.map((c) => ({ id: c.id, label: c.name }));

  return (
    <section id="references" className="py-24 relative">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {content.references.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content.references.subtitle}
          </p>
        </div>

        <AnimatedTabs
          items={tabItems}
          defaultValue={content.references.categories[0].id}
        >
          {content.references.categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <div className={cn(
                "grid gap-6",
                category.projects.length === 1 && "grid-cols-1",
                category.projects.length === 2 && "md:grid-cols-2",
                category.projects.length >= 3 && "md:grid-cols-2 lg:grid-cols-3",
              )}>
                {category.projects.map((project, i) => (
                  <ProjectCard key={i} project={project} index={i} />
                ))}
              </div>
            </TabsContent>
          ))}
        </AnimatedTabs>
      </div>
    </section>
  );
};

export default References;
