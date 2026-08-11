import { motion } from 'framer-motion';
import { useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import SectionDivider from '../components/SectionDivider';
import DharmaWheel from '../components/DharmaWheel';
import { usePageContent } from '../lib/usePageContent';

function Section({ id, title, hindiTitle, children }: { id: string; title: string; hindiTitle: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-1">{title}</h2>
        <p className="font-devanagari text-vermillion text-base mb-4">{hindiTitle}</p>
        <div className="space-y-4 text-ink-light text-[15px] leading-relaxed">{children}</div>
      </motion.div>
    </section>
  );
}

function Verse({ sanskrit, transliteration, meaning }: { sanskrit: string; transliteration: string; meaning: string }) {
  return (
    <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
      <p className="font-devanagari text-ink text-base leading-relaxed mb-2">{sanskrit}</p>
      <p className="text-ink-muted text-sm italic mb-2">{transliteration}</p>
      <p className="text-ink-light text-sm">{meaning}</p>
    </div>
  );
}

function TattvaTable() {
  const shuddha = [
    ['1', 'Shiva Tattva (शिव तत्त्व)', 'Sadashiva', 'Pure consciousness, the ultimate reality, unchanging witness. The Pati (Lord) in absolute transcendence.'],
    ['2', 'Shakti Tattva (शक्ति तत्त्व)', 'Parashakti', 'The dynamic creative power of Shiva. Inseparable from Shiva as moonlight from moon. Iccha (will), Jnana (knowledge), Kriya (action).'],
    ['3', 'Sadashiva Tattva (सदाशिव तत्त्व)', 'Sadashiva', 'The first stirring of creation — "I am This" (Aham Idam). Will (Iccha) predominates. Grace begins to flow.'],
    ['4', 'Ishvara Tattva (ईश्वर तत्त्व)', 'Maheshvara', 'Knowledge predominates — "This am I" (Idam Aham). The cosmic blueprint takes form. Divine architect function.'],
    ['5', 'Shuddhavidya Tattva (शुद्धविद्या तत्त्व)', 'Ananta/Sadyojata', 'Perfect balance of "I" and "This". Pure knowledge where subject and object are equally present. Action (Kriya) predominates.'],
  ];

  const shuddhAshuddha = [
    ['6', 'Maya Tattva (माया तत्त्व)', 'Ananteshvara', 'The veiling power that creates multiplicity from unity. Root of all limitation. Not illusion but real creative power of Shiva.'],
    ['7', 'Kala (कला)', 'Kala-Rudra', 'Limited agency — gives the bound soul a fraction of Kriya Shakti. "I can do a little."'],
    ['8', 'Vidya / Niyati (विद्या)', 'Vidya-Rudra', 'Limited knowledge — gives partial Jnana Shakti. "I know a little." Creates sense of determinism.'],
    ['9', 'Raga (राग)', 'Raga-Rudra', 'Limited desire — attachment to particular objects. Creates longing and incompleteness.'],
    ['10', 'Kala/Time (काल)', 'Kala-Rudra', 'Temporal limitation — subjects the soul to past, present, future. Creates urgency and mortality.'],
    ['11', 'Niyati (नियति)', 'Niyati-Rudra', 'Spatial/causal limitation — binds the soul to specific place, cause-effect chains. Restriction of omnipresence.'],
    ['12', 'Purusha (पुरुष)', 'Kshetrajña', 'The individual soul (Pashu) encased in the five Kanchukas (6–11). The bound experiencer.'],
  ];

  const ashuddha = [
    ['13', 'Prakriti (प्रकृति)', 'Brahma', 'Primordial nature. Equilibrium of three Gunas (Sattva, Rajas, Tamas). Root of material creation.'],
    ['14', 'Buddhi (बुद्धि)', 'Brahma', 'Intellect — discriminative faculty. First evolute of Prakriti. Determines, judges, decides.'],
    ['15', 'Ahamkara (अहंकार)', 'Rudra', 'Ego-sense — "I-maker." Creates identification with body-mind. Three modes: Sattvic, Rajasic, Tamasic.'],
    ['16', 'Manas (मनस्)', 'Chandra', 'Mind — processes sense data, creates doubt, deliberates. Bridge between senses and intellect.'],
    ['17–21', 'Jnanendriyas (ज्ञानेन्द्रिय)', 'Various Devatas', 'Five knowledge senses: Hearing (Shrotra/Dik), Touch (Tvak/Vayu), Sight (Chakshu/Surya), Taste (Rasana/Varuna), Smell (Ghrana/Ashvins).'],
    ['22–26', 'Karmendriyas (कर्मेन्द्रिय)', 'Various Devatas', 'Five action senses: Speech (Vak/Agni), Grasping (Pani/Indra), Locomotion (Pada/Vishnu), Excretion (Payu/Mrityu), Reproduction (Upastha/Prajapati).'],
    ['27–31', 'Tanmatras (तन्मात्र)', 'Various', 'Five subtle elements: Sound (Shabda), Touch (Sparsha), Form (Rupa), Taste (Rasa), Smell (Gandha). Subtle blueprints of gross elements.'],
    ['32–36', 'Mahabhutas (महाभूत)', 'Various', 'Five gross elements: Akasha (Space), Vayu (Air), Agni (Fire), Apas (Water), Prithvi (Earth). The manifest physical creation.'],
  ];

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-display text-lg font-semibold text-ink mb-2">I. शुद्ध तत्त्व — Pure Tattvas (1–5)</h4>
        <p className="text-ink-muted text-sm mb-3">The realm of Shiva — beyond Maya, beyond limitation. Pure consciousness and its creative powers.</p>
        <div className="overflow-x-auto"><table className="w-full text-sm border-collapse">
          <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-2 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-2 text-ink-faint text-[10px] uppercase tracking-wider">Tattva</th><th className="text-left py-2 pr-2 text-ink-faint text-[10px] uppercase tracking-wider">Presiding Deity</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Function & Significance</th></tr></thead>
          <tbody>{shuddha.map(r => <tr key={r[0]} className="border-b border-border-light"><td className="py-2 pr-2 text-vermillion font-bold">{r[0]}</td><td className="py-2 pr-2 font-medium text-ink">{r[1]}</td><td className="py-2 pr-2 text-ink-muted">{r[2]}</td><td className="py-2 text-ink-light text-[13px]">{r[3]}</td></tr>)}</tbody>
        </table></div>
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold text-ink mb-2">II. शुद्ध-अशुद्ध तत्त्व — Mixed Tattvas (6–12)</h4>
        <p className="text-ink-muted text-sm mb-3">The realm of Maya and the five Kanchukas (sheaths of limitation) that bind the infinite soul into finite experience.</p>
        <div className="overflow-x-auto"><table className="w-full text-sm border-collapse">
          <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-2 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-2 text-ink-faint text-[10px] uppercase tracking-wider">Tattva</th><th className="text-left py-2 pr-2 text-ink-faint text-[10px] uppercase tracking-wider">Presiding Deity</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Function & Significance</th></tr></thead>
          <tbody>{shuddhAshuddha.map(r => <tr key={r[0]} className="border-b border-border-light"><td className="py-2 pr-2 text-turmeric-deep font-bold">{r[0]}</td><td className="py-2 pr-2 font-medium text-ink">{r[1]}</td><td className="py-2 pr-2 text-ink-muted">{r[2]}</td><td className="py-2 text-ink-light text-[13px]">{r[3]}</td></tr>)}</tbody>
        </table></div>
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold text-ink mb-2">III. अशुद्ध तत्त्व — Impure Tattvas (13–36)</h4>
        <p className="text-ink-muted text-sm mb-3">The realm of Prakriti — material creation from intellect to gross elements. The domain of embodied experience.</p>
        <div className="overflow-x-auto"><table className="w-full text-sm border-collapse">
          <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-2 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-2 text-ink-faint text-[10px] uppercase tracking-wider">Tattva</th><th className="text-left py-2 pr-2 text-ink-faint text-[10px] uppercase tracking-wider">Presiding Deity</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Function & Significance</th></tr></thead>
          <tbody>{ashuddha.map(r => <tr key={r[0]} className="border-b border-border-light"><td className="py-2 pr-2 text-sage font-bold">{r[0]}</td><td className="py-2 pr-2 font-medium text-ink">{r[1]}</td><td className="py-2 pr-2 text-ink-muted">{r[2]}</td><td className="py-2 text-ink-light text-[13px]">{r[3]}</td></tr>)}</tbody>
        </table></div>
      </div>
    </div>
  );
}

export default function AnalagamaPage({ language }: { language: string }) {
  const { pageContent, isReady, contentRef } = usePageContent();
  const [highlightedLine, setHighlightedLine] = useState<number>(-1);

  const toc = [
    { id: 'intro', label: 'Introduction & Provenance' },
    { id: 'chatushpada', label: 'The Fourfold Path' },
    { id: 'kriya', label: '— Kriya Pada' },
    { id: 'charya', label: '— Charya Pada' },
    { id: 'yoga', label: '— Yoga Pada' },
    { id: 'jnana', label: '— Jnana / Vidya Pada' },
    { id: 'verses', label: 'Core Verses' },
    { id: 'tattvas', label: 'The 36 Tattvas' },
    { id: 'conclusion', label: 'Conclusion & Access' },
  ];

  return (
    <div className="pt-6 pb-12 px-4" ref={contentRef}>
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex justify-center mb-4"><DharmaWheel size={60} spinning={true} color="#C24D2B" /></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Analāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">अनलागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Fourteenth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु चतुर्दशः — अग्नि-तत्त्व एवं तेजः प्रधान शैवसिद्धान्त दर्शन</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="अनलागम — Complete Page Audio Narration"
              onLineRead={(lineIndex, text) => {
                setHighlightedLine(lineIndex);
              }}
            />
          ) : (
            <div className="text-center py-4 text-ink-muted">
              Preparing audio content...
            </div>
          )}
        </div>

        {/* Table of Contents */}
        <div className="bg-surface border border-border rounded-xl p-5 mb-10">
          <h3 className="font-display text-sm font-semibold text-ink-faint uppercase tracking-wider mb-3">विषय-सूची — Table of Contents</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {toc.map((item, i) => (
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-ink-muted hover:text-vermillion hover:bg-vermillion/5 transition-colors">
                <span className="text-vermillion/50 text-xs">{i + 1}.</span> {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* ===== SECTION 1: INTRODUCTION ===== */}
        <Section id="intro" title="1. Introduction & Scriptural Provenance" hindiTitle="१. प्रस्तावना एवं शास्त्रीय उत्पत्ति">
          <p>The <strong>Analāgama</strong> (अनलागम) occupies the <strong>fourteenth position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Anala</em> (अनल), meaning "Fire" — one of the most sacred and transformative elements in Shaiva cosmology. Thus, <strong>Analāgama is "The Scripture of Fire"</strong> — the Āgama that illuminates the path of spiritual transformation through the fiery grace of Shiva.</p>

          <p>As part of the <strong>Rudrabheda</strong> group, the Analāgama carries the fierce, transformative energy of its namesake. It is unique among the Āgamas for its concentrated focus on <strong>Agni-tattva</strong> (the fire element) as both the outer ritual instrument and the inner spiritual force that burns away ignorance and impurities.</p>

          <Verse
            sanskrit={`अनलः शिवरूपोऽयं ज्वालामाली विराजते ।\nयस्य दर्शनमात्रेण पापं दहति सर्वशः ॥`}
            transliteration="Analaḥ śivarūpo'yaṃ jvālāmālī virājate | Yasya darśanamātreṇa pāpaṃ dahati sarvaśaḥ ||"
            meaning="This Fire, having the form of Shiva, shines with a garland of flames. By merely seeing it, all sin is burned away entirely."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Aghora Face</h3>
          <p>The Analāgama emanates from <strong>Aghora</strong> (अघोर), the southward-facing aspect of Sadāshiva. Aghora represents <strong>transformation, dissolution, and the fierce grace</strong> that burns away impurities. This face is associated with the element of <strong>Fire (Agni/Anala)</strong>, the color <strong>black</strong>, and the function of dissolution (<em>saṃhāra</em>) within the Pañchabrahma system. The Analāgama is thus the Āgama most intimately connected with the elemental nature of its originating face.</p>

          <p>The original scope of the Analāgama is traditionally stated as <strong>thirty thousand (30,000) verses</strong> — a concise yet potent corpus that distills the fiery essence of Shaiva practice into concentrated form.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Netra (Eye)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Analāgama is assigned to the <strong>Netra (नेत्र) — the eyes</strong>. This placement is profoundly significant:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Vision and Illumination:</strong> The eyes are the organs of sight — representing this Āgama's power to grant spiritual vision (<em>divya-cakṣus</em>) and illuminate the path to liberation.</li>
            <li><strong>Fire as Light:</strong> Just as the eye reveals form through light, the Analāgama reveals truth through the fiery light of knowledge (<em>jñāna-jvālā</em>).</li>
            <li><strong>Transformative Gaze:</strong> The gaze of Shiva (through Aghora) is said to burn away impurities — symbolizing this Āgama's emphasis on the transformative power of divine sight.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Upāgama (उपागम)</h3>
          <p>The Analāgama has one subsidiary text:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Āgneya / Analam</td><td className="py-2 pr-3 font-devanagari text-ink-muted">आग्नेय / अनलम्</td><td className="py-2 text-ink-light">Fire rituals (Agni-kārya); Homa-vidhi; consecration of fire-pits (kunda); inner fire meditation (Agni-dhyāna)</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Analāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
            {[
              { name: 'Kriyā Pāda', hindi: 'क्रिया पाद', desc: 'Ritual Action', color: 'bg-vermillion/8 text-vermillion' },
              { name: 'Caryā Pāda', hindi: 'चर्या पाद', desc: 'Daily Conduct', color: 'bg-turmeric/8 text-turmeric-deep' },
              { name: 'Yoga Pāda', hindi: 'योग पाद', desc: 'Yogic Practice', color: 'bg-sage/8 text-sage' },
              { name: 'Jñāna Pāda', hindi: 'ज्ञान पाद', desc: 'Knowledge', color: 'bg-lotus/8 text-lotus' },
            ].map(p => (
              <div key={p.name} className={`rounded-lg p-3 text-center ${p.color}`}>
                <p className="font-display font-bold text-sm">{p.name}</p>
                <p className="font-devanagari text-xs mt-0.5">{p.hindi}</p>
                <p className="text-[11px] mt-1 opacity-70">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* KRIYA PADA */}
        <Section id="kriya" title="2.1 Kriyā Pāda — The Path of Sacred Action" hindiTitle="२.१ क्रिया पाद — पवित्र कर्म का मार्ग">
          <p>The Kriyā Pāda of the Analāgama is distinguished by its extraordinary emphasis on <strong>Agni-kārya</strong> (fire rituals) as the supreme means of purification and communion with Shiva. It covers:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Homa-Vidhi (Fire Sacrifice Procedures)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Kuṇḍa Nirmāṇa</strong> — Construction of fire-pits with precise geometric specifications; square for Brahma, circular for Rudra, semi-circular for Vishnu</li>
            <li><strong>Agni-prakṣepa</strong> — Methods of generating sacred fire through friction (araṇi), crystal (sphaṭika), or eternal flame (anvāhārya)</li>
            <li><strong>Samidha Saṃskāra</strong> — Consecration of sacrificial firewood with mantras; specific woods for specific deities (palāśa for Surya, aśvattha for Vishnu, audumbara for Shiva)</li>
            <li><strong>Haviṣ Saṃskāra</strong> — Preparation of oblations (ghṛta, payas, caru) with precise measurements and mantric infusion</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Śivārcana with Fire</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Agni-Śiva Saṃyoga</strong> — The theological identification of ritual fire with Shiva Himself</li>
            <li><strong>Dhūpa-dīpa Niyama</strong> — Regulations for incense and lamp offerings using specific resins (guggulu, karpūra, agaru) that please Aghora-face deities</li>
            <li><strong>Agni-mūrti Pūjā</strong> — Worship of fire as the visible form of Shiva in temples and home shrines</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Temple Architecture (Ālaya-Nirmāṇa)</h4>
          <p>The Analāgama provides specific architectural guidelines for temples emphasizing fire:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Agni-koṇa Orientation</strong> — Southeast orientation for the main Homa-kuṇḍa</li>
            <li><strong>Garbhagṛha Jyoti</strong> — Eternal lamp (nanda-dīpa) specifications within the sanctum</li>
            <li><strong>Dhūma-mārga</strong> — Smoke channels and ventilation designed to carry sacred smoke as blessing</li>
          </ul>

          <Verse
            sanskrit={`अग्निर्देवो महानेष शिवरूपः प्रकीर्तितः ।\nहोमेन तर्पयेद्यस्तं स याति परमं पदम् ॥`}
            transliteration="Agnirdevo mahāneṣa śivarūpaḥ prakīrtitaḥ | Homena tarpayedyastaṃ sa yāti paramaṃ padam ||"
            meaning="This great Fire is declared to have the form of Shiva. He who propitiates Him through Homa attains the supreme state."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>daily behavioral framework</strong> with special emphasis on fire-related observances:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Nitya-Pūjā-Vidhi)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Agni-hotra</strong> — Twice-daily fire offering at sunrise and sunset with specific mantras</li>
            <li><strong>Dīpa-dāna</strong> — Offering of lamps at dawn and dusk; the lamp as symbol of the soul's journey toward Shiva</li>
            <li><strong>Tripuṇḍra with Bhasma</strong> — Application of sacred ash (vibhūti) from the Homa fire, marking the three horizontal lines with Aghora-mantra</li>
            <li><strong>Pañcakāla Pūjā</strong> — Five-time daily worship with fire offerings at each session</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Analāgama prescribes specific <strong>vratas</strong> including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Agni-ṣaṣṭhī</strong> — Sixth-day observance dedicated to Agni-Shiva</li>
            <li><strong>Kārttika Dīpotsava</strong> — Month-long lamp festival with elaborate Homa sequences</li>
            <li><strong>Aghora Vrata</strong> — Fierce observance involving fire meditation and austerity</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>Unique fire-based penances including <strong>Agni-praveśa</strong> (walking through fire symbolically), <strong>Homa-kṛcchra</strong> (fire austerity), and <strong>Cāndrāyaṇa-homa</strong> (combined lunar-fast and fire ritual).</p>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Analāgama presents <strong>Agni-Yoga</strong> — the yoga of inner fire:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and Their Presiding Deities</h4>
          <p>The Analāgama provides a complete mapping of the <strong>36 Tattvas</strong> with emphasis on Agni-tattva as the bridge between subtle and gross creation. <em>(See detailed table in Section 4 below.)</em></p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Agni-Yoga — The Yoga of Inner Fire</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Jāṭhara-Agni</strong> — Cultivation of the digestive fire as metaphor for spiritual digestion of experience</li>
            <li><strong>Kuṇḍalinī as Jvālā</strong> — The serpent power visualized as a flame ascending through the Chakras</li>
            <li><strong>Dhūmāvatī Dhyāna</strong> — Meditation on smokeless flame at the Ājñā Chakra representing pure consciousness</li>
            <li><strong>Agni-bīja</strong> — Use of the seed mantra "Raṃ" (रं) associated with the fire element</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Shaiva Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Non-violence, truthfulness, non-stealing, brahmacharya, aparigraha</li>
            <li><strong>Niyama</strong> — Śauca, Santoṣa, Tapas oriented toward Agni, Svādhyāya, Īśvara-praṇidhāna</li>
            <li><strong>Āsana</strong> — Vīrāsana, Padmāsana for fire meditation</li>
            <li><strong>Prāṇāyāma</strong> — Sūrya-bhedana (right-nostril breathing) to increase inner heat; Bhastrikā for purification</li>
            <li><strong>Pratyāhāra</strong> — Withdrawal of senses into the inner fire at the navel (Maṇipūra)</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the flame of consciousness</li>
            <li><strong>Dhyāna</strong> — Meditation on Shiva as the infinite fire of pure awareness</li>
            <li><strong>Samādhi</strong> — Absorption in the smokeless flame of Shiva-tattva</li>
          </ul>

          <Verse
            sanskrit={`अन्तर्ज्वालां समालोक्य हृदये संस्थितां शिवाम् ।\nयोगी युञ्जीत सततं स याति परमं पदम् ॥`}
            transliteration="Antarjvālāṃ samālokya hṛdaye saṃsthitāṃ śivām | Yogī yuñjīta satataṃ sa yāti paramaṃ padam ||"
            meaning="Having beheld the inner flame, the auspicious fire established in the heart, the yogi should constantly unite with it. He attains the supreme state."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda presents the core metaphysical framework through the <strong>Pati-Paśu-Pāśa</strong> doctrine with special emphasis on fire as the metaphor for grace:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya)</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Lord as Anala</h5>
            <p className="text-ink-light text-sm">Shiva as the Supreme Reality is <strong>Anala-mūrti</strong> — the form of fire. He is the uncaused cause, the self-luminous consciousness that needs no other light to be known. Just as fire transforms all it touches without being itself transformed, Shiva transforms the bound soul without Himself being affected.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Bound Soul</h5>
            <p className="text-ink-light text-sm">The individual soul is <strong>eternally real</strong> — a spark of the divine fire, not separate in essence but distinct in manifestation. The soul's bondage is like iron heated in fire — it becomes fire-like but is not fire itself. Through grace, the soul becomes Shiva-like while retaining its unique identity.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Bond</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala</strong> — The innate impurity of finitude, burned away by the fire of Śaktipāta (grace descent)</li>
              <li><strong>Māyā Mala</strong> — The material impurity, the fuel that sustains the fire of worldly experience until consumed by knowledge</li>
              <li><strong>Kārma Mala</strong> — The impurity of accumulated karma, the residue that must be offered into the fire of ritual action</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Śiva-Sāyujya (शिव-सायुज्य)</h4>
          <p>The ultimate goal is <strong>Śiva-sāyujya</strong> — union with Shiva. In the Analāgama, this is described as the soul becoming <strong>"fire-like"</strong> (<em>ānala-sama</em>) — radiant, pure, self-luminous, and capable of burning away the darkness of others' ignorance through compassion.</p>

          <Verse
            sanskrit={`पतिः पशुपतिः शम्भुः पाशं मोचयते सदा ।\nज्ञानेन कर्मणा भक्त्या शिवसायुज्यमाप्नुयात् ॥`}
            transliteration="Patiḥ paśupatiḥ śambhuḥ pāśaṃ mocayate sadā | Jñānena karmaṇā bhaktyā śivasāyujyamāpnuyāt ||"
            meaning="The Lord, Pashupati Shambhu, ever liberates from bondage. Through knowledge, action, and devotion, one attains Shiva-Sayujya (union with Shiva)."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 3: CORE VERSES ===== */}
        <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
          <Verse
            sanskrit={`अनलं शिवरूपं तं ज्वालामालिनमीश्वरम् ।\nध्यायन्ते योगिनः सन्तः सदा मुक्तिपरायणाः ॥`}
            transliteration="Analaṃ śivarūpaṃ taṃ jvālāmālinamīśvaram | Dhyāyante yoginaḥ santaḥ sadā muktiparāyaṇāḥ ||"
            meaning="The saints and yogis, ever intent on liberation, meditate on Anala, who has the form of Shiva, the Lord garlanded with flames."
          />

          <Verse
            sanskrit={`शिवज्ञानं परं ज्ञानं शिवध्यानं परं तपः ।\nशिवपूजा परा पूजा शिवभक्तिः परा गतिः ॥`}
            transliteration="Śivajñānaṃ paraṃ jñānaṃ śivadhyānaṃ paraṃ tapaḥ | Śivapūjā parā pūjā śivabhaktiḥ parā gatiḥ ||"
            meaning="Knowledge of Shiva is the supreme knowledge. Meditation on Shiva is the supreme austerity. Worship of Shiva is the supreme worship. Devotion to Shiva is the supreme goal."
          />

          <Verse
            sanskrit={`आगमोक्तविधानेन यः पूजयति शङ्करम् ।\nस याति परमं स्थानं यत्र गत्वा न शोचति ॥`}
            transliteration="Āgamoktavidhānena yaḥ pūjayati śaṅkaram | Sa yāti paramaṃ sthānaṃ yatra gatvā na śocati ||"
            meaning="He who worships Shankara according to the methods prescribed in the Agamas reaches the supreme abode, having reached which one grieves no more."
          />

          <Verse
            sanskrit={`मलत्रयविनिर्मुक्तः शिवशक्तिसमन्वितः ।\nपशुपाशविनिर्मुक्तो जीवः शिवसमो भवेत् ॥`}
            transliteration="Malatrayavinirmuktaḥ śivaśaktisamanvitaḥ | Paśupāśavinirmukto jīvaḥ śivasamo bhavet ||"
            meaning="Freed from the three Malas, endowed with Shiva's Shakti, liberated from the bonds of Pashu — the soul becomes equal to Shiva."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 4: 36 TATTVAS ===== */}
        <Section id="tattvas" title="4. The 36 Tattvas According to Analāgama" hindiTitle="४. अनलागम के अनुसार ३६ तत्त्व">
          <p>The Analāgama presents the complete exposition of the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) with special emphasis on Agni-tattva as the transformative bridge between the pure and impure realms.</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Analāgama</h4>
          <p>The Analāgama occupies a unique position as <strong>the Āgama of Fire</strong>. It teaches that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Fire is Shiva</strong> — The ritual fire is not merely a symbol but the actual presence of the Lord.</li>
            <li><strong>Transformation is Grace</strong> — The fierce, burning quality of fire represents the transformative power of divine grace that destroys ignorance.</li>
            <li><strong>Concise Potency</strong> — Despite being one of the shorter Āgamas (30,000 verses), its concentrated fire-teachings carry immense power.</li>
          </ul>
          <p className="mt-3">This makes the Analāgama particularly relevant for seekers drawn to <strong>transformative practice</strong> — those who understand that spiritual growth often requires the burning away of old patterns through disciplined ritual and inner fire.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses research on Analagama and Agneya Upagama.', url: 'https://www.ifpindia.org' },
              { name: 'Himalayan Academy, Hawaii', desc: 'Publisher of comprehensive Shaiva Siddhanta resources.', url: 'https://www.himalayanacademy.com' },
              { name: 'IGNCA (Indira Gandhi National Centre for the Arts)', desc: 'Digital repository of rare manuscripts.', url: 'https://ignca.gov.in' },
              { name: 'Shaiva Agama Research Centre, Chennai', desc: 'Dedicated to preservation and teaching of Shaiva Agamas.', url: 'https://shaivam.org' },
              { name: 'Oriental Research Institute, Mysore', desc: 'Houses palm-leaf manuscripts of several Shaiva Agamas.', url: 'https://ori.uni-mysore.ac.in' },
              { name: 'Muktabodha Indological Research Institute', desc: 'Digital library of Shaiva and Tantric manuscripts.', url: 'https://muktabodha.org' },
            ].map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-surface border border-border rounded-lg hover:border-vermillion/30 transition-colors">
                <p className="font-display font-semibold text-ink text-sm">{s.name}</p>
                <p className="text-ink-faint text-[12px] mt-1 leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>

          <Verse
            sanskrit={`ॐ नमः शिवाय ।\nअनलागमं समाश्रित्य शिवज्ञानं प्रकाशते ।\nपशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥`}
            transliteration="Oṃ Namaḥ Śivāya | Analāgamaṃ samāśritya śivajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Analagama, the knowledge of Shiva illuminates — for the purpose of liberation from the bonds of the Pashu, for the attainment of union with Shiva."
          />
        </Section>
      </div>
    </div>
  );
}