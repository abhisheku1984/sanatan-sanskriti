import { useEffect, useState } from 'react';
import { ArrowLeft, BookOpen, Minus, Plus } from 'lucide-react';
import supabase from '../lib/supabase';
import AudioPlayer from './AudioPlayer';
import LoadingSpinner from './LoadingSpinner';
import { t } from '../lib/translations';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  language: string;
  category: string;
  cover_image: string;
  total_chapters: number;
}

interface Chapter {
  id: number;
  book_id?: number;
  title?: string;
  name?: string;
  content?: string;
  text?: string;
  body?: string;
  chapter_number?: number;
  number?: number;
}

export default function BookReader({
  book,
  onBack,
  language,
}: {
  book: Book;
  onBack: () => void;
  language: string;
}) {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    let cancelled = false;

    async function loadChapters() {
      setLoading(true);
      setError('');

      const { data, error: fetchError } = await supabase
        .from('chapters')
        .select('*')
        .eq('book_id', book.id)
        .order('chapter_number', { ascending: true });

      if (cancelled) return;

      if (fetchError) {
        const fallback = await supabase
          .from('chapters')
          .select('*')
          .eq('book_id', book.id)
          .order('id', { ascending: true });

        if (cancelled) return;

        if (fallback.error) {
          console.error('Chapters error:', fallback.error.message);
          setChapters([]);
          setError('Unable to load chapters. Please try again later.');
          setLoading(false);
          return;
        }

        setChapters(fallback.data ?? []);
        setLoading(false);
        return;
      }

      setChapters(data ?? []);
      setLoading(false);
    }

    loadChapters();

    return () => {
      cancelled = true;
    };
  }, [book.id]);

  const chapter = chapters[activeIndex];
  const chapterTitle = chapter?.title || chapter?.name || `Chapter ${activeIndex + 1}`;
  const chapterText = chapter?.content || chapter?.text || chapter?.body || '';

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-vermillion"
        >
          <ArrowLeft size={16} />
          Back to Library
        </button>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-parchment border border-border text-xs text-ink-muted">
            English
          </span>
          <div className="flex items-center border border-border rounded-lg overflow-hidden text-ink-muted">
            <button
              onClick={() => setFontSize((s) => Math.max(12, s - 2))}
              className="px-2 py-1 hover:text-vermillion"
            >
              <Minus size={14} />
            </button>
            <span className="px-2 text-xs">{fontSize}px</span>
            <button
              onClick={() => setFontSize((s) => Math.min(28, s + 2))}
              className="px-2 py-1 hover:text-vermillion"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-ink">{book.title}</h1>
        <p className="text-ink-muted mt-1">{book.author}</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center">
          {error}
        </div>
      )}

      {loading ? (
        <LoadingSpinner />
      ) : chapters.length === 0 ? (
        <div className="text-center py-16 text-ink-faint">
          <BookOpen size={36} className="mx-auto mb-3 opacity-40" />
          <p>{t('noBooks', language)}</p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 mb-6">
            {chapters.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`px-3 py-1.5 rounded-lg text-xs border ${
                  index === activeIndex
                    ? 'border-vermillion/40 bg-vermillion/10 text-vermillion'
                    : 'border-border text-ink-muted'
                }`}
              >
                {item.chapter_number || item.number || index + 1}. {item.title || item.name || 'Chapter'}
              </button>
            ))}
          </div>

          <div className="bg-surface border border-border rounded-xl p-5 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl font-semibold text-ink">{chapterTitle}</h2>
              {chapterText && (
                <AudioPlayer text={`${chapterTitle}. ${chapterText}`} language={language} compact />
              )}
            </div>
            <div className="text-ink leading-8 whitespace-pre-wrap" style={{ fontSize }}>
              {chapterText || 'No chapter text found.'}
            </div>
          </div>
        </>
      )}
    </div>
  );
}