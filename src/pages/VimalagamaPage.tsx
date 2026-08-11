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

export default function VimalagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Vimalāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">विमलागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Eighteenth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु अष्टादशः — विशुद्धता एवं निर्मल ज्ञान प्रधान शैवसिद्धान्त दर्शन</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="विमलागम — Complete Page Audio Narration"
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
          <p>The <strong>Vimalāgama</strong> (विमलागम) occupies the <strong>eighteenth position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Vimala</em> (विमल), meaning "Spotless," "Pure," or "Stainless" — thus <strong>Vimalāgama is "The Scripture of Purity"</strong> — the Āgama that reveals the path to the stainless, pure nature of Shiva-consciousness.</p>

          <p>The Vimalāgama is particularly significant for its detailed treatment of <strong>śuddhi</strong> (purification) — both external ritual purification and the internal purification of consciousness. It teaches that the soul's true nature is inherently pure (vimala) and that all impurities are adventitious, removable through systematic practice and grace.</p>

          <Verse
            sanskrit={`विमलं शिवरूपं तद् यतो ज्ञानं प्रवर्तते ।\nविमलागममाश्रित्य तज्ज्ञानं लभते नरः ॥`}
            transliteration="Vimalaṃ śivarūpaṃ tad yato jñānaṃ pravartate | Vimalāgamamāśritya tajjñānaṃ labhate naraḥ ||"
            meaning="That stainless form of Shiva, from which knowledge proceeds — taking refuge in the Vimalagama, a person attains that knowledge."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Tatpuruṣa Face</h3>
          <p>The Vimalāgama emanates from <strong>Tatpuruṣa</strong> (तत्पुरुष), the eastward-facing aspect of Sadāshiva. Tatpuruṣa represents <strong>preservation, sustenance, and the concealing grace</strong> that maintains cosmic order. This face is associated with the element of <strong>Air (Vāyu)</strong>, the color <strong>yellow/gold</strong>, and the function of preservation (<em>sthiti</em>) within the Pañchabrahma system. From this face, the Āgama derives its emphasis on maintaining purity and sustaining the soul's connection with the pure nature of Shiva.</p>

          <p>The original scope of the Vimalāgama is traditionally stated as <strong>three lakh (3,00,000) verses</strong> — a substantial corpus reflecting its comprehensive treatment of purification, ritual, and the stainless state of liberation.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Bāhu (Arms)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Vimalāgama is assigned to the <strong>Bāhu (बाहु) — the arms</strong>. This placement is profoundly significant:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Action and Purity:</strong> The arms are the instruments of action — representing this Āgama's teaching that all action should be pure, selfless, and dedicated to Shiva.</li>
            <li><strong>Embrace and Protection:</strong> The arms embrace and protect — symbolizing the Vimalāgama's emphasis on Shiva's protective grace that shields the pure devotee.</li>
            <li><strong>Strength and Service:</strong> The arms represent strength in service — the pure soul uses its power to serve Shiva and His devotees.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Sixteen Upāgamas (उपागम)</h3>
          <p>The Vimalāgama has sixteen subsidiary texts that elaborate on specific aspects:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Ananta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अनन्त</td><td className="py-2 text-ink-light">Infinite expanse; boundless purity; endless grace</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Bhoga</td><td className="py-2 pr-3 font-devanagari text-ink-muted">भोग</td><td className="py-2 text-ink-light">Enjoyment rituals; prosperity; sensory purification</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Agrānta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अग्रान्त</td><td className="py-2 text-ink-light">Frontier teachings; boundary dissolution; limitless purity</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Vṛṣabhiṅga</td><td className="py-2 pr-3 font-devanagari text-ink-muted">वृषभिङ्ग</td><td className="py-2 text-ink-light">Bull symbolism; Nandi worship; steadfast purity</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Vṛṣodara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">वृषोदर</td><td className="py-2 text-ink-light">Inner strength; digestive fire; internal purification</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Vṛṣādbhuta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">वृषाद्भुत</td><td className="py-2 text-ink-light">Wondrous bull; miraculous powers; divine wonder</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">7</td><td className="py-2 pr-3 font-medium">Sudanda</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सुदण्ड</td><td className="py-2 text-ink-light">Good discipline; staff of righteousness; moral purity</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">8</td><td className="py-2 pr-3 font-medium">Raudra</td><td className="py-2 pr-3 font-devanagari text-ink-muted">रौद्र</td><td className="py-2 text-ink-light">Fierce purification; destructive grace; burning impurities</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">9</td><td className="py-2 pr-3 font-medium">Bhadravīta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">भद्रवीत</td><td className="py-2 text-ink-light">Auspicious conduct; noble behavior; blessed purity</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">10</td><td className="py-2 pr-3 font-medium">Arevata</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अरेवत</td><td className="py-2 text-ink-light">Medicinal healing; therapeutic rituals; health purification</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">11</td><td className="py-2 pr-3 font-medium">Atigrānta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अतिग्रान्त</td><td className="py-2 text-ink-light">Beyond frontiers; transcendental purity; supreme attainment</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">12</td><td className="py-2 pr-3 font-medium">Aṭṭahāsa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अट्टहास</td><td className="py-2 text-ink-light">Divine laughter; joy of liberation; blissful purity</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">13</td><td className="py-2 pr-3 font-medium">Alaṅkṛta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अलङ्कृत</td><td className="py-2 text-ink-light">Adornment; beautification rituals; decorated purity</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">14</td><td className="py-2 pr-3 font-medium">Arcchita</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अर्च्चित</td><td className="py-2 text-ink-light">Worshipped state; adored purity; reverence protocols</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">15</td><td className="py-2 pr-3 font-medium">Dhāraṇa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">धारण</td><td className="py-2 text-ink-light">Concentration; holding the pure mind; meditative focus</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">16</td><td className="py-2 pr-3 font-medium">Tantra</td><td className="py-2 pr-3 font-devanagari text-ink-muted">तन्त्र</td><td className="py-2 text-ink-light">Systematic practice; thread of purity; comprehensive method</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Vimalāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation:</p>
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
          <p>The Kriyā Pāda of the Vimalāgama is distinguished by its extraordinary emphasis on <strong>śuddhi</strong> (purification) as the foundation of all ritual action. It covers:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Śuddhi-Vidhi (Purification Procedures)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Ātma-śuddhi</strong> — Self-purification through mantras, breath regulation, and mental clarification before any ritual</li>
            <li><strong>Deśa-śuddhi</strong> — Purification of the place of worship through sprinkling of consecrated water and mantric empowerment</li>
            <li><strong>Dravya-śuddhi</strong> — Purification of ritual materials (flowers, water, food offerings) through appropriate mantras</li>
            <li><strong>Mantra-śuddhi</strong> — Purification of the mantra itself through nyāsa, japa, and prāṇāyāma</li>
            <li><strong>Liṅga-śuddhi</strong> — Special protocols for purifying the Shiva Liṅga, including abhiṣeka with pure substances</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Temple Architecture (Ālaya-Nirmāṇa)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Śuddha-maṇḍapa</strong> — Design of purification halls where devotees cleanse themselves before entering the main shrine</li>
            <li><strong>Koṇa-śuddhi</strong> — Corner purification rituals during temple construction to ensure sacred geometry</li>
            <li><strong>Vāstu-śuddhi</strong> — Comprehensive land purification before any temple foundation is laid</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Ritual Worship (Pūjā, Homa, Japa)</h4>
          <p>The Vimalāgama prescribes the <strong>Ṣoḍaśopacāra Pūjā</strong> with special emphasis on:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vimala-snāna</strong> — Purificatory bathing of the deity with five or seven pure substances (pañcāmṛta, saptāmṛta)</li>
            <li><strong>Śuddha-vastra</strong> — Offering of pure, unstained garments to the deity</li>
            <li><strong>Vimala-homa</strong> — Fire sacrifice using the purest ghee and woods for maximum purificatory effect</li>
            <li><strong>Śuddha-japa</strong> — Mantra repetition performed only after complete internal and external purification</li>
          </ul>

          <Verse
            sanskrit={`विमलं हृदयं कृत्वा यः पूजयति शङ्करम् ।\nस तुष्यति महादेवो वरं दत्त्वा महत् सुखम् ॥`}
            transliteration="Vimalaṃ hṛdayaṃ kṛtvā yaḥ pūjayati śaṅkaram | Sa tuṣyati mahādevo varaṃ dattvā mahat sukham ||"
            meaning="Having made the heart pure, he who worships Shankara — Mahadeva becomes pleased and grants great happiness as a boon."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>pure daily conduct</strong> of the Shaiva practitioner:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Nitya-Pūjā-Vidhi)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Brāhma Muhūrta</strong> — Rising before dawn; immediate purification of body and mind</li>
            <li><strong>Snāna-vidhi</strong> — Ritual bathing with mantras; application of pure Vibhūti in Tripuṇḍra</li>
            <li><strong>Śauca-niyama</strong> — Strict observance of bodily and mental purity throughout the day</li>
            <li><strong>Pañcakāla Pūjā</strong> — Five-time daily worship performed with ever-increasing purity of intention</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Vimalāgama prescribes specific <strong>vratas</strong> including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vimala-ṣaṣṭhī</strong> — Sixth-day observance dedicated to the cultivation of inner purity</li>
            <li><strong>Śuddha-caturdaśī</strong> — Fourteenth-day fast for purification of the subtle body</li>
            <li><strong>Śivarātri</strong> — The great night of Shiva observed as the supreme purification vigil</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>The Vimalāgama contains detailed purification protocols for all kinds of ritual errors and impurities, including Kṛcchra, Cāndrāyaṇa, and specific Vimala-penance involving extended fasting and mantra-japa.</p>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Vimalāgama presents <strong>Vimala-Yoga</strong> — the yoga of stainless purity:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and Their Presiding Deities</h4>
          <p>The Vimalāgama provides a complete mapping of the <strong>36 Tattvas</strong> with emphasis on their inherent purity and the removal of adventitious impurities. <em>(See detailed table in Section 4 below.)</em></p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vimala-Yoga — The Yoga of Purity</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Antaḥ-śuddhi</strong> — Internal purification through systematic introspection and confession</li>
            <li><strong>Citta-prasādana</strong> — Purification of the mind-field through cultivation of positive emotions</li>
            <li><strong>Mala-dahana</strong> — Burning of impurities through Kuṇḍalinī fire meditation</li>
            <li><strong>Vimala-bīja</strong> — Use of the seed mantra "Vam" (वं) associated with purity and water element</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Shaiva Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Non-violence, truthfulness, non-stealing, brahmacharya, aparigraha — the five pure restraints</li>
            <li><strong>Niyama</strong> — Śauca (purity as primary), Santoṣa, Tapas, Svādhyāya, Īśvara-praṇidhāna</li>
            <li><strong>Āsana</strong> — Padmāsana, Siddhāsana for pure meditation posture</li>
            <li><strong>Prāṇāyāma</strong> — Nāḍī-śuddhi as the primary practice; cleansing the energy channels</li>
            <li><strong>Pratyāhāra</strong> — Withdrawal of senses into the pure space of the heart</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the spotless Liṅga of light within</li>
            <li><strong>Dhyāna</strong> — Meditation on Shiva as the pure, stainless consciousness</li>
            <li><strong>Samādhi</strong> — Absorption in the vimala-tattva (pure principle)</li>
          </ul>

          <Verse
            sanskrit={`विमलं हृदयं कृत्वा योगी युञ्जीत सततम् ।\nशिवं स्मरन् सदा भक्त्या स मुक्तो नात्र संशयः ॥`}
            transliteration="Vimalaṃ hṛdayaṃ kṛtvā yogī yuñjīta satatam | Śivaṃ smaran sadā bhaktyā sa mukto nātra saṃśayaḥ ||"
            meaning="Having made the heart pure, the yogi should constantly practice. Remembering Shiva always with devotion, he is liberated — of this there is no doubt."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda presents the core metaphysical framework through the <strong>Pati-Paśu-Pāśa</strong> doctrine with emphasis on the inherent purity of the soul:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya)</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Lord as Vimala</h5>
            <p className="text-ink-light text-sm">Shiva as the Supreme Reality is <strong>Vimala-mūrti</strong> — the form of absolute purity. He is without stain, without limitation, and without the possibility of contamination. His nature is pure consciousness (cinmātra), pure bliss (ānanda-mātra), and pure existence (sattā-mātra). He is the source of all purity, and all impurity is merely the absence of His illuminating presence.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Bound Soul as Inherently Pure</h5>
            <p className="text-ink-light text-sm">The individual soul is <strong>eternally real and inherently pure</strong> — like a crystal that appears colored when placed near a colored object but remains colorless in itself. The soul's purity is never truly lost; it is merely obscured by the three malas. The Vimalāgama emphasizes that purification is not the creation of a new state but the <strong>removal of what obscures the ever-present purity</strong>.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Bond as Adventitious Impurity</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala</strong> — The innate impurity of finitude; like dust on a mirror, it obscures but does not change the mirror's nature</li>
              <li><strong>Māyā Mala</strong> — The material impurity; like clouds covering the sun, temporary and removable</li>
              <li><strong>Kārma Mala</strong> — The impurity of accumulated karma; like sediment in water, settles and can be filtered out</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Śiva-Sāyujya (शिव-सायुज्य)</h4>
          <p>The ultimate goal is <strong>Śiva-sāyujya</strong> — union with Shiva. In the Vimalāgama, this is described as the soul <strong>"shining forth in its own innate purity"</strong> — like the sun emerging from behind clouds, like a mirror cleaned of dust, like crystal freed from colored surroundings. The liberated soul is not transformed but <strong>revealed</strong> in its true, stainless nature.</p>

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
            sanskrit={`विमलं शिवरूपं तु यतो ज्ञानं प्रवर्तते ।\nतज्ज्ञानं लभते सद्यो विमलागमतो नरः ॥`}
            transliteration="Vimalaṃ śivarūpaṃ tu yato jñānaṃ pravartate | Tajjñānaṃ labhate sadyo vimalāgamato naraḥ ||"
            meaning="That stainless form of Shiva from which knowledge proceeds — a person immediately attains that knowledge through the Vimalagama."
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
        <Section id="tattvas" title="4. The 36 Tattvas According to Vimalāgama" hindiTitle="४. विमलागम के अनुसार ३६ तत्त्व">
          <p>The Vimalāgama presents the complete exposition of the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) with emphasis on their inherent purity and the removal of adventitious impurities.</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Vimalāgama</h4>
          <p>The Vimalāgama occupies a distinctive position as <strong>the Āgama of Purity</strong>. It teaches that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purity is the soul's true nature</strong> — We do not create purity; we remove the impurities that obscure it.</li>
            <li><strong>Ritual purification is preparation for inner revelation</strong> — External cleanliness prepares the mind for the recognition of internal purity.</li>
            <li><strong>Shiva is ever-pure</strong> — The Lord is never contaminated by the world's impurities; His grace is always available to cleanse the soul.</li>
          </ul>
          <p className="mt-3">This makes the Vimalāgama particularly relevant for seekers who understand that <strong>spiritual life is fundamentally about removal rather than acquisition</strong> — removing the veils that hide our innate perfection.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses critical editions and research on Vimalagama.', url: 'https://www.ifpindia.org' },
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
            sanskrit={`ॐ नमः शिवाय ।\nविमलागमं समाश्रित्य शिवज्ञानं प्रकाशते ।\nपशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥`}
            transliteration="Oṃ Namaḥ Śivāya | Vimalāgamaṃ samāśritya śivajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Vimalagama, the knowledge of Shiva illuminates — for the purpose of liberation from the bonds of the Pashu, for the attainment of union with Shiva."
          />
        </Section>
      </div>
    </div>
  );
}