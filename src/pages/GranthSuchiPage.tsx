
import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, ExternalLink, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AudioPlayer from '../components/AudioPlayer';
import SectionDivider from '../components/SectionDivider';
import { getScriptureDetail, type ScriptureDetail } from '../lib/scripture-details';

interface ScriptureEntry {
  name: string;
  shlokas: string;
  author: string;
  period: string;
  teachings: string;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  entries: ScriptureEntry[];
  sources: string[];
}

/* ============ SCRIPTURE DETAIL VIEW ============ */
function ScriptureDetailView({ detail, language, onBack }: { detail: ScriptureDetail; language: string; onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-1.5 text-ink-muted hover:text-vermillion text-sm transition-colors mb-6">
        <ArrowLeft size={15} /> Back to ग्रन्थ सूची
      </button>

      {/* Header */}
      <div className="text-center mb-8">
        <span className="px-3 py-1 rounded-full bg-vermillion/8 text-vermillion text-[11px] font-semibold uppercase tracking-wider">{detail.category}</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-ink mt-3">{detail.name}</h1>
        <p className="font-devanagari text-xl text-vermillion mt-1">{detail.sanskrit}</p>
        <p className="text-ink-faint text-sm mt-2">{detail.shlokas} · {detail.author}</p>
        <p className="text-ink-faint text-xs mt-1">{detail.period}</p>
      </div>

      {/* Audio */}
      <div className="mb-6">
        <AudioPlayer
          text={`${detail.name}. ${detail.fullDescription.substring(0, 800)}`}
          language={language}
          title={`${detail.name} — Complete Audio Guide`}
        />
      </div>

      {/* Full Description */}
      <div className="bg-surface border border-border rounded-xl p-6 mb-6">
        <h2 className="font-display text-lg font-semibold text-ink mb-3 flex items-center gap-2">
          <BookOpen size={18} className="text-vermillion" /> Description & Background
        </h2>
        {detail.fullDescription.split('\n\n').map((para, i) => (
          <p key={i} className="text-ink-light text-[15px] leading-relaxed mb-3">{para}</p>
        ))}
      </div>

      {/* Structure */}
      <div className="bg-surface border border-border rounded-xl p-6 mb-6">
        <h2 className="font-display text-lg font-semibold text-ink mb-3">Structure & Organization</h2>
        {detail.structure.split('\n\n').map((para, i) => (
          <div key={i} className="mb-3">
            {para.split('\n').map((line, j) => (
              <p key={j} className={`text-[14px] leading-relaxed ${line.startsWith('•') || line.startsWith('1') || line.startsWith('2') || line.startsWith('3') || line.startsWith('4') || line.startsWith('5') || line.startsWith('6') || line.startsWith('7') || line.startsWith('8') || line.startsWith('9') ? 'text-ink-light ml-4' : 'text-ink font-medium'}`}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Philosophy */}
      <div className="bg-surface border border-border rounded-xl p-6 mb-6">
        <h2 className="font-display text-lg font-semibold text-ink mb-3">Philosophy & Core Teachings</h2>
        {detail.philosophy.split('\n\n').map((para, i) => (
          <div key={i} className="mb-3">
            {para.split('\n').map((line, j) => (
              <p key={j} className={`text-[14px] leading-relaxed ${line.startsWith('•') ? 'text-ink-light ml-4 mb-1' : 'text-ink-light'}`}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Key Verses */}
      {detail.keyVerses.length > 0 && (
        <div className="mb-6">
          <h2 className="font-display text-lg font-semibold text-ink mb-4">Key Verses (मुख्य श्लोक)</h2>
          <div className="space-y-4">
            {detail.keyVerses.map((verse, i) => (
              <div key={i} className="bg-parchment-warm border border-border rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-devanagari text-ink text-[15px] leading-relaxed mb-2">{verse.sanskrit}</p>
                    <p className="text-ink-light text-sm leading-relaxed">{verse.meaning}</p>
                  </div>
                  <AudioPlayer text={verse.sanskrit + '. ' + verse.meaning} language={language} compact />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Access Links */}
      <div className="bg-surface border border-border rounded-xl p-6 mb-6">
        <h2 className="font-display text-lg font-semibold text-ink mb-3">Where to Read / Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {detail.accessLinks.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border hover:border-vermillion/30 hover:bg-vermillion/3 transition-colors">
              <ExternalLink size={13} className="text-vermillion flex-shrink-0" />
              <span className="text-ink text-sm font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ============ CATEGORY SECTION ============ */
function CategorySection({ cat, language, defaultOpen, onSelectScripture }: { cat: Category; language: string; defaultOpen?: boolean; onSelectScripture: (name: string) => void }) {
  const [open, setOpen] = useState(defaultOpen || false);
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className={`w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-parchment/40 transition-colors border-l-4 ${cat.color}`}>
        <div className="flex-1 min-w-0">
          <h2 className="font-display text-lg md:text-xl font-bold text-ink">{cat.title}</h2>
          <p className="text-ink-faint text-sm mt-0.5">{cat.subtitle}</p>
        </div>
        <div className="flex-shrink-0 mt-1 text-ink-faint">{open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="px-5 pb-5 border-t border-border-light pt-4 space-y-5">
              <AudioPlayer text={`${cat.title}. ${cat.description}`} language={language} title={cat.title} />
              <p className="text-ink-light text-sm leading-relaxed">{cat.description}</p>
              {/* Clickable entries */}
              <div className="space-y-2">
                {cat.entries.map((e, i) => {
                  const hasDetail = !!getScriptureDetail(e.name);
                  return (
                    <div
                      key={i}
                      onClick={() => hasDetail && onSelectScripture(e.name)}
                      className={`border border-border rounded-lg p-4 transition-all ${hasDetail ? 'cursor-pointer hover:border-vermillion/40 hover:shadow-sm hover:bg-vermillion/[0.02] group' : ''}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className={`font-display text-[15px] font-semibold ${hasDetail ? 'text-ink group-hover:text-vermillion transition-colors' : 'text-ink'}`}>
                              {e.name}
                            </h3>
                            {hasDetail && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-vermillion/10 text-vermillion uppercase tracking-wider">
                                Detailed
                              </span>
                            )}
                          </div>
                          <p className="text-ink-faint text-[12px] mt-0.5">{e.shlokas} · {e.author} · {e.period}</p>
                          <p className="text-ink-light text-[13px] mt-1.5 leading-snug">{e.teachings}</p>
                        </div>
                        {hasDetail && (
                          <span className="text-vermillion/40 group-hover:text-vermillion transition-colors flex-shrink-0 mt-1">
                            <BookOpen size={16} />
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Sources */}
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint mb-2">Where to Access (Legal / Open-Source)</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.sources.map((s, i) => (
                    <a key={i} href={s.startsWith('http') ? s : `https://${s}`} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-parchment-warm border border-border text-ink-muted text-[12px] hover:border-vermillion/30 hover:text-vermillion transition-colors">
                      <ExternalLink size={10} /> {s.replace('https://', '').replace('http://', '').split('/')[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============ CATEGORIES DATA ============ */
const CATEGORIES: Category[] = [
  {
    id: 'vedas',
    title: 'The Four Vedas (चतुर्वेद)',
    subtitle: 'Samhitas, Brahmanas, Aranyakas & Principal Upanishads',
    color: 'border-l-vermillion',
    description: 'The Vedas are the oldest scriptures of Sanatan Dharma, regarded as Apaurusheya (not of human origin) and Shruti (that which is heard). They were revealed to ancient Rishis during deep meditation and transmitted orally for millennia before being compiled by Veda Vyasa. Each Veda has four layers: Samhita (hymns/mantras), Brahmana (ritual commentary), Aranyaka (forest treatises), and Upanishad (philosophical conclusions). Together they contain approximately 20,379+ mantras across all Samhitas.',
    entries: [
      { name: 'Rigveda', shlokas: '10,552 mantras in 1,028 Suktas', author: 'Various Rishis (Vishvamitra, Vasishtha, etc.)', period: 'c. 1500–1200 BCE', teachings: 'Hymns to Agni, Indra, Varuna, Surya. Foundation of Vedic cosmology. Nasadiya Sukta, Purusha Sukta. Oldest religious text in continuous use.' },
      { name: 'Yajurveda', shlokas: '~4,000 mantras (Shukla + Krishna)', author: 'Vaishampayana, Yajnavalkya', period: 'c. 1200–900 BCE', teachings: 'Sacrificial formulas for yajnas. Two recensions: Shukla and Krishna. Contains Shatapatha Brahmana and Brihadaranyaka Upanishad.' },
      { name: 'Samaveda', shlokas: '1,875 mantras set to musical notation', author: 'Jaimini (traditional)', period: 'c. 1200–900 BCE', teachings: 'The Veda of melodies (Saman). Origin of Indian classical music. Krishna: "Among Vedas, I am Samaveda." Contains Chandogya and Kena Upanishads.' },
      { name: 'Atharvaveda', shlokas: '5,977 mantras in 730 Suktas', author: 'Atharvan and Angiras Rishis', period: 'c. 1000–900 BCE', teachings: 'Hymns for healing, daily life, statecraft. Prithvi Sukta, marriage hymns. Includes Mundaka, Mandukya, Prashna Upanishads.' },
      { name: 'Isha Upanishad', shlokas: '18 mantras', author: 'Anonymous Rishi', period: 'c. 800–500 BCE', teachings: 'Opening Upanishad of Shukla Yajurveda. "Ishavasyam idam sarvam" — all this is pervaded by the Lord.' },
      { name: 'Katha Upanishad', shlokas: '119 mantras in 6 Vallis', author: 'Anonymous', period: 'c. 800–500 BCE', teachings: 'Dialogue between Nachiketa and Yama. Nature of Atman, immortality, the chariot metaphor.' },
      { name: 'Chandogya Upanishad', shlokas: '154 Khandas in 8 Prapathakas', author: 'Anonymous', period: 'c. 800–600 BCE', teachings: '"Tat Tvam Asi" — Thou art That. Uddalaka teaches Shvetaketu. Meditation on Om, Prana.' },
      { name: 'Brihadaranyaka Upanishad', shlokas: '~435 mantras, largest Upanishad', author: 'Yajnavalkya (primary teacher)', period: 'c. 700–600 BCE', teachings: '"Aham Brahmasmi." Yajnavalkya-Maitreyi dialogue. Neti-neti method. Most philosophically dense Upanishad.' },
      { name: 'Mundaka Upanishad', shlokas: '64 mantras in 3 Mundakas', author: 'Anonymous', period: 'c. 500 BCE', teachings: 'Para and Apara Vidya. "Satyameva Jayate" — India\'s national motto originates here.' },
      { name: 'Mandukya Upanishad', shlokas: '12 mantras (shortest major Upanishad)', author: 'Anonymous', period: 'c. 500 BCE', teachings: 'Analysis of AUM. Four states of consciousness: waking, dream, deep sleep, Turiya.' },
    ],
    sources: ['https://archive.org/details/rigvedacompletebooks', 'https://sacred-texts.com/hin/rigveda/', 'https://www.wisdomlib.org/hinduism', 'https://gitapress.org', 'https://sa.wikisource.org'],
  },
  {
    id: 'upavedas', title: 'The Four Upavedas (उपवेद)', subtitle: 'Applied Knowledge Systems derived from the Vedas', color: 'border-l-sage',
    description: 'The Upavedas ("subsidiary Vedas") are applied sciences traditionally attached to each of the four Vedas. They represent the practical application of Vedic knowledge to medicine, warfare, music/arts, and architecture.',
    entries: [
      { name: 'Ayurveda (आयुर्वेद)', shlokas: 'Charaka: ~8,400; Sushruta: ~6,000; Ashtanga Hridaya: ~7,120', author: 'Charaka, Sushruta, Vagbhata', period: 'c. 600 BCE – 600 CE', teachings: 'Science of life. Tridosha theory, surgery, Panchakarma, herbal medicine, Rasayana.' },
      { name: 'Dhanurveda (धनुर्वेद)', shlokas: '~300 verses; also in Agni Purana ch. 248–258', author: 'Vishvamitra, Parashurama', period: 'c. 500 BCE – 500 CE', teachings: 'Science of warfare. Archery, weapons (astras/shastras), military formations, ethics of war.' },
      { name: 'Gandharvaveda (गन्धर्ववेद)', shlokas: 'Natyashastra: 6,000 shlokas; Sangita Ratnakara: ~1,600', author: 'Bharata Muni, Sharngadeva', period: 'c. 200 BCE – 200 CE', teachings: 'Music, dance, performing arts. 22 Shrutis, Ragas, Talas, Rasa theory. Natyashastra = "Fifth Veda."' },
      { name: 'Sthapatyaveda (स्थापत्यवेद)', shlokas: 'Manasara: ~7,000; Mayamata: ~4,500', author: 'Vishvakarma, Maya', period: 'c. 500 BCE – 700 CE', teachings: 'Architecture, sculpture, Vastu Shastra. Temple design, town planning, sacred geometry.' },
    ],
    sources: ['https://archive.org/details/CharakaSamhita', 'https://archive.org/details/natyashastra', 'https://www.wisdomlib.org/definition/upaveda', 'https://gitapress.org'],
  },
  {
    id: 'puranas', title: 'The 18 Mahapuranas (अष्टादश महापुराण)', subtitle: 'Total: ~4,00,000 shlokas — Encyclopedias of Dharma, History & Cosmology', color: 'border-l-turmeric',
    description: 'The 18 Mahapuranas are traditionally authored by Veda Vyasa. They are classified into three groups: Sattva (Vishnu), Rajas (Brahma), and Tamas (Shiva). Each covers Pancha Lakshana: Sarga, Pratisarga, Vamsha, Manvantara, and Vamshanucharita.',
    entries: [
      { name: 'Bhagavata Purana (Srimad Bhagavatam)', shlokas: '18,000 in 12 Skandhas', author: 'Vyasa', period: 'c. 500–900 CE', teachings: 'Supreme Vaishnava text. Complete Krishna Lila. Bhakti as highest path. Prahlada, Dhruva, Uddhava Gita.' },
      { name: 'Vishnu Purana', shlokas: '23,000', author: 'Parashara', period: 'c. 1st century BCE – 4th CE', teachings: 'Most systematic Vaishnava Purana. Six Amshas: cosmology, genealogies, Krishna Lila, Kaliyuga prophecies.' },
      { name: 'Shiva Purana', shlokas: '24,000', author: 'Vyasa', period: 'c. 400–1000 CE', teachings: 'Seven Samhitas. Origin of 12 Jyotirlingas, Shiva-Parvati marriage, Panchakshara mantra.' },
      { name: 'Brahma Purana', shlokas: '10,000', author: 'Vyasa', period: 'c. 900–1000 CE', teachings: 'Creation account, Purushottama Kshetra (Puri), Sun worship.' },
      { name: 'Padma Purana', shlokas: '55,000', author: 'Vyasa', period: 'c. 400–1500 CE', teachings: 'Five Khandas. Glorification of Vishnu, Tulsi plant, Ekadashi vrata.' },
      { name: 'Skanda Purana', shlokas: '81,100 (largest Purana)', author: 'Vyasa', period: 'c. 600–1400 CE', teachings: 'Seven Khandas covering major pilgrimage sites. Kashi Khanda. Birth of Kartikeya.' },
      { name: 'Markandeya Purana', shlokas: '9,000', author: 'Vyasa/Markandeya', period: 'c. 250–500 CE', teachings: 'Contains Devi Mahatmyam (700 shlokas) — supreme Shakta text. Durga vs Mahishasura.' },
      { name: 'Garuda Purana', shlokas: '19,000 in 2 Khandas', author: 'Vyasa', period: 'c. 800–1100 CE', teachings: 'Afterlife, funeral rites, Yama\'s judgment. Read during Hindu funeral rites.' },
      { name: 'Agni Purana', shlokas: '15,400 in 383 chapters', author: 'Vyasa', period: 'c. 700–1100 CE', teachings: 'Encyclopedic: grammar, medicine, warfare, iconography, all Avatars of Vishnu.' },
      { name: 'Narada Purana', shlokas: '25,000', author: 'Vyasa', period: 'c. 900–1000 CE', teachings: 'Festivals, vratas, tirthas. Summary of all 18 Puranas within itself.' },
      { name: 'Matsya Purana', shlokas: '14,000', author: 'Vyasa', period: 'c. 250–500 CE', teachings: 'Vishnu as Matsya saving Manu. Temple architecture, iconography, Pralaya.' },
      { name: 'Kurma Purana', shlokas: '17,000', author: 'Vyasa', period: 'c. 600–900 CE', teachings: 'Vishnu as Kurma. Samudra Manthana. Ishvara Gita. Lakshmi Mahatmya.' },
      { name: 'Linga Purana', shlokas: '11,000', author: 'Vyasa', period: 'c. 500–1000 CE', teachings: '28 Avatars of Shiva. Yoga and Pashupata philosophy. Origin of Linga worship.' },
      { name: 'Brahmanda Purana', shlokas: '12,000', author: 'Vyasa', period: 'c. 400–600 CE', teachings: 'Cosmic egg cosmology. Contains Lalita Sahasranama and Adhyatma Ramayana.' },
      { name: 'Brahmavaivarta Purana', shlokas: '18,000', author: 'Vyasa', period: 'c. 700–1400 CE', teachings: 'Krishna-Radha theology. Prakriti Khanda, Ganapati Khanda.' },
      { name: 'Varaha Purana', shlokas: '24,000', author: 'Vyasa', period: 'c. 900–1100 CE', teachings: 'Vishnu as Varaha rescuing Earth. Mathura Mahatmya, Vratas.' },
      { name: 'Vamana Purana', shlokas: '10,000', author: 'Vyasa', period: 'c. 900–1100 CE', teachings: 'Vamana Avatar and King Bali. Tirtha Mahatmyas.' },
      { name: 'Bhavishya Purana', shlokas: '14,500', author: 'Vyasa', period: 'c. 500–1900 CE', teachings: 'Prophecies, Sun worship, vratas, Dharmashastra.' },
    ],
    sources: ['https://archive.org/details/puranam', 'https://www.wisdomlib.org/hinduism/book/the-vishnu-purana', 'https://sacred-texts.com/hin/', 'https://gitapress.org'],
  },
  {
    id: 'devi', title: 'Devi / Shakta Literature (देवी साहित्य)', subtitle: 'Devi Bhagavata, Devi Mahatmyam, Soundarya Lahari & Tantric Texts', color: 'border-l-lotus',
    description: 'Shakta literature glorifies the Divine Feminine (Devi/Shakti) as the Supreme Reality. The Devi Bhagavata Purana is the Shakta equivalent of the Bhagavata Purana.',
    entries: [
      { name: 'Devi Bhagavata Purana', shlokas: '18,000 in 12 Skandhas', author: 'Vyasa', period: 'c. 600–1200 CE', teachings: 'Supreme Shakta Purana. Devi as Para Brahman. Devi Gita. Shakti Peethas, Navaratri origin.' },
      { name: 'Devi Mahatmyam', shlokas: '700 shlokas in 13 chapters', author: 'Markandeya', period: 'c. 400–600 CE', teachings: 'Three Charitras: Madhu-Kaitabha, Mahishasura Mardini, Shumbha-Nishumbha. Recited during Navaratri.' },
      { name: 'Lalita Sahasranama', shlokas: '1,000 names in 182.5 shlokas', author: 'Hayagriva (Brahmanda Purana)', period: 'c. 400–800 CE', teachings: '1,000 names of Lalita Tripurasundari. Srividya philosophy. Shri Chakra symbolism.' },
      { name: 'Soundarya Lahari', shlokas: '103 shlokas', author: 'Adi Shankaracharya', period: 'c. 8th century CE', teachings: 'Supreme hymn of beauty. Kundalini, Shri Chakra, Tantric cosmology. Each verse = yantra + mantra.' },
      { name: 'Tantraraja Tantra', shlokas: '~3,600 shlokas in 36 chapters', author: 'Revealed by Shiva', period: 'c. 1000–1400 CE', teachings: 'Comprehensive Srividya Tantra. Shri Chakra worship, Kundalini, mantra science, diksha.' },
    ],
    sources: ['https://archive.org/details/devi-bhagavata-purana', 'https://sacred-texts.com/hin/devi/', 'https://gitapress.org', 'https://www.wisdomlib.org/hinduism/book/devi-mahatmyam'],
  },
  {
    id: 'agamas', title: 'Agamas & Tantras (आगम और तन्त्र)', subtitle: 'Shaiva (28), Vaishnava/Pancharatra (108), Shakta (64) Agamas', color: 'border-l-vermillion',
    description: 'The Agamas form the basis of temple worship, iconography, and ritual practice. Each covers four padas: Jnana, Yoga, Kriya, and Charya.',
    entries: [
      { name: 'Kamika Agama (Shaiva)', shlokas: '~12,000', author: 'Revealed by Sadashiva', period: 'c. 500–1000 CE', teachings: 'Foremost Shaiva Agama. Temple construction, daily worship, festivals. Basis of South Indian Shaiva temple worship.' },
      { name: 'Pancharatra Samhitas', shlokas: 'Jayakhya: ~4,500; Ahirbudhnya: ~3,600', author: 'Revealed by Narayana', period: 'c. 300–1200 CE', teachings: 'Basis of Vaishnava temple worship. Vyuha forms. 108 Samhitas traditionally listed.' },
      { name: 'Vaikhanasa Agama', shlokas: '~5,000', author: 'Vikhanas Rishi', period: 'c. 400–800 CE', teachings: 'Alternative Vaishnava system. Basis of Tirumala worship. Vedic fire rituals + temple worship.' },
      { name: 'Shakta Tantras (64)', shlokas: 'Kularnava: ~2,058; Mahanirvana: ~1,200', author: 'Shiva to Parvati', period: 'c. 700–1400 CE', teachings: '64 Bhairava Tantras. Kundalini, Chakras, Mantras, Yantras, Mudras. Kaula practices.' },
    ],
    sources: ['https://archive.org/details/shaiva-agamas', 'https://www.wisdomlib.org/hinduism/book/the-pancharatra', 'https://sacred-texts.com/tantra/', 'https://shaivam.org'],
  },
  {
    id: 'itihasas', title: 'Itihasas — The Great Epics (इतिहास)', subtitle: 'Ramayana, Mahabharata & Bhagavad Gita', color: 'border-l-vermillion',
    description: 'The two Itihasas are the greatest epics of world literature. Together they contain over 1,24,000 shlokas and form the moral and cultural foundation of Indian civilization.',
    entries: [
      { name: 'Valmiki Ramayana', shlokas: '24,000 shlokas in 7 Kandas', author: 'Maharishi Valmiki', period: 'c. 500–300 BCE', teachings: 'Life of Lord Rama — ideal king, husband, son. Dharma in every relationship. First kavya in Sanskrit.' },
      { name: 'Mahabharata', shlokas: '~1,00,000 shlokas in 18 Parvas', author: 'Veda Vyasa', period: 'c. 400 BCE – 400 CE', teachings: 'Longest epic. Kurukshetra War. Contains Bhagavad Gita, Vishnu Sahasranama, encyclopedic knowledge.' },
      { name: 'Bhagavad Gita', shlokas: '700 shlokas in 18 Adhyayas', author: 'Vyasa (spoken by Krishna)', period: 'Within Mahabharata, Bhishma Parva', teachings: 'Supreme dialogue. Karma, Jnana, Bhakti Yoga. Atman, Dharma, Vishvarupa. Most translated Indian text.' },
      { name: 'Tulsidas Ramcharitmanas', shlokas: '10,902 chaupais + dohas', author: 'Goswami Tulsidas', period: '1574–1576 CE', teachings: 'Awadhi retelling of Ramayana. Most popular in North India. Bhakti-centered.' },
      { name: 'Yoga Sutras', shlokas: '196 sutras in 4 Padas', author: 'Patanjali', period: 'c. 200 BCE – 400 CE', teachings: 'Foundation of Raja Yoga. Ashtanga Yoga. Chitta Vritti Nirodha. Path to Samadhi.' },
    ],
    sources: ['https://archive.org/details/valmiki-ramayana', 'https://sacred-texts.com/hin/maha/', 'https://www.gitasupersite.iitk.ac.in', 'https://gitapress.org'],
  },
  {
    id: 'stotras', title: 'Stotras & Sahasranamas (स्तोत्र)', subtitle: 'Sacred Hymns, 1000-Name Litanies & Devotional Compilations', color: 'border-l-turmeric',
    description: 'Stotras are devotional hymns by great Acharyas. Sahasranamas are powerful 1,000-name invocations. These form the daily worship of millions.',
    entries: [
      { name: 'Vishnu Sahasranama', shlokas: '142 shlokas / 1,000 names', author: 'Bhishma (Mahabharata)', period: 'Within Mahabharata', teachings: '1,000 names of Vishnu. Commentaries by Shankara, Parasara Bhattar, Madhva.' },
      { name: 'Lalita Sahasranama', shlokas: '182.5 shlokas / 1,000 names', author: 'Brahmanda Purana', period: 'c. 400–800 CE', teachings: '1,000 names of Lalita. Srividya philosophy. Shri Chakra, Kundalini.' },
      { name: 'Vivekachudamani', shlokas: '580 shlokas', author: 'Adi Shankaracharya', period: '8th century CE', teachings: 'Crest-jewel of discrimination. Advaita Vedanta primer. Atman-Brahman identity.' },
      { name: 'Hanuman Chalisa', shlokas: '40 chaupais + 2 dohas', author: 'Tulsidas', period: '16th century CE', teachings: 'Most recited Hindu prayer globally. Hanuman\'s strength, devotion, service to Rama.' },
      { name: 'Soundarya Lahari', shlokas: '103 shlokas', author: 'Shankaracharya', period: '8th century CE', teachings: 'Beauty of Devi. Kundalini, Shri Chakra. Each verse is a yantra and mantra combined.' },
      { name: 'Narayaneeyam', shlokas: '1,034 shlokas in 100 Dashakas', author: 'Melpathur Narayana Bhattathiri', period: '1586 CE', teachings: 'Condensed Bhagavata Purana. Composed at Guruvayur. All avatars of Vishnu.' },
    ],
    sources: ['https://stotranidhi.com', 'https://sacred-texts.com/hin/', 'https://gitapress.org', 'https://stotraratna.sathyasaithoughts.com'],
  },
];

/* ============ MAIN PAGE ============ */
export default function GranthSuchiPage({ language }: { language: string }) {
  const [selectedScripture, setSelectedScripture] = useState<string | null>(null);

  const detail = selectedScripture ? getScriptureDetail(selectedScripture) : null;

  if (detail) {
    return (
      <div className="pt-6 pb-12 px-4">
        <ScriptureDetailView detail={detail} language={language} onBack={() => setSelectedScripture(null)} />
      </div>
    );
  }

  return (
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ink">ग्रन्थ सूची — Scripture Encyclopedia</h1>
          <p className="text-ink-muted mt-1">Comprehensive reference guide to all major scriptures of Sanatan Dharma</p>
          <p className="text-ink-faint text-sm mt-2">Click on any scripture marked <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-vermillion/10 text-vermillion uppercase">Detailed</span> to read its full description, key verses, and access links</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'Vedic Texts', count: '13+', color: 'text-vermillion bg-vermillion/8' },
            { label: 'Mahapuranas', count: '18', color: 'text-turmeric-deep bg-turmeric/8' },
            { label: 'Agamas', count: '200+', color: 'text-lotus bg-lotus/8' },
            { label: 'Total Shlokas', count: '5,00,000+', color: 'text-sage bg-sage/8' },
          ].map(s => (
            <div key={s.label} className={`rounded-lg p-3 text-center ${s.color}`}>
              <p className="text-2xl font-display font-bold">{s.count}</p>
              <p className="text-[12px] font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        <SectionDivider className="mb-6" />

        {CATEGORIES.map((cat, i) => (
          <CategorySection key={cat.id} cat={cat} language={language} defaultOpen={i === 0} onSelectScripture={setSelectedScripture} />
        ))}

        {/* General sources */}
        <div className="mt-8 bg-surface border border-border rounded-xl p-5">
          <h3 className="font-display text-lg font-semibold text-ink mb-3">Universal Open-Source Access Points</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { name: 'Archive.org', url: 'https://archive.org/details/texts', desc: 'Largest digital library. Thousands of Sanskrit/Hindi texts.' },
              { name: 'Sacred-Texts.com', url: 'https://sacred-texts.com/hin/', desc: 'Complete English translations of Vedas, Upanishads, Puranas, Epics.' },
              { name: 'Wisdom Library', url: 'https://www.wisdomlib.org', desc: 'Encyclopedic reference with verse-by-verse commentary.' },
              { name: 'Gita Press Gorakhpur', url: 'https://gitapress.org', desc: 'Most affordable printed editions in Hindi/Sanskrit.' },
              { name: 'IIT Kanpur Gita Supersite', url: 'https://www.gitasupersite.iitk.ac.in', desc: 'Bhagavad Gita with all major commentaries.' },
              { name: 'Stotra Nidhi', url: 'https://stotranidhi.com', desc: 'Comprehensive stotra collection in multiple scripts.' },
            ].map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-3 rounded-lg border border-border-light hover:border-vermillion/30 transition-colors">
                <ExternalLink size={14} className="text-vermillion flex-shrink-0 mt-0.5" />
                <div><p className="font-medium text-ink">{s.name}</p><p className="text-ink-faint text-[12px] mt-0.5">{s.desc}</p></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

