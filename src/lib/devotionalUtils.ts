/**
 * devotionalUtils.ts
 * Utility functions for YouTube integration, API calls, and data management
 */

import { DevotionalContent, TempleStream, YouTubeVideo, YouTubePlaylist } from '../types/devotionalTypes';

// ===== YOUTUBE API UTILITIES =====

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY || 'YOUR_YOUTUBE_API_KEY';
const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

/**
 * Get video details from YouTube
 * @param videoId - YouTube video ID
 * @returns Video details including title, duration, views
 */
export async function getYouTubeVideoDetails(videoId: string): Promise<YouTubeVideo | null> {
  try {
    const response = await fetch(
      `${YOUTUBE_BASE_URL}/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics`
    );

    if (!response.ok) return null;

    const data = await response.json();
    if (!data.items?.[0]) return null;

    const video = data.items[0];

    return {
      id: video.id,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
      duration: parseDuration(video.contentDetails.duration),
      views: parseInt(video.statistics.viewCount) || 0,
      uploadDate: new Date(video.snippet.publishedAt),
      channelName: video.snippet.channelTitle,
      videoUrl: `https://youtube.com/watch?v=${video.id}`,
      isLive: false
    };
  } catch (error) {
    console.error('Error fetching YouTube video:', error);
    return null;
  }
}

/**
 * Get playlist details and videos from YouTube
 * @param playlistId - YouTube playlist ID
 * @param maxResults - Maximum number of videos to fetch (default: 10)
 * @returns Playlist details and video list
 */
export async function getYouTubePlaylistVideos(
  playlistId: string,
  maxResults = 10
): Promise<{ playlist: YouTubePlaylist; videos: YouTubeVideo[] } | null> {
  try {
    // Get playlist details
    const playlistResponse = await fetch(
      `${YOUTUBE_BASE_URL}/playlists?id=${playlistId}&key=${YOUTUBE_API_KEY}&part=snippet,contentDetails`
    );

    if (!playlistResponse.ok) return null;

    const playlistData = await playlistResponse.json();
    if (!playlistData.items?.[0]) return null;

    const playlistItem = playlistData.items[0];
    const playlist: YouTubePlaylist = {
      id: playlistItem.id,
      title: playlistItem.snippet.title,
      thumbnail: playlistItem.snippet.thumbnails.high.url,
      videoCount: playlistItem.contentDetails.itemCount,
      channelName: playlistItem.snippet.channelTitle
    };

    // Get playlist items
    const itemsResponse = await fetch(
      `${YOUTUBE_BASE_URL}/playlistItems?playlistId=${playlistId}&key=${YOUTUBE_API_KEY}&part=snippet&maxResults=${maxResults}`
    );

    if (!itemsResponse.ok) return { playlist, videos: [] };

    const itemsData = await itemsResponse.json();
    const videos: YouTubeVideo[] = itemsData.items?.map((item: any) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      duration: 0, // Would need additional API call to get
      views: 0,
      uploadDate: new Date(item.snippet.publishedAt),
      channelName: item.snippet.channelTitle,
      videoUrl: `https://youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
      isLive: false
    })) || [];

    return { playlist, videos };
  } catch (error) {
    console.error('Error fetching playlist:', error);
    return null;
  }
}

/**
 * Check if a YouTube channel/video is currently live
 * @param channelId - YouTube channel ID
 * @returns True if channel has active live stream
 */
export async function isChannelLive(channelId: string): Promise<boolean> {
  try {
    const response = await fetch(
      `${YOUTUBE_BASE_URL}/search?channelId=${channelId}&key=${YOUTUBE_API_KEY}&part=snippet&type=video&eventType=live&maxResults=1`
    );

    if (!response.ok) return false;

    const data = await response.json();
    return data.items?.length > 0;
  } catch (error) {
    console.error('Error checking channel live status:', error);
    return false;
  }
}

/**
 * Get current live video from a channel
 * @param channelId - YouTube channel ID
 * @returns Current live video ID or null
 */
export async function getChannelLiveVideoId(channelId: string): Promise<string | null> {
  try {
    const response = await fetch(
      `${YOUTUBE_BASE_URL}/search?channelId=${channelId}&key=${YOUTUBE_API_KEY}&part=snippet&type=video&eventType=live&maxResults=1`
    );

    if (!response.ok) return null;

    const data = await response.json();
    return data.items?.[0]?.id?.videoId || null;
  } catch (error) {
    console.error('Error getting live video:', error);
    return null;
  }
}

// ===== HELPER FUNCTIONS =====

/**
 * Parse YouTube duration format (PT1H23M45S) to minutes
 */
export function parseDuration(duration: string): number {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = parseInt(match?.[1] || '0') || 0;
  const minutes = parseInt(match?.[2] || '0') || 0;
  const seconds = parseInt(match?.[3] || '0') || 0;

  return hours * 60 + minutes + Math.ceil(seconds / 60);
}

/**
 * Format duration from minutes to human-readable string
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

/**
 * Get time until next aarti
 */
export function getTimeUntilAarti(startTime: string): number {
  const now = new Date();
  const [hours, minutes] = startTime.split(':').map(Number);

  let aartiTime = new Date();
  aartiTime.setHours(hours, minutes, 0);

  // If time has already passed today, calculate for tomorrow
  if (aartiTime < now) {
    aartiTime.setDate(aartiTime.getDate() + 1);
  }

  return Math.round((aartiTime.getTime() - now.getTime()) / (1000 * 60 * 60));
}

/**
 * Filter temples by deity and live status
 */
export function filterTemples(
  temples: TempleStream[],
  deity?: string,
  liveOnly = false
): TempleStream[] {
  return temples.filter(temple => {
    if (deity && temple.deity !== deity) return false;
    if (liveOnly && !temple.isLive) return false;
    return true;
  });
}

/**
 * Sort temples by next aarti time
 */
export function sortTemplesByNextAarti(temples: TempleStream[]): TempleStream[] {
  return [...temples].sort((a, b) => {
    const timeA = a.nextAarti ? getTimeUntilAarti(a.nextAarti.startTime) : Infinity;
    const timeB = b.nextAarti ? getTimeUntilAarti(b.nextAarti.startTime) : Infinity;
    return timeA - timeB;
  });
}

/**
 * Search content by query
 */
export function searchContent(
  content: DevotionalContent[],
  query: string
): DevotionalContent[] {
  const lowerQuery = query.toLowerCase();

  return content.filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.hindiTitle.includes(query) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    item.deity.toLowerCase().includes(lowerQuery)
  );
}

// ===== DATA VALIDATION =====

/**
 * Validate temple data
 */
export function validateTempleData(temple: TempleStream): boolean {
  return !!(
    temple.id &&
    temple.templeName &&
    temple.deity &&
    temple.state &&
    temple.city &&
    temple.aartiTimings.length > 0
  );
}

/**
 * Validate devotional content data
 */
export function validateContentData(content: DevotionalContent): boolean {
  return !!(
    content.id &&
    content.title &&
    content.deity &&
    content.category &&
    content.description &&
    content.tags.length > 0
  );
}

// ===== CACHING UTILITIES =====

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, { data: any; timestamp: number }>();

/**
 * Get cached data or null if expired
 */
export function getFromCache<T>(key: string): T | null {
  const cached = cache.get(key);
  if (!cached) return null;

  if (Date.now() - cached.timestamp > CACHE_DURATION) {
    cache.delete(key);
    return null;
  }

  return cached.data as T;
}

/**
 * Set data in cache
 */
export function setInCache<T>(key: string, data: T): void {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
}

/**
 * Clear cache
 */
export function clearCache(): void {
  cache.clear();
}

// ===== NOTIFICATION UTILITIES =====

/**
 * Get next aarti across all temples
 */
export function getNextAartiGlobally(temples: TempleStream[]) {
  const allAartis = temples
    .flatMap(temple =>
      temple.nextAarti
        ? [{
            temple,
            ...temple.nextAarti,
            hoursUntil: getTimeUntilAarti(temple.nextAarti.startTime)
          }]
        : []
    )
    .sort((a, b) => a.hoursUntil - b.hoursUntil);

  return allAartis[0] || null;
}

/**
 * Format time for display (e.g., "04:30 AM")
 */
export function formatTime24to12(time24: string): string {
  const [hours, minutes] = time24.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;
  return `${String(hours12).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
}

// ===== EXPORT UTILITIES =====

/**
 * Export content as JSON
 */
export function exportContentAsJSON(content: DevotionalContent[]): string {
  return JSON.stringify(content, null, 2);
}

/**
 * Export temples as CSV
 */
export function exportTemplesAsCSV(temples: TempleStream[]): string {
  const headers = ['Temple Name', 'Hindi Name', 'Deity', 'City', 'State', 'Live', 'Website'];
  const rows = temples.map(temple => [
    temple.templeName,
    temple.hindiName,
    temple.deity,
    temple.city,
    temple.state,
    temple.isLive ? 'Yes' : 'No',
    temple.website || ''
  ]);

  const csv = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  return csv;
}