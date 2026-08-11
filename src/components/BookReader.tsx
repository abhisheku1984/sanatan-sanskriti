import { useState, useEffect, startTransition } from 'react';
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight, Minus, Plus, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import AudioPlayer from './AudioPlayer';
import LoadingSpinner from './LoadingSpinner';
import { t } from '../lib/translations';
import { translateText } from '../lib/translate';

interface Chapter { id: number; book_id: number; chapter_number: number; title: string; content: string; }
interface Book { id: number; title: string; author: string; description: string; language: string; category: string; cover_image: string; total_chapters: number; }

export default function BookReader({ book, onBack, language }: { book: Book; onBack: () => void; language: string }) {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fontSize, setFontSize] = useState(16);
  const [translatedContent, setTranslatedContent] = useState<string>('');
  const [translatedTitle, setTranslatedTitle] = useState<string>('');
  const [translating, setTranslating] = useState(false);

  useEffect(() => {
    fetch(`/api/chapters?book_id=${book.id}`).then(r => r.json()).then(setChapters).catch(console.error).finally(() => setLoading(false));
  }, [book.id]);

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
      setTranslating(true);
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
      startTransition(() => setTranslating(false));
    });
  }, [chapters, currentIdx, language]);

  const chapter = chapters[currentIdx];
  if (loading) return <LoadingSpinner />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="flex items-center gap-1.5 text-ink-muted hover:text-vermillion text-sm transition-colors"><ArrowLeft size={15} /> {t('backToLibrary', language)}</button>
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

      <div className="text-center mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-semibold text-ink">{book.title}</h1>
        <p className="text-ink-faint text-sm mt-1">{book.author}</p>
      </div>

      {chapters.length > 0 && (
        <div className="flex items-center justify-between mb-5 bg-surface border border-border rounded-lg px-3 py-2">
          <button onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} disabled={currentIdx === 0}
            className="flex items-center gap-1 text-[13px] text-ink-muted hover:text-vermillion disabled:opacity-30 disabled:cursor-not-allowed"><ChevronLeft size={14} /> {t('previous', language)}</button>
          <select value={currentIdx} onChange={e => setCurrentIdx(Number(e.target.value))} className="bg-parchment border border-border rounded-md px-2 py-1 text-[13px] text-ink max-w-[200px] truncate">
            {chapters.map((ch, idx) => <option key={ch.id} value={idx}>Ch. {ch.chapter_number}: {ch.title}</option>)}
          </select>
          <button onClick={() => setCurrentIdx(Math.min(chapters.length - 1, currentIdx + 1))} disabled={currentIdx === chapters.length - 1}
            className="flex items-center gap-1 text-[13px] text-ink-muted hover:text-vermillion disabled:opacity-30 disabled:cursor-not-allowed">{t('next', language)} <ChevronRight size={14} /></button>
        </div>
      )}

      {chapter ? (
        <div className="bg-surface border border-border rounded-xl p-6 md:p-10">
          <h2 className="font-display text-xl font-semibold text-ink mb-1">
            {t('chapters', language)} {chapter.chapter_number}: {translatedTitle || chapter.title}
          </h2>
          <div className="mb-5">
            <AudioPlayer
              text={translatedContent || chapter.content}
              language={language}
              title={`Ch. ${chapter.chapter_number} — ${translatedTitle || chapter.title}`}
            />
          </div>
          {translating && (
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
            {translatedContent || chapter.content}
          </div>
        </div>
      ) : (
        <div className="text-center py-16 text-ink-faint"><BookOpen size={36} className="mx-auto mb-3 opacity-40" /><p>{t('noBooks', language)}</p></div>
      )}
    </motion.div>
  );
}