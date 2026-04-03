import { useEffect, useState } from "react";
import { useContent } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const ELFSIGHT_APP_ID = "536ba5cb-202d-478f-bd83-af395377f75c";

const LinkedInFeed = () => {
  const content = useContent();
  const { ref, isInView } = useInView();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!isInView || scriptLoaded) return;
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, [isInView, scriptLoaded]);

  return (
    <section className="py-24 relative bg-background-elevated/30">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary/70">
            {content.linkedInFeed.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content.linkedInFeed.subtitle}
          </p>
        </div>

        <div
          className={`elfsight-app-${ELFSIGHT_APP_ID}`}
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
};

export default LinkedInFeed;
