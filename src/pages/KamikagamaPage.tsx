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

export default function KamikagamaPage({ language }: { language: string }) {
  // ✅ HOOKS AT TOP - FIRST THING IN COMPONENT
  const { pageContent, isReady, contentRef } = usePageContent();
  const [highlightedLine, setHighlightedLine] = useState<number>(-1);

  // ✅ THEN other logic
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Kāmikāgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">कामिकागम</p>
          <p className="text-ink-muted mt-2 text-lg">The First of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु प्रथमः</p>
        </motion.div>

        {/* ✅ Audio with full page content */}
        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="कामिकागम — Complete Page Audio Narration"
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

        {/* ✅ WRAP ALL CONTENT IN contentRef */}
        <div ref={contentRef}>

          {/* ===== SECTION 1: INTRODUCTION ===== */}
          <Section id="intro" title="1. Introduction & Scriptural Provenance" hindiTitle="१. प्रस्तावना एवं शास्त्रीय उत्पत्ति">
            <p>The <strong>Kamika Agama</strong> (कामिकागम) occupies the <strong>first position</strong> among the twenty-eight primary Shaiva Āgamas. The term "Kamika" derives from the Sanskrit root "kam" meaning "desire" or "wish," thus rendering the title as "That Which Fulfills Desires." This nomenclature is profoundly significant: it suggests that the Āgama is not merely a philosophical treatise but a practical science for actualizing the deepest aspirations of the human soul—liberation and union with Shiva.</p>

            <p>The <strong>Shaiva Siddhanta</strong> tradition represents one of the most systematic, philosophically rigorous, and practically comprehensive schools of Hindu theology. At its foundation lie these twenty-eight primary Shaiva Āgamas, collectively representing the complete body of Shiva's revelation to humanity.</p>

            <Verse
              sanskrit="कामिकं नाम तत्र शास्त्रं परमसिद्धि साधकम् ।
शिवमोक्ष प्रदायिनं सर्व सिद्धांत समुद्धवम् ॥"
              transliteration="Kamikam nama tatra śāstram paramasiddhi sādhakam |
Śivamoḳsa pradāyinam sarva siddhānta samuddhvam ||"
              meaning="The Kamika is that supreme scripture which accomplishes perfect realization. It grants liberation in Shiva and contains all philosophical traditions."
            />
          </Section>

          <SectionDivider className="my-8" />

          {/* ===== SECTION 2: CHATUSHPADA ===== */}
          <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली">
            <p>Like all primary Shaiva Āgamas, the Kamika Agama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद) — the Four Pādas or "quarters" that together constitute the complete path from ignorance to liberation:</p>
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
          <Section id="kriya" title="2.1 Kriyā Pāda — The Path of Sacred Action" hindiTitle="२.१ क्रिया पाद">
            <p>The Kriyā Pāda of the Kamika Agama is its most extensive section, reflecting the tradition's foundational conviction that ritual action, when properly understood and executed, is not mere mechanical performance but a sophisticated technology for spiritual transformation.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Temple Architecture (Ālaya-Nirmāṇa)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Bhū-parīkṣā</strong> — Land selection through soil testing and directional auspiciousness</li>
              <li><strong>Vāstu-Puruṣa Maṇḍala</strong> — The sacred geometric grid governing temple layout</li>
              <li><strong>Temple Orientation</strong> — Directional alignment and sacred geometry principles</li>
              <li><strong>Sanctum Design</strong> — The Garbhagṛha (inner sanctum) specifications and proportions</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Icon Installation (Mūrti-Pratiṣṭhā)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Icon Creation</strong> — Specifications for divine image creation</li>
              <li><strong>Prāṇa-pratiṣṭhā</strong> — Life-infusion ceremony awakening consciousness in the image</li>
              <li><strong>Netra-unmīlana</strong> — Eye-opening ritual activating the deity's vision</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Daily Worship (Nitya-Pūjā-Vidhi)</h4>
            <p>The Kamika prescribes comprehensive daily worship protocols including the Ṣoḍaśopacāra (sixteen-step worship), precise mantra recitation, and ritual gestures performed with complete mental presence and devotional attitude.</p>
          </Section>

          <SectionDivider className="my-8" />

          {/* CHARYA PADA */}
          <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद">
            <p>The Caryā Pāda establishes the ethical and behavioral framework for the spiritual life. It embodies the principle that every moment, every action, every relationship can become an opportunity for deepening one's connection with Shiva.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Key Teachings</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Daily Spiritual Routines</strong> — Morning and evening practices grounding the spiritual life</li>
              <li><strong>Ethical Guidelines</strong> — Behavioral conduct toward different categories of people</li>
              <li><strong>Behavioral Ethics</strong> — Yama and Niyama (ethical restraints and positive observances) adapted to Shaiva context</li>
              <li><strong>Festival Observances</strong> — Seasonal and sacred day observances strengthening community worship</li>
            </ul>

            <p className="mt-4">The Caryā Pāda transforms daily life into worship; it teaches that spirituality is not confined to temple rituals but permeates every dimension of existence—eating, sleeping, working, interacting with others.</p>
          </Section>

          <SectionDivider className="my-8" />

          {/* YOGA PADA */}
          <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद">
            <p>The Yoga Pāda presents a sophisticated system of meditation and yogic practice specifically calibrated to the Shaiva understanding of consciousness and the tattva system. Unlike philosophical speculation about Shiva, the Yoga Pāda is eminently practical—it provides step-by-step instructions for inner development leading to direct experiential realization.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Eight Limbs of Yoga</h4>
            <p>The Kamika Agama describes the eight-fold path of yoga (Aṣṭāṅga Yoga) adapted to Shaiva context:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Yama</strong> — Ethical restraints (non-violence, truthfulness, non-stealing, continence, non-possession)</li>
              <li><strong>Niyama</strong> — Positive observances (purity, contentment, austerity, study, surrender to Shiva)</li>
              <li><strong>Āsana</strong> — Physical postures stabilizing the body for meditation</li>
              <li><strong>Prāṇāyāma</strong> — Breath control regulating life-force energy</li>
              <li><strong>Pratyāhāra</strong> — Sense withdrawal turning attention inward</li>
              <li><strong>Dhāraṇā</strong> — Concentration focusing the mind on a single point</li>
              <li><strong>Dhyāna</strong> — Meditation sustained focus on the object of concentration</li>
              <li><strong>Samādhi</strong> — Perfect absorption complete merger with the object of meditation</li>
            </ol>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Chakra System and Kuṇḍalinī Awakening</h4>
            <p>The Yoga Pāda especially emphasizes the chakra system and the progressive awakening of kundalini shakti from the root chakra at the base of the spine up through the seven major energy centers to the crown chakra. As kundalini rises through each chakra, the practitioner experiences progressively refined states of consciousness and expanded awareness.</p>
          </Section>

          <SectionDivider className="my-8" />

          {/* JNANA PADA */}
          <Section id="jnana" title="2.4 Jñāna Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान पाद">
            <p>The Jñāna Pāda represents the philosophical apex of the Kamika Agama, presenting the comprehensive metaphysical framework of Shaiva Siddhanta. It answers the fundamental question: "What is the ultimate truth about reality, consciousness, and liberation?"</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Three Eternal Realities</h4>
            <div className="space-y-3 mt-2">
              <div className="border-l-4 border-vermillion pl-4">
                <p className="font-semibold text-ink">Pati — The Lord (Shiva)</p>
                <p className="text-ink-light text-sm">Absolutely transcendent yet intimately present in all things, infinitely powerful yet infinitely compassionate. The sole reality from which all creation flows.</p>
              </div>
              <div className="border-l-4 border-turmeric pl-4">
                <p className="font-semibold text-ink">Paśu — The Individual Soul</p>
                <p className="text-ink-light text-sm">Eternally real and distinct from Shiva, eternally conscious, yet eternally bound by ignorance (Malas) until grace brings liberation.</p>
              </div>
              <div className="border-l-4 border-sage pl-4">
                <p className="font-semibold text-ink">Pāśa — The Bonds of Limitation</p>
                <p className="text-ink-light text-sm">The three Malas (Āṇava, Māyā, Kārma) that obscure the soul's recognition of its unity with Shiva and keep it bound in limitation.</p>
              </div>
            </div>

            <h4 className="font-display font-semibold text-ink mt-6 mb-2">The Three Malas</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Āṇava Mala</strong> (आणव मल) — Finitude. The false sense of being separate and limited individual consciousness.</li>
              <li><strong>Māyā Mala</strong> (माया मल) — The veiling power that creates multiplicity from unity, manifesting the cosmos.</li>
              <li><strong>Kārma Mala</strong> (कर्म मल) — The accumulated consequences of past actions binding the soul to cycles of rebirth.</li>
            </ul>

            <p className="mt-4"><strong>Liberation</strong> occurs when Shiva's grace removes these Malas in their proper sequence, and the liberated soul attains Śiva-sāyujya—intimate union with Shiva while maintaining eternal individuality.</p>
          </Section>

          <SectionDivider className="my-8" />

          {/* VERSES */}
          <Section id="verses" title="3. Core Verses & Sacred Teachings" hindiTitle="३. मूल श्लोक">
            <Verse
              sanskrit="कामिकं नाम तत्र शास्त्रं परमसिद्धि साधकम् ।
शिवमोक्ष प्रदायिनं सर्व सिद्धांत समुद्धवम् ॥"
              transliteration="Kamikam nama tatra śāstram paramasiddhi sādhakam |
Śivamoḳsa pradāyinam sarva siddhānta samuddhvam ||"
              meaning="The Kamika is the supreme scripture which accomplishes perfect realization. It grants liberation in Shiva and contains all philosophical traditions."
            />

            <Verse
              sanskrit="पतिः पशुः पाशः शाश्वतः सदा च ।
मलत्रय विनिर्वृत्तः शिव सायुज्यं परं पदम् ॥"
              transliteration="Patiḥ paśuḥ pāśaḥ śāśvataḥ sadā ca |
Malatraya vinirvṛttaḥ śiva sāyujyaṃ paraṃ padam ||"
              meaning="The Lord, the soul, and the bonds are eternal and real. Freed from the three impurities, the soul attains the supreme state of union with Shiva."
            />

            <Verse
              sanskrit="शिव ग्रहणम् साक्षात् मोक्ष मार्गः अनुत्तमः ।
कामिक आगम वचनात् सर्व सिद्धि प्रदायकः ॥"
              transliteration="Śiva grahaṇam sākṣāt mokṣa mārgaḥ anuttamaḥ |
Kamika āgama vacanāt sarva siddhi pradāyakaḥ ||"
              meaning="The direct realization of Shiva is the supreme path to liberation. Through the words of the Kamika Agama, all perfections are granted."
            />
          </Section>

          <SectionDivider className="my-8" />

          {/* TATTVAS */}
          <Section id="tattvas" title="4. The 36 Tattvas — Complete Map of Consciousness" hindiTitle="४. छत्तीस तत्त्व">
            <p>The Kamika Agama describes 36 Tattvas as the complete map of existence, from the most subtle to the most gross levels of reality. These represent the complete range of creation from pure consciousness down to material manifestation.</p>
            <TattvaTable />
          </Section>

          <SectionDivider className="my-8" />

          {/* CONCLUSION */}
          <Section id="conclusion" title="5. Conclusion & Access to the Text" hindiTitle="५. समापन">
            <p>The Kamika Agama represents the foundational text upon which much of later Shaiva theology and practice is built. It serves as both a philosophical treatise of extraordinary depth and a practical manual for spiritual transformation.</p>

            <p>The complete text is available through various scholarly repositories including the French Institute of Indology in Pondicherry, the Oriental Research Institute in Mysore, and increasingly through digital platforms making this sacred knowledge accessible to sincere seekers around the world.</p>

            <p>May this sacred teaching guide all beings toward the realization of their true nature as manifestations of infinite Shiva consciousness.</p>

            <div className="mt-6 p-4 bg-vermillion/5 border border-vermillion/20 rounded-lg">
              <p className="font-devanagari text-center text-ink font-semibold">ॐ नमः शिवाय</p>
              <p className="text-center text-ink-muted italic mt-2">Om Namah Shivaya</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}