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

export default function SvayambhuvagamaPage({ language }: { language: string }) {
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
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex justify-center mb-4"><DharmaWheel size={60} spinning={true} color="#C24D2B" /></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Svāyambhuvāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">स्वायम्भुवागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Thirteenth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु त्रयोदशः — आत्मोत्पत्ति एवं स्वयंभू लिङ्गाराधन प्रधान</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="स्वायम्भुवागम — Complete Page Audio Narration"
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

        <div ref={contentRef}>

        {/* ===== SECTION 1: INTRODUCTION ===== */}
        <Section id="intro" title="1. Introduction & Scriptural Provenance" hindiTitle="१. प्रस्तावना एवं शास्त्रीय उत्पत्ति">
          <p>The <strong>Svāyambhuvāgama</strong> (स्वायम्भुवागम) occupies the <strong>thirteenth position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Svāyambhū</em> (स्वायम्भू), meaning "Self-Born" or "Self-Existent" — a direct epithet of Lord Shiva as the uncaused first cause, the originless origin of all manifestation. Thus, <strong>Svāyambhuvāgama is "The Scripture of the Self-Born Lord."</strong></p>

          <p>As the first of the <strong>Rudrabheda</strong> group of Āgamas, the Svāyambhuvāgama marks the transition from the Śivabheda (dualistic) to the Rudrabheda (dual-nondual) division. It retains the rigorous ritual framework of the earlier Āgamas while introducing deeper metaphysical subtleties regarding the nature of the soul's self-awareness (<em>ātmāvabodha</em>) and the spontaneous emergence of creation from Shiva's sovereign will.</p>

          <Verse
            sanskrit="स्वायम्भुवं समासाद्य यः शिवं ध्यायते सदा ।
स्वयमेव भवेत् सिद्धः स्वातन्त्र्येण विराजते ॥"
            transliteration="Svāyambhuvaṃ samāsādya yaḥ śivaṃ dhyāyate sadā | Svayameva bhavet siddhaḥ svātantryeṇa virājate ||"
            meaning="He who, having attained the Svayambhuva, meditates on Shiva constantly, becomes perfected by himself and shines with absolute freedom."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Aghora Face</h3>
          <p>The Svāyambhuvāgama emanates from <strong>Aghora</strong> (अघोर), the southward-facing aspect of Sadāshiva. Aghora represents <strong>transformation, dissolution, and the fierce grace</strong> that burns away impurities. This face is associated with the element of <strong>Fire (Agni)</strong>, the color <strong>black</strong>, and the function of dissolution (<em>saṃhāra</em>) within the Pañchabrahma system. From this face, the Āgama carries the power to dissolve ignorance and reveal the self-luminous nature of Shiva.</p>

          <p>The original scope of the Svāyambhuvāgama is traditionally stated as <strong>thirty-five million (3.5 crore) verses</strong> — an immense corpus reflecting its comprehensive treatment of cosmogony, ritual, and liberation. The available recensions represent condensed transmissions preserved through the lineage of celestial sages.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Stanastha (Nipple)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Svāyambhuvāgama is assigned to the <strong>Stanastha (स्तनस्थ) — the nipple/breast region</strong>. This placement is profoundly significant:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Nourishment and Sustenance:</strong> The breast is the source of primal nourishment — representing this Āgama's role in spiritually nurturing devotees through the milk of wisdom and ritual grace.</li>
            <li><strong>Life-Giving Energy:</strong> Just as the nipple is the channel through which life-sustaining energy flows, this Āgama channels Shiva's grace (<em>anugraha</em>) to the bound soul.</li>
            <li><strong>Intimacy and Closeness:</strong> The breast region signifies the closest proximity to the heart — symbolizing the Svāyambhuvāgama's emphasis on direct, intimate communion with the Self-Born Lord.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Three Upāgamas (उपागम)</h3>
          <p>Each primary Āgama has subsidiary texts called Upāgamas that elaborate on specific aspects. The Svāyambhuvāgama's three Upāgamas are:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Prajāpatimatam</td><td className="py-2 pr-3 font-devanagari text-ink-muted">प्रजापतिमतम्</td><td className="py-2 text-ink-light">Cosmogonic processes; the role of Prajapati in creation; progeny and lineage rituals</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Padmam</td><td className="py-2 pr-3 font-devanagari text-ink-muted">पद्मम्</td><td className="py-2 text-ink-light">Lotus symbolism; padmāsana meditation; Shri-puja and prosperity rituals</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Svāyambuvam</td><td className="py-2 pr-3 font-devanagari text-ink-muted">स्वायम्भुवम्</td><td className="py-2 text-ink-light">Self-manifested worship; svayambhū liṅga protocols; spontaneous spiritual awakening</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Svāyambhuvāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation:</p>
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
          <p>The Kriyā Pāda of the Svāyambhuvāgama places special emphasis on <strong>spontaneously manifested forms of Shiva</strong> (Svāyambhū Liṅga) and the rituals appropriate to them. It covers:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Svāyambhū Liṅga Worship</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Svāyambhū Lakṣaṇa</strong> — Identification and classification of self-manifested Liṅgas based on natural formation, geological characteristics, and energetic signatures</li>
            <li><strong>Prākṛta Pūjā</strong> — Worship protocols for natural Liṅgas that do not require prāṇa-pratiṣṭhā (since they are already self-ensouled)</li>
            <li><strong>Paristara Vidhi</strong> — Procedures for constructing appropriate enclosures, platforms, and temple structures around Svāyambhū Liṅgas</li>
            <li><strong>Jala-śāyī Liṅga</strong> — Special protocols for Liṅgas emerging from water sources, earth, or rock formations</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Temple Architecture (Ālaya-Nirmāṇa)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Bhūmi-parīkṣā</strong> — Soil testing and land selection emphasizing natural energy currents (<em>vāstu-puruṣa</em> alignment)</li>
            <li><strong>Garbhagṛha Ratios</strong> — Sanctum dimensions following the 1:2:4 proportion system specific to Svāyambhuva temples</li>
            <li><strong>Prākāra Design</strong> — Concentric enclosures representing the fivefold manifestation of Shiva from center to periphery</li>
            <li><strong>Toraṇa and Dvāra</strong> — Gateway specifications and threshold rituals symbolizing transition from mundane to sacred space</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Ritual Worship (Pūjā, Homa, Japa)</h4>
          <p>The Svāyambhuvāgama prescribes the <strong>Ṣoḍaśopacāra Pūjā</strong> (sixteen-step worship) with special emphasis on:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Dhūpa and Dīpa</strong> — Incense and lamp offerings using specific resins and oils appropriate to Aghora-face deities</li>
            <li><strong>Naivedya</strong> — Food offerings prepared without onion/garlic, emphasizing pure sattvic preparations</li>
            <li><strong>Tāmbūla</strong> — Betel leaf offerings as a concluding sacrament symbolizing completeness</li>
          </ul>

          <Verse
            sanskrit="स्वायम्भुवं लिङ्गमीशस्य पूजयेत् परमार्थतः ।
न तत्र प्रतिष्ठा कार्या स्वयं प्राणी सदाशिवः ॥"
            transliteration="Svāyambhuvaṃ lingamīśasya pūjayet paramārthataḥ | Na tatra pratiṣṭhā kāryā svayaṃ prāṇī sadāśivaḥ ||"
            meaning="One should worship the Svayambhu Linga of Ishvara in the highest manner. There, installation is not required, for Sadasiva himself is inherently ensouled."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>daily behavioral framework</strong> for the Shaiva practitioner, with special attention to the conduct of those serving Svāyambhū shrines:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Nitya-Pūjā-Vidhi)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Brāhma Muhūrta</strong> — Rising 96 minutes before sunrise; Śiva-smaraṇa as the first conscious act</li>
            <li><strong>Snāna-vidhi</strong> — Ritual bathing with mantras; application of Vibhūti in Tripuṇḍra (three horizontal lines) with Aghora-mantra</li>
            <li><strong>Rudrākṣa Dhāraṇa</strong> — Wearing of Rudrākṣa beads consecrated according to Svāyambhuva protocols</li>
            <li><strong>Pañcakāla Pūjā</strong> — Five-time daily worship: Abhigamana, Upādāna, Ijyā, Svādhyāya, Yoga</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Svāyambhuvāgama prescribes specific <strong>vratas</strong> including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Svāyambhū Jayanti</strong> — Annual celebration commemorating the self-manifestation of the Liṅga</li>
            <li><strong>Aghora Vrata</strong> — Special observance dedicated to the Aghora face of Shiva</li>
            <li><strong>Pradoṣa Vrata</strong> — Fortnightly observance with Svāyambhuva-specific mantras</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>Detailed protocols for purification after ritual errors, including Kṛcchra, Cāndrāyaṇa, and specific penances for offenses against Svāyambhū Liṅgas.</p>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Svāyambhuvāgama presents a system of <strong>Shaiva Yoga</strong> emphasizing the spontaneous recognition of one's own self-nature as identical with Shiva:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and Their Presiding Deities</h4>
          <p>The Svāyambhuvāgama provides a complete mapping of the <strong>36 Tattvas</strong> with their presiding deities (Tattveshvaras). <em>(See detailed table in Section 4 below.)</em></p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Svāyambhū Yoga — Spontaneous Recognition</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Ātma-darśana</strong> — Direct vision of the Self without mediation; recognizing one's innate Shiva-nature</li>
            <li><strong>Nirvikalpa Samādhi</strong> — Absorption without mental constructs; resting in pure self-awareness</li>
            <li><strong>Aghora-dhyāna</strong> — Meditation on the transformative aspect of Shiva as the dissolver of limitations</li>
            <li><strong>Bīja-nyāsa</strong> — Placement of seed mantras at specific body centers to awaken latent energies</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Shaiva Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Non-violence, truthfulness, non-stealing, brahmacharya, aparigraha — oriented toward service to Shiva in all beings</li>
            <li><strong>Niyama</strong> — Śauca, Santoṣa, Tapas directed toward Aghora, Svādhyāya of Svāyambhuva texts, Īśvara-praṇidhāna</li>
            <li><strong>Āsana</strong> — Padmāsana, Siddhāsana, Svastikāsana for extended meditation</li>
            <li><strong>Prāṇāyāma</strong> — Nāḍī-śuddhi through alternate nostril breathing; Aghora-bīja synchronized with breath</li>
            <li><strong>Pratyāhāra</strong> — Withdrawal of senses into the inner Liṅga at the heart</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the five Brahmamantras at five body centers</li>
            <li><strong>Dhyāna</strong> — Meditation on Sadāśiva's five faces with emphasis on Aghora</li>
            <li><strong>Samādhi</strong> — Absorption in Shiva-tattva; experience of Śiva-sāyujya</li>
          </ul>

          <Verse
            sanskrit="स्वायम्भुवो योगविदां वरः प्रोक्तः
स्वात्मन्यवस्थापयति प्रभुं परम् ।
तत्सायुज्यं याति नरः शिवेन
स्वातन्त्र्यं प्राप्नोति चिरायुषोऽपि ॥"
            transliteration="Svāyambhuvo yogavidāṃ varaḥ proktaḥ | Svātmanyavasthāpayati prabhuṃ param | Tat-sāyujyaṃ yāti naraḥ śivena | Svātantryaṃ prāpnoti cirāyuṣo'pi ||"
            meaning="The Svayambhuva Yoga, declared supreme among yogic paths, establishes the Lord within one's own Self. Through this, a person attains union with Shiva and obtains absolute freedom, even while living a long life."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda represents the <strong>philosophical summit</strong> of the Svāyambhuvāgama. It presents the core metaphysical framework through the <strong>Pati-Paśu-Pāśa</strong> doctrine:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya)</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Lord</h5>
            <p className="text-ink-light text-sm">Shiva as the Supreme Reality — self-born, self-existent, without origin or end. He is <strong>Svāyambhū</strong> (self-born), <strong>Svātantrya</strong> (absolutely independent), and <strong>Sarvajña</strong> (all-knowing). Unlike created beings, Shiva's existence is absolutely self-grounded — He is the necessary being from whom all contingent existence flows.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Bound Soul</h5>
            <p className="text-ink-light text-sm">The individual soul (Ātman/Jīva) is <strong>eternally real</strong> — not an illusion, not a modification of Brahman, but a distinct conscious entity. However, it is bound by three fetters (Pāśa). The soul is <strong>Jña</strong> (knowing) by nature but its knowledge is <strong>obscured</strong> by Mala. The Svāyambhuvāgama emphasizes that the soul's bondage is beginningless (anādi) but <strong>has an end</strong> — through Shiva's grace.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Bond</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala (आणव मल)</strong> — The innate impurity of finitude. The primordial ignorance that makes the infinite soul feel limited. It is <strong>beginningless</strong> and can only be removed by Shiva's direct grace (Śaktipāta).</li>
              <li><strong>Māyā Mala (माया मल)</strong> — The material impurity. Maya is the <strong>real</strong> substance from which the 36 Tattvas are evolved. It provides the soul with bodies, instruments, and worlds for experience.</li>
              <li><strong>Kārma Mala (कार्म मल)</strong> — The impurity of accumulated karma. The residue of actions (Puṇya and Pāpa) that binds the soul to the cycle of rebirth.</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Śiva-Sāyujya (शिव-सायुज्य)</h4>
          <p>The ultimate goal described in the Svāyambhuvāgama is <strong>Śiva-sāyujya</strong> — intimate union with Shiva. This is not merger or dissolution of the soul, but rather the soul <strong>attaining Shiva's qualities</strong> (omniscience, omnipotence, bliss) while retaining its individual identity. The liberated soul becomes <strong>"like Shiva but not Shiva himself"</strong> — enjoying all of Shiva's powers through His grace.</p>

          <Verse
            sanskrit="पतिः पशुपतिः शम्भुः पाशं मोचयते सदा ।
ज्ञानेन कर्मणा भक्त्या शिवसायुज्यमाप्नुयात् ॥"
            transliteration="Patiḥ paśupatiḥ śambhuḥ pāśaṃ mocayate sadā | Jñānena karmaṇā bhaktyā śivasāyujyamāpnuyāt ||"
            meaning="The Lord, Pashupati Shambhu, ever liberates from bondage. Through knowledge, action, and devotion, one attains Shiva-Sayujya (union with Shiva)."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 3: CORE VERSES ===== */}
        <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
          <Verse
            sanskrit="स्वायम्भुवः शिवः साक्षाद् यतः सर्वमिदं ततः ।
तं नमामि सदा भक्त्या यस्य नास्ति परं पदम् ॥"
            transliteration="Svāyambhuvaḥ śivaḥ sākṣād yataḥ sarvamidaṃ tataḥ | Taṃ namāmi sadā bhaktyā yasya nāsti paraṃ padam ||"
            meaning="I bow forever with devotion to Svayambhu Shiva, from whom all this has directly come forth, who has no higher abode."
          />

          <Verse
            sanskrit="शिवज्ञानं परं ज्ञानं शिवध्यानं परं तपः ।
शिवपूजा परा पूजा शिवभक्तिः परा गतिः ॥"
            transliteration="Śivajñānaṃ paraṃ jñānaṃ śivadhyānaṃ paraṃ tapaḥ | Śivapūjā parā pūjā śivabhaktiḥ parā gatiḥ ||"
            meaning="Knowledge of Shiva is the supreme knowledge. Meditation on Shiva is the supreme austerity. Worship of Shiva is the supreme worship. Devotion to Shiva is the supreme goal."
          />

          <Verse
            sanskrit="आगमोक्तविधानेन यः पूजयति शङ्करम् ।
स याति परमं स्थानं यत्र गत्वा न शोचति ॥"
            transliteration="Āgamoktavidhānena yaḥ pūjayati śaṅkaram | Sa yāti paramaṃ sthānaṃ yatra gatvā na śocati ||"
            meaning="He who worships Shankara according to the methods prescribed in the Agamas reaches the supreme abode, having reached which one grieves no more."
          />

          <Verse
            sanskrit="मलत्रयविनिर्मुक्तः शिवशक्तिसमन्वितः ।
पशुपाशविनिर्मुक्तो जीवः शिवसमो भवेत् ॥"
            transliteration="Malatrayavinirmuktaḥ śivaśaktisamanvitaḥ | Paśupāśavinirmukto jīvaḥ śivasamo bhavet ||"
            meaning="Freed from the three Malas, endowed with Shiva's Shakti, liberated from the bonds of Pashu — the soul becomes equal to Shiva."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 4: 36 TATTVAS ===== */}
        <Section id="tattvas" title="4. The 36 Tattvas According to Svāyambhuvāgama" hindiTitle="४. स्वायम्भुवागम के अनुसार ३६ तत्त्व">
          <p>The Svāyambhuvāgama presents the complete exposition of the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) — the ontological framework of Shaiva Siddhanta. These 36 Tattvas describe the entire spectrum of reality from pure consciousness (Shiva) to gross matter (Earth).</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Svāyambhuvāgama</h4>
          <p>The Svāyambhuvāgama occupies a distinctive position as the <strong>gateway to the Rudrabheda Āgamas</strong>. It harmonizes two essential dimensions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Self-Manifested Divinity</strong> — Its focus on Svāyambhū Liṅgas teaches that Shiva is not dependent on human effort to become present; He reveals Himself spontaneously to those who are receptive.</li>
            <li><strong>Rigorous Ritual Framework</strong> — Despite emphasizing spontaneity, it maintains comprehensive ritual protocols, ensuring that devotion is channeled through disciplined practice.</li>
          </ul>
          <p className="mt-3">This balance makes the Svāyambhuvāgama particularly relevant for seekers who recognize that <strong>the divine is already present</strong> and that our task is to remove the veils of ignorance through systematic practice.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses critical editions and research on Svayambhuvagama fragments.', url: 'https://www.ifpindia.org' },
              { name: 'Himalayan Academy, Hawaii', desc: 'Publisher of comprehensive Shaiva Siddhanta resources. "Dancing with Shiva" provides accessible introduction to Agamic concepts.', url: 'https://www.himalayanacademy.com' },
              { name: 'IGNCA (Indira Gandhi National Centre for the Arts)', desc: 'Digital repository of rare manuscripts. Kalāmūlaśāstra series includes Agamic texts.', url: 'https://ignca.gov.in' },
              { name: 'Shaiva Agama Research Centre, Chennai', desc: 'Dedicated to preservation, publication, and teaching of Shaiva Agamas.', url: 'https://shaivam.org' },
              { name: 'Oriental Research Institute, Mysore', desc: 'Houses palm-leaf manuscripts of several Shaiva Agamas.', url: 'https://ori.uni-mysore.ac.in' },
              { name: 'Muktabodha Indological Research Institute', desc: 'Digital library of Shaiva and Tantric manuscripts. Searchable database of Agamic texts.', url: 'https://muktabodha.org' },
            ].map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-surface border border-border rounded-lg hover:border-vermillion/30 transition-colors">
                <p className="font-display font-semibold text-ink text-sm">{s.name}</p>
                <p className="text-ink-faint text-[12px] mt-1 leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>

          <Verse
            sanskrit="ॐ नमः शिवाय ।
स्वायम्भुवागमं समाश्रित्य शिवज्ञानं प्रकाशते ।
पशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Svāyambhuvāgamaṃ samāśritya śivajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Svayambhuvagama, the knowledge of Shiva illuminates — for the purpose of liberation from the bonds of the Pashu, for the attainment of union with Shiva."
          />
        </Section>
        </div>
      </div>
    </div>
  );
}