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

export default function SuprabhedagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Suprabhedāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">सुप्रभेदागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Tenth of the Twenty-Eight Primary Shaiva Āgamas[cite: 4]</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु दशमः — उत्तम प्रबोध एवं जागृति-योग का गहन अध्ययन[cite: 4]</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="सुप्रभेदागम — Complete Page Audio Narration"
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
          <p>The <strong>Shaiva Siddhanta</strong> tradition represents one of the most systematic and philosophically rigorous schools of Hindu theology[cite: 4]. At its foundation lie the <strong>twenty-eight primary Shaiva Āgamas</strong> (अष्टाविंशति शैवागम), revealed by the five faces of Lord Sadāshiva[cite: 4].</p>

          <p>The <strong>Suprabhedāgama</strong> (सुप्रभेदागम) occupies the <strong>tenth position</strong> among these twenty-eight Āgamas[cite: 4]. Its name derives from <em>su-prabheda</em> (सु-प्रभेद) meaning "well-awakened," "thoroughly illumined," or "that which breaks through (bheda) perfectly" — thus <strong>Suprabhedāgama is "The Scripture of Perfect Awakening"</strong> or "The Agama of Complete Illumination"[cite: 4]. This name encapsulates the Āgama's fundamental orientation toward <strong>spiritual awakening (prabodha)</strong> as the primary goal — not merely intellectual understanding but a total transformation of consciousness from the sleep of ignorance to the wakefulness of Shiva-realization[cite: 4].</p>

          <Verse
            sanskrit="शिवात् प्रबोधः, प्रबोधाद् भेदः, भेदाद् वेदः ।\nएवं परम्परा-प्राप्तं सुप्रभेदागममनुत्तमम् ॥"
            transliteration="Śivāt Prabodhaḥ, Prabodhād Bhedaḥ, Bhedād Vedaḥ | Evaṃ paramparā-prāptaṃ Suprabhedāgamam anuttamam ||"
            meaning="From Shiva to Prabodha, from Prabodha to Bheda, and from Bheda to Veda — thus was the supreme Suprabhedagama received through the sacred lineage[cite: 4]."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Tatpuruṣa Face</h3>
          <p>The Suprabhedāgama emanates from <strong>Tatpuruṣa</strong> (तत्पुरुष), the eastward-facing aspect of Sadāshiva[cite: 4]. Tatpuruṣa represents <strong>renunciation, asceticism, and the power of dissolution (saṃhāra)</strong> — the face through which Shiva withdraws the cosmos into Himself[cite: 4]. This face is associated with the element of <strong>Air (Vāyu)</strong>, the color <strong>yellow/gold</strong>, and the dissolving function within the Pañchabrahma system[cite: 4].</p>

          <p>The original scope of the Suprabhedāgama is traditionally stated as <strong>one lakh (1,00,000) shlokas</strong> — a vast encyclopedic corpus[cite: 4]. Like many Āgamas, the available recensions represent condensed versions transmitted through specific lineages[cite: 4].</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Jaṅghā (Shanks)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Suprabhedāgama is assigned to the <strong>Jaṅghā (जङ्घा) — the shanks or lower legs</strong>[cite: 4]. This placement is profoundly significant[cite: 4]:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Movement and Progress:</strong> The shanks power walking — representing this Āgama's emphasis on <em>active spiritual progress</em> and the dynamic nature of awakening[cite: 4].</li>
            <li><strong>Stability in Motion:</strong> Strong shanks provide stable locomotion — symbolizing this Āgama's balance between meditative stillness and active service[cite: 4].</li>
            <li><strong>Grounding Energy:</strong> The shanks channel earth-energy upward — representing the Suprabhedāgama's revelation of how worldly experience becomes fuel for spiritual awakening[cite: 4].</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Six Upāgamas (उपागम)</h3>
          <p>Each primary Āgama has subsidiary texts called Upāgamas[cite: 4]. The Suprabhedāgama's six Upāgamas are[cite: 4]:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Suprabodha</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सुप्रबोध</td><td className="py-2 text-ink-light">Perfect awakening; advanced techniques for shattering the sleep of ignorance[cite: 4]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Bhedana</td><td className="py-2 pr-3 font-devanagari text-ink-muted">भेदन</td><td className="py-2 text-ink-light">Penetration; breaking through the veils (kośas) that cover the soul[cite: 4]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Jāgaraṇa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">जागरण</td><td className="py-2 text-ink-light">Vigil; practices for maintaining continuous awareness day and night[cite: 4]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Unmīlana</td><td className="py-2 pr-3 font-devanagari text-ink-muted">उन्मीलन</td><td className="py-2 text-ink-light">Opening of the eyes; protocols for the "eye-opening" of inner vision[cite: 4]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Prabodhana</td><td className="py-2 pr-3 font-devanagari text-ink-muted">प्रबोधन</td><td className="py-2 text-ink-light">Awakening others; methods for transmitting spiritual wakefulness to disciples[cite: 4]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Vibodha</td><td className="py-2 pr-3 font-devanagari text-ink-muted">विबोध</td><td className="py-2 text-ink-light">Discriminative knowledge; viveka-khyāti and the discernment of real from unreal[cite: 4]</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Suprabhedāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation[cite: 4]:</p>
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
          <p>The Kriyā Pāda of the Suprabhedāgama is distinguished by its emphasis on <strong>awakening-oriented rituals</strong> — practices designed to shock the practitioner out of complacency and into alert presence[cite: 4]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Temple Architecture (Ālaya-Nirmāṇa / आलय-निर्माण)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Jāgaraṇa-ālaya</strong> — Temples designed to prevent sleepiness: high ceilings, bright illumination, and acoustic resonance[cite: 4]</li>
            <li><strong>Bodhi-maṇḍapa</strong> — Special halls for all-night vigils (jāgaraṇa) with raised platforms and cooling ventilation[cite: 4]</li>
            <li><strong>Prabodha-toraṇa</strong> — Gateways positioned to catch the first dawn light, symbolizing the awakening from ignorance[cite: 4]</li>
            <li><strong>Unmīlana-garbhagṛha</strong> — Sanctum with eastern skylights designed for the "eye-opening" (netra-unmīlana) ceremony[cite: 4]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Icon-Making & Installation (Mūrti-Pratiṣṭhā / मूर्ति-प्रतिष्ठा)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Bodha-mūrti</strong> — Icons with wide-open eyes and alert posture, conveying wakefulness rather than serene repose[cite: 4]</li>
            <li><strong>Unmīlana-nyāsa</strong> — Special emphasis on the eye-opening ritual as the moment of divine awakening within the form[cite: 4]</li>
            <li><strong>Prabodha-dṛṣṭi</strong> — The deity's gaze directed slightly downward to meet the devotee's eyes — the "awakened glance"[cite: 4]</li>
            <li><strong>Dynamic icons</strong> — Preference for standing or dancing forms of Shiva over seated meditation forms[cite: 4]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Vigil Rituals (Jāgaraṇa-Pūjā / जागरण-पूजा)</h4>
          <p>The Suprabhedāgama prescribes the <strong>Ṣoḍaśopacāra Pūjā</strong> with unique emphasis on <strong>keeping the practitioner awake and alert</strong>[cite: 4]. The arati is performed with rapid, vigorous movements; bells are rung loudly; and the pace of worship is brisk rather than slow[cite: 4]. The text teaches that <strong>drowsiness in worship is the greatest obstacle</strong> — it is the subtle form of tāmasika ignorance[cite: 4].</p>

          <Verse
            sanskrit="सुप्रबुद्धः सदा योगी निद्रामोहविवर्जितः ।\nसुप्रभेदागमोक्तेन मार्गेण शिवमाप्नुयात् ॥"
            transliteration="Suprabuddhaḥ sadā yogī nidrāmohavivarjitaḥ | Suprabhedāgamoktena mārgeṇa śivamāpnuyāt ||"
            meaning="The well-awakened yogi is ever free from the delusion of sleep. By the path taught in the Suprabhedagama, one attains Shiva[cite: 4]."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>daily behavioral framework</strong> with emphasis on continuous wakefulness — transforming every moment into an opportunity for spiritual alertness[cite: 4]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Prabodha-Nitya-Krama)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Ati-śīghra-utthāna</strong> — Rising immediately upon waking, without lingering in bed; the first thought must be of Shiva[cite: 4]</li>
            <li><strong>Śīghra-snāna</strong> — Quick, invigorating baths with cold water to dispel residual sleepiness[cite: 4]</li>
            <li><strong>Jāgaraṇa-sandhyā</strong> — Vigorous twilight prayers performed while standing, never seated[cite: 4]</li>
            <li><strong>Śayana-jāgaraṇa</strong> — The practice of "sleeping wakefully" — lying in śava-āsana with awareness fixed on the ājñā chakra[cite: 4]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Suprabhedāgama prescribes <strong>jāgaraṇa-vratas</strong> — vigil vows including Śivarātri (the supreme night of wakefulness), monthly pradoṣa all-night vigils, and the <strong>Bodhi-pañcamī</strong> festival celebrating the awakening of spiritual knowledge[cite: 4].</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>Detailed protocols for <strong>awakening-based expiation</strong> — ritual errors caused by inattention or drowsiness are corrected through additional vigil nights, fasts from sleep, and japa of awakening-mantras (prabodha-bīja)[cite: 4].</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Bodha-Āhāra (Awakening Diet)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Rajas-promoting foods</strong> — Moderate use of spices and stimulants to maintain alertness during long rituals[cite: 4]</li>
            <li><strong>Light evening meals</strong> — Avoiding heavy foods that induce tāmasika sleepiness[cite: 4]</li>
            <li><strong>Brahma-muhūrta fasting</strong> — No food during the pre-dawn hours when spiritual wakefulness is strongest[cite: 4]</li>
          </ul>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Suprabhedāgama presents a sophisticated system of <strong>bodha-yoga</strong> — the yoga of awakening[cite: 4]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and the Awakening Metaphor</h4>
          <p>The Suprabhedāgama provides a unique analysis of the <strong>36 Tattvas</strong>, interpreting the soul's journey through the tattvas as a <strong>progressive awakening from deeper and deeper levels of sleep</strong>[cite: 4]. From the deep sleep of Pṛthvī-tattva to the waking state of Shiva-tattva, the entire cosmos is understood as a <strong>spectrum of consciousness</strong>[cite: 4]. <em>(See detailed table in Section 4 below.)</em></p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Awakening Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Satya interpreted as never lying to oneself about one's spiritual state; maintaining rigorous self-honesty[cite: 4]</li>
            <li><strong>Niyama</strong> — Tapas as voluntary sleep deprivation to force the emergence of deeper awareness[cite: 4]</li>
            <li><strong>Āsana</strong> — Dynamic postures (standing, walking meditation) preferred over reclining; śava-āsana practiced with full awareness[cite: 4]</li>
            <li><strong>Prāṇāyāma</strong> — Kapālabhāti and Bhastrikā to oxygenate the brain and dispel mental fog[cite: 4]</li>
            <li><strong>Pratyāhāra</strong> — Not withdrawal from senses but <strong>awakened engagement</strong> — perceiving the divine in every sensory input[cite: 4]</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the moment of waking — catching the transition from sleep to waking as a model for spiritual awakening[cite: 4]</li>
            <li><strong>Dhyāna</strong> — Meditation on Shiva as the <strong>prabodha-mūrti</strong> — the ever-awakened one who never sleeps[cite: 4]</li>
            <li><strong>Samādhi</strong> — <strong>Bodha-samādhi</strong>: absorption in the state of pure wakefulness beyond waking, dreaming, and sleeping[cite: 4]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Kuṇḍalinī as Bodha-Śakti</h4>
          <p>The Suprabhedāgama describes the <strong>Kuṇḍalinī Śakti</strong> as <strong>bodha-śakti</strong> — the power of awakening[cite: 4]. When aroused, she does not merely rise through the chakras but <strong>awakens each chakra from its dormant state</strong>[cite: 4]. The Mūlādhāra is asleep; the Svādhiṣṭhāna is dreaming; the Maṇipūra is waking; and so on until the Sahasrāra, which is the state of <strong>turīya</strong> — pure awakened awareness beyond all states[cite: 4].</p>

          <Verse
            sanskrit="बोधशक्तिः सदा यस्मिन् मूलाधारे प्रसुप्तिका ।\nजागृत्या जागृतिं याति सहस्रारे शिवं व्रजेत् ॥"
            transliteration="Bodhaśaktiḥ sadā yasmin mūlādhāre prasuptikā | Jāgṛtyā jāgṛtiṃ yāti sahasrāre śivaṃ vrajet ||"
            meaning="The power of awakening, ever sleeping in the Muladhara, rises to wakefulness through vigilance and reaches Shiva at the Sahasrara[cite: 4]."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda represents the <strong>philosophical summit</strong> of the Suprabhedāgama[cite: 4]. It presents the core metaphysical framework through the lens of <strong>prabodha-vāda</strong> — the doctrine of awakening[cite: 4]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya) — Awakening View</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Ever-Awakened Lord</h5>
            <p className="text-ink-light text-sm">Shiva as <strong>Sada-bodha</strong> — ever-awakened, never subject to the three states (waking, dreaming, sleeping) that bind the soul[cite: 4]. He is not merely conscious; He is <strong>consciousness-as-such</strong> — the pure awareness in which the three states appear and disappear[cite: 4]. The Suprabhedāgama's unique contribution is the revelation that Shiva's "wakefulness" is not the opposite of sleep but <strong>transcends both sleep and waking</strong> — it is the fourth state (turīya) that underlies all three[cite: 4].</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Sleeping Soul</h5>
            <p className="text-ink-light text-sm">The individual soul (jīva) is <strong>prabodha-rahita</strong> — devoid of awakening[cite: 4]. It is not unconscious but <strong>mis-conscious</strong> — it mistakes the dream of saṃsāra for reality and sleeps through the truth of Shiva[cite: 4]. The Suprabhedāgama describes the soul's condition as <strong>svapna-darśana</strong> — dream-seeing: it sees the world as real just as a dreamer sees the dream as real until waking[cite: 4].</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Sleep</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala (आणव मल)</strong> — The sleep of finitude: the soul dreams it is small, limited, and separate[cite: 4]. It is the primordial lullaby that makes the infinite soul feel like an individual[cite: 4]. Removed only by the <strong>alarm-clock of grace</strong> (śaktipāta)[cite: 4].</li>
              <li><strong>Māyā Mala (माया मल)</strong> — The sleep of multiplicity: Māyā is the dream-substance from which the 36 Tattvas are projected[cite: 4]. The Suprabhedāgama describes this as <strong>svapna-māyā</strong> — dream-Maya, the power that makes the one appear as many[cite: 4].</li>
              <li><strong>Kārma Mala (कार्म मल)</strong> — The sleep of habit: Karma is the <strong>groove of repetition</strong> — the soul keeps reincarnating because it is sleepwalking through the same patterns[cite: 4]. Each action reinforces the dream; only deliberate awakening breaks the cycle[cite: 4].</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Bodha-Sāyujya (बोध-सायुज्य)</h4>
          <p>The ultimate goal described in the Suprabhedāgama is <strong>Bodha-sāyujya</strong> — union through awakening[cite: 4]. The liberated soul does not "fall asleep" into Shiva (merger) but rather <strong>wakes up as Shiva</strong>[cite: 4]. It realizes that it was never other than the ever-awakened awareness — it merely dreamed it was something else[cite: 4]. The soul retains its individual dream-narrative while knowing it is the dreamer, not the dream[cite: 4].</p>

          <Verse
            sanskrit="सुप्रबुद्धः पशुपतिः शम्भुः सुप्रबोधं विमुञ्चति ।\nबोधेन कर्मणा भक्त्या शिवसायुज्यमाप्नुयात् ॥"
            transliteration="Suprabuddhaḥ paśupatiḥ śambhuḥ suprabodhaṃ vimuñcati | Bodhena karmaṇā bhaktyā śivasāyujyamāpnuyāt ||"
            meaning="The well-awakened Lord, Pashupati Shambhu, liberates through perfect awakening. Through awakened action and devotion, one attains Shiva-Sayujya[cite: 4]."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 3: CORE VERSES ===== */}
        <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
          <Verse
            sanskrit="सुप्रभेदः सुबोधः स्यात् सुप्रबुद्धः सदा शिवः ।\nतं प्रबोधयते भक्तान् सुप्रभेदागमोत्तमः ॥"
            transliteration="Suprabhedaḥ subodhaḥ syāt suprabuddhaḥ sadā śivaḥ | Taṃ prabodhayate bhaktān suprabhedāgamottamaḥ ||"
            meaning="Suprabheda is perfect awakening; Shiva is ever well-awakened. The supreme Suprabhedagama awakens devotees to Him[cite: 4]."
          />

          <Verse
            sanskrit="निद्राया मोहनं कृत्वा जागृतिं प्राप्नुयात् सदा ।\nसुप्रभेदागमं शास्त्रं यः पठेत् स जागृतिं व्रजेत् ॥"
            transliteration="Nidrāyā mohanaṃ kṛtvā jāgṛtiṃ prāpnuyāt sadā | Suprabhedāgamaṃ śāstraṃ yaḥ paṭhet sa jāgṛtiṃ vrajet ||"
            meaning="Having dispelled the delusion of sleep, one ever attains wakefulness. He who studies the Suprabhedagama scripture enters into wakefulness[cite: 4]."
          />

          <Verse
            sanskrit="जाग्रत्स्वप्नसुषुप्तेषु तुरीयं यः सदा स्मरेत् ।\nसुप्रभेदागमोक्तेन मार्गेण शिवमाप्नुयात् ॥"
            transliteration="Jāgratsvapnasuṣupteṣu turīyaṃ yaḥ sadā smaret | Suprabhedāgamoktena mārgeṇa śivamāpnuyāt ||"
            meaning="He who ever remembers the fourth state in waking, dream, and deep sleep — by the path taught in the Suprabhedagama, attains Shiva[cite: 4]."
          />

          <Verse
            sanskrit="बोध एव हि मुक्तिः स्याद् बोध एव परं पदम् ।\nबोधेन बोधमाप्नोति सुप्रभेदागमोदितः ॥"
            transliteration="Bodha eva hi muktiḥ syād bodha eva paraṃ padam | Bodhena bodhamāpnoti suprabhedāgamoditaḥ ||"
            meaning="Awakening alone is liberation; awakening alone is the supreme state. Through awakening one attains awakening — thus declares the Suprabhedagama[cite: 4]."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 4: 36 TATTVAS ===== */}
        <Section id="tattvas" title="4. The 36 Tattvas According to Suprabhedāgama" hindiTitle="४. सुप्रभेदागम के अनुसार ३६ तत्त्व">
          <p>The Suprabhedāgama presents the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) — analyzing each Tattva as a specific <strong>state of consciousness</strong> or <strong>level of awakening</strong>[cite: 4]. From the deep sleep of the gross elements to the ever-wakeful awareness of Shiva-tattva, the entire cosmos is understood as a <strong>hierarchy of wakefulness</strong>[cite: 4]. The Suprabhedāgama's unique contribution is the revelation that spiritual progress is measured not by what one knows but by <strong>how awake one is</strong>[cite: 4].</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Suprabhedāgama</h4>
          <p>The Suprabhedāgama occupies a distinctive position among the twenty-eight Shaiva Āgamas by <strong>revealing spirituality as wakefulness</strong>[cite: 4]:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Prabodha-Metaphysics (Bodha-vidyā)</strong> — Its Jñāna and Yoga Pādas provide the most rigorous framework in Indian philosophy for understanding liberation as awakening rather than merger or acquisition[cite: 4].</li>
            <li><strong>Vigilant Ritual Technology</strong> — The Kriyā and Caryā Pādas establish that ritual must be performed with alert presence; mechanical repetition without awareness is worse than no ritual at all[cite: 4].</li>
          </ul>
          <p className="mt-3">This focus makes the Suprabhedāgama particularly relevant for the modern era — it affirms that <strong>mindfulness is not a modern invention but an ancient Agamic science</strong>, and that <strong>the distracted, half-aware life is the true bondage</strong>[cite: 4].</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses critical editions including Suprabhedagama fragments.', url: 'https://www.ifpindia.org' },
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
            sanskrit="ॐ नमः शिवाय ।\nसुप्रभेदागमं समाश्रित्य सुबोधज्ञानं प्रकाशते ।\nपशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Suprabhedāgamaṃ samāśritya subodhajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Suprabhedagama, the knowledge of perfect awakening illuminates — for liberation from the bonds of the Pashu, for the attainment of union with Shiva[cite: 4]."
          />
        </Section>
      </div>
    </div>
  );
}