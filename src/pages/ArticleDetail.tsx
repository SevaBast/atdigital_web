import { useParams, useNavigate } from "react-router-dom";
import { content } from "@/content/content";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Download } from "lucide-react";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = content.academia.articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Článok nenájdený</h1>
            <Button onClick={() => navigate("/academia")} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Späť na Akadémiu
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-24">
        {/* Back Button */}
        <Button
          onClick={() => navigate("/academia")}
          variant="outline"
          className="mb-8 glass-hover border-primary/30"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Späť na Akadémiu
        </Button>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="glass border-primary/30"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString("sk-SK")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readingTime} {content.academia.readingTime}</span>
              </div>
            </div>

            {article.pdfUrl && (
              <Button
                variant="outline"
                size="sm"
                className="glass-hover border-primary/30 hover:bg-primary/10"
                onClick={() => window.open(article.pdfUrl!, "_blank")}
              >
                <Download className="h-4 w-4 mr-2" />
                {content.academia.downloadPdf}
              </Button>
            )}
          </div>

          {/* Article Content */}
          <div className="glass rounded-2xl p-8 md:p-12 animate-fade-in">
            <div className="prose prose-invert prose-lg max-w-none">
              <div
                className="text-foreground/90 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: article.fullContent }}
              />
            </div>
          </div>
        </article>
      </div>

      {/* Footer */}
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
    </div>
  );
};

export default ArticleDetail;
