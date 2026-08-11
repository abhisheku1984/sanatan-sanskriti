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

export default function ViragamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Vīrāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">वीरागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Fifteenth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु पञ्चदशः — वीर्य एवं शौर्य प्रधान शैवसिद्धान्त दर्शन</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="वीरागम — Complete Page Audio Narration"
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
          <p>The <strong>Vīrāgama</strong> (वीरागम) occupies the <strong>fifteenth position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Vīra</em> (वीर), meaning "Hero" or "Warrior" — thus <strong>Vīrāgama is "The Scripture of the Heroic Path."</strong> It is the Āgama most closely associated with the cultivation of spiritual courage, heroic devotion (<em>vīra-bhakti</em>), and the fearless pursuit of liberation.</p>

          <p>The Vīrāgama holds special significance as the scripture that <strong>Vīra Śaivites (Lingayats)</strong> particularly revere. While the broader Shaiva Siddhanta tradition honors all twenty-eight Āgamas, the Vīrāgama and Vātulāgama are specifically cited as foundational texts for the Vīra Śaiva community. This Āgama emphasizes the heroic qualities required to overcome the bonds of existence — courage, determination, and unwavering commitment to Shiva.</p>

          <Verse
            sanskrit={`वीरो यः शिवभक्तानां श्रेष्ठः स्यात् परमेश्वरः ।\nवीरागमं समाश्रित्य भवेत् स वीर एव हि ॥`}
            transliteration="Vīro yaḥ śivabhaktānāṃ śreṣṭhaḥ syāt parameśvaraḥ | Vīrāgamaṃ samāśritya bhavet sa vīra eva hi ||"
            meaning="He who is the best among Shiva's devotees is a hero of the Supreme Lord. Taking refuge in the Viragama, he indeed becomes a hero."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Aghora Face</h3>
          <p>The Vīrāgama emanates from <strong>Aghora</strong> (अघोर), the southward-facing aspect of Sadāshiva. Aghora represents <strong>transformation, dissolution, and the fierce grace</strong> that burns away impurities. This face is associated with the element of <strong>Fire (Agni)</strong>, the color <strong>black</strong>, and the function of dissolution (<em>saṃhāra</em>) within the Pañchabrahma system. From this face, the Āgama derives its emphasis on the heroic confrontation with one's own limitations and the fierce determination required for spiritual victory.</p>

          <p>The original scope of the Vīrāgama is traditionally stated as <strong>one lakh (1,00,000) verses</strong> — a substantial corpus reflecting its comprehensive treatment of heroic spirituality, ritual, and liberation.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Grīva (Neck)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Vīrāgama is assigned to the <strong>Grīva (ग्रीवा) — the neck</strong>. This placement is profoundly significant:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Connection and Communication:</strong> The neck connects the head (wisdom) with the heart (devotion) — representing this Āgama's integration of knowledge and love.</li>
            <li><strong>Strength and Support:</strong> The neck supports the head and bears the weight of the crown — symbolizing the Vīrāgama's emphasis on the strength required to bear the responsibilities of spiritual life.</li>
            <li><strong>Voice and Expression:</strong> The neck houses the vocal apparatus — representing this Āgama's power to give voice to the truth of Shiva and to express heroic devotion.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Thirteen Upāgamas (उपागम)</h3>
          <p>The Vīrāgama has the largest number of subsidiary texts among the Āgamas, reflecting its comprehensive scope:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Prastāram</td><td className="py-2 pr-3 font-devanagari text-ink-muted">प्रस्तारम्</td><td className="py-2 text-ink-light">Foundational expansion; systematic exposition of Vīra doctrine</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Pullamallam</td><td className="py-2 pr-3 font-devanagari text-ink-muted">पुल्लमल्लम्</td><td className="py-2 text-ink-light">Floral offerings; garland rituals; symbolism of devotion</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Prabodham</td><td className="py-2 pr-3 font-devanagari text-ink-muted">प्रबोधम्</td><td className="py-2 text-ink-light">Spiritual awakening; rousing from ignorance; dawn rituals</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Bodham</td><td className="py-2 pr-3 font-devanagari text-ink-muted">बोधम्</td><td className="py-2 text-ink-light">Direct knowledge; immediate recognition of Shiva-nature</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Bodhakam</td><td className="py-2 pr-3 font-devanagari text-ink-muted">बोधकम्</td><td className="py-2 text-ink-light">Teaching methodology; guru-disciple transmission</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Amoham</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अमोहम्</td><td className="py-2 text-ink-light">Freedom from delusion; clarity of spiritual vision</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">7</td><td className="py-2 pr-3 font-medium">Mohasamayam</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मोहसमयम्</td><td className="py-2 text-ink-light">Analysis of delusion; understanding the nature of bondage</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">8</td><td className="py-2 pr-3 font-medium">Hākaṭam</td><td className="py-2 pr-3 font-devanagari text-ink-muted">हाकटम्</td><td className="py-2 text-ink-light">Protective rituals; defensive mantras; spiritual armor</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">9</td><td className="py-2 pr-3 font-medium">Sakaṭādikam</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सकटादिकम्</td><td className="py-2 text-ink-light">Vehicle symbolism; chariot meditation; processional rituals</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">10</td><td className="py-2 pr-3 font-medium">Halam</td><td className="py-2 pr-3 font-devanagari text-ink-muted">हलम्</td><td className="py-2 text-ink-light">Plough symbolism; agricultural rites; fertility rituals</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">11</td><td className="py-2 pr-3 font-medium">Vilekhanam</td><td className="py-2 pr-3 font-devanagari text-ink-muted">विलेखनम्</td><td className="py-2 text-ink-light">Inscription rituals; writing mantras; yantra preparation</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">12</td><td className="py-2 pr-3 font-medium">Bhadram</td><td className="py-2 pr-3 font-devanagari text-ink-muted">भद्रम्</td><td className="py-2 text-ink-light">Auspicious rites; prosperity rituals; welfare ceremonies</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">13</td><td className="py-2 pr-3 font-medium">Vīram</td><td className="py-2 pr-3 font-devanagari text-ink-muted">वीरम्</td><td className="py-2 text-ink-light">Heroic practices; advanced sādhana; warrior spirituality</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Vīrāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation:</p>
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
          <p>The Kriyā Pāda of the Vīrāgama emphasizes <strong>heroic ritual action</strong> — practices that require courage, determination, and unwavering commitment. It covers:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Liṅga Worship (Liṅgārcana)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Iṣṭa-liṅga</strong> — The personal Liṅga carried by the Vīra Śaiva devotee, representing the intimate bond between soul and Shiva</li>
            <li><strong>Liṅga-dhāraṇa</strong> — Protocols for wearing and consecrating the personal Liṅga on the body</li>
            <li><strong>Prāṇa-liṅga</strong> — Recognition of the breath itself as a form of the Liṅga</li>
            <li><strong>Bhāva-liṅga</strong> — The Liṅga of feeling — transforming every emotional state into worship</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Temple Architecture (Ālaya-Nirmāṇa)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vīra-maṇḍapa</strong> — Heroic assembly halls for communal worship and spiritual discourse</li>
            <li><strong>Liṅga-pratiṣṭhā</strong> — Installation ceremonies emphasizing the sovereign power of Shiva</li>
            <li><strong>Śikhara Design</strong> — Tower architecture reflecting the upward aspiration of the heroic soul</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Ritual Worship (Pūjā, Homa, Japa)</h4>
          <p>The Vīrāgama prescribes the <strong>Ṣoḍaśopacāra Pūjā</strong> with special emphasis on:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vīra-nyāsa</strong> — Heroic placement of mantras on the body, transforming the practitioner into a spiritual warrior</li>
            <li><strong>Astra-pūjā</strong> — Worship of divine weapons as symbols of Shiva's protective power</li>
            <li><strong>Rudra-homa</strong> — Fire sacrifices invoking the fierce aspect of Shiva for protection and empowerment</li>
          </ul>

          <Verse
            sanskrit={`वीरो यः शिवलिङ्गस्य पूजां कुर्यात् सदा मुदा ।\nस वीरः शिवसायुज्यं प्राप्नोति नात्र संशयः ॥`}
            transliteration="Vīro yaḥ śivaliṅgasya pūjāṃ kuryāt sadā mudā | Sa vīraḥ śivasāyujyaṃ prāpnoti nātra saṃśayaḥ ||"
            meaning="The hero who worships the Shiva Linga always with joy — that hero attains union with Shiva, of this there is no doubt."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>heroic daily conduct</strong> of the Vīra Śaiva practitioner:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Nitya-Pūjā-Vidhi)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Brāhma Muhūrta</strong> — Rising before dawn; immediate Śiva-smaraṇa and Liṅga-pūjā</li>
            <li><strong>Pañcācāra</strong> — The fivefold conduct: Liṅgācāra (Liṅga worship), Sadācāra (noble conduct), Śivācāra (Shiva-like behavior), Gaṇācāra (community service), Bṛtyācāra (service to devotees)</li>
            <li><strong>Aṣṭavarana</strong> — The eightfold shield: Guru, Liṅga, Jangama (wandering devotee), Pādodaka (sacred water), Prasāda (blessed food), Vibhūti (sacred ash), Rudrākṣa, and Mantra</li>
            <li><strong>Tripuṇḍra</strong> — Application of sacred ash in three horizontal lines with Vīra-mantra</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Vīrāgama prescribes specific <strong>vratas</strong> including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vīra-śivarātri</strong> — The great night of Shiva observed with heroic vigil and austerity</li>
            <li><strong>Guru-pūjā</strong> — Special worship of the spiritual preceptor as the living embodiment of Shiva</li>
            <li><strong>Jangama-satkāra</strong> — Honoring wandering ascetics as manifestations of Shiva's grace</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>Heroic penances including extended fasting, pilgrimage to sacred Liṅgas, and service to the spiritual community.</p>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Vīrāgama presents <strong>Vīra-Yoga</strong> — the yoga of the heroic soul:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and Their Presiding Deities</h4>
          <p>The Vīrāgama provides a complete mapping of the <strong>36 Tattvas</strong> with emphasis on the soul's heroic journey through them. <em>(See detailed table in Section 4 below.)</em></p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vīra-Yoga — The Yoga of the Hero</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Śūra-sādhana</strong> — Heroic practice: facing one's fears and limitations directly</li>
            <li><strong>Liṅga-dhyāna</strong> — Meditation on the inner Liṅga as the source of infinite courage</li>
            <li><strong>Vīra-bhāva</strong> — Cultivation of the heroic attitude in all circumstances</li>
            <li><strong>Astra-mudrā</strong> — Hand gestures representing divine weapons for protection and empowerment</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Shaiva Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Non-violence, truthfulness, non-stealing, brahmacharya, aparigraha — practiced with heroic determination</li>
            <li><strong>Niyama</strong> — Śauca, Santoṣa, Tapas as heroic austerity, Svādhyāya, Īśvara-praṇidhāna</li>
            <li><strong>Āsana</strong> — Vīrāsana (hero pose) as the primary meditation posture</li>
            <li><strong>Prāṇāyāma</strong> — Bhastrikā and Sūrya-bhedana for generating inner strength</li>
            <li><strong>Pratyāhāra</strong> — Withdrawal of senses into the heart-Liṅga</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the Vīra-bīja mantra</li>
            <li><strong>Dhyāna</strong> — Meditation on Shiva as the supreme hero (Mahāvīra)</li>
            <li><strong>Samādhi</strong> — Heroic absorption in Shiva-tattva</li>
          </ul>

          <Verse
            sanskrit={`वीरासने स्थितो योगी वीरबीजं समुच्चरन् ।\nहृदि लिङ्गं स्मरन् नित्यं शिवं गच्छति निश्चितम् ॥`}
            transliteration="Vīrāsane sthito yogī vīrabījaṃ samuccaran | Hṛdi liṅgaṃ smaran nityaṃ śivaṃ gacchati niścitam ||"
            meaning="The yogi seated in Virasana, uttering the Vira-bija, constantly remembering the Linga in the heart — he certainly reaches Shiva."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda presents the core metaphysical framework through the <strong>Pati-Paśu-Pāśa</strong> doctrine with emphasis on the heroic soul:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya)</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Lord as Mahāvīra</h5>
            <p className="text-ink-light text-sm">Shiva as the Supreme Reality is <strong>Mahāvīra</strong> — the Great Hero. He is the source of all courage, the protector of the universe, and the ultimate warrior who conquers evil and ignorance. His grace is not soft or passive but active and empowering.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Bound Soul as Potential Vīra</h5>
            <p className="text-ink-light text-sm">The individual soul is <strong>eternally real</strong> — not an illusion but a spark of divine heroism waiting to be awakened. The soul's bondage is temporary; its true nature is <strong>vīratva</strong> (heroism). The task of spiritual life is to awaken this dormant heroism through Shiva's grace.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Bond</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala</strong> — The innate impurity of finitude, overcome by the heroic power of Śaktipāta</li>
              <li><strong>Māyā Mala</strong> — The material impurity, transcended through heroic detachment and discrimination</li>
              <li><strong>Kārma Mala</strong> — The impurity of accumulated karma, burned away through heroic action and surrender</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Śiva-Sāyujya (शिव-सायुज्य)</h4>
          <p>The ultimate goal is <strong>Śiva-sāyujya</strong> — union with Shiva. In the Vīrāgama, this is described as the soul becoming <strong>"heroic like Shiva"</strong> — courageous, compassionate, fearless, and empowered to serve the spiritual welfare of all beings.</p>

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
            sanskrit={`वीरो भव वीरो भव वीरो भव सदा शिवः ।\nवीरागमं समाश्रित्य वीरत्वं प्राप्नुहि स्वयम् ॥`}
            transliteration="Vīro bhava vīro bhava vīro bhava sadā śivaḥ | Vīrāgamaṃ samāśritya vīratvaṃ prāpnuhi svayam ||"
            meaning="Be a hero, be a hero, be a hero — always Shiva. Taking refuge in the Viragama, attain heroism yourself."
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
        <Section id="tattvas" title="4. The 36 Tattvas According to Vīrāgama" hindiTitle="४. वीरागम के अनुसार ३६ तत्त्व">
          <p>The Vīrāgama presents the complete exposition of the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) with emphasis on the soul's heroic journey from bondage to liberation.</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Vīrāgama</h4>
          <p>The Vīrāgama occupies a distinctive position as <strong>the Āgama of Heroic Spirituality</strong>. It teaches that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Spiritual life requires courage</strong> — The path to Shiva is not for the faint-hearted but for those willing to face their deepest fears and limitations.</li>
            <li><strong>Devotion is active and empowered</strong> — True bhakti is not passive surrender but active, heroic engagement with the divine.</li>
            <li><strong>Community is strength</strong> — The Vīra Śaiva tradition emphasizes sangha (spiritual community) as essential for heroic practice.</li>
          </ul>
          <p className="mt-3">This makes the Vīrāgama particularly relevant for seekers who understand that <strong>spiritual growth requires effort, courage, and unwavering commitment</strong> — the qualities of a true hero of Shiva.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses critical editions and research on Viragama.', url: 'https://www.ifpindia.org' },
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
            sanskrit={`ॐ नमः शिवाय ।\nवीरागमं समाश्रित्य शिवज्ञानं प्रकाशते ।\nपशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥`}
            transliteration="Oṃ Namaḥ Śivāya | Vīrāgamaṃ samāśritya śivajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Viragama, the knowledge of Shiva illuminates — for the purpose of liberation from the bonds of the Pashu, for the attainment of union with Shiva."
          />
        </Section>
      </div>
    </div>
  );
}