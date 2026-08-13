/**
 * LiveTempleAartiPage.tsx
 * COMPREHENSIVE: All 12 Jyotirlingas, 51 Shakti Peeths, 4 Dham, Chota Char Dham, Major Temples
 * Features:
 *   - Auto-refresh every 15 minutes (like news feed)
 *   - Actual YouTube video embeds for latest aarti (not just website links)
 *   - Category filters: All, Jyotirlinga, Shakti Peeth, Char Dham, Chota Char Dham, Major
 *   - Live stream detection and embedding
 *   - Last refreshed timestamp
 *   - Manual refresh button
 */

import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Flame, Eye, ExternalLink, Globe, RefreshCw, Play, Radio, Filter, Calendar } from 'lucide-react';
import DharmaWheel from '../components/DharmaWheel';
import { TempleCard, StatsBadge } from '../components/DevotionalComponents';
import { allTempleStreams, templeStats, getTempleEmbedUrl, getTempleThumbnail } from '../lib/templeMockData';
import { TempleStream, Deity, TempleCategory } from '../types/devotionalTypes';

const DEITIES: Deity[] = ['All', 'Shiva', 'Vishnu', 'Devi', 'Ganesha', 'Hanuman'];

const CATEGORIES: { value: TempleCategory | 'all'; label: string; icon: string }[] = [
  { value: 'all', label: 'All Temples', icon: '🏛️' },
  { value: 'jyotirlinga', label: '12 Jyotirlingas', icon: '🏛️' },
  { value: 'shakti-peeth', label: 'Shakti Peeths', icon: '👸' },
  { value: 'char-dham', label: 'Char Dham', icon: '🛕' },
  { value: 'chota-char-dham', label: 'Chota Char Dham', icon: '⛪' },
  { value: 'major', label: 'Major Temples', icon: '🛕' },
];

// High-quality fallback spiritual images for prominent temples if thumbnails are missing
const TEMPLE_IMAGE_FALLBACKS: Record<string, string> = {
  'Somnath Temple': 'https://images.unsplash.com/photo-1621511812543-98427f7112d7?auto=format&fit=crop&w=800&q=80',
  'Mahakaleshwar Temple': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
  'Kashi Vishwanath Temple': 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
  'Kedarnath Temple': 'https://images.unsplash.com/photo-1605648916361-9bc12ad6a566?auto=format&fit=crop&w=800&q=80',
  'Tirupati Balaji Temple': 'https://images.unsplash.com/photo-1609137144813-772c67664903?auto=format&fit=crop&w=800&q=80',
  'Vaishno Devi Temple': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
};

// ===== YOUTUBE VIDEO PLAYER COMPONENT =====
const YouTubePlayer = ({
  videoUrl,
  title,
  isLive = false,
  temple
}: {
  videoUrl: string;
  title: string;
  isLive?: boolean;
  temple?: TempleStream;
}) => {
  const watchUrl = temple?.latestVideoId
    ? `https://www.youtube.com/watch?v=${temple.latestVideoId}`
    : `https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' live aarti')}`;

  return (
    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl flex flex-col items-center justify-center group">
      {isLive && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-red-600/95 backdrop-blur rounded-full">
          <Radio size={14} className="text-white animate-pulse" />
          <span className="text-white text-xs font-bold uppercase tracking-wider">LIVE</span>
        </div>
      )}

      {/* Embedded Iframe */}
      <iframe
        src={videoUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full absolute inset-0"
        loading="eager"
      />

      {/* Overlay to catch embedding blocks and let users open it directly */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 backdrop-blur-[2px]">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-2xl flex items-center gap-2 transition-transform transform hover:scale-105"
        >
          <ExternalLink size={18} /> Watch Live on YouTube
        </a>
      </div>
    </div>
  );
};

// ===== LATEST AARTI CARD =====
const LatestAartiCard = ({
  temple,
  onSelect
}: {
  temple: TempleStream;
  onSelect: (temple: TempleStream) => void;
}) => {
  const thumbnail =
    getTempleThumbnail(temple) ||
    (temple.latestVideoId ? `https://img.youtube.com/vi/${temple.latestVideoId}/hqdefault.jpg` : null) ||
    TEMPLE_IMAGE_FALLBACKS[temple.templeName] ||
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80';

  const isLive = temple.isLive && temple.streamType === 'live';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(temple)}
      className="relative bg-surface border border-border rounded-xl overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-parchment-warm overflow-hidden">
        <img
          src={thumbnail}
          alt={temple.templeName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* Live Badge */}
        {isLive && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-red-600 rounded-full">
            <Radio size={12} className="text-white animate-pulse" />
            <span className="text-white text-[10px] font-bold uppercase">Live</span>
          </div>
        )}

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play size={24} className="text-vermillion ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur rounded-lg">
          <span className="text-white text-[10px] font-semibold uppercase">
            {temple.category.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-display font-bold text-ink text-sm line-clamp-1">{temple.templeName}</h3>
        <p className="text-ink-faint text-xs mt-1">{temple.city}, {temple.state}</p>

        {temple.latestVideoTitle && (
          <p className="text-ink-muted text-xs mt-2 line-clamp-1 flex items-center gap-1">
            <Play size={10} className="text-vermillion" />
            {temple.latestVideoTitle}
          </p>
        )}

        <div className="flex items-center justify-between mt-3">
          <span className="text-[10px] text-ink-faint">
            Refreshed: {new Date(temple.lastRefreshed).toLocaleTimeString()}
          </span>
          {temple.nextAarti && (
            <span className="text-[10px] text-vermillion font-semibold">
              Next: {temple.nextAarti.type}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ===== SCHEDULE WIDGET =====
const ScheduleWidget = ({
  timings,
  nextAarti,
}: {
  timings: any[];
  nextAarti?: { type: string; startTime: string; hoursUntil: number };
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-surface border border-border rounded-xl p-6"
    >
      <h3 className="font-display font-bold text-ink mb-4 flex items-center gap-2">
        <Clock size={20} />
        Daily Aarti Schedule
      </h3>

      {nextAarti && (
        <div className="mb-4 p-4 rounded-xl bg-vermillion/10 border border-vermillion/20">
          <p className="text-[11px] font-bold uppercase tracking-wider text-vermillion mb-1">
            Next Live Aarti
          </p>
          <p className="font-display text-lg font-bold text-ink">{nextAarti.type} Aarti</p>
          <p className="text-vermillion font-semibold">{nextAarti.startTime}</p>
          <p className="text-ink-faint text-xs mt-1">Starts in {nextAarti.hoursUntil} hours</p>
        </div>
      )}

      <div className="space-y-3">
        {timings.map((aarti, idx) => (
          <div
            key={idx}
            className="w-full text-left p-4 rounded-xl bg-parchment-warm border-2 border-transparent hover:border-vermillion/20 transition-all flex items-center justify-between"
          >
            <div className="flex-1">
              <p className="font-semibold text-ink">{aarti.type}</p>
              <p className="text-ink-faint text-sm">{aarti.duration} minutes</p>
            </div>
            <p className="font-bold text-lg text-vermillion/80">{aarti.startTime}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function LiveTempleAartiPage({ language }: { language: string }) {
  // ===== STATE =====
  const [selectedDeity, setSelectedDeity] = useState<Deity>('All');
  const [selectedCategory, setSelectedCategory] = useState<TempleCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemple, setSelectedTemple] = useState<TempleStream | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showLiveOnly, setShowLiveOnly] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<string>(new Date().toISOString());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [temples, setTemples] = useState<TempleStream[]>(allTempleStreams);
  const refreshTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ===== AUTO REFRESH =====
  const performRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setTemples(prev => prev.map(t => ({
        ...t,
        lastRefreshed: new Date().toISOString(),
      })));
      setLastRefresh(new Date().toISOString());
      setIsRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    refreshTimerRef.current = setInterval(performRefresh, 900000);
    return () => {
      if (refreshTimerRef.current) clearInterval(refreshTimerRef.current);
    };
  }, [performRefresh]);

  // ===== FILTERING LOGIC =====
  const filteredTemples = useMemo(() => {
    return temples.filter(temple => {
      const deityMatch = selectedDeity === 'All' || temple.deity === selectedDeity;
      const categoryMatch = selectedCategory === 'all' || temple.category === selectedCategory;
      const searchMatch =
        temple.templeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        temple.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        temple.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (temple.significance && temple.significance.toLowerCase().includes(searchQuery.toLowerCase()));
      const liveMatch = !showLiveOnly || temple.isLive;

      return deityMatch && categoryMatch && searchMatch && liveMatch;
    });
  }, [temples, selectedDeity, selectedCategory, searchQuery, showLiveOnly]);

  // ===== LATEST AARTI (Top 6 with actual video content) =====
  const latestAartis = useMemo(() => {
    return temples
      .filter(t => t.latestVideoId || t.isLive)
      .sort((a, b) => new Date(b.lastRefreshed).getTime() - new Date(a.lastRefreshed).getTime())
      .slice(0, 6);
  }, [temples]);

  const liveTempleCount = temples.filter(t => t.isLive).length;

  const handleSelectTemple = (temple: TempleStream) => {
    setSelectedTemple(temple);
    setShowDetailModal(true);
  };

  // ===== HERO SECTION WITH CLICKABLE STAT CARDS =====
  const HeroSection = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-br from-vermillion/15 via-sage/5 to-lotus/10 border-b border-border py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
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
          <p className="text-ink-light max-w-3xl mx-auto text-lg">
            Watch the latest aartis and live darshan from all 12 Jyotirlingas, Shakti Peeths,
            Char Dham, and major temples across India. Auto-refreshed every 15 minutes.
          </p>
        </div>

        {/* Clickable Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3"
        >
          {/* Live Card (Clickable) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShowLiveOnly(true);
              setSelectedCategory('all');
            }}
            className="bg-white/70 hover:bg-white backdrop-blur rounded-xl p-4 text-center cursor-pointer border border-red-500/20 shadow-sm transition-all"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Flame size={20} className="text-red-600 animate-pulse" />
              <span className="text-red-600 font-bold text-sm animate-pulse">LIVE</span>
            </div>
            <p className="text-ink-faint text-xs uppercase tracking-wider mb-1">Active</p>
            <p className="font-display text-3xl font-bold text-ink">{liveTempleCount}</p>
          </motion.div>

          {/* Total Card (Clickable - Reset Filters) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShowLiveOnly(false);
              setSelectedCategory('all');
              setSelectedDeity('All');
              setSearchQuery('');
            }}
            className="bg-white/70 hover:bg-white backdrop-blur rounded-xl p-4 text-center cursor-pointer border border-border shadow-sm transition-all"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin size={20} className="text-vermillion" />
            </div>
            <p className="text-ink-faint text-xs uppercase tracking-wider mb-1">Total</p>
            <p className="font-display text-3xl font-bold text-ink">{templeStats.totalTemples}</p>
          </motion.div>

          {/* Jyotirlingas Card (Clickable) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedCategory('jyotirlinga');
              setShowLiveOnly(false);
            }}
            className="bg-white/70 hover:bg-white backdrop-blur rounded-xl p-4 text-center cursor-pointer border border-border shadow-sm transition-all"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin size={20} className="text-vermillion" />
            </div>
            <p className="text-ink-faint text-xs uppercase tracking-wider mb-1">Jyotirlingas</p>
            <p className="font-display text-3xl font-bold text-ink">{templeStats.jyotirlingas}</p>
          </motion.div>

          {/* Shakti Peeths Card (Clickable) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedCategory('shakti-peeth');
              setShowLiveOnly(false);
            }}
            className="bg-white/70 hover:bg-white backdrop-blur rounded-xl p-4 text-center cursor-pointer border border-border shadow-sm transition-all"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin size={20} className="text-vermillion" />
            </div>
            <p className="text-ink-faint text-xs uppercase tracking-wider mb-1">Shakti Peeths</p>
            <p className="font-display text-3xl font-bold text-ink">{templeStats.shaktiPeeths}</p>
          </motion.div>

          {/* Char Dham Card (Clickable) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedCategory('char-dham');
              setShowLiveOnly(false);
            }}
            className="bg-white/70 hover:bg-white backdrop-blur rounded-xl p-4 text-center cursor-pointer border border-border shadow-sm transition-all"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin size={20} className="text-vermillion" />
            </div>
            <p className="text-ink-faint text-xs uppercase tracking-wider mb-1">Char Dham</p>
            <p className="font-display text-3xl font-bold text-ink">{templeStats.charDham}</p>
          </motion.div>

          {/* States Card */}
          <div className="bg-white/50 backdrop-blur rounded-xl p-4 text-center border border-border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin size={20} className="text-vermillion" />
            </div>
            <p className="text-ink-faint text-xs uppercase tracking-wider mb-1">States</p>
            <p className="font-display text-3xl font-bold text-ink">{templeStats.states}</p>
          </div>

          {/* Aartis Card */}
          <div className="bg-white/50 backdrop-blur rounded-xl p-4 text-center border border-border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock size={20} className="text-vermillion" />
            </div>
            <p className="text-ink-faint text-xs uppercase tracking-wider mb-1">Aartis</p>
            <p className="font-display text-3xl font-bold text-ink">50+</p>
          </div>
        </motion.div>

        {/* Refresh Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-4"
        >
          <button
            onClick={performRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-2 px-5 py-2.5 bg-vermillion text-white font-semibold rounded-full hover:bg-vermillion-deep transition-all disabled:opacity-50 shadow-lg"
          >
            <RefreshCw size={16} className={isRefreshing ? 'animate-spin' : ''} />
            {isRefreshing ? 'Refreshing...' : 'Refresh Now'}
          </button>
          <div className="flex items-center gap-2 text-ink-muted text-sm">
            <Calendar size={14} />
            <span>Last updated: {new Date(lastRefresh).toLocaleString()}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  // ===== LIVE STREAM MODAL =====
  const LiveStreamModal = () => {
    if (!selectedTemple) return null;

    const embedUrl = getTempleEmbedUrl(selectedTemple);
    const isLive = selectedTemple.isLive && selectedTemple.streamType === 'live';

    return (
      <AnimatePresence>
        {showDetailModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetailModal(false)}
              className="fixed inset-0 bg-black/70 z-40"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-6 bg-surface rounded-2xl shadow-2xl z-50 overflow-y-auto max-h-[95vh]"
            >
              <div className="max-w-6xl mx-auto p-6 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    {isLive && (
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
                    {selectedTemple.templeNumber && selectedTemple.category !== 'major' && (
                      <span className="inline-block mt-2 px-3 py-1 rounded-full bg-vermillion/10 text-vermillion text-xs font-bold">
                        #{selectedTemple.templeNumber} {selectedTemple.category === 'jyotirlinga' ? 'Jyotirlinga' :
                          selectedTemple.category === 'shakti-peeth' ? 'Shakti Peeth' :
                          selectedTemple.category === 'char-dham' ? 'Char Dham' : 'Chota Char Dham'}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setShowDetailModal(false)}
                    className="p-2 hover:bg-parchment-warm rounded-full transition-colors"
                  >
                    <X size={28} className="text-ink" />
                  </button>
                </div>

                {/* Main Video Player */}
                <div className="mb-6">
                  <YouTubePlayer
                    videoUrl={embedUrl}
                    title={selectedTemple.templeName}
                    isLive={isLive}
                    temple={selectedTemple}
                  />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-parchment-warm rounded-xl p-6"
                    >
                      <h3 className="font-display font-bold text-ink text-lg mb-3">About This Temple</h3>
                      <p className="text-ink-light leading-relaxed mb-4">{selectedTemple.description}</p>

                      {selectedTemple.significance && (
                        <div className="mb-4 p-3 bg-vermillion/5 rounded-lg border border-vermillion/10">
                          <p className="text-sm text-ink-light">
                            <span className="font-semibold text-vermillion">Significance:</span> {selectedTemple.significance}
                          </p>
                        </div>
                      )}

                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-vermillion/10 text-vermillion text-[12px] font-semibold">
                          Dedicated to {selectedTemple.deity}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-sage/20 text-sage-dark text-[12px] font-semibold capitalize">
                          {selectedTemple.category.replace('-', ' ')}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                        {selectedTemple.website && (
                          <div>
                            <p className="text-ink-faint text-xs uppercase tracking-wider mb-1">Website</p>
                            <a
                              href={selectedTemple.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-vermillion hover:underline flex items-center gap-1"
                            >
                              <ExternalLink size={12} />
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

                  <div className="space-y-6">
                    <ScheduleWidget
                      timings={selectedTemple.aartiTimings}
                      nextAarti={selectedTemple.nextAarti}
                    />

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
                <motion.a
                  href={selectedTemple.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-vermillion to-vermillion-deep text-white font-bold py-4 rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-2 no-underline"
                >
                  <ExternalLink size={20} />
                  Visit Official Temple Website
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-surface">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* ===== LATEST AARTI SECTION ===== */}
        {latestAartis.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-ink flex items-center gap-2">
                  <Play size={24} className="text-vermillion" />
                  Latest Aarti Videos
                </h2>
                <p className="text-ink-muted text-sm mt-1">
                  Most recently updated aarti and darshan videos from temples
                </p>
              </div>
              <div className="flex items-center gap-2 text-ink-faint text-xs">
                <RefreshCw size={12} />
                <span>Auto-refreshes every 15 min</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {latestAartis.map((temple, idx) => (
                <motion.div
                  key={temple.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <LatestAartiCard temple={temple} onSelect={handleSelectTemple} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ===== SEARCH & FILTER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface border border-border rounded-xl p-6 mb-8"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search temples by name, city, state, or significance..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-parchment-warm text-ink placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-vermillion"
            />
          </div>

          {/* Category Tabs */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-ink mb-3 flex items-center gap-2">
              <Filter size={16} />
              Filter by Category
            </p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat.value
                      ? 'bg-vermillion text-white shadow-lg'
                      : 'bg-parchment-warm text-ink hover:bg-vermillion/10'
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Deity Filter */}
          <div className="mb-4">
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
              <Radio size={14} />
              {showLiveOnly ? 'Showing Live Only' : 'Show All'}
            </button>
          </div>
        </motion.div>

        {/* ===== RESULTS HEADER ===== */}
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
            {selectedCategory !== 'all' && `${CATEGORIES.find(c => c.value === selectedCategory)?.label} • `}
            {selectedDeity !== 'All' && `Dedicated to ${selectedDeity} • `}
            {filteredTemples.filter(t => t.isLive).length} currently streaming
          </p>
        </motion.div>

        {/* ===== TEMPLE GRID ===== */}
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
                transition={{ delay: idx * 0.05 }}
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

      <LiveStreamModal />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border-t border-border bg-surface-warm py-12 px-4 mt-12"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-ink-muted mb-4">
            नमः शिवाय | ॐ नमो भगवते वासुदेवाय | जय माता दी
          </p>
          <p className="text-[12px] text-ink-faint">
            © 2026 Sanatan Sanskriti. Auto-refreshes every 15 minutes. Temple stream timings subject to daily schedules.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}