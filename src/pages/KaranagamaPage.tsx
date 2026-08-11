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

export default function KaranagamaPage({ language }: { language: string }) {
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex justify-center mb-4"><DharmaWheel size={60} spinning={true} color="#C24D2B" /></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Kāraṇāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">कारणागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Fourth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु चतुर्थः — कारणबोध एवं मूर्ति-प्रतिष्ठा का आधार</p>
        </motion.div>

        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="कारणागम — Complete Page Audio Narration"
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
          <p>The <strong>Kāraṇāgama</strong> (कारणागम) occupies the <strong>fourth position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Kāraṇa</em> (कारण) meaning "cause," "instrument," or "means" — thus <strong>Kāraṇāgama is "The Scripture of Causation"</strong> or "The Agama of Instruments." This name reflects its deep inquiry into the causal principles that underlie both cosmic creation and ritual efficacy. It is the Agama that answers the question: <em>By what means does the infinite Shiva become accessible to the finite soul?</em></p>

          <Verse
            sanskrit="शिवात् कारणं, कारणाद् योगी, योगिनो मुनिः ।
एवं परम्परा-प्राप्तं कारणागमम् उत्तमम् ॥"
            transliteration="Śivāt Kāraṇaṃ, Kāraṇād Yogī, Yogino Muniḥ | Evaṃ paramparā-prāptaṃ Kāraṇāgamam uttamam ||"
            meaning="From Shiva to Karana, from Karana to the Yogi, and from the Yogi to the Sage — thus was the supreme Karanagama received through the sacred lineage."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Sadyojāta Face</h3>
          <p>The Kāraṇāgama emanates from <strong>Sadyojāta</strong> (सद्योजात), the westward-facing aspect of Sadāshiva, representing <strong>creation, manifestation, and the initiatory impulse</strong>. Associated with the element of <strong>Earth (Pṛthvī)</strong>, the color <strong>white</strong>, and the creative function.</p>

          <p>The original scope is <strong>one lakh (1,00,000) shlokas</strong>. The available recensions represent condensed versions transmitted through specific lineages.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Gulpha (Ankle)</h3>
          <p>In the cosmic body of Sadāshiva, the Kāraṇāgama is assigned to the <strong>Gulpha (गुल्फ) — the ankle joint</strong>:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Instrument of Movement:</strong> The ankle is the instrument (karana) that enables the foot to move — representing this Agama's focus on the instruments (karana) of spiritual practice.</li>
            <li><strong>Connection and Transition:</strong> The ankle connects the foot to the leg, representing the transitional nature of causation — how the unmanifest becomes manifest through successive instruments.</li>
            <li><strong>Stability in Practice:</strong> A strong ankle provides stability; this Agama provides the stable causal framework for all subsequent Agamic knowledge.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Four Upāgamas (उपागम)</h3>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Santana</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सन्तान</td><td className="py-2 text-ink-light">Lineage continuation; transmission protocols and guru-shishya parampara regulations</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Udita</td><td className="py-2 pr-3 font-devanagari text-ink-muted">उदित</td><td className="py-2 text-ink-light">Rising consciousness; dawn rituals and the awakening of inner knowledge</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Kapila</td><td className="py-2 pr-3 font-devanagari text-ink-muted">कपिल</td><td className="py-2 text-ink-light">The tawny-hued Lord's worship; Agamic interpretations of Kapila-tantra</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Paurusheya</td><td className="py-2 pr-3 font-devanagari text-ink-muted">पौरुषेय</td><td className="py-2 text-ink-light">Human effort and divine grace; the synergy of purushakara and ishvara-kripa</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>The Kāraṇāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद):</p>
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

        <Section id="kriya" title="2.1 Kriyā Pāda — The Path of Sacred Action" hindiTitle="२.१ क्रिया पाद — पवित्र कर्म का मार्ग">
          <p>The Kriyā Pāda of the Kāraṇāgama is renowned for its exhaustive treatment of <strong>Mūrti-Pratiṣṭhā</strong> — the science of installing divine consciousness into sacred images. It treats ritual as <strong>causal technology</strong>:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Causal Chain of Worship</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Adhikāra</strong> — Qualification of the practitioner as the first cause of effective ritual</li>
            <li><strong>Samskāra</strong> — Purificatory rites that prepare the causal body for divine contact</li>
            <li><strong>Dīkṣā</strong> — Initiation as the instrumental cause that transmits guru's grace</li>
            <li><strong>Kriyā</strong> — Ritual action as the efficient cause of spiritual transformation</li>
            <li><strong>Phala</strong> — Fruit of ritual as the final cause, predetermined by the purity of preceding causes</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Prāṇa-Pratiṣṭhā as Causal Science</h4>
          <p>The Kāraṇāgama provides the <strong>most detailed causal explanation</strong> of how consciousness is invoked into an image:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Hṛdaya-nyāsa</strong> — Placing the heart-mantra as the causal seed of divine life</li>
            <li><strong>Śiro-nyāsa</strong> — Crown installation establishing the causal connection to Shiva's head</li>
            <li><strong>Netra-nyāsa</strong> — Eye installation as the opening of divine perception</li>
            <li><strong>Astra-nyāsa</strong> — Weapon-mantra placement for protective causation</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Temple Architecture & Vāstu</h4>
          <p>The causal principles extend to temple architecture — every dimension, proportion, and directional alignment is understood as a <strong>causal instrument</strong> (nimitta-kāraṇa) that channels divine energy.</p>

          <Verse
            sanskrit="कारणेन विना मन्त्रः फलं नैव प्रयच्छति ।
कारणागमसम्प्रोक्तं कारणं सम्प्रसाधयेत् ॥"
            transliteration="Kāraṇena vinā mantraḥ phalaṃ naiva prayacchati | Kāraṇāgamasamproktaṃ kāraṇaṃ samprasādhayet ||"
            meaning="Without the cause, the mantra does not yield fruit. One should properly establish the cause as taught in the Karanagama."
          />
        </Section>

        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes conduct based on <strong>causal awareness</strong> — understanding that every action produces spiritual consequences:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Karma-Carya Integration</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Nitya-Karma</strong> — Daily obligatory actions as causal maintenance of spiritual qualification</li>
            <li><strong>Naimittika-Karma</strong> — Occasional rites tied to specific causal conjunctions (tithi, nakshatra)</li>
            <li><strong>Kāmya-Karma</strong> — Desired-fruit rituals performed with full awareness of their causal chain</li>
            <li><strong>Prāyaścitta</strong> — Expiatory rites as causal correction of ritual errors</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Ācārya-Lakṣaṇa</h4>
          <p>The Kāraṇāgama details the <strong>causal qualifications</strong> of a true ācārya — not merely knowledge of mantras, but the causal purity that makes his initiation effective.</p>
        </Section>

        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda presents <strong>causal yoga</strong> — the understanding that the 36 Tattvas are not merely categories but <strong>causal instruments</strong> of bondage and liberation:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga with Causal Awareness</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama-Niyama</strong> — Ethical foundations as the causal ground of yoga</li>
            <li><strong>Āsana</strong> — Posture as the causal instrument for prāṇa-control</li>
            <li><strong>Prāṇāyāma</strong> — Breath control as the direct manipulation of the causal life-force</li>
            <li><strong>Pratyāhāra</strong> — Withdrawal as the cessation of causal contact with objects</li>
            <li><strong>Dhāraṇā-Dhyāna-Samādhi</strong> — Progressive causal interiorization culminating in Shiva-awareness</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Tattva-Pratyāhāra</h4>
          <p>A unique practice in the Kāraṇāgama: <strong>causal withdrawal through the Tattvas</strong> — mentally dissolving each of the 36 categories from Earth back to Shiva, understanding each as a causal veil.</p>
        </Section>

        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda presents the <strong>Pati-Paśu-Pāśa</strong> doctrine with emphasis on <strong>causal metaphysics</strong>:</p>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Supreme Cause</h5>
            <p className="text-ink-light text-sm">Shiva is <strong>Parakāraṇa</strong> — the Supreme Cause, independent of all other causes. He is the <strong>nimitta-kāraṇa</strong> (efficient cause) and <strong>upādāna-kāraṇa</strong> (material cause) of the universe, yet transcends both.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Effect-Bound Soul</h5>
            <p className="text-ink-light text-sm">The soul is <strong>kārya-kāraṇa-sambandha</strong> — bound by the relationship of effect to cause. It mistakes itself as the effect of Māyā, forgetting its true nature as Shiva.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Causal Bonds</h5>
            <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
              <li><strong>Āṇava Mala</strong> — The causal ignorance that makes the infinite appear finite</li>
              <li><strong>Māyā Mala</strong> — The causal substance of limitation, the upādāna of all finite experience</li>
              <li><strong>Kārma Mala</strong> — The causal residue of action, the seed of future embodiment</li>
            </ul>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Kāraṇa-Mukti</h4>
          <p>The Kāraṇāgama describes liberation as <strong>Kāraṇa-mukti</strong> — freedom from causation. Not freedom from action, but freedom from <em>being bound by</em> the results of action. The liberated soul acts without generating karmic bonds.</p>
        </Section>

        <SectionDivider className="my-8" />

        <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
          <Verse
            sanskrit="कारणं परमं शम्भुः कारणं तस्य च क्रिया ।
कारणागमसम्प्रोक्तं कारणज्ञः स मुच्यते ॥"
            transliteration="Kāraṇaṃ paramaṃ śambhuḥ kāraṇaṃ tasya ca kriyā | Kāraṇāgamasamproktaṃ kāraṇajñaḥ sa mucyate ||"
            meaning="The supreme cause is Shambhu; His action is also the cause. One who knows the cause as taught in the Karanagama is liberated."
          />

          <Verse
            sanskrit="गुल्फस्थं कारणं प्रोक्तं कारणज्ञानतत्परम् ।
कारणेन विना मोक्षो न सिद्ध्यति कथञ्चन ॥"
            transliteration="Gulphasthaṃ kāraṇaṃ proktaṃ kāraṇajñānatatparam | Kāraṇena vinā mokṣo na siddhyati kathañcana ||"
            meaning="The Karana, proclaimed as established at the ankle, is intent on the knowledge of causes. Without the cause, liberation is in no way accomplished."
          />
        </Section>

        <SectionDivider className="my-8" />

        <Section id="tattvas" title="4. The 36 Tattvas According to Kāraṇāgama" hindiTitle="४. कारणागम के अनुसार ३६ तत्त्व">
          <p>The Kāraṇāgama presents the <strong>Ṣaṭtriṃśat Tattva</strong> as the <strong>causal chain</strong> of cosmic manifestation. Each Tattva is both the effect of the preceding and the cause of the succeeding.</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Causal Depth of Kāraṇāgama</h4>
          <p>The Kāraṇāgama provides the <strong>philosophical infrastructure</strong> that makes Agamic worship meaningful. By understanding ritual as causal technology, the practitioner moves beyond mechanical repetition to intelligent participation in the cosmic order.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'Houses critical editions and manuscript fragments of the Karanagama.', url: 'https://www.ifpindia.org' },
              { name: 'IGNCA (Indira Gandhi National Centre for the Arts)', desc: 'Digital repository with manuscript scans.', url: 'https://ignca.gov.in' },
              { name: 'Shaiva Agama Research Centre, Chennai', desc: 'References to Karanagama principles in priest training materials.', url: 'https://shaivam.org' },
              { name: 'Muktabodha Indological Research Institute', desc: 'Searchable database includes Karanagama-related manuscripts.', url: 'https://muktabodha.org' },
            ].map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-surface border border-border rounded-lg hover:border-vermillion/30 transition-colors">
                <p className="font-display font-semibold text-ink text-sm">{s.name}</p>
                <p className="text-ink-faint text-[12px] mt-1 leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>

          <Verse
            sanskrit="ॐ नमः शिवाय ।
कारणागमं समाश्रित्य कारणज्ञो भवेत् सदा ।
पशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Kāraṇāgamaṃ samāśritya kāraṇajño bhavet sadā | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Karanagama, one ever becomes a knower of causes — for liberation from the bonds of the Pashu, for the attainment of union with Shiva."
          />
        </Section>
        </div>
      </div>
    </div>
  );
}