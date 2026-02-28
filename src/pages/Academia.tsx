import { useState, useCallback } from "react";
import { useContent } from "@/context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Article } from "@/content/types";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, Clock, Download, X, Tag } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

// ─── Article Card (bento style) ───────────────────────────────────
interface ArticleCardProps {
  article: Article;
  index: number;
  onClick: () => void;
}

const ArticleCard = ({ article, index, onClick }: ArticleCardProps) => {
  const content = useContent();
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={cn(
        "bento-card relative group rounded-2xl overflow-hidden cursor-pointer",
        "border border-white/[0.06]",
        "transition-all duration-500 ease-out",
        "hover:border-primary/25 hover:-translate-y-1",
        "opacity-0 animate-bento-in",
        "flex flex-col",
      )}
      style={{
        animationDelay: `${index * 80}ms`,
        animationFillMode: "both",
      }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-6 md:p-8 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {article.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4">
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

        {/* Meta info */}
        <div className="flex items-center gap-4 pt-4 mt-5 text-xs text-muted-foreground border-t border-white/[0.06]">
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {article.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(article.date).toLocaleDateString("sk-SK")}
          </span>
          <span className="inline-flex items-center gap-1.5 ml-auto">
            <Clock className="h-3.5 w-3.5" />
            {article.readingTime} min
          </span>
        </div>

        {/* PDF download */}
        {article.pdfUrl && (
          <Button
            variant="outline"
            size="sm"
            className="mt-3 w-full border-primary/10 hover:border-primary/25 hover:bg-primary/5 text-xs"
            onClick={(e) => {
              e.stopPropagation();
              window.open(article.pdfUrl!, "_blank");
            }}
          >
            <Download className="h-3.5 w-3.5 mr-2" />
            {content.academia.downloadPdf}
          </Button>
        )}
      </div>
    </div>
  );
};

// ─── Academia Page ─────────────────────────────────────────────────
const Academia = () => {
  const content = useContent();
  const navigate = useNavigate();
  const { ref, isInView } = useInView();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(
    new Set(content.academia.articles.flatMap((article) => article.tags))
  ).sort((a, b) => a.length - b.length);

  const filteredArticles = content.academia.articles.filter((article) => {
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => article.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-24 pt-32 relative">
        <div
          ref={ref}
          className={cn(
            "container mx-auto px-4 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {content.academia.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {content.academia.subtitle}
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder={content.academia.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-white/[0.06] bg-white/[0.02] pl-12 py-6 text-lg rounded-2xl focus:border-primary/25 transition-colors"
              />
            </div>

            {/* Tag Filters */}
            <div className="bento-card relative rounded-2xl overflow-hidden border border-white/[0.06] p-6 md:p-8">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60" />
              <div className="relative z-10">
                <div className="text-center mb-5">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {content.academia.filterByTags}
                  </h3>
                  {(selectedTags.length > 0 || searchQuery) && (
                    <button
                      onClick={clearFilters}
                      className="inline-flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary transition-colors mt-1"
                    >
                      <X className="h-3.5 w-3.5" />
                      Zrušiť filtre
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={cn(
                        "inline-flex items-center gap-1.5 text-xs rounded-lg px-3 py-1.5 transition-all duration-200 border whitespace-nowrap",
                        selectedTags.includes(tag)
                          ? "text-primary bg-primary/10 border-primary/30"
                          : "text-muted-foreground bg-primary/5 border-primary/10 hover:text-primary/90 hover:border-primary/20",
                      )}
                    >
                      <Tag className="h-3 w-3 flex-shrink-0" />
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {filteredArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={index}
                onClick={() => navigate(`/academia/${article.id}`)}
              />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                Nenašli sa žiadne články zodpovedajúce vášmu vyhľadávaniu.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academia;
