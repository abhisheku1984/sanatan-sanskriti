import { useState, useEffect, startTransition } from 'react';
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight, Minus, Plus, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import AudioPlayer from './AudioPlayer';
import LoadingSpinner from './LoadingSpinner';
import { t } from '../lib/translations';
import { translateText } from '../lib/translate';

interface Chapter { id: number; book_id: number; chapter_number: number; title: string; content: string; }
interface Book { id: number; title: string; author: string; description: string; language: string; category: string; cover_image: string; total_chapters: number; }

function buildSummary(book: Book, chapters: Chapter[]): string {
  const parts: string[] = [];

  if (book.description && book.description.trim().length > 10) {
    parts.push(book.description.trim());
  }

  parts.push(`This sacred text, ${book.title}, is authored by ${book.author || 'unknown sages'} and belongs to the ${book.category || 'spiritual'} tradition. Written in ${book.language || 'Sanskrit'}, it serves as a profound guide for seekers on the path of dharma, wisdom, and self-realization.`);

  if (chapters.length > 0) {
    const chapterList = chapters.slice(0, 5).map(ch => `Chapter ${ch.chapter_number}: ${ch.title}`).join('; ');
    const remaining = chapters.length > 5 ? ` and ${chapters.length - 5} more chapters` : '';
    parts.push(`The text is organized into ${chapters.length} chapters, beginning with ${chapterList}${remaining}. Each chapter unfolds deeper layers of spiritual insight, ritual knowledge, and philosophical inquiry preserved through generations.`);
  } else {
    parts.push(`This timeless scripture unfolds across multiple chapters, each revealing deeper layers of spiritual insight, ritual knowledge, and philosophical inquiry preserved through generations.`);
  }

  let summary = parts.join(' ');
  const wordCount = summary.split(/\s+/).length;
  if (wordCount < 100) {
    summary += ` The teachings within this text continue to inspire millions of devotees and scholars around the world. Its verses offer practical guidance for daily living, meditation practices, and the ultimate pursuit of moksha. Readers are encouraged to approach this scripture with reverence and an open heart, allowing its ancient wisdom to illuminate their spiritual journey. The profound truths contained herein transcend time and culture, speaking directly to the eternal soul within every human being.`;
  }

  return summary;
}

export default function BookReader({ book, onBack, language }: { book: Book; onBack: () => void; language: string }) {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fontSize, setFontSize] = useState(16);
  const [translatedContent, setTranslatedContent] = useState<string>('');
  const [translatedTitle, setTranslatedTitle] = useState<string>('');
  const [translatedSummary, setTranslatedSummary] = useState<string>('');
  const [translatingContent, setTranslatingContent] = useState(false);
  const [translatingSummary, setTranslatingSummary] = useState(false);
  const [summaryExpanded, setSummaryExpanded] = useState(false);

  const summary = buildSummary(book, chapters);
  const summaryWords = summary.split(/\s+/).length;
  const summaryPreview = summary.split(' ').slice(0, 60).join(' ') + (summaryWords > 60 ? '…' : '');

  useEffect(() => {
    fetch(`/api/chapters?book_id=${book.id}`)
      .then(r => r.json())
      .then(setChapters)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [book.id]);

  // Translate summary when language changes
  useEffect(() => {
    if (language === 'English' || !summary) {
      setTranslatedSummary('');
      return;
    }

    setTranslatingSummary(true);
    translateText(summary, language)
      .then(setTranslatedSummary)
      .catch(() => setTranslatedSummary(summary))
      .finally(() => setTranslatingSummary(false));
  }, [language, summary]);

  // Translate chapter content when language or chapter changes
  useEffect(() => {
    const chapter = chapters[currentIdx];
    if (!chapter) return;

    if (language === 'English') {
      startTransition(() => {
        setTranslatedContent(chapter.content);
        setTranslatedTitle(chapter.title);
      });
      return;
    }

    startTransition(() => {
      setTranslatingContent(true);
      setTranslatedContent('');
      setTranslatedTitle('');
    });

    Promise.all([
      translateText(chapter.content, language),
      translateText(chapter.title, language),
    ]).then(([content, title]) => {
      startTransition(() => {
        setTranslatedContent(content);
        setTranslatedTitle(title);
      });
    }).catch(() => {
      startTransition(() => {
        setTranslatedContent(chapter.content);
        setTranslatedTitle(chapter.title);
      });
    }).finally(() => {
      startTransition(() => setTranslatingContent(false));
    });
  }, [chapters, currentIdx, language]);

  const chapter = chapters[currentIdx];
  if (loading) return <LoadingSpinner />;

  const displayContent = (translatedContent || chapter?.content || '').trim();
  const isPlaceholder = displayContent.toLowerCase().includes('complete') && displayContent.toLowerCase().includes('text');
  const finalContent = isPlaceholder && book.description ? book.description : displayContent;
  const displaySummary = translatedSummary || summary;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="flex items-center gap-1.5 text-ink-muted hover:text-vermillion text-sm transition-colors">
          <ArrowLeft size={15} /> {t('backToLibrary', language)}
        </button>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-vermillion/8 text-vermillion text-[11px] font-medium">
            <Languages size={12} />
            {language}
          </div>
          <div className="flex items-center gap-1 border border-border rounded-md">
            <button onClick={() => setFontSize(Math.max(12, fontSize - 2))} className="px-2 py-1 text-ink-muted hover:text-ink"><Minus size={13} /></button>
            <span className="text-[11px] text-ink-faint px-1">{fontSize}px</span>
            <button onClick={() => setFontSize(Math.min(26, fontSize + 2))} className="px-2 py-1 text-ink-muted hover:text-ink"><Plus size={13} /></button>
          </div>
        </div>
      </div>

      {/* Book Title */}
      <div className="text-center mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-semibold text-ink">{book.title}</h1>
        <p className="text-ink-faint text-sm mt-1">{book.author}</p>
      </div>

      {/* Summary Box — with AudioPlayer */}
      <div className="mb-6 p-5 bg-surface border border-border rounded-xl">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] uppercase tracking-wider text-ink-faint font-medium">Summary</p>
          <span className="text-[10px] text-ink-faint bg-parchment px-2 py-0.5 rounded-full">
            {(displaySummary.split(/\s+/).length)} words
          </span>
        </div>

        {/* 🔊 Audio Player for Summary */}
        <div className="mb-4">
          <AudioPlayer
            text={displaySummary}
            language={language}
            title={`Summary — ${book.title}`}
          />
        </div>

        {translatingSummary && (
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 border-2 border-vermillion/30 border-t-vermillion rounded-full animate-spin" />
            <p className="text-vermillion text-xs">
              {language === 'Hindi' ? 'सारांश का अनुवाद हो रहा है…' : 'Translating summary…'}
            </p>
          </div>
        )}

        <p className={`text-ink-muted text-sm leading-[1.8] ${summaryExpanded ? '' : 'line-clamp-4'}`}>
          {summaryExpanded ? displaySummary : displaySummary.split(' ').slice(0, 60).join(' ') + (displaySummary.split(' ').length > 60 ? '…' : '')}
        </p>

        {displaySummary.split(' ').length > 60 && (
          <button
            onClick={() => setSummaryExpanded(!summaryExpanded)}
            className="mt-3 text-vermillion text-xs font-medium hover:underline"
          >
            {summaryExpanded ? 'Show less' : 'Read full summary'}
          </button>
        )}
      </div>

      {/* Chapter Navigation */}
      {chapters.length > 0 && (
        <div className="flex items-center justify-between mb-5 bg-surface border border-border rounded-lg px-3 py-2">
          <button onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} disabled={currentIdx === 0}
            className="flex items-center gap-1 text-[13px] text-ink-muted hover:text-vermillion disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft size={14} /> {t('previous', language)}
          </button>
          <select value={currentIdx} onChange={e => setCurrentIdx(Number(e.target.value))} className="bg-parchment border border-border rounded-md px-2 py-1 text-[13px] text-ink max-w-[200px] truncate">
            {chapters.map((ch, idx) => <option key={ch.id} value={idx}>Ch. {ch.chapter_number}: {ch.title}</option>)}
          </select>
          <button onClick={() => setCurrentIdx(Math.min(chapters.length - 1, currentIdx + 1))} disabled={currentIdx === chapters.length - 1}
            className="flex items-center gap-1 text-[13px] text-ink-muted hover:text-vermillion disabled:opacity-30 disabled:cursor-not-allowed">
            {t('next', language)} <ChevronRight size={14} />
          </button>
        </div>
      )}

      {/* Chapter Content — no speaker */}
      {chapter ? (
        <div className="bg-surface border border-border rounded-xl p-6 md:p-10">
          <h2 className="font-display text-xl font-semibold text-ink mb-4">
            {t('chapters', language)} {chapter.chapter_number}: {translatedTitle || chapter.title}
          </h2>

          {translatingContent && (
            <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-vermillion/5 border border-vermillion/15 rounded-lg">
              <div className="w-4 h-4 border-2 border-vermillion/30 border-t-vermillion rounded-full animate-spin" />
              <p className="text-vermillion text-sm">
                {language === 'Hindi' ? 'अनुवाद हो रहा है' : language === 'Tamil' ? 'மொழிபெயர்க்கப்படுகிறது' : 'Translating'} → {language}…
              </p>
            </div>
          )}

          <div
            className="text-ink-light leading-[1.85] whitespace-pre-wrap"
            style={{ fontSize: `${fontSize}px` }}
          >
            {finalContent}
          </div>
        </div>
      ) : (
        <div className="text-center py-16 text-ink-faint">
          <BookOpen size={36} className="mx-auto mb-3 opacity-40" />
          <p>{t('noBooks', language)}</p>
        </div>
      )}
    </motion.div>
  );
}