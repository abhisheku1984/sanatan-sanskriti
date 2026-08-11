import { motion } from 'framer-motion';
import { useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import SectionDivider from '../components/SectionDivider';
import DharmaWheel from '../components/DharmaWheel';
import TattvaTable from '../components/TattvaTable';
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

export default function NishvasagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Niśvāsāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">निश्वासागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Twelfth of the Twenty-Eight Primary Shaiva Āgamas[cite: 6]</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु द्वादशः — श्वास-योग एवं प्राण-विद्या का गहन अध्ययन[cite: 6]</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="निश्वासागम — Complete Page Audio Narration"
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
          <p>The <strong>Shaiva Siddhanta</strong> tradition represents one of the most systematic and philosophically rigorous schools of Hindu theology[cite: 6]. At its foundation lie the <strong>twenty-eight primary Shaiva Āgamas</strong> (अष्टाविंशति शैवागम), revealed by the five faces of Lord Sadāshiva[cite: 6].</p>

          <p>The <strong>Niśvāsāgama</strong> (निश्वासागम) occupies the <strong>twelfth position</strong> among these twenty-eight Āgamas[cite: 6]. Its name derives from <em>niśvāsa</em> (निश्वास) meaning "expiration," "out-breath," or "that which is expelled" — thus <strong>Niśvāsāgama is "The Scripture of the Out-Breath"</strong> or "The Agama of Expiration"[cite: 6]. This name encapsulates the Āgama's fundamental orientation toward <strong>breath as the primary vehicle of spiritual transformation</strong> — the out-breath as the moment of release, surrender, and the expulsion of all that is not Shiva[cite: 6].</p>

          <Verse
            sanskrit="शिवात् निश्वासः, निश्वासात् प्राणः, प्राणाद् वायुः ।\nएवं परम्परा-प्राप्तं निश्वासागममनुत्तमम् ॥"
            transliteration="Śivāt Niśvāsaḥ, Niśvāsāt Prāṇaḥ, Prāṇād Vāyuḥ | Evaṃ paramparā-prāptaṃ Niśvāsāgamam anuttamam ||"
            meaning="From Shiva to Nishvasa, from Nishvasa to Prana, and from Prana to Vayu — thus was the supreme Nishvasagama received through the sacred lineage[cite: 6]."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Tatpuruṣa Face</h3>
          <p>The Niśvāsāgama emanates from <strong>Tatpuruṣa</strong> (तत्पुरुष), the eastward-facing aspect of Sadāshiva[cite: 6]. Tatpuruṣa represents <strong>renunciation, asceticism, and the power of dissolution (saṃhāra)</strong> — the face through which Shiva withdraws the cosmos into Himself[cite: 6]. This face is associated with the element of <strong>Air (Vāyu)</strong>, the color <strong>yellow/gold</strong>, and the dissolving function within the Pañchabrahma system[cite: 6]. The breath-oriented nature of Niśvāsāgama finds its perfect origin in Vāyu, the cosmic breath[cite: 6].</p>

          <p>The original scope of the Niśvāsāgama is traditionally stated as <strong>one lakh (1,00,000) shlokas</strong> — a vast encyclopedic corpus[cite: 6]. Like many Āgamas, the available recensions represent condensed versions transmitted through specific lineages[cite: 6].</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Pārśva (Sides/Flanks)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Niśvāsāgama is assigned to the <strong>Pārśva (पार्श्व) — the sides or flanks</strong>[cite: 6]. This placement is profoundly significant[cite: 6]:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Expansion and Contraction:</strong> The flanks expand with inhalation and contract with exhalation — representing this Āgama's emphasis on the rhythm of breath as the rhythm of the cosmos[cite: 6].</li>
            <li><strong>Protection of Vital Organs:</strong> The flanks protect the heart and lungs — symbolizing this Āgama's role in safeguarding the vital prāṇa through proper breath control[cite: 6].</li>
            <li><strong>Lateral Movement:</strong> The sides enable turning and shifting — representing the Niśvāsāgama's revelation of the subtle lateral energy channels (iḍā and piṅgalā) that balance the central channel[cite: 6].</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Eight Upāgamas (उपागम)</h3>
          <p>Each primary Āgama has subsidiary texts called Upāgamas[cite: 6]. The Niśvāsāgama's eight Upāgamas are[cite: 6]:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Niśvāsa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">निश्वास</td><td className="py-2 text-ink-light">Out-breath; the science of expiration as spiritual release and surrender[cite: 6]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Ucchvāsa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">उच्छ्वास</td><td className="py-2 text-ink-light">Up-breath; the science of inhalation as drawing in divine energy[cite: 6]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Prāṇa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">प्राण</td><td className="py-2 text-ink-light">Life-force; the five prāṇas and their regulation for health and spirituality[cite: 6]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Vāyu</td><td className="py-2 pr-3 font-devanagari text-ink-muted">वायु</td><td className="py-2 text-ink-light">Air element; worship of Vāyu-devatā and wind-based purification[cite: 6]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Śvāsa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">श्वास</td><td className="py-2 text-ink-light">Breath; the subtle mechanics of respiration and its spiritual dimensions[cite: 6]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Nāḍī</td><td className="py-2 pr-3 font-devanagari text-ink-muted">नाडी</td><td className="py-2 text-ink-light">Energy channels; detailed anatomy of the subtle body and prāṇa-flow[cite: 6]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">7</td><td className="py-2 pr-3 font-medium">Bindu</td><td className="py-2 pr-3 font-devanagari text-ink-muted">बिन्दु</td><td className="py-2 text-ink-light">The drop; the point where all prāṇic currents converge in the sahasrāra[cite: 6]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">8</td><td className="py-2 pr-3 font-medium">Dhvani</td><td className="py-2 pr-3 font-devanagari text-ink-muted">ध्वनि</td><td className="py-2 text-ink-light">Sound; the audible dimension of breath — nāda-brahman and sonic yoga[cite: 6]</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Niśvāsāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation[cite: 6]:</p>
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
          <p>The Kriyā Pāda of the Niśvāsāgama is distinguished by its emphasis on <strong>breath-centered rituals</strong> — practices in which every offering is synchronized with respiration[cite: 6]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Temple Architecture (Ālaya-Nirmāṇa / आलय-निर्माण)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vāyu-ālaya</strong> — Temples designed for optimal air circulation: tall towers (vimāna) that create natural drafts, ventilated sanctums[cite: 6]</li>
            <li><strong>Prāṇa-maṇḍapa</strong> — Halls with specific proportions (1:1.618) that create resonant acoustic frequencies supporting deep breathing[cite: 6]</li>
            <li><strong>Niśvāsa-toraṇa</strong> — Gateways positioned to capture prevailing winds, symbolizing the cosmic breath entering the sacred space[cite: 6]</li>
            <li><strong>Dhvani-garbhagṛha</strong> — Sanctums with parabolic ceilings that amplify the sound of ritual chanting and breathing[cite: 6]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Icon-Making & Installation (Mūrti-Pratiṣṭhā / मूर्ति-प्रतिष्ठा)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Prāṇa-mūrti</strong> — Icons with subtly parted lips, suggesting the flow of breath; nostrils finely carved to suggest respiration[cite: 6]</li>
            <li><strong>Śvāsa-nyāsa</strong> — Placement of breath-mantras (Haṃsa-bīja) at the nostrils, throat, and navel of the icon[cite: 6]</li>
            <li><strong>Vāyu-mudrā</strong> — The deity's hands in mudrās suggesting the movement of air and prāṇa[cite: 6]</li>
            <li><strong>Prāṇa-pratiṣṭhā</strong> — The life-installation ritual performed with synchronized group breathing, creating a field of collective prāṇa[cite: 6]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Breath-Synchronized Ritual (Śvāsa-Pūjā / श्वास-पूजा)</h4>
          <p>The Niśvāsāgama prescribes the <strong>Ṣoḍaśopacāra Pūjā</strong> with unique emphasis on <strong>breath synchronization</strong>[cite: 6]. Each offering is made on the out-breath; each reception on the in-breath[cite: 6]. The arati is waved in rhythm with the priest's breathing[cite: 6]. The text teaches that <strong>breath is the thread (sūtra) that connects the worshipper to the deity</strong> — when breath stops, connection breaks[cite: 6].</p>

          <Verse
            sanskrit="निश्वासेन विश्वं सृज्यते निश्वासेन विश्वं हरते ।\nनिश्वासागममार्गेण प्राणी शिवमवाप्नुयात् ॥"
            transliteration="Niśvāsena viśvaṃ sṛjyate niśvāsena viśvaṃ harate | Niśvāsāgamamārgeṇa prāṇī śivamavāpnuyāt ||"
            meaning="By out-breath the world is created; by out-breath the world is withdrawn. By the path of the Nishvasagama, the living being attains Shiva[cite: 6]."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>daily behavioral framework</strong> with emphasis on breath discipline — transforming every breath into an act of worship[cite: 6]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Śvāsa-Nitya-Krama)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Prāṇa-utthāna</strong> — Waking with awareness of the first breath; the day begins with the Haṃsa-mantra ("So'ham")[cite: 6]</li>
            <li><strong>Nāḍī-śuddhi-snāna</strong> — Purification through alternate nostril breathing before physical bathing[cite: 6]</li>
            <li><strong>Tri-sandhyā-prāṇāyāma</strong> — Five rounds of Nāḍī-śuddhi at dawn, noon, and dusk[cite: 6]</li>
            <li><strong>Niśvāsa-dhyāna</strong> — Meditation on the out-breath as the surrender of all sins and impurities to Shiva[cite: 6]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Niśvāsāgama prescribes <strong>prāṇa-vratas</strong> — breath vows including extended prāṇāyāma on specific lunar days, and the <strong>Vāyu-pañcamī</strong> festival celebrating the element of air[cite: 6]. Special observances focus on the <strong>equinoxes</strong>, when day and night breathe equally[cite: 6].</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>Detailed protocols for <strong>breath-based expiation</strong> — ritual errors are corrected through specific prāṇāyāma techniques: Kṛcchra-prāṇāyāma (difficult breath control), Cāndrāyaṇa-breathing (alternating fast and slow breaths), and extended retention (kumbhaka)[cite: 6].</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāṇa-Āhāra (Breath-Nourishment)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Prāṇa-rich foods</strong> — Fresh, uncooked foods that retain maximum life-force[cite: 6]</li>
            <li><strong>Light diet</strong> — Avoiding heavy foods that restrict diaphragmatic movement[cite: 6]</li>
            <li><strong>Fast-breathing days</strong> — Weekly fasts combined with extended prāṇāyāma to purify the nāḍīs[cite: 6]</li>
          </ul>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Niśvāsāgama presents a sophisticated system of <strong>śvāsa-yoga</strong> — the yoga of breath[cite: 6]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and the Breath Metaphor</h4>
          <p>The Niśvāsāgama provides a unique analysis of the <strong>36 Tattvas</strong>, interpreting the entire cosmos as a <strong>great breathing process</strong> — the cosmic inhalation (saṃhāra) and exhalation (sṛṣṭi) of Sadāshiva[cite: 6]. Each tattva represents a specific phase in this cosmic respiration[cite: 6]. <em>(See detailed table in Section 4 below.)</em>[cite: 6]</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Breath Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Ahiṃsā interpreted as not disturbing the prāṇa of any being; Satya as alignment of speech with breath[cite: 6]</li>
            <li><strong>Niyama</strong> — Śauca as purity of the nāḍīs; Svādhyāya as breath-aware study; Tapas as extended kumbhaka[cite: 6]</li>
            <li><strong>Āsana</strong> — Postures that maximize diaphragmatic freedom: Padmāsana, Siddhāsana, Vajrāsana[cite: 6]</li>
            <li><strong>Prāṇāyāma</strong> — The core practice: Nāḍī-śuddhi, Sūrya-bhedana, Ujjāyī, Bhastrikā, and Śītalī[cite: 6]</li>
            <li><strong>Pratyāhāra</strong> — Withdrawing the senses by merging them with the breath — seeing breath, hearing breath, feeling breath[cite: 6]</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the pauses between breaths (kumbhaka) — the silent spaces where Shiva speaks[cite: 6]</li>
            <li><strong>Dhyāna</strong> — Meditation on the Haṃsa-mantra: "So'ham" (I am That) on inhalation, "Haṃsaḥ" (That am I) on exhalation[cite: 6]</li>
            <li><strong>Samādhi</strong> — <strong>Śvāsa-samādhi</strong>: absorption in the breathless state where individual respiration merges with cosmic respiration[cite: 6]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Kuṇḍalinī as Prāṇa-Śakti</h4>
          <p>The Niśvāsāgama describes the <strong>Kuṇḍalinī Śakti</strong> as <strong>prāṇa-śakti</strong> — the power of life-force[cite: 6]. When awakened through prāṇāyāma, she rises through the suṣumnā nāḍī like a column of breath[cite: 6]. Each chakra is opened not by force but by <strong>the gentle pressure of controlled prāṇa</strong>[cite: 6]. The text provides detailed measurements: specific ratios of inhalation, retention, and exhalation for each chakra[cite: 6].</p>

          <Verse
            sanskrit="प्राणशक्तिः सदा यस्मिन् मूलाधारे प्रतिष्ठिता ।\nप्राणायामेन संबोध्या सहस्रारे शिवं व्रजेत् ॥"
            transliteration="Prāṇaśaktiḥ sadā yasmin mūlādhāre pratiṣṭhitā | Prāṇāyāmena saṃbodhyā sahasrāre śivaṃ vrajet ||"
            meaning="The power of prana, ever established in the Muladhara, is awakened through pranayama and reaches Shiva at the Sahasrara[cite: 6]."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda represents the <strong>philosophical summit</strong> of the Niśvāsāgama[cite: 6]. It presents the core metaphysical framework through the lens of <strong>prāṇa-vāda</strong> — the doctrine of life-force[cite: 6]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya) — Breath View</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Cosmic Breather</h5>
            <p className="text-ink-light text-sm">Shiva as <strong>Mahā-prāṇa</strong> — the Great Breath[cite: 6]. He is not merely the breather but <strong>breathing itself</strong> — the cosmic respiration in which the universe is inhaled (saṃhāra) and exhaled (sṛṣṭi) in endless cycles[cite: 6]. The Niśvāsāgama's unique contribution is the revelation that Shiva's "breath" is not physiological but <strong>ontological</strong> — it is the pulsation of existence itself, the rhythm of being and non-being[cite: 6].</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Shallow Breather</h5>
            <p className="text-ink-light text-sm">The individual soul (jīva) is <strong>prāṇa-baddha</strong> — bound by breath[cite: 6]. It breathes shallowly, unconsciously, mechanically — never realizing that each breath is an opportunity for divine communion[cite: 6]. The Niśvāsāgama describes the soul's condition as <strong>apāna-dominance</strong> — dominated by the downward, excretory force rather than the upward, spiritual force of udāna[cite: 6].</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Breath-Bond</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala (आणव मल)</strong> — The constriction of breath: the soul's prāṇa is restricted to the physical body, unable to expand into the cosmic prāṇa[cite: 6]. It is like breathing through a straw — life continues but is severely limited[cite: 6].</li>
              <li><strong>Māyā Mala (माया मल)</strong> — The breath of illusion: Māyā makes the soul believe it is breathing independently, when in fact all breath is Shiva's[cite: 6]. The Niśvāsāgama describes this as <strong>svatantra-śvāsa</strong> — the illusion of independent breathing[cite: 6].</li>
              <li><strong>Kārma Mala (कार्म मल)</strong> — The breath of habit: Karma creates <strong>vāsanā-residues</strong> in the nāḍīs that restrict prāṇic flow[cite: 6]. Each negative action creates a blockage; each positive action clears a channel[cite: 6].</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Prāṇa-Sāyujya (प्राण-सायुज्य)</h4>
          <p>The ultimate goal described in the Niśvāsāgama is <strong>Prāṇa-sāyujya</strong> — union through breath[cite: 6]. The liberated soul does not stop breathing but rather <strong>breathes as Shiva breathes</strong> — each inhalation is the creation of the cosmos; each exhalation is its dissolution[cite: 6]. The soul retains its individual respiratory rhythm while knowing it as a modulation of the cosmic breath[cite: 6]. The final state is <strong>kevala-kumbhaka</strong> — spontaneous breath-retention where individual and cosmic prāṇa become indistinguishable[cite: 6].</p>

          <Verse
            sanskrit="प्राणः पशुपतिः शम्भुः प्राणं मोचयते सदा ।\nप्राणेन कर्मणा भक्त्या शिवसायुज्यमाप्नुयात् ॥"
            transliteration="Prāṇaḥ paśupatiḥ śambhuḥ prāṇaṃ mocayate sadā | Prāṇena karmaṇā bhaktyā śivasāyujyamāpnuyāt ||"
            meaning="The prana-Lord, Pashupati Shambhu, ever liberates through prana. Through pranic action and devotion, one attains Shiva-Sayujya[cite: 6]."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 3: CORE VERSES ===== */}
        <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
          <Verse
            sanskrit="निश्वासो जीवनं यस्मात् निश्वासो मरणं तथा ।\nनिश्वासं यः सदा जानाति स जीवन् मुक्तो भवेत् ॥"
            transliteration="Niśvāso jīvanaṃ yasmāt niśvāso maraṇaṃ tathā | Niśvāsaṃ yaḥ sadā jānāti sa jīvan mukto bhavet ||"
            meaning="Out-breath is life, and out-breath is also death. He who ever knows the out-breath becomes liberated while living[cite: 6]."
          />

          <Verse
            sanskrit="हंसः सोऽहं सदा ध्यायेत् प्राणापानसमन्वितः ।\nनिश्वासागममार्गेण हंसः शिवमवाप्नुयात् ॥"
            transliteration="Haṃsaḥ so'haṃ sadā dhyāyet prāṇāpānasamanvitaḥ | Niśvāsāgamamārgeṇa haṃsaḥ śivamavāpnuyāt ||"
            meaning="The swan 'So'ham' should ever be meditated upon, joined with prana and apana. By the path of the Nishvasagama, the swan attains Shiva[cite: 6]."
          />

          <Verse
            sanskrit="प्राणो हि शिवरूपेण संसारं धारयते सदा ।\nप्राणं यः सदा जानाति स याति परमं पदम् ॥"
            transliteration="Prāṇo hi śivarūpeṇa saṃsāraṃ dhārayate sadā | Prāṇaṃ yaḥ sadā jānāti sa yāti paramaṃ padam ||"
            meaning="Prana, in the form of Shiva, ever sustains the world. He who ever knows prana reaches the supreme state[cite: 6]."
          />

          <Verse
            sanskrit="निश्वासोच्छ्वासयोर्मध्ये तुरीयं यः सदा वसेत् ।\nनिश्वासागमतत्त्वज्ञः स याति परमं पदम् ॥"
            transliteration="Niśvāsochvāsayormadhye turīyaṃ yaḥ sadā vaset | Niśvāsāgamatattvajñaḥ sa yāti paramaṃ padam ||"
            meaning="He who ever dwells in the fourth state between out-breath and in-breath — the knower of the Nishvasagama's truth reaches the supreme state[cite: 6]."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 4: 36 TATTVAS ===== */}
        <Section id="tattvas" title="4. The 36 Tattvas According to Niśvāsāgama" hindiTitle="४. निश्वासागम के अनुसार ३६ तत्त्व">
          <p>The Niśvāsāgama presents the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) — analyzing each Tattva as a specific <strong>modality of cosmic breath</strong>[cite: 6]. From the total retention (mahā-kumbhaka) of Shiva-tattva to the rapid, shallow breathing of the gross elements, the entire cosmos is understood as a <strong>respiratory spectrum</strong>[cite: 6]. The Niśvāsāgama's unique contribution is the revelation that <strong>the number of breaths in a lifetime is fixed</strong> — spiritual progress is measured by slowing the breath, not by years lived[cite: 6].</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Niśvāsāgama</h4>
          <p>The Niśvāsāgama occupies a distinctive position among the twenty-eight Shaiva Āgamas by <strong>revealing breath as the bridge between body and spirit</strong>[cite: 6]:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Prāṇa-Metaphysics (Śvāsa-vidyā)</strong> — Its Jñāna and Yoga Pādas provide the most comprehensive framework in Indian philosophy for understanding the breath as the primary instrument of spiritual transformation[cite: 6].</li>
            <li><strong>Respiratory Ritual Technology</strong> — The Kriyā and Caryā Pādas establish that ritual without breath-awareness is empty; the breath is the silent mantra underlying all audible mantras[cite: 6].</li>
          </ul>
          <p className="mt-3">This focus makes the Niśvāsāgama particularly relevant for the modern era — it affirms that <strong>the most accessible spiritual practice is also the most profound</strong>, and that <strong>everyone breathes, but few breathe consciously</strong>[cite: 6].</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses critical editions including Nishvasagama fragments.', url: 'https://www.ifpindia.org' },
              { name: 'Himalayan Academy, Hawaii', desc: 'Publisher of comprehensive Shaiva Siddhanta resources.', url: 'https://www.himalayanacademy.com' },
              { name: 'IGNCA (Indira Gandhi National Centre for the Arts)', desc: 'Digital repository of rare manuscripts.', url: 'https://ignca.gov.in' },
              { name: 'Shaiva Agama Research Centre, Chennai', desc: 'Dedicated to preservation, publication, and teaching of Shaiva Agamas.', url: 'https://shaivam.org' },
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
            sanskrit="ॐ नमः शिवाय ।\nनिश्वासागमं समाश्रित्य प्राणज्ञानं प्रकाशते ।\nपशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Niśvāsāgamaṃ samāśritya prāṇajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Nishvasagama, the knowledge of prana illuminates — for liberation from the bonds of the Pashu, for the attainment of union with Shiva[cite: 6]."
          />
        </Section>
      </div>
    </div>
  );
}