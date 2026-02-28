import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import PageTransition from "@/components/PageTransition";
import Home from "./pages/Home";
import Academia from "./pages/Academia";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";

const App = () => (
  <LanguageProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/atdigital_web">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academia" element={<Academia />} />
            <Route path="/academia/:id" element={<ArticleDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </LanguageProvider>
);

export default App;
