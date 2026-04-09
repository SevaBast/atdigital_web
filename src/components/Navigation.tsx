import { useState, useEffect } from "react";
import { useContent, useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/content/locales";
import type { Lang } from "@/content/locales";
import { Menu, X, Globe } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";

const Navigation = () => {
  const content = useContent();
  const { lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const basePath = import.meta.env.BASE_URL.replace(/\/+$/, '');
    const isHome = location.pathname === "/" || location.pathname === basePath || location.pathname === basePath + "/";

    if (!isHome) {
      setActiveSection(location.pathname);
    }

    const sectionIds = content.navigation.links
      .filter((l) => l.href.startsWith("#"))
      .map((l) => l.href.slice(1)); // remove #

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHome) return;

      // Find which section is currently most visible
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }

      setActiveSection(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
      if (mobileLangRef.current && !mobileLangRef.current.contains(e.target as Node)) {
        setIsMobileLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (href: string) => {
    if (!href.startsWith("#")) return;
    setIsMobileMenuOpen(false);

    const scrollToEl = (selector: string) => {
      const element = document.querySelector(selector);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
    if (location.pathname === "/" || location.pathname === base || location.pathname === base + "/") {
      scrollToEl(href);
    } else {
      navigate("/");
      setTimeout(() => scrollToEl(href), 100);
    }
  };

  return (
    <nav
      className={`fixed top-7 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "w-[90%] max-w-7xl" : "xl:w-[50%] w-[90%] max-w-6xl"
      }`}
    >
      <div
        className={`glass rounded-2xl px-6 py-4 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === "/" || location.pathname === import.meta.env.BASE_URL.replace(/\/+$/, '') || location.pathname === import.meta.env.BASE_URL.replace(/\/+$/, '') + "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
                setTimeout(() => window.scrollTo({ top: 0 }), 50);
              }
            }}
            className="flex items-center"
          >
            <img 
              src={`${import.meta.env.BASE_URL}atd_logo_mini.png`}
              alt="AT Digital" 
              className="h-8 w-auto"
              width={120}
              height={32}
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6))' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            {content.navigation.links.map((link) => {
              const isActive = activeSection === link.href;
              return link.href.startsWith("#") ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`transition-colors duration-200 relative group ${
                    isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors duration-200 relative group ${
                    isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              );
            })}

            {/* Language Switcher (desktop) */}
            <div ref={langRef} className="relative ml-2 border-l border-border/30 pl-4">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-sm font-medium px-2 py-1.5 rounded-lg transition-colors duration-200 text-foreground/70 hover:text-foreground hover:bg-white/5"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase">{lang}</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-[100px] rounded-xl border border-white/[0.08] bg-background/90 backdrop-blur-xl shadow-xl overflow-hidden">
                  {(Object.entries(LANGUAGES) as [Lang, string][]).map(([code, label]) => (
                    <button
                      key={code}
                      onClick={() => { setLang(code); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                        lang === code
                          ? "text-primary bg-primary/10"
                          : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile: Lang + Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <div ref={mobileLangRef} className="relative">
              <button
                onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                className="flex items-center gap-1 text-sm font-medium px-2 py-1.5 rounded-lg transition-colors duration-200 text-foreground/70 hover:text-foreground hover:bg-white/5"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase">{lang}</span>
              </button>
              {isMobileLangOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-[100px] rounded-xl border border-white/[0.08] bg-background/90 backdrop-blur-xl shadow-xl overflow-hidden z-50">
                  {(Object.entries(LANGUAGES) as [Lang, string][]).map(([code, label]) => (
                    <button
                      key={code}
                      onClick={() => { setLang(code); setIsMobileLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                        lang === code
                          ? "text-primary bg-primary/10"
                          : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
              aria-label={isMobileMenuOpen ? "Zavrieť menu" : "Otvoriť menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-4 pt-4 border-t border-border/30 space-y-4">
            {content.navigation.links.map((link) => {
              const isActive = activeSection === link.href;
              return link.href.startsWith("#") ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left transition-colors duration-200 py-2 ${
                    isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block transition-colors duration-200 py-2 ${
                    isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}


          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
