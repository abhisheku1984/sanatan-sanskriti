/**
 * PujaMantraPage.tsx
 * Hindu Devotional Library & Content Hub
 * Features: Mantras, Chalisa, Stotras, Ashtakam, Kavach with YouTube integration
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Music, Flame } from 'lucide-react';
import DharmaWheel from '../components/DharmaWheel';
import { SearchFilter, DevotionalContentCard, YouTubePlayer, VerseDisplay, StatsBadge } from '../components/DevotionalComponents';
import { mockDevotionalContent } from '../lib/devotionalMockData';
import { DevotionalContent, Deity, ContentCategory } from '../types/devotionalTypes';

const DEITIES: Deity[] = ['All', 'Shiva', 'Vishnu', 'Devi', 'Ganesha', 'Hanuman', 'Surya', 'Durga', 'Lakshmi', 'Saraswati'];
const CATEGORIES: ContentCategory[] = ['vedic', 'chalisa', 'stotra', 'ashtakam', 'kavach', 'mantra'];

export default function PujaMantraPage({ language }: { language: string }) {
  // ===== STATE =====
  const [selectedDeity, setSelectedDeity] = useState<Deity>('All');
  const [selectedCategory, setSelectedCategory] = useState<ContentCategory | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContent, setSelectedContent] = useState<DevotionalContent | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // ===== FILTERING LOGIC =====
  const filteredContent = useMemo(() => {
    return mockDevotionalContent.filter(content => {
      const deityMatch = selectedDeity === 'All' || content.deity === selectedDeity;
      const categoryMatch = !selectedCategory || content.category === selectedCategory;
      const searchMatch =
        content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.hindiTitle.includes(searchQuery) ||
        content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return deityMatch && categoryMatch && searchMatch;
    });
  }, [selectedDeity, selectedCategory, searchQuery]);

  const handleSelectContent = (content: DevotionalContent) => {
    setSelectedContent(content);
    setShowDetailModal(true);
  };

  // ===== HERO SECTION =====
  const HeroSection = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-br from-vermillion/10 via-turmeric/5 to-sage/10 border-b border-border py-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex justify-center mb-6">
          <DharmaWheel size={80} spinning={true} color="#C24D2B" />
        </motion.div>

        <h1 className="font-display text-5xl md:text-6xl font-bold text-ink mb-2">
          पूजा मंत्र संग्रह
        </h1>
        <p className="text-2xl md:text-3xl text-vermillion mb-4">
          Puja Mantra, Chalisa & Stotra
        </p>
        <p className="text-ink-light max-w-2xl mx-auto text-lg">
          A comprehensive collection of sacred Hindu devotional texts, mantras, and chants. Explore bilingual content with Devanagari script, transliteration, meanings, and guided audio.
        </p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
        >
          <StatsBadge label="Total Content" value={mockDevotionalContent.length} icon={BookOpen} />
          <StatsBadge label="Deities" value={DEITIES.length - 1} icon={Flame} />
          <StatsBadge label="Categories" value={CATEGORIES.length} icon={Music} />
          <StatsBadge label="Languages" value={3} icon={BookOpen} />
        </motion.div>
      </div>
    </motion.div>
  );

  // ===== DETAIL MODAL =====
  const DetailModal = () => {
    if (!selectedContent) return null;

    return (
      <AnimatePresence>
        {showDetailModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetailModal(false)}
              className="fixed inset-0 bg-black/70 z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-10 bg-surface rounded-2xl shadow-2xl z-50 overflow-y-auto max-h-[90vh]"
            >
              <div className="max-w-4xl mx-auto p-6 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-vermillion/10 text-vermillion text-[11px] font-semibold uppercase tracking-wider mb-3">
                      {selectedContent.category}
                    </span>
                    <h2 className="font-display text-4xl font-bold text-ink mb-2">
                      {selectedContent.title}
                    </h2>
                    <p className="font-devanagari text-2xl text-vermillion mb-2">
                      {selectedContent.hindiTitle}
                    </p>
                    <p className="text-ink-muted">Dedicated to {selectedContent.deity}</p>
                  </div>
                  <button
                    onClick={() => setShowDetailModal(false)}
                    className="p-2 hover:bg-parchment-warm rounded-full transition-colors"
                  >
                    <X size={28} className="text-ink" />
                  </button>
                </div>

                {/* YouTube Video */}
                {selectedContent.youtubeVideoId && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10"
                  >
                    <YouTubePlayer
                      videoId={selectedContent.youtubeVideoId}
                      title={selectedContent.title}
                      autoplay={false}
                    />
                  </motion.div>
                )}

                {/* Description & Meta */}
                <div className="bg-parchment-warm rounded-xl p-6 mb-8">
                  <p className="text-ink text-lg mb-4">{selectedContent.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-ink-faint uppercase text-xs tracking-wider mb-1">Difficulty</p>
                      <p className="font-semibold text-ink capitalize">{selectedContent.difficulty}</p>
                    </div>
                    <div>
                      <p className="text-ink-faint uppercase text-xs tracking-wider mb-1">Duration</p>
                      <p className="font-semibold text-ink">{selectedContent.duration} min</p>
                    </div>
                    <div>
                      <p className="text-ink-faint uppercase text-xs tracking-wider mb-1">Language</p>
                      <p className="font-semibold text-ink capitalize">{selectedContent.language}</p>
                    </div>
                    <div>
                      <p className="text-ink-faint uppercase text-xs tracking-wider mb-1">Deity</p>
                      <p className="font-semibold text-ink">{selectedContent.deity}</p>
                    </div>
                  </div>
                </div>

                {/* Verses */}
                {selectedContent.verses && selectedContent.verses.length > 0 && (
                  <div className="space-y-6 mb-8">
                    <h3 className="font-display text-2xl font-bold text-ink">Sacred Verses</h3>
                    {selectedContent.verses.map((verse, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <VerseDisplay {...verse} />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="mb-8">
                  <h3 className="font-display text-lg font-bold text-ink mb-3">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedContent.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full bg-vermillion/10 text-vermillion text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Audio Player */}
                {selectedContent.audioUrl && (
                  <div className="bg-sage/10 rounded-xl p-6 mb-8">
                    <h3 className="font-display font-bold text-ink mb-4 flex items-center gap-2">
                      <Music size={20} className="text-sage" />
                      Audio Chanting
                    </h3>
                    <audio controls className="w-full rounded-lg">
                      <source src={selectedContent.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}

                {/* Call to Action */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-vermillion to-vermillion-deep text-white font-bold py-4 rounded-xl hover:shadow-lg transition-shadow"
                >
                  Learn This Mantra/Chant
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <HeroSection />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Search & Filter */}
        <SearchFilter
          onDeityChange={setSelectedDeity}
          onCategoryChange={setSelectedCategory}
          onSearchChange={setSearchQuery}
          selectedDeity={selectedDeity}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          deities={DEITIES}
          categories={CATEGORIES}
        />

        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="font-display text-3xl font-bold text-ink mb-2">
            {filteredContent.length} {filteredContent.length === 1 ? 'Result' : 'Results'}
          </h2>
          <p className="text-ink-muted">
            {selectedDeity !== 'All' && `Showing devotional content for ${selectedDeity}`}
            {selectedCategory && ` • ${selectedCategory} category`}
          </p>
        </motion.div>

        {/* Content Grid */}
        {filteredContent.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {filteredContent.map((content, idx) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <DevotionalContentCard
                  content={content}
                  onSelect={handleSelectContent}
                  isSelected={selectedContent?.id === content.id}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <BookOpen size={64} className="mx-auto text-ink-faint/30 mb-4" />
            <h3 className="font-display text-2xl font-bold text-ink mb-2">No Content Found</h3>
            <p className="text-ink-muted max-w-md mx-auto">
              Try adjusting your filters or search query to find devotional content.
            </p>
          </motion.div>
        )}
      </div>

      {/* Detail Modal */}
      <DetailModal />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border-t border-border bg-surface-warm py-12 px-4 mt-12"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-ink-muted mb-4">
            जय शिव शंकर | वन्दे माता | जय हनुमान | नमः शिवाय
          </p>
          <p className="text-[12px] text-ink-faint">
            © 2026 Sanatan Sanskriti. All devotional content is for spiritual learning and worship purposes.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}