import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isFirstMount = useRef(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    setIsVisible(false);
    const t = requestAnimationFrame(() => setIsVisible(true));
    window.scrollTo({ top: 0 });
    return () => cancelAnimationFrame(t);
  }, [location.pathname]);

  return (
    <div
      className="transition-opacity duration-500 ease-out"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
