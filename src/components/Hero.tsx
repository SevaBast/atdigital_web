import { useContent } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { TiltCard } from "@/components/ui/tilt-card";

/* ──────────────────────────────────────────────
   MANUÁLNE NASTAVENIA HERO SEKCIE
   Zmeň hodnoty nižšie a ulož — stránka sa refreshne.
   Jednotky: px, rem, %, em…  (napr. "20px", "-10px", "2rem")
   ────────────────────────────────────────────── */
const heroLayout = {
  /* Logo — posun + zarovnanie ("left" | "center" | "right") */
  logo: { top: "0px", left: "0px", align: "center" as const },

  /* Podnadpis (subtitle) — posun + zarovnanie */
  subtitle: { top: "0px", left: "0px", align: "center" as const },

  /* Popis (description) — posun + zarovnanie */
  description: { top: "0px", left: "0px", align: "center" as const },

  /* CTA tlačidlá (Naše služby + Akadémia) — posun + zarovnanie */
  buttons: { top: "0px", left: "-50px", align: "center" as const },

  /* 3D TiltCard obrázok — mierka a posun */
  tiltCard: { scale: 0.9, top: "0px", left: "0px" },
};

/* Staggered entrance animation for hero elements */
const heroFadeIn = (delay: number) =>
  ({
    className: "opacity-0 translate-y-6 animate-[heroIn_0.7s_ease-out_forwards]",
    style: { animationDelay: `${delay}ms` },
  }) as const;

const Hero = () => {
  const content = useContent();
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[600px] h-screen max-h-[1080px] flex items-center overflow-hidden bg-background"
    >
      {/* Gradient fade to background at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-[5]" />

      {/* Content — two-column layout */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Logo + text + CTA */}
          <div className="space-y-8 order-1" style={{ textAlign: heroLayout.logo.align }}>
            {/* Logo — posun: heroLayout.logo */}
            <div className="space-y-4 animate-[heroSlideUp_0.7s_ease-out_forwards]" style={{ animationDelay: "0ms" }}>
              <img
                src={`${import.meta.env.BASE_URL}atd_logo.png`}
                alt="AT Digital Logo"
                className="w-full max-w-xl h-auto"
                width={576}
                height={120}
                fetchPriority="high"
                style={{
                  position: "relative",
                  top: heroLayout.logo.top,
                  left: heroLayout.logo.left,
                  marginLeft: heroLayout.logo.align === "center" ? "auto" : heroLayout.logo.align === "right" ? "auto" : undefined,
                  marginRight: heroLayout.logo.align === "center" ? "auto" : heroLayout.logo.align === "left" ? "auto" : undefined,
                  display: "block",
                  filter:
                    "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.9))",
                }}
              />
              <p
                className="text-xl md:text-2xl text-primary font-medium"
                style={{
                  position: "relative",
                  top: heroLayout.subtitle.top,
                  left: heroLayout.subtitle.left,
                  textAlign: heroLayout.subtitle.align,
                  textShadow:
                    "0 2px 8px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.7)",
                }}
              >
                {content.hero.subtitle}
              </p>
            </div>

            {/* Description — posun: heroLayout.description */}
            <p
              {...heroFadeIn(300)}
              className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed opacity-0 translate-y-6 animate-[heroIn_0.7s_ease-out_forwards]"
              style={{
                position: "relative",
                top: heroLayout.description.top,
                left: heroLayout.description.left,
                textAlign: heroLayout.description.align,
                marginLeft: heroLayout.description.align === "center" ? "auto" : undefined,
                marginRight: heroLayout.description.align === "center" ? "auto" : heroLayout.description.align === "left" ? "auto" : undefined,
                textShadow:
                  "0 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.7)",
              }}
            >
              {content.hero.description}
            </p>

            {/* ATPark membership */}
            <p
              {...heroFadeIn(400)}
              className="text-base md:text-lg text-foreground/60 max-w-xl opacity-0 translate-y-6 animate-[heroIn_0.7s_ease-out_forwards]"
              style={{
                position: "relative",
                top: heroLayout.description.top,
                left: heroLayout.description.left,
                textAlign: heroLayout.description.align,
                marginLeft: heroLayout.description.align === "center" ? "auto" : undefined,
                marginRight: heroLayout.description.align === "center" ? "auto" : heroLayout.description.align === "left" ? "auto" : undefined,
                textShadow:
                  "0 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.7)",
              }}
            >
              {content.hero.atparkText}{" "}
              <a
                href="https://www.atpark.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 underline decoration-primary/30 underline-offset-4 hover:decoration-primary/60"
              >
                {content.hero.atparkLink}
              </a>
            </p>

            {/* CTA Buttons — posun: heroLayout.buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 opacity-0 translate-y-6 animate-[heroIn_0.7s_ease-out_forwards]"
              style={{
                position: "relative",
                top: heroLayout.buttons.top,
                animationDelay: "500ms",
              }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#services")}
                className="bg-transparent backdrop-blur-md bg-background/30 rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:bg-background/40 text-primary-foreground font-semibold"
              >
                {content.hero.buttons.services}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent backdrop-blur-md bg-background/30 rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:bg-background/40 text-foreground/90 hover:text-foreground font-medium border-0"
              >
                <Link to="/academia">
                  <BookOpen className="mr-2 h-5 w-5" />
                  {content.hero.buttons.academia}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: 3D tilt card with factory image (desktop only) */}
          {/* Veľkosť: zmeňte "scale(1.2)" nižšie — 1 = 100%, 1.5 = 150%, atď. */}
          {/* TiltCard — mierka + posun: heroLayout.tiltCard */}
          <div
            className="hidden lg:flex justify-end order-2 origin-center opacity-0 translate-y-6 animate-[heroIn_0.8s_ease-out_forwards]"
            style={{
              position: "relative",
              top: heroLayout.tiltCard.top,
              left: heroLayout.tiltCard.left,
              animationDelay: "600ms",
            }}
          >
           <div style={{ transform: `scale(${heroLayout.tiltCard.scale})`, transformOrigin: "center", width: "100%", display: "flex", justifyContent: "flex-end" }}>
            <TiltCard
              className="rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl shadow-black/30"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(24px) saturate(1.4)",
                WebkitBackdropFilter: "blur(24px) saturate(1.4)",
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

              {/* Image area */}
              <div className="p-3 pb-0">
                <img
                  src={`${import.meta.env.BASE_URL}picture/hala_card.webp`}
                  alt="Smart Factory — digitálna tovareň"
                  className="block rounded-xl w-full"
                  width={600}
                  height={400}
                  loading="eager"
                />
              </div>

              {/* Separator */}
              <div className="mx-4 mt-2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

              {/* Features — superhero stats */}
              <div className="px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  {content.hero.features.map((f, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs text-primary/90 bg-primary/5 border border-primary/10 rounded-lg px-2.5 py-1"
                    >
                      <CheckCircle2 className="h-3 w-3 flex-shrink-0" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
            </TiltCard>
           </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
