import { Fragment } from "react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Simple Markdown renderer for article content.
 * Handles ## headings and paragraphs without dangerouslySetInnerHTML.
 */
const MarkdownRenderer = ({ content, className }: MarkdownRendererProps) => {
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];
  let currentParagraph: string[] = [];
  let key = 0;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      elements.push(
        <p key={key++} className="text-foreground/90 leading-relaxed mb-6">
          {currentParagraph.join(" ")}
        </p>
      );
      currentParagraph = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "") {
      flushParagraph();
    } else if (trimmed.startsWith("## ")) {
      flushParagraph();
      elements.push(
        <h2
          key={key++}
          className="text-2xl font-bold text-foreground mt-8 mb-4 first:mt-0"
        >
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("# ")) {
      flushParagraph();
      elements.push(
        <h1 key={key++} className="text-3xl font-bold text-foreground mt-8 mb-4 first:mt-0">
          {trimmed.slice(2)}
        </h1>
      );
    } else {
      currentParagraph.push(trimmed);
    }
  }

  flushParagraph();

  return <div className={className}>{elements}</div>;
};

export default MarkdownRenderer;
