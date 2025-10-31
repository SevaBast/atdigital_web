import { useState, useEffect } from "react";
import { content } from "@/content/content";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-7 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "w-[90%] max-w-7xl" : "md:w-[50%] w-[90%] max-w-6xl"
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
            className="flex items-center"
          >
            <img 
              src={`${import.meta.env.BASE_URL}atd_logo_mini.png`}
              alt="AT Digital" 
              className="h-8 w-auto"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6))' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {content.navigation.links.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/30 space-y-4">
            {content.navigation.links.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors duration-200 py-2"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground/80 hover:text-foreground transition-colors duration-200 py-2"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
