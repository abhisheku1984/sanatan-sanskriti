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

export default function KalagnirudraAgamaPage({ language }: { language: string }) {
  const { pageContent, isReady, contentRef } = usePageContent();
  const [highlightedLine, setHighlightedLine] = useState<number>(-1);

  const toc = [
    { id: 'intro', label: 'Introduction & Provenance' },
    { id: 'fire-time', label: 'The Fire of Time' },
    { id: 'dissolution', label: 'Dissolution & Transformation' },
    { id: 'tripundra', label: 'Tripundra & Sacred Ash' },
    { id: 'bhairava', label: 'The Bhairava Connection' },
    { id: 'verses', label: 'Core Verses' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  return (
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex justify-center mb-4"><DharmaWheel size={60} spinning={true} color="#C24D2B" /></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Kālāgnirudra Āgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">कालाग्निरुद्रागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Twenty-Sixth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु षड्विंशतितमः</p>
        </motion.div>

        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="कालाग्निरुद्रागम — Complete Page Audio Narration"
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

        <div ref={contentRef}>

          <Section id="intro" title="1. Introduction & Scriptural Provenance" hindiTitle="१. प्रस्तावना एवं शास्त्रीय उत्पत्ति">
            <p>The <strong>Kālāgnirudra Āgama</strong> (कालाग्निरुद्रागम) holds the <strong>twenty-sixth position</strong> among the twenty-eight primary Shaiva Āgamas. The very name of this scripture is a powerful mantra in itself — a compound of three potent concepts: <strong>Kāla</strong> (Time), <strong>Agni</strong> (Fire), and <strong>Rudra</strong> (the Fierce Lord Shiva). Together, they evoke the terrifying yet liberating vision of Shiva as the ultimate consumer of all that exists — the fire of time that burns away the universe at the end of each cosmic cycle.</p>

            <p>This Āgama belongs to the <strong>Rudrabheda</strong> group, the eighteen Āgamas revealed through the faces of Rudra. Where the Sivabheda Āgamas emphasize creation and preservation, the Rudrabheda texts — and particularly the Kālāgnirudra — focus on <strong>dissolution (saṃhāra)</strong> and the transformative power of destruction. The text teaches that dissolution is not mere annihilation but a sacred process of purification, preparing the ground for renewed creation.</p>

            <p>In the bodily metaphor of the Kāmikāgama, where each Āgama corresponds to a part of Shiva's divine form, the Kālāgnirudra is associated with the <strong>power of dissolution</strong> — the force that withdraws manifestation back into the unmanifest source. It is the scripture of endings that are simultaneously beginnings, of death that is the doorway to immortality.</p>

            <Verse
              sanskrit="कालाग्निरुद्र उवाचेदं शास्त्रं संहार विधायकम् ।
कालोऽग्निर् रुद्र एवैकः संहरन् विश्वम् ओजसा ॥"
              transliteration="Kālāgnirudra uvācedaṃ śāstraṃ saṃhāra vidhāyakam |
Kālo'gnir rudra evaikaḥ saṃharan viśvam ojasā ||"
              meaning="Kālāgnirudra declared this scripture as the guide to dissolution. Time, Fire, and Rudra are one — consuming the universe with mighty power."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="fire-time" title="2. The Fire of Time — Kāla-Agni" hindiTitle="२. कालाग्निः — समयस्य अग्निः">
            <p>The central doctrine of the Kālāgnirudra Āgama is the identification of <strong>Time (Kāla)</strong> with <strong>Fire (Agni)</strong>. In ordinary experience, time flows gradually and imperceptibly; but in the vision of this Āgama, time is a blazing fire that consumes all things — bodies, worlds, thoughts, and even the gods themselves. Nothing escapes the fire of time except Shiva, who stands beyond both time and space.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Three Fires</h4>
            <p>The text describes three levels of cosmic fire:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Bhūtāgni</strong> (भूताग्नि) — The elemental fire that burns in the material world, digesting food, consuming fuel, and transforming matter</li>
              <li><strong>Manasāgni</strong> (मनसाग्नि) — The mental fire that burns away ignorance through knowledge, consuming false identifications and limited concepts</li>
              <li><strong>Śivāgni</strong> (शिवाग्नि) — The supreme fire of Shiva-consciousness, which neither burns nor is burned, but illumines all things while remaining itself unchanged</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Time as the Devourer</h4>
            <p>The Kālāgnirudra presents a striking vision of <strong>Mahākāla</strong> — Great Time — as a cosmic being with insatiable appetite. At the end of each kalpa (aeon), Mahākāla opens his fiery mouth and draws all creation into himself. The gods, the demons, the elements, the stars — all are consumed in this universal conflagration. Yet this is not an act of cruelty but of compassion: by burning away the accumulated karma and impurities of countless ages, Mahākāla prepares the soul for its return to purity.</p>

            <p>For the yogi who meditates upon this truth, the fear of death is transformed into recognition. Death is not the enemy but the servant of Shiva, faithfully performing its duty of liberation through dissolution.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="dissolution" title="3. Dissolution & The Cycle of Cosmic Transformation" hindiTitle="३. संहार एवं ब्रह्माण्डीय परिवर्तन चक्र">
            <p>The Kālāgnirudra Āgama provides the most detailed account of <strong>cosmic dissolution (pralaya)</strong> among all the twenty-eight Āgamas. It describes not merely the end of the physical universe but the systematic withdrawal of all tattvas back into their source — a reverse journey of involution that mirrors the outward journey of creation.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Five Types of Dissolution</h4>
            <div className="space-y-3 mt-2">
              <div className="border-l-4 border-vermillion pl-4">
                <p className="font-semibold text-ink">Nitya-pralaya</p>
                <p className="text-ink-light text-sm">The continuous, moment-to-moment dissolution that occurs in every instant. Every thought that arises and passes, every breath that is drawn and released — this is nitya-pralaya, the eternal dissolution that underlies all apparent stability.</p>
              </div>
              <div className="border-l-4 border-turmeric pl-4">
                <p className="font-semibold text-ink">Naimittika-pralaya</p>
                <p className="text-ink-light text-sm">The periodic dissolution that occurs at the end of Brahma's day. The three worlds (bhūḥ, bhuvaḥ, svaḥ) are withdrawn, but the higher realms remain intact.</p>
              </div>
              <div className="border-l-4 border-sage pl-4">
                <p className="font-semibold text-ink">Prākṛta-pralaya</p>
                <p className="text-ink-light text-sm">The dissolution of the entire material universe at the end of Brahma's life. All the elements merge back into primal nature (prakṛti), which itself remains in a latent state.</p>
              </div>
              <div className="border-l-4 border-lotus pl-4">
                <p className="font-semibold text-ink">Ātyantika-pralaya</p>
                <p className="text-ink-light text-sm">The ultimate dissolution that occurs at the soul's liberation. The individual ego (ahaṅkāra) is permanently dissolved, and the soul recognizes its eternal identity with Shiva.</p>
              </div>
              <div className="border-l-4 border-indigo pl-4">
                <p className="font-semibold text-ink">Paramārtha-pralaya</p>
                <p className="text-ink-light text-sm">The supreme dissolution that transcends even liberation — the recognition that there was never anything to dissolve, that Shiva alone has ever existed, and that all manifestation was merely His playful sport (līlā).</p>
              </div>
            </div>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. The Reverse Evolution of Tattvas</h4>
            <p>During pralaya, the thirty-six tattvas withdraw in reverse order. The earth element dissolves into water, water into fire, fire into air, air into ether, and so on, until even the purest tattvas are reabsorbed into Śiva-tattva. The Kālāgnirudra describes this process with extraordinary precision, mapping the exact sequence of withdrawal and the mantras that accompany each stage.</p>

            <p>For the advanced practitioner, this is not merely cosmological information but a <strong>meditative map</strong>. By mentally retracing the path of dissolution during meditation, the yogi can experience microcosmic pralaya — a temporary withdrawal of the senses and mind that prepares the ground for direct recognition of Shiva.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="tripundra" title="4. Tripundra — The Three Lines of Sacred Ash" hindiTitle="४. त्रिपुण्ड्र — त्रिविध भस्मरेखा">
            <p>The Kālāgnirudra Āgama is the primary scriptural authority for the practice of wearing <strong>Tripundra</strong> (त्रिपुण्ड्र) — the three horizontal lines of sacred ash (vibhūti) that mark the forehead and body of the Shaiva devotee. This practice, while simple in appearance, encodes profound metaphysical teachings about the nature of reality, the process of dissolution, and the soul's journey toward Shiva.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Symbolism of the Three Lines</h4>
            <p>The three lines of the Tripundra represent multiple triads that structure Shaiva cosmology:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>The Three Fires</strong> — Garhapatya (household fire), Dakṣiṇāgni (southern fire for ancestors), and Āhavanīya (offering fire)</li>
              <li><strong>The Three Syllables of Oṃ</strong> — A, U, and M, representing creation, preservation, and dissolution</li>
              <li><strong>The Three Guṇas</strong> — Rajas (activity), Sattva (illumination), and Tamas (inertia)</li>
              <li><strong>The Three Worlds</strong> — Earth, atmosphere, and heaven</li>
              <li><strong>The Three Vedas</strong> — Ṛg, Yajur, and Sāma</li>
              <li><strong>The Three Aspects of Shiva</strong> — Maheśvara (the Lord), Sadāśiva (the Ever-Auspicious), and Śiva (the Auspicious One)</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. The Application of Vibhūti</h4>
            <p>The Kālāgnirudra prescribes elaborate rules for the preparation and application of sacred ash. The ash should be collected from sacred fires, consecrated with mantras, mixed with water while reciting Vedic hymns, and applied to specific parts of the body with precise nyāsa (placement) techniques. Each application is accompanied by mantras that invoke the purifying power of Shiva.</p>

            <p>The text teaches that wearing Tripundra is not merely an external observance but an <strong>internal transformation</strong>. The ash represents the burnt residue of all karma — the purified essence that remains when the fire of spiritual practice has consumed all impurities. When the devotee applies ash to the body, they are symbolically declaring: "I am not this body of flesh and bone; I am the purified consciousness that remains when all else is burned away."</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="bhairava" title="5. The Bhairava Connection" hindiTitle="५. भैरव सम्प्रदाय सम्बन्ध">
            <p>The Kālāgnirudra Āgama shares deep affinities with the <strong>Bhairava tradition</strong>. Kālāgnirudra is itself an epithet of Bhairava — the fierce, transcendent aspect of Shiva who operates beyond all conventional boundaries. Where the serene Shiva of the Sivabheda Āgamas creates and preserves with compassion, Kālāgnirudra-Bhairava destroys with terrifying intensity — not out of wrath, but out of the necessity to clear the field for renewal.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Bhairava as the Lord of Dissolution</h4>
            <p>In the Kālāgnirudra, Bhairava is described as the ultimate reality who creates everything from fire and then burns everything — gods, humans, and demons alike — to ashes. This is not cruelty but the supreme justice of truth: all that is false must be consumed so that only the true remains. The false identifications, the accumulated karma, the layers of māyā — all are fuel for Bhairava's fire.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. The Guru as Kālāgnirudra</h4>
            <p>The text teaches that the true guru embodies the energy of Kālāgnirudra. The guru's role is to burn away the disciple's ignorance — sometimes through shocking or unconventional means — and thereby reveal the disciple's own divine nature. This "burning" may take the form of harsh words, challenging practices, or the simple but devastating recognition of one's own limitations. Whatever form it takes, it is always an act of grace.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. The Path of the Heroic Practitioner</h4>
            <p>The Kālāgnirudra addresses itself to the <strong>vīra</strong> — the heroic practitioner who is willing to face the fire of transformation without flinching. This path is not for the faint-hearted. It requires the courage to let go of everything one holds dear — possessions, relationships, identity, even the desire for liberation itself. Only when the ego is completely burned away does Shiva reveal Himself as the sole reality.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="verses" title="6. Core Verses & Sacred Teachings" hindiTitle="६. मूल श्लोक">
            <Verse
              sanskrit="कालाग्निरुद्र उवाचेदं शास्त्रं संहार विधायकम् ।
कालोऽग्निर् रुद्र एवैकः संहरन् विश्वम् ओजसा ॥"
              transliteration="Kālāgnirudra uvācedaṃ śāstraṃ saṃhāra vidhāyakam |
Kālo'gnir rudra evaikaḥ saṃharan viśvam ojasā ||"
              meaning="Kālāgnirudra declared this scripture as the guide to dissolution. Time, Fire, and Rudra are one — consuming the universe with mighty power."
            />

            <Verse
              sanskrit="त्रिपुण्ड्रं धारयेद् यस्तु भस्मना शुद्धचेतसा ।
स संसाराग्निनिर्मुक्तः शिवसायुज्यमाप्नुयात् ॥"
              transliteration="Tripuṇḍraṃ dhārayed yastu bhasmanā śuddha-cetasā |
Sa saṃsārāgni-nirmuktaḥ śiva-sāyujyam āpnuyāt ||"
              meaning="One who wears the Tripundra with sacred ash and pure mind is freed from the fire of worldly existence and attains union with Shiva."
            />

            <Verse
              sanskrit="संहार एव मोक्षस्य मार्गः परम उच्यते ।
कालाग्निरुद्र वचनात् सर्वपाप प्रणाशनम् ॥"
              transliteration="Saṃhāra eva mokṣasya mārgaḥ parama ucyate |
Kālāgnirudra vacanāt sarva-pāpa praṇāśanam ||"
              meaning="Dissolution itself is said to be the supreme path to liberation. Through the words of Kālāgnirudra, all sins are destroyed."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="conclusion" title="7. Conclusion" hindiTitle="७. समापन">
            <p>The Kālāgnirudra Āgama is a scripture of fierce wisdom. It does not offer comfort to the ego or solace to the worldly mind. Instead, it presents the uncompromising truth that all that is born must die, all that is created must be dissolved, and all that is accumulated must be burned away. This is not pessimism but the highest optimism: for what remains when the fire has done its work is none other than Shiva Himself.</p>

            <p>The practice of Tripundra, the meditation on cosmic dissolution, and the cultivation of vairāgya (dispassion) taught in this Āgama are all oriented toward a single goal: the recognition that the individual soul, when stripped of all coverings, is identical with the Supreme. The fire of Kālāgnirudra does not destroy the soul; it destroys only the impurities that hide the soul's true nature.</p>

            <p>May the fire of time burn away all that is false in us, and may the grace of Kālāgnirudra reveal the eternal Shiva-nature that is our true inheritance.</p>

            <div className="mt-6 p-4 bg-vermillion/5 border border-vermillion/20 rounded-lg">
              <p className="font-devanagari text-center text-ink font-semibold">ॐ नमः कालाग्निरुद्राय</p>
              <p className="text-center text-ink-muted italic mt-2">Om Namaḥ Kālāgnirudrāya</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}