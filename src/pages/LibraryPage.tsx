import { useState, useEffect } from 'react';
import { Search, BookOpen, Grid, List } from 'lucide-react';
import { motion } from 'framer-motion';
import BookReader from '../components/BookReader';
import AudioPlayer from '../components/AudioPlayer';
import LoadingSpinner from '../components/LoadingSpinner';
import { t } from '../lib/translations';
import supabase from '../lib/supabase';

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

const CATEGORIES = ['All', 'Vedas', 'Upanishads', 'Puranas', 'Epics', 'Gita', 'Sutras', 'Stotras'];

export default function LibraryPage({ language }: { language: string }) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadBooks() {
      setLoading(true);
      setError('');

      const { data, error: fetchError } = await supabase
        .from('books')
        .select('id, title, author, description, language, category, cover_image, total_chapters')
        .order('id', { ascending: true });

      if (cancelled) return;

      if (fetchError) {
        console.error('Books error:', fetchError.message);
        setBooks([]);
        setError('Unable to load books. Please try again later.');
        setLoading(false);
        return;
      }

      setBooks(data ?? []);
      setLoading(false);
    }

    loadBooks();

    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = books.filter((b) => {
    const matchSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All' || b.category === category;
    return matchSearch && matchCat;
  });

  if (selectedBook) {
    return (
      <div className="pt-6 pb-12 px-4">
        <BookReader book={selectedBook} onBack={() => setSelectedBook(null)} language={language} />
      </div>
    );
  }

  return (
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ink">{t('sacredLibrary', language)}</h1>
          <p className="text-ink-muted mt-1">Explore the timeless wisdom of sacred Hindu texts and teachings</p>
        </motion.div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center">
            {error}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />
            <input
              type="text"
              placeholder="Search books, authors, topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-parchment border border-border rounded-lg text-sm text-ink placeholder:text-ink-faint/50 focus:outline-none focus:border-vermillion/40"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2.5 bg-parchment border border-border rounded-lg text-sm text-ink focus:outline-none focus:border-vermillion/40"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <div className="flex items-center border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setView('grid')}
              className={`px-3 py-2.5 ${view === 'grid' ? 'bg-vermillion/10 text-vermillion' : 'text-ink-muted'}`}
            >
              <Grid size={15} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-3 py-2.5 ${view === 'list' ? 'bg-vermillion/10 text-vermillion' : 'text-ink-muted'}`}
            >
              <List size={15} />
            </button>
          </div>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-ink-faint">
            <BookOpen size={36} className="mx-auto mb-3 opacity-40" />
            <p>{t('noBooks', language)}</p>
          </div>
        ) : view === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((book, i) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.04, 0.5) }}
                className="bg-surface border border-border rounded-xl overflow-hidden hover:border-vermillion/30 transition-all cursor-pointer group"
                onClick={() => setSelectedBook(book)}
              >
                <div className="aspect-[3/4] bg-parchment-warm flex items-center justify-center">
                  {book.cover_image ? (
                    <img src={book.cover_image} alt={book.title} className="w-full h-full object-cover" />
                  ) : (
                    <BookOpen size={40} className="text-ink-faint/30" />
                  )}
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-vermillion">{book.category}</span>
                  <h3 className="font-display text-base font-semibold text-ink mt-1 group-hover:text-vermillion transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-ink-faint text-sm">{book.author}</p>
                  <p className="text-ink-muted text-[12px] mt-1 line-clamp-2">{book.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-ink-faint text-[11px]">
                      {book.total_chapters} {t('chapters', language)}
                    </span>
                    <AudioPlayer text={`${book.title} by ${book.author}. ${book.description}`} language={language} compact />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((book, i) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.4) }}
                className="bg-surface border border-border rounded-lg p-4 flex items-start gap-4 hover:border-vermillion/30 transition-all cursor-pointer group"
                onClick={() => setSelectedBook(book)}
              >
                <div className="w-16 h-20 bg-parchment-warm rounded-md flex-shrink-0 flex items-center justify-center">
                  {book.cover_image ? (
                    <img src={book.cover_image} alt={book.title} className="w-full h-full object-cover rounded-md" />
                  ) : (
                    <BookOpen size={24} className="text-ink-faint/30" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-vermillion">{book.category}</span>
                  <h3 className="font-display text-base font-semibold text-ink group-hover:text-vermillion transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-ink-faint text-sm">{book.author}</p>
                  <p className="text-ink-muted text-[12px] mt-1 line-clamp-2">{book.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <AudioPlayer text={`${book.title} by ${book.author}. ${book.description}`} language={language} compact />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}