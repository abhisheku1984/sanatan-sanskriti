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

export default function AjitagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Ajitāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">अजितागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Fifth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु पञ्चमः — अजेय शिवभक्ति एवं विजयमार्ग</p>
        </motion.div>

        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="अजितागम — Complete Page Audio Narration"
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
          <p>The <strong>Ajitāgama</strong> (अजितागम) occupies the <strong>fifth position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Ajita</em> (अजित) meaning "unconquered," "invincible," or "undefeated" — thus <strong>Ajitāgama is "The Scripture of the Invincible Lord"</strong> or "The Agama of Spiritual Victory." This name reflects its core teaching: that Shiva is the unconquerable reality, and the soul that takes refuge in Him becomes equally unconquerable by the forces of ignorance, desire, and death.</p>

          <Verse
            sanskrit="शिवात् सुदर्शनः, सुदर्शनाद् देवः, देवाद् अजितः ।
एवं परम्परा-प्राप्तं अजितागमम् उत्तमम् ॥"
            transliteration="Śivāt Sudarśanaḥ, Sudarśanād Devaḥ, Devād Ajitaḥ | Evaṃ paramparā-prāptaṃ Ajitāgamam uttamam ||"
            meaning="From Shiva to Sudarshana, from Sudarshana to Deva, and from Deva to Ajita — thus was the supreme Ajitagama received through the sacred lineage."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Sadyojāta Face</h3>
          <p>The Ajitāgama emanates from <strong>Sadyojāta</strong> (सद्योजात), the westward-facing aspect of Sadāshiva, representing <strong>creation, manifestation, and the initiatory impulse</strong>. Associated with the element of <strong>Earth (Pṛthvī)</strong>, the color <strong>white</strong>, and the creative function.</p>

          <p>The original scope is <strong>one lakh (1,00,000) shlokas</strong>.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Janu (Knee)</h3>
          <p>In the cosmic body of Sadāshiva, the Ajitāgama is assigned to the <strong>Janu (जानु) — the knee</strong>:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Flexibility and Strength:</strong> The knee combines flexibility with strength — representing this Agama's balance between adaptable conduct and unwavering devotion.</li>
            <li><strong>Prostration and Rising:</strong> The knee bends in prostration (praṇāma) and straightens to rise — symbolizing the cycle of surrender and empowerment central to this Agama.</li>
            <li><strong>Invincible Support:</strong> The knee supports the body's weight in movement — representing the invincible support Shiva provides to the devotee's spiritual journey.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Three Upāgamas (उपागम)</h3>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Ajitodbhava</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अजितोद्भव</td><td className="py-2 text-ink-light">The arising of the invincible; cosmogonic processes and the birth of divine power</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Ajitagama</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अजितागम</td><td className="py-2 text-ink-light">Elaboration on the primary Agama's invincibility teachings; protective rituals</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Vijaya</td><td className="py-2 pr-3 font-devanagari text-ink-muted">विजय</td><td className="py-2 text-ink-light">Victory rituals; conquering internal and external obstacles through Shiva's grace</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
          <p>The Ajitāgama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद):</p>
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
          <p>The Kriyā Pāda of the Ajitāgama emphasizes <strong>victorious ritual action</strong> — worship that conquers obstacles, destroys negativity, and establishes the devotee in spiritual sovereignty:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Vijaya-Pūjā (Victory Worship)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Śatru-śānti</strong> — Pacification of enemies through compassionate ritual, not destruction</li>
            <li><strong>Vighna-nāśana</strong> — Destruction of obstacles through Ganesha-integrated Shiva worship</li>
            <li><strong>Abhicāra-śuddhi</strong> — Purification from black magic; protective rituals using the Ajitāgama's unique mantras</li>
            <li><strong>Jayābhiṣeka</strong> — Victory consecration; the ritual crowning of the devotee with Shiva's invincible power</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Protective Installation (Rakṣā-Pratiṣṭhā)</h4>
          <p>The Ajitāgama provides detailed protocols for installing <strong>protective deities</strong> (rakṣā-devatās) around temples and homes, creating an invincible spiritual fortress.</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Iconography of the Invincible</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Ajita-mūrti</strong> — Shiva in unconquerable form, standing on obstacles with trident raised</li>
            <li><strong>Vijaya-liṅga</strong> — Victory liṅgas installed facing specific directions for protection</li>
            <li><strong>Astra-mūrti</strong> — Weapon-form deities for temple guardian installation</li>
          </ul>

          <Verse
            sanskrit="अजितं पूजयेत् साक्षाद् अजेयः स ततो भवेत् ।
अजितागमविधिना यः शिवं सम्प्रपूजयेत् ॥"
            transliteration="Ajitaṃ pūjayet sākṣād aje yaḥ sa tato bhavet | Ajitāgamavidhinā yaḥ śivaṃ samprapūjayet ||"
            meaning="One should worship the Unconquered directly; he who worships Shiva according to the Ajitagama's methods becomes unconquerable."
          />
        </Section>

        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>The Caryā Pāda establishes <strong>invincible conduct</strong> — daily behavior that makes the practitioner impervious to spiritual downfall:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vijaya-Vrata</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Monday Vrata</strong> — Somavāra vows for conquering the mind (soma = moon = mind)</li>
            <li><strong>Pradoṣa Vrata</strong> — Twilight worship for conquering time (kāla-vijaya)</li>
            <li><strong>Śivarātri</strong> — The great night vigil for conquering death (mṛtyu-vijaya)</li>
            <li><strong>Ajitāṣṭamī</strong> — Eighth-day vow specific to this Agama for conquering internal enemies</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Ācārya-Vijaya</h4>
          <p>The conduct of the ācārya is described as <strong>vijaya-caryā</strong> — victorious conduct. The true teacher is one who has conquered the six enemies (ṣaḍripu): desire, anger, greed, delusion, pride, and envy.</p>
        </Section>

        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda presents <strong>victorious yoga</strong> (vijaya-yoga) — practices that conquer the inner forces of limitation:</p>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga with Victory Emphasis</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama-Niyama</strong> — Ethical foundations as the armor of spiritual victory</li>
            <li><strong>Āsana</strong> — Vīrāsana (hero's posture) and Vajrāsana (diamond/thunderbolt posture) as postures of invincibility</li>
            <li><strong>Prāṇāyāma</strong> — Ujjāyī (victorious breath) as the primary technique; conquering the life-force</li>
            <li><strong>Pratyāhāra</strong> — Conquering the senses by withdrawing them into the heart</li>
            <li><strong>Dhāraṇā-Dhyāna</strong> — Concentration on the Ajita-form of Shiva; meditation on invincibility</li>
            <li><strong>Samādhi</strong> — Vijaya-samādhi: absorption in the unconquerable nature of Shiva</li>
          </ul>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Ṣaḍripu-Vijaya</h4>
          <p>A unique practice: <strong>conquering the six internal enemies</strong> through specific meditations — each enemy assigned to a specific Tattva, conquered by dissolving that Tattva back into Shiva.</p>
        </Section>

        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda presents the <strong>Pati-Paśu-Pāśa</strong> doctrine with emphasis on <strong>invincible knowledge</strong>:</p>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Invincible Lord</h5>
            <p className="text-ink-light text-sm">Shiva is <strong>Ajita</strong> — never conquered by anything, not even by the greatest forces of dissolution. His Svātantrya (absolute freedom) is invincible. His grace (anugraha) cannot be obstructed by any force when He chooses to bestow it.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Potentially Invincible Soul</h5>
            <p className="text-ink-light text-sm">The soul appears conquered by Māyā, but its true nature is <strong>ajita</strong> — invincible. The bondage is apparent, not real. The soul's consciousness (cit) can never be truly conquered by anything external.</p>
          </div>

          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Conquerable Bonds</h5>
            <p className="text-ink-light text-sm">The three Malas are <strong>conquerable</strong> — they have no power against Shiva's grace. Āṇava is conquered by śaktipāta, Māyā by tattva-jñāna, and Kārma by kriyā-yoga.</p>
          </div>

          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Vijaya-Mukti</h4>
          <p>The Ajitāgama describes liberation as <strong>Vijaya-mukti</strong> — victorious liberation. The soul does not merely escape bondage; it <strong>conquers</strong> it, emerging triumphant with all of Shiva's powers intact.</p>
        </Section>

        <SectionDivider className="my-8" />

        <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
          <Verse
            sanskrit="अजितः शिव एकः स्याद् अजितं तस्य तत् पदम् ।
अजितागमसम्प्रोक्तं अजितं सम्प्रपूजयेत् ॥"
            transliteration="Ajitaḥ śiva ekaḥ syād ajitaṃ tasya tat padam | Ajitāgamasamproktaṃ ajitaṃ samprapūjayet ||"
            meaning="Shiva alone is unconquered; His abode is unconquered. One should worship the Unconquered as taught in the Ajitagama."
          />

          <Verse
            sanskrit="जानुस्थं अजितं प्रोक्तं जयदं योगिनां सदा ।
अजितेन विना मोक्षो न सिद्ध्यति कथञ्चन ॥"
            transliteration="Jānusthaṃ ajitaṃ proktaṃ jayadaṃ yogināṃ sadā | Ajitena vinā mokṣo na siddhyati kathañcana ||"
            meaning="The Ajita, proclaimed as established at the knee, ever grants victory to yogis. Without the Unconquered, liberation is in no way accomplished."
          />
        </Section>

        <SectionDivider className="my-8" />

        <Section id="tattvas" title="4. The 36 Tattvas According to Ajitāgama" hindiTitle="४. अजितागम के अनुसार ३६ तत्त्व">
          <p>The Ajitāgama presents the <strong>Ṣaṭtriṃśat Tattva</strong> as the <strong>battlefield of consciousness</strong>. Each Tattva is an enemy to be conquered through knowledge, and simultaneously a stepping-stone to victory when properly understood.</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Invincible Spirit of Ajitāgama</h4>
          <p>The Ajitāgama instills <strong>spiritual courage</strong>. It teaches that no obstacle is insurmountable, no sin unforgivable, and no soul beyond redemption when Shiva's grace is sought with determination. It is the Agama for those facing adversity.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'Houses manuscript fragments of the Ajitagama.', url: 'https://www.ifpindia.org' },
              { name: 'IGNCA (Indira Gandhi National Centre for the Arts)', desc: 'Digital repository with manuscript scans.', url: 'https://ignca.gov.in' },
              { name: 'Shaiva Agama Research Centre, Chennai', desc: 'References to Ajitagama in protective ritual manuals.', url: 'https://shaivam.org' },
              { name: 'Muktabodha Indological Research Institute', desc: 'Searchable database includes Ajitagama-related manuscripts.', url: 'https://muktabodha.org' },
            ].map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-surface border border-border rounded-lg hover:border-vermillion/30 transition-colors">
                <p className="font-display font-semibold text-ink text-sm">{s.name}</p>
                <p className="text-ink-faint text-[12px] mt-1 leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>

          <Verse
            sanskrit="ॐ नमः शिवाय ।
अजितागमं समाश्रित्य अजेयो भवति मानवः ।
पशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Ajitāgamaṃ samāśritya aje yo bhavati mānavaḥ | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Ajitagama, a human becomes unconquerable — for liberation from the bonds of the Pashu, for the attainment of union with Shiva."
          />
        </Section>
        </div>
      </div>
    </div>
  );
}