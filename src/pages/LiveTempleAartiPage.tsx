/**
 * LiveTempleAartiPage.tsx
 * Live Temple Darshan & Aarti Hub
 * Features: Live streams, Aarti timings, Temple schedules, Multi-temple view
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Flame, Eye, Volume2 } from 'lucide-react';
import DharmaWheel from '../components/DharmaWheel';
import { SearchFilter, TempleCard, YouTubePlayer, ScheduleWidget, StatsBadge } from '../components/DevotionalComponents';
import { mockTempleStreams } from '../lib/templeMockData';
import { TempleStream, Deity } from '../types/devotionalTypes';

const DEITIES: Deity[] = ['All', 'Shiva', 'Vishnu', 'Devi', 'Ganesha'];

export default function LiveTempleAartiPage({ language }: { language: string }) {
  // ===== STATE =====
  const [selectedDeity, setSelectedDeity] = useState<Deity>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemple, setSelectedTemple] = useState<TempleStream | null>(mockTempleStreams[0]);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showLiveOnly, setShowLiveOnly] = useState(false);

  // ===== FILTERING LOGIC =====
  const filteredTemples = useMemo(() => {
    return mockTempleStreams.filter(temple => {
      const deityMatch = selectedDeity === 'All' || temple.deity === selectedDeity;
      const searchMatch =
        temple.templeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        temple.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        temple.state.toLowerCase().includes(searchQuery.toLowerCase());
      const liveMatch = !showLiveOnly || temple.isLive;

      return deityMatch && searchMatch && liveMatch;
    });
  }, [selectedDeity, searchQuery, showLiveOnly]);

  const liveTempleCount = mockTempleStreams.filter(t => t.isLive).length;

  const handleSelectTemple = (temple: TempleStream) => {
    setSelectedTemple(temple);
    setShowDetailModal(true);
  };

  // ===== HERO SECTION =====
  const HeroSection = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-br from-vermillion/15 via-sage/5 to-lotus/10 border-b border-border py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex justify-center mb-6">
            <DharmaWheel size={80} spinning={true} color="#C24D2B" />
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink mb-2">
            देव दर्शन
          </h1>
          <p className="text-2xl md:text-3xl text-vermillion mb-4">
            Live Temple Darshan & Aarti
          </p>
          <p className="text-ink-light max-w-2xl mx-auto text-lg">
            Experience the divine presence of major Hindu temples across India. Watch live aartis and pujas from Jyotirlingas, Shakti Peethas, and sacred pilgrimage sites.
          </p>
        </div>

        {/* Live Status & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-white/50 backdrop-blur rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Flame size={20} className="text-red-600 animate-pulse" />
              <span className="text-red-600 font-bold text-sm animate-pulse">LIVE</span>
            </div>
            <p className="text-ink-faint text-xs uppercase tracking-wider mb-1">Active Streams</p>
            <p className="font-display text-3xl font-bold text-ink">{liveTempleCount}</p>
          </div>

          <StatsBadge label="Total Temples" value={mockTempleStreams.length} icon={MapPin} />
          <StatsBadge label="States" value={8} icon={MapPin} />
          <StatsBadge label="Aartis Daily" value="50+" icon={Clock} />
        </motion.div>
      </div>
    </motion.div>
  );

  // ===== LIVE STREAM MODAL =====
  const LiveStreamModal = () => {
    if (!selectedTemple) return null;

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
              className="fixed inset-4 md:inset-6 bg-surface rounded-2xl shadow-2xl z-50 overflow-y-auto max-h-[95vh]"
            >
              <div className="max-w-5xl mx-auto p-6 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    {selectedTemple.isLive && (
                      <div className="flex items-center gap-2 mb-3">
                        <Flame size={16} className="text-red-600 animate-pulse" />
                        <span className="px-3 py-1 rounded-full bg-red-600/20 text-red-600 text-[11px] font-bold uppercase tracking-wider animate-pulse">
                          LIVE NOW
                        </span>
                      </div>
                    )}
                    <h2 className="font-display text-4xl font-bold text-ink mb-1">
                      {selectedTemple.templeName}
                    </h2>
                    <p className="font-devanagari text-2xl text-vermillion mb-3">
                      {selectedTemple.hindiName}
                    </p>
                    <p className="text-ink-muted flex items-center gap-2">
                      <MapPin size={16} /> {selectedTemple.city}, {selectedTemple.state}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowDetailModal(false)}
                    className="p-2 hover:bg-parchment-warm rounded-full transition-colors"
                  >
                    <X size={28} className="text-ink" />
                  </button>
                </div>

                {/* Live Stream Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  {/* Main Video Player */}
                  <div className="lg:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      {selectedTemple.isLive && selectedTemple.youtubeVideoId ? (
                        <YouTubePlayer
                          videoId={selectedTemple.youtubeVideoId}
                          title={selectedTemple.templeName}
                          autoplay={true}
                        />
                      ) : (
                        <div className="w-full h-96 bg-black rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <Eye size={48} className="text-ink-faint/30 mx-auto mb-4" />
                            <p className="text-ink-faint">Stream not currently available</p>
                            <p className="text-ink-faint text-sm mt-2">Check schedule for next aarti</p>
                          </div>
                        </div>
                      )}
                    </motion.div>

                    {/* Temple Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-parchment-warm rounded-xl p-6 mt-6"
                    >
                      <h3 className="font-display font-bold text-ink text-lg mb-3">About This Temple</h3>
                      <p className="text-ink-light leading-relaxed mb-4">{selectedTemple.description}</p>

                      {/* Deity */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-vermillion/10 text-vermillion text-[12px] font-semibold">
                          Dedicated to {selectedTemple.deity}
                        </span>
                      </div>

                      {/* Contact Info */}
                      <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                        {selectedTemple.website && (
                          <div>
                            <p className="text-ink-faint text-xs uppercase tracking-wider mb-1">Website</p>
                            <a href={selectedTemple.website} target="_blank" rel="noopener noreferrer" className="text-vermillion hover:underline">
                              Visit Site
                            </a>
                          </div>
                        )}
                        {selectedTemple.phone && (
                          <div>
                            <p className="text-ink-faint text-xs uppercase tracking-wider mb-1">Phone</p>
                            <p className="font-semibold text-ink">{selectedTemple.phone}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Sidebar: Schedule & Details */}
                  <div className="space-y-6">
                    {/* Aarti Schedule */}
                    <ScheduleWidget
                      timings={selectedTemple.aartiTimings}
                      nextAarti={selectedTemple.nextAarti}
                    />

                    {/* Deity Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-surface border border-border rounded-xl p-6"
                    >
                      <h3 className="font-display font-bold text-ink mb-4">Presiding Deity</h3>
                      <div className="text-center py-6 bg-vermillion/10 rounded-lg">
                        <p className="text-4xl mb-2">🙏</p>
                        <p className="font-display text-2xl font-bold text-vermillion">{selectedTemple.deity}</p>
                      </div>
                    </motion.div>

                    {/* Location Info */}
                    {selectedTemple.latitude && selectedTemple.longitude && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-surface border border-border rounded-xl p-6"
                      >
                        <h3 className="font-display font-bold text-ink mb-4 flex items-center gap-2">
                          <MapPin size={20} />
                          Location
                        </h3>
                        <p className="text-sm text-ink-light mb-4">{selectedTemple.address}</p>
                        <div className="bg-parchment-warm rounded-lg p-3">
                          <p className="text-xs text-ink-faint mb-2">Coordinates</p>
                          <p className="text-sm font-mono text-ink">
                            {selectedTemple.latitude.toFixed(4)}° N, {selectedTemple.longitude.toFixed(4)}° E
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Full Width CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-vermillion to-vermillion-deep text-white font-bold py-4 rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                >
                  <Volume2 size={20} />
                  Watch Live Stream
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface border border-border rounded-xl p-6 mb-8"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search temples by name, city, or state..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-parchment-warm text-ink placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-vermillion"
            />
          </div>

          {/* Filters */}
          <div className="space-y-4">
            {/* Deity Filter */}
            <div>
              <p className="text-sm font-semibold text-ink mb-2">Filter by Deity</p>
              <div className="flex flex-wrap gap-2">
                {DEITIES.map(deity => (
                  <button
                    key={deity}
                    onClick={() => setSelectedDeity(deity)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedDeity === deity
                        ? 'bg-vermillion text-white shadow-lg'
                        : 'bg-parchment-warm text-ink hover:bg-vermillion/10'
                    }`}
                  >
                    {deity}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Only Toggle */}
            <div>
              <button
                onClick={() => setShowLiveOnly(!showLiveOnly)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  showLiveOnly
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-parchment-warm text-ink hover:bg-red-600/10'
                }`}
              >
                <Flame size={14} />
                {showLiveOnly ? 'Showing Live Only' : 'Show All'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="font-display text-3xl font-bold text-ink mb-2">
            {filteredTemples.length} {filteredTemples.length === 1 ? 'Temple' : 'Temples'}
          </h2>
          <p className="text-ink-muted">
            {showLiveOnly && '🔴 '}
            {selectedDeity !== 'All' && `Dedicated to ${selectedDeity} • `}
            {filteredTemples.filter(t => t.isLive).length} currently streaming
          </p>
        </motion.div>

        {/* Temple Grid */}
        {filteredTemples.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {filteredTemples.map((temple, idx) => (
              <motion.div
                key={temple.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <TempleCard
                  temple={temple}
                  onSelect={handleSelectTemple}
                  isSelected={selectedTemple?.id === temple.id}
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
            <MapPin size={64} className="mx-auto text-ink-faint/30 mb-4" />
            <h3 className="font-display text-2xl font-bold text-ink mb-2">No Temples Found</h3>
            <p className="text-ink-muted max-w-md mx-auto">
              Try adjusting your filters to find more temples and live streams.
            </p>
          </motion.div>
        )}
      </div>

      {/* Live Stream Detail Modal */}
      <LiveStreamModal />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border-t border-border bg-surface-warm py-12 px-4 mt-12"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-ink-muted mb-4">
            नमः शिवाय | ॐ नमो भगवते वासुदेवाय | जय माता दी
          </p>
          <p className="text-[12px] text-ink-faint">
            © 2024 Sanatan Sanskriti. Temple stream timings are subject to daily schedules.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

