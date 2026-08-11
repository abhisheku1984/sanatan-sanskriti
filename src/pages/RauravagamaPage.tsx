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

export default function RauravagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Rauravāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">रौरवागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Sixteenth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु षोडशः — कालतत्त्व एवं महारौरव विमोचन प्रधान</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="रौरवागम — Complete Page Audio Narration"
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
          <p>The <strong>Rauravāgama</strong> (रौरवागम) occupies the <strong>sixteenth position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Raurava</em> (रौरव), a term connected with the fierce, terrifying aspect of divine grace — the "roaring" or "terrifying" power of Shiva that destroys ignorance. Thus, <strong>Rauravāgama is "The Scripture of the Terrifying Grace"</strong> — the Āgama that liberates through the awe-inspiring power of the Lord.</p>

          <p>The Rauravāgama is particularly renowned for its detailed treatment of <strong>initiation (dīkṣā)</strong> and the <strong>purification of the six paths (ṣaḍadhvan-śuddhi)</strong>. It presents one of the most systematic expositions of how the guru, acting as Shiva's instrument, dissolves the soul's bondage through ritual empowerment. The French Institute of Indology, Pondicherry, has published critical editions of this Āgama in multiple volumes, making it one of the most accessible primary Āgamas for scholarly study.</p>

          <Verse
            sanskrit={`रौरवं घोररूपं तद् दीक्षया मोक्षदं महत् ।\nयं प्राप्य मुच्यते जन्तुः पाशबन्धादनन्तकात् ॥`}
            transliteration="Rauravaṃ ghorarūpaṃ tad dīkṣayā mokṣadaṃ mahat | Yaṃ prāpya mucyate jantuḥ pāśabandhādanantakāt ||"
            meaning="That Raurava, of terrifying form, is great and liberation-giving through initiation. Having attained it, the being is liberated from endless bondage."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Tatpuruṣa Face</h3>
          <p>The Rauravāgama emanates from <strong>Tatpuruṣa</strong> (तत्पुरुष), the eastward-facing aspect of Sadāshiva. Tatpuruṣa represents <strong>preservation, sustenance, and the concealing grace</strong> that maintains the cosmic order. This face is associated with the element of <strong>Air (Vāyu)</strong>, the color <strong>yellow/gold</strong>, and the function of preservation (<em>sthiti</em>) within the Pañchabrahma system. From this face, the Āgama derives its emphasis on the sustaining power of initiation and the systematic maintenance of spiritual discipline.</p>

          <p>The original scope of the Rauravāgama is traditionally stated as <strong>eighty crores (800 million) verses</strong> — one of the most extensive corpora among the Āgamas, reflecting its encyclopedic treatment of ritual, cosmology, and liberation.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Karṇa (Ears)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Rauravāgama is assigned to the <strong>Karṇa (कर्ण) — the ears</strong>. This placement is profoundly significant:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Hearing and Reception:</strong> The ears are the organs of hearing — representing this Āgama's emphasis on <em>śravaṇa</em> (hearing the truth) as the primary means of spiritual awakening.</li>
            <li><strong>Mantra Reception:</strong> The ears receive the sacred mantras during initiation — symbolizing the Rauravāgama's detailed treatment of dīkṣā and mantra-transmission.</li>
            <li><strong>Discriminative Listening:</strong> Just as the ears distinguish between meaningful sound and noise, this Āgama teaches discrimination between truth and illusion.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Six Upāgamas (उपागम)</h3>
          <p>The Rauravāgama has six subsidiary texts that elaborate on specific aspects:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Kālāghna</td><td className="py-2 pr-3 font-devanagari text-ink-muted">कालाघ्न</td><td className="py-2 text-ink-light">Destruction of time-bound limitation; liberation from temporal bondage</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Kalātīta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">कलातीत</td><td className="py-2 text-ink-light">Transcendence of Kala (limited agency); attaining divine omnipotence</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Raurava</td><td className="py-2 pr-3 font-devanagari text-ink-muted">रौरव</td><td className="py-2 text-ink-light">Core terrifying grace rituals; advanced dīkṣā procedures</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Rauravottara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">रौरवोत्तर</td><td className="py-2 text-ink-light">Supplementary Raurava rituals; extended expiatory protocols</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Mahākālamatam</td><td className="py-2 pr-3 font-devanagari text-ink-muted">महाकालमतम्</td><td className="py-2 text-ink-light">Great time doctrine; cosmogonic cycles; dissolution rituals</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Aindra</td><td className="py-2 pr-3 font-devanagari text-ink-muted">ऐन्द्र</td><td className="py-2 text-ink-light">Indra-related rituals; sovereign power; royal consecration</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Rauravāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation:</p>
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
          <p>The Kriyā Pāda of the Rauravāgama is distinguished by its extraordinary emphasis on <strong>initiation (dīkṣā)</strong> as the supreme sacrament. It covers:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Dīkṣā Vidhi (Initiation Procedures)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Sādhāra Dīkṣā</strong> — Initiation given by Shiva through the intermediary of the guru; the standard path for most seekers</li>
            <li><strong>Nirādhāra Dīkṣā</strong> — Initiation given directly by Shiva without intermediary; rare and dependent on intense Śaktipāta</li>
            <li><strong>Ṣaḍadhvan-Śuddhi</strong> — Purification of the six paths: mantra, pada, varṇa, bhuvana, tattva, and kala</li>
            <li><strong>Sapta-vidha Dīkṣā</strong> — Seven modes of initiation: cakṣuṣī (by sight), sparśa (by touch), vācikī (by word), mānasī (by thought), śāstrī (by teaching), yogī (by yoga), hautrī (by fire ritual)</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Temple Architecture (Ālaya-Nirmāṇa)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Dīkṣā-maṇḍapa</strong> — Special initiation halls with specific directional orientations</li>
            <li><strong>Liṅga-pratiṣṭhā</strong> — Installation ceremonies with emphasis on the guru as Shiva's instrument</li>
            <li><strong>Renovation Protocols</strong> — Detailed rules for repairing and reconsecrating damaged temples and images</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Daily and Periodic Rituals</h4>
          <p>The Rauravāgama prescribes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Nitya-pūjā</strong> — Daily worship with specific emphasis on the guru's role</li>
            <li><strong>Naimittika-pūjā</strong> — Occasional rituals for special circumstances</li>
            <li><strong>Kāmya-pūjā</strong> — Goal-oriented rituals for specific spiritual or material purposes</li>
            <li><strong>Prāyaścitta-homa</strong> — Fire rituals for expiation and purification</li>
          </ul>

          <Verse
            sanskrit={`दीक्षया मुच्यते जन्तुः पाशबन्धादनन्तकात् ।\nगुरुणा शिवरूपेण दत्तां शक्तिं समाश्रितः ॥`}
            transliteration="Dīkṣayā mucyate jantuḥ pāśabandhādanantakāt | Guruṇā śivarūpeṇa dattāṃ śaktiṃ samāśritaḥ ||"
            meaning="By initiation, the being is liberated from endless bondage. Having taken refuge in the Shakti given by the guru, who has the form of Shiva."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>daily behavioral framework</strong> with special emphasis on guru-bhakti:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Nitya-Pūjā-Vidhi)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Guru-vandana</strong> — First worship of the guru before any other ritual; recognizing the guru as Shiva's embodiment</li>
            <li><strong>Śiva-pūjā</strong> — Worship of Shiva following guru's instructions</li>
            <li><strong>Pañcākṣara-japa</strong> — Repetition of "Oṃ Namaḥ Śivāya" with proper breath regulation</li>
            <li><strong>Tripuṇḍra-dhāraṇa</strong> — Application of sacred ash with awareness of the three malas being burned away</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Rauravāgama prescribes specific <strong>vratas</strong> including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Guru-pūrṇimā</strong> — Full-moon observance dedicated to the spiritual preceptor</li>
            <li><strong>Dīkṣā-dina</strong> — Annual commemoration of one's own initiation</li>
            <li><strong>Śivarātri</strong> — The great night of Shiva with extended vigil and japa</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>The Rauravāgama contains one of the most detailed treatments of expiatory rites among the Āgamas, including Kṛcchra, Cāndrāyaṇa, and specific penances for ritual errors.</p>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Rauravāgama presents a system of <strong>Shaiva Yoga</strong> emphasizing the purification of the subtle body:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and Their Presiding Deities</h4>
          <p>The Rauravāgama provides a complete mapping of the <strong>36 Tattvas</strong> with emphasis on their purification through yoga. <em>(See detailed table in Section 4 below.)</em></p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Ṣaḍadhvan Yoga — Yoga of the Six Paths</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Mantradhvan</strong> — Purification through the five Brahmamantras and five Aṅgamantras</li>
            <li><strong>Padadhvan</strong> — Purification through the 81 words of the Vyomavyāpī-pada-mantra</li>
            <li><strong>Varṇadhvan</strong> — Purification through the 50 syllables from A to Kṣa</li>
            <li><strong>Bhuvanadhvan</strong> — Purification through the worlds enumerated in Shaiva texts</li>
            <li><strong>Tattvadhvan</strong> — Purification through the 36 Tattvas</li>
            <li><strong>Kaladhvan</strong> — Purification through the five Kalas: Nivṛtti, Pratiṣṭhā, Vidyā, Śānti, and Śāntyatīta</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Shaiva Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Non-violence, truthfulness, non-stealing, brahmacharya, aparigraha</li>
            <li><strong>Niyama</strong> — Śauca, Santoṣa, Tapas, Svādhyāya, Īśvara-praṇidhāna</li>
            <li><strong>Āsana</strong> — Padmāsana, Siddhāsana for extended meditation</li>
            <li><strong>Prāṇāyāma</strong> — Nāḍī-śuddhi; breath synchronized with Pañcākṣara</li>
            <li><strong>Pratyāhāra</strong> — Withdrawal into the heart-Liṅga</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the guru's form as Shiva</li>
            <li><strong>Dhyāna</strong> — Meditation on Sadāśiva's five faces</li>
            <li><strong>Samādhi</strong> — Absorption in Shiva-tattva</li>
          </ul>

          <Verse
            sanskrit={`षडध्वनां शुद्धिमासाद्य योगी युञ्जीत सततम् ।\nततः शिवसमावेशं लभते नात्र संशयः ॥`}
            transliteration="Ṣaḍadhvanāṃ śuddhimāsādya yogī yuñjīta satatam | Tataḥ śivasamāveśaṃ labhate nātra saṃśayaḥ ||"
            meaning="Having attained the purification of the six paths, the yogi should constantly practice. Then he obtains Shiva-possession (divine communion), of this there is no doubt."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda presents the core metaphysical framework through the <strong>Pati-Paśu-Pāśa</strong> doctrine with emphasis on initiation as the key to liberation:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya)</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Lord</h5>
            <p className="text-ink-light text-sm">Shiva as the Supreme Reality — the source of all initiation and grace. He is <strong>Sarvajña</strong> (all-knowing), <strong>Svātantrya</strong> (absolutely independent), and <strong>Karuṇāmaya</strong> (infinitely compassionate). Through His grace, He descends as the guru to liberate the bound soul.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Bound Soul</h5>
            <p className="text-ink-light text-sm">The individual soul is <strong>eternally real</strong> — a distinct conscious entity bound by three fetters. The Rauravāgama classifies souls into three categories: <strong>Vijñānākalā</strong> (souls with knowledge but no action), <strong>Pralayākalā</strong> (souls dissolved at cosmic dissolution), and <strong>Sakala</strong> (souls with body, senses, and limitation).</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Bond</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala</strong> — The innate impurity of finitude; removed only by Śaktipāta (descent of grace)</li>
              <li><strong>Māyā Mala</strong> — The material impurity providing bodies and worlds for experience</li>
              <li><strong>Kārma Mala</strong> — The impurity of accumulated karma binding the soul to rebirth</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Śiva-Sāyujya (शिव-सायुज्य)</h4>
          <p>The ultimate goal is <strong>Śiva-sāyujya</strong> — union with Shiva. In the Rauravāgama, this is achieved primarily through <strong>dīkṣā</strong> (initiation), which dissociates the soul from the three bonds and manifests Shiva's qualities. After initiation, the qualities of supreme knowledge, devotion to Shiva, and freedom from worldly desires become visible.</p>

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
            sanskrit={`रौरवं घोररूपं तद् दीक्षया मोक्षदं महत् ।\nयं प्राप्य मुच्यते जन्तुः पाशबन्धादनन्तकात् ॥`}
            transliteration="Rauravaṃ ghorarūpaṃ tad dīkṣayā mokṣadaṃ mahat | Yaṃ prāpya mucyate jantuḥ pāśabandhādanantakāt ||"
            meaning="That Raurava, of terrifying form, is great and liberation-giving through initiation. Having attained it, the being is liberated from endless bondage."
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
        <Section id="tattvas" title="4. The 36 Tattvas According to Rauravāgama" hindiTitle="४. रौरवागम के अनुसार ३६ तत्त्व">
          <p>The Rauravāgama presents the complete exposition of the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) with special emphasis on their purification through the six paths (ṣaḍadhvan-śuddhi).</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Rauravāgama</h4>
          <p>The Rauravāgama occupies a distinctive position as <strong>the Āgama of Initiation</strong>. It teaches that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dīkṣā is the supreme sacrament</strong> — No amount of personal effort can remove Āṇava Mala; only the guru's grace through initiation can dissolve this primordial bond.</li>
            <li><strong>Systematic purification is essential</strong> — The six paths must be purified in sequence for complete liberation.</li>
            <li><strong>The guru is Shiva's instrument</strong> — The spiritual preceptor is not merely a teacher but the living conduit of divine grace.</li>
          </ul>
          <p className="mt-3">This makes the Rauravāgama particularly relevant for seekers who understand that <strong>spiritual liberation requires both personal effort and divine grace</strong> — and that the guru is the bridge between the two.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Published critical editions of Rauravagama in multiple volumes (ed. N.R. Bhatt).', url: 'https://www.ifpindia.org' },
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
            sanskrit={`ॐ नमः शिवाय ।\nरौरवागमं समाश्रित्य शिवज्ञानं प्रकाशते ।\nपशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥`}
            transliteration="Oṃ Namaḥ Śivāya | Rauravāgamaṃ samāśritya śivajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Rauravagama, the knowledge of Shiva illuminates — for the purpose of liberation from the bonds of the Pashu, for the attainment of union with Shiva."
          />
        </Section>
      </div>
    </div>
  );
}