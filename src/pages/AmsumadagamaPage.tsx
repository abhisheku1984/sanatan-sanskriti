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

export default function AmsumadagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Aṃśumadāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">अंशुमदागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Ninth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु नवमः — सौर ज्ञान एवं किरण-योग का गहन अध्ययन</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="अंशुमदागम — Complete Page Audio Narration"
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
          <p>The <strong>Shaiva Siddhanta</strong> tradition represents one of the most systematic and philosophically rigorous schools of Hindu theology. At its foundation lie the <strong>twenty-eight primary Shaiva Āgamas</strong> (अष्टाविंशति शैवागम), revealed by the five faces of Lord Sadāshiva — each face emanating a distinct set of scriptures that together constitute the complete body of Shaiva knowledge[cite: 3].</p>

          <p>The <strong>Aṃśumadāgama</strong> (अंशुमदागम) occupies the <strong>ninth position</strong> among these twenty-eight Āgamas[cite: 3]. Its name derives from the Sanskrit <em>aṃśu</em> (अंशु) meaning "ray," "beam of light," or "sunbeam" — thus <strong>Aṃśumadāgama is "The Scripture of the Ray-Bearer"</strong> or "The Agama of Solar Illumination." This name encapsulates the Āgama's fundamental orientation toward <strong>divine light (prakāśa)</strong> as the primary metaphor for Shiva's consciousness — the rays (aṃśu) emanating from the solar orb of Sadāśiva, illuminating all worlds and awakening the sleeping soul[cite: 3].</p>

          <Verse
            sanskrit="शिवात् अंशुः, अंशोर् मत्, मताद् देवः ।\nएवं परम्परा-प्राप्तं अंशुमदागममनुत्तमम् ॥"
            transliteration="Śivāt Aṃśuḥ, Aṃśor Mat, Matād Devaḥ | Evaṃ paramparā-prāptaṃ Aṃśumadāgamam anuttamam ||"
            meaning="From Shiva to Amshu, from Amshu to Mat, and from Mat to Deva — thus was the supreme Amsumadagama received through the sacred lineage of transmission[cite: 3]."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Tatpuruṣa Face</h3>
          <p>The Aṃśumadāgama emanates from <strong>Tatpuruṣa</strong> (तत्पुरुष), the eastward-facing aspect of Sadāshiva[cite: 3]. Tatpuruṣa represents <strong>renunciation, asceticism, and the power of dissolution (saṃhāra)</strong> — the face through which Shiva withdraws the cosmos into Himself[cite: 3]. This face is associated with the element of <strong>Air (Vāyu)</strong>, the color <strong>yellow/gold</strong> (like sunlight), and the dissolving function within the Pañchabrahma system[cite: 3]. The solar symbolism of Aṃśumadāgama thus finds its perfect origin in the golden radiance of Tatpuruṣa[cite: 3].</p>

          <p>The original scope of the Aṃśumadāgama is traditionally stated as <strong>one lakh (1,00,000) shlokas</strong> — a vast encyclopedic corpus[cite: 3]. Like many Āgamas, the available recensions represent condensed versions transmitted through specific lineages, with the full text considered partially lost to the ravages of time[cite: 3].</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Jānu (Knees)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Aṃśumadāgama is assigned to the <strong>Jānu (जानु) — the knees</strong>[cite: 3]. This placement is profoundly significant[cite: 3]:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Humility and Surrender:</strong> The knees are the part of the body that bends in prostration — representing this Āgama's emphasis on <em>praṇāma</em> (obeisance) and the surrender of ego before the divine[cite: 3].</li>
            <li><strong>Support and Flexibility:</strong> Knees support the body's weight while allowing movement — symbolizing this Āgama's balance between firm doctrinal foundation and adaptive spiritual practice[cite: 3].</li>
            <li><strong>Transition Posture:</strong> Kneeling is the posture between standing and sitting, between action and rest — representing the Aṃśumadāgama's revelation of the transitional states of consciousness between waking and liberation[cite: 3].</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Ten Upāgamas (उपागम)</h3>
          <p>Each primary Āgama has subsidiary texts called Upāgamas that elaborate on specific aspects[cite: 3]. The Aṃśumadāgama's ten Upāgamas are[cite: 3]:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Aṃśu</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अंशु</td><td className="py-2 text-ink-light">The divine ray; analysis of how Shiva's consciousness radiates into manifestation[cite: 3]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Rashmi</td><td className="py-2 pr-3 font-devanagari text-ink-muted">रश्मि</td><td className="py-2 text-ink-light">The reins of light; control of prāṇa through solar energy channels[cite: 3]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Bhānu</td><td className="py-2 pr-3 font-devanagari text-ink-muted">भानु</td><td className="py-2 text-ink-light">The luminous one; Sūrya-oriented worship and Āditya-homa protocols[cite: 3]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Ravi</td><td className="py-2 pr-3 font-devanagari text-ink-muted">रवि</td><td className="py-2 text-ink-light">The sun deity; solar calendar rituals and saṃkrānti observances[cite: 3]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Mihira</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मिहिर</td><td className="py-2 text-ink-light">The friend; community worship and temple festival protocols[cite: 3]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Divākara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">दिवाकर</td><td className="py-2 text-ink-light">Day-maker; dawn rituals and the spiritual significance of sunrise[cite: 3]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">7</td><td className="py-2 pr-3 font-medium">Savitṛ</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सवितृ</td><td className="py-2 text-ink-light">The impeller; Gāyatrī-based practices and solar mantra-vidyā[cite: 3]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">8</td><td className="py-2 pr-3 font-medium">Sūrya</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सूर्य</td><td className="py-2 text-ink-light">The supreme light; advanced meditation on the solar Shiva-form[cite: 3]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">9</td><td className="py-2 pr-3 font-medium">Prabhākara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">प्रभाकर</td><td className="py-2 text-ink-light">Light-maker; illumination rituals and the dispelling of spiritual darkness[cite: 3]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">10</td><td className="py-2 pr-3 font-medium">Tejasvin</td><td className="py-2 pr-3 font-devanagari text-ink-muted">तेजस्विन्</td><td className="py-2 text-ink-light">The radiant one; tejas-oriented sādhana and aura purification[cite: 3]</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Aṃśumadāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation[cite: 3]:</p>
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
          <p>The Kriyā Pāda of the Aṃśumadāgama is distinguished by its emphasis on <strong>solar-lit ritual spaces</strong> and <strong>light-oriented worship</strong>[cite: 3]. It teaches that the efficacy of ritual is amplified when performed in alignment with solar cycles and oriented toward the east[cite: 3]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Temple Architecture (Ālaya-Nirmāṇa / आलय-निर्माण)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Sūrya-āyatana</strong> — East-facing temple orientation with the garbhagṛha positioned to receive the first rays of dawn[cite: 3]</li>
            <li><strong>Prakāśa-vinyāsa</strong> — Strategic placement of windows, skylights, and mirrors to channel natural sunlight into the sanctum[cite: 3]</li>
            <li><strong>Maṇḍala of Light</strong> — Floor designs using reflective materials (polished stone, mica, crystal) that multiply and distribute light[cite: 3]</li>
            <li><strong>Dīpa-stambha</strong> — Elaborate lamp pillars at temple entrances, symbolizing the descent of divine light into the world[cite: 3]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Icon-Making & Installation (Mūrti-Pratiṣṭhā / मूर्ति-प्रतिष्ठा)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Tejas-mūrti</strong> — Icons designed with polished, reflective surfaces that catch and radiate light[cite: 3]</li>
            <li><strong>Sūrya-nyāsa</strong> — Placement of solar mantras (Āditya-hṛdaya, Sāvitrī) at specific points on the icon[cite: 3]</li>
            <li><strong>Prabhā-maṇḍala</strong> — A halo of light behind the deity's head, often rendered in gold leaf or crystal[cite: 3]</li>
            <li><strong>Dawn Pratiṣṭhā</strong> — The life-installation ritual timed specifically for sunrise, when solar prāṇa is strongest[cite: 3]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Solar Ritual Worship (Sūrya-Pūjā / सूर्य-पूजा)</h4>
          <p>The Aṃśumadāgama prescribes the <strong>Ṣoḍaśopacāra Pūjā</strong> with unique emphasis on <strong>light as the primary offering</strong>[cite: 3]. The arati (waving of lamps) is not merely symbolic but is understood as the offering of the devotee's own inner light (ātma-prakāśa) to Shiva[cite: 3]. The text teaches that the true <strong>arghya</strong> (offering) is the light of consciousness itself[cite: 3].</p>

          <Verse
            sanskrit="दीपेन दीपं प्रज्वाल्य ज्योतिषा ज्योतिरर्पयेत् ।\nअंशुमदागममार्गेण तेजसा तेज आप्नुयात् ॥"
            transliteration="Dīpena dīpaṃ prajvālya jyotiṣā jyotirarpayet | Aṃśumadāgamamārgeṇa tejasā teja āpnuyāt ||"
            meaning="Kindling light with light, one should offer light with light. By the path of the Amsumadagama, through radiance one attains radiance[cite: 3]."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>daily behavioral framework</strong> with emphasis on solar discipline — aligning the practitioner's life with the rhythm of the sun[cite: 3]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Sūrya-Nitya-Krama)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Udaya-vandanā</strong> — Greeting the sunrise with Śiva-mantras; standing facing east with arms raised in praṇāma[cite: 3]</li>
            <li><strong>Sūrya-snāna</strong> — Ritual bathing at dawn; water charged with solar energy through exposure to first light[cite: 3]</li>
            <li><strong>Madhyāhna-pūjā</strong> — Noon worship when the sun is at zenith; representing Shiva's fullness and completeness[cite: 3]</li>
            <li><strong>Asta-vandanā</strong> — Evening salutation to the setting sun; gratitude for the day's illumination[cite: 3]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Aṃśumadāgama prescribes <strong>saura-vratas</strong> — solar vows including Sunday (Ravivāra) observances, Uttarāyaṇa and Dakṣiṇāyana celebrations, and the <strong>Ratha-saptamī</strong> festival honoring Sūrya's chariot[cite: 3]. The <strong>Makara-saṃkrānti</strong> is observed as the day when Shiva's light begins its northward journey[cite: 3].</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>Detailed protocols for <strong>light-based purification</strong> — ritual errors are expiated through increased offering of light (additional lamps, longer arati), fasting until sunset, and japa of Sūrya-mantras[cite: 3].</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Tejas-Āhāra (Radiant Diet)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Sattvic solar foods</strong> — Foods that absorb and retain sunlight: grains, fruits, honey, ghee[cite: 3]</li>
            <li><strong>Prāṇa-rich diet</strong> — Raw foods consumed at noon when solar energy is maximum[cite: 3]</li>
            <li><strong>Light fasting</strong> — Ekādaśī and other fasts observed from sunrise to sunset rather than lunar reckoning[cite: 3]</li>
          </ul>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Aṃśumadāgama presents a sophisticated system of <strong>prakāśa-yoga</strong> — the yoga of divine illumination[cite: 3]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and the Solar Metaphor</h4>
          <p>The Aṃśumadāgama provides a unique analysis of the <strong>36 Tattvas</strong>, interpreting each as a progressively densified form of Shiva's light[cite: 3]. From the pure radiance of Shiva-tattva to the reflected light of the gross elements, the entire cosmos is understood as a <strong>spectrum of illumination</strong>[cite: 3]. <em>(See detailed table in Section 4 below.)</em></p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Solar Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Ahimsā interpreted as not obstructing the light of consciousness in any being[cite: 3]</li>
            <li><strong>Niyama</strong> — Svādhyāya as study of the Āgama by dawn light; Tapas as voluntary exposure to sun and heat[cite: 3]</li>
            <li><strong>Āsana</strong> — Sūrya-namaskāra as both physical exercise and spiritual worship; Padmāsana facing east[cite: 3]</li>
            <li><strong>Prāṇāyāma</strong> — Sūrya-bhedana (right-nostril breathing) to activate solar prāṇa; Ujjāyī synchronized with sunrise[cite: 3]</li>
            <li><strong>Pratyāhāra</strong> — Withdrawing the senses into the inner light (antar-jyoti) at the ājñā chakra[cite: 3]</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the bindu of light at the center of each chakra[cite: 3]</li>
            <li><strong>Dhyāna</strong> — Meditation on Shiva as the <strong>prakāśa-mātra</strong> — pure consciousness as self-luminous awareness[cite: 3]</li>
            <li><strong>Samādhi</strong> — <strong>Prakāśa-samādhi</strong>: absorption in the light that needs no other light to be seen[cite: 3]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Kuṇḍalinī as Tejas-Śakti</h4>
          <p>The Aṃśumadāgama describes the <strong>Kuṇḍalinī Śakti</strong> as <strong>tejas-śakti</strong> — the fiery power of illumination[cite: 3]. When awakened, she rises like a flame through the chakras, burning away the darkness of ignorance (avidyā) at each level[cite: 3]. The ascent is described in terms of <strong>increasing luminosity</strong> rather than spatial movement[cite: 3].</p>

          <Verse
            sanskrit="अंशुः शिवस्य संसारे ज्योतिर्मयं विराजते ।\nतं दृष्ट्वा ज्ञानदीप्त्या स याति परमं पदम् ॥"
            transliteration="Aṃśuḥ śivasay saṃsāre jyotirmayaṃ virājate | Taṃ dṛṣṭvā jñānadīptyā sa yāti paramaṃ padam ||"
            meaning="The ray of Shiva shines luminously in the world. Seeing it with the light of knowledge, one reaches the supreme state[cite: 3]."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda represents the <strong>philosophical summit</strong> of the Aṃśumadāgama[cite: 3]. It presents the core metaphysical framework through the lens of <strong>prakāśa-vāda</strong> — the doctrine of self-luminous consciousness[cite: 3]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya) — Solar View</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Self-Luminous Lord</h5>
            <p className="text-ink-light text-sm">Shiva as <strong>Svayaṃ-prakāśa</strong> — self-illumined, needing no other light to be known[cite: 3]. He is not merely like the sun; He is the <strong>prakāśana-śakti</strong> — the power of illumination itself — of which the physical sun is but the grossest symbol[cite: 3]. His omniscience is not the knowledge of many things but the <strong>single light of awareness</strong> in which all things appear[cite: 3]. Unlike objects that are illuminated by something else, Shiva <strong>is</strong> illumination[cite: 3].</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Shadowed Soul</h5>
            <p className="text-ink-light text-sm">The individual soul (jīva) is <strong>prakāśa-maya</strong> — made of light — but appears darkened by the three malas[cite: 3]. The Aṃśumadāgama's unique contribution is the doctrine that the soul's bondage is like <strong>a mirror covered with dust</strong> — the reflecting capacity is never lost, only obscured[cite: 3]. The soul is not darkness but <strong>dimmed light</strong>, not ignorance but <strong>forgotten knowledge</strong>[cite: 3].</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Veil of Darkness</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala (आणव मल)</strong> — The subtlest darkness: the feeling of being separate from the light[cite: 3]. It is like standing with one's back to the sun — the light is present but unseen[cite: 3]. Removed only by turning around (grace/śaktipāta)[cite: 3].</li>
              <li><strong>Māyā Mala (माया मल)</strong> — The darkness of multiplicity[cite: 3]. Māyā makes the single light appear as many colors through the prism of the tattvas[cite: 3]. The Aṃśumadāgama describes this as <strong>chāyā-māyā</strong> — shadow-Maya, the play of light and darkness that creates the world of forms[cite: 3].</li>
              <li><strong>Kārma Mala (कार्म मल)</strong> — The darkness of accumulated action[cite: 3]. Karma is like <strong>smoke</strong> — the residue of past fires that obscures the clear light of the soul[cite: 3]. Each action leaves a subtle trace (vāsanā) that dims the inner radiance[cite: 3].</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Prakāśa-Sāyujya (प्रकाश-सायुज्य)</h4>
          <p>The ultimate goal described in the Aṃśumadāgama is <strong>Prakāśa-sāyujya</strong> — union with the divine light[cite: 3]. The liberated soul does not "become" Shiva (which would imply it was not light before), but rather <strong>recognizes its eternal identity as light</strong>[cite: 3]. Like a wave realizing it is water, or a ray realizing it is sunlight, the soul realizes it was never other than Shiva's self-luminous awareness[cite: 3]. The soul retains its individual ray-nature while knowing itself as inseparable from the solar orb of Shiva[cite: 3].</p>

          <Verse
            sanskrit="प्रकाशः पशुपतिः शम्भुः प्रकाशं मोचयते सदा ।\nप्रकाशेन कर्मणा भक्त्या शिवसायुज्यमाप्नुयात् ॥"
            transliteration="Prakāśaḥ paśupatiḥ śambhuḥ prakāśaṃ mocayate sadā | Prakāśena karmaṇā bhaktyā śivasāyujyamāpnuyāt ||"
            meaning="The luminous Lord, Pashupati Shambhu, ever liberates through light. Through luminous action and devotion, one attains Shiva-Sayujya[cite: 3]."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 3: CORE VERSES ===== */}
        <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
          <Verse
            sanskrit="अंशुमान् शिवरूपेण भाति विश्वं चराचरम् ।\nतं नमामि सदा भक्त्या यस्यांशुः सर्वतोमुखः ॥"
            transliteration="Aṃśumān śivarūpeṇa bhāti viśvaṃ carācaram | Taṃ namāmi sadā bhaktya yasyāṃśuḥ sarvatomukhaḥ ||"
            meaning="Shining in the form of Shiva, the ray illumines the moving and unmoving universe. I ever bow with devotion to Him whose rays face in all directions[cite: 3]."
          />

          <Verse
            sanskrit="ज्योतिषा ज्योतिराप्नोति प्रकाशेन प्रकाशते ।\nअंशुमदागमं शास्त्रं यः पठेत् स प्रकाशते ॥"
            transliteration="Jyotiṣā jyotirāpnoti prakāśena prakāśate | Aṃśumadāgamaṃ śāstraṃ yaḥ paṭhet sa prakāśate ||"
            meaning="By light one attains light, by illumination one is illuminated. He who studies the Amsumadagama scripture becomes luminous[cite: 3]."
          />

          <Verse
            sanskrit="तमसो मा ज्योतिर्गमय मृत्योर्मा अमृतं गमय ।\nअंशुमदागमोक्तेन मार्गेण शिवमाप्नुयात् ॥"
            transliteration="Tamaso mā jyotirgamaya mṛtyormā amṛtaṃ gamaya | Aṃśumadāgamoktena mārgeṇa śivamāpnuyāt ||"
            meaning="Lead me from darkness to light, from death to immortality. By the path taught in the Amsumadagama, one attains Shiva[cite: 3]."
          />

          <Verse
            sanskrit="एकं ज्योतिरनेकेषु दीपेषु दीप्यते यथा ।\nएवं शिवः प्रकाशेत जीवेषु जीवरूपधृक् ॥"
            transliteration="Ekaṃ jyotiranakeṣu dīpeṣu dīpyate yathā | Evaṃ śivaḥ prakāśeta jīveṣu jīvarūpadhṛk ||"
            meaning="As one light shines in many lamps, so Shiva shines in souls, assuming the form of the soul[cite: 3]."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 4: 36 TATTVAS ===== */}
        <Section id="tattvas" title="4. The 36 Tattvas According to Aṃśumadāgama" hindiTitle="४. अंशुमदागम के अनुसार ३६ तत्त्व">
          <p>The Aṃśumadāgama presents the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) — analyzing each Tattva as a specific <strong>modality of divine light</strong>[cite: 3]. From the pure, unmediated radiance of Shiva-tattva to the reflected, refracted light of the gross elements, the entire cosmos is understood as a <strong>luminous hierarchy</strong>[cite: 3]. The Aṃśumadāgama's unique contribution is the revelation that even the densest matter is nothing but <strong>extremely slowed-down light</strong> — Shiva's prakāśa appearing as solidity through the veiling power of Māyā[cite: 3].</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Aṃśumadāgama</h4>
          <p>The Aṃśumadāgama occupies a distinctive position among the twenty-eight Shaiva Āgamas by <strong>revealing the cosmos as light</strong>[cite: 3]:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Prakāśa-Metaphysics (Jyotir-vidyā)</strong> — Its Jñāna and Yoga Pādas provide the most luminous framework in Indian philosophy for understanding consciousness as self-illumined awareness, anticipating many insights of later Kashmiri Shaivism[cite: 3].</li>
            <li><strong>Solar Ritual Technology</strong> — The Kriyā and Caryā Pādas establish that ritual efficacy is maximized when aligned with natural light cycles, teaching that the temple is a <strong>machine for capturing and distributing divine radiance</strong>[cite: 3].</li>
          </ul>
          <p className="mt-3">This focus makes the Aṃśumadāgama particularly relevant for the modern era — it affirms that <strong>science and spirituality converge in the study of light</strong>, and that <strong>the ultimate nature of reality is illumination, not matter</strong>[cite: 3].</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses critical editions of most Agamas including Amsumadagama fragments.', url: 'https://www.ifpindia.org' },
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
            sanskrit="ॐ नमः शिवाय ।\nअंशुमदागमं समाश्रित्य प्रकाशज्ञानं प्रकाशते ।\nपशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Aṃśumadāgamaṃ samāśritya prakāśajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Amsumadagama, the knowledge of light illuminates — for the purpose of liberation from the bonds of the Pashu, for the attainment of union with Shiva[cite: 3]."
          />
        </Section>
      </div>
    </div>
  );
}