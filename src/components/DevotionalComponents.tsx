/**
 * DevotionalComponents.tsx
 * Reusable components for Hindu Devotional Library and Temple Streaming
 */

import { motion } from 'framer-motion';
import { Search, Filter, Volume2, Play, MapPin, Clock, Flame, Eye } from 'lucide-react';
import { DevotionalContent, TempleStream, ContentCardProps, TempleCardProps, VideoPlayerProps, Deity, ContentCategory } from '../types/devotionalTypes';

// ===== SEARCH & FILTER COMPONENT =====

interface SearchFilterProps {
  onDeityChange: (deity: Deity) => void;
  onCategoryChange?: (category: ContentCategory) => void;
  onSearchChange: (query: string) => void;
  selectedDeity: Deity;
  selectedCategory?: ContentCategory;
  searchQuery: string;
  deities: Deity[];
  categories?: ContentCategory[];
}

export function SearchFilter({
  onDeityChange,
  onCategoryChange,
  onSearchChange,
  selectedDeity,
  selectedCategory,
  searchQuery,
  deities,
  categories = []
}: SearchFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface border border-border rounded-xl p-6 mb-8"
    >
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 text-ink-muted" size={20} />
        <input
          type="text"
          placeholder="Search mantras, chalisa, stotras..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-parchment-warm text-ink placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-vermillion"
        />
      </div>

      {/* Filter Buttons */}
      <div className="space-y-4">
        {/* Deity Filter */}
        <div>
          <p className="text-sm font-semibold text-ink mb-2 flex items-center gap-2">
            <Filter size={14} /> Filter by Deity
          </p>
          <div className="flex flex-wrap gap-2">
            {deities.map(deity => (
              <button
                key={deity}
                onClick={() => onDeityChange(deity)}
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

        {/* Category Filter (for Devotional Library) */}
        {categories.length > 0 && (
          <div>
            <p className="text-sm font-semibold text-ink mb-2 flex items-center gap-2">
              <Filter size={14} /> Filter by Category
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => onCategoryChange?.(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-turmeric-deep text-white shadow-lg'
                      : 'bg-parchment-warm text-ink hover:bg-turmeric/10'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ===== DEVOTIONAL CONTENT CARD =====

export function DevotionalContentCard({
  content,
  onSelect,
  isSelected
}: ContentCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(content)}
      className={`rounded-xl border-2 p-6 cursor-pointer transition-all ${
        isSelected
          ? 'border-vermillion bg-vermillion/5 shadow-lg'
          : 'border-border bg-surface hover:border-vermillion/50'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display font-bold text-ink text-lg">{content.title}</h3>
          <p className="font-devanagari text-vermillion text-sm">{content.hindiTitle}</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-vermillion/10 text-vermillion text-[11px] font-semibold uppercase tracking-wider">
          {content.category}
        </span>
      </div>

      {/* Deity Badge */}
      <div className="mb-3">
        <p className="text-[12px] text-ink-faint uppercase tracking-widest">Dedicated to</p>
        <p className="text-ink font-semibold">{content.deity}</p>
      </div>

      {/* Description */}
      <p className="text-ink-light text-sm mb-4 line-clamp-2">{content.description}</p>

      {/* Meta Information */}
      <div className="flex items-center gap-4 mb-4 text-[12px] text-ink-muted">
        {content.duration && (
          <span className="flex items-center gap-1">
            <Clock size={12} /> {content.duration} min
          </span>
        )}
        <span className="flex items-center gap-1 capitalize">
          {content.difficulty}
        </span>
        {content.audioUrl && (
          <span className="flex items-center gap-1">
            <Volume2 size={12} /> Audio
          </span>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {content.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[10px] px-2 py-1 rounded bg-parchment-warm text-ink-muted">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ===== TEMPLE CARD WITH LIVE INDICATOR =====

export function TempleCard({
  temple,
  onSelect,
  isSelected
}: TempleCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(temple)}
      className={`rounded-xl border-2 overflow-hidden cursor-pointer transition-all ${
        isSelected
          ? 'border-vermillion shadow-xl'
          : 'border-border hover:border-vermillion/50'
      }`}
    >
      {/* Image Container */}
      <div className="relative h-40 bg-parchment-warm overflow-hidden">
        {temple.imageUrl ? (
          <img src={temple.imageUrl} alt={temple.templeName} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-ink-faint">
            <MapPin size={48} className="opacity-20" />
          </div>
        )}

        {/* Live Indicator */}
        {temple.isLive && (
          <div className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded-full text-[12px] font-bold animate-pulse">
            <Flame size={12} className="animate-bounce" />
            LIVE
          </div>
        )}

        {/* Deity Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 rounded-full bg-vermillion text-white text-[11px] font-semibold">
            {temple.deity}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-surface">
        <h3 className="font-display font-bold text-ink text-lg">{temple.templeName}</h3>
        <p className="font-devanagari text-vermillion text-sm mb-2">{temple.hindiName}</p>

        {/* Location */}
        <p className="text-[12px] text-ink-muted mb-3 flex items-center gap-1">
          <MapPin size={12} /> {temple.city}, {temple.state}
        </p>

        {/* Next Aarti */}
        {temple.nextAarti && (
          <div className="bg-parchment-warm rounded-lg p-3 mb-3">
            <p className="text-[11px] text-ink-faint uppercase tracking-wider mb-1">Next Aarti</p>
            <p className="text-sm font-semibold text-vermillion">
              {temple.nextAarti.type} Aarti {temple.nextAarti.startTime}
            </p>
            <p className="text-[11px] text-ink-muted">in {temple.nextAarti.hoursUntil}h</p>
          </div>
        )}

        {/* Description */}
        <p className="text-[12px] text-ink-light line-clamp-2">{temple.description}</p>
      </div>
    </motion.div>
  );
}

// ===== YOUTUBE VIDEO PLAYER COMPONENT =====

export function YouTubePlayer({
  videoId,
  title,
  autoplay = false,
  loop = false
}: VideoPlayerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full rounded-xl overflow-hidden shadow-lg bg-black"
    >
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full"
      />
    </motion.div>
  );
}

// ===== VERSE DISPLAY COMPONENT =====

interface VerseDisplayProps {
  sanskrit: string;
  devanagari: string;
  transliteration: string;
  meaning: string;
  translation: string;
  audioUrl?: string;
}

export function VerseDisplay({
  sanskrit,
  devanagari,
  transliteration,
  meaning,
  translation,
  audioUrl
}: VerseDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-parchment-warm border border-border rounded-xl p-6 space-y-4"
    >
      {/* Sanskrit */}
      <div>
        <p className="text-[11px] text-ink-faint uppercase tracking-widest mb-1">Sanskrit</p>
        <p className="font-devanagari text-ink text-lg leading-relaxed">{devanagari}</p>
        <p className="text-ink-muted text-sm italic mt-1">{transliteration}</p>
      </div>

      {/* Meaning */}
      <div className="border-t border-border/50 pt-4">
        <p className="text-[11px] text-ink-faint uppercase tracking-widest mb-1">Meaning</p>
        <p className="text-ink leading-relaxed">{meaning}</p>
      </div>

      {/* Translation */}
      <div className="border-t border-border/50 pt-4">
        <p className="text-[11px] text-ink-faint uppercase tracking-widest mb-1">English Translation</p>
        <p className="text-ink-light leading-relaxed">{translation}</p>
      </div>

      {/* Audio Player */}
      {audioUrl && (
        <div className="border-t border-border/50 pt-4">
          <audio controls className="w-full">
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </motion.div>
  );
}

// ===== SCHEDULE/TIMINGS WIDGET =====

interface ScheduleWidgetProps {
  timings: Array<{ type: string; startTime: string; duration: number }>;
  nextAarti?: { type: string; startTime: string; hoursUntil: number };
}

export function ScheduleWidget({ timings, nextAarti }: ScheduleWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface border border-border rounded-xl p-6"
    >
      <h3 className="font-display font-bold text-ink text-lg mb-4 flex items-center gap-2">
        <Clock size={20} className="text-vermillion" />
        Daily Aarti Schedule
      </h3>

      {/* Next Aarti Highlight */}
      {nextAarti && (
        <div className="bg-vermillion/10 border-l-4 border-vermillion rounded-lg p-4 mb-6">
          <p className="text-[11px] text-vermillion uppercase tracking-wider font-semibold mb-1">Next Live Aarti</p>
          <p className="text-ink font-bold text-lg">{nextAarti.type} Aarti</p>
          <p className="text-vermillion text-sm">{nextAarti.startTime}</p>
          <p className="text-ink-muted text-xs mt-1">Starts in {nextAarti.hoursUntil} hours</p>
        </div>
      )}

      {/* All Timings */}
      <div className="space-y-3">
        {timings.map((timing, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-parchment-warm">
            <div>
              <p className="font-semibold text-ink">{timing.type}</p>
              <p className="text-[12px] text-ink-muted">{timing.duration} minutes</p>
            </div>
            <p className="text-vermillion font-bold">{timing.startTime}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ===== STATS BADGE =====

export function StatsBadge({ label, value, icon: Icon }: { label: string; value: string | number; icon: any }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-parchment-warm rounded-lg">
      <Icon className="text-vermillion" size={24} />
      <p className="text-[12px] text-ink-faint uppercase tracking-widest">{label}</p>
      <p className="font-bold text-ink text-lg">{value}</p>
    </div>
  );
}