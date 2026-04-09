import { lazy, Suspense, useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import PageTransition from "@/components/PageTransition";
import Lenis from "lenis";
import Home from "./pages/Home";

const Academia = lazy(() => import("./pages/Academia"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
  <LanguageProvider>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/+$/, '')} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <PageTransition>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/academia" element={<Academia />} />
              <Route path="/academia/:id" element={<ArticleDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </LanguageProvider>

  );
};

export default App;
