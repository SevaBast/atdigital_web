import { useRef, useState, useCallback, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const PERSPECTIVE = 800;
const MAX_TILT = 12; // degrees
const SCALE_HOVER = 1.02;
const TRANSITION_MS = 600;

// Auto-float animation
const AUTO_TILT = 4; // degrees — subtle idle sway
const AUTO_SPEED = 0.0008; // radians per ms

// Border glow speed
const BORDER_AUTO_SPEED = 0.05; // degrees per ms — auto-rotation speed

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 3D tilt card with auto-float, cursor tracking, glare, and animated border glow.
 */
export const TiltCard = ({ children, className, style: externalStyle }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const rafRef = useRef<number>(0);

  const [animStyle, setAnimStyle] = useState({
    transform: `perspective(${PERSPECTIVE}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`,
    transition: `transform ${TRANSITION_MS}ms cubic-bezier(.03,.98,.52,.99)`,
  });

  // Glare position (cursor-following radial glow)
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  // Animated border angle (degrees)
  const [borderAngle, setBorderAngle] = useState(0);

  // Auto-float loop + border rotation when not hovered
  useEffect(() => {
    const animate = (time: number) => {
      if (!isHovered.current) {
        const tiltX = Math.sin(time * AUTO_SPEED) * AUTO_TILT;
        const tiltY = Math.cos(time * AUTO_SPEED * 0.7) * AUTO_TILT;
        setAnimStyle({
          transform: `perspective(${PERSPECTIVE}px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1,1,1)`,
          transition: "transform 300ms ease-out",
        });
        // Auto-glare follows float position
        const gx = 50 + tiltY * 3;
        const gy = 50 - tiltX * 3;
        setGlare({ x: gx, y: gy, opacity: 0.5 });
        // Auto-rotate border
        setBorderAngle((time * BORDER_AUTO_SPEED) % 360);
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    isHovered.current = true;
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const tiltX = (0.5 - y) * MAX_TILT * 2;
    const tiltY = (x - 0.5) * MAX_TILT * 2;

    setAnimStyle({
      transform: `perspective(${PERSPECTIVE}px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${SCALE_HOVER},${SCALE_HOVER},${SCALE_HOVER})`,
      transition: "transform 80ms ease-out",
    });

    // Glare follows cursor
    setGlare({ x: x * 100, y: y * 100, opacity: 1 });

    // Border follows cursor — angle from center of card to cursor
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) + 90;
    setBorderAngle(angle);
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHovered.current = false;
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  const borderIntensity = isHovered.current ? 0.8 : 0.6;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative will-change-transform", className)}
      style={{
        ...externalStyle,
        ...animStyle,
        transformStyle: "preserve-3d",
      }}
    >
      {children}

      {/* Animated border glow — conic gradient masked to border edge */}
      <div
        className="pointer-events-none absolute inset-[-1px] z-20 rounded-[inherit]"
        aria-hidden
        style={{
          padding: "1.5px",
          background: `conic-gradient(from ${borderAngle.toFixed(1)}deg at 50% 50%, transparent 0%, hsl(200 95% 55% / ${borderIntensity * 1.5}) 4%, hsl(200 95% 55% / ${borderIntensity}) 10%, hsl(200 95% 55% / ${borderIntensity * 1.5}) 16%, transparent 25%, transparent 50%, hsl(200 95% 55% / ${borderIntensity * 1.5}) 54%, hsl(200 95% 55% / ${borderIntensity}) 60%, hsl(200 95% 55% / ${borderIntensity * 1.5}) 66%, transparent 75%, transparent 100%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          transition: isHovered.current ? "none" : "background 100ms ease-out",
        }}
      />

      {/* Glare overlay — radial glow following cursor / auto-float */}
      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit]"
        aria-hidden
        style={{
          background: `radial-gradient(ellipse 60% 50% at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 40%, transparent 70%)`,
          opacity: glare.opacity,
          transition: isHovered.current
            ? "opacity 200ms ease-out"
            : "opacity 600ms ease-out",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
};
