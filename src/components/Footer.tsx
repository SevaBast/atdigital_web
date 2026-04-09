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
          <p className="md:ml-auto text-muted-foreground text-sm">
            {content.footer.createdBy.text}{" "}
            <a
              href={content.footer.createdBy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 underline-offset-4 hover:decoration-primary/60"
            >
              {content.footer.createdBy.name}
            </a>
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
