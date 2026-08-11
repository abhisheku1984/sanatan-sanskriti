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

export default function DiptagamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Dīptāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">दीप्तागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Sixth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु षष्ठः — प्रकाशमय ज्ञान एवं तेजोमय साधना</p>
        </motion.div>

        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="दीप्तागम — Complete Page Audio Narration"
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
          <p>The <strong>Dīptāgama</strong> (दीप्तागम) occupies the <strong>sixth position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Dīpta</em> (दीप्त) meaning "blazing," "luminous," "radiant," or "shining brightly" — thus <strong>Dīptāgama is "The Scripture of Blazing Light"</strong>. This name reflects its central teaching: that Shiva is supreme light (parā-prakāśa) and the soul's journey is one of progressive illumination until it shines with the same radiance as the Lord.</p>

          <Verse
            sanskrit="शिवात् तेजः, तेजसो दीप्तः, दीप्ताद् भास्करः ।
एवं परम्परा-प्राप्तं दीप्तागममनुत्तमम् ॥"
            transliteration="Śivāt Tejaḥ, Tejaso Dīptaḥ, Dīptād Bhāskaraḥ | Evaṃ paramparā-prāptaṃ Dīptāgamam anuttamam ||"
            meaning="From Shiva to Tejas, from Tejas to Dipta, and from Dipta to Bhaskara — thus was the supreme Diptagama received through sacred lineage."
          />

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Sadyojāta Face</h3>
          <p>The Dīptāgama emanates from <strong>Sadyojāta</strong>, the westward-facing aspect of Sadāshiva, representing <strong>creation, manifestation, and the initiatory impulse</strong>. Associated with <strong>Earth (Pṛthvī)</strong>, the color <strong>white</strong>, and the creative function.</p>

          <p>The original scope is <strong>one lakh (1,00,000) shlokas</strong>. Available recensions represent condensed versions transmitted through Tejas → Dipta → Bhaskara.</p>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Ūru (Thigh)</h3>
          <p>In the cosmic body of Sadāshiva, the Dīptāgama is assigned to the <strong>Ūru (ऊरु) — the thigh</strong>:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Power and Movement:</strong> The thigh is the body's strongest muscle group — representing this Agama's emphasis on powerful, dynamic spiritual practice.</li>
            <li><strong>Seat of Tejas:</strong> In yogic physiology, the thighs store vital energy (prāṇa-tejas) — this Agama teaches how to transform stored karma into blazing spiritual radiance.</li>
            <li><strong>Foundation for Ascent:</strong> The thigh lifts the body upward — symbolizing this Agama's role in elevating the soul from darkness to light.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Ten Upāgamas (उपागम)</h3>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
            <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase">Primary Focus</th></tr></thead>
            <tbody>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Tejas</td><td className="py-2 pr-3 font-devanagari text-ink-muted">तेजस्</td><td className="py-2 text-ink-light">Radiant energy; cultivation and control of inner tejas</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Bhāskara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">भास्कर</td><td className="py-2 text-ink-light">Solar worship; sūrya-oriented practices and dawn rituals</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Dīpaka</td><td className="py-2 pr-3 font-devanagari text-ink-muted">दीपक</td><td className="py-2 text-ink-light">Lamp rituals; deepa-pūjā and light-offering protocols</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Prakāśa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">प्रकाश</td><td className="py-2 text-ink-light">Illumination of knowledge; jñāna-prakāśa and dispelling ignorance</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Rociṣṇu</td><td className="py-2 pr-3 font-devanagari text-ink-muted">रोचिष्णु</td><td className="py-2 text-ink-light">Splendor and beauty; alaṅkāra and aesthetic dimension of worship</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Ujjvala</td><td className="py-2 pr-3 font-devanagari text-ink-muted">उज्ज्वल</td><td className="py-2 text-ink-light">Brilliant clarity; ujjvala-jñāna and crystal-clear perception</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">7</td><td className="py-2 pr-3 font-medium">Vibhāvara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">विभावर</td><td className="py-2 text-ink-light">Night illumination; practices for maintaining inner light in darkness</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">8</td><td className="py-2 pr-3 font-medium">Suprabha</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सुप्रभ</td><td className="py-2 text-ink-light">Beautiful radiance; saubhāgya and auspicious luminous blessings</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">9</td><td className="py-2 pr-3 font-medium">Atidīpta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अतिदीप्त</td><td className="py-2 text-ink-light">Supreme blaze; advanced practices for maximum tejas manifestation</td></tr>
              <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">10</td><td className="py-2 pr-3 font-medium">Svayamprakāśa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">स्वयम्प्रकाश</td><td className="py-2 text-ink-light">Self-luminosity; realizing the self-effulgent nature of consciousness</td></tr>
            </tbody>
          </table></div>
        </Section>

        <SectionDivider className="my-8" />

        <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली">
          <p>The Dīptāgama is structured around the <strong>Chatuṣpāda</strong> — the Four Pādas:</p>
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
          <p>The Kriyā Pāda emphasizes <strong>luminous rituals</strong> — practices that generate, preserve, and radiate spiritual light:</p>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Temple Architecture (Ālaya-Nirmāṇa)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Light-Optimized Design:</strong> Temples designed to maximize natural light penetration into the garbhagṛha</li>
            <li><strong>Dīpta-Vimāna:</strong> Towers with reflective surfaces (polished stone, mica) that catch and radiate sunlight</li>
            <li><strong>Mirror Installations:</strong> Strategic placement of mirrors to multiply and distribute sacred light</li>
          </ul>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Icon-Making & Installation (Mūrti-Pratiṣṭhā)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Tejo-Mūrti:</strong> Icons polished to high reflectivity; crystal and clear quartz preferred for their light-transmitting properties</li>
            <li><strong>Netra-Dīpa:</strong> Special emphasis on the eyes as lamps — the "eye-opening" ritual includes lighting lamps reflected in the deity's eyes</li>
            <li><strong>Jyotir-Liṅga:</strong> Installation of perpetual lamps (nanda-dīpa) that must never be extinguished</li>
          </ul>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Ritual Worship (Pūjā, Homa, Japa)</h4>
          <p>The Dīptāgama prescribes <strong>Ṣoḍaśopacāra Pūjā</strong> with special emphasis on <strong>dīpa-pūjā</strong> (lamp worship) — offering hundreds or thousands of lamps arranged in sacred geometric patterns. The <strong>tejo-homa</strong> uses specially prepared fuels (ghee, camphor, sandal) that burn with brilliant, smokeless flames.</p>
          <Verse
            sanskrit="दीप्तं दीप्तेन संयुक्तं दीप्तागमपरायणः ।
तेजसा तेज आप्नोति शिवसायुज्यमेव च ॥"
            transliteration="Dīptaṃ dīptena saṃyuktaṃ dīptāgamaparāyaṇaḥ | Tejasā teja āpnoti śivasāyujyameva ca ||"
            meaning="The blazing one, united with blaze through devotion to the Diptagama, attains blazing light and Shiva-Sayujya."
          />
        </Section>

        <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
          <p>Conduct emphasizing <strong>maintenance of inner light</strong>:</p>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Brāhma Muhūrta</strong> — Rising before sunrise to catch the first rays; sūrya-namaskāra</li>
            <li><strong>Dīpa-Snāna</strong> — Ritual bathing in water infused with sunlight (sūrya-charged water)</li>
            <li><strong>Tri-sandhyā Dīpa</strong> — Lighting lamps at dawn, noon, and dusk as offerings to the inner Shiva</li>
            <li><strong>Tejas-Vrata</strong> — Vow to maintain clarity of mind and purity of intention in all actions</li>
          </ul>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
          <p>Special emphasis on <strong>Kārttikai Dīpa</strong> (festival of lights) and monthly <strong>tejo-vratas</strong> involving continuous lamp offerings.</p>
        </Section>

        <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
          <p>The Yoga Pāda presents <strong>tejo-yoga</strong> — the yoga of blazing radiance:</p>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Dīpta Emphasis)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yama</strong> — Ahiṃsā interpreted as not obscuring others' inner light</li>
            <li><strong>Niyama</strong> — Svādhyāya includes study of light-related mantras and solar hymns</li>
            <li><strong>Āsana</strong> — Sūrya-namaskāra as moving meditation; āsanas facing east toward rising sun</li>
            <li><strong>Prāṇāyāma</strong> — Sūrya-bheda prāṇāyāma; breath as carrier of solar fire into the body</li>
            <li><strong>Pratyāhāra</strong> — Withdrawing senses into the ājñā-cakra (the inner light between eyebrows)</li>
            <li><strong>Dhāraṇā</strong> — Concentration on the inner flame (jyoti) at the heart or forehead</li>
            <li><strong>Dhyāna</strong> — Meditation on Shiva as mass of infinite light (tejo-rāśi)</li>
            <li><strong>Samādhi</strong> — Dīpta-samādhi: absorption in self-luminous consciousness</li>
          </ul>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Trāṭaka and Light Meditation</h4>
          <p>The Dīptāgama extensively describes <strong>trāṭaka</strong> (candle-gazing) as a primary yogic technique — gazing at a flame until the inner light becomes more brilliant than the outer flame.</p>
        </Section>

        <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
          <p>The Jñāna Pāda presents the <strong>Pati-Paśu-Pāśa</strong> doctrine through the lens of <strong>light metaphysics</strong>:</p>
          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-vermillion mb-2">I. Pati — The Self-Luminous Lord</h5>
            <p className="text-ink-light text-sm">Shiva as <strong>Svayam-prakāśa</strong> — self-luminous, needing no other light to be known. He is the light by which all else is seen, yet He is seen by no other light.</p>
          </div>
          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu — The Reflected Light</h5>
            <p className="text-ink-light text-sm">The soul is <strong>pratibimba-tejas</strong> — reflected light. It appears dim only because of the covering (Mala), but its intrinsic luminosity is identical to Shiva's.</p>
          </div>
          <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
            <h5 className="font-display font-bold text-sage mb-2">III. Pāśa — Darkness as Absence of Light</h5>
            <p className="text-ink-light text-sm">The three Malas are <strong>not positive entities</strong> but absences of light — like shadows. They have no independent existence; they vanish when the light of knowledge dawns.</p>
          </div>
          <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Prakāśa-Sāyujya</h4>
          <p>Liberation as <strong>Prakāśa-sāyujya</strong> — union with the Infinite Light. The soul realizes it was never truly dark, only apparently so, and shines forth with the same brilliance as Shiva.</p>
        </Section>

        <SectionDivider className="my-8" />

        <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
          <Verse
            sanskrit="दीप्तं दीप्तायते यस्माद् दीप्तं ज्ञानं प्रकाशते ।
दीप्तागमसमाश्रित्य तमो नाशं व्रजेत् सदा ॥"
            transliteration="Dīptaṃ dīptāyate yasmād dīptaṃ jñānaṃ prakāśate | Dīptāgamasamāśritya tamo nāśaṃ vrajet sadā ||"
            meaning="That which is blazing causes blazing — for blazing knowledge illuminates. Taking refuge in the Diptagama, darkness is ever destroyed."
          />
          <Verse
            sanskrit="ऊरुस्थं दीप्तमाख्यातं तेजोमयमनुत्तमम् ।
तेजस्वी जायते यस्मात् स शिवः परमं पदम् ॥"
            transliteration="Ūrusthaṃ dīptamākhyātaṃ tejomayamanuttamam | Tejasvī jāyate yasmāt sa śivaḥ paramaṃ padam ||"
            meaning="The Dipta, proclaimed as established at the thigh, is supreme and full of light. He from whom the radiant one is born — that is Shiva, the supreme abode."
          />
        </Section>

        <SectionDivider className="my-8" />

        <Section id="tattvas" title="4. The 36 Tattvas According to Dīptāgama" hindiTitle="४. दीप्तागम के अनुसार ३६ तत्त्व">
          <p>The <strong>Ṣaṭtriṃśat Tattva</strong> — from the supreme light of Shiva to the reflected light of matter.</p>
          <TattvaTable />
        </Section>

        <SectionDivider className="my-8" />

        <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
          <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Radiant Path</h4>
          <p>The Dīptāgama teaches that <strong>spiritual practice is essentially the removal of obstructions to light</strong> — not the creation of something new, but the revelation of what was always present.</p>

          <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'Critical editions of Shaiva Agamas.', url: 'https://www.ifpindia.org' },
              { name: 'IGNCA, New Delhi', desc: 'Digital repository of manuscripts.', url: 'https://ignca.gov.in' },
              { name: 'Muktabodha Indological Research Institute', desc: 'Digital library of Shaiva texts.', url: 'https://muktabodha.org' },
              { name: 'Shaiva Agama Research Centre, Chennai', desc: 'Preservation and teaching of Agamas.', url: 'https://shaivam.org' },
            ].map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-surface border border-border rounded-lg hover:border-vermillion/30 transition-colors">
                <p className="font-display font-semibold text-ink text-sm">{s.name}</p>
                <p className="text-ink-faint text-[12px] mt-1 leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>

          <Verse
            sanskrit="ॐ नमः शिवाय ।
दीप्तागमं समाश्रित्य तेजसां तेज आप्नुयात् ।
पशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
            transliteration="Oṃ Namaḥ Śivāya | Dīptāgamaṃ samāśritya tejasāṃ teja āpnuyāt | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
            meaning="Om Namah Shivaya. Taking refuge in the Diptagama, one attains the light of lights — for liberation from Pashu-bonds, for Shiva-Sayujya."
          />
        </Section>
        </div>
      </div>
    </div>
  );
}