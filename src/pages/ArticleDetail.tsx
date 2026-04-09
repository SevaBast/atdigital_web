import { useParams, useNavigate } from "react-router-dom";
import { useContent } from "@/context/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Download, Tag } from "lucide-react";

const ArticleDetail = () => {
  const content = useContent();
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

      <main className="container mx-auto px-4 pt-32 pb-24">
        {/* Back Button — zarovnaný s ľavým okrajom karty článku */}
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={() => navigate("/academia")}
            variant="outline"
            className="mb-8 border-primary/10 hover:border-primary/25 hover:bg-primary/5"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Späť na Akadémiu
          </Button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <div className="bento-card relative rounded-2xl overflow-hidden border border-white/[0.06] p-8 md:p-12 mb-8 animate-fade-in">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-40" />
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary/70">
                {article.title}
              </h1>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 text-xs text-primary/90 bg-primary/5 border border-primary/10 rounded-lg px-2.5 py-1"
                  >
                    <Tag className="h-3 w-3 flex-shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 text-muted-foreground mb-6 text-sm">
                <span className="inline-flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(article.date).toLocaleDateString("sk-SK")}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.readingTime} {content.academia.readingTime}
                </span>
              </div>

              {article.pdfUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/10 hover:border-primary/25 hover:bg-primary/5"
                  onClick={() => window.open(article.pdfUrl!, "_blank")}
                >
                  <Download className="h-4 w-4 mr-2" />
                  {content.academia.downloadPdf}
                </Button>
              )}
            </div>
          </div>

          {/* Article Content */}
          <div className="bento-card relative rounded-2xl overflow-hidden border border-white/[0.06] p-8 md:p-12 animate-fade-in">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-40" />
            <div className="relative z-10">
              <MarkdownRenderer
                content={article.content}
                className="prose prose-invert prose-lg max-w-none"
              />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
