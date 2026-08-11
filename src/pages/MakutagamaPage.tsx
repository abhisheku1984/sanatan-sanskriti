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

export default function MakutagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Makuṭāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">मकुटागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Seventeenth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु सप्तदशः — मुकुट-तत्त्व एवं ऐश्वर्य प्रधान शैवसिद्धान्त दर्शन</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="मकुटागम — Complete Page Audio Narration"
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
          <p>The <strong>Makuṭāgama</strong> (मकुटागम) occupies the <strong>seventeenth position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Makuṭa</em> (मकुट), meaning "Crown" or "Diadem" — the ornamental headpiece that symbolizes supreme sovereignty and royal authority. Thus, <strong>Makuṭāgama is "The Scripture of the Crown"</strong> — the Āgama that crowns the seeker with the sovereignty of Shiva-consciousness.</p>

          <p>The Makuṭāgama represents the pinnacle of the Tatpuruṣa-face Āgamas, carrying the energy of preservation, sustenance, and sovereign grace. It teaches that the ultimate spiritual attainment is not merely liberation from bondage but the <strong>attainment of divine sovereignty</strong> (aiśvarya) — the soul becoming crowned with all the powers and qualities of Shiva.</p>

          <Verse
            sanskrit={`मकुटं शिवसाम्राज्यं यस्य शिरसि वर्तते ।\nमकुटागममाश्रित्य तत् साम्राज्यं लभेत सः ॥`}
            transliteration="Makuṭaṃ śivasāmrājyaṃ yasya śirasi vartate | Makuṭāgamamāśritya tat sāmrājyaṃ labheta saḥ ||"
            meaning="The crown is the sovereignty of Shiva, which rests upon the head. Taking refuge in the Makutagama, one attains that sovereignty."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Tatpuruṣa Face</h3>
          <p>The Makuṭāgama emanates from <strong>Tatpuruṣa</strong> (तत्पुरुष), the eastward-facing aspect of Sadāshiva. Tatpuruṣa represents <strong>preservation, sustenance, and the concealing grace</strong> that maintains cosmic order. This face is associated with the element of <strong>Air (Vāyu)</strong>, the color <strong>yellow/gold</strong>, and the function of preservation (<em>sthiti</em>) within the Pañchabrahma system. From this face, the Āgama derives its emphasis on maintaining spiritual discipline and sustaining the soul's connection with Shiva.</p>

          <p>The original scope of the Makuṭāgama is traditionally stated as <strong>one lakh (1,00,000) verses</strong> — a substantial corpus reflecting its comprehensive treatment of sovereignty, ritual, and the crowned state of liberation.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Makuṭa (Crown)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Makuṭāgama is assigned to the <strong>Makuṭa (मकुट) — the crown</strong>. This placement is profoundly significant:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Sovereignty and Authority:</strong> The crown is the symbol of supreme rulership — representing this Āgama's teaching that the liberated soul attains divine sovereignty, not servitude.</li>
            <li><strong>Highest Point:</strong> The crown is the highest point of the body — symbolizing the Makuṭāgama's position as the crowning scripture of the Tatpuruṣa-face Āgamas.</li>
            <li><strong>Adornment of Grace:</strong> Just as a crown adorns the monarch, this Āgama adorns the soul with the jewels of knowledge, devotion, and power.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Two Upāgamas (उपागम)</h3>
          <p>The Makuṭāgama has two subsidiary texts that elaborate on specific aspects:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Makuṭa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मकुट</td><td className="py-2 text-ink-light">Core crown rituals; royal consecration; sovereignty meditation; diadem symbolism</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Makuṭottara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मकुटोत्तर</td><td className="py-2 text-ink-light">Supplementary crown teachings; advanced sovereignty practices; supreme crown state</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Makuṭāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation:</p>
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
          <p>The Kriyā Pāda of the Makuṭāgama emphasizes <strong>royal ritual action</strong> — worship performed with the awareness of one's innate sovereignty as a child of Shiva. It covers:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Makuṭa-Pūjā (Crown Worship)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Śiraḥ-pūjā</strong> — Worship of the head/crown of the deity, recognizing Shiva as the supreme sovereign</li>
            <li><strong>Makuṭa-nyāsa</strong> — Placement of mantras on the crown of the practitioner, awakening the sovereign consciousness</li>
            <li><strong>Rājābhiṣeka-vidhi</strong> — Royal consecration rituals adapted for spiritual sovereignty; anointing the seeker with sacred waters and mantras</li>
            <li><strong>Ratna-makuṭa</strong> — Symbolic crown made of precious stones representing the jewels of spiritual attainment</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Temple Architecture (Ālaya-Nirmāṇa)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Śikhara-makuṭa</strong> — Temple tower design crowned with golden kalasha, representing the cosmic crown of Shiva</li>
            <li><strong>Garbhagṛha Orientation</strong> — Sanctum designed to emphasize the sovereign presence of the deity</li>
            <li><strong>Amaḻaka Placement</strong> — The ribbed stone disc atop the śikhara, symbolizing the crown of the cosmic body</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Ritual Worship (Pūjā, Homa, Japa)</h4>
          <p>The Makuṭāgama prescribes the <strong>Ṣoḍaśopacāra Pūjā</strong> with special emphasis on:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Makuṭa-arpaṇa</strong> — Offering of the crown (symbolic or actual) to the deity</li>
            <li><strong>Rājya-homa</strong> — Fire sacrifice for attaining spiritual sovereignty and dominion over the senses</li>
            <li><strong>Aiśvarya-japa</strong> — Mantra repetition for manifesting divine powers and prosperity</li>
          </ul>

          <Verse
            sanskrit={`मकुटेन विभूष्याथ यः पूजयति शङ्करम् ।\nस राजा भवति क्षिप्रं शिवराज्ये महात्मनाम् ॥`}
            transliteration="Makuṭena vibhūṣyātha yaḥ pūjayati śaṅkaram | Sa rājā bhavati kṣipraṃ śivarājye mahātmanām ||"
            meaning="He who, having adorned himself with the crown, worships Shankara — he quickly becomes a king in Shiva's realm of great souls."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>regal daily conduct</strong> of the Shaiva practitioner who recognizes his innate sovereignty:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Nitya-Pūjā-Vidhi)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Brāhma Muhūrta</strong> — Rising before dawn with the awareness of one's royal dignity as Shiva's child</li>
            <li><strong>Snāna-vidhi</strong> — Ritual bathing as royal ablution; application of Vibhūti as the mark of divine sovereignty</li>
            <li><strong>Śiva-mukuṭa-dhyāna</strong> — Meditation on Shiva's crowned form before commencing daily activities</li>
            <li><strong>Pañcakāla Pūjā</strong> — Five-time daily worship performed with royal dignity and devotion</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Makuṭāgama prescribes specific <strong>vratas</strong> including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Makuṭa-vrata</strong> — Observance dedicated to attaining the crown of spiritual knowledge</li>
            <li><strong>Aiśvarya-caturdaśī</strong> — Fourteenth-day observance for manifesting divine prosperity</li>
            <li><strong>Śivarātri</strong> — The great night of Shiva observed with sovereign devotion</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>Royal penances including extended service to the deity, generous donations, and purification through mantric empowerment.</p>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Makuṭāgama presents <strong>Makuṭa-Yoga</strong> — the yoga of the crowned consciousness:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and Their Presiding Deities</h4>
          <p>The Makuṭāgama provides a complete mapping of the <strong>36 Tattvas</strong> with emphasis on the soul's ascent to sovereignty. <em>(See detailed table in Section 4 below.)</em></p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Makuṭa-Yoga — The Yoga of the Crown</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Sahasrāra-makuṭa</strong> — Meditation on the crown chakra as the seat of divine sovereignty</li>
            <li><strong>Śiva-aiśvarya-dhyāna</strong> — Meditation on Shiva as the supreme monarch of the universe</li>
            <li><strong>Ātma-rājya</strong> — Establishment of the inner kingdom where the soul rules over the senses and mind</li>
            <li><strong>Makuṭa-bīja</strong> — Use of the seed mantra "Hsaum" (ह्सौं) associated with the crown and sovereignty</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Shaiva Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Non-violence, truthfulness, non-stealing, brahmacharya, aparigraha — practiced with royal dignity</li>
            <li><strong>Niyama</strong> — Śauca, Santoṣa, Tapas as sovereign austerity, Svādhyāya, Īśvara-praṇidhāna</li>
            <li><strong>Āsana</strong> — Padmāsana, Siddhāsana for sovereign meditation</li>
            <li><strong>Prāṇāyāma</strong> — Nāḍī-śuddhi; breath as the royal prana flowing through the kingdom of the body</li>
            <li><strong>Pratyāhāra</strong> — Withdrawal of senses into the crown center</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the jeweled crown of consciousness</li>
            <li><strong>Dhyāna</strong> — Meditation on Shiva as the crowned Lord of the universe</li>
            <li><strong>Samādhi</strong> — Sovereign absorption in Shiva-tattva</li>
          </ul>

          <Verse
            sanskrit={`सहस्रारे स्थितं मकुटं ध्यायन् योगी सदा शिवम् ।\nस मुक्तो भवति क्षिप्रं शिवराज्याधिपो महान् ॥`}
            transliteration="Sahasrāre sthitaṃ makuṭaṃ dhyāyan yogī sadā śivam | Sa mukto bhavati kṣipraṃ śivarājyādhipo mahān ||"
            meaning="The yogi who always meditates on Shiva with the crown established at the Sahasrara — he quickly becomes liberated, the great sovereign of Shiva's realm."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda presents the core metaphysical framework through the <strong>Pati-Paśu-Pāśa</strong> doctrine with emphasis on sovereignty:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya)</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Lord as Supreme Sovereign</h5>
            <p className="text-ink-light text-sm">Shiva as the Supreme Reality is <strong>Rājarāja</strong> — the King of Kings, the supreme sovereign who rules the entire cosmos with absolute authority. He is <strong>Svātantrya</strong> (absolutely independent), <strong>Sarvajña</strong> (all-knowing), and <strong>Aiśvarya-maya</strong> (full of divine powers). His crown is not an external ornament but the symbol of His absolute sovereignty over all realms of existence.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Bound Soul as Crown Prince</h5>
            <p className="text-ink-light text-sm">The individual soul is <strong>eternally real</strong> — not an illusion but the crown prince of Shiva, destined to inherit the kingdom of divine consciousness. The soul's bondage is like a prince who has forgotten his royal lineage. Through the Makuṭāgama's teachings, the soul remembers its innate sovereignty and claims its divine inheritance.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Bond</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala</strong> — The innate impurity of finitude; the forgetting of one's royal nature</li>
              <li><strong>Māyā Mala</strong> — The material impurity; the poverty of consciousness that makes the soul feel limited</li>
              <li><strong>Kārma Mala</strong> — The impurity of accumulated karma; the debts that bind the prince to servitude</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Śiva-Sāyujya (शिव-सायुज्य)</h4>
          <p>The ultimate goal is <strong>Śiva-sāyujya</strong> — union with Shiva. In the Makuṭāgama, this is described as the soul <strong>"being crowned with Shiva's sovereignty"</strong> — attaining all divine powers (aiśvarya), omniscience, and bliss while retaining individual identity as a sovereign lord in Shiva's eternal kingdom.</p>

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
            sanskrit={`मकुटं शिरसि धार्यं तु येन शम्भुः प्रसीदति ।\nतत् तेजः सर्वदा भाति मकुटागमतः परम् ॥`}
            transliteration="Makuṭaṃ śirasi dhāryaṃ tu yena śambhuḥ prasīdati | Tat tejaḥ sarvadā bhāti makuṭāgamataḥ param ||"
            meaning="The crown is to be worn on the head, by which Shambhu becomes pleased. That splendor shines forever, supreme through the Makutagama."
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
        <Section id="tattvas" title="4. The 36 Tattvas According to Makuṭāgama" hindiTitle="४. मकुटागम के अनुसार ३६ तत्त्व">
          <p>The Makuṭāgama presents the complete exposition of the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) with emphasis on the soul's ascent to the crowned state of liberation.</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Makuṭāgama</h4>
          <p>The Makuṭāgama occupies a distinctive position as <strong>the Āgama of Sovereignty</strong>. It teaches that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Liberation is sovereignty, not servitude</strong> — The soul does not become a servant of Shiva but a sovereign sharer in His divine kingdom.</li>
            <li><strong>The crown is within</strong> — True sovereignty is not external dominion but the mastery of one's own consciousness.</li>
            <li><strong>Ritual is royal celebration</strong> — Worship is not supplication but the joyous celebration of one's divine heritage.</li>
          </ul>
          <p className="mt-3">This makes the Makuṭāgama particularly relevant for seekers who understand that <strong>spiritual life is not about becoming less but about becoming more</strong> — more conscious, more powerful, more blissful, more sovereign.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses critical editions and research on Makutagama.', url: 'https://www.ifpindia.org' },
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
            sanskrit={`ॐ नमः शिवाय ।\nमकुटागमं समाश्रित्य शिवज्ञानं प्रकाशते ।\nपशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥`}
            transliteration="Oṃ Namaḥ Śivāya | Makuṭāgamaṃ samāśritya śivajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Makutagama, the knowledge of Shiva illuminates — for the purpose of liberation from the bonds of the Pashu, for the attainment of union with Shiva."
          />
        </Section>
      </div>
    </div>
  );
}