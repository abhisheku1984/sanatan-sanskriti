/**
 * devotionalTypes.ts
 * Type definitions for Hindu Devotional Library and Temple Streaming
 */

// ===== DEVOTIONAL LIBRARY TYPES =====

export type ContentCategory = 'vedic' | 'chalisa' | 'stotra' | 'ashtakam' | 'kavach' | 'mantra';
export type Deity = 'Shiva' | 'Vishnu' | 'Devi' | 'Ganesha' | 'Hanuman' | 'Surya' | 'Durga' | 'Lakshmi' | 'Saraswati' | 'Brahma' | 'All';

export interface DevoationalVerse {
  sanskrit: string;
  devanagari: string;
  transliteration: string;
  meaning: string;
  translation: string;
}

export interface DevotionalContent {
  id: string;
  title: string;
  hindiTitle: string;
  deity: Deity;
  category: ContentCategory;
  description: string;
  verses?: DevoationalVerse[];
  audioUrl?: string;
  youtubeVideoId?: string;
  youtubePlaylistId?: string;
  duration?: number; // in minutes
  language: 'sanskrit' | 'hindi' | 'english';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface DevotionalLibraryState {
  allContent: DevotionalContent[];
  filteredContent: DevotionalContent[];
  selectedDeity: Deity;
  selectedCategory: ContentCategory;
  searchQuery: string;
  isLoading: boolean;
  error: string | null;
}

// ===== TEMPLE STREAMING TYPES =====

export type AartiType = 'Mangala' | 'Shringar' | 'Sandhya' | 'Isha' | 'Bhog';

export interface AartiTiming {
  type: AartiType;
  startTime: string; // HH:MM format
  duration: number; // in minutes
  dayOfWeek?: string[]; // Optional: specific days
}

export interface TempleStream {
  id: string;
  templeName: string;
  hindiName: string;
  deity: Deity;
  state: string;
  city: string;
  youtubeChannelId: string;
  youtubeVideoId?: string; // Current live video
  isLive: boolean;
  aartiTimings: AartiTiming[];
  description: string;
  imageUrl?: string;
  latitude?: number;
  longitude?: number;
  website?: string;
  phone?: string;
  address?: string;
  streamStartTime?: Date;
  streamEndTime?: Date;
  nextAarti?: {
    type: AartiType;
    startTime: string;
    hoursUntil: number;
  };
}

export interface TempleStreamingState {
  allTemples: TempleStream[];
  liveTemples: TempleStream[];
  selectedTemple: TempleStream | null;
  selectedDeity: Deity;
  isLoading: boolean;
  error: string | null;
  autoRefreshEnabled: boolean;
}

// ===== YOUTUBE API TYPES =====

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  duration: number;
  views: number;
  uploadDate: Date;
  channelName: string;
}

export interface YouTubePlaylist {
  id: string;
  title: string;
  thumbnail: string;
  videoCount: number;
  channelName: string;
}

// ===== UI COMPONENT TYPES =====

export interface ContentCardProps {
  content: DevotionalContent;
  onSelect: (content: DevotionalContent) => void;
  isSelected: boolean;
}

export interface TempleCardProps {
  temple: TempleStream;
  onSelect: (temple: TempleStream) => void;
  isSelected: boolean;
}

export interface VideoPlayerProps {
  videoId: string;
  title: string;
  autoplay?: boolean;
  loop?: boolean;
}

export interface SearchFilterProps {
  onDeityChange: (deity: Deity) => void;
  onCategoryChange: (category: ContentCategory) => void;
  onSearchChange: (query: string) => void;
  selectedDeity: Deity;
  selectedCategory: ContentCategory;
  searchQuery: string;
}