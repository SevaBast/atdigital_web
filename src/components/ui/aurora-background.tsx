"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-background text-foreground transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              [--dark-gradient:repeating-linear-gradient(100deg,hsl(220_20%_8%)_0%,hsl(220_20%_8%)_7%,transparent_10%,transparent_12%,hsl(220_20%_8%)_16%)]
              [--aurora:repeating-linear-gradient(100deg,hsl(0_0%_61%)_10%,hsl(200_95%_55%)_15%,hsl(210_95%_60%)_20%,hsl(200_100%_65%)_25%,hsl(200_95%_50%)_30%)]
              [background-image:var(--dark-gradient),var(--aurora)]
              [background-size:50%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[10px]
              after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] 
              after:[background-size:200%,_100%] 
              after:animate-aurora after:[background-attachment:fixed] after:mix-blend-screen
              pointer-events-none
              absolute -inset-[50px] opacity-80 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_50%_0%,black_10%,transparent_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
