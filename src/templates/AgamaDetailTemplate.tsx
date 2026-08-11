import { motion } from 'framer-motion';
import AudioPlayer from '../components/AudioPlayer';
import SectionDivider from '../components/SectionDivider';
import DharmaWheel from '../components/DharmaWheel';
import TattvaTable from '../components/TattvaTable';

// =============================================================================
// TYPES
// =============================================================================

export interface VerseData {
  sanskrit: string;
  transliteration: string;
  meaning: string;
}

export interface UpagamaData {
  number: string;
  name: string;
  sanskritName: string;
  focus: string;
}

export interface SourceLink {
  name: string;
  desc: string;
  url: string;
}

export interface BodyPointSignificance {
  title: string;
  description: string;
}

export interface FaceData {
  name: string;
  sanskrit: string;
  direction: string;
  meaning: string;
  element: string;
  color: string;
  function: string;
}

export interface BodyPlacementData {
  part: string;
  sanskrit: string;
  description: string;
  points: BodyPointSignificance[];
}

export interface AgamaDetailProps {
  /* ── Identity ── */
  title: string;
  sanskritTitle: string;
  position: string;
  hindiSubtitle: string;

  /* ── Audio ── */
  audioText: string;
  audioTitle: string;

  /* ── Intro ── */
  introParagraphs: string[];
  transmissionVerse: VerseData;
  face: FaceData;
  originalScope: string;
  bodyPlacement: BodyPlacementData;
  upagamas: UpagamaData[];

  /* ── Four Padas (rich content as ReactNode) ── */
  kriyaContent: React.ReactNode;
  charyaContent: React.ReactNode;
  yogaContent: React.ReactNode;
  jnanaContent: React.ReactNode;

  /* ── Verses ── */
  coreVerses: VerseData[];

  /* ── Conclusion ── */
  conclusionTitle: string;
  conclusionParagraphs: string[];
  sources: SourceLink[];
  closingVerse: VerseData;

  /* ── Config ── */
  language: string;
  dharmaWheelColor?: string;
}

// =============================================================================
// INTERNAL PRESENTATIONAL COMPONENTS
// =============================================================================

function Section({ id, title, hindiTitle, children }: { id: string; title: string; hindiTitle: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-1">{title}</h2>
        <p className="font-devanagari text-vermillion text-base mb-4">{hindiTitle}</p>
        <div className="space-y-4 text-ink-light text-[15px] leading-relaxed">{children}</div>
      </motion.div>
    </section>
  );
}

function Verse({ sanskrit, transliteration, meaning }: VerseData) {
  return (
    <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
      <p className="font-devanagari text-ink text-base leading-relaxed mb-2">{sanskrit}</p>
      <p className="text-ink-muted text-sm italic mb-2">{transliteration}</p>
      <p className="text-ink-light text-sm">{meaning}</p>
    </div>
  );
}

function ChatuṣpādaCard({
  name,
  hindi,
  desc,
  colorClass,
}: {
  name: string;
  hindi: string;
  desc: string;
  colorClass: string;
}) {
  return (
    <div className={`rounded-lg p-3 text-center ${colorClass}`}>
      <p className="font-display font-bold text-sm">{name}</p>
      <p className="font-devanagari text-xs mt-0.5">{hindi}</p>
      <p className="text-[11px] mt-1 opacity-70">{desc}</p>
    </div>
  );
}

// =============================================================================
// MAIN TEMPLATE
// =============================================================================

export default function AgamaDetailTemplate({
  title,
  sanskritTitle,
  position,
  hindiSubtitle,
  audioText,
  audioTitle,
  introParagraphs,
  transmissionVerse,
  face,
  originalScope,
  bodyPlacement,
  upagamas,
  kriyaContent,
  charyaContent,
  yogaContent,
  jnanaContent,
  coreVerses,
  conclusionTitle,
  conclusionParagraphs,
  sources,
  closingVerse,
  language,
  dharmaWheelColor = '#C24D2B',
}: AgamaDetailProps) {
  const toc = [
    { id: 'intro', label: 'Introduction & Provenance' },
    { id: 'chatushpada', label: 'The Fourfold Path' },
    { id: 'kriya', label: '— Kriyā Pāda' },
    { id: 'charya', label: '— Caryā Pāda' },
    { id: 'yoga', label: '— Yoga Pāda' },
    { id: 'jnana', label: '— Jñāna / Vidyā Pāda' },
    { id: 'verses', label: 'Core Verses' },
    { id: 'tattvas', label: 'The 36 Tattvas' },
    { id: 'conclusion', label: 'Conclusion & Access' },
  ];

  return (
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ── TITLE ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <DharmaWheel size={60} spinning={true} color={dharmaWheelColor} />
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">{title}</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">{sanskritTitle}</p>
          <p className="text-ink-muted mt-2 text-lg">{position}</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">{hindiSubtitle}</p>
        </motion.div>

        {/* ── AUDIO ── */}
        <div className="mb-8">
          <AudioPlayer text={audioText} language={language} title={audioTitle} />
        </div>

        {/* ── TABLE OF CONTENTS ── */}
        <div className="bg-surface border border-border rounded-xl p-5 mb-10">
          <h3 className="font-display text-sm font-semibold text-ink-faint uppercase tracking-wider mb-3">
            विषय-सूची — Table of Contents
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {toc.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-ink-muted hover:text-vermillion hover:bg-vermillion/5 transition-colors"
              >
                <span className="text-vermillion/50 text-xs">{i + 1}.</span> {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 1: INTRODUCTION
        ═══════════════════════════════════════════════════════════════════════ */}
        <Section id="intro" title="1. Introduction & Scriptural Provenance" hindiTitle="१. प्रस्तावना एवं शास्त्रीय उत्पत्ति">
          {introParagraphs.map((para, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
          ))}

          <Verse {...transmissionVerse} />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">
            Origin from the {face.name} Face
          </h3>
          <p>
            The {title} emanates from <strong>{face.name}</strong> ({face.sanskrit}), the {face.direction}-facing aspect of Sadāshiva. {face.name} represents <strong>{face.meaning}</strong> — the face through which Shiva's grace operates in the manifest world. This face is associated with the element of <strong>{face.element}</strong>, the color <strong>{face.color}</strong>, and the {face.function} function within the Pañchabrahma system.
          </p>

          <p>
            The original scope of the {title} is traditionally stated as <strong>{originalScope}</strong> — a vast encyclopedic corpus. Like many Āgamas, the available recensions represent condensed versions transmitted through specific lineages, with the full text considered partially lost to the ravages of time.
          </p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">
            Cosmic Symbolism: Placement at the {bodyPlacement.part} ({bodyPlacement.description})
          </h3>
          <p>
            In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the {title} is assigned to the <strong>
              {bodyPlacement.part} ({bodyPlacement.sanskrit}) — the {bodyPlacement.description.toLowerCase()}
            </strong>. This placement is profoundly significant:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {bodyPlacement.points.map((pt, idx) => (
              <li key={idx}>
                <strong>{pt.title}:</strong> {pt.description}
              </li>
            ))}
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">
            The {upagamas.length} Upāgamas (उपागम)
          </h3>
          <p>Each primary Āgama has subsidiary texts called Upāgamas that elaborate on specific aspects. The {title}'s {upagamas.length} Upāgamas are:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mt-2">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th>
                  <th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th>
                  <th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th>
                  <th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th>
                </tr>
              </thead>
              <tbody>
                {upagamas.map((u) => (
                  <tr key={u.number} className="border-b border-border-light">
                    <td className="py-2 pr-3 text-vermillion font-bold">{u.number}</td>
                    <td className="py-2 pr-3 font-medium">{u.name}</td>
                    <td className="py-2 pr-3 font-devanagari text-ink-muted">{u.sanskritName}</td>
                    <td className="py-2 text-ink-light text-[13px]">{u.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 2: CHATUSHPADA
        ═══════════════════════════════════════════════════════════════════════ */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>
            Like all primary Shaiva Āgamas, the {title} is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
            <ChatuṣpādaCard
              name="Kriyā Pāda"
              hindi="क्रिया पाद"
              desc="Ritual Action"
              colorClass="bg-vermillion/8 text-vermillion"
            />
            <ChatuṣpādaCard
              name="Caryā Pāda"
              hindi="चर्या पाद"
              desc="Daily Conduct"
              colorClass="bg-turmeric/8 text-turmeric-deep"
            />
            <ChatuṣpādaCard
              name="Yoga Pāda"
              hindi="योग पाद"
              desc="Yogic Practice"
              colorClass="bg-sage/8 text-sage"
            />
            <ChatuṣpādaCard
              name="Jñāna Pāda"
              hindi="ज्ञान पाद"
              desc="Knowledge"
              colorClass="bg-lotus/8 text-lotus"
            />
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 2.1–2.4: THE FOUR PADAS (injected via props)
        ═══════════════════════════════════════════════════════════════════════ */}
        <Section id="kriya" title="2.1 Kriyā Pāda — The Path of Sacred Action" hindiTitle="२.१ क्रिया पाद — पवित्र कर्म का मार्ग">
          {kriyaContent}
        </Section>

        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          {charyaContent}
        </Section>

        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          {yogaContent}
        </Section>

        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          {jnanaContent}
        </Section>

        <SectionDivider className="my-8" />

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 3: CORE VERSES
        ═══════════════════════════════════════════════════════════════════════ */}
        <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
          {coreVerses.map((v, idx) => (
            <Verse key={idx} {...v} />
          ))}
        </Section>

        <SectionDivider className="my-8" />

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 4: 36 TATTVAS
        ═══════════════════════════════════════════════════════════════════════ */}
        <Section id="tattvas" title="4. The 36 Tattvas" hindiTitle="४. तत्त्व-विचार">
          <p>
            The {title} presents the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) — the complete ontological framework of Shaiva Siddhanta. These 36 Tattvas describe the entire spectrum of reality from pure consciousness (Shiva) to gross matter (Earth), explaining how the infinite becomes apparently finite and how the bound soul can trace its way back to liberation.
          </p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 5: CONCLUSION
        ═══════════════════════════════════════════════════════════════════════ */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">{conclusionTitle}</h4>
          {conclusionParagraphs.map((para, idx) => (
            <p key={idx} className={idx > 0 ? 'mt-3' : ''} dangerouslySetInnerHTML={{ __html: para }} />
          ))}

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {sources.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-surface border border-border rounded-lg hover:border-vermillion/30 transition-colors"
              >
                <p className="font-display font-semibold text-ink text-sm">{s.name}</p>
                <p className="text-ink-faint text-[12px] mt-1 leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>

          <Verse {...closingVerse} />
        </Section>
      </div>
    </div>
  );
}