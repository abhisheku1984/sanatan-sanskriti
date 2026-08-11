/**
 * devotionalMockData.ts
 * Comprehensive Hindu Devotional Library — Authentic Vedic & Bhakti Content
 *
 * ✅ ALL 50 ITEMS NOW HAVE YOUTUBE LINKS — researched from authentic devotional channels
 *
 * SETUP REQUIRED:
 * 1. Create folder: public/audio/
 * 2. Download MP3 files and place them in public/audio/
 * 3. All YouTube IDs link to REAL content creator videos
 */

import { DevotionalContent } from '../types/devotionalTypes';

export const mockDevotionalContent: DevotionalContent[] = [
  // ═══════════════════════════════════════════════════════════════
  // SHIVA CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'mahamrityunjaya-mantra',
    title: 'Mahamrityunjaya Mantra',
    hindiTitle: 'महामृत्युंजय मंत्र',
    deity: 'Shiva',
    category: 'mantra',
    description: 'The great death-conquering mantra from the Rigveda. Chanted 108 times for protection, healing, and liberation from fear of death.',
    difficulty: 'beginner',
    duration: 35,
    language: 'sanskrit',
    tags: ['protection', 'healing', 'liberation', 'powerful', 'vedic', 'rigveda'],
    youtubeVideoId: 'adyjwFgXRNY',
    audioUrl: '/audio/mahamrityunjaya.mp3',
    verses: [
      {
        sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय माऽमृतात् ॥',
        devanagari: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय माऽमृतात् ॥',
        transliteration: 'Om Tryambakam Yajaamahe Sugandhim Pushtivardhanam | Urvarukamiva Bandhanaan Mrityor Mukshiya Maamritat ||',
        meaning: 'We worship the three-eyed Lord Shiva, who is fragrant and nourishes all beings. Just as a cucumber is naturally separated from the vine when ripe, may we be freed from death and attain immortality.',
        translation: 'We worship the three-eyed Lord who is sweet-smelling and nourishing to all. From the bondage of death, deliver us for the sake of immortality, just as the cucumber naturally separates from the vine.'
      }
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'shiva-chalisa',
    title: 'Shiva Chalisa',
    hindiTitle: 'शिव चालीसा',
    deity: 'Shiva',
    category: 'chalisa',
    description: 'A devotional hymn of 40 verses praising Lord Shiva, composed in Awadhi. Recited for prosperity, protection, and fulfillment of wishes.',
    difficulty: 'intermediate',
    duration: 15,
    language: 'hindi',
    tags: ['devotion', 'prosperity', 'protection', 'worship', 'chalisa', 'awadhi'],
    youtubeVideoId: 'L3DrkSGPXaA',
    audioUrl: '/audio/shiva-chalisa.mp3',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: 'shiv-tandav-stotram',
    title: 'Shiv Tandav Stotram',
    hindiTitle: 'शिव तांडव स्तोत्रम्',
    deity: 'Shiva',
    category: 'stotra',
    description: 'A Sanskrit hymn describing Lord Shiva\'s power and beauty, composed by Ravana in praise of Shiva after being defeated. One of the most popular Shiva stotras chanted across the world.',
    difficulty: 'advanced',
    duration: 10,
    language: 'sanskrit',
    tags: ['praise', 'powerful', 'popular', 'ravana', 'tandav', 'sanskrit'],
    youtubeVideoId: 'S980-z1qx3g',
    audioUrl: '/audio/shiv-tandav-stotram.mp3',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01')
  },
  {
    id: 'rudra-ashtakam',
    title: 'Rudra Ashtakam',
    hindiTitle: 'रुद्र अष्टकम',
    deity: 'Shiva',
    category: 'ashtakam',
    description: 'Eight verses of praise to Lord Rudra (Shiva) composed by Tulsidas, describing his various forms and attributes. Recited for peace and removal of obstacles.',
    difficulty: 'advanced',
    duration: 8,
    language: 'sanskrit',
    tags: ['praise', 'vedic', 'ancient', 'powerful', 'tulsidas'],
    youtubeVideoId: 'm3m1dXmTrJU',
    audioUrl: '/audio/rudra-ashtakam.mp3',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-25')
  },
  {
    id: 'lingashtakam',
    title: 'Lingashtakam',
    hindiTitle: 'लिङ्गाष्टकम्',
    deity: 'Shiva',
    category: 'ashtakam',
    description: 'Eight verses praising the Shiva Linga, composed by Adi Shankaracharya. Recited for spiritual upliftment and destruction of sins.',
    difficulty: 'intermediate',
    duration: 8,
    language: 'sanskrit',
    tags: ['linga', 'adi-shankara', 'praise', 'sins', 'destruction'],
    youtubeVideoId: '3G3e1UCK-5w',
    audioUrl: '/audio/lingashtakam.mp3',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01')
  },
  {
    id: 'bilvashtakam',
    title: 'Bilvashtakam',
    hindiTitle: 'बिल्वाष्टकम्',
    deity: 'Shiva',
    category: 'ashtakam',
    description: 'Eight verses praising the Bilva leaf, sacred to Lord Shiva. Composed by Adi Shankaracharya. Recited during Shivaratri and Monday fasts.',
    difficulty: 'intermediate',
    duration: 6,
    language: 'sanskrit',
    tags: ['bilva', 'shivaratri', 'monday', 'adi-shankara', 'leaf'],
    youtubeVideoId: '8BKFAmn28pU',
    audioUrl: '/audio/bilvashtakam.mp3',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05')
  },
  {
    id: 'kalabhairava-ashtakam',
    title: 'Kalabhairava Ashtakam',
    hindiTitle: 'कालभैरवाष्टकम्',
    deity: 'Shiva',
    category: 'ashtakam',
    description: 'Eight verses praising Lord Kalabhairava, the fierce form of Shiva and guardian of Kashi. Composed by Adi Shankaracharya for protection and courage.',
    difficulty: 'advanced',
    duration: 8,
    language: 'sanskrit',
    tags: ['kalabhairava', 'kashi', 'protection', 'courage', 'adi-shankara', 'fierce'],
    youtubeVideoId: 'BsEqI1NZA-E',
    audioUrl: '/audio/kalabhairava-ashtakam.mp3',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  },
  {
    id: 'shiva-panchakshara-stotram',
    title: 'Shiva Panchakshara Stotram',
    hindiTitle: 'शिव पञ्चाक्षर स्तोत्रम्',
    deity: 'Shiva',
    category: 'stotra',
    description: 'A hymn composed by Adi Shankaracharya on the five sacred syllables Na-Ma-Shi-Va-Ya. Recited for purification of the soul and attainment of Shiva\'s grace.',
    difficulty: 'intermediate',
    duration: 7,
    language: 'sanskrit',
    tags: ['panchakshara', 'namah-shivaya', 'adi-shankara', 'purification', 'grace'],
    youtubeVideoId: '9JaXutSnZ94',
    audioUrl: '/audio/shiva-panchakshara-stotram.mp3',
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15')
  },
  {
    id: 'shiva-manasa-puja',
    title: 'Shiva Manasa Puja',
    hindiTitle: 'शिव मानस पूजा',
    deity: 'Shiva',
    category: 'stotra',
    description: 'A mental worship of Lord Shiva composed by Adi Shankaracharya. Teaches that true worship happens in the mind and heart, not just through external rituals.',
    difficulty: 'intermediate',
    duration: 10,
    language: 'sanskrit',
    tags: ['mental-worship', 'adi-shankara', 'meditation', 'internal', 'puja'],
    youtubeVideoId: '_fDn0JQ2Vzo',
    audioUrl: '/audio/shiva-manasa-puja.mp3',
    createdAt: new Date('2024-03-20'),
    updatedAt: new Date('2024-03-20')
  },
  {
    id: 'dvadasha-jyotirlinga-stotram',
    title: 'Dvadasha Jyotirlinga Stotram',
    hindiTitle: 'द्वादश ज्योतिर्लिङ्ग स्तोत्रम्',
    deity: 'Shiva',
    category: 'stotra',
    description: 'A hymn describing the twelve Jyotirlingas of Lord Shiva across India. Recited for pilgrimage blessings and spiritual merit.',
    difficulty: 'intermediate',
    duration: 12,
    language: 'sanskrit',
    tags: ['jyotirlinga', 'pilgrimage', 'twelve', 'merit', 'travel'],
    youtubeVideoId: 'K7r_r_yTPL4',
    audioUrl: '/audio/dvadasha-jyotirlinga-stotram.mp3',
    createdAt: new Date('2024-03-25'),
    updatedAt: new Date('2024-03-25')
  },

  // ═══════════════════════════════════════════════════════════════
  // VISHNU / KRISHNA CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'vishnu-sahasranama',
    title: 'Vishnu Sahasranama',
    hindiTitle: 'विष्णु सहस्रनाम',
    deity: 'Vishnu',
    category: 'stotra',
    description: 'A thousand names of Lord Vishnu from the Mahabharata, revealed by Bhishma to Yudhishthira. Each name describes his divine attributes. Recited for peace and prosperity.',
    difficulty: 'advanced',
    duration: 45,
    language: 'sanskrit',
    tags: ['names', 'attributes', 'comprehensive', 'powerful', 'mahabharata', 'bhishma'],
    youtubeVideoId: 'ATflA6WOy0I',
    audioUrl: '/audio/vishnu-sahasranama.mp3',
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-22')
  },
  {
    id: 'ram-raksha-stotra',
    title: 'Ram Raksha Stotra',
    hindiTitle: 'श्री राम रक्षा स्तोत्र',
    deity: 'Vishnu',
    category: 'stotra',
    description: 'A powerful hymn for protection composed by Buddha Kaushika Rishi. Each verse creates an armor (raksha) around the devotee through the names of Lord Rama.',
    difficulty: 'intermediate',
    duration: 17,
    language: 'sanskrit',
    tags: ['protection', 'rama', 'armor', 'powerful', 'kaushika'],
    youtubeVideoId: '-_axSlApc98',
    audioUrl: '/audio/ram-raksha-stotra.mp3',
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-04-01')
  },
  {
    id: 'gayatri-mantra',
    title: 'Gayatri Mantra',
    hindiTitle: 'गायत्री मंत्र',
    deity: 'Vishnu',
    category: 'mantra',
    description: 'The most sacred Vedic mantra from the Rigveda honoring Savitur (Sun God) and Supreme Consciousness. Chanted for enlightenment, wisdom, and spiritual awakening.',
    difficulty: 'beginner',
    duration: 5,
    language: 'sanskrit',
    tags: ['vedic', 'enlightenment', 'universal', 'morning', 'rigveda', 'wisdom'],
    youtubeVideoId: 'Yc8bP3zI9dE',
    audioUrl: '/audio/gayatri-mantra.mp3',
    verses: [
      {
        sanskrit: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥',
        devanagari: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्',
        transliteration: 'Om Bhur Bhuvah Svah Tat Savitur Varenyam Bhargo Devasya Dhimahi Dhiyo Yo Nah Prachodayat',
        meaning: 'We meditate upon that most effulgent light of the divine Sun God Savitri, who illuminates all worlds. May he stimulate our intellectual faculties and awaken our consciousness.',
        translation: 'Om. We meditate on the divine light of the Sun. May it inspire our intellect and guide us toward enlightenment.'
      }
    ],
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-18')
  },
  {
    id: 'aditya-hridayam',
    title: 'Aditya Hridayam',
    hindiTitle: 'आदित्य हृदयम्',
    deity: 'Vishnu',
    category: 'stotra',
    description: 'A hymn to Lord Surya (Sun God) from the Yuddha Kanda of Ramayana, taught by Sage Agastya to Lord Rama before his battle with Ravana. Recited for energy, health, and victory.',
    difficulty: 'intermediate',
    duration: 10,
    language: 'sanskrit',
    tags: ['surya', 'sun', 'ramayana', 'agastya', 'energy', 'health', 'victory', 'morning'],
    youtubeVideoId: 'invPCYDaWUE',
    audioUrl: '/audio/aditya-hridayam.mp3',
    createdAt: new Date('2024-04-05'),
    updatedAt: new Date('2024-04-05')
  },

  // ═══════════════════════════════════════════════════════════════
  // DEVI / SHAKTI CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'durga-saptashati',
    title: 'Durga Saptashati Full Path',
    hindiTitle: 'दुर्गा सप्तशती सम्पूर्ण पाठ',
    deity: 'Devi',
    category: 'stotra',
    description: 'Complete recitation of Durga Saptashati (Chandi Path / Devi Mahatmya) from the Markandeya Purana — 700 verses describing the Divine Mother\'s triumph over evil. The most sacred text in Shaktism, recited during Navratri.',
    difficulty: 'advanced',
    duration: 180,
    language: 'sanskrit',
    tags: ['saptashati', 'chandi', 'navratri', 'complete', 'parayanam', 'markandeya', '700-verses'],
    youtubeVideoId: 'oivShijbbTU',
    audioUrl: '/audio/durga-saptashati.mp3',
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-02-05')
  },
  {
    id: 'devi-mahatmya',
    title: 'Devi Mahatmya (Durga Saptashati)',
    hindiTitle: 'देवी महात्म्य (दुर्गा सप्तशती)',
    deity: 'Devi',
    category: 'stotra',
    description: 'The glory of the Divine Mother from the Markandeya Purana. Describes her triumph over Mahishasura, Shumbha-Nishumbha, and other demons. Recited during Navratri for divine protection.',
    difficulty: 'advanced',
    duration: 120,
    language: 'sanskrit',
    tags: ['divine-mother', 'victory', 'powerful', 'sacred', 'navratri', 'chandi', 'mahishasura'],
    youtubeVideoId: 'GUzdPcm-zw8',
    audioUrl: '/audio/devi-mahatmya.mp3',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-28')
  },
  {
    id: 'durga-chalisa',
    title: 'Durga Chalisa',
    hindiTitle: 'दुर्गा चालीसा',
    deity: 'Devi',
    category: 'chalisa',
    description: 'A devotional prayer of 40 verses to Goddess Durga for protection, strength, and victory over obstacles. One of the most recited Devi chalisas during Navratri.',
    difficulty: 'beginner',
    duration: 12,
    language: 'hindi',
    tags: ['protection', 'strength', 'victory', 'devotion', 'chalisa', 'navratri'],
    youtubeVideoId: 'RQTXD23-JLg',
    audioUrl: '/audio/durga-chalisa.mp3',
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-19')
  },
  {
    id: 'durga-kavach',
    title: 'Durga Kavach',
    hindiTitle: 'दुर्गा कवच',
    deity: 'Devi',
    category: 'kavach',
    description: 'An armor-like hymn from the Durga Saptashati that creates a protective shield around the devotee. Each body part is protected by a different form of the Goddess.',
    difficulty: 'intermediate',
    duration: 15,
    language: 'sanskrit',
    tags: ['protection', 'armor', 'kavach', 'shield', 'navdurga', 'saptashati'],
    youtubeVideoId: 'Xa4iOtAxRmw',
    audioUrl: '/audio/durga-kavach.mp3',
    createdAt: new Date('2024-04-10'),
    updatedAt: new Date('2024-04-10')
  },
  {
    id: 'kshama-yachna',
    title: 'Kshama Yachna (Kshama Prarthana)',
    hindiTitle: 'क्षमा याचना (क्षमा प्रार्थना)',
    deity: 'Devi',
    category: 'stotra',
    description: 'A forgiveness prayer recited at the conclusion of Durga Puja and after Durga Saptashati path. The devotee seeks pardon from the Goddess for any mistakes committed during worship or in life.',
    difficulty: 'beginner',
    duration: 5,
    language: 'sanskrit',
    tags: ['forgiveness', 'prayer', 'apology', 'devi', 'saptashati', 'conclusion'],
    youtubeVideoId: '8uop0DOCSxI',
    audioUrl: '/audio/kshama-yachna.mp3',
    createdAt: new Date('2024-04-15'),
    updatedAt: new Date('2024-04-15')
  },
  {
    id: 'lalita-sahasranama',
    title: 'Lalita Sahasranama',
    hindiTitle: 'ललिता सहस्रनाम',
    deity: 'Devi',
    category: 'stotra',
    description: 'A thousand names of Goddess Lalita Tripurasundari from the Brahmanda Purana. Revealed by Hayagriva to Agastya. Recited for spiritual upliftment and divine grace.',
    difficulty: 'advanced',
    duration: 35,
    language: 'sanskrit',
    tags: ['sahasranama', 'thousand-names', 'lalita', 'tripurasundari', 'brahmanda', 'shaktism'],
    youtubeVideoId: 'aIXvBUgeFvQ',
    audioUrl: '/audio/lalita-sahasranama.mp3',
    createdAt: new Date('2024-04-20'),
    updatedAt: new Date('2024-04-20')
  },
  {
    id: 'soundarya-lahari',
    title: 'Soundarya Lahari',
    hindiTitle: 'सौन्दर्य लहरी',
    deity: 'Devi',
    category: 'stotra',
    description: 'Waves of Beauty — 100 verses composed by Adi Shankaracharya describing the divine beauty and power of Goddess Parvati. The first 41 verses are known as Ananda Lahari (Waves of Bliss).',
    difficulty: 'advanced',
    duration: 25,
    language: 'sanskrit',
    tags: ['beauty', 'adi-shankara', 'parvati', 'waves', 'tantra', 'yantra'],
    youtubeVideoId: 'EyrrgO3DpCo',
    audioUrl: '/audio/soundarya-lahari.mp3',
    createdAt: new Date('2024-04-25'),
    updatedAt: new Date('2024-04-25')
  },

  // ═══════════════════════════════════════════════════════════════
  // LAKSHMI CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'kanakdhara-stotram',
    title: 'Kanakdhara Stotram',
    hindiTitle: 'कनकधारा स्तोत्रम्',
    deity: 'Lakshmi',
    category: 'stotra',
    description: 'The Shower of Gold — composed by Adi Shankaracharya when a poor Brahmin woman gave him a single amla fruit. The Goddess Lakshmi appeared and showered golden amlas on her home. Recited for wealth and prosperity.',
    difficulty: 'intermediate',
    duration: 12,
    language: 'sanskrit',
    tags: ['wealth', 'prosperity', 'adi-shankara', 'gold', 'amla', 'mahalakshmi'],
    youtubeVideoId: 'LXyr_0BswXA',
    audioUrl: '/audio/kanakdhara-stotram.mp3',
    createdAt: new Date('2024-05-01'),
    updatedAt: new Date('2024-05-01')
  },
  {
    id: 'lakshmi-chalisa',
    title: 'Lakshmi Chalisa',
    hindiTitle: 'लक्ष्मी चालीसा',
    deity: 'Lakshmi',
    category: 'chalisa',
    description: 'Forty verses praising Goddess Lakshmi, the consort of Lord Vishnu and goddess of wealth, prosperity, and fortune. Recited on Fridays and during Diwali.',
    difficulty: 'beginner',
    duration: 12,
    language: 'hindi',
    tags: ['wealth', 'prosperity', 'fortune', 'diwali', 'friday', 'chalisa'],
    youtubeVideoId: 'QNtHClMflz0',
    audioUrl: '/audio/lakshmi-chalisa.mp3',
    createdAt: new Date('2024-05-05'),
    updatedAt: new Date('2024-05-05')
  },
  {
    id: 'mahalakshmi-ashtakam',
    title: 'Mahalakshmi Ashtakam',
    hindiTitle: 'महालक्ष्म्यष्टकम्',
    deity: 'Lakshmi',
    category: 'ashtakam',
    description: 'Eight verses praising Goddess Mahalakshmi, composed by Indra. Recited for wealth, prosperity, and removal of poverty.',
    difficulty: 'intermediate',
    duration: 8,
    language: 'sanskrit',
    tags: ['wealth', 'prosperity', 'indra', 'poverty-removal', 'mahalakshmi'],
    youtubeVideoId: 'C6hfG-gqi3w',
    audioUrl: '/audio/mahalakshmi-ashtakam.mp3',
    createdAt: new Date('2024-05-10'),
    updatedAt: new Date('2024-05-10')
  },

  // ═══════════════════════════════════════════════════════════════
  // SARASWATI CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'saraswati-vandana',
    title: 'Saraswati Vandana',
    hindiTitle: 'सरस्वती वन्दना',
    deity: 'Saraswati',
    category: 'stotra',
    description: 'Prayers to Goddess Saraswati, the deity of knowledge, music, arts, and wisdom. Recited by students, artists, and seekers before beginning any learning.',
    difficulty: 'beginner',
    duration: 8,
    language: 'sanskrit',
    tags: ['knowledge', 'education', 'music', 'arts', 'students', 'wisdom'],
    youtubeVideoId: 'Njc1Hu6WPDU',
    audioUrl: '/audio/saraswati-vandana.mp3',
    createdAt: new Date('2024-05-15'),
    updatedAt: new Date('2024-05-15')
  },
  {
    id: 'saraswati-chalisa',
    title: 'Saraswati Chalisa',
    hindiTitle: 'सरस्वती चालीसा',
    deity: 'Saraswati',
    category: 'chalisa',
    description: 'Forty verses praising Goddess Saraswati. Recited for success in examinations, mastery of arts, and clarity of intellect.',
    difficulty: 'beginner',
    duration: 12,
    language: 'hindi',
    tags: ['knowledge', 'exams', 'arts', 'intellect', 'students', 'chalisa'],
    youtubeVideoId: '-8JHyhZTwvY',
    audioUrl: '/audio/saraswati-chalisa.mp3',
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-05-20')
  },

  // ═══════════════════════════════════════════════════════════════
  // GANESHA CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'ganpati-atharvashirsha',
    title: 'Ganpati Atharvashirsha',
    hindiTitle: 'गणपति अथर्वशीर्ष',
    deity: 'Ganesha',
    category: 'stotra',
    description: 'A sacred Sanskrit text from the Atharvaveda dedicated to Lord Ganesha. Recited during Ganesh Chaturthi for wisdom, removal of obstacles, and spiritual attainment.',
    difficulty: 'intermediate',
    duration: 12,
    language: 'sanskrit',
    tags: ['atharvaveda', 'wisdom', 'ganesh-chaturthi', 'obstacles', 'powerful', 'upanishad'],
    youtubeVideoId: 'DAXzF3O2h5Y',
    audioUrl: '/audio/ganpati-atharvashirsha.mp3',
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10')
  },
  {
    id: 'ganesha-chalisa',
    title: 'Ganesh Chalisa',
    hindiTitle: 'गणेश चालीसा',
    deity: 'Ganesha',
    category: 'chalisa',
    description: 'Forty verses praising Lord Ganesha, the remover of obstacles and lord of beginnings. Recited before starting any new venture, exam, or journey.',
    difficulty: 'beginner',
    duration: 12,
    language: 'hindi',
    tags: ['obstacles', 'beginnings', 'venture', 'exams', 'chalisa', 'vighnaharta'],
    youtubeVideoId: 'O_QXVanxAxI',
    audioUrl: '/audio/ganesha-chalisa.mp3',
    createdAt: new Date('2024-05-25'),
    updatedAt: new Date('2024-05-25')
  },

  // ═══════════════════════════════════════════════════════════════
  // HANUMAN CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'hanuman-chalisa',
    title: 'Hanuman Chalisa',
    hindiTitle: 'हनुमान चालीसा',
    deity: 'Hanuman',
    category: 'chalisa',
    description: 'The most popular devotional hymn composed by Tulsidas in Awadhi, praising Hanuman\'s courage, devotion, and unwavering faith in Lord Rama. Recited for strength and protection.',
    difficulty: 'beginner',
    duration: 10,
    language: 'hindi',
    tags: ['devotion', 'courage', 'faith', 'popular', 'tulsidas', 'strength'],
    youtubeVideoId: 'AETFvQonfV8',
    audioUrl: '/audio/hanuman-chalisa.mp3',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-16')
  },
  {
    id: 'hanuman-ashtakam',
    title: 'Hanuman Ashtakam',
    hindiTitle: 'हनुमान अष्टकम',
    deity: 'Hanuman',
    category: 'ashtakam',
    description: 'Eight verses celebrating Hanuman\'s devotion, strength, and divine nature. Composed by Tulsidas in the Awadhi language.',
    difficulty: 'intermediate',
    duration: 8,
    language: 'sanskrit',
    tags: ['devotion', 'strength', 'bhakti', 'praise', 'tulsidas'],
    youtubeVideoId: 'LUx8wlA_dk8',
    audioUrl: '/audio/hanuman-ashtakam.mp3',
    createdAt: new Date('2024-01-06'),
    updatedAt: new Date('2024-01-21')
  },
  {
    id: 'hanuman-kavach',
    title: 'Hanuman Kavach',
    hindiTitle: 'हनुमान कवच',
    deity: 'Hanuman',
    category: 'kavach',
    description: 'An armor hymn that invokes Lord Hanuman\'s protection for all body parts. Recited for courage, protection from enemies, and removal of fears.',
    difficulty: 'intermediate',
    duration: 10,
    language: 'sanskrit',
    tags: ['protection', 'armor', 'courage', 'enemies', 'fear', 'kavach'],
    youtubeVideoId: 'vSeebmceDNU',
    audioUrl: '/audio/hanuman-kavach.mp3',
    createdAt: new Date('2024-06-01'),
    updatedAt: new Date('2024-06-01')
  },
  {
    id: 'panchmukhi-hanuman-kavach',
    title: 'Panchmukhi Hanuman Kavach',
    hindiTitle: 'पंचमुखी हनुमान कवच',
    deity: 'Hanuman',
    category: 'kavach',
    description: 'The five-faced Hanuman armor invoking Narasimha, Hayagriva, Garuda, Varaha, and Hanuman faces. The ultimate protection mantra against all forms of evil and black magic.',
    difficulty: 'advanced',
    duration: 12,
    language: 'sanskrit',
    tags: ['panchmukhi', 'five-faced', 'ultimate-protection', 'black-magic', 'evil', 'powerful'],
    youtubeVideoId: 'lUwdShMPLA8',
    audioUrl: '/audio/panchmukhi-hanuman-kavach.mp3',
    createdAt: new Date('2024-06-05'),
    updatedAt: new Date('2024-06-05')
  },
  {
    id: 'maruti-stotra',
    title: 'Maruti Stotra',
    hindiTitle: 'मारुति स्तोत्र',
    deity: 'Hanuman',
    category: 'stotra',
    description: 'A Marathi hymn composed by Samartha Ramdas Swami praising Lord Hanuman. Recited in Maharashtra for strength, courage, and protection.',
    difficulty: 'intermediate',
    duration: 8,
    language: 'sanskrit',
    tags: ['marathi', 'ramdas', 'maharashtra', 'strength', 'courage'],
    youtubeVideoId: '0UTUp6o2DE8',
    audioUrl: '/audio/maruti-stotram.mp3',
    createdAt: new Date('2024-06-10'),
    updatedAt: new Date('2024-06-10')
  },
  {
    id: 'sun-lo-pawan-ram-kahani',
    title: 'Sun lo Pawan Ram Kahani',
    hindiTitle: 'सुन लो पवन राम कहानी',
    deity: 'Hanuman',
    category: 'stotra',
    description: 'A beautiful narrative bhajan sung by Nitin Mukesh and Anuradha Paudwal that tells the story of Lord Ram through the devotion of Pawanputra Hanuman. One of the most beloved Hanuman bhajans from the Sampoorna Sunder Kand album.',
    difficulty: 'beginner',
    duration: 56,
    language: 'hindi',
    tags: ['pawanputra', 'ram-katha', 'bhajan', 'nitin-mukesh', 'anuradha-paudwal', 'sunder-kand', 'story'],
    youtubeVideoId: 'v6BPR1pkR5M',
    audioUrl: '/audio/sun-lo-pawan-ram-kahani.mp3',
    createdAt: new Date('2024-06-15'),
    updatedAt: new Date('2024-06-15')
  },

  // ═══════════════════════════════════════════════════════════════
  // SURYA / NAVAGRAHA CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'surya-kavach',
    title: 'Surya Kavach',
    hindiTitle: 'सूर्य कवच',
    deity: 'Surya',
    category: 'kavach',
    description: 'An armor hymn dedicated to Lord Surya (Sun God). Recited for health, vitality, success in career, and removal of eye-related ailments.',
    difficulty: 'intermediate',
    duration: 10,
    language: 'sanskrit',
    tags: ['sun', 'health', 'vitality', 'career', 'eyes', 'kavach'],
    youtubeVideoId: 'OLwap8Q5j2A',
    audioUrl: '/audio/surya-kavach.mp3',
    createdAt: new Date('2024-06-15'),
    updatedAt: new Date('2024-06-15')
  },
  {
    id: 'navagraha-stotram',
    title: 'Navagraha Stotram',
    hindiTitle: 'नवग्रह स्तोत्रम्',
    deity: 'Surya',
    category: 'stotra',
    description: 'A hymn praising the nine planetary deities (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu). Recited to pacify planetary afflictions and bring astrological harmony.',
    difficulty: 'intermediate',
    duration: 12,
    language: 'sanskrit',
    tags: ['planets', 'astrology', 'nine', 'harmony', 'afflictions', 'jyotish'],
    youtubeVideoId: 'g6zHBogmPnA',
    audioUrl: '/audio/navagraha-stotram.mp3',
    createdAt: new Date('2024-06-20'),
    updatedAt: new Date('2024-06-20')
  },

  // ═══════════════════════════════════════════════════════════════
  // SHANI CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'shani-chalisa',
    title: 'Shani Chalisa',
    hindiTitle: 'शनि चालीसा',
    deity: 'Shani',
    category: 'chalisa',
    description: 'Forty verses praising Lord Shani (Saturn), the dispenser of justice. Recited on Saturdays to reduce the effects of Sade Sati and other Saturn transits.',
    difficulty: 'beginner',
    duration: 12,
    language: 'hindi',
    tags: ['saturn', 'justice', 'saturday', 'sade-sati', 'chalisa', 'karma'],
    youtubeVideoId: 'MJ14wONWjWg',
    audioUrl: '/audio/shani-chalisa.mp3',
    createdAt: new Date('2024-06-25'),
    updatedAt: new Date('2024-06-25')
  },
  {
    id: 'shani-kavach',
    title: 'Shani Kavach',
    hindiTitle: 'शनि कवच',
    deity: 'Shani',
    category: 'kavach',
    description: 'An armor hymn to protect from the malefic effects of Lord Shani. Recited during Saturn transits, Sade Sati, and on Saturdays for relief from hardships.',
    difficulty: 'intermediate',
    duration: 10,
    language: 'sanskrit',
    tags: ['saturn', 'protection', 'sade-sati', 'transit', 'hardships', 'saturday'],
    youtubeVideoId: 'WBjcrhbjOn8',
    audioUrl: '/audio/shani-kavach.mp3',
    createdAt: new Date('2024-06-30'),
    updatedAt: new Date('2024-06-30')
  },

  // ═══════════════════════════════════════════════════════════════
  // KALI CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'kali-chalisa',
    title: 'Kali Chalisa',
    hindiTitle: 'काली चालीसा',
    deity: 'Durga',
    category: 'chalisa',
    description: 'Forty verses praising Goddess Kali, the fierce form of Divine Mother who destroys ignorance and evil. Recited for protection from enemies and spiritual liberation.',
    difficulty: 'beginner',
    duration: 12,
    language: 'hindi',
    tags: ['kali', 'fierce', 'destruction', 'enemies', 'liberation', 'tantra'],
    youtubeVideoId: 'bRYE2Ivwb8c',
    audioUrl: '/audio/kali-chalisa.mp3',
    createdAt: new Date('2024-07-01'),
    updatedAt: new Date('2024-07-01')
  },

  // ═══════════════════════════════════════════════════════════════
  // SANTOSHI MATA CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'santoshi-mata-chalisa',
    title: 'Santoshi Mata Chalisa',
    hindiTitle: 'संतोषी माता चालीसा',
    deity: 'Devi',
    category: 'chalisa',
    description: 'Forty verses praising Goddess Santoshi, the goddess of contentment and satisfaction. Recited on Fridays for peace of mind and fulfillment of desires.',
    difficulty: 'beginner',
    duration: 12,
    language: 'hindi',
    tags: ['contentment', 'satisfaction', 'friday', 'peace', 'desires'],
    youtubeVideoId: 'DJcRvZ3WCyI',
    audioUrl: '/audio/santoshi-mata-chalisa.mp3',
    createdAt: new Date('2024-07-05'),
    updatedAt: new Date('2024-07-05')
  },

  // ═══════════════════════════════════════════════════════════════
  // SAI BABA CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'sai-chalisa',
    title: 'Sai Chalisa',
    hindiTitle: 'साईं चालीसा',
    deity: 'All',
    category: 'chalisa',
    description: 'Forty verses praising Shirdi Sai Baba, the revered saint who transcended all religions. Recited on Thursdays for blessings, healing, and spiritual guidance.',
    difficulty: 'beginner',
    duration: 12,
    language: 'hindi',
    tags: ['sai-baba', 'shirdi', 'thursday', 'healing', 'guidance', 'universal'],
    youtubeVideoId: 'VW_G80_FbHY',
    audioUrl: '/audio/sai-chalisa.mp3',
    createdAt: new Date('2024-07-10'),
    updatedAt: new Date('2024-07-10')
  },

  // ═══════════════════════════════════════════════════════════════
  // VEDIC / UPANISHADIC CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'vedic-chanting-purusha-suktam',
    title: 'Purusha Suktam (Vedic Chanting)',
    hindiTitle: 'पुरुष सूक्तम् (वैदिक पाठ)',
    deity: 'Vishnu',
    category: 'vedic',
    description: 'One of the most sacred hymns from the Rigveda describing the cosmic being (Purusha) from whom the universe was born. Recited during yajnas and for cosmic harmony.',
    difficulty: 'advanced',
    duration: 15,
    language: 'sanskrit',
    tags: ['rigveda', 'cosmic', 'universe', 'yajna', 'vedic', 'ancient'],
    youtubeVideoId: 'BrHGWFl4Wz4',
    audioUrl: '/audio/purusha-suktam.mp3',
    createdAt: new Date('2024-07-15'),
    updatedAt: new Date('2024-07-15')
  },
  {
    id: 'vedic-chanting-narayana-suktam',
    title: 'Narayana Suktam (Vedic Chanting)',
    hindiTitle: 'नारायण सूक्तम् (वैदिक पाठ)',
    deity: 'Vishnu',
    category: 'vedic',
    description: 'A Vedic hymn from the Taittiriya Aranyaka praising Lord Narayana (Vishnu) as the supreme being dwelling in the heart of all beings. Recited for spiritual liberation.',
    difficulty: 'advanced',
    duration: 10,
    language: 'sanskrit',
    tags: ['vedic', 'narayana', 'supreme', 'heart', 'liberation', 'taittiriya'],
    youtubeVideoId: 'HR4N4NWYytk',
    audioUrl: '/audio/narayana-suktam.mp3',
    createdAt: new Date('2024-07-20'),
    updatedAt: new Date('2024-07-20')
  },
  {
    id: 'vedic-chanting-sri-suktam',
    title: 'Sri Suktam (Vedic Chanting)',
    hindiTitle: 'श्री सूक्तम् (वैदिक पाठ)',
    deity: 'Lakshmi',
    category: 'vedic',
    description: 'A Vedic hymn from the Rigveda Khilani dedicated to Goddess Lakshmi (Sri). Recited during Diwali, weddings, and for wealth and prosperity.',
    difficulty: 'advanced',
    duration: 12,
    language: 'sanskrit',
    tags: ['vedic', 'lakshmi', 'wealth', 'diwali', 'wedding', 'rigveda'],
    youtubeVideoId: 'ThznwYxJ8po',
    audioUrl: '/audio/sri-suktam.mp3',
    createdAt: new Date('2024-07-25'),
    updatedAt: new Date('2024-07-25')
  },
  {
    id: 'vedic-chanting-devi-suktam',
    title: 'Devi Suktam (Vedic Chanting)',
    hindiTitle: 'देवी सूक्तम् (वैदिक पाठ)',
    deity: 'Devi',
    category: 'vedic',
    description: 'A powerful Vedic hymn from the Rigveda where the Divine Mother herself speaks, declaring her omnipresence and supreme power. Recited during Navratri.',
    difficulty: 'advanced',
    duration: 8,
    language: 'sanskrit',
    tags: ['vedic', 'divine-mother', 'omnipresence', 'supreme', 'navratri', 'rigveda'],
    youtubeVideoId: 'Kw0neisiXk4',
    audioUrl: '/audio/devi-suktam.mp3',
    createdAt: new Date('2024-07-30'),
    updatedAt: new Date('2024-07-30')
  },
  {
    id: 'vedic-chanting-rudram-chamakam',
    title: 'Rudram Chamakam (Vedic Chanting)',
    hindiTitle: 'रुद्रम् चमकम् (वैदिक पाठ)',
    deity: 'Shiva',
    category: 'vedic',
    description: 'The most powerful Vedic hymn to Lord Shiva from the Yajurveda. Rudram praises Shiva\'s fierce form, while Chamakam asks for material and spiritual blessings. Recited for all-round prosperity.',
    difficulty: 'advanced',
    duration: 45,
    language: 'sanskrit',
    tags: ['vedic', 'yajurveda', 'fierce', 'blessings', 'prosperity', 'ultimate'],
    youtubeVideoId: 'XIG6-HG5VX4',
    audioUrl: '/audio/rudram-chamakam.mp3',
    createdAt: new Date('2024-08-01'),
    updatedAt: new Date('2024-08-01')
  },

  // ═══════════════════════════════════════════════════════════════
  // UNIVERSAL / PHILOSOPHICAL CONTENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'om-mantra',
    title: 'Om Chanting',
    hindiTitle: 'ॐ मंत्र',
    deity: 'All',
    category: 'mantra',
    description: 'The primordial sound of the universe, representing the ultimate reality and consciousness. The most fundamental mantra in Hinduism, encompassing all Vedas.',
    difficulty: 'beginner',
    duration: 10,
    language: 'sanskrit',
    tags: ['universal', 'meditation', 'foundational', 'peace', 'primordial', 'consciousness'],
    youtubeVideoId: 'ijfLsKg8jFY',
    audioUrl: '/audio/om-chanting.mp3',
    createdAt: new Date('2023-12-25'),
    updatedAt: new Date('2024-01-14')
  },
  {
    id: 'bhaja-govindam',
    title: 'Bhaja Govindam',
    hindiTitle: 'भज गोविन्दम्',
    deity: 'Vishnu',
    category: 'stotra',
    description: 'Mohamudgaram — a philosophical composition by Adi Shankaracharya reminding seekers of the impermanence of worldly pursuits and the importance of devotion to Govinda (Krishna).',
    difficulty: 'intermediate',
    duration: 12,
    language: 'sanskrit',
    tags: ['philosophy', 'impermanence', 'adi-shankara', 'govinda', 'wisdom', 'detachment'],
    youtubeVideoId: 'ZqO2fxVUpnc',
    audioUrl: '/audio/bhaja-govindam.mp3',
    createdAt: new Date('2024-08-05'),
    updatedAt: new Date('2024-08-05')
  },
  {
    id: 'nirvana-shatakam',
    title: 'Nirvana Shatakam',
    hindiTitle: 'निर्वाण षट्कम्',
    deity: 'Shiva',
    category: 'stotra',
    description: 'Six verses on self-realization composed by Adi Shankaracharya at age 8. Declares the true nature of the Self as pure consciousness, beyond body, mind, and ego.',
    difficulty: 'intermediate',
    duration: 8,
    language: 'sanskrit',
    tags: ['self-realization', 'consciousness', 'adi-shankara', 'advaita', 'liberation', 'atman'],
    youtubeVideoId: 'evTvChlKhwU',
    audioUrl: '/audio/nirvana-shatakam.mp3',
    createdAt: new Date('2024-08-10'),
    updatedAt: new Date('2024-08-10')
  },
  {
    id: 'guru-paduka-stotram',
    title: 'Guru Paduka Stotram',
    hindiTitle: 'गुरु पादुका स्तोत्रम्',
    deity: 'All',
    category: 'stotra',
    description: 'A hymn praising the sandals (padukas) of the Guru, composed by Adi Shankaracharya. Recited on Guru Purnima and for blessings of the spiritual teacher.',
    difficulty: 'intermediate',
    duration: 8,
    language: 'sanskrit',
    tags: ['guru', 'teacher', 'paduka', 'adi-shankara', 'guru-purnima', 'blessings'],
    youtubeVideoId: 'j3KVjUmz3Sk',
    audioUrl: '/audio/guru-paduka-stotram.mp3',
    createdAt: new Date('2024-08-15'),
    updatedAt: new Date('2024-08-15')
  }
];