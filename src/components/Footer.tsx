import { useContent } from "@/context/LanguageContext";

const Footer = () => {
  const content = useContent();
  return (
    <footer className="py-8 border-t border-border/30 bg-background-elevated/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {content.footer.copyright}
          </p>
          <div className="flex gap-6">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {content.footer.links.privacy}
            </button>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {content.footer.links.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
