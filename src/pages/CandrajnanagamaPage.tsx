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

export default function CandrajnanagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Candrajñānāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">चन्द्रज्ञानागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Nineteenth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु एकोनविंशतिः — चन्द्र-तत्त्व एवं सोमज्ञान प्रधान शैवसिद्धान्त दर्शन</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="चन्द्रज्ञानागम — Complete Page Audio Narration"
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
          <p>The <strong>Candrajñānāgama</strong> (चन्द्रज्ञानागम) occupies the <strong>nineteenth position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Candra</em> (चन्द्र), meaning "Moon," and <em>Jñāna</em> (ज्ञान), meaning "Knowledge" — thus <strong>Candrajñānāgama is "The Scripture of Lunar Knowledge"</strong> — the Āgama that illuminates the mind with the cool, reflective wisdom of the moon.</p>

          <p>The Candrajñānāgama is particularly renowned for its sophisticated treatment of <strong>soma-tattva</strong> (the nectar principle) and its detailed exposition of how the mind (candra-manas) can be purified and illuminated to reflect the divine consciousness. It presents a unique synthesis of lunar symbolism, mental purification, and the cultivation of soma — the nectar of immortality that flows when the mind is stilled.</p>

          <Verse
            sanskrit="चन्द्रज्ञानं महज्ज्ञानं येन मनः प्रसीदति ।
चन्द्रज्ञानागमं प्राप्य जीवन्मुक्तो भवेत् सदा ॥"
            transliteration="Candrajñānaṃ mahajjñānaṃ yena manaḥ prasīdati | Candrajñānāgamaṃ prāpya jīvanmukto bhavet sadā ||"
            meaning="Lunar knowledge is the great knowledge by which the mind becomes serene. Having attained the Candrajnanagama, one becomes ever liberated-while-living."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Tatpuruṣa Face</h3>
          <p>The Candrajñānāgama emanates from <strong>Tatpuruṣa</strong> (तत्पुरुष), the eastward-facing aspect of Sadāshiva. Tatpuruṣa represents <strong>preservation, sustenance, and the concealing grace</strong> that maintains cosmic order. This face is associated with the element of <strong>Air (Vāyu)</strong>, the color <strong>yellow/gold</strong>, and the function of preservation (<em>sthiti</em>) within the Pañchabrahma system. From this face, the Āgama derives its emphasis on sustaining the mind's serenity and preserving the nectar of spiritual knowledge.</p>

          <p>The original scope of the Candrajñānāgama is traditionally stated as <strong>three crores (30 million) verses</strong> — one of the most extensive corpora among the Āgamas, reflecting its encyclopedic treatment of lunar knowledge, mental science, and the soma principle.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Hṛdaya/Uras (Chest)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Candrajñānāgama is assigned to the <strong>Hṛdaya/Uras (हृदय/उरस) — the chest/heart region</strong>. This placement is profoundly significant:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Seat of Consciousness:</strong> The heart is the seat of consciousness and feeling — representing this Āgama's emphasis on the heart-centered knowledge that transcends mere intellectual understanding.</li>
            <li><strong>Soma Reservoir:</strong> In yogic anatomy, the heart region is associated with the accumulation of soma (nectar) — symbolizing this Āgama's focus on the nectar of immortality.</li>
            <li><strong>Reflective Surface:</strong> Just as the moon reflects the sun's light, the heart reflects Shiva's consciousness — representing the Candrajñānāgama's teaching that the purified mind becomes a mirror of divine wisdom.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Fourteen Upāgamas (उपागम)</h3>
          <p>The Candrajñānāgama has fourteen subsidiary texts that elaborate on specific aspects:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Sthira</td><td className="py-2 pr-3 font-devanagari text-ink-muted">स्थिर</td><td className="py-2 text-ink-light">Steadiness; mental stability; unwavering concentration</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Sthāṇu</td><td className="py-2 pr-3 font-devanagari text-ink-muted">स्थाणु</td><td className="py-2 text-ink-light">Immovable pillar; unshakeable resolve; steadfastness</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Mahānta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">महान्त</td><td className="py-2 text-ink-light">The Great One; expansive consciousness; cosmic vastness</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Vāruṇa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">वारुण</td><td className="py-2 text-ink-light">Water deity; fluid consciousness; emotional purification</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Nandikeśvara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">नन्दिकेश्वर</td><td className="py-2 text-ink-light">Nandi's lord; gatekeeper wisdom; threshold knowledge</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Ekapāda</td><td className="py-2 pr-3 font-devanagari text-ink-muted">एकपाद</td><td className="py-2 text-ink-light">One-footed; concentrated focus; single-pointed meditation</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">7</td><td className="py-2 pr-3 font-medium">Śaṅkara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">शङ्कर</td><td className="py-2 text-ink-light">Beneficent Shiva; grace-bestowing knowledge; auspicious wisdom</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">8</td><td className="py-2 pr-3 font-medium">Nīlarudraka</td><td className="py-2 pr-3 font-devanagari text-ink-muted">नीलरुद्रक</td><td className="py-2 text-ink-light">Blue Rudra; transformative grace; fierce lunar energy</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">9</td><td className="py-2 pr-3 font-medium">Śivabhadra</td><td className="py-2 pr-3 font-devanagari text-ink-muted">शिवभद्र</td><td className="py-2 text-ink-light">Auspicious Shiva; blessed knowledge; protective wisdom</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">10</td><td className="py-2 pr-3 font-medium">Kalpabheda</td><td className="py-2 pr-3 font-devanagari text-ink-muted">कल्पभेद</td><td className="py-2 text-ink-light">Eon-distinction; cosmogonic cycles; temporal wisdom</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">11</td><td className="py-2 pr-3 font-medium">Śrīmukha</td><td className="py-2 pr-3 font-devanagari text-ink-muted">श्रीमुख</td><td className="py-2 text-ink-light">Auspicious face; prosperity knowledge; radiant wisdom</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">12</td><td className="py-2 pr-3 font-medium">Śivāsana</td><td className="py-2 pr-3 font-devanagari text-ink-muted">शिवासन</td><td className="py-2 text-ink-light">Shiva's seat; throne meditation; regal consciousness</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">13</td><td className="py-2 pr-3 font-medium">Śivaśekhara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">शिवशेखर</td><td className="py-2 text-ink-light">Shiva's crown; peak knowledge; summit of wisdom</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">14</td><td className="py-2 pr-3 font-medium">Devīmata</td><td className="py-2 pr-3 font-devanagari text-ink-muted">देवीमत</td><td className="py-2 text-ink-light">Goddess doctrine; Shakti wisdom; feminine divine knowledge</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Candrajñānāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation:</p>
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
          <p>The Kriyā Pāda of the Candrajñānāgama emphasizes <strong>soma-oriented rituals</strong> — practices that cultivate the nectar of immortality through lunar worship. It covers:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Candra-Pūjā (Moon Worship)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Candra-arcana</strong> — Worship of the moon as the visible form of Soma, the nectar of immortality</li>
            <li><strong>Soma-abhiṣeka</strong> — Anointing the Shiva Liṅga with soma-like substances (milk, curd, honey) on full moon nights</li>
            <li><strong>Candra-kalā-nyāsa</strong> — Placement of the sixteen lunar digits (kalās) on the body for mental purification</li>
            <li><strong>Paurṇamī-homa</strong> — Special fire sacrifice on full moon nights invoking the soma principle</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Temple Architecture (Ālaya-Nirmāṇa)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Candra-śikhara</strong> — Temple tower design with crescent moon motifs, representing the waxing and waning of consciousness</li>
            <li><strong>Soma-kuṇḍa</strong> — Special fire pits for soma rituals, oriented toward the moon's path</li>
            <li><strong>Amṛta-vāpī</strong> — Nectar ponds within temple complexes for ritual bathing and purification</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Ritual Worship (Pūjā, Homa, Japa)</h4>
          <p>The Candrajñānāgama prescribes the <strong>Ṣoḍaśopacāra Pūjā</strong> with special emphasis on:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Kṣīra-arpaṇa</strong> — Offering of milk (soma-symbol) to the deity</li>
            <li><strong>Dadhi-naivedya</strong> — Offering of curd as the coagulated essence of soma</li>
            <li><strong>Madhura-homa</strong> — Fire sacrifice with sweet substances to please the lunar deity</li>
            <li><strong>Candra-bīja-japa</strong> — Repetition of the moon seed mantra "Saum" (सौं) synchronized with lunar phases</li>
          </ul>

          <Verse
            sanskrit="चन्द्रज्ञानेन संयुक्तो यः पूजयति शङ्करम् ।
स सोमपानं कृत्वैव मुक्तो भवति तत्क्षणात् ॥"
            transliteration="Candrajñānena saṃyukto yaḥ pūjayati śaṅkaram | Sa somapānaṃ kṛtvaiva mukto bhavati tatkṣaṇāt ||"
            meaning="He who, endowed with lunar knowledge, worships Shankara — having drunk the soma, he becomes liberated in that very moment."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>lunar daily conduct</strong> of the Shaiva practitioner:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Nitya-Pūjā-Vidhi)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Candra-darśana</strong> — Greeting the moon at nightfall with mantras and reverence</li>
            <li><strong>Soma-snāna</strong> — Ritual bathing with water consecrated under moonlight</li>
            <li><strong>Kṣīra-vrata</strong> — Milk-fast on specific lunar days for mental purification</li>
            <li><strong>Pañcakāla Pūjā</strong> — Five-time daily worship with lunar-phase awareness</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Candrajñānāgama prescribes specific <strong>vratas</strong> including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Paurṇamī-vrata</strong> — Full moon observance with soma rituals and all-night vigil</li>
            <li><strong>Candra-śayana</strong> — Special observance during the moon's rest (new moon) for deep introspection</li>
            <li><strong>Soma-pradoṣa</strong> — Fortnightly observance on the 13th lunar day with soma-offerings</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>Lunar penances including fasting on new moon, soma-japa, and service to devotees under moonlight.</p>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Candrajñānāgama presents <strong>Candra-Yoga</strong> — the yoga of lunar consciousness:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and Their Presiding Deities</h4>
          <p>The Candrajñānāgama provides a complete mapping of the <strong>36 Tattvas</strong> with emphasis on the soma principle flowing through them. <em>(See detailed table in Section 4 below.)</em></p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Candra-Yoga — The Yoga of the Moon</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Soma-dhāraṇā</strong> — Concentration on the soma-chakra at the crown, visualizing nectar flowing down</li>
            <li><strong>Candra-bhedana</strong> — Left-nostril breathing (moon channel) to cool and calm the mind</li>
            <li><strong>Kalā-dhyāna</strong> — Meditation on the sixteen lunar digits as stages of mental refinement</li>
            <li><strong>Amṛta-plāvana</strong> — Visualization of nectar flooding the body from the sahasrāra</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Shaiva Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Non-violence, truthfulness, non-stealing, brahmacharya, aparigraha — practiced with lunar gentleness</li>
            <li><strong>Niyama</strong> — Śauca, Santoṣa, Tapas as cool austerity, Svādhyāya, Īśvara-praṇidhāna</li>
            <li><strong>Āsana</strong> — Padmāsana, Siddhāsana for soma meditation</li>
            <li><strong>Prāṇāyāma</strong> — Candra-bhedana (left-nostril breathing) to activate the lunar channel (iḍā-nāḍī)</li>
            <li><strong>Pratyāhāra</strong> — Withdrawal of senses into the soma-center at the palate</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the moon-disc at the heart or crown</li>
            <li><strong>Dhyāna</strong> — Meditation on Shiva as the cool, radiant moon of consciousness</li>
            <li><strong>Samādhi</strong> — Absorption in the soma-tattva (nectar principle)</li>
          </ul>

          <Verse
            sanskrit="चन्द्रमण्डलमध्यस्थं सोमं ध्यायेत् सदा यतिः ।
ततः सोमं समासाद्य मुक्तो भवति निश्चितम् ॥"
            transliteration="Candramaṇḍalamadhyasthaṃ somaṃ dhyāyet sadā yatiḥ | Tataḥ somaṃ samāsādya mukto bhavati niścitam ||"
            meaning="The ascetic should always meditate on Soma established in the center of the lunar disc. Then, having attained Soma, he certainly becomes liberated."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda presents the core metaphysical framework through the <strong>Pati-Paśu-Pāśa</strong> doctrine with emphasis on lunar knowledge:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya)</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Lord as Soma-Śiva</h5>
            <p className="text-ink-light text-sm">Shiva as the Supreme Reality is <strong>Soma-Śiva</strong> — the Lord of the nectar of immortality. He is the source of all cool, reflective wisdom. Just as the moon reflects the sun's light without being the sun, Shiva reflects the absolute Brahman without being limited by it. His grace flows like soma — cooling, nourishing, and immortalizing.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Bound Soul as Reflective Mind</h5>
            <p className="text-ink-light text-sm">The individual soul is <strong>eternally real</strong> — like the moon that has phases but remains the same moon. The soul's knowledge waxes and wanes according to its proximity to Shiva, but its essence remains pure and reflective. The Candrajñānāgama teaches that the mind (candra) is the soul's primary instrument and that its purification leads directly to liberation.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Bond</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala</strong> — The innate impurity of finitude; like the dark phase of the moon, temporary and cyclical</li>
              <li><strong>Māyā Mala</strong> — The material impurity; like clouds covering the moon, removable with the wind of knowledge</li>
              <li><strong>Kārma Mala</strong> — The impurity of accumulated karma; like dust on a mirror, cleansed by the soma of grace</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Śiva-Sāyujya (शिव-सायुज्य)</h4>
          <p>The ultimate goal is <strong>Śiva-sāyujya</strong> — union with Shiva. In the Candrajñānāgama, this is described as the soul <strong>"becoming soma-like"</strong> — cool, radiant, nourishing, and immortal. The liberated soul becomes a moon reflecting the infinite sun of Shiva's consciousness, sharing in His bliss without losing its unique reflective capacity.</p>

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
            sanskrit="चन्द्रज्ञानं परं ज्ञानं सोमं येन प्रपद्यते ।
चन्द्रज्ञानागमं प्राप्य मुक्तो भवति मानवः ॥"
            transliteration="Candrajñānaṃ paraṃ jñānaṃ somaṃ yena prapadyate | Candrajñānāgamaṃ prāpya mukto bhavati mānavaḥ ||"
            meaning="Lunar knowledge is the supreme knowledge by which one attains Soma. Having attained the Candrajnanagama, a human being becomes liberated."
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
        <Section id="tattvas" title="4. The 36 Tattvas According to Candrajñānāgama" hindiTitle="४. चन्द्रज्ञानागम के अनुसार ३६ तत्त्व">
          <p>The Candrajñānāgama presents the complete exposition of the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) with emphasis on the soma principle and lunar knowledge flowing through all levels of reality.</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Candrajñānāgama</h4>
          <p>The Candrajñānāgama occupies a distinctive position as <strong>the Āgama of Lunar Knowledge</strong>. It teaches that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>The mind is the moon</strong> — The mind (candra-manas) reflects divine consciousness and can be purified to reflect it perfectly.</li>
            <li><strong>Soma is the nectar of liberation</strong> — The soma principle is not merely mythological but represents the bliss that flows when the mind is still.</li>
            <li><strong>Knowledge is cool and reflective</strong> — True knowledge is not hot or aggressive but cool, calm, and reflective like moonlight.</li>
          </ul>
          <p className="mt-3">This makes the Candrajñānāgama particularly relevant for seekers who are drawn to <strong>the path of serene wisdom</strong> — those who understand that the highest knowledge comes not through force but through the gentle illumination of the inner moon.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses critical editions and research on Candrajnanagama.', url: 'https://www.ifpindia.org' },
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
            sanskrit="ॐ नमः शिवाय ।
चन्द्रज्ञानागमं समाश्रित्य शिवज्ञानं प्रकाशते ।
पशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Candrajñānāgamaṃ samāśritya śivajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Candrajnanagama, the knowledge of Shiva illuminates — for the purpose of liberation from the bonds of the Pashu, for the attainment of union with Shiva."
          />
        </Section>
      </div>
    </div>
  );
}