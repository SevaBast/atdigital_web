import { useContent } from "@/context/LanguageContext";
import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatedTabs, TabsContent } from "@/components/AnimatedTabs";
import { useInView } from "@/hooks/useInView";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Play,
  Square,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReferenceProject, ReferenceCategory } from "@/content/types";

// ─── Simple Video Player (play / stop only) ───────────────────────
const VideoPlayer = ({ src, alt }: { src: string; alt?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
      v.currentTime = 0;
      setPlaying(false);
    } else {
      void v.play();
      setPlaying(true);
    }
  };

  // Reset when src changes
  useEffect(() => {
    setPlaying(false);
    if (videoRef.current) videoRef.current.currentTime = 0;
  }, [src]);

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        muted
        preload="metadata"
        aria-label={alt}
        onEnded={() => setPlaying(false)}
      />
      <button
        onClick={toggle}
        className={cn(
          "absolute bottom-3 right-3 z-20",
          "flex items-center justify-center",
          "h-9 w-9 rounded-full",
          "bg-black/50 backdrop-blur-sm border border-white/10",
          "text-white/80 hover:text-white hover:bg-primary/60",
          "transition-all duration-300",
        )}
        aria-label={playing ? "Zastaviť video" : "Prehrať video"}
      >
        {playing ? <Square className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
      </button>
    </div>
  );
};

// ─── Project Card ──────────────────────────────────────────────────
interface ProjectCardProps {
  project: ReferenceProject;
  direction: "left" | "right";
}

const ProjectCard = ({ project, direction }: ProjectCardProps) => {
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
        direction === "right" ? "animate-slide-from-right" : "animate-slide-from-left",
      )}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-40" />

      <div className="relative z-10 flex flex-col">
        {/* Top: Content */}
        <div className="p-6 md:p-8 flex flex-col">
          <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            {project.name}
          </h4>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
            {project.description}
          </p>
          {project.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs text-primary/90 bg-primary/5 border border-primary/10 rounded-lg px-2.5 py-1"
                >
                  <CheckCircle2 className="h-3 w-3 flex-shrink-0" />
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom: Media (fixed height) */}
        <div className="relative w-full h-[280px] md:h-[560px]">
          {project.media ? (
            project.media.type === "video" ? (
              <VideoPlayer src={project.media.src} alt={project.media.alt} />
            ) : (
              <img
                src={project.media.src}
                alt={project.media.alt ?? project.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            )
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02]">
              <ImageIcon className="h-12 w-12 text-muted-foreground/20" />
            </div>
          )}
          {/* Fade edge on top for seamless blend */}
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[hsl(var(--glass-bg)/0.7)] to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

// ─── Project Carousel (per-category) ──────────────────────────────
const AUTO_INTERVAL = 3000;
const PAUSE_DURATION = 5000;
const SWIPE_THRESHOLD = 50;

interface ProjectCarouselProps {
  category: ReferenceCategory;
  isActive: boolean;
}

const ProjectCarousel = ({ category, isActive }: ProjectCarouselProps) => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const autoRef = useRef<number>(0);
  const resumeRef = useRef<number>(0);
  const touchStartX = useRef(0);
  const total = category.projects.length;
  const project = category.projects[page];

  // ── helpers ───────────────────────────────────────────────────
  const clearTimers = useCallback(() => {
    clearInterval(autoRef.current);
    clearTimeout(resumeRef.current);
  }, []);

  const startAutoRotate = useCallback(() => {
    clearInterval(autoRef.current);
    if (total <= 1) return;
    autoRef.current = window.setInterval(() => {
      setDirection("right");
      setPage((p) => (p + 1) % total);
    }, AUTO_INTERVAL);
  }, [total, clearTimers]);

  const pauseAndResume = useCallback(() => {
    clearTimers();
    if (total <= 1) return;
    resumeRef.current = window.setTimeout(() => {
      startAutoRotate();
    }, PAUSE_DURATION);
  }, [clearTimers, startAutoRotate, total]);

  // ── lifecycle ─────────────────────────────────────────────────
  useEffect(() => {
    if (isActive && total > 1) {
      startAutoRotate();
    } else {
      clearTimers();
    }
    return clearTimers;
  }, [isActive, total, startAutoRotate, clearTimers]);

  // ── navigation ────────────────────────────────────────────────
  const goTo = (index: number, dir: "left" | "right") => {
    setDirection(dir);
    setPage(index);
    pauseAndResume();
  };

  const goNext = () => goTo((page + 1) % total, "right");
  const goPrev = () => goTo((page - 1 + total) % total, "left");

  // ── touch / swipe ─────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    pauseAndResume();
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      delta > 0 ? goNext() : goPrev();
    }
  };

  // ── hover pause ───────────────────────────────────────────────
  const onMouseEnter = () => pauseAndResume();

  if (!project) return null;

  return (
    <div className="mx-auto space-y-4">
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseEnter={onMouseEnter}
        className="touch-pan-y"
      >
        <ProjectCard
          key={`${category.id}-${page}`}
          project={project}
          direction={direction}
        />
      </div>

      {/* Pagination — only when more than 1 project */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={goPrev}
            className="p-2 rounded-lg border border-white/[0.06] text-muted-foreground hover:text-foreground hover:border-primary/25 transition-all duration-300"
            aria-label="Predchádzajúci projekt"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex gap-1.5">
            {category.projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > page ? "right" : "left")}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === page
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
                aria-label={`Projekt ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="p-2 rounded-lg border border-white/[0.06] text-muted-foreground hover:text-foreground hover:border-primary/25 transition-all duration-300"
            aria-label="Ďalší projekt"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

// ─── References Section ────────────────────────────────────────────
const References = () => {
  const content = useContent();
  const { ref, isInView } = useInView();
  const [activeTab, setActiveTab] = useState(content.references.categories[0].id);

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
          onValueChange={setActiveTab}
        >
          {content.references.categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <ProjectCarousel
                category={category}
                isActive={activeTab === category.id}
              />
            </TabsContent>
          ))}
        </AnimatedTabs>
      </div>
    </section>
  );
};

export default References;
