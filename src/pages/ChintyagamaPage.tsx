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

export default function ChintyagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Chintyāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">चिन्त्यागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Third of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु तृतीयः — शैवसिद्धान्त दर्शन का गहन अध्ययन</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="चिन्त्यागम — Complete Page Audio Narration"
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
          <p>The <strong>Shaiva Siddhanta</strong> tradition represents one of the most systematic and philosophically rigorous schools of Hindu theology. At its foundation lie the <strong>twenty-eight primary Shaiva Āgamas</strong> (अष्टाविंशति शैवागम), revealed by the five faces of Lord Sadāshiva — each face emanating a distinct set of scriptures that together constitute the complete body of Shaiva knowledge.</p>

          <p>The <strong>Chintyāgama</strong> (चिन्त्यागम) occupies the <strong>third position</strong> among these twenty-eight Āgamas. Its name derives from the Sanskrit root <em>chint</em> (चिन्त्) meaning "to contemplate" or "to reflect deeply" — thus <strong>Chintyāgama is "The Scripture of That Which Must Be Contemplated."</strong> This name is not merely titular; it encapsulates the Āgama's fundamental orientation toward integrating rigorous metaphysical contemplation (<em>tattva-chintana</em>) with practical ritual application (<em>kriyā-anuṣṭhāna</em>).</p>

          <Verse
            sanskrit="शिवात् दीप्तः, दीप्ताद् गोपतिः, गोपतेश्च अम्बिका ।
एवं परम्परा-प्राप्तं चिन्त्यागमम् अनुत्तमम् ॥"
            transliteration="Śivāt Dīptaḥ, Dīptād Gopatiḥ, Gopateśca Ambikā | Evaṃ paramparā-prāptaṃ Chintyāgamam anuttamam ||"
            meaning="From Shiva to Dipta, from Dipta to Gopati, and from Gopati to Ambika — thus was the supreme Chintyagama received through the sacred lineage of transmission."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Sadyojāta Face</h3>
          <p>The Chintyāgama emanates from <strong>Sadyojāta</strong> (सद्योजात), the westward-facing aspect of Sadāshiva. Sadyojāta represents <strong>creation, manifestation, and the initiatory impulse</strong> — the face through which Shiva's grace first touches the manifest world. This face is associated with the element of <strong>Earth (Pṛthvī)</strong>, the color <strong>white</strong>, and the creative function within the Pañchabrahma system.</p>

          <p>The original scope of the Chintyāgama is traditionally stated as <strong>one lakh (1,00,000) shlokas</strong> — a vast encyclopedic corpus. Like many Āgamas, the available recensions represent condensed versions transmitted through specific lineages, with the full text considered partially lost to the ravages of time.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Padāṅguli (Toes)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Chintyāgama is assigned to the <strong>Padāṅguli (पादाङ्गुलि) — the toes</strong>. This placement is profoundly significant:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Foundation and Movement:</strong> The toes are the point of contact between the divine body and the earth — representing the Āgama's emphasis on <em>practical application</em> and <em>grounded ritual action</em>.</li>
            <li><strong>Balance and Stability:</strong> Just as toes provide balance for the entire body, the Chintyāgama provides the stabilizing foundation of community worship and temple culture.</li>
            <li><strong>Functional Execution:</strong> Toes enable locomotion — symbolizing this Āgama's role in <em>moving</em> devotees from bondage (paśu-bhāva) toward liberation (Śiva-sāyujya) through step-by-step ritual progression.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Six Upāgamas (उपागम)</h3>
          <p>Each primary Āgama has subsidiary texts called Upāgamas that elaborate on specific aspects. The Chintyāgama's six Upāgamas are:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Sachintya</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सचिन्त्य</td><td className="py-2 text-ink-light">Extended contemplative methods; advanced meditation techniques on Shiva-tattva</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Subhaga</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सुभग</td><td className="py-2 text-ink-light">Auspicious rites; prosperity rituals, Shri-puja, and Lakshmi-Shiva combined worship</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Vāma</td><td className="py-2 pr-3 font-devanagari text-ink-muted">वाम</td><td className="py-2 text-ink-light">Left-hand (Vāmācāra) ritual frameworks; Shakti-oriented worship within Shaiva context</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Pāpanāśa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">पापनाश</td><td className="py-2 text-ink-light">Destruction of sin; expiatory rites (prāyaścitta), purification protocols, karmic cleansing</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Parodava</td><td className="py-2 pr-3 font-devanagari text-ink-muted">परोदव</td><td className="py-2 text-ink-light">Supreme emergence; cosmogonic processes, creation-dissolution cycles, Shiva's Pañchakṛtya</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Amṛta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अमृत</td><td className="py-2 text-ink-light">Nectar of immortality; Soma rituals, Amṛta-dhāra meditation, liberation through grace</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Chintyāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation:</p>
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
          <p>The Kriyā Pāda of the Chintyāgama is arguably its most extensive section, reflecting the Āgama's foundational emphasis on <strong>temple-centric worship</strong> as the primary vehicle for spiritual transformation. It covers:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Temple Architecture (Ālaya-Nirmāṇa / आलय-निर्माण)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Bhū-parīkṣā</strong> — Land selection through soil testing, water-table analysis, and directional auspiciousness</li>
            <li><strong>Vāstu-Puruṣa Maṇḍala</strong> — The sacred geometric grid (64 or 81 squares) governing temple layout</li>
            <li><strong>Garbhagṛha specifications</strong> — Sanctum dimensions, door placement, wall thickness ratios (1:2:4 system)</li>
            <li><strong>Vimāna types</strong> — Classification of temple towers: Nagara (North), Drāviḍa (South), Vesara (hybrid)</li>
            <li><strong>Prākāra</strong> — Concentric enclosure walls representing progressive levels of sacred space</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Icon-Making & Installation (Mūrti-Pratiṣṭhā / मूर्ति-प्रतिष्ठा)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Śilpa-lakṣaṇa</strong> — Iconographic proportions (Tālamāna system: Daśatāla for Shiva, Navatāla for Vishnu)</li>
            <li><strong>Material hierarchy</strong> — Stone (Śilā) → Metal (Dhātu) → Wood (Dāru) → Clay (Mṛttikā), with specific stones for specific deities</li>
            <li><strong>Prāṇa-pratiṣṭhā</strong> — The elaborate ritual of "life-installation" through which the deity's consciousness is invoked into the image, involving Nyāsa, Prāṇāyāma, and Mantra-japa</li>
            <li><strong>Netra-unmīlana</strong> — The ceremonial "eye-opening" of the deity, marking the moment the mūrti becomes a living divine presence</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Linga Characteristics & Worship</h4>
          <p>The Chintyāgama provides detailed classifications of <strong>Shiva Liṅgas</strong>:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Svayambhū Liṅga</strong> — Self-manifested (e.g., Jyotirlingas)</li>
            <li><strong>Daivika Liṅga</strong> — Installed by Devas</li>
            <li><strong>Ārṣa Liṅga</strong> — Installed by Rishis</li>
            <li><strong>Mānuṣa Liṅga</strong> — Installed by humans, further classified by material and size</li>
            <li><strong>Bāṇa Liṅga</strong> — Natural stone Liṅgas from the Narmada river</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">D. Ritual Worship (Pūjā, Homa, Japa)</h4>
          <p>The Chintyāgama prescribes the <strong>Ṣoḍaśopacāra Pūjā</strong> (sixteen-step worship) as the standard daily temple ritual, along with elaborate Homa (fire sacrifice) procedures and Mantra-japa sequences specific to each deity form of Shiva.</p>

          <Verse
            sanskrit="क्रियाहीनं न सिद्ध्यति मन्त्रं कोटिजपैरपि ।
क्रियायुक्तं तु मन्त्राणां सद्यः फलदमुच्यते ॥"
            transliteration="Kriyāhīnaṃ na siddhyati mantraṃ koṭijapairapi | Kriyāyuktaṃ tu mantrāṇāṃ sadyaḥ phaladamucyate ||"
            meaning="A mantra without proper ritual action (kriyā) does not bear fruit even after ten million repetitions. But a mantra joined with proper kriyā is said to grant immediate results."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>daily behavioral framework</strong> for the Shaiva practitioner (sādhaka) and temple priest (ācārya). It transforms every moment of daily life into an act of worship:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Nitya-Pūjā-Vidhi)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Brāhma Muhūrta</strong> — Rising 96 minutes before sunrise; Śiva-smaraṇa (remembrance of Shiva) as the first act</li>
            <li><strong>Snāna-vidhi</strong> — Ritual bathing with mantras; application of Vibhūti (sacred ash) in Tripuṇḍra (three horizontal lines)</li>
            <li><strong>Sandhyā-vandana</strong> — Shaiva twilight prayers at dawn, noon, and dusk</li>
            <li><strong>Pañcakāla Pūjā</strong> — Five-time daily worship cycle: Abhigamana, Upādāna, Ijyā, Svādhyāya, Yoga</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Chintyāgama prescribes specific <strong>vratas</strong> (vows) including Pradoṣa Vrata, Śivarātri, Somavāra Vrata, and Ārdra Darśana. It details the <strong>Brahmotsava</strong> (grand temple festival) protocol spanning 9–12 days with specific rituals for each day.</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>Detailed protocols for purification after ritual errors, breach of vows, or contamination. Includes Kṛcchra, Cāndrāyaṇa, and Agama-specific penances.</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Japa-Mālā Rules & Yogapaṭṭa</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Rudrākṣa Mālā</strong> — 108 beads of specific mukhi (faces) for different purposes; Pañchamukhī for general Shiva japa</li>
            <li><strong>Yogapaṭṭa</strong> — The meditation band/strap used to maintain posture during extended japa sessions; regulations for its consecration and use</li>
          </ul>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Chintyāgama presents a sophisticated system of <strong>Shaiva Yoga</strong> that integrates classical Aṣṭāṅga Yoga with the Āgamic framework of the 36 Tattvas:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and Their Presiding Deities (Tattveshvara)</h4>
          <p>The Chintyāgama provides a complete mapping of the <strong>36 Tattvas</strong> (categories of existence) with their presiding deities (Tattveshvaras). This framework is unique to Shaiva Siddhanta and represents the most detailed ontological map in Indian philosophy. <em>(See detailed table in Section 4 below.)</em></p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Shaiva Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Non-violence, truthfulness, non-stealing, brahmacharya, and aparigraha — interpreted through Shaiva lens as service to Shiva in all beings</li>
            <li><strong>Niyama</strong> — Śauca (purity), Santoṣa (contentment), Tapas (Shiva-directed austerity), Svādhyāya (Āgama study), Īśvara-praṇidhāna (surrender to Shiva)</li>
            <li><strong>Āsana</strong> — Padmāsana, Siddhāsana, Svastikāsana for extended meditation; body as temple of Shiva</li>
            <li><strong>Prāṇāyāma</strong> — Nāḍī-śuddhi (channel purification) through alternate nostril breathing; Śiva-bīja (Hauṃ) synchronized with breath</li>
            <li><strong>Pratyāhāra</strong> — Withdrawal of senses into the inner Shiva-liṅga at the heart (Hṛdaya-liṅga)</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the five Brahmamantras at five body centers</li>
            <li><strong>Dhyāna</strong> — Meditation on Sadāśiva's five faces; progressive dissolution of Tattvas</li>
            <li><strong>Samādhi</strong> — Absorption in Shiva-tattva; experience of Śiva-sāyujya (union with Shiva)</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Kuṇḍalinī Awakening</h4>
          <p>The Chintyāgama describes the <strong>Kuṇḍalinī Śakti</strong> as the coiled serpent power resting at the Mūlādhāra Chakra. Through systematic practice of Prāṇāyāma, Bandha (locks), and Mantra, the Kuṇḍalinī ascends through the six Chakras:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase">Chakra</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase">Location</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase">Element</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase">Petals</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase">Presiding Shiva Form</th></tr></thead>
            <tbody>
              {[
                ['Mūlādhāra', 'Base of spine', 'Earth', '4', 'Brahmā (creative aspect)'],
                ['Svādhiṣṭhāna', 'Below navel', 'Water', '6', 'Viṣṇu (sustaining aspect)'],
                ['Maṇipūra', 'Solar plexus', 'Fire', '10', 'Rudra (transformative aspect)'],
                ['Anāhata', 'Heart center', 'Air', '12', 'Maheśvara (grace-bestowing)'],
                ['Viśuddha', 'Throat', 'Space', '16', 'Sadāśiva (revealing aspect)'],
                ['Ājñā', 'Between eyebrows', 'Mind', '2', 'Paramaśiva (transcendent)'],
                ['Sahasrāra', 'Crown', 'Beyond elements', '1000', 'Śiva-Śakti in eternal union'],
              ].map(r => <tr key={r[0]} className="border-b border-border-light"><td className="py-2 pr-3 font-medium text-ink">{r[0]}</td><td className="py-2 pr-3 text-ink-muted">{r[1]}</td><td className="py-2 pr-3 text-ink-muted">{r[2]}</td><td className="py-2 pr-3 text-vermillion font-bold">{r[3]}</td><td className="py-2 text-ink-light">{r[4]}</td></tr>)}
            </tbody>
          </table></div>

          <Verse
            sanskrit="कुण्डलिनी शक्तिरूपा सा मूलाधारे व्यवस्थिता ।
षट्चक्रभेदनं कृत्वा सहस्रारे शिवं व्रजेत् ॥"
            transliteration="Kuṇḍalinī śaktirūpā sā mūlādhāre vyavasthitā | Ṣaṭcakrabhedanaṃ kṛtvā sahasrāre śivaṃ vrajet ||"
            meaning="The Kundalini, in the form of Shakti, is established at the Muladhara. Piercing through the six Chakras, she reaches Shiva at the Sahasrara."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda represents the <strong>philosophical summit</strong> of the Chintyāgama. It presents the core metaphysical framework of Shaiva Siddhanta through the <strong>Pati-Paśu-Pāśa</strong> (पति-पशु-पाश) doctrine:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya)</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Lord</h5>
            <p className="text-ink-light text-sm">Shiva as the Supreme Reality — omniscient, omnipotent, omnipresent, and infinitely compassionate. He is <strong>Svātantrya</strong> (absolutely independent), <strong>Sarvajña</strong> (all-knowing), and <strong>Pūrṇa</strong> (complete). Unlike the Advaita Vedanta conception of Brahman as nirguṇa (without qualities), Shaiva Siddhanta's Shiva is <strong>Saguṇa</strong> — possessing infinite auspicious qualities while transcending all limitation.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Bound Soul</h5>
            <p className="text-ink-light text-sm">The individual soul (Ātman/Jīva) is <strong>eternally real</strong> — not an illusion, not a modification of Brahman, but a distinct conscious entity. However, it is bound by three fetters (Pāśa). The soul is <strong>Jña</strong> (knowing) by nature but its knowledge is <strong>obscured</strong> by Mala. The Chintyāgama emphasizes that the soul's bondage is beginningless (anādi) but <strong>has an end</strong> — through Shiva's grace.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Bond</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala (आणव मल)</strong> — The innate impurity of finitude. The primordial ignorance that makes the infinite soul feel limited. It is <strong>beginningless</strong> and can only be removed by Shiva's direct grace (Śaktipāta). It is compared to the husk on rice — inherent but removable.</li>
              <li><strong>Māyā Mala (माया मल)</strong> — The material impurity. Maya is the <strong>real</strong> substance from which the 36 Tattvas (from Kalā to Pṛthvī) are evolved. It provides the soul with bodies (Śarīra), instruments (Karaṇa), and worlds (Bhuvana) for experience. Unlike Advaita, Maya here is <strong>not illusion</strong> but a real creative power of Shiva.</li>
              <li><strong>Kārma Mala (कार्म मल)</strong> — The impurity of accumulated karma. The residue of actions (Puṇya and Pāpa) that binds the soul to the cycle of rebirth. Karma determines the specific body, life-circumstances, and experiences of each birth.</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Śiva-Sāyujya (शिव-सायुज्य)</h4>
          <p>The ultimate goal described in the Chintyāgama is <strong>Śiva-sāyujya</strong> — intimate union with Shiva. This is not merger or dissolution of the soul (as in Advaita's Jīvan-mukti), but rather the soul <strong>attaining Shiva's qualities</strong> (omniscience, omnipotence, bliss) while retaining its individual identity. The liberated soul becomes <strong>"like Shiva but not Shiva himself"</strong> — enjoying all of Shiva's powers through His grace.</p>

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
            sanskrit="चिन्त्यं चिन्तामणिं देवं चिदानन्दस्वरूपिणम् ।
चिन्तयेत् सततं भक्त्या चिन्त्यागमपरायणः ॥"
            transliteration="Chintyaṃ cintāmaṇiṃ devaṃ cidānandasvarūpiṇam | Cintayet satataṃ bhaktyā chintyāgamaparāyaṇaḥ ||"
            meaning="One devoted to the Chintyagama should constantly contemplate with devotion the Lord who is to be contemplated (Chintya), who is the wish-fulfilling gem (Chintamani), who is of the nature of consciousness and bliss (Chidananda)."
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
        <Section id="tattvas" title="4. The 36 Tattvas According to Chintyāgama" hindiTitle="४. चिन्त्यागम के अनुसार ३६ तत्त्व">
          <p>The Chintyāgama presents the most detailed exposition of the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) — the complete ontological framework of Shaiva Siddhanta. These 36 Tattvas describe the entire spectrum of reality from pure consciousness (Shiva) to gross matter (Earth), explaining how the infinite becomes apparently finite and how the bound soul can trace its way back to liberation.</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Chintyāgama</h4>
          <p>The Chintyāgama occupies a distinctive position among the twenty-eight Shaiva Āgamas by <strong>harmonizing two seemingly opposite impulses</strong>:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Rigorous Metaphysical Contemplation (Chintya)</strong> — Its very name demands deep philosophical reflection on the nature of Shiva, the soul, and bondage. The Jñāna and Yoga Pādas provide sophisticated frameworks for inner realization.</li>
            <li><strong>Robust Communal Temple Culture</strong> — The Kriyā and Caryā Pādas establish comprehensive protocols for community worship, ensuring that the highest philosophy is accessible through collective ritual participation.</li>
          </ul>
          <p className="mt-3">This balance makes the Chintyāgama particularly relevant for the modern era — it affirms that <strong>philosophical depth need not be divorced from devotional practice</strong>, and that <strong>temple worship is not mere ritualism but a sophisticated technology for spiritual transformation</strong>.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses critical editions of most Agamas including Chintyagama fragments. The Shaiva Agama publication series (ed. N.R. Bhatt, Jean Filliozat, S.P. Sabharathnam Sivacharyar).', url: 'https://www.ifpindia.org' },
              { name: 'Himalayan Academy, Hawaii', desc: 'Publisher of comprehensive Shaiva Siddhanta resources. "Dancing with Shiva" by Satguru Sivaya Subramuniyaswami provides accessible introduction to Agamic concepts.', url: 'https://www.himalayanacademy.com' },
              { name: 'IGNCA (Indira Gandhi National Centre for the Arts)', desc: 'Digital repository of rare manuscripts. Kalāmūlaśāstra series includes Agamic texts on architecture and iconography.', url: 'https://ignca.gov.in' },
              { name: 'Shaiva Agama Research Centre, Chennai', desc: 'Dedicated to preservation, publication, and teaching of Shaiva Agamas. Conducts training for temple priests in Agamic rituals.', url: 'https://shaivam.org' },
              { name: 'Oriental Research Institute, Mysore', desc: 'Houses palm-leaf manuscripts of several Shaiva Agamas. Published critical editions through the Oriental Research Institute series.', url: 'https://ori.uni-mysore.ac.in' },
              { name: 'Muktabodha Indological Research Institute', desc: 'Digital library of Shaiva and Tantric manuscripts. Searchable database of Agamic texts in Devanagari and Grantha scripts.', url: 'https://muktabodha.org' },
            ].map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-surface border border-border rounded-lg hover:border-vermillion/30 transition-colors">
                <p className="font-display font-semibold text-ink text-sm">{s.name}</p>
                <p className="text-ink-faint text-[12px] mt-1 leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>

          <Verse
            sanskrit="ॐ नमः शिवाय ।
चिन्त्यागमं समाश्रित्य शिवज्ञानं प्रकाशते ।
पशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Chintyāgamaṃ samāśritya śivajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Chintyagama, the knowledge of Shiva illuminates — for the purpose of liberation from the bonds of the Pashu, for the attainment of union with Shiva."
          />
        </Section>
        </div>
      </div>
  );
}