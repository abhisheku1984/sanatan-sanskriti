export default function ShlokaTicker() {
  // A curated collection of sacred Sanskrit shlokas
  const shlokas = [
    'ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥',
    'ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः । सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥',
    'धर्मो रक्षति रक्षितः — Dharma protects those who protect Dharma',
    'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥ — Gayatri Mantra',
    'यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः । तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥ — Bhagavad Gita 18.78',
    'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन — You have the right to action alone, never to its fruits — Gita 2.47',
    'वसुधैव कुटुम्बकम् — The whole world is one family — Maha Upanishad',
    'अहं ब्रह्मास्मि — I am Brahman — Brihadaranyaka Upanishad',
    'तत् त्वम् असि — Thou art That — Chandogya Upanishad',
    'ॐ नमः शिवाय — Salutations to Lord Shiva — Panchakshari Mantra',
    'ॐ नमो भगवते वासुदेवाय — Salutations to Lord Vasudeva — Dvadasakshari Mantra',
    'सत्यमेव जयते — Truth alone triumphs — Mundaka Upanishad',
    'अहिंसा परमो धर्मः — Non-violence is the supreme Dharma — Mahabharata',
    'योगः कर्मसु कौशलम् — Yoga is skill in action — Bhagavad Gita 2.50',
  ];

  // Duplicate for seamless loop
  const allShlokas = [...shlokas, ...shlokas];

  return (
    <div className="bg-cosmic-dark border-b border-cosmic-gold/20 overflow-hidden">
      <div className="shloka-marquee flex items-center whitespace-nowrap py-1.5">
        {allShlokas.map((shloka, i) => (
          <span key={i} className="inline-flex items-center mx-6 text-[12px] sm:text-[13px]">
            <span className="text-cosmic-gold/60 mr-2">✦</span>
            <span className="text-cosmic-glow/80 font-devanagari tracking-wide">{shloka}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
