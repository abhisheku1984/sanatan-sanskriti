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

export default function VijayagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Vijayāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">विजयागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Eleventh of the Twenty-Eight Primary Shaiva Āgamas[cite: 5]</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु एकादशः — आध्यात्मिक विजय एवं विजय-योग का गहन अध्ययन[cite: 5]</p>
        </motion.div>

        {/* Audio for full intro */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="विजयागम — Complete Page Audio Narration"
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
          <p>The <strong>Shaiva Siddhanta</strong> tradition represents one of the most systematic and philosophically rigorous schools of Hindu theology[cite: 5]. At its foundation lie the <strong>twenty-eight primary Shaiva Āgamas</strong> (अष्टाविंशति शैवागम), revealed by the five faces of Lord Sadāshiva[cite: 5].</p>

          <p>The <strong>Vijayāgama</strong> (विजयागम) occupies the <strong>eleventh position</strong> among these twenty-eight Āgamas[cite: 5]. Its name derives from <em>vijaya</em> (विजय) meaning "victory," "conquest," or "triumph" — thus <strong>Vijayāgama is "The Scripture of Victory"</strong> or "The Agama of Spiritual Conquest"[cite: 5]. This name encapsulates the Āgama's fundamental orientation toward <strong>active triumph over the forces of bondage</strong> — not passive waiting for grace but vigorous spiritual warfare against ignorance, desire, and fear[cite: 5].</p>

          <Verse
            sanskrit="शिवात् विजयः, विजयाद् जयः, जयाद् वैभवः ।\nएवं परम्परा-प्राप्तं विजयागममनुत्तमम् ॥"
            transliteration="Śivāt Vijayaḥ, Vijayād Jayaḥ, Jayād Vaibhavaḥ | Evaṃ paramparā-prāptaṃ Vijayāgamam anuttamam ||"
            meaning="From Shiva to Vijaya, from Vijaya to Jaya, and from Jaya to Vaibhava — thus was the supreme Vijayagama received through the sacred lineage[cite: 5]."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Tatpuruṣa Face</h3>
          <p>The Vijayāgama emanates from <strong>Tatpuruṣa</strong> (तत्पुरुष), the eastward-facing aspect of Sadāshiva[cite: 5]. Tatpuruṣa represents <strong>renunciation, asceticism, and the power of dissolution (saṃhāra)</strong> — the face through which Shiva withdraws the cosmos into Himself[cite: 5]. This face is associated with the element of <strong>Air (Vāyu)</strong>, the color <strong>yellow/gold</strong>, and the dissolving function within the Pañchabrahma system[cite: 5].</p>

          <p>The original scope of the Vijayāgama is traditionally stated as <strong>one lakh (1,00,000) shlokas</strong> — a vast encyclopedic corpus[cite: 5]. Like many Āgamas, the available recensions represent condensed versions transmitted through specific lineages[cite: 5].</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Ūru (Thighs)</h3>
          <p>In the esoteric mapping of the twenty-eight Āgamas onto the <strong>cosmic body of Sadāshiva</strong> (Āgama-Puruṣa), the Vijayāgama is assigned to the <strong>Ūru (ऊरु) — the thighs</strong>[cite: 5]. This placement is profoundly significant[cite: 5]:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Power and Strength:</strong> The thighs are the body's strongest muscles — representing this Āgama's emphasis on <em>vīrya</em> (vigor) and the power to overcome obstacles[cite: 5].</li>
            <li><strong>Warrior Posture:</strong> The thighs support the warrior's stance — symbolizing this Āgama's revelation of the soul as a spiritual warrior (dharmayoddha) battling the forces of darkness[cite: 5].</li>
            <li><strong>Generative Power:</strong> The thighs channel the vital energy that sustains all action — representing the Vijayāgama's teaching that victory requires harnessing the full power of life-force[cite: 5].</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Six Upāgamas (उपागम)</h3>
          <p>Each primary Āgama has subsidiary texts called Upāgamas[cite: 5]. The Vijayāgama's six Upāgamas are[cite: 5]:</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Vijaya</td><td className="py-2 pr-3 font-devanagari text-ink-muted">विजय</td><td className="py-2 text-ink-light">Victory over external obstacles; conquering hostile forces and adverse circumstances[cite: 5]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Jaya</td><td className="py-2 pr-3 font-devanagari text-ink-muted">जय</td><td className="py-2 text-ink-light">Victory over internal enemies; conquering the six passions (ṣaḍripu)[cite: 5]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Vaijayanta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">वैजयन्त</td><td className="py-2 text-ink-light">The banner of victory; symbols, flags, and insignia of spiritual triumph[cite: 5]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Jayanta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">जयन्त</td><td className="py-2 text-ink-light">The victorious one; siddhi-obtainment and the powers that confirm victory[cite: 5]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Aparājita</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अपराजित</td><td className="py-2 text-ink-light">The unconquerable; invincibility through total surrender to Shiva[cite: 5]</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Vairiṇī</td><td className="py-2 pr-3 font-devanagari text-ink-muted">वैरिणी</td><td className="py-2 text-ink-light">The enemy-force; detailed analysis of obstacles and their destruction[cite: 5]</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 2: CHATUSHPADA ===== */}
        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>Like all primary Shaiva Āgamas, the Vijayāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation[cite: 5]:</p>
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
          <p>The Kriyā Pāda of the Vijayāgama is distinguished by its emphasis on <strong>victory-oriented rituals</strong> — practices designed to empower the practitioner to conquer all obstacles on the spiritual path[cite: 5]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Temple Architecture (Ālaya-Nirmāṇa / आलय-निर्माण)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vijaya-ālaya</strong> — Fortress-like temples with high walls and imposing gateways, symbolizing the impregnable nature of Shiva's abode[cite: 5]</li>
            <li><strong>Jayastambha</strong> — Victory pillars (dvāja-stambha) at temple entrances, often carved with scenes of Shiva's triumph over demons[cite: 5]</li>
            <li><strong>Aparājita-maṇḍapa</strong> — Unconquerable assembly halls with thick columns and elevated platforms for ritual combat symbolism[cite: 5]</li>
            <li><strong>Śūla-vinyāsa</strong> — Strategic placement of tridents (trīśūla) as protective weapons around the temple perimeter[cite: 5]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Icon-Making & Installation (Mūrti-Pratiṣṭhā / मूर्ति-प्रतिष्ठा)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vijaya-mūrti</strong> — Icons depicting Shiva in triumphant postures: Tripurāntaka (destroyer of three cities), Kālāntaka (conqueror of death), Andhakāsura-sūdana (slayer of the demon Andhaka)[cite: 5]</li>
            <li><strong>Jayāstra-nyāsa</strong> — Placement of weapon-mantras (trīśūla, cakra, gadā) at specific points on the icon for protection[cite: 5]</li>
            <li><strong>Vaijayanta-cūḍā</strong> — The crown of victory adorning the deity, often depicted with elaborate jeweled peaks[cite: 5]</li>
            <li><strong>Dynamic installation</strong> — Pratiṣṭhā rituals performed with martial vigor, including the symbolic "conquest" of the installation site[cite: 5]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Victorious Ritual Worship (Vijaya-Pūjā / विजय-पूजा)</h4>
          <p>The Vijayāgama prescribes the <strong>Ṣoḍaśopacāra Pūjā</strong> with unique emphasis on <strong>strength and triumph</strong>[cite: 5]. The worshipper is instructed to approach the deity not as a supplicant but as a <strong>warrior approaching the commander before battle</strong>[cite: 5]. The offerings include symbols of victory: red flowers (blood of conquered demons), turmeric (auspicious triumph), and bells (proclamation of conquest)[cite: 5].</p>

          <Verse
            sanskrit="विजयी शिवरूपेण संसारं जयते सदा ।\nविजयागममार्गेण विजयी शिवमाप्नुयात् ॥"
            transliteration="Vijayī śivarūpeṇa saṃsāraṃ jayate sadā | Vijayāgamamārgeṇa vijayī śivamāpnuyāt ||"
            meaning="The victorious one, in the form of Shiva, ever conquers the world. By the path of the Vijayagama, the victorious one attains Shiva[cite: 5]."
          />
        </Section>

        {/* CHARYA PADA */}
        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes the <strong>daily behavioral framework</strong> with emphasis on victorious discipline — transforming every moment into an act of spiritual conquest[cite: 5]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Vijaya-Nitya-Krama)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vijaya-utthāna</strong> — Rising with the determination of a warrior; the first act is to "conquer" the bed by leaving it decisively[cite: 5]</li>
            <li><strong>Vīra-snāna</strong> — Heroic bathing with cold water to conquer bodily comfort and tāmasika lethargy[cite: 5]</li>
            <li><strong>Jayābhiṣeka</strong> — Self-anointing with sacred ash while reciting victory-mantras, transforming the body into armor[cite: 5]</li>
            <li><strong>Śatru-mardana</strong> — Symbolic "destruction of enemies" through breath control and visualization at twilight[cite: 5]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>The Vijayāgama prescribes <strong>vijaya-vratas</strong> — victory vows including the observance of Vijaya-daśamī (celebrating the triumph of good over evil), Śivarātri as the night of conquering death, and monthly <strong>vīra-vrata</strong> days dedicated to cultivating heroic virtues[cite: 5].</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Prāyaścitta (Expiatory Rites)</h4>
          <p>Detailed protocols for <strong>victory-oriented expiation</strong> — ritual errors are corrected through acts of increased vigor: additional rounds of japa, longer periods of standing worship, and fasting as a conquest over appetite[cite: 5].</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vīra-Āhāra (Heroic Diet)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Strength-building foods</strong> — Proteins, grains, and ghee to maintain the physical vigor necessary for intense practice[cite: 5]</li>
            <li><strong>Conquest over taste</strong> — Deliberately eating simple, unseasoned food to conquer the tongue's demands[cite: 5]</li>
            <li><strong>Moderate fasting</strong> — Weekly fasts as training in conquering hunger, the most insistent bodily demand[cite: 5]</li>
          </ul>
        </Section>

        {/* YOGA PADA */}
        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda of the Vijayāgama presents a sophisticated system of <strong>vijaya-yoga</strong> — the yoga of victory[cite: 5]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The 36 Tattvas and the Battle Metaphor</h4>
          <p>The Vijayāgama provides a unique analysis of the <strong>36 Tattvas</strong>, interpreting the soul's descent through the tattvas as a <strong>progressive defeat</strong> and its ascent as a <strong>series of victories</strong>[cite: 5]. Each tattva conquered is a battle won; each mala removed is an enemy slain. <em>(See detailed table in Section 4 below.)</em>[cite: 5]</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Victory Interpretation)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Ahiṃsā interpreted as not allowing any being to remain in spiritual bondage; active compassion as conquest over cruelty[cite: 5]</li>
            <li><strong>Niyama</strong> — Tapas as voluntary hardship to build spiritual strength; Śauca as purifying the body-mind fortress[cite: 5]</li>
            <li><strong>Āsana</strong> — Vīrāsana (hero posture) and other strong, stable postures that develop physical and mental resilience[cite: 5]</li>
            <li><strong>Prāṇāyāma</strong> — Bhastrikā and Sūrya-bhedana to generate the fiery energy (tejas) needed for spiritual combat[cite: 5]</li>
            <li><strong>Pratyāhāra</strong> — Conquering the senses by withdrawing them from enemy territory (worldly objects) into the fortress of the heart[cite: 5]</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the bindu as the strategic center point from which all spiritual battles are directed[cite: 5]</li>
            <li><strong>Dhyāna</strong> — Meditation on Shiva as <strong>Vijaya-mūrti</strong> — the ever-victorious commander of the cosmic army[cite: 5]</li>
            <li><strong>Samādhi</strong> — <strong>Vijaya-samādhi</strong>: absorption in the state of total triumph where no enemy (kleśa) remains[cite: 5]</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Kuṇḍalinī as Vijaya-Śakti</h4>
          <p>The Vijayāgama describes the <strong>Kuṇḍalinī Śakti</strong> as <strong>vijaya-śakti</strong> — the power of conquest[cite: 5]. When awakened, she rises like a victorious army through the chakras, <strong>conquering and purifying each center</strong>[cite: 5]. The Mūlādhāra is the base camp; the Svādhiṣṭhāna is the first outpost taken; and so on until the Sahasrāra, which is the capital city of Shiva's empire[cite: 5].</p>

          <Verse
            sanskrit="विजयशक्तिः सदा यस्मिन् मूलाधारे प्रतिष्ठिता ।\nजयेन जयते सर्वं सहस्रारे शिवं व्रजेत् ॥"
            transliteration="Vijayaśaktiḥ sadā yasmin mūlādhāre pratiṣṭhitā | Jayena jayate sarvaṃ sahasrāre śivaṃ vrajet ||"
            meaning="The power of victory, ever established in the Muladhara, conquers all through conquest and reaches Shiva at the Sahasrara[cite: 5]."
          />
        </Section>

        {/* JNANA PADA */}
        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda represents the <strong>philosophical summit</strong> of the Vijayāgama[cite: 5]. It presents the core metaphysical framework through the lens of <strong>vijaya-vāda</strong> — the doctrine of spiritual conquest[cite: 5]:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Three Eternal Categories (Padārtha-Traya) — Victory View</h4>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Invincible Lord</h5>
            <p className="text-ink-light text-sm">Shiva as <strong>Aparājita</strong> — the unconquerable[cite: 5]. He is not merely powerful; He is <strong>power itself</strong> — the source of all strength, the commander of all forces, the ultimate warrior who has never known defeat[cite: 5]. The Vijayāgama's unique contribution is the revelation that Shiva's "victory" is not the defeat of an external enemy but the <strong>total transcendence of all conflict</strong> — He is beyond victory and defeat because there is nothing other than Himself to conquer or be conquered by[cite: 5].</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Captured Soul</h5>
            <p className="text-ink-light text-sm">The individual soul (jīva) is <strong>vijaya-rahita</strong> — devoid of victory[cite: 5]. It is not weak but <strong>disarmed</strong> — it has surrendered its weapons (viveka, vairāgya) to the enemy forces of desire and delusion[cite: 5]. The Vijayāgama describes the soul's condition as <strong>bandi-bhāva</strong> — prisoner-status: it has been captured by the armies of Māyā and marches in chains through saṃsāra[cite: 5].</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Threefold Enemy Force</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala (आणव मल)</strong> — The commander of the enemy army: the sense of limitation that directs all other forces against the soul[cite: 5]. It is the <strong>general</strong> whose defeat collapses the entire hostile force[cite: 5].</li>
              <li><strong>Māyā Mala (माया मल)</strong> — The battlefield itself: Māyā is the territory of saṃsāra where the war is fought[cite: 5]. The Vijayāgama describes this as <strong>raṇa-bhūmi</strong> — the field of battle where the soul must fight its way back to Shiva[cite: 5].</li>
              <li><strong>Kārma Mala (कार्म मल)</strong> — The enemy's reinforcements: Karma is the <strong>endless supply of soldiers</strong> — each action produces consequences that bind the soul more tightly[cite: 5]. Only by ceasing to fight for the enemy (worldly action) and fighting for Shiva (kriyā) can the supply be cut off[cite: 5].</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Vijaya-Sāyujya (विजय-सायुज्य)</h4>
          <p>The ultimate goal described in the Vijayāgama is <strong>Vijaya-sāyujya</strong> — union through victory[cite: 5]. The liberated soul does not "surrender" to Shiva (passive merger) but rather <strong>joins Shiva's victorious army</strong> as a co-commander[cite: 5]. It retains its individual warrior-nature while fighting on Shiva's side rather than against Him[cite: 5]. The soul becomes <strong>Shiva's senāpati</strong> — commander of His forces — enjoying all of Shiva's power through His grace[cite: 5].</p>

          <Verse
            sanskrit="विजयी पशुपतिः शम्भुः विजयं मोचयते सदा ।\nविजयेन कर्मणा भक्त्या शिवसायुज्यमाप्नुयात् ॥"
            transliteration="Vijayī paśupatiḥ śambhuḥ vijayaṃ mocayate sadā | Vijayena karmaṇā bhaktyā śivasāyujyamāpnuyāt ||"
            meaning="The victorious Lord, Pashupati Shambhu, ever liberates through victory. Through victorious action and devotion, one attains Shiva-Sayujya[cite: 5]."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 3: CORE VERSES ===== */}
        <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
          <Verse
            sanskrit="विजयः शिवरूपेण संसारं जयते सदा ।\nतं नमामि सदा भक्त्या यो विजयी सर्वतोमुखः ॥"
            transliteration="Vijayaḥ śivarūpeṇa saṃsāraṃ jayate sadā | Taṃ namāmi sadā bhaktyā yo vijayī sarvatomukhaḥ ||"
            meaning="Victory, in the form of Shiva, ever conquers the world. I ever bow with devotion to Him who is victorious in all directions[cite: 5]."
          />

          <Verse
            sanskrit="जयेन जयते योगी जयेन जयते जगत् ।\nविजयागममार्गेण जयी शिवमवाप्नुयात् ॥"
            transliteration="Jayena jayate yogī jayena jayate jagat | Vijayāgamamārgeṇa jayī śivamavāpnuyāt ||"
            meaning="By victory the yogi conquers; by victory the world is conquered. By the path of the Vijayagama, the victorious one attains Shiva[cite: 5]."
          />

          <Verse
            sanskrit="अपराजितं परं स्थानं यत्र गत्वा न शोचति ।\nविजयागमोक्तमार्गेण तत् स्थानं प्राप्नुयात् सदा ॥"
            transliteration="Aparājitaṃ paraṃ sthānaṃ yatra gatvā na śocati | Vijayāgamoktamārgeṇa tat sthānaṃ prāpnuyāt sadā ||"
            meaning="The unconquerable supreme abode, having reached which one grieves no more — by the path taught in the Vijayagama, one ever attains that abode[cite: 5]."
          />

          <Verse
            sanskrit="षड्रिपून्जयते योगी विजयागमतत्परः ।\nषड्रिपून्जयित्वा तु स याति परमं पदम् ॥"
            transliteration="Ṣaḍripūn jayate yogī vijayāgamatatparaḥ | Ṣaḍripūn jayitvā tu sa yāti paramaṃ padam ||"
            meaning="The yogi devoted to the Vijayagama conquers the six enemies (passions). Having conquered the six enemies, he reaches the supreme state[cite: 5]."
          />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 4: 36 TATTVAS ===== */}
        <Section id="tattvas" title="4. The 36 Tattvas According to Vijayāgama" hindiTitle="४. विजयागम के अनुसार ३६ तत्त्व">
          <p>The Vijayāgama presents the <strong>Ṣaṭtriṃśat Tattva</strong> (36 categories of existence) — analyzing each Tattva as a <strong>territory to be conquered</strong> on the march back to Shiva[cite: 5]. From the occupied lands of the gross elements to the capital city of Shiva-tattva, the entire cosmos is understood as a <strong>battlefield of liberation</strong>[cite: 5]. The Vijayāgama's unique contribution is the revelation that spiritual progress is <strong>aggressive</strong> — the soul must actively conquer, not passively wait[cite: 5].</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        {/* ===== SECTION 5: CONCLUSION ===== */}
        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Unique Ethos of Vijayāgama</h4>
          <p>The Vijayāgama occupies a distinctive position among the twenty-eight Shaiva Āgamas by <strong>revealing spirituality as victorious warfare</strong>[cite: 5]:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Vijaya-Metaphysics (Vijaya-vidyā)</strong> — Its Jñāna and Yoga Pādas provide the most dynamic framework in Indian philosophy for understanding liberation as active conquest rather than passive reception[cite: 5].</li>
            <li><strong>Heroic Ritual Technology</strong> — The Kriyā and Caryā Pādas establish that ritual must be performed with vigor and determination; weak, half-hearted worship is ineffective against the forces of bondage[cite: 5].</li>
          </ul>
          <p className="mt-3">This focus makes the Vijayāgama particularly relevant for the modern era — it affirms that <strong>spiritual life requires courage and determination</strong>, and that <strong>the forces of ignorance are real enemies that must be actively defeated</strong>[cite: 5].</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'The premier repository of Shaiva Agama manuscripts. Houses critical editions including Vijayagama fragments.', url: 'https://www.ifpindia.org' },
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
            sanskrit="ॐ नमः शिवाय ।\nविजयागमं समाश्रित्य विजयज्ञानं प्रकाशते ।\nपशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Vijayāgamaṃ samāśritya vijayajñānaṃ prakāśate | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Vijayagama, the knowledge of victory illuminates — for liberation from the bonds of the Pashu, for the attainment of union with Shiva[cite: 5]."
          />
        </Section>
      </div>
    </div>
  );
}