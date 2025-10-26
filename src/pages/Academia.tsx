import { useState } from "react";
import { content } from "@/content/content";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, Clock, Download, X } from "lucide-react";

const Academia = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags
  const allTags = Array.from(
    new Set(content.academia.articles.flatMap((article) => article.tags))
  );

  // Filter articles
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
      
      <div className="container mx-auto px-4 pt-32 pb-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {content.academia.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {content.academia.subtitle}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder={content.academia.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass border-border/30 pl-12 py-6 text-lg rounded-2xl"
            />
          </div>

          {/* Tag Filters */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-foreground">
                {content.academia.filterByTags}
              </p>
              {(selectedTags.length > 0 || searchQuery) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-primary hover:text-primary-glow"
                >
                  <X className="h-4 w-4 mr-2" />
                  Zrušiť filtre
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? "bg-primary hover:bg-primary-glow"
                      : "glass-hover border-border/30"
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              onClick={() => navigate(`/academia/${article.id}`)}
              className="glass glass-hover rounded-2xl p-6 border-0 space-y-4 flex flex-col cursor-pointer"
            >
              <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed line-clamp-3">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2">
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
              </div>

              <div className="space-y-3 pt-4 border-t border-border/30">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
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
                    className="w-full glass-hover border-primary/30 hover:bg-primary/10"
                    onClick={() => window.open(article.pdfUrl!, "_blank")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {content.academia.downloadPdf}
                  </Button>
                )}
              </div>
            </Card>
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

export default Academia;
