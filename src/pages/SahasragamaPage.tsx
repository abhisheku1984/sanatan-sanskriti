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

export default function SahasragamaPage({ language }: { language: string }) {
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Sahasragama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">सहस्रागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Eighth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु अष्टमः — सहस्र ज्ञान एवं अनंत रूपों का गहन अध्ययन</p>
        </motion.div>

        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="सहस्रागम — Complete Page Audio Narration"
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
            <p>The <strong>Sahasragama</strong> (सहस्रागम) occupies the <strong>eighth position</strong> among the twenty-eight primary Shaiva Āgamas. Its name derives from <em>Sahasra</em> (सहस्र) meaning "thousand," "innumerable," "infinite multiplicity" — thus <strong>Sahasragama is "The Scripture of the Thousandfold"</strong> or "The Agama of Infinite Multiplicity." This name reflects its profound teaching that Shiva manifests in innumerable forms (sahasra-mūrti), and the practitioner must learn to perceive the One in the many.</p>

            <Verse
              sanskrit="शिवात् सहस्रः, सहस्राद् अनंतः, अनन्ताद् विश्वम् ।
एवं परम्परा-प्राप्तं सहस्रागममनुत्तमम् ॥"
              transliteration="Śivāt Sahasraḥ, Sahasrād Anantaḥ, Anantād Viśvam | Evaṃ paramparā-prāptaṃ Sahasrāgamam anuttamam ||"
              meaning="From Shiva to Sahasra, from Sahasra to Ananta, and from Ananta to the Universe — thus was the supreme Sahasragama received through the sacred lineage of transmission."
            />

            <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Vāmadeva Face</h3>
            <p>The Sahasragama emanates from <strong>Vāmadeva</strong> (वामदेव), the northward-facing aspect of Sadāshiva, representing <strong>preservation, sustenance, and the power of knowledge</strong>. Associated with the element of <strong>Water (Jala)</strong>, the color <strong>red/crimson</strong>, and the sustaining function.</p>

            <p>The original scope is <strong>one lakh (1,00,000) shlokas</strong>.</p>

            <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Nābhi (Navel)</h3>
            <p>In the cosmic body of Sadāshiva, the Sahasragama is assigned to the <strong>Nābhi (नाभि) — the navel</strong>:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Center of Manifestation:</strong> The navel is the center from which the thousand-petaled lotus of creation unfolds — representing this Agama's focus on the thousandfold (sahasra) manifestations of Shiva emanating from the central source.</li>
              <li><strong>Thousandfold Expansion:</strong> From the navel, all limbs extend — symbolizing how the infinite Shiva expands into innumerable forms while remaining one.</li>
              <li><strong>Cosmic Connection:</strong> The navel marks the point of separation from the cosmic mother at birth — representing the soul's journey from unity to multiplicity and back.</li>
            </ul>

            <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Ten Upāgamas (उपागम)</h3>
            <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
              <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upāgama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
              <tbody>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Sahasra-tara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सहस्रतर</td><td className="py-2 text-ink-light">More thousandfold than thousand; analysis of infinite divine forms</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Ananta</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अनंत</td><td className="py-2 text-ink-light">The infinite; boundless nature of Shiva's manifestations</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Viśva-rūpa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">विश्वरूप</td><td className="py-2 text-ink-light">Universal form; cosmic vision of Shiva's all-pervading body</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Sahasra-śīrṣa</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सहस्रशीर्ष</td><td className="py-2 text-ink-light">Thousand-headed; the cosmic Purusha with infinite heads</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Nānā-mūrti</td><td className="py-2 pr-3 font-devanagari text-ink-muted">नानामूर्ति</td><td className="py-2 text-ink-light">Many forms; classification of Shiva's manifold manifestations</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Anekākāra</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अनेकाकार</td><td className="py-2 text-ink-light">Multiple forms; theological analysis of divine multiplicity</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">7</td><td className="py-2 pr-3 font-medium">Viśva-tattva</td><td className="py-2 pr-3 font-devanagari text-ink-muted">विश्वतत्त्व</td><td className="py-2 text-ink-light">Universal categories; the 36 Tattvas as infinite expressions</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">8</td><td className="py-2 pr-3 font-medium">Sahasra-nāma</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सहस्रनाम</td><td className="py-2 text-ink-light">Thousand names; the sacred nomenclature of Shiva's attributes</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">9</td><td className="py-2 pr-3 font-medium">Ananta-nāma</td><td className="py-2 pr-3 font-devanagari text-ink-muted">अनंतनाम</td><td className="py-2 text-ink-light">Infinite names; beyond enumeration to the nameless essence</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">10</td><td className="py-2 pr-3 font-medium">Sarva-vyāpin</td><td className="py-2 pr-3 font-devanagari text-ink-muted">सर्वव्यापिन</td><td className="py-2 text-ink-light">All-pervading; Shiva's omnipresence through infinite forms</td></tr>
              </tbody>
            </table></div>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
            <p>The Sahasragama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद):</p>
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
            <p>The Kriyā Pāda of the Sahasragama emphasizes Sahasra-Pūjā — worship of Shiva in his thousand forms, using thousand-fold offerings and recognizing the divine in infinite manifestations.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Thousandfold Ritual Worship (Sahasra-Pūjā)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sahasra-nāma-nyāsa</strong> — Placement of Shiva's thousand names on the body, recognizing each name as a doorway to a specific divine quality</li>
              <li><strong>Viśva-rūpa-darśana</strong> — Meditative visualization of Shiva's cosmic form with infinite heads, eyes, and limbs pervading all existence</li>
              <li><strong>Anekārcana</strong> — Multi-form worship — offering to Shiva in multiple forms simultaneously, recognizing each as complete</li>
              <li><strong>Sahasra-homa</strong> — Thousand-fold fire sacrifice where each offering represents one of Shiva's infinite manifestations</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Temple Architecture (Ālaya-Nirmāṇa)</h4>
            <p>Temples designed according to the Sahasragama feature multiple sanctums (aikya-sthāna) representing different forms of Shiva, connected by corridors that symbolize the unity underlying multiplicity. The vimāna rises in thousand-fold tiered layers.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Iconography of the Thousandfold</h4>
            <p>The Sahasragama prescribes icons showing Shiva with multiple arms, heads, and eyes — each additional limb representing an expanded dimension of divine power. The Sahasraśīrṣa (thousand-headed) form is particularly emphasized.</p>

            <Verse
              sanskrit="सहस्रं सहस्रतो यस्मात् सहस्रं रूपमीश्वरः ।
सहस्रागमसम्प्रोक्तं सहस्रं ज्ञानमाप्नुयात् ॥"
              transliteration="Sahasraṃ sahasrato yasmāt sahasraṃ rūpam īśvaraḥ | Sahasrāgamasamproktaṃ sahasraṃ jñānam āpnuyāt ||"
              meaning="From whom thousands upon thousands arise — the Lord of thousand forms. One who knows the thousand as taught in the Sahasragama attains thousandfold knowledge."
            />
          </Section>

          <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
            <p>The Caryā Pāda establishes conduct based on the recognition of multiplicity-in-unity — understanding that every being is one of Shiva's thousand forms deserving reverence.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Sahasra-Nitya-Krama)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Brāhma Muhūrta</strong> — Rising before sunrise; visualization of the thousand rays of dawn as Shiva's thousand eyes opening upon the world</li>
              <li><strong>Viśva-smarana</strong> — Universal remembrance; seeing Shiva in every person, animal, plant, and object encountered throughout the day</li>
              <li><strong>Tri-sandhyā Viśva-pūjā</strong> — Twilight prayers offered to all directions simultaneously, recognizing Shiva's thousandfold presence everywhere</li>
              <li><strong>Sahasra-praṇāma</strong> — Thousand-fold prostration — physically or mentally bowing to the infinite forms of Shiva in all beings</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
            <p>The Sahasragama prescribes special observances during full moon (when the moon's thousand rays are complete) and during festivals honoring Shiva's cosmic (viśva) form.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Viśva-sevā (Universal Service)</h4>
            <p>Service to all beings as service to Shiva — feeding the hungry, healing the sick, and protecting the vulnerable as acts of worship to Shiva's thousand forms.</p>
          </Section>

          <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
            <p>The Yoga Pāda presents Sahasra-yoga — the yoga of infinite multiplicity that trains the mind to perceive unity within diversity.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Sahasra Emphasis)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Yama-Niyama</strong> — Non-violence toward all forms of Shiva; truthfulness as alignment with the one reality behind all appearances; non-stealing as respecting all as Shiva's property</li>
              <li><strong>Āsana</strong> — Viśvāsana (cosmic posture) — standing with arms extended in all directions, embodying Shiva's all-pervading form</li>
              <li><strong>Prāṇāyāma</strong> — Sahasra-kumbhaka — breath retention visualizing prāṇa expanding to fill the thousand directions of space</li>
              <li><strong>Pratyāhāra</strong> — Withdrawal from identification with any single form into the formless awareness that contains all forms</li>
              <li><strong>Dhāraṇā-Dhyāna-Samādhi</strong> — Progressive meditation: single form (saguṇa) → multiple forms (sahasra-guṇa) → formless container (nirguṇa) → Shiva-tattva</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Viśva-rūpa Dhyāna</h4>
            <p>A unique practice in the Sahasragama: meditation on the Viśva-rūpa (cosmic form) of Shiva — visualizing the divine body extending through all space, with every star as an eye, every galaxy as a limb, and all beings as cells within the cosmic body.</p>

            <Verse
              sanskrit="सहस्रं सहस्रतो यस्मात् सहस्रं बोधयेत् सदा ।
सहस्रागमसमाश्रित्य सहस्रं योगमाप्नुयात् ॥"
              transliteration="Sahasraṃ sahasrato yasmāt sahasraṃ bodhayet sadā | Sahasrāgamasamāśritya sahasraṃ yogam āpnuyāt ||"
              meaning="From whom thousands upon thousands arise — may He ever awaken the thousandfold. Taking refuge in the Sahasragama, one attains thousandfold yoga."
            />
          </Section>

          <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
            <p>The Jñāna Pāda presents the <strong>Pati-Paśu-Pāśa</strong> doctrine with emphasis on the metaphysics of multiplicity-in-unity.</p>

            <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
              <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The Thousandfold Lord</h5>
              <p className="text-ink-light text-sm">Shiva as Sahasra-mūrti — the Lord of thousand forms. His oneness does not exclude multiplicity; rather, His unity is so profound that it effortlessly contains infinite diversity. He is the one thread (sūtra) on which all forms are strung like pearls.</p>
            </div>

            <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
              <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Soul in the Thousandfold</h5>
              <p className="text-ink-light text-sm">The individual soul appears as one among many, but its true nature is the same infinite consciousness that pervades all forms. The soul's journey is from perceiving itself as separate (one among thousands) to knowing itself as the one consciousness within all.</p>
            </div>

            <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
              <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Bonds of Separation</h5>
              <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
                <li><strong>Āṇava Mala</strong> — The causal ignorance that makes the infinite appear as one finite being among many — the feeling of "I am only this one" rather than "I am the one within all"</li>
                <li><strong>Māyā Mala</strong> — The substance of limitation that creates the appearance of separate forms — like waves that seem distinct but are all made of the same water</li>
                <li><strong>Kārma Mala</strong> — The residue of action that binds the soul to specific forms and experiences, preventing the recognition of universal identity</li>
              </ul>
            </div>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Sahasra-sāyujya</h4>
            <p>The Sahasragama describes liberation as <strong>Sahasra-sāyujya</strong> — union with the Thousandfold. The liberated soul does not lose its individuality but expands to recognize itself in all beings. It becomes the one thread (sūtra-ātman) that runs through the thousand forms.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
            <Verse
              sanskrit="सहस्रं सहस्रतो यस्मात् सहस्रं रूपमीश्वरः ।
सहस्रागमसम्प्रोक्तं सहस्रं ज्ञानमाप्नुयात् ॥"
              transliteration="Sahasraṃ sahasrato yasmāt sahasraṃ rūpam īśvaraḥ | Sahasrāgamasamproktaṃ sahasraṃ jñānam āpnuyāt ||"
              meaning="From whom thousands upon thousands arise — the Lord of thousand forms. One who knows the thousand as taught in the Sahasragama attains thousandfold knowledge."
            />

            <Verse
              sanskrit="नाभिस्थं सहस्रमाख्यातं सहस्रज्ञानदायकम् ।
सहस्रेण विना मोक्षो न सिद्ध्यति कथञ्चन ॥"
              transliteration="Nābhisthaṃ sahasramākhyātaṃ sahasrajñānadāyakam | Sahasreṇa vinā mokṣo na siddhyati kathañcana ||"
              meaning="The Sahasra, proclaimed as established at the navel, grants thousandfold knowledge. Without the Thousandfold, liberation is in no way accomplished."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="tattvas" title="4. The 36 Tattvas According to Sahasragama" hindiTitle="४. सहस्रागम के अनुसार ३६ तत्त्व">
            <p>The Sahasragama presents the <strong>Ṣaṭtriṃśat Tattva</strong> as the thousandfold expression of Shiva's unity. Each Tattva is not merely a category but a doorway to the infinite.</p>
            <TattvaTable />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
            <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Thousandfold Spirit of Sahasragama</h4>
            <p>The Sahasragama occupies a distinctive position among the twenty-eight Shaiva Āgamas by revealing the invisible architecture of infinite divine manifestation:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Multiplicity Metaphysics (Sahasra-tattva-jñāna)</strong> — Its Jñāna and Yoga Pādas provide the most sophisticated framework for understanding how the One becomes many and how the practitioner can perceive unity within diversity.</li>
              <li><strong>Infinite Precision in Ritual</strong> — The Kriyā and Caryā Pādas establish that ritual efficacy depends on recognizing Shiva in every form, every offering, and every being.</li>
            </ul>
            <p className="mt-3">This focus makes the Sahasragama particularly relevant for the advanced practitioner — it affirms that spiritual progress is measured by the expansion of awareness to embrace all forms as Shiva, and that the greatest realization is the recognition of oneself in all beings.</p>

            <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {[
                { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'Houses critical editions and manuscript fragments of the Sahasragama.', url: 'https://www.ifpindia.org' },
                { name: 'IGNCA (Indira Gandhi National Centre for the Arts)', desc: 'Digital repository with manuscript scans.', url: 'https://ignca.gov.in' },
                { name: 'Shaiva Agama Research Centre, Chennai', desc: 'References to Sahasragama principles in priest training materials.', url: 'https://shaivam.org' },
                { name: 'Muktabodha Indological Research Institute', desc: 'Searchable database includes Sahasragama-related manuscripts.', url: 'https://muktabodha.org' },
              ].map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-surface border border-border rounded-lg hover:border-vermillion/30 transition-colors">
                  <p className="font-display font-semibold text-ink text-sm">{s.name}</p>
                  <p className="text-ink-faint text-[12px] mt-1 leading-relaxed">{s.desc}</p>
                </a>
              ))}
            </div>

            <Verse
              sanskrit="ॐ नमः शिवाय ।
सहस्रागमं समाश्रित्य सहस्रं ज्ञानमाप्नुयात् ।
पशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
              transliteration="Oṃ Namaḥ Śivāya | Sahasrāgamaṃ samāśritya sahasraṃ jñānam āpnuyāt | Paśupāśavimuktryarthaṃ śivasāyujyasiddhaye ||"
              meaning="Om Namah Shivaya. Taking refuge in the Sahasragama, one attains thousandfold knowledge — for liberation from the bonds of the Pashu, for the attainment of union with Shiva."
            />
          </Section>
        </div>
      </div>
    </div>
  );
}