import { useEffect, useState, useRef } from 'react';

/**
 * Hook to extract all text content from a page component
 * Waits for page to render, then collects all text
 */
export function usePageContent() {
  const [pageContent, setPageContent] = useState<string>('');
  const [isReady, setIsReady] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for DOM to fully render
    const timer = setTimeout(() => {
      if (contentRef.current) {
        const text = extractAllText(contentRef.current);
        setPageContent(text);
        setIsReady(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { pageContent, isReady, contentRef };
}

/**
 * Extract all readable text from a DOM element
 * Preserves structure and readable formatting
 */
function extractAllText(element: HTMLElement): string {
  const paragraphs: string[] = [];

  // Walk through all child nodes
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null
  );

  let textNode: Node | null;
  let currentParagraph = '';

  while ((textNode = walker.nextNode())) {
    const text = textNode.textContent?.trim() || '';

    if (text.length > 0) {
      // Get parent element info
      const parent = textNode.parentElement;

      // Check if this is a heading or section break
      if (parent?.tagName.match(/^H[1-6]$/)) {
        // Add current paragraph if exists
        if (currentParagraph.trim()) {
          paragraphs.push(currentParagraph.trim());
          currentParagraph = '';
        }
        // Add heading
        paragraphs.push(`\n${text}\n`);
      }
      // Check if it's inside a paragraph or text element
      else if (parent?.tagName === 'P' || parent?.tagName === 'DIV' || parent?.tagName === 'SPAN' || parent?.tagName === 'LI') {
        if (currentParagraph) {
          currentParagraph += ' ';
        }
        currentParagraph += text;

        // End paragraph at natural boundaries
        if (text.endsWith('.') || text.endsWith('।') || parent?.tagName === 'P') {
          paragraphs.push(currentParagraph.trim());
          currentParagraph = '';
        }
      }
      // Table cells
      else if (parent?.tagName === 'TD' || parent?.tagName === 'TH') {
        if (currentParagraph) {
          currentParagraph += ' ';
        }
        currentParagraph += text;
      }
      // Other text
      else {
        if (text) {
          if (currentParagraph) {
            currentParagraph += ' ';
          }
          currentParagraph += text;
        }
      }
    }
  }

  // Add remaining paragraph
  if (currentParagraph.trim()) {
    paragraphs.push(currentParagraph.trim());
  }

  // Clean and deduplicate
  return paragraphs
    .filter(p => p.trim().length > 0)
    .join('\n\n')
    .replace(/\n\n\n+/g, '\n\n'); // Remove excessive newlines
}

/**
 * Split text into sentences for line-by-line reading
 */
export function splitIntoSentences(text: string): string[] {
  if (!text) return [];

  // Split by sentence boundaries
  const sentences = text
    .split(/(?<=[.!?।])\s+(?=[A-Z\u0900-\u097F])/g)
    .filter(s => s.trim().length > 0);

  return sentences;
}

/**
 * Split text into paragraphs
 */
export function splitIntoParagraphs(text: string): string[] {
  return text
    .split('\n\n')
    .filter(p => p.trim().length > 0);
}