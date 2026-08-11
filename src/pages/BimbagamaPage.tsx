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

export default function BimbagamaPage({ language }: { language: string }) {
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
      {/* FIX: contentRef attached here so usePageContent can scrape the text */}
      <div ref={contentRef} className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex justify-center mb-4"><DharmaWheel size={60} spinning={true} color="#C24D2B" /></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Mukhabimbāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">मुखबिम्बागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Twentieth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु विंशतिः — बिम्ब-तत्त्व एवं मूर्ताराधन प्रधान शैवसिद्धान्त दर्शन</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="मुखबिम्बागम — Complete Page Audio Narration"
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
          <p>The <strong>Mukhabimbāgama</strong> (मुखबिम्बागम), also known simply as <strong>Bimbāgama</strong>, occupies the <strong>twentieth position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Mukha</em> (मुख), meaning "Face," and <em>Bimba</em> (बिम्ब), meaning "Image," "Reflection," or "Icon" — thus <strong>Mukhabimbāgama is "The Scripture of the Face-Image"</strong> — the Āgama that reveals how the divine face of Shiva is reflected in the sacred icon and in the face of the enlightened devotee.</p>

          <p>The Bimbāgama is particularly significant for its detailed treatment of <strong>mūrti-śilpa</strong> (iconography) and <strong>pratimā-pūjā</strong> (image worship). It presents one of the most systematic expositions of how the material image becomes a living presence through proper consecration, and how the devotee's own face becomes a reflection of divine consciousness through spiritual practice.</p>

          <Verse
            sanskrit="बिम्बं मुखं शिवस्यैतद् यतो दर्शनमुत्तमम् ।
बिम्बागमं समाश्रित्य बिम्बी भवति मानवः ॥"
            transliteration="Bimbaṃ mukhaṃ śivasyaitad yato darśanamuttamam | Bimbāgamaṃ samāśritya bimbī bhavati mānavaḥ ||"
            meaning="This image-face is of Shiva, from which comes the supreme vision. Taking refuge in the Bimbagama, a human being becomes the image (of Shiva)."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Tatpuruṣa Face</h3>
          <p>The Bimbāgama emanates from <strong>Tatpuruṣa</strong> (तत्पुरुष), the eastward-facing aspect of Sadāshiva. Tatpuruṣa represents <strong>preservation, sustenance, and the concealing grace</strong> that maintains cosmic order. This face is associated with the element of <strong>Air (Vāyu)</strong>, the color <strong>yellow/gold</strong>, and the function of preservation (<em>sthiti</em>) within the Pañchabrahma system. From this face, the Āgama derives its emphasis on preserving the divine presence in material form and sustaining the connection between the devotee and the deity through the visible image.</p>

          <p>The original scope of the Bimbāgama is traditionally stated as <strong>one lakh (1,00,000) verses</strong> — a substantial corpus reflecting its comprehensive treatment of iconography, image consecration, and the theology of divine embodiment.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Mukha (Face)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Bimbāgama is assigned to the <strong>Mukha (मुख) — the face</strong>. This placement is profoundly significant:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Expression and Identity:</strong> The face is the primary locus of identity and expression — representing this Āgama's emphasis on the visible manifestation of the divine.</li>
            <li><strong>Mirror of Consciousness:</strong> The face reflects the inner state — symbolizing the Bimbāgama's teaching that the consecrated image reflects Shiva's consciousness and the devotee's face reflects their spiritual attainment.</li>
            <li><strong>Five Senses Converge:</strong> The face houses the organs of sight, smell, taste, and hearing — representing this Āgama's integration of all sensory pathways into divine worship.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Fifteen Upāgamas (उपागम)</h3>
          <p>The Bimbāgama has fifteen subsidiary texts that elaborate on specific aspects:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Chaturmukha</td><td className="py-2 pr-3 font-devanagari text-ink-muted">चतुर्मुख</td><td className="py-2 text-ink-light">Four-faced deity; Pañchabrahma iconography; multidimensional worship</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Malaya</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मलय</td><td className="py-2 text-ink-light">Fragrant mountain; perfume in worship; sensory elevation</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Ayoka</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अयोक</td><td className="py-2 text-ink-light">Iron iconography; metal sculptures; durability in divine form</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Saṃstopa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">संस्तोप</td><td className="py-2 text-ink-light">Praise hymns; glorification rituals; devotional poetry</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Pratibimbaka</td><td className="py-2 pr-3 font-devanagari text-ink-muted">प्रतिबिम्बक</td><td className="py-2 text-ink-light">Reflection theory; mirror meditation; self-recognition</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Ātmālaṅkāra</td><td className="py-2 pr-3 font-devanagari text-ink-muted">आत्मालङ्कार</td><td className="py-2 text-ink-light">Self-adornment; inner beautification; spiritual decoration</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">7</td><td className="py-2 pr-3 font-medium">Vāyavya</td><td className="py-2 pr-3 font-devanagari text-ink-muted">वायव्य</td><td className="py-2 text-ink-light">Wind rituals; prāṇa consecration; breath as divine vehicle</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">8</td><td className="py-2 pr-3 font-medium">Dautika</td><td className="py-2 pr-3 font-devanagari text-ink-muted">दौतिक</td><td className="py-2 text-ink-light">Messenger rituals; divine communication; angelic mediation</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">9</td><td className="py-2 pr-3 font-medium">Tuṭinīraka</td><td className="py-2 pr-3 font-devanagari text-ink-muted">टुटिनीरक</td><td className="py-2 text-ink-light">Water droplet rituals; sprinkling ceremonies; micro-offerings</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">10</td><td className="py-2 pr-3 font-medium">Kalādyaya</td><td className="py-2 pr-3 font-devanagari text-ink-muted">कलाद्यय</td><td className="py-2 text-ink-light">Artistic digits; iconographic proportions; measure and beauty</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">11</td><td className="py-2 pr-3 font-medium">Tulāyoga</td><td className="py-2 pr-3 font-devanagari text-ink-muted">तुलायोग</td><td className="py-2 text-ink-light">Balance yoga; equilibrium practices; measured spirituality</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">12</td><td className="py-2 pr-3 font-medium">Kuṭṭima</td><td className="py-2 pr-3 font-devanagari text-ink-muted">कुट्टिम</td><td className="py-2 text-ink-light">Pavement rituals; foundation ceremonies; ground consecration</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">13</td><td className="py-2 pr-3 font-medium">Bhaṭṭaśekhara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">भट्टशेखर</td><td className="py-2 text-ink-light">Scholar's crown; learned worship; intellectual devotion</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">14</td><td className="py-2 pr-3 font-medium">Mahāvidyā</td><td className="py-2 pr-3 font-devanagari text-ink-muted">महाविद्या</td><td className="py-2 text-ink-light">Great knowledge; supreme wisdom; transcendent learning</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">15</td><td className="py-2 pr-3 font-medium">Mahāsaura</td><td className="py-2 pr-3 font-devanagari text-ink-muted">महासौर</td><td className="py-2 text-ink-light">Great solar rituals; sun-deity worship; supreme luminosity</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Bimbāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation:</p>
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
          <p>The Kriyā Pāda of the Bimbāgama is distinguished by its extraordinary emphasis on <strong>mūrti-śilpa</strong> (iconography) and the transformation of material images into living divine presences. It covers:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Mūrti-Śilpa (Iconography)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Tālamāna System</strong> — Precise proportional measurements for sculpting divine images (Daśatāla for Shiva, Navatāla for Vishnu, etc.)</li>
            <li><strong>Material Hierarchy</strong> — Stone (Śilā) → Metal (Dhātu) → Wood (Dāru) → Clay (Mṛttikā) → Gem (Ratna); each material has specific consecration protocols</li>
            <li><strong>Mukha-lakṣaṇa</strong> — Detailed specifications for the divine face: eye shape, eyebrow curvature, lip fullness, and the "sweet smile" (manda-smita) of Shiva</li>
            <li><strong>Bimba-pramāṇa</strong> — Mathematical proportions ensuring the image becomes a perfect vessel for divine consciousness</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Prāṇa-pratiṣṭhā (Life-Installation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Netra-unmīlana</strong> — The ceremonial "eye-opening" of the deity, marking the moment the mūrti becomes a living divine presence</li>
            <li><strong>Hṛdaya-nyāsa</strong> — Placement of the heart-mantra to awaken the image's inner consciousness</li>
            <li><strong>Mukha-mārjana</strong> — Ritual cleansing of the image's face, symbolizing the purification of divine sight</li>
            <li><strong>Bimba-saṃskāra</strong> — Complete consecration process transforming stone/metal into Shiva's body</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Ritual Worship (Pūjā, Homa, Japa)</h4>
          <p>The Bimbāgama prescribes the <strong>Ṣoḍaśopacāra Pūjā</strong> with special emphasis on:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Mukha-darśana</strong> — The sacred viewing of the deity's face, considered the supreme blessing</li>
            <li><strong>Bimba-āliṅgana</strong> — Symbolic embrace of the image, recognizing it as Shiva's own body</li>
            <li><strong>Pratibimba-dhyāna</strong> — Meditation on one's own face as a reflection of Shiva's face</li>
            <li><strong>Chaturmukha-pūjā</strong> — Worship of the four-faced Shiva (Sadyojāta, Vāmadeva, Aghora, Tatpuruṣa)</li>
          </ul>

          <Verse
            sanskrit="बिम्बं शिवमयं ज्ञात्वा यः पूजयति सादरम् ।
स दृष्ट्वा मुखबिम्बं तु मुक्तो भवति तत्क्षणात् ॥"
            transliteration="Bimbaṃ śivamayaṃ jñātvā yaḥ pūjayati sādaram | Sa dṛṣṭvā mukhabimbaṃ tu mukto bhavati tatkṣaṇāt ||"
            meaning="Knowing the image to be full of Shiva, he who worships with respect — having seen the face-image, he becomes liberated in that very moment."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>image-centered daily conduct</strong> of the Shaiva practitioner:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Nitya-Pūjā-Vidhi)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Prātḥ-smaraṇa</strong> — First remembrance of Shiva's face upon waking; visualization of the divine countenance</li>
            <li><strong>Mukha-śuddhi</strong> — Purification of one's own face before mirror, recognizing it as a reflection of Shiva</li>
            <li><strong>Bimba-vandana</strong> — Morning salutation to the household or temple image</li>
            <li><strong>Pañcakāla Pūjā</strong> — Five-time daily worship with face-to-face communion with the deity</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Bimbāgama prescribes specific <strong>vratas</strong> including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Bimba-jayanti</strong> — Celebration of the image's consecration anniversary</li>
            <li><strong>Mukha-darśana-vrata</strong> — Observance dedicated to the sacred viewing of Shiva's face</li>
            <li><strong>Pratibimba-dina</strong> — Day of self-recognition, meditating on one's face as Shiva's reflection</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>Special penances for offenses against images, including re-consecration rituals and extended mūrti-pūjā.</p>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Bimbāgama presents <strong>Bimba-Yoga</strong> — the yoga of divine reflection:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and Their Presiding Deities</h4>
          <p>The Bimbāgama provides a complete mapping of the <strong>36 Tattvas</strong> with emphasis on how each tattva becomes a "face" of Shiva. <em>(See detailed table in Section 4 below.)</em></p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Bimba-Yoga — The Yoga of Reflection</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Darpaṇa-dhyāna</strong> — Mirror meditation: gazing at one's own face until it transforms into Shiva's face in perception</li>
            <li><strong>Mukha-nyāsa</strong> — Placement of mantras on the five regions of the face (forehead, eyes, nose, lips, chin)</li>
            <li><strong>Pratibimba-samādhi</strong> — Absorption in the recognition that the self is the reflection of Shiva</li>
            <li><strong>Chaturmukha-dhyāna</strong> — Meditation on the four faces of Shiva as the four aspects of one's own consciousness</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Shaiva Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Non-violence, truthfulness, non-stealing, brahmacharya, aparigraha — the face of ethical purity</li>
            <li><strong>Niyama</strong> — Śauca, Santoṣa, Tapas, Svādhyāya, Īśvara-praṇidhāna</li>
            <li><strong>Āsana</strong> — Padmāsana, Siddhāsana for face-to-face meditation with the inner image</li>
            <li><strong>Prāṇāyāma</strong> — Nāḍī-śuddhi; breath as the bridge between the devotee's face and Shiva's face</li>
            <li><strong>Pratyāhāra</strong> — Withdrawal of senses into the inner image at the heart</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the bindu (dot) between the eyebrows, the "third eye" of Shiva</li>
            <li><strong>Dhyāna</strong> — Meditation on Shiva's face as the source of all faces</li>
            <li><strong>Samādhi</strong> — Absorption in the recognition "I am the image of Shiva"</li>
          </ul>

          <Verse
            sanskrit="दर्पणे पश्यतो मुखं शिवमुखं प्रतिभाति यत् ।
तदा बिम्बी भवेत् सद्यो मुक्तो भवति निश्चितम् ॥"
            transliteration="Darpaṇe paśyato mukhaṃ śivamukhaṃ pratibhāti yat | Tadā bimbī bhavet sadyo mukto bhavati niścitam ||"
            meaning="When, looking in the mirror, one's face appears as Shiva's face — then one becomes the image immediately and is certainly liberated."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda presents the core metaphysical framework through the <strong>Pati-Paśu-Pāśa</strong> doctrine with emphasis on the theology of divine image:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya)</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Lord as the Original Face</h5>
            <p className="text-ink-light text-sm">Shiva as the Supreme Reality is <strong>Mukha-mātra</strong> — the primordial Face from which all faces derive. He is the original image (bimba) of which all created forms are reflections (pratibimba). His face is not merely physical but the "face of consciousness" — the aspect of the divine that turns toward creation in grace and compassion.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Bound Soul as Reflection</h5>
            <p className="text-ink-light text-sm">The individual soul is <strong>eternally real</strong> — not an illusion but a true reflection (pratibimba) of Shiva. Like a face reflected in a mirror, the soul has no independent existence apart from Shiva, yet it is genuinely present and capable of recognizing its source. The Bimbāgama teaches that <strong>self-recognition is the key to liberation</strong> — recognizing one's own face as Shiva's face.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Bond</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala</strong> — The innate impurity of finitude; like a dirty mirror that cannot reflect clearly</li>
              <li><strong>Māyā Mala</strong> — The material impurity; like a distorted mirror that reflects falsely</li>
              <li><strong>Kārma Mala</strong> — The impurity of accumulated karma; like a mirror turned away from the light</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Śiva-Sāyujya (शिव-सायुज्य)</h4>
          <p>The ultimate goal is <strong>Śiva-sāyujya</strong> — union with Shiva. In the Bimbāgama, this is described as the soul <strong>"recognizing itself as the perfect reflection of Shiva"</strong> — like a clean mirror that reflects the sun completely. The liberated soul becomes a perfect bimba (image) of Shiva, expressing all His qualities while remaining a distinct reflection.</p>

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
            sanskrit="बिम्बं मुखं शिवस्यैतद् यतो दर्शनमुत्तमम् ।
बिम्बागमं समाश्रित्य बिम्बी भवति मानवः ॥"
            transliteration="Bimbaṃ mukhaṃ śivasyaitad yato darśanamuttamam | Bimbāgamaṃ samāśritya bimbī bhavati mānavaḥ ||"
            meaning="This image-face is of Shiva, from which comes the supreme vision. Taking refuge in the Bimbagama, a human being becomes the image (of Shiva)."
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
        <Section id="tattvas" title="4. The 36 Tattvas According to Bimbāgama" hindiTitle="४. बिम्बागम के अनुसार ३६ तत्त्व">
          <p>The Bimbāgama presents the complete exposition of the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) with emphasis on how each tattva is a "face" or "image" of Shiva's consciousness.</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Bimbāgama</h4>
          <p>The Bimbāgama occupies a distinctive position as <strong>the Āgama of Divine Image</strong>. It teaches that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>The image is not merely symbolic</strong> — Through proper consecration, the material image becomes a genuine vessel of divine consciousness.</li>
            <li><strong>The devotee becomes the image</strong> — Through spiritual practice, the devotee's own body and face become living images of Shiva.</li>
            <li><strong>Recognition is liberation</strong> — The key insight is recognizing the identity between the worshipped image, the worshipper, and Shiva.</li>
          </ul>
          <p className="mt-3">This makes the Bimbāgama particularly relevant for seekers who understand that <strong>the divine is not distant but can be encountered in tangible form</strong> — and that the ultimate goal is to recognize one's own true nature as the image of Shiva.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses critical editions and research on Bimbagama.', url: 'https://www.ifpindia.org' },
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
बिम्बागमं समाश्रित्य शिवज्ञानं प्रकाशते ।
पशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Bimbāgamaṃ samāśritya śivajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Bimbagama, the knowledge of Shiva illuminates — for the purpose of liberation from the bonds of the Pashu, for the attainment of union with Shiva."
          />
        </Section>
      </div>
    </div>
  );
}