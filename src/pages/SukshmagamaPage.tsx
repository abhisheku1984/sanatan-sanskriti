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

export default function SukshmagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Sūkṣmāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">सूक्ष्मागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Seventh of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु सप्तमः — सूक्ष्म ज्ञान एवं अणु-आत्मा का गहन अध्ययन</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="सूक्ष्मागम — Complete Page Audio Narration"
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

          <p>The <strong>Sūkṣmāgama</strong> (सूक्ष्मागम) occupies the <strong>seventh position</strong> among these twenty-eight Āgamas. Its name derives from the Sanskrit root <em>sūkṣma</em> (सूक्ष्म) meaning "subtle," "minute," "atomic," or "that which penetrates the finest divisions" — thus <strong>Sūkṣmāgama is "The Scripture of Subtlety"</strong> or "The Agama of the Imperceptible." This name is not merely descriptive; it encapsulates the Āgama's fundamental orientation toward the invisible, atomic dimensions of existence — the subtle body (sūkṣma-śarīra), the atomic soul (aṇu-ātman), and the imperceptible movements of karma and consciousness that underlie all manifest phenomena.</p>

          <Verse
            sanskrit="शिवात् सूक्ष्मः, सूक्ष्माद् अणुः, अणोर् मात्रः ।
एवं परम्परा-प्राप्तं सूक्ष्मागममनुत्तमम् ॥"
            transliteration="Śivāt Sūkṣmaḥ, Sūkṣmād Aṇuḥ, Aṇor Mātraḥ | Evaṃ paramparā-prāptaṃ Sūkṣmāgamam anuttamam ||"
            meaning="From Shiva to Sukshma, from Sukshma to Anu, and from Anu to Matra — thus was the supreme Sukshmagama received through the sacred lineage of transmission."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Vāmadeva Face</h3>
          <p>The Sūkṣmāgama emanates from <strong>Vāmadeva</strong> (वामदेव), the northward-facing aspect of Sadāshiva. Vāmadeva represents <strong>preservation, sustenance, and the power of knowledge (jñāna)</strong> — the face through which Shiva maintains the cosmic order and bestows the subtle discernment necessary to perceive truth beneath appearances. This face is associated with the element of <strong>Water (Jala)</strong>, the color <strong>red/crimson</strong>, and the sustaining function within the Pañchabrahma system.</p>

          <p>The original scope of the Sūkṣmāgama is traditionally stated as <strong>one lakh (1,00,000) shlokas</strong> — a vast encyclopedic corpus. Like many Āgamas, the available recensions represent condensed versions transmitted through specific lineages, with the full text considered partially lost to the ravages of time.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Kaṭi (Hip/Waist)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Sūkṣmāgama is assigned to the <strong>Kaṭi (कटि) — the hip and waist</strong>. This placement is profoundly significant:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Center of Gravity:</strong> The hip is the body's center of balance — representing this Agama's focus on finding the subtle center point between all opposites (spirit and matter, self and world, stillness and motion).</li>
            <li><strong>Subtle Movements:</strong> The waist moves with subtle, often imperceptible motions — representing this Agama's analysis of the imperceptible movements of prāṇa, karma, and thought that drive the wheel of saṃsāra.</li>
            <li><strong>Connection of Upper and Lower:</strong> The waist joins the upper body (spiritual faculties) with the lower body (worldly action) — symbolizing this Agama's revelation of the subtle thread (sūkṣma-sūtra) connecting heaven and earth, transcendence and immanence.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Ten Upāgamas (उपागम)</h3>
          <p>Each primary Āgama has subsidiary texts called Upāgamas that elaborate on specific aspects. The Sūkṣmāgama's ten Upāgamas are:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Sūkṣma-tara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सूक्ष्मतर</td><td className="py-2 text-ink-light">More subtle than subtle; analysis of the finest gradations of matter and consciousness</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Aṇu</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अणु</td><td className="py-2 text-ink-light">The atomic soul; aṇu-ātman and its relationship to the infinite Shiva</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Mātra</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मात्र</td><td className="py-2 text-ink-light">Measure and metrics; the subtle units of time, space, and perception</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Paramāṇu</td><td className="py-2 pr-3 font-devanagari text-ink-muted">परमाणु</td><td className="py-2 text-ink-light">The ultimate atom; transcending physical atoms to reach the subtlest point of consciousness</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Anurūpa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अनुरूप</td><td className="py-2 text-ink-light">Correspondence and analogy; the subtle parallels between microcosm and macrocosm</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Avyakta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अव्यक्त</td><td className="py-2 text-ink-light">The unmanifest; analysis of prakṛti in its undifferentiated, subtle state before manifestation</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">7</td><td className="py-2 pr-3 font-medium">Vyakta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">व्यक्त</td><td className="py-2 text-ink-light">The manifest; how the subtle becomes gross through progressive densification</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">8</td><td className="py-2 pr-3 font-medium">Vyaktatara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">व्यक्ततर</td><td className="py-2 text-ink-light">More manifest than manifest; the grossest levels of creation as inverted subtlety</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">9</td><td className="py-2 pr-3 font-medium">Śabda</td><td className="py-2 pr-3 font-devanagari text-ink-muted">शब्द</td><td className="py-2 text-ink-light">Subtle sound; the phonemic decomposition of mantras and the science of nāda-brahman</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">10</td><td className="py-2 pr-3 font-medium">Artha</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अर्थ</td><td className="py-2 text-ink-light">Subtle meaning; the imperceptible semantic dimensions hidden within every mantra and ritual</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Sūkṣmāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation:</p>
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
          <p>The Kriyā Pāda of the Sūkṣmāgama is uniquely focused on <strong>subtle ritual action</strong> — practices that operate at the imperceptible level of mantra, breath, and intention. It teaches that the efficacy of ritual depends not on gross performance but on the subtle alignment of consciousness:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Temple Architecture (Ālaya-Nirmāṇa / आलय-निर्माण)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Sūkṣma-Vāstu:</strong> Microscopic analysis of temple proportions — the subtle ratios (aṇu-mātra) that determine spiritual resonance</li>
            <li><strong>Sound Architecture:</strong> Design of garbhagṛha dimensions to produce specific acoustic frequencies that activate subtle centers in the listener</li>
            <li><strong>Prāṇa-Channels:</strong> Alignment of temple corridors with subtle energy channels (nāḍīs) of the cosmic body</li>
            <li><strong>Atomic Proportions:</strong> Use of proportions based on the paramāṇu (ultimate atom) as the fundamental unit of sacred measurement</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Icon-Making & Installation (Mūrti-Pratiṣṭhā / मूर्ति-प्रतिष्ठा)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Sūkṣma-Mūrti:</strong> Icons designed to convey subtle philosophical truths through minute iconographic details invisible to casual observation</li>
            <li><strong>Micro-Nyāsa:</strong> Placement of mantras at atomic points within the icon — not merely on major limbs but at every subtle joint and energy node</li>
            <li><strong>Prāṇa-Pratiṣṭhā:</strong> The life-installation ritual performed with awareness of the subtle prāṇas (prāṇa, apāna, vyāna, udāna, samāna) entering the image</li>
            <li><strong>Netra-Unmīlana:</strong> The eye-opening as the moment when the subtle vision (sūkṣma-dṛṣṭi) of the deity awakens within the material form</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Subtle Ritual Worship (Sūkṣma-Pūjā / सूक्ष्म-पूजा)</h4>
          <p>The Sūkṣmāgama prescribes the <strong>Ṣoḍaśopacāra Pūjā</strong> with unique emphasis on the <strong>imperceptible dimension</strong> of each offering. The true worship is not the visible flower or lamp, but the subtle intention (saṃkalpa) and conscious presence (sāmarthya) behind it. The text teaches <strong>antaryāga</strong> (inner worship) as superior to bahiryāga (outer worship), though both are necessary for the integrated practitioner.</p>

          <Verse
            sanskrit="सूक्ष्मं सूक्ष्मतरं यस्मात् सूक्ष्मं कर्म सदा भवेत् ।
सूक्ष्मागमतमाश्रित्य सूक्ष्मं ज्ञानं प्रकाशते ॥"
            transliteration="Sūkṣmaṃ sūkṣmataraṃ yasmāt sūkṣmaṃ karma sadā bhavet | Sūkṣmāgamasamāśritya sūkṣmaṃ jñānaṃ prakāśate ||"
            meaning="More subtle than the subtle, from which subtle action ever arises. Taking refuge in the Sukshmagama, subtle knowledge illuminates."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>daily behavioral framework</strong> with emphasis on the subtle dimensions of ordinary actions. It teaches that every moment contains hidden spiritual significance visible only to the refined awareness:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Sūkṣma-Nitya-Krama)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Brāhma Muhūrta</strong> — Rising 96 minutes before sunrise; awareness of the subtle transition from sleep to waking as a microcosmic creation</li>
            <li><strong>Sūkṣma-Snāna</strong> — Ritual bathing with attention to the subtle purification of the five sheaths (pañca-kośa), not merely the physical body</li>
            <li><strong>Tri-sandhyā</strong> — Twilight prayers at the subtle junction-points (saṃdhi) between day and night, recognizing these as portals between worlds</li>
            <li><strong>Micro-Pūjā</strong> — Brief momentary offerings throughout the day — a subtle flower of attention offered to Shiva in the heart at every auspicious conjunction</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Sūkṣmāgama prescribes <strong>sūkṣma-vratas</strong> — vows of subtlety in which the practitioner undertakes to perceive the imperceptible divine presence in all things. Special observances focus on the <strong>amāvāsyā</strong> (new moon), when subtle influences are strongest, and the <strong>saṃkrānti</strong> (solar transits), marking subtle shifts in cosmic energy.</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>Detailed protocols for <strong>subtle purification</strong> — recognizing that ritual errors create disturbances primarily at the invisible level of mantra-śakti and prāṇa-flow. Expiation involves not merely external acts but the subtle realignment of inner intention.</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Sūkṣma-Āhāra (Subtle Diet)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Prāṇa-rich foods</strong> — Foods that maximize subtle life-force rather than merely gross nutrition</li>
            <li><strong>Sattvic subtlety</strong> — Preference for foods that leave minimal residue (vṛtti) in the subtle body</li>
            <li><strong>Mantra-charged nourishment</strong> — Every meal preceded by subtle offering (bhūta-yajña) and consumption as prasāda</li>
          </ul>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Sūkṣmāgama presents a sophisticated system of <strong>sūkṣma-yoga</strong> — the yoga of subtlety that operates at levels beneath ordinary perception:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and Their Subtle Dimensions</h4>
          <p>The Sūkṣmāgama provides a unique analysis of the <strong>36 Tattvas</strong>, revealing that each Tattva has a <strong>sūkṣma</strong> (subtle) and <strong>sthūla</strong> (gross) aspect. The yogi's path involves penetrating the gross appearance of each Tattva to reach its subtle core, and finally penetrating even the subtle to reach the <strong>parama-sūkṣma</strong> — Shiva-tattva itself. <em>(See detailed table in Section 4 below.)</em></p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Sūkṣma Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Non-violence interpreted at the subtle level: not creating negative thought-vibrations (vṛttis) that disturb others' subtle bodies</li>
            <li><strong>Niyama</strong> — Śauca as purity of the subtle body (liṅga-śarīra); Svādhyāya as study of the subtle meanings within Āgamic texts</li>
            <li><strong>Āsana</strong> — Postures held with awareness of the subtle prāṇic currents (nāḍīs) activated by each position</li>
            <li><strong>Prāṇāyāma</strong> — Subtle breath control: not merely counting inhalations but directing prāṇa through the most refined channels (vajra-nāḍī, citriṇā-nāḍī)</li>
            <li><strong>Pratyāhāra</strong> — Withdrawal from gross senses into the subtle senses (tanmātras), then from subtle senses into the mind-stuff (citta)</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the <strong>bindu</strong> — the infinitesimal point at the center of every chakra where all dimensions collapse into unity</li>
            <li><strong>Dhyāna</strong> — Meditation on Shiva as the <strong>parama-sūkṣma</strong> — subtler than the subtlest, yet containing all things</li>
            <li><strong>Samādhi</strong> — <strong>Sūkṣma-samādhi</strong>: absorption so refined that neither the practitioner nor the practice remains perceptible</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Kuṇḍalinī as Sūkṣma-Śakti</h4>
          <p>The Sūkṣmāgama describes the <strong>Kuṇḍalinī Śakti</strong> not as a gross serpent power but as <strong>sūkṣma-śakti</strong> — the most subtle vibration at the base of creation. When awakened, she does not merely rise through chakras but <strong>unfolds dimensions</strong> — each chakra is a universe of subtlety that opens like a lotus when the sūkṣma-śakti touches it. The ascent is measured not in spatial distance but in degrees of subtlety.</p>

          <Verse
            sanskrit="सूक्ष्मा शक्तिः सदा यस्मिन् मूलाधारे व्यवस्थिता ।
सूक्ष्मं बोधयते सर्वं सूक्ष्मं योगं प्रदर्शयेत् ॥"
            transliteration="Sūkṣmā śaktiḥ sadā yasmin mūlādhāre vyavasthitā | Sūkṣmaṃ bodhayate sarvaṃ sūkṣmaṃ yogaṃ pradarśayet ||"
            meaning="The subtle Shakti, ever established in the Muladhara, awakens all to subtlety and reveals the subtle yoga."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda represents the <strong>philosophical summit</strong> of the Sūkṣmāgama. It presents the core metaphysical framework through the unique lens of <strong>subtle ontology</strong> — the doctrine that reality consists of layers of increasing subtlety, with Shiva as the subtlest-of-all that paradoxically contains everything gross:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya) — Sūkṣma View</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Subtlest Lord</h5>
            <p className="text-ink-light text-sm">Shiva as <strong>Parama-sūkṣma</strong> — subtler than the subtlest. He is not merely the creator of the world but the <strong>subtle substratum</strong> in which the world appears like images in a mirror. His omnipresence is not spatial but <strong>dimensional</strong> — He is present in the atom because He is the subtle space between atoms. Unlike gross omnipresence (filling space), Shiva's subtle omnipresence <strong>constitutes</strong> space.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Atomic Soul</h5>
            <p className="text-ink-light text-sm">The individual soul (jīva) is described as <strong>aṇu</strong> — atomic. But this "atomic" nature is not physical smallness; it is <strong>subtle independence</strong>. The soul is a point of consciousness (cid-aṇu) that, though infinitesimal, contains the potential for infinite expansion through Shiva's grace. The Sūkṣmāgama's unique contribution is the doctrine that the soul's bondage is due to <strong>subtle identification</strong> — not with the gross body, but with the subtle body (liṅga-śarīra) that transmigrates from birth to birth.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Subtle Bond</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala (आणव मल)</strong> — The subtlest impurity: the feeling of "minuteness" itself. Not merely ignorance, but the <strong>subtle vibration of finitude</strong> that makes the infinite soul feel like an atom. It is removed only when the soul realizes that its atomicity is an illusion superimposed on its infinite Shiva-nature.</li>
              <li><strong>Māyā Mala (माया मल)</strong> — The subtle substance of limitation. Māyā is not illusion but <strong>real subtle matter</strong> (sūkṣma-pṛthivī) from which the 36 Tattvas are evolved in progressively grosser densities. The Sūkṣmāgama describes this evolution with unparalleled atomic precision.</li>
              <li><strong>Kārma Mala (कार्म मल)</strong> — The subtle residue of action. Karma is not merely moral accounting but <strong>subtle vibrations</strong> (vāsanās) stored in the liṅga-śarīra that determine the soul's next embodiment. The text provides detailed analysis of how each action creates subtle impressions (saṃskāras) that shape future experience.</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Sūkṣma-Sāyujya (सूक्ष्म-सायुज्य)</h4>
          <p>The ultimate goal described in the Sūkṣmāgama is <strong>Sūkṣma-sāyujya</strong> — union so subtle that it cannot be described as merger or separation. The liberated soul does not "become" Shiva (which would imply gross change), nor does it remain separate (which would imply gross duality). Rather, it <strong>realizes the subtle identity</strong> that was always present — like a wave realizing it is subtly water, or a ray realizing it is subtly sunlight. The soul retains its atomic uniqueness while knowing itself as the subtle expression of the infinite.</p>

          <Verse
            sanskrit="सूक्ष्मः पशुपतिः शम्भुः सूक्ष्मं मोचयते सदा ।
सूक्ष्मेण कर्मणा भक्त्या शिवसायुज्यमाप्नुयात् ॥"
            transliteration="Sūkṣmaḥ paśupatiḥ śambhuḥ sūkṣmaṃ mocayate sadā | Sūkṣmeṇa karmaṇā bhaktyā śivasāyujyamāpnuyāt ||"
            meaning="The subtle Lord, Pashupati Shambhu, ever liberates subtly. Through subtle action and devotion, one attains Shiva-Sayujya."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 3: CORE VERSES ===== */}
        <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
          <Verse
            sanskrit="सूक्ष्मं सूक्ष्मतरं यस्मात् सूक्ष्मं ज्ञानं प्रकाशते ।
सूक्ष्मागमपरो भक्तः सूक्ष्मं स्थानमवाप्नुयात् ॥"
            transliteration="Sūkṣmaṃ sūkṣmataraṃ yasmāt sūkṣmaṃ jñānaṃ prakāśate | Sūkṣmāgamaparo bhaktaḥ sūkṣmaṃ sthānamavāpnuyāt ||"
            meaning="More subtle than the subtle, from which subtle knowledge illuminates. The devotee devoted to the Sukshmagama attains the subtle abode."
          />

          <Verse
            sanskrit="कटिस्थं सूक्ष्ममाख्यातं सूक्ष्मज्ञानप्रदायकम् ।
सूक्ष्मं पशुं विमुञ्चन्ति ये पठन्ति सदा शिवाः ॥"
            transliteration="Kaṭisthaṃ sūkṣmamākhyātaṃ sūkṣmajñānapradāyakam | Sūkṣmaṃ paśuṃ vimuñcanti ye paṭhanti sadā śivāḥ ||"
            meaning="The Sukshma, proclaimed as established at the hip, grants subtle knowledge. Those who ever read it liberate the subtle Pashu — they are ever Shiva."
          />

          <Verse
            sanskrit="सूक्ष्मेण सूक्ष्मं गम्येत सूक्ष्मं ज्ञानं ततः शिवः ।
सूक्ष्मागमोक्तमार्गेण सूक्ष्मं मोक्षं लभेत सः ॥"
            transliteration="Sūkṣmeṇa sūkṣmaṃ gamyeta sūkṣmaṃ jñānaṃ tataḥ śivaḥ | Sūkṣmāgamoktamārgeṇa sūkṣmaṃ mokṣaṃ labheta saḥ ||"
            meaning="By the subtle, the subtle is reached; subtle knowledge, then Shiva. By the path taught in the Sukshmagama, one attains subtle liberation."
          />

          <Verse
            sanskrit="स्थूलं सूक्ष्मं ततः सूक्ष्मतरं तस्मात् परं पदम् ।
यो वेत्ति सूक्ष्मतत्त्वज्ञः स याति परमं पदम् ॥"
            transliteration="Sthūlaṃ sūkṣmaṃ tataḥ sūkṣmataraṃ tasmāt paraṃ padam | Yo vetti sūkṣmatattvajñaḥ sa yāti paramaṃ padam ||"
            meaning="Gross, then subtle, then subtler-than-subtle, then the supreme abode. He who knows this subtle truth reaches the supreme state."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 4: 36 TATTVAS ===== */}
        <Section id="tattvas" title="4. The 36 Tattvas According to Sūkṣmāgama" hindiTitle="४. सूक्ष्मागम के अनुसार ३६ तत्त्व">
          <p>The Sūkṣmāgama presents the most nuanced exposition of the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) — analyzing each Tattva through three lenses: <strong>sthūla</strong> (gross manifestation), <strong>sūkṣma</strong> (subtle essence), and <strong>para-sūkṣma</strong> (supreme subtlety beyond perception). These 36 Tattvas describe the entire spectrum of reality from pure consciousness (Shiva) to gross matter (Earth), with the Sūkṣmāgama's unique contribution being the revelation of the <strong>imperceptible threads</strong> connecting each level.</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Sūkṣmāgama</h4>
          <p>The Sūkṣmāgama occupies a distinctive position among the twenty-eight Shaiva Āgamas by <strong>revealing the invisible architecture of reality</strong>:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Subtle Metaphysics (Sūkṣma-tattva-jñāna)</strong> — Its Jñāna and Yoga Pādas provide the most sophisticated framework in Indian philosophy for understanding how the imperceptible becomes perceptible, and how the practitioner can reverse this process to return to the source.</li>
            <li><strong>Atomic Precision in Ritual</strong> — The Kriyā and Caryā Pādas establish that ritual efficacy depends on subtle factors invisible to ordinary perception: the precise phonemic vibration of mantras, the subtle timing of offerings, and the inner intention behind external gesture.</li>
          </ul>
          <p className="mt-3">This focus makes the Sūkṣmāgama particularly relevant for the advanced practitioner — it affirms that <strong>spiritual progress is measured not by gross achievements but by subtle refinement</strong>, and that <strong>the greatest miracles occur at the level of consciousness, not in the physical world</strong>.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses critical editions of most Agamas including Sukshmagama fragments. The Shaiva Agama publication series (ed. N.R. Bhatt, Jean Filliozat, S.P. Sabharathnam Sivacharyar).', url: 'https://www.ifpindia.org' },
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
सूक्ष्मागमं समाश्रित्य सूक्ष्मं ज्ञानं प्रकाशते ।
पशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Sūkṣmāgamaṃ samāśritya sūkṣmaṃ jñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Sukshmagama, subtle knowledge illuminates — for the purpose of liberation from the bonds of the Pashu, for the attainment of union with Shiva."
          />
        </Section>
        </div>
      </div>
  );
}