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

export default function YogajagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Yogajāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">योगजागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Second of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु द्वितीयः — योगज्ञान एवं क्रियायोग का समन्वय</p>
        </motion.div>

        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="योगजागम — Complete Page Audio Narration"
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
          <p>The <strong>Yogajāgama</strong> (योगजागम) occupies the <strong>second position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Yoga</em> (योग) meaning "union" and <em>ja</em> (ज) meaning "born" — thus <strong>Yogajāgama is "The Scripture Born of Yoga"</strong> — that which arises from the union of consciousness and energy. This name encapsulates its fundamental teaching: true ritual efficacy arises only when external action is united with internal yogic awareness.</p>

          <Verse
            sanskrit="शिवात् सुधाक्यः, सुधाक्याद् भस्मा, भस्मनो विभुः ।
एवं परम्परा-प्राप्तं योगजागमम् उत्तमम् ॥"
            transliteration="Śivāt Sudhākyaḥ, Sudhākyād Bhasmā, Bhasmano Vibhuḥ | Evaṃ paramparā-prāptaṃ Yogajāgamam uttamam ||"
            meaning="From Shiva to Sudhakya, from Sudhakya to Bhasma, and from Bhasma to Vibhu — thus was the supreme Yogajagama received through sacred lineage."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Sadyojāta Face</h3>
          <p>The Yogajāgama emanates from <strong>Sadyojāta</strong>, the westward-facing aspect of Sadāshiva, representing <strong>creation and the initiatory impulse</strong>. Associated with <strong>Earth (Pṛthvī)</strong>, the color <strong>white</strong>, and the creative function.</p>

          <p>The original scope is <strong>one lakh (1,00,000) shlokas</strong>. Available recensions represent condensed versions transmitted through Sudhakya → Bhasma → Vibhu.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Jangha (Shin/Ankle)</h3>
          <p>In the cosmic body of Sadāshiva, the Yogajāgama is assigned to the <strong>Jangha (जङ्घा) — the shin and ankle</strong>:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Support and Upward Movement:</strong> The ankle is the pivot enabling locomotion — representing this Agama's role transforming ritual action into spiritual progression.</li>
            <li><strong>Foundation of Yoga:</strong> The shin provides structural support for the body to stand in āsana — this Agama provides structural support for integrating yoga into daily worship.</li>
            <li><strong>Bridge Between Earth and Heaven:</strong> The ankle connects the foot (earth) to the knee (flexibility) — symbolizing this Agama as bridge between worldly ritual and transcendent yoga.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Five Upāgamas (उपागम)</h3>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Vinasikhottara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">विनाशिकोत्तर</td><td className="py-2 text-ink-light">Transcendence of destruction; yoga beyond decay and impermanence</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Tara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">तार</td><td className="py-2 text-ink-light">The saving power of mantras; Tara-bīja and liberating sound vibrations</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Santa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">शान्त</td><td className="py-2 text-ink-light">Peaceful contemplative methods; śānti rituals and mental tranquility</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Santati</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सन्तति</td><td className="py-2 text-ink-light">Continuity of lineage; unbroken transmission of yogic knowledge</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Atmayoga</td><td className="py-2 pr-3 font-devanagari text-ink-muted">आत्मयोग</td><td className="py-2 text-ink-light">Yoga of the Self; direct realization of Ātman as Shiva without external aids</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली">
          <p>The Yogajāgama is structured around the <strong>Chatuṣpāda</strong> — the Four Pādas:</p>
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
          <p>The Kriyā Pāda covers temple worship with unique emphasis: <strong>every ritual action must be performed with yogic awareness</strong>. External offering is meaningless without internal offering of consciousness:</p>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Yoga-Kriya Integration</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Prāṇa-infused Offerings:</strong> Every offering charged with prāṇa through breath control before presentation</li>
            <li><strong>Mantra-Yoga Synchronization:</strong> Each mudra synchronized with bīja-mantra and specific prāṇāyāma ratio</li>
            <li><strong>Antaryāga (Inner Worship):</strong> Simultaneous mental worship (mānasika-pūjā) while conducting external rituals</li>
            <li><strong>Nyāsa with Yoga:</strong> Ṣaḍāṅga-nyāsa integrated with chakra awareness</li>
          </ul>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Temple Architecture & Iconography</h4>
          <p>The Yogajāgama specifies temple design facilitating <strong>yogic meditation</strong> — garbhagṛha proportioned for extended dhāraṇā, vimāna height calculated for acoustic resonance in mantra japa.</p>
          <Verse
            sanskrit="योगजं योगसम्भूतं योगिनां योगदायकम् ।
योगेन युज्यते यस्मात् तस्माद् योगजमुच्यते ॥"
            transliteration="Yogajaṃ yogasambhūtaṃ yogināṃ yogadāyakam | Yogena yujyate yasmāt tasmād yogajamucyate ||"
            meaning="Yogaja is born of yoga, the giver of yoga to yogis. It is called Yogaja because it is united through yoga."
          />
        </Section>

        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>Conduct that <strong>transforms every daily activity into yoga</strong>:</p>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Yogic Daily Protocol</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Brāhma Muhūrta</strong> — Rising before sunrise; immediate prāṇāyāma and Śiva-dhyāna</li>
            <li><strong>Yogic Snāna</strong> — Ritual bathing with uddīyana bandha and agni-sāra kriyā</li>
            <li><strong>Tri-sandhyā Yoga</strong> — Shaiva twilight prayers integrated with nāḍī-śuddhi prāṇāyāma</li>
            <li><strong>Āsana-sevā</strong> — Temple service while maintaining internal āsana awareness</li>
          </ul>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Nāda-Yoga in Daily Life</h4>
          <p>The Yogajāgama uniquely prescribes <strong>Nāda-Yoga</strong> as continuous practice — listening to inner sound (anāhata-nāda) during all activities, transforming mundane action into meditation.</p>
        </Section>

        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda is the <strong>most distinctive section</strong>, integrating Hatha Yoga, Rāja Yoga, and Mantra Yoga:</p>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Yogaja Emphasis)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama-Niyama</strong> — Ethical foundation for kuṇḍalinī awakening</li>
            <li><strong>Āsana</strong> — Siddhāsana and Padmāsana as prerequisites; body as liṅga</li>
            <li><strong>Prāṇāyāma</strong> — Sūrya-bheda, candra-bheda, nāḍī-śodhana with Śiva-bīja (Hauṃ)</li>
            <li><strong>Pratyāhāra</strong> — Withdrawal into hṛdaya-ākāśa (heart-space)</li>
            <li><strong>Dhāraṇā</strong> — Five Brahmamantras at five body centers with chakra visualization</li>
            <li><strong>Dhyāna</strong> — Progressive: form (saguṇa) → formless (nirguṇa) → Shiva-tattva</li>
            <li><strong>Samādhi</strong> — Sahaja-samādhi: maintaining Shiva awareness throughout daily activities</li>
          </ul>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Nāda-Yoga and Mantra-Japa</h4>
          <p>The Yogajāgama describes <strong>Nāda-Brahman</strong> — the Supreme as Sound. The practitioner progresses through stages: crickets → bell → flute → vīṇā → thunder → Om → silence (Shiva).</p>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Kuṇḍalinī and the Six Chakras</h4>
          <p>Kuṇḍalinī ascends through six chakras to unite with Shiva at Sahasrāra. This ascent must be <strong>supported by simultaneous ritual action</strong> — internal yoga and external kriyā are two wings of the same bird.</p>
        </Section>

        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The <strong>Pati-Paśu-Pāśa</strong> doctrine with emphasis on <strong>yogic realization</strong>:</p>
          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati — The Lord as Yogi</h5>
            <p className="text-ink-light text-sm">Shiva is the <strong>Adiyogi</strong> — the first yogi. His five faces represent five yogic powers. Shiva's supreme yoga is His grace (anugraha).</p>
          </div>
          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu — The Soul's Yogic Potential</h5>
            <p className="text-ink-light text-sm">The bound soul contains <strong>latent yogic powers</strong> obscured by three Malas. Yoga uncovers these innate powers, not acquiring something new.</p>
          </div>
          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa — Bonds as Yogic Obstacles</h5>
            <p className="text-ink-light text-sm">Three Malas as <strong>obstacles to yoga</strong>: Āṇava (forgetfulness of Self), Māyā (distraction by phenomena), Kārma (compulsive patterns).</p>
          </div>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Yoga-Sāyujya</h4>
          <p>Liberation as <strong>Yoga-sāyujya</strong> — union achieved through yoga. Not merely intellectual understanding but <strong>direct experience</strong> (anubhava) of Shiva-nature.</p>
        </Section>

        <SectionDivider className="my-8" />

        <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
          <Verse
            sanskrit="योगजं योगदीप्तं च योगिनां हृदि संस्थितम् ।
योगयुक्तः सदा भक्तः शिवसायुज्यमाप्नुयात् ॥"
            transliteration="Yogajaṃ yogadīptaṃ ca yogināṃ hṛdi saṃsthitam | Yogayuktaḥ sadā bhaktaḥ śivasāyujyamāpnuyāt ||"
            meaning="Yogaja, blazing with yoga, established in the hearts of yogis — the devotee ever united with yoga attains Shiva-Sayujya."
          />
          <Verse
            sanskrit="जङ्घास्थं योगजं प्रोक्तं योगसाधनतत्परम् ।
योगेन युज्यते यस्मात् स योगी परमः स्मृतः ॥"
            transliteration="Jaṅghāsthaṃ yogajaṃ proktaṃ yogasādhanatatparam | Yogena yujyate yasmāt sa yogī paramaḥ smṛtaḥ ||"
            meaning="The Yogaja, at the shin, is intent on yoga practice. He who is united through yoga is remembered as the supreme yogi."
          />
        </Section>

        <SectionDivider className="my-8" />

        <Section id="tattvas" title="4. The 36 Tattvas According to Yogajāgama" hindiTitle="४. योगजागम के अनुसार ३६ तत्त्व">
          <p>The <strong>Ṣaṭtriṃśat Tattva</strong> as the map for yogic ascent. The practitioner dissolves each Tattva in reverse order (Earth to Shiva) through meditation.</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Yogic Synthesis</h4>
          <p>The Yogajāgama harmonizes <strong>rigorous metaphysical contemplation with embodied yogic practice</strong>. It teaches that temple worship without inner yoga is incomplete, and yoga without ritual grounding lacks transformative power.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'Critical editions and Shaiva Agama publication series.', url: 'https://www.ifpindia.org' },
              { name: 'Himalayan Academy, Hawaii', desc: 'Accessible introductions to Agamic yoga concepts.', url: 'https://www.himalayanacademy.com' },
              { name: 'IGNCA, New Delhi', desc: 'Digital repository of rare manuscripts.', url: 'https://ignca.gov.in' },
              { name: 'Muktabodha Indological Research Institute', desc: 'Digital library of Shaiva manuscripts.', url: 'https://muktabodha.org' },
            ].map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-surface border border-border rounded-lg hover:border-vermillion/30 transition-colors">
                <p className="font-display font-semibold text-ink text-sm">{s.name}</p>
                <p className="text-ink-faint text-[12px] mt-1 leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>

          <Verse
            sanskrit="ॐ नमः शिवाय ।
योगजागमं समाश्रित्य योगीश्वरत्वमाप्नुयात् ।
पशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Yogajāgamaṃ samāśritya yogīśvaratvamāpnuyāt | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Yogajagama, one attains lordship of yoga — for liberation from Pashu-bonds, for Shiva-Sayujya."
          />
        </Section>
        </div>
      </div>
    </div>
  );
}