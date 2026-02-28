import { useState, useRef, useEffect, type ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
}

interface AnimatedTabsProps {
  items: TabItem[];
  defaultValue: string;
  children: ReactNode;
  tabsListClassName?: string;
  onValueChange?: (value: string) => void;
}

const AnimatedTabs = ({ items, defaultValue, children, tabsListClassName, onValueChange }: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0, height: 0, top: 0 });
  const tabsRef = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const activeElement = tabsRef.current[activeTab];
    if (activeElement) {
      setIndicatorStyle({
        width: activeElement.offsetWidth,
        left: activeElement.offsetLeft,
        height: activeElement.offsetHeight,
        top: activeElement.offsetTop,
      });
    }
  }, [activeTab]);

  const handleValueChange = (value: string) => {
    setActiveTab(value);
    onValueChange?.(value);
  };

  return (
    <Tabs defaultValue={defaultValue} className="w-full" onValueChange={handleValueChange}>
      <TabsList
        className={cn(
          "bg-transparent border-0 p-0 mb-12 flex flex-wrap justify-center gap-2 md:gap-4 h-auto relative",
          tabsListClassName
        )}
      >
        {/* Liquid Morphing Background Indicator */}
        <div
          className="absolute bg-gradient-to-r from-primary/80 via-primary-glow/80 to-primary/80 rounded-xl transition-all duration-500 ease-out backdrop-blur-lg -z-0"
          style={{
            width: `${indicatorStyle.width}px`,
            height: `${indicatorStyle.height}px`,
            left: `${indicatorStyle.left}px`,
            top: `${indicatorStyle.top}px`,
            boxShadow:
              "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.1)",
            filter: "blur(1px)",
          }}
        />

        {items.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.id}
            ref={(el) => {
              tabsRef.current[item.id] = el;
            }}
            className="bg-transparent rounded-xl px-3 py-2 md:px-6 md:py-3 text-sm md:text-base relative z-10 transition-all duration-300 hover:scale-105 data-[state=active]:bg-background/10 data-[state=active]:backdrop-blur-lg data-[state=active]:text-primary-foreground data-[state=active]:font-semibold data-[state=inactive]:text-foreground/70 data-[state=inactive]:hover:text-foreground"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {children}
    </Tabs>
  );
};

export { AnimatedTabs, TabsContent };
export type { TabItem };
