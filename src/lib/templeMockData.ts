/**
 * templeMockData.ts
 * Mock data for Live Temple Darshan & Aarti Hub
 */

import { TempleStream } from '../types/devotionalTypes';

export const mockTempleStreams: TempleStream[] = [
  {
    id: 'kashi-vishwanath',
    templeName: 'Kashi Vishwanath Temple',
    hindiName: 'काशी विश्वनाथ मंदिर',
    deity: 'Shiva',
    state: 'Uttar Pradesh',
    city: 'Varanasi',
    youtubeChannelId: 'UCKashiVishwanath',
    description: 'The holiest Shiva temple in Varanasi, one of the twelve Jyotirlingas. Experience the divine atmosphere of the eternal city.',
    imageUrl: 'https://images.unsplash.com/photo-1598748159983-4d8b2dd9b8f1?w=400&h=300&fit=crop',
    latitude: 25.3210,
    longitude: 82.9964,
    website: 'https://kashivishwanath.org',
    address: 'Vishwanath Lane, Varanasi, Uttar Pradesh 221001',
    isLive: true,
    aartiTimings: [
      { type: 'Mangala', startTime: '04:30 AM', duration: 20 },
      { type: 'Bhog', startTime: '07:30 AM', duration: 30 },
      { type: 'Sandhya', startTime: '07:00 PM', duration: 20 },
      { type: 'Isha', startTime: '10:00 PM', duration: 15 }
    ],
    nextAarti: {
      type: 'Sandhya',
      startTime: '07:00 PM',
      hoursUntil: 3
    }
  },

  {
    id: 'mahakaleshwar',
    templeName: 'Mahakaleshwar Temple',
    hindiName: 'महाकालेश्वर मंदिर',
    deity: 'Shiva',
    state: 'Madhya Pradesh',
    city: 'Ujjain',
    youtubeChannelId: 'UCMahakaleshwar',
    description: 'One of the twelve Jyotirlingas, where Lord Shiva is worshipped as Mahakal (Lord of Time). Known for its evening aarti.',
    imageUrl: 'https://images.unsplash.com/photo-1596521468535-cd4854cbea3e?w=400&h=300&fit=crop',
    latitude: 23.1815,
    longitude: 75.7633,
    website: 'https://mahakaleshwar.com',
    address: 'Harsiddhi Marg, Ujjain, Madhya Pradesh 456006',
    isLive: true,
    aartiTimings: [
      { type: 'Mangala', startTime: '03:30 AM', duration: 30 },
      { type: 'Shringar', startTime: '08:30 AM', duration: 45 },
      { type: 'Sandhya', startTime: '06:30 PM', duration: 30 },
      { type: 'Isha', startTime: '09:00 PM', duration: 20 }
    ],
    nextAarti: {
      type: 'Mangala',
      startTime: '03:30 AM',
      hoursUntil: 0.5
    }
  },

  {
    id: 'tirupati-balaji',
    templeName: 'Sri Venkateswara Temple',
    hindiName: 'श्री वेंकटेश्वर मंदिर',
    deity: 'Vishnu',
    state: 'Andhra Pradesh',
    city: 'Tirupati',
    youtubeChannelId: 'UCTirupatiBalaji',
    description: 'The most visited temple in India, dedicated to Lord Venkateswara (Balaji). Experience the divine presence on the sacred Tirupati hills.',
    imageUrl: 'https://images.unsplash.com/photo-1599906943923-ae1300170f5e?w=400&h=300&fit=crop',
    latitude: 13.1827,
    longitude: 79.1335,
    website: 'https://tirupatibalaji.org',
    address: 'Sri Venkateswara Temple, Tirupati, Andhra Pradesh 517507',
    isLive: true,
    aartiTimings: [
      { type: 'Mangala', startTime: '03:30 AM', duration: 25 },
      { type: 'Shringar', startTime: '07:00 AM', duration: 40 },
      { type: 'Bhog', startTime: '12:30 PM', duration: 35 },
      { type: 'Sandhya', startTime: '06:30 PM', duration: 30 }
    ],
    nextAarti: {
      type: 'Bhog',
      startTime: '12:30 PM',
      hoursUntil: 2
    }
  },

  {
    id: 'siddhivinayak',
    templeName: 'Siddhivinayak Temple',
    hindiName: 'सिद्धिविनायक मंदिर',
    deity: 'Ganesha',
    state: 'Maharashtra',
    city: 'Mumbai',
    youtubeChannelId: 'UCSiddhivinayak',
    description: 'One of the most sacred temples dedicated to Lord Ganesha in Mumbai. A place of immense spiritual power and blessings.',
    imageUrl: 'https://images.unsplash.com/photo-1599906943937-6e88a2a6eb5f?w=400&h=300&fit=crop',
    latitude: 19.0176,
    longitude: 72.8292,
    website: 'https://siddhivinayak.org',
    address: 'Prabhat Road, Prabhadevi, Mumbai, Maharashtra 400025',
    isLive: false,
    aartiTimings: [
      { type: 'Mangala', startTime: '05:30 AM', duration: 20 },
      { type: 'Shringar', startTime: '08:00 AM', duration: 30 },
      { type: 'Sandhya', startTime: '06:00 PM', duration: 25 }
    ]
  },

  {
    id: 'meenakshi-temple',
    templeName: 'Meenakshi Amman Temple',
    hindiName: 'मीनाक्षी अम्मन मंदिर',
    deity: 'Devi',
    state: 'Tamil Nadu',
    city: 'Madurai',
    youtubeChannelId: 'UCMeenakshi',
    description: 'One of the oldest and largest temples in India, dedicated to Goddess Meenakshi and Lord Sundareswarar.',
    imageUrl: 'https://images.unsplash.com/photo-1599907009291-8a29e4ab4f1c?w=400&h=300&fit=crop',
    latitude: 9.9252,
    longitude: 78.1198,
    website: 'https://meenakshitemple.org',
    address: 'Meenakshi Amman Temple, Madurai, Tamil Nadu 625001',
    isLive: true,
    aartiTimings: [
      { type: 'Mangala', startTime: '04:00 AM', duration: 30 },
      { type: 'Shringar', startTime: '08:00 AM', duration: 45 },
      { type: 'Bhog', startTime: '01:00 PM', duration: 40 },
      { type: 'Sandhya', startTime: '05:00 PM', duration: 35 }
    ],
    nextAarti: {
      type: 'Shringar',
      startTime: '08:00 AM',
      hoursUntil: 1.5
    }
  },

  {
    id: 'jagannath-puri',
    templeName: 'Jagannath Temple',
    hindiName: 'जगन्नाथ मंदिर',
    deity: 'Vishnu',
    state: 'Odisha',
    city: 'Puri',
    youtubeChannelId: 'UCJagannath',
    description: 'One of the four sacred Char Dham pilgrimage sites, home to Lord Jagannath. Experience the divine chariot festival.',
    imageUrl: 'https://images.unsplash.com/photo-1599907009294-8f39e1d5b8e8?w=400&h=300&fit=crop',
    latitude: 19.8047,
    longitude: 85.8312,
    website: 'https://jagannathtemple.org',
    address: 'Jagannath Temple Road, Puri, Odisha 752001',
    isLive: true,
    aartiTimings: [
      { type: 'Mangala', startTime: '04:30 AM', duration: 25 },
      { type: 'Shringar', startTime: '07:30 AM', duration: 40 },
      { type: 'Bhog', startTime: '01:00 PM', duration: 30 },
      { type: 'Sandhya', startTime: '06:00 PM', duration: 25 }
    ],
    nextAarti: {
      type: 'Sandhya',
      startTime: '06:00 PM',
      hoursUntil: 4
    }
  },

  {
    id: 'vaishno-devi',
    templeName: 'Vaishno Devi Temple',
    hindiName: 'वैष्णो देवी मंदिर',
    deity: 'Devi',
    state: 'Jammu & Kashmir',
    city: 'Katra',
    youtubeChannelId: 'UCVaishnoDevi',
    description: 'One of the holiest pilgrimage sites, dedicated to Goddess Vaishno Devi. Located on the Trikuta Mountains.',
    imageUrl: 'https://images.unsplash.com/photo-1599907009295-2f7e7a92c8f6?w=400&h=300&fit=crop',
    latitude: 32.9535,
    longitude: 75.3185,
    website: 'https://vaishnodevi.org',
    address: 'Vaishno Devi Shrine, Katra, Jammu & Kashmir 182144',
    isLive: false,
    aartiTimings: [
      { type: 'Mangala', startTime: '05:00 AM', duration: 20 },
      { type: 'Sandhya', startTime: '05:30 PM', duration: 20 }
    ]
  },

  {
    id: 'golden-temple',
    templeName: 'Golden Temple',
    hindiName: 'स्वर्ण मंदिर',
    deity: 'All',
    state: 'Punjab',
    city: 'Amritsar',
    youtubeChannelId: 'UCGoldenTemple',
    description: 'The holiest Gurdwara and one of the most iconic temples in India, a symbol of divine grace and devotion.',
    imageUrl: 'https://images.unsplash.com/photo-1599907009296-2d7c7a6c0c7f?w=400&h=300&fit=crop',
    latitude: 31.6200,
    longitude: 74.8765,
    website: 'https://goldentemple.org',
    address: 'Golden Temple, Amritsar, Punjab 143006',
    isLive: true,
    aartiTimings: [
      { type: 'Mangala', startTime: '04:00 AM', duration: 30 },
      { type: 'Sandhya', startTime: '04:30 PM', duration: 30 }
    ],
    nextAarti: {
      type: 'Sandhya',
      startTime: '04:30 PM',
      hoursUntil: 2.5
    }
  },

  {
    id: 'somnath-temple',
    templeName: 'Somnath Temple',
    hindiName: 'सोमनाथ मंदिर',
    deity: 'Shiva',
    state: 'Gujarat',
    city: 'Gir Somnath',
    youtubeChannelId: 'UCSomnath',
    description: 'The first of the twelve Jyotirlingas, located where the moon worshipped Lord Shiva.',
    imageUrl: 'https://images.unsplash.com/photo-1599907009297-2d7c7a6c0c8g?w=400&h=300&fit=crop',
    latitude: 20.8864,
    longitude: 70.4106,
    website: 'https://somnathtemple.org',
    address: 'Somnath Temple Road, Gir Somnath, Gujarat 362268',
    isLive: true,
    aartiTimings: [
      { type: 'Mangala', startTime: '05:00 AM', duration: 25 },
      { type: 'Sandhya', startTime: '06:30 PM', duration: 25 }
    ],
    nextAarti: {
      type: 'Mangala',
      startTime: '05:00 AM',
      hoursUntil: 1
    }
  }
];