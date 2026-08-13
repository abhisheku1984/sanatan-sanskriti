/**
 * devotionalTypes.ts
 * Type definitions for Hindu Devotional Library and Temple Streaming
 * UPDATED: Added youtubeChannelId, youtubePlaylistId, latestVideoId,
 *          lastRefreshed, streamType for actual live/recorded aarti videos
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

export type AartiType = 'Mangala' | 'Shringar' | 'Sandhya' | 'Isha' | 'Bhog' | 'Rajbhog' | 'Shayan';

export type TempleCategory = 'jyotirlinga' | 'shakti-peeth' | 'char-dham' | 'chota-char-dham' | 'major' | 'all';

export type StreamType = 'live' | 'recorded' | 'upcoming';

export interface AartiTiming {
  type: AartiType;
  startTime: string; // HH:MM AM/PM format
  duration: number; // in minutes
  dayOfWeek?: string[]; // Optional: specific days
  officialUrl?: string; // Link to official temple website for this aarti
  youtubeVideoId?: string; // Latest aarti video ID for this specific aarti
}

export interface TempleStream {
  id: string;
  templeName: string;
  hindiName: string;
  deity: Deity;
  state: string;
  city: string;

  // YouTube Integration
  youtubeChannelId?: string; // For live_stream embed: youtube.com/embed/live_stream?channel=CHANNEL_ID
  youtubePlaylistId?: string; // For aarti playlists
  youtubeSearchKeywords?: string; // Fallback search keywords
  latestVideoId?: string; // Most recent aarti/darshan video ID
  latestVideoTitle?: string; // Title of latest video
  latestVideoThumbnail?: string; // Thumbnail of latest video
  latestVideoUploadedAt?: string; // ISO date string

  officialWebsite: string;
  isLive: boolean;
  streamType: StreamType;
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

  // Categorization
  category: TempleCategory;
  templeNumber?: number; // For Jyotirlinga (1-12), Shakti Peeth (1-51), etc.
  significance?: string; // Special significance text

  // Refresh metadata
  lastRefreshed: string; // ISO timestamp
  refreshInterval: number; // Minutes between auto-refresh
}

export interface TempleStreamingState {
  allTemples: TempleStream[];
  liveTemples: TempleStream[];
  selectedTemple: TempleStream | null;
  selectedDeity: Deity;
  selectedCategory: TempleCategory;
  searchQuery: string;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
  autoRefreshEnabled: boolean;
  lastGlobalRefresh: string;
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
  videoUrl: string;
  isLive: boolean;
}

export interface YouTubePlaylist {
  id: string;
  title: string;
  thumbnail: string;
  videoCount: number;
  channelName: string;
}

export interface YouTubeChannel {
  id: string;
  title: string;
  thumbnail: string;
  subscriberCount: number;
  videoCount: number;
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
  onCategoryChange: (category: TempleCategory) => void;
  onSearchChange: (query: string) => void;
  selectedDeity: Deity;
  selectedCategory: TempleCategory;
  searchQuery: string;
}