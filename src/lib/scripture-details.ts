export interface ScriptureDetail {
  id: string;
  name: string;
  sanskrit: string;
  category: string;
  shlokas: string;
  author: string;
  period: string;
  teachingsSummary: string;
  fullDescription: string;
  structure: string;
  philosophy: string;
  keyVerses: { sanskrit: string; meaning: string }[];
  majorTexts?: string[];
  accessLinks: { name: string; url: string }[];
}

export const SCRIPTURE_DETAILS: Record<string, ScriptureDetail> = {
  // ===== VEDAS =====
  'Rigveda': {
    id: 'rigveda', name: 'Rigveda', sanskrit: 'ऋग्वेद', category: 'Vedas',
    shlokas: '10,552 mantras in 1,028 Suktas across 10 Mandalas',
    author: 'Various Rishis — Vishvamitra, Vamadeva, Atri, Bharadvaja, Vasishtha, Gritsamada, Kanva, Angiras, and their lineages',
    period: 'c. 1500–1200 BCE (academic consensus); traditional: beginning of creation (Apaurusheya)',
    teachingsSummary: 'Hymns to Agni, Indra, Varuna, Surya, Ushas. Foundation of Vedic cosmology. Oldest religious text in continuous use.',
    fullDescription: 'The Rigveda is the oldest and most revered of the four Vedas, and is considered the oldest extant text in any Indo-European language. It is a collection of 10,552 mantras organized into 1,028 Suktas (hymns), which are further grouped into 10 Mandalas (books/circles). The word "Rig" comes from "Rik" (ऋक्) meaning "praise" — thus Rigveda is the "Veda of Praise."\n\nThe hymns are addressed to various Devas (divine powers) who represent cosmic principles: Agni (fire, the divine messenger between humans and gods), Indra (the warrior king of gods, lord of storms and rain), Varuna (cosmic order and moral law), Surya (the sun, source of light and consciousness), Ushas (dawn, the eternal renewal), Soma (the sacred plant and its divine essence), and many others.\n\nThe Rigveda is not merely a collection of prayers — it contains the seeds of all later Indian philosophy, science, and spirituality. The Nasadiya Sukta (10.129) presents one of the most profound creation hymns in world literature, questioning even whether the creator knows how creation began. The Purusha Sukta (10.90) describes the cosmic sacrifice from which the universe emerged.',
    structure: 'The Rigveda has two organizational systems:\n\n1. Mandala System (10 Mandalas): Mandalas 2–7 are the "family books" attributed to specific Rishi lineages. Mandala 1 and 10 are later compilations. Mandala 9 is entirely dedicated to Soma.\n\n2. Ashtaka System (8 Ashtakas): An alternative division into 8 parts of roughly equal length, used in some recitation traditions.\n\nEach Sukta has a Rishi (seer), Devata (deity), and Chandas (meter). The principal meters are Gayatri (24 syllables), Trishtubh (44), Jagati (48), and Anushtubh (32).\n\nAssociated texts: Aitareya Brahmana, Kaushitaki Brahmana, Aitareya Aranyaka, and the Aitareya and Kaushitaki Upanishads.',
    philosophy: 'The Rigveda contains the philosophical seeds of all later Hindu thought:\n\n• Monism: "Ekam Sad Vipra Bahudha Vadanti" (1.164.46) — "Truth is One, the wise call it by many names." This single verse is the foundation of Hindu universalism.\n\n• Creation Inquiry: The Nasadiya Sukta (10.129) asks: "Who really knows? Who will here proclaim it? Whence was it produced? Whence is this creation? The gods came afterwards, with the creation of this universe. Who then knows whence it has arisen?"\n\n• Cosmic Order (Rita): The concept of Rita — the cosmic moral and physical order that governs the universe — is the precursor to the later concept of Dharma.\n\n• Sacrifice (Yajna): The universe itself is born from cosmic sacrifice (Purusha Sukta). All of life is a yajna — an offering and exchange between the human and divine.',
    keyVerses: [
      { sanskrit: 'एकं सद् विप्रा बहुधा वदन्ति ।\nअग्निं यमं मातरिश्वानमाहुः ॥ (१.१६४.४६)', meaning: 'Truth is One; the wise call it by many names — they call it Agni, Yama, Matarishvan.' },
      { sanskrit: 'नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।\nकिमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गभीरम् ॥ (१०.१२९.१)', meaning: 'Then there was neither existence nor non-existence; there was no realm of air, no sky beyond. What covered it? Where was it? In whose protection? Was there water, deep and unfathomable?' },
      { sanskrit: 'ॐ अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।\nहोतारं रत्नधातमम् ॥ (१.१.१)', meaning: 'I praise Agni, the household priest, the divine minister of the sacrifice, the chief priest, the bestower of blessings. (The very first verse of the Rigveda)' },
    ],
    accessLinks: [
      { name: 'Archive.org — Complete Rigveda', url: 'https://archive.org/details/rigvedacompletebooks' },
      { name: 'Sacred-Texts.com — Griffith Translation', url: 'https://sacred-texts.com/hin/rigveda/' },
      { name: 'Sanskrit Wikisource', url: 'https://sa.wikisource.org/wiki/ऋग्वेदः' },
      { name: 'Gita Press Gorakhpur', url: 'https://gitapress.org' },
      { name: 'Wisdom Library', url: 'https://www.wisdomlib.org/hinduism/book/rig-veda-english-translation' },
    ],
  },
  'Yajurveda': {
    id: 'yajurveda', name: 'Yajurveda', sanskrit: 'यजुर्वेद', category: 'Vedas',
    shlokas: '1,975 mantras (Shukla/Vajasaneyi Samhita); ~2,000 (Krishna/Taittiriya Samhita)',
    author: 'Vaishampayana (Krishna Yajurveda), Yajnavalkya (Shukla Yajurveda)',
    period: 'c. 1200–900 BCE',
    teachingsSummary: 'Sacrificial formulas and prose mantras for yajnas. Contains Shatapatha Brahmana and Brihadaranyaka Upanishad.',
    fullDescription: 'The Yajurveda is the "Veda of Sacrificial Formulas" — the word "Yajus" (यजुस्) means "worship" or "sacrifice." It is the practical manual for priests performing Vedic rituals (yajnas), providing the exact mantras and procedures to be recited during each step of the sacrifice.\n\nUniquely among the Vedas, the Yajurveda exists in two distinct recensions:\n\n1. Krishna (Black) Yajurveda — The older version where mantras (Samhita) and explanatory prose (Brahmana) are intermixed. Its principal text is the Taittiriya Samhita, attributed to the sage Vaishampayana and his student Tittiri. It also includes the Maitrayani and Kathaka Samhitas.\n\n2. Shukla (White) Yajurveda — The reformed version where mantras are separated from commentary, creating a "pure" (shukla) collection. Its text is the Vajasaneyi Samhita, attributed to the sage Yajnavalkya, who according to tradition received it directly from the Sun God (Surya) after a dispute with his teacher Vaishampayana.\n\nThe Yajurveda is the most directly practical of the Vedas — it is the working manual of the Adhvaryu priest who physically performs the sacrifice.',
    structure: 'Krishna Yajurveda:\n• Taittiriya Samhita: 7 Kandas, 44 Prapathakas\n• Taittiriya Brahmana: 3 Ashtakas\n• Taittiriya Aranyaka: 10 Prapathakas (includes Taittiriya and Mahanarayana Upanishads)\n\nShukla Yajurveda:\n• Vajasaneyi Samhita: 40 Adhyayas (the 40th is the Isha Upanishad)\n• Shatapatha Brahmana: 100 Adhyayas in 14 Kandas (~17,000 prose passages — the largest Brahmana)\n• Brihadaranyaka Upanishad: 6 Adhyayas (the largest and one of the most important Upanishads)',
    philosophy: 'The Yajurveda\'s philosophy centers on Karma (action) as sacred offering:\n\n• Every act, when performed with right intention and proper procedure, becomes a yajna (sacrifice) that sustains the cosmic order.\n\n• The Shatapatha Brahmana contains the story of the Great Flood — Manu saved by a fish (Matsya), which later becomes the first Avatar of Vishnu.\n\n• The Isha Upanishad (Vajasaneyi Samhita 40) opens with one of the most quoted verses: "Ishavasyam idam sarvam" — All this is pervaded by the Lord.\n\n• The Brihadaranyaka Upanishad contains the famous Yajnavalkya-Maitreyi dialogue on the nature of the Self, the "Neti-neti" (not this, not this) method, and the Mahavakya "Aham Brahmasmi" (I am Brahman).',
    keyVerses: [
      { sanskrit: 'ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥ (ईशोपनिषद् १)', meaning: 'All this — whatever exists in this changing universe — should be covered by the Lord. Protect the Self by renunciation. Do not covet anybody\'s wealth.' },
      { sanskrit: 'अहं ब्रह्मास्मि (बृहदारण्यक उपनिषद् १.४.१०)', meaning: 'I am Brahman — the supreme Mahavakya declaring the identity of the individual Self with the Absolute.' },
    ],
    accessLinks: [
      { name: 'Archive.org — Yajurveda', url: 'https://archive.org/details/yajurveda' },
      { name: 'Sacred-Texts.com', url: 'https://sacred-texts.com/hin/yv/' },
      { name: 'Wisdom Library', url: 'https://www.wisdomlib.org/hinduism/book/the-yajur-veda' },
      { name: 'Gita Press', url: 'https://gitapress.org' },
    ],
  },
  'Bhagavad Gita': {
    id: 'bhagavad-gita', name: 'Bhagavad Gita', sanskrit: 'भगवद्गीता', category: 'Itihasas',
    shlokas: '700 shlokas in 18 Adhyayas',
    author: 'Vyasa (spoken by Lord Krishna to Arjuna on the battlefield of Kurukshetra)',
    period: 'Within Mahabharata, Bhishma Parva (chapters 25–42); Mahabharata compiled c. 400 BCE – 400 CE',
    teachingsSummary: 'Supreme philosophical dialogue. Three Yogas: Karma, Jnana, Bhakti. Nature of Atman, Dharma, and liberation.',
    fullDescription: 'The Bhagavad Gita ("Song of the Divine") is the most widely read, most translated, and most commented-upon scripture of Sanatan Dharma. Set within the Mahabharata at the climactic moment before the Kurukshetra War, it records the dialogue between Prince Arjuna — overwhelmed with despair at the prospect of fighting his own kinsmen — and his charioteer Lord Krishna, who reveals himself as the Supreme Being.\n\nIn 700 precisely crafted shlokas across 18 chapters, the Gita addresses the most fundamental questions of human existence: What is the nature of the self? What is duty? How should one act in the face of moral complexity? What is the relationship between the individual and the Absolute? How does one attain liberation?\n\nThe Gita\'s genius lies in its synthesis of multiple philosophical streams — Sankhya, Yoga, Vedanta, and Bhakti — into a coherent, practical framework accessible to all. It has been commented upon by virtually every major Indian philosopher: Shankaracharya (Advaita), Ramanujacharya (Vishishtadvaita), Madhvacharya (Dvaita), Abhinavagupta (Kashmir Shaivism), and in modern times by Tilak, Gandhi, Aurobindo, Radhakrishnan, and Prabhupada.\n\nMahatma Gandhi called it his "spiritual dictionary." J. Robert Oppenheimer quoted it after witnessing the first nuclear explosion: "Now I am become Death, the destroyer of worlds" (11.32). It has been translated into every major world language.',
    structure: 'The 18 chapters are traditionally grouped into three sections of six chapters each:\n\nChapters 1–6 (Karma Khanda): Focus on Karma Yoga and Jnana Yoga\n• Ch 1: Arjuna Vishada Yoga — Arjuna\'s despair\n• Ch 2: Sankhya Yoga — Nature of the Self, Karma Yoga introduction\n• Ch 3: Karma Yoga — The yoga of selfless action\n• Ch 4: Jnana Karma Sannyasa Yoga — Knowledge and renunciation of action\n• Ch 5: Karma Sannyasa Yoga — Renunciation vs. action\n• Ch 6: Dhyana Yoga — Meditation and self-control\n\nChapters 7–12 (Bhakti Khanda): Focus on Bhakti Yoga and God\'s nature\n• Ch 7: Jnana Vijnana Yoga — Knowledge and realization\n• Ch 8: Akshara Brahma Yoga — The imperishable Brahman\n• Ch 9: Raja Vidya Raja Guhya Yoga — Royal knowledge, royal secret\n• Ch 10: Vibhuti Yoga — Divine manifestations\n• Ch 11: Vishvarupa Darshana Yoga — The cosmic form\n• Ch 12: Bhakti Yoga — The path of devotion\n\nChapters 13–18 (Jnana Khanda): Focus on Jnana Yoga and liberation\n• Ch 13: Kshetra Kshetrajna Vibhaga Yoga — Field and knower\n• Ch 14: Gunatraya Vibhaga Yoga — Three Gunas\n• Ch 15: Purushottama Yoga — The Supreme Person\n• Ch 16: Daivasura Sampad Vibhaga Yoga — Divine and demonic natures\n• Ch 17: Shraddhatraya Vibhaga Yoga — Three types of faith\n• Ch 18: Moksha Sannyasa Yoga — Liberation through renunciation',
    philosophy: 'The Gita presents a multi-layered philosophical synthesis:\n\n• Karma Yoga: Act without attachment to results. "Karmanye vadhikaraste ma phaleshu kadachana" (2.47). This is not about inaction but about performing one\'s duty (Svadharma) without selfish desire.\n\n• Jnana Yoga: The Self (Atman) is eternal, unborn, undying. "Na jayate mriyate va kadachin" (2.20). Discrimination between the real (Atman) and unreal (body-mind) leads to liberation.\n\n• Bhakti Yoga: Surrender to God with complete love. "Sarva dharman parityajya mam ekam sharanam vraja" (18.66). The highest path is devotion to the Supreme.\n\n• Vishvarupa: In Chapter 11, Krishna reveals his cosmic form — containing all beings, all times, all creation and destruction. "Kalo\'smi lokakshayakrit pravriddho" — I am Time, the destroyer of worlds.\n\n• Synthesis: The Gita does not declare one path supreme but shows how all paths converge. It teaches the art of living — how to act in the world while remaining spiritually free.',
    keyVerses: [
      { sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ (२.४७)', meaning: 'You have the right to action alone, never to its fruits. Do not let the fruit of action be your motive, nor let your attachment be to inaction.' },
      { sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥ (४.७)', meaning: 'Whenever there is a decline of Dharma and rise of Adharma, O Bharata, then I manifest Myself.' },
      { sanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥ (१८.६६)', meaning: 'Abandoning all dharmas, take refuge in Me alone. I shall liberate you from all sins; do not grieve.' },
      { sanskrit: 'कालोऽस्मि लोकक्षयकृत्प्रवृद्धो\nलोकान्समाहर्तुमिह प्रवृत्तः ॥ (११.३२)', meaning: 'I am Time (Kala), the great destroyer of worlds, engaged here in destroying all beings.' },
    ],
    accessLinks: [
      { name: 'IIT Kanpur Gita Supersite', url: 'https://www.gitasupersite.iitk.ac.in' },
      { name: 'Sacred-Texts.com', url: 'https://sacred-texts.com/hin/gita/' },
      { name: 'Gita Press — Hindi/Sanskrit', url: 'https://gitapress.org' },
      { name: 'Archive.org — Multiple editions', url: 'https://archive.org/details/bhagavadgita' },
      { name: 'Vedabase — Prabhupada commentary', url: 'https://vedabase.io/en/library/bg/' },
    ],
  },
  'Bhagavata Purana (Srimad Bhagavatam)': {
    id: 'bhagavata-purana', name: 'Srimad Bhagavata Purana', sanskrit: 'श्रीमद्भागवतपुराण', category: 'Puranas',
    shlokas: '18,000 shlokas in 12 Skandhas (335 chapters)',
    author: 'Veda Vyasa',
    period: 'c. 500–900 CE',
    teachingsSummary: 'Supreme Vaishnava text. 10th Skandha: complete Krishna Lila. Bhakti as highest path.',
    fullDescription: 'The Srimad Bhagavata Purana (also called Bhagavatam) is considered the crown jewel of Puranic literature and the supreme text of Bhakti (devotion). Tradition holds that Vyasa composed it as his final and most mature work, after feeling dissatisfied even after compiling the Vedas, Mahabharata, and other Puranas. His guru Narada advised him that he had not yet glorified the Supreme Lord with pure devotion — thus the Bhagavatam was born.\n\nThe text is structured as a dialogue: the sage Shuka (Vyasa\'s son) narrates it to King Parikshit, who has been cursed to die in seven days. In those seven days, Shuka reveals the complete science of God-realization through stories, philosophy, and devotional teachings.\n\nThe 10th Skandha — describing the complete Lila (divine play) of Lord Krishna from birth to departure — is the most beloved section, containing the Rasa Lila, the butter-stealing episodes, the killing of demons, and the Uddhava Gita. The Bhagavatam has inspired countless works of art, music, dance, and literature across India for over a millennium.',
    structure: 'The 12 Skandhas (Cantos):\n\n1st Skandha: Creation, Bhishma\'s teachings, Parikshit\'s story\n2nd Skandha: Cosmic manifestation, Virat Rupa\n3rd Skandha: Kapila\'s Sankhya, Varaha Avatar, creation details\n4th Skandha: Dhruva, Prithu, Pracetas\n5th Skandha: Rishabhadeva, cosmography (Jambudvipa), hells\n6th Skandha: Ajamila, Vritrasura, Daksha\n7th Skandha: Prahlada, Narasimha Avatar\n8th Skandha: Gajendra Moksha, Samudra Manthana, Vamana\n9th Skandha: Dynasties — Suryavamsha and Chandravamsha, Ramachandra\n10th Skandha: Complete Krishna Lila (the heart of the Bhagavatam)\n11th Skandha: Uddhava Gita, Yadava destruction, Krishna\'s departure\n12th Skandha: Kaliyuga prophecies, summary, Bhagavatam Mahatmya',
    philosophy: 'The Bhagavatam presents Bhakti as the supreme path:\n\n• Navavidha Bhakti: Nine forms of devotion — Shravana (hearing), Kirtana (chanting), Smarana (remembering), Pada-sevana (serving the feet), Archana (worship), Vandana (prayer), Dasya (servitude), Sakhya (friendship), Atma-nivedana (complete surrender).\n\n• Prema Bhakti: The highest form of love — selfless, unconditional, all-consuming love for God, exemplified by the Gopis of Vrindavan.\n\n• Achintyabhedabheda: The philosophy of "inconceivable simultaneous oneness and difference" — the soul is simultaneously one with and different from God.\n\n• Lila: God\'s actions are not karma-bound but are divine play (Lila) performed for the joy of devotees and the establishment of Dharma.',
    keyVerses: [
      { sanskrit: 'श्रवणं कीर्तनं विष्णोः स्मरणं पादसेवनम् ।\nअर्चनं वन्दनं दास्यं सख्यमात्मनिवेदनम् ॥ (७.५.२३)', meaning: 'Hearing, chanting, and remembering Vishnu, serving His feet, worship, prayer, servitude, friendship, and complete self-surrender — these are the nine forms of Bhakti.' },
      { sanskrit: 'वासुदेवे भगवति भक्तियोगः प्रयोजितः ।\nजनयत्याशु वैराग्यं ज्ञानं च यदहैतुकम् ॥ (१.२.७)', meaning: 'Bhakti Yoga directed toward Lord Vasudeva quickly produces detachment and causeless knowledge.' },
    ],
    accessLinks: [
      { name: 'Vedabase — Complete with commentary', url: 'https://vedabase.io/en/library/sb/' },
      { name: 'Archive.org — Gita Press edition', url: 'https://archive.org/details/shrimad-bhagavat-puran-gitapress' },
      { name: 'Sacred-Texts.com', url: 'https://sacred-texts.com/hin/sbr/' },
      { name: 'Wisdom Library', url: 'https://www.wisdomlib.org/hinduism/book/shrimad-bhagavata-purana' },
    ],
  },
  'Mahabharata': {
    id: 'mahabharata', name: 'Mahabharata', sanskrit: 'महाभारत', category: 'Itihasas',
    shlokas: '~1,00,000 shlokas in 18 Parvas (100 sub-Parvas)',
    author: 'Veda Vyasa (dictated to Lord Ganesha)',
    period: 'c. 400 BCE – 400 CE (compiled over centuries); traditional: end of Dvapara Yuga',
    teachingsSummary: 'Longest epic in world literature. Kurukshetra War. Contains Bhagavad Gita, Vishnu Sahasranama, and encyclopedic knowledge.',
    fullDescription: 'The Mahabharata is the longest epic poem ever composed — approximately 1,00,000 shlokas (200,000 individual verse lines), making it roughly ten times the length of Homer\'s Iliad and Odyssey combined. It is called the "Fifth Veda" (Panchama Veda) because it makes Vedic wisdom accessible through narrative.\n\nThe central narrative tells the story of the dynastic struggle between the Pandavas (five sons of Pandu) and the Kauravas (hundred sons of Dhritarashtra) for the throne of Hastinapura, culminating in the catastrophic 18-day Kurukshetra War. But this narrative frame contains within it an entire encyclopedia of Dharma — philosophy, law, politics, ethics, cosmology, geography, genealogy, and spiritual practice.\n\nVyasa himself declared: "What is found here may be found elsewhere; what is not found here is found nowhere" (यदिहास्ति तदन्यत्र यन्नेहास्ति न तत्क्वचित्). The Mahabharata is not just an epic — it is a civilization\'s complete knowledge system encoded in narrative form.',
    structure: 'The 18 Parvas (Books):\n\n1. Adi Parva — Origins, Pandava/Kaurava birth, Draupadi Swayamvara\n2. Sabha Parva — The dice game, Draupadi\'s humiliation\n3. Vana/Aranya Parva — 12-year forest exile (longest Parva)\n4. Virata Parva — Year of incognito\n5. Udyoga Parva — War preparations, Krishna\'s peace mission\n6. Bhishma Parva — War begins, BHAGAVAD GITA (Ch 25–42)\n7. Drona Parva — Drona commands, Abhimanyu\'s death\n8. Karna Parva — Karna commands and falls\n9. Shalya Parva — Final battles, Duryodhana\'s fall\n10. Sauptika Parva — Night massacre by Ashvatthama\n11. Stri Parva — Lament of the women\n12. Shanti Parva — Bhishma\'s teachings on Dharma and statecraft\n13. Anushasana Parva — Bhishma\'s final teachings, Vishnu Sahasranama\n14. Ashvamedhika Parva — Horse sacrifice, Anu Gita\n15. Ashramvasika Parva — Dhritarashtra\'s retirement\n16. Mausala Parva — Destruction of the Yadavas\n17. Mahaprasthanika Parva — The great journey\n18. Svargarohana Parva — Ascent to heaven',
    philosophy: 'The Mahabharata explores Dharma in all its complexity:\n\n• Dharma Sukshma: Dharma is subtle and context-dependent. There are no simple moral rules — every situation demands discernment.\n\n• Raj Dharma: The Shanti and Anushasana Parvas contain one of the world\'s most comprehensive treatises on statecraft, law, and governance.\n\n• Karma and Consequence: Every action has consequences that ripple across generations. The war itself is the consequence of accumulated adharma.\n\n• The Gita\'s Synthesis: Within the Mahabharata, the Bhagavad Gita synthesizes Karma, Jnana, and Bhakti Yoga into a unified path.\n\n• Vishnu Sahasranama: The 1,000 names of Vishnu, recited by Bhishma on his deathbed, is one of the most powerful devotional texts in Hinduism.',
    keyVerses: [
      { sanskrit: 'यदिहास्ति तदन्यत्र यन्नेहास्ति न तत्क्वचित् ।', meaning: 'What is found here may be found elsewhere; what is not found here is found nowhere.' },
      { sanskrit: 'धर्मे चार्थे च कामे च मोक्षे च भरतर्षभ ।\nयदिहास्ति तदन्यत्र यन्नेहास्ति न कुत्रचित् ॥', meaning: 'In Dharma, Artha, Kama, and Moksha — what is here is elsewhere; what is not here is nowhere else.' },
    ],
    accessLinks: [
      { name: 'Sacred-Texts — Complete Ganguli Translation', url: 'https://sacred-texts.com/hin/maha/' },
      { name: 'Archive.org — BORI Critical Edition', url: 'https://archive.org/details/mahabharata-complete' },
      { name: 'Gita Press — Hindi', url: 'https://gitapress.org' },
      { name: 'Wisdom Library', url: 'https://www.wisdomlib.org/hinduism/book/the-mahabharata-mohan' },
    ],
  },
  'Valmiki Ramayana': {
    id: 'ramayana', name: 'Valmiki Ramayana', sanskrit: 'वाल्मीकि रामायण', category: 'Itihasas',
    shlokas: '24,000 shlokas in 7 Kandas (500 Sargas)',
    author: 'Maharishi Valmiki (Adi Kavi — the First Poet)',
    period: 'c. 500–300 BCE (academic); traditional: Treta Yuga',
    teachingsSummary: 'Life of Lord Rama — ideal king, husband, son, warrior. Dharma in every relationship. First kavya in Sanskrit.',
    fullDescription: 'The Ramayana is the Adi Kavya — the "First Poem" of Sanskrit literature, and one of the two great epics of Sanatan Dharma. Composed by Maharishi Valmiki in 24,000 shlokas, it narrates the life of Lord Rama, the seventh Avatar of Vishnu, who is the embodiment of Dharma in human form.\n\nThe story begins with Rama\'s birth in Ayodhya, his education, his marriage to Sita, and his exile to the forest for fourteen years due to his stepmother Kaikeyi\'s demand. During the exile, Sita is abducted by the demon king Ravana of Lanka. With the help of Hanuman and the Vanara army, Rama rescues Sita, defeats Ravana, and returns to Ayodhya to establish Rama Rajya — the ideal kingdom.\n\nBut the Ramayana is far more than a narrative — it is a manual of Dharma. Rama embodies the ideal son, brother, husband, king, and warrior. Every character represents a facet of human nature and ethical choice. The Ramayana has been retold in every Indian language and has profoundly influenced the cultures of Southeast Asia.',
    structure: 'The 7 Kandas (Books):\n\n1. Bala Kanda — Rama\'s birth, education, marriage to Sita\n2. Ayodhya Kanda — Exile, Dasharatha\'s death, Bharata\'s devotion\n3. Aranya Kanda — Forest life, Shurpanakha, golden deer, Sita\'s abduction\n4. Kishkindha Kanda — Alliance with Sugriva, Hanuman\'s role\n5. Sundara Kanda — Hanuman\'s leap to Lanka, finding Sita (most auspicious Kanda)\n6. Yuddha Kanda — The great war, Ravana\'s defeat, Sita\'s return\n7. Uttara Kanda — Rama\'s reign, Sita\'s trial, Lava-Kusha',
    philosophy: 'The Ramayana teaches Dharma through example:\n\n• Pitr-Dharma: Rama honors his father\'s word even at the cost of his own kingdom.\n• Fraternal Love: Bharata refuses the throne and places Rama\'s sandals on it.\n• Spousal Devotion: Sita\'s unwavering faithfulness; Rama\'s anguish at her loss.\n• Service: Hanuman\'s selfless devotion — the ideal Bhakta.\n• Just Rule: Rama Rajya — where every citizen is happy, prosperous, and dharmic.\n• Moral Complexity: The Uttara Kanda raises difficult questions about duty vs. personal justice.',
    keyVerses: [
      { sanskrit: 'रामो विग्रहवान् धर्मः (अरण्यकाण्ड)', meaning: 'Rama is Dharma incarnate in human form.' },
      { sanskrit: 'जननी जन्मभूमिश्च स्वर्गादपि गरीयसी (युद्धकाण्ड)', meaning: 'Mother and Motherland are greater even than Heaven.' },
    ],
    accessLinks: [
      { name: 'Valmiki Ramayana — Complete', url: 'https://www.valmikiramayan.net' },
      { name: 'Sacred-Texts.com', url: 'https://sacred-texts.com/hin/rama/' },
      { name: 'Archive.org', url: 'https://archive.org/details/valmiki-ramayana' },
      { name: 'Gita Press', url: 'https://gitapress.org' },
    ],
  },
};

// Generate a simple detail for entries that don't have a full detail page yet
export function getScriptureDetail(name: string): ScriptureDetail | null {
  return SCRIPTURE_DETAILS[name] || null;
}
